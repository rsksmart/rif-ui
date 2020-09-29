import { FC } from 'react';
export interface WrongNetworkModalProps {
    open: boolean;
    currentNetworkName?: string;
    requiredNetworkName: string;
    onClose: () => void;
}
declare const WrongNetworkModal: FC<WrongNetworkModalProps>;
export default WrongNetworkModal;
