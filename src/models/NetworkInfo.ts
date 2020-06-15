import networksData from '../data/networks.json'

export default interface NetworkInfo {
  name: string
  chainId?: number
  shortName: string
  chain: string
  network: string
  networkId: number
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpc: string[]
  faucets: string[]
  infoURL: string
}

const getNetworkInfo = (
  networkId: number,
  chainId?: number,
): NetworkInfo | undefined => networksData.find((n) => (chainId
  ? n.networkId === networkId && n.chainId === chainId
  : n.networkId === networkId)) as NetworkInfo

export { getNetworkInfo }
