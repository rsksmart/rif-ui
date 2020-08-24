import React, {
  Component, createContext, ReactNode,
} from 'react'
import Web3 from 'web3'
import {
  getWeb3, getNetworkInfoFromWeb3, getAvailableProviders,
} from '../services/Web3Service'
import NetworkInfo from '../models/NetworkInfo'
import ProviderInfo, { EProvider } from '../models/ProviderInfo'

export interface Web3ProviderProps {
  state: {
    provider?: EProvider
    web3?: Web3
    account?: string
    networkInfo?: NetworkInfo
    requiredNetworkId?: number
  }
  actions: {
    setProvider?: (
      provider: EProvider,
      onStateChanged?: (account?: string) => void
    ) => Promise<void>
    onConnectedNetworkChange?: () => void
    onConnectedAccountChange?: () => void
  }
  requiredNetworkId?: number
  requiredChainId?: number
  availableProviders?: ProviderInfo[]
}

export const defaultWeb3State: Web3ProviderState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkInfo: undefined,
}

export const Web3Store = createContext<Web3ProviderProps>({
  state: defaultWeb3State,
  actions: {
    setProvider: (): Promise<void> => Promise.resolve(),
    onConnectedNetworkChange: (): any => 0,
    onConnectedAccountChange: (): any => 0,
  },
  requiredNetworkId: undefined,
  requiredChainId: undefined,
})

interface Web3ProviderState {
  provider?: EProvider
  web3?: Web3
  account?: string
  networkInfo?: NetworkInfo
}

const getAccountFromEthAccounts = (accounts: string[] | string): string | undefined => {
  let account: string

  if (Array.isArray(accounts)) [account] = accounts
  else account = accounts
  return account
}

/**
 * The provider will not read the account when a requiredNetworkId was provided
 *  and it does not match the networkId of current networkInfo, same applies to
 *  chainId. Nothing happens if the requiredNetworkId was not specified
 * @param requiredNetworkId given on the props of the provider
 * @param requiredChainId given on the props of the provider
 * @param networkInfo obtained from the wallet
 */
const shouldReadAccount = (
  requiredNetworkId?: number,
  requiredChainId?: number,
  networkInfo?: NetworkInfo,
): boolean => {
  // the consumer did not provide enough information to validate the network, so we do not check
  if (!requiredNetworkId) return true

  if (requiredNetworkId === networkInfo?.networkId) {
    // only when chainId is provided we compare it
    if (requiredChainId) return requiredChainId === networkInfo?.chainId
    return true
  }
  return false
}

class Web3Provider extends Component<Web3ProviderProps, Web3ProviderState> {
  private readonly requiredNetworkId?: number

  private readonly requiredChainId?: number

  private availableProviders?: ProviderInfo[]

  constructor(props: Web3ProviderProps) {
    super(props)
    this.state = defaultWeb3State
    this.requiredNetworkId = props.requiredNetworkId
    this.requiredChainId = props.requiredChainId
    this.onConnectedNetworkChange = props.actions.onConnectedNetworkChange
    this.onConnectedAccountChange = props.actions.onConnectedAccountChange
    this.setProvider = this.setProvider.bind(this)
    this.initialize()
  }

  private readonly onConnectedNetworkChange?: () => void

  private readonly onConnectedAccountChange?: () => void

  public async setProvider(provider: EProvider,
    onStateChanged?: (account?: string) => void): Promise<void> {
    const web3 = await getWeb3(provider)
    const accounts = await web3.eth.getAccounts()
    const networkInfo = await getNetworkInfoFromWeb3(web3)
    // only validate requiredNetworkId and requiredChainId when are provided
    const shouldSetAccount = shouldReadAccount(this.requiredNetworkId, this.requiredChainId, networkInfo)

    const account = shouldSetAccount
      ? getAccountFromEthAccounts(accounts)
      : undefined

    this.setState(
      {
        web3,
        provider,
        account,
        networkInfo,
      },
      () => (onStateChanged && onStateChanged(account)),
    )
  }

  private initialize(): void {
    if (!window.ethereum) {
      return
    }
    this.availableProviders = getAvailableProviders()

    window.ethereum.autoRefreshOnNetworkChange = false
    // handle on networkChange
    window.ethereum.on('networkChanged', async (_netId) => {
      const { networkInfo } = this.state

      if (!networkInfo) return // wallet is not connected
      const { provider } = this.state
      const web3 = await getWeb3(provider)
      const accounts = await web3.eth.getAccounts()
      const newNetworkInfo = await getNetworkInfoFromWeb3(web3)

      // we do not want to set the account if we know it is the wrong network
      const shouldSetAccount = shouldReadAccount(
        this.requiredNetworkId,
        this.requiredChainId,
        newNetworkInfo,
      )
      const account = shouldSetAccount
        ? getAccountFromEthAccounts(accounts)
        : undefined

      this.setState(
        {
          networkInfo: newNetworkInfo,
          account,
        },
        () => this.onConnectedNetworkChange && this.onConnectedNetworkChange(),
      )
    })
    // handle on accountsChanged
    window.ethereum.on('accountsChanged', (accounts: string | string[]) => {
      const { networkInfo } = this.state

      if (!networkInfo) return // wallet is not connected
      // we only care about this change if it is on the right network
      // or if we can not validate the required network
      const shouldSetAccount = shouldReadAccount(
        this.requiredNetworkId, this.requiredChainId, networkInfo,
      )

      if (shouldSetAccount) {
        const account = getAccountFromEthAccounts(accounts)

        if (account) {
          this.setState({
            account,
          },
          () => this.onConnectedAccountChange
              && this.onConnectedAccountChange())
        }
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
      onConnectedNetworkChange,
      onConnectedAccountChange,
      availableProviders,
    } = this

    const { children } = this.props

    return (
      <Web3Store.Provider
        value={{
          actions: {
            setProvider,
            onConnectedNetworkChange,
            onConnectedAccountChange,
          },
          state: {
            provider,
            web3,
            account,
            networkInfo,
          },
          availableProviders,
        }}
      >
        {children}
      </Web3Store.Provider>
    )
  }
}

export default { Consumer: Web3Store.Consumer, Provider: Web3Provider }
