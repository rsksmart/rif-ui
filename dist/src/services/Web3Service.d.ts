import Web3 from 'web3';
declare global {
    interface Window {
        ethereum: any;
        web3: Web3;
    }
}
export declare enum EProvider {
    METAMASK = "Metamask",
    LEDGER = "Ledger",
    TREZOR = "Trezor",
    LOCAL = "Localhost"
}
export declare function getWeb3(provider?: EProvider): Promise<Web3>;
