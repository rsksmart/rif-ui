import React, { Component, ReactNode } from 'react';
import Web3 from 'web3';
import { EProvider } from '../services/Web3Service';
export interface Web3ProviderProps {
    state: {
        provider: EProvider | null;
        web3: Web3 | null;
        account: string | null;
        networkName: string | null;
    };
    actions: {
        setProvider: (provider: EProvider) => Promise<void>;
    };
}
export declare const Web3Store: React.Context<Web3ProviderProps>;
interface Web3ProviderState {
    provider: EProvider | null;
    web3: Web3 | null;
    account: string | null;
    networkName: string | null;
}
declare class Web3Provider extends Component<{}, Web3ProviderState> {
    constructor(props: Web3ProviderProps);
    setProvider(provider: EProvider): Promise<void>;
    render(): ReactNode;
}
declare const _default: {
    Consumer: React.Consumer<Web3ProviderProps>;
    Provider: typeof Web3Provider;
};
export default _default;
