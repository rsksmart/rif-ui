import { FC } from 'react';
import Web3 from 'web3';
import ProviderInfo, { EProvider } from '../../models/ProviderInfo';
import NetworkInfo from '../../models/NetworkInfo';
export interface AccountModalProps {
    web3?: Web3;
    networkInfo?: NetworkInfo;
    setProvider?: (provider: EProvider, onProviderSet?: (account?: string) => void) => Promise<void>;
    availableProviders?: ProviderInfo[];
    onClose?: () => void;
    onProviderSet?: (account: any) => void;
    open: boolean;
}
declare const AccountModal: FC<AccountModalProps>;
export default AccountModal;
