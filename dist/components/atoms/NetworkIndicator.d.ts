import { FC } from 'react';
export interface NetworkIndicatorProps {
    iconClassName?: string;
    currentNetworkId?: number;
    requiredNetworkId?: number;
    onCorrectNetworkMessage?: string;
    onNetworkMismatchMessage?: string;
    noNetworkMessage?: string;
}
export declare enum NetworkStatus {
    NO_NETWORK = 1,
    NETWORK_MISSMATCH = 2,
    CORRECT_NETWORK = 3
}
declare const NetworkIndicator: FC<NetworkIndicatorProps>;
export default NetworkIndicator;
