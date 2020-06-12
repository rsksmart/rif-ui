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
  }
  actions: {
    setProvider: (
      provider: EProvider,
      onStateChanged?: (account: string) => void
    ) => Promise<void>
    registerOnAccountsChange: (handleOnAccountsChange: () => void) => void
  }
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
    registerOnAccountsChange: (handleOnAccountsChange: () => void): void => { },
  },
})

interface Web3ProviderState {
  provider?: EProvider
  web3?: Web3
  account?: string
  networkInfo?: NetworkInfo
}

const getAccountFromAccountsEth = (accounts: string[] | string): string => {
  let account: string
  if (Array.isArray(accounts)) [account] = accounts
  else account = accounts
  return account
}

class Web3Provider extends Component<{}, Web3ProviderState> {
  constructor(props: Web3ProviderProps) {
    super(props)

    this.state = defaultState

    this.setProvider = this.setProvider.bind(this)
    this.registerOnAccountsChange = this.registerOnAccountsChange.bind(this)
  }

  public async setProvider(provider: EProvider,
    onStateChanged?: (account: string) => void): Promise<void> {
    const web3 = await getWeb3(provider)
    const accounts = await web3.eth.getAccounts()
    const account = getAccountFromAccountsEth(accounts)

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

  public registerOnAccountsChange(handleOnAccountsChange: () => void): void {
    window.ethereum.on('accountsChanged', (accounts: string | string[]) => {
      const account = getAccountFromAccountsEth(accounts)
      if (account) {
        this.setState({
          ...this.state,
          account,
        },
          () => (handleOnAccountsChange())
        )
      }
    })
  }

  public subscribeToAccountsChanges(handleOnAccountsChange: () => void): void {
    // this should not go here, may be provide the method for the consumer to subscribe?
    // let acc
    // cuando se desloguea (cambia la network) tambien se dispara esto
    window.ethereum.on('accountsChanged', (accounts: string | any[]) => {
      console.log('currentState: ', this.state)
      if (accounts && accounts.length && accounts[0]) {
        const currentAccount = accounts[0]
        // acc = currentAccount
        this.setState({
          account: currentAccount,
        },
          () => {
            console.log('ACT UPON THE CHANGE OF ACCOUNTS. acc: ', this.state.account)
            handleOnAccountsChange()
          })
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
    const { setProvider, registerOnAccountsChange } = this

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
        }}
      >
        {children}
      </Web3Store.Provider>
    )
  }
}

export default { Consumer: Web3Store.Consumer, Provider: Web3Provider }
