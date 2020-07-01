import { FC } from 'react';
import Web3 from 'web3';
import ProviderInfo, { EProvider } from '../../models/ProviderInfo';
export interface AccountModalProps {
    web3: Web3 | null;
    networkName: string | null;
    setProvider: (provider: EProvider, onProviderSet?: (account: string) => void) => Promise<void>;
    availableProviders?: ProviderInfo[];
    handleClose?: () => void;
    onProviderSet?: (account: any) => void;
    open: boolean;
}
declare const AccountModal: FC<AccountModalProps>;
export default AccountModal;
