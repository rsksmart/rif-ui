import React, { Component, ReactNode } from 'react';
import Web3 from 'web3';
import { EProvider } from '../services/Web3Service';
export interface Web3ProviderProps {
    state: {
        provider?: EProvider;
        web3?: Web3;
        account?: string;
        networkName?: string;
        networkId?: number;
        chainId?: number;
    };
    actions: {
        setProvider: (provider: EProvider, onStateChanged?: (account: string) => void) => Promise<void>;
    };
}
export declare const Web3Store: React.Context<Web3ProviderProps>;
interface Web3ProviderState {
    provider?: EProvider;
    web3?: Web3;
    account?: string;
    networkName?: string;
    networkId?: number;
    chainId?: number;
}
export declare enum ENetwork {
    ETHEREUM = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GOERLI = 5,
    RSK_MAINNET = 30,
    RSK_TESTNET = 31,
    KOVAN = 42,
    ETHEREUM_CLASSIC = 61,
    POA_CORE = 99,
    X_DAI = 100
}
declare class Web3Provider extends Component<{}, Web3ProviderState> {
    constructor(props: Web3ProviderProps);
    setProvider(provider: EProvider, onStateChanged?: (account: string) => void): Promise<void>;
    render(): ReactNode;
}
declare const _default: {
    Consumer: React.Consumer<Web3ProviderProps>;
    Provider: typeof Web3Provider;
};
export default _default;
