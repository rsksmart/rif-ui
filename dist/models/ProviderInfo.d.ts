export default interface ProviderInfo {
    name: string;
    eProvider: EProvider;
    iconImg?: string;
}
export declare enum EProvider {
    METAMASK = "Metamask",
    NIFTY = "Nifty",
    LEDGER = "Ledger",
    TREZOR = "Trezor",
    TRUST = "Trust",
    LOCAL = "Localhost",
    GO_WALLET = "GoWallet",
    ALPHA_WALLET = "AlphaWallet",
    STATUS = "status",
    CIPHER = "cipher",
    COINBASE = "coinbase",
    MIST = "mist",
    PARITY = "parity",
    INFURA = "infura"
}
export declare const getProviderInfo: (eProvider: EProvider) => ProviderInfo;
