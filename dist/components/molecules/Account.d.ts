import { FC } from 'react';
import Web3 from 'web3';
import { EProvider } from '../../services/Web3Service';
export interface AccountProps {
    web3: Web3 | null;
    networkName: string | null;
    account: string | null;
    setProvider: (provider: EProvider) => Promise<void>;
    providers?: EProvider[];
    networkId?: Number;
    chainId?: Number;
    currentNetworkId: Number;
    expectedNetworkId: Number;
}
declare const Account: FC<AccountProps>;
export default Account;
