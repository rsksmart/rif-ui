import React, { Component, ReactNode } from 'react';
import Web3 from 'web3';
import { EProvider } from '../services/Web3Service';
import NetworkInfo from '../models/NetworkInfo';
export interface Web3ProviderProps {
    state: {
        provider?: EProvider;
        web3?: Web3;
        account?: string;
        networkInfo?: NetworkInfo;
    };
    actions: {
        setProvider: (provider: EProvider, onStateChanged?: (account: string) => void) => Promise<void>;
        registerOnAccountsChange: (handleOnAccountsChange: () => void) => void;
    };
}
export declare const Web3Store: React.Context<Web3ProviderProps>;
interface Web3ProviderState {
    provider?: EProvider;
    web3?: Web3;
    account?: string;
    networkInfo?: NetworkInfo;
}
declare class Web3Provider extends Component<{}, Web3ProviderState> {
    constructor(props: Web3ProviderProps);
    setProvider(provider: EProvider, onStateChanged?: (account: string) => void): Promise<void>;
    registerOnAccountsChange(handleOnAccountsChange: () => void): void;
    subscribeToAccountsChanges(handleOnAccountsChange: () => void): void;
    render(): ReactNode;
}
declare const _default: {
    Consumer: React.Consumer<Web3ProviderProps>;
    Provider: typeof Web3Provider;
};
export default _default;
