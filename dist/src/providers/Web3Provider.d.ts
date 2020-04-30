import React, { Component } from 'react';
import { EProvider } from '../services/Web3Service';
import Web3 from 'web3';
export { EProvider };
export interface IWeb3Provider {
    state: {
        provider: EProvider | null;
        web3: Web3 | null;
        account: string | null;
        networkName: string | null;
    };
    actions: {
        setProvider: (provider: EProvider) => void;
    };
}
export declare const Web3Store: React.Context<IWeb3Provider>;
interface IWeb3ProviderProps {
}
interface IWeb3ProviderState {
    provider: EProvider | null;
    web3: Web3 | null;
    account: string | null;
    networkName: string | null;
}
declare class Web3Provider extends Component<IWeb3ProviderProps, IWeb3ProviderState> {
    constructor(props: IWeb3Provider);
    setProvider(provider: EProvider): Promise<void>;
    render(): JSX.Element;
}
declare const _default: {
    Consumer: React.Consumer<IWeb3Provider>;
    Provider: typeof Web3Provider;
};
export default _default;
