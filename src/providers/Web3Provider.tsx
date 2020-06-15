import React, { Component, createContext, ReactNode } from 'react'
import Web3 from 'web3'
import { getWeb3, EProvider } from '../services/Web3Service'
import NetworkInfo, { getNetworkInfo } from '../models/NetworkInfo'

export interface Web3ProviderProps {
  state: {
    provider?: EProvider
    web3?: Web3
    account?: string
    networkInfo?: NetworkInfo
    requiredNetworkId?: number
  }
  actions: {
    setProvider: (
      provider: EProvider,
      onStateChanged?: (account?: string) => void
    ) => Promise<void>
    registerOnAccountsChange: (handleOnAccountsChange: () => void) => void
  },
  requiredNetworkId?: number,
  requiredChainId?: number,
  onNetworkChangeWithAccount: () => void
}

const defaultState: Web3ProviderState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkInfo: undefined,
}

export const Web3Store = createContext<Web3ProviderProps>({
  state: defaultState,
  actions: {
    setProvider: (): Promise<void> => Promise.resolve(),
    registerOnAccountsChange: (): void => { },
  },
  requiredNetworkId: undefined,
  requiredChainId: undefined,
  onNetworkChangeWithAccount: (): void => { }
})

interface Web3ProviderState {
  provider?: EProvider
  web3?: Web3
  account?: string
  networkInfo?: NetworkInfo
}

const getAccountFromAccountsEth = (accounts: string[] | string): string | undefined => {
  let account: string
  if (Array.isArray(accounts)) [account] = accounts
  else account = accounts
  return account
}

/**
 * The provider will not read the account when a requiredNetworkId was provided AND
 * it does not match the networkId of current networkInfo. Same applies to chainId.
 * Nothing happens if the requiredNetworkId was not specified
 * @param requiredNetworkId given on the props of the provider
 * @param requiredChainId given on the props of the provider
 * @param networkInfo obtained from the wallet
 */
const canReadAccount = (
  requiredNetworkId?: number,
  requiredChainId?: number,
  networkInfo?: NetworkInfo
): Boolean => {
  // the consumer did not provide enough information to validate the network, so we do not check
  if (!requiredNetworkId || !networkInfo) return true
  if (requiredNetworkId === networkInfo?.networkId) {
    // only when chainId is provided we compare it
    if (requiredChainId) return requiredChainId === networkInfo?.chainId
    return true
  }
  return false
}

class Web3Provider extends Component<{}, Web3ProviderState> {
  constructor(props: Web3ProviderProps) {
    super(props)
    this.state = defaultState
    this.requiredNetworkId = props.requiredNetworkId
    this.requiredChainId = props.requiredChainId
    this.onNetworkChangeWithAccount = props.onNetworkChangeWithAccount
    this.setProvider = this.setProvider.bind(this)
    this.registerOnAccountsChange = this.registerOnAccountsChange.bind(this)
    this.initialize()
  }

  private readonly requiredNetworkId?: number
  private readonly requiredChainId?: number
  private readonly onNetworkChangeWithAccount: () => void

  private initialize() {
    window.ethereum.autoRefreshOnNetworkChange = false
    window.ethereum.on('networkChanged', () => {
      if (this.state.account) {
        this.onNetworkChangeWithAccount()
      }
    })
  }

  public async setProvider(provider: EProvider,
    onStateChanged?: (account?: string) => void): Promise<void> {
    const web3 = await getWeb3(provider)
    const accounts = await web3.eth.getAccounts()
    let account: string | undefined = getAccountFromAccountsEth(accounts)

    let networkId: number | undefined
    let chainId: number | undefined
    try {
      networkId = await web3.eth.net.getId()

      if (networkId) {
        chainId = await web3.eth.getChainId()
      }
    } catch (error) { }
    let networkInfo: NetworkInfo | undefined
    if (networkId) {
      try {
        networkInfo = await getNetworkInfo(networkId, chainId)
      } catch (error) {
      }
    }
    // only validate the requiredNetworkId and requiredChainId when they are provided
    const setAccount = canReadAccount(this.requiredNetworkId, this.requiredChainId, networkInfo)

    if (setAccount) {
      this.setState(
        {
          web3,
          provider,
          account,
          networkInfo,
        },
        () => (onStateChanged && onStateChanged(account)),
      )
    } else {
      this.setState(
        {
          web3,
          provider,
          account: undefined,
          networkInfo,
        },
        () => (onStateChanged && onStateChanged(undefined)),
      )
    }
  }

  public registerOnAccountsChange(handleOnAccountsChange: () => void): void {
    window.ethereum.on('accountsChanged', (accounts: string | string[]) => {
      const account = getAccountFromAccountsEth(accounts)
      if (account) {
        this.setState({
          account,
        },
          () => (handleOnAccountsChange())
        )
      }
    })
  }

  public render(): ReactNode {
    const {
      provider,
      web3,
      account,
      networkInfo,
    } = this.state
    const {
      setProvider,
      registerOnAccountsChange,
      onNetworkChangeWithAccount
    } = this

    const { children } = this.props

    return (
      <Web3Store.Provider
        value={{
          actions: {
            setProvider,
            registerOnAccountsChange,
          },
          state: {
            provider,
            web3,
            account,
            networkInfo,
          },
          onNetworkChangeWithAccount
        }}
      >
        {children}
      </Web3Store.Provider>
    )
  }
}

export default { Consumer: Web3Store.Consumer, Provider: Web3Provider }
