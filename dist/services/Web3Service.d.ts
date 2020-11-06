import Web3 from 'web3';
import NetworkInfo from '../models/NetworkInfo';
import ProviderInfo, { EProvider } from '../models/ProviderInfo';
import ConnectionStatus from '../models/Enums';
declare global {
    interface Window {
        ethereum: any;
        web3: Web3;
    }
}
export declare function getWeb3(provider?: EProvider): Promise<Web3>;
export declare const getNetworkInfo: (networkId: number, chainId?: number | undefined) => NetworkInfo | undefined;
export declare const getNetworkInfoFromWeb3: (web3: Web3) => Promise<NetworkInfo | undefined>;
export declare const getAvailableProviders: () => ProviderInfo[] | undefined;
export declare const getConnectionStatus: (web3?: Web3 | undefined, requiredNetworkId?: number | undefined, currentNetworkId?: number | undefined, account?: string | undefined) => ConnectionStatus;
