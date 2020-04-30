import { FC } from 'react';
import { EProvider } from '../../services/Web3Service';
import Web3 from 'web3';
export interface AccountProps {
    web3: Web3 | null;
    networkName: string | null;
    account: string | null;
    setProvider: (provider: EProvider) => void;
    providers?: EProvider[];
}
declare const Account: FC<AccountProps>;
export default Account;
