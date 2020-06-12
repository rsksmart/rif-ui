import { FC } from 'react';
export interface NetworkIndicatorProps {
    iconClassName?: string;
    currentNetwork?: number;
    requiredNetwork?: number;
    onRightNetworkMessage?: string;
    onWrongNetworkMessage?: string;
    noNetworkMessage?: string;
}
export declare enum NetworkStatus {
    NO_NETWORK = 1,
    NETWORK_MISSMATCH = 2,
    RIGHT_NETWORK = 3
}
declare const NetworkIndicator: FC<NetworkIndicatorProps>;
export default NetworkIndicator;
