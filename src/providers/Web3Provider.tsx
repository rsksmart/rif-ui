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
  }
}

const defaultState: Web3ProviderState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkInfo: undefined
}

export const Web3Store = createContext<Web3ProviderProps>({
  state: defaultState,
  actions: {
    setProvider: (): Promise<void> => Promise.resolve(),
  },
})

interface Web3ProviderState {
  provider?: EProvider
  web3?: Web3
  account?: string
  networkInfo?: NetworkInfo
}

class Web3Provider extends Component<{}, Web3ProviderState> {
  constructor(props: Web3ProviderProps) {
    super(props)

    this.state = defaultState

    this.setProvider = this.setProvider.bind(this)
  }

  public async setProvider(provider: EProvider,
    onStateChanged?: (account: string) => void): Promise<void> {
    const web3 = await getWeb3(provider)
    const accounts = await web3.eth.getAccounts()
    let account: string

    if (Array.isArray(accounts)) [account] = accounts
    else account = accounts
    let networkId: number | undefined
    let chainId: number | undefined
    try {
      networkId = await web3.eth.net.getId()

      if (networkId) {
        chainId = await web3.eth.getChainId()
      }
    } catch (error) {
    }

    let networkInfo: NetworkInfo | undefined

    if (networkId) {
      try {
        networkInfo = await getNetworkInfo(networkId, chainId)
      }
      catch (error) {
      }
    }

    this.setState(
      {
        web3,
        provider,
        account,
        networkInfo
      },
      () => (onStateChanged && onStateChanged(account)),
    )
  }

  public render(): ReactNode {
    const {
      provider,
      web3,
      account,
      networkInfo
    } = this.state
    const { setProvider } = this

    const { children } = this.props

    return (
      <Web3Store.Provider
        value={{
          actions: {
            setProvider,
          },
          state: {
            provider,
            web3,
            account,
            networkInfo
          },
        }}
      >
        {children}
      </Web3Store.Provider>
    )
  }
}

export default { Consumer: Web3Store.Consumer, Provider: Web3Provider }
