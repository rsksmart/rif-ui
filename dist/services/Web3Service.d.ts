import Web3 from 'web3';
import NetworkInfo from '../models/NetworkInfo';
declare global {
    interface Window {
        ethereum: any;
        web3: Web3;
    }
}
export declare enum EProvider {
    METAMASK = "Metamask",
    LEDGER = "Ledger",
    TREZOR = "Trezor",
    LOCAL = "Localhost"
}
export declare function getWeb3(provider?: EProvider): Promise<Web3>;
export declare const getNetworkInfo: (networkId: number, chainId?: number | undefined) => NetworkInfo | undefined;
export declare const getNetworkInfoFromWeb3: (web3: Web3) => Promise<NetworkInfo | undefined>;
