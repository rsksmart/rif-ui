import { FC } from 'react';
import Web3 from 'web3';
import ProviderInfo, { EProvider } from '../../models/ProviderInfo';
import NetworkInfo from '../../models/NetworkInfo';
export interface AccountProps {
    requiredNetworkName: string;
    setProvider?: (provider: EProvider) => Promise<void>;
    web3?: Web3;
    networkInfo?: NetworkInfo;
    account?: string;
    availableProviders?: ProviderInfo[];
    requiredNetworkId?: number;
    onCorrectNetworkMessage?: string;
    onNetworkMismatchMessage?: string;
    noNetworkMessage?: string;
    modalInitiallyOpened?: boolean;
}
declare const Account: FC<AccountProps>;
export default Account;
