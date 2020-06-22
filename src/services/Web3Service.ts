import Web3 from 'web3'
import NetworkInfo from '../models/NetworkInfo'
import networksData from '../data/networks.json'
import ProviderInfo, {
  EProvider,
  getProviderInfo
} from '../models/ProviderInfo'

declare global {
  interface Window {
    ethereum: any // FIXME: This should be properly typed as per metamask
    web3: Web3
  }
}

export function getWeb3(
  provider: EProvider = EProvider.METAMASK
): Promise<Web3> {
  return new Promise<Web3>((resolve, reject) => {
    switch (provider) {
      // Injected Web3 wallet like MetaMask
      // .ito - volver aca
      case EProvider.METAMASK: {
        // New MetaMask
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum)
          window.ethereum
            .enable()
            .then(() => resolve(web3))
            .catch(reject)
        } else if (window.web3) {
          // Older versions of MetaMask or other
          resolve(new Web3(window.web3.currentProvider))
        } else reject(new Error('No injected web3 found'))
        break
      }

      // Localhost
      case EProvider.LOCAL: {
        const localhostProvider = new Web3.providers.HttpProvider(
          "'http://127.0.0.1:4444'"
        )
        resolve(new Web3(localhostProvider))
        break
      }

      // Unknown & not implemented
      default: {
        reject(
          new Error(
            `Provider not implemented or unknown. Chosen provider ${provider}`
          )
        )
        break
      }
    }
  })
}

export const getNetworkInfo = (
  networkId: number,
  chainId?: number
): NetworkInfo | undefined =>
  networksData.find((n) =>
    chainId
      ? n.networkId === networkId && n.chainId === chainId
      : n.networkId === networkId
  ) as NetworkInfo

export const getNetworkInfoFromWeb3 = async (
  web3: Web3
): Promise<NetworkInfo | undefined> => {
  // set networkId and chainId
  let networkId: number | undefined
  let chainId: number | undefined
  try {
    networkId = await web3.eth.net.getId()

    if (networkId) {
      chainId = await web3.eth.getChainId()
    }
  } catch (error) {}
  let networkInfo: NetworkInfo | undefined

  if (networkId) {
    try {
      networkInfo = getNetworkInfo(networkId, chainId)
    } catch (error) {}
  }
  return networkInfo
}

export const getCurrentProviderInfo = (): ProviderInfo | undefined => {
  if (!window.web3) return undefined
  const currentProvider = window.web3.currentProvider as any
  if (currentProvider.isMetaMask) {
    // when Nifty is present, isMetaMask is true
    return currentProvider.isNiftyWallet
      ? getProviderInfo(EProvider.NIFTY)
      : getProviderInfo(EProvider.METAMASK)
  }

  if (currentProvider.isTrust) return getProviderInfo(EProvider.TRUST)

  if (currentProvider.isGoWallet) return getProviderInfo(EProvider.GO_WALLET)

  if (currentProvider.isAlphaWallet)
    return getProviderInfo(EProvider.ALPHA_WALLET)

  if (currentProvider.isStatus) return getProviderInfo(EProvider.STATUS)

  if (currentProvider.isToshi) return getProviderInfo(EProvider.COINBASE)

  if (typeof (window as any).__CIPHER__ !== 'undefined')
    return getProviderInfo(EProvider.CIPHER)

  if (currentProvider.constructor.name === 'EthereumProvider')
    return getProviderInfo(EProvider.MIST)

  if (currentProvider.constructor.name === 'Web3FrameProvider')
    return getProviderInfo(EProvider.PARITY)

  if (currentProvider.host && currentProvider.host.indexOf('infura') !== -1)
    return getProviderInfo(EProvider.INFURA)

  if (currentProvider.host && currentProvider.host.indexOf('localhost') !== -1)
    return getProviderInfo(EProvider.LOCAL)

  // not implemented or not found
  return undefined
}
