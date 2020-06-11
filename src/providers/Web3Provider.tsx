import React, { Component, createContext, ReactNode } from 'react'
import Web3 from 'web3'
import { getWeb3, EProvider } from '../services/Web3Service'

export interface Web3ProviderProps {
  state: {
    provider?: EProvider
    web3?: Web3
    account?: string
    networkName?: string
    networkId?: Number
    chainId?: Number
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
  networkName: undefined,
  networkId: undefined,
  chainId: undefined,
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
  networkName?: string
  networkId?: Number
  chainId?: Number
}

const getNetworkName = (networkId?: number): string | undefined => {
  switch (networkId) {
    case 1:
      return 'Ethereum'
    case 3:
      return 'Ropsten'
    case 4:
      return 'Rinkeby'
    case 5:
      return 'Goerli'
    case 30:
      return 'RSK MainNet'
    case 31:
      return 'RSK TestNet'
    case 42:
      return 'Kovan'
    case 61:
      return 'Ethereum Classic'
    case 99:
      return 'POA Core'
    case 100:
      return 'xDai'
    default:
      return undefined
  }
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

    this.setState(
      {
        web3,
        provider,
        account,
        networkName: getNetworkName(networkId),
        networkId,
        chainId
      },
      () => (onStateChanged && onStateChanged(account)),
    )
  }

  public render(): ReactNode {
    const {
      provider,
      web3,
      account,
      networkName,
      networkId,
      chainId
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
            networkName,
            networkId,
            chainId
          },
        }}
      >
        {children}
      </Web3Store.Provider>
    )
  }
}

export default { Consumer: Web3Store.Consumer, Provider: Web3Provider }
