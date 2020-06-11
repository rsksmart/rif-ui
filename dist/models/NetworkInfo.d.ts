export default interface NetworkInfo {
    name: string;
    networkId?: number;
    chainId?: number;
}
declare const getNetworkInfo: (networkId: number, chainId?: number | undefined) => NetworkInfo | undefined;
export { getNetworkInfo };
