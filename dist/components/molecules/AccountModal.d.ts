import { FC } from 'react';
import Web3 from 'web3';
import { EProvider } from '../../services/Web3Service';
export interface AccountModalProps {
    web3: Web3 | null;
    networkName: string | null;
    setProvider: (provider: EProvider) => Promise<void>;
    providers?: EProvider[];
    handleClose: () => void;
    open: boolean;
}
declare const AccountModal: FC<AccountModalProps>;
export default AccountModal;
