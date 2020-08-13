import React, { Component, ReactNode } from 'react';
import Web3 from 'web3';
import NetworkInfo from '../models/NetworkInfo';
import ProviderInfo, { EProvider } from '../models/ProviderInfo';
export interface Web3ProviderProps {
    state: {
        provider?: EProvider;
        web3?: Web3;
        account?: string;
        networkInfo?: NetworkInfo;
        requiredNetworkId?: number;
    };
    actions: {
        setProvider: (provider: EProvider, onStateChanged?: (account?: string) => void) => Promise<void>;
        onConnectedNetworkChange?: () => void;
        onConnectedAccountChange?: () => void;
    };
    requiredNetworkId?: number;
    requiredChainId?: number;
    availableProviders?: ProviderInfo[];
}
export declare const Web3Store: React.Context<Web3ProviderProps>;
interface Web3ProviderState {
    provider?: EProvider;
    web3?: Web3;
    account?: string;
    networkInfo?: NetworkInfo;
}
declare class Web3Provider extends Component<{}, Web3ProviderState> {
    private readonly requiredNetworkId?;
    private readonly requiredChainId?;
    private availableProviders?;
    constructor(props: Web3ProviderProps);
    private readonly onConnectedNetworkChange?;
    private readonly onConnectedAccountChange?;
    setProvider(provider: EProvider, onStateChanged?: (account?: string) => void): Promise<void>;
    private initialize;
    render(): ReactNode;
}
declare const _default: {
    Consumer: React.Consumer<Web3ProviderProps>;
    Provider: typeof Web3Provider;
};
export default _default;
