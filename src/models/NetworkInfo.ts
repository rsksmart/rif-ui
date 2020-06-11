import networksData from '../data/networks.json'

export default interface NetworkInfo {
  name: string
  networkId?: number
  chainId?: number
  // .ito
  // ... more info ...
}

const getNetworkInfo = (
  networkId: number,
  chainId?: number,
): NetworkInfo | undefined => networksData.find((n) => (chainId
  ? n.networkId === networkId && n.chainId === chainId
  : n.networkId === networkId)) as NetworkInfo

export { getNetworkInfo }
