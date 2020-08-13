import { FC } from 'react';
import Web3 from 'web3';
import ProviderInfo, { EProvider } from '../../models/ProviderInfo';
export interface AccountProps {
    web3: Web3 | null;
    networkName: string | null;
    account: string | null;
    setProvider: (provider: EProvider) => Promise<void>;
    availableProviders?: ProviderInfo[];
    currentNetworkId?: number;
    requiredNetworkId?: number;
    onCorrectNetworkMessage?: string;
    onNetworkMismatchMessage?: string;
    noNetworkMessage?: string;
}
declare const Account: FC<AccountProps>;
export default Account;
