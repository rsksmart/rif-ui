import { FC } from 'react';
import { EProvider } from '../../services/Web3Service';
import Web3 from 'web3';
export interface AccountModalProps {
    web3: Web3 | null;
    networkName: string | null;
    setProvider: (provider: EProvider) => void;
    providers?: EProvider[];
    handleClose: () => void;
    open: boolean;
}
declare const AccountModal: FC<AccountModalProps>;
export default AccountModal;
