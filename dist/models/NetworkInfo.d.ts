export default interface NetworkInfo {
    name: string;
    chainId?: number;
    shortName: string;
    chain: string;
    network: string;
    networkId: number;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpc: string[];
    faucets: string[];
    infoURL: string;
}
declare const getNetworkInfo: (networkId: number, chainId?: number | undefined) => NetworkInfo | undefined;
export { getNetworkInfo };
