import Web3 from 'web3'
import NetworkInfo from '../models/NetworkInfo'
import networksData from '../data/networks.json'

declare global {
  interface Window {
    ethereum: any // FIXME: This should be properly typed as per metamask
    web3: Web3
  }
}

export enum EProvider {
  METAMASK = 'Metamask',
  LEDGER = 'Ledger',
  TREZOR = 'Trezor',
  LOCAL = 'Localhost'
}

export function getWeb3(
  provider: EProvider = EProvider.METAMASK,
): Promise<Web3> {
  return new Promise<Web3>((resolve, reject) => {
    switch (provider) {
      // Injected Web3 wallet like MetaMask
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
          "'http://127.0.0.1:4444'",
        )
        resolve(new Web3(localhostProvider))
        break
      }

      // Unknown & not implemented
      default: {
        reject(
          new Error(
            `Provider not implemented or unknown. Chosen provider ${provider}`,
          ),
        )
        break
      }
    }
  })
}

export const getNetworkInfo = (
  networkId: number,
  chainId?: number,
): NetworkInfo | undefined => networksData.find((n) => (chainId
  ? n.networkId === networkId && n.chainId === chainId
  : n.networkId === networkId)) as NetworkInfo

export const getNetworkInfoFromWeb3 = async (
  web3: Web3,
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
