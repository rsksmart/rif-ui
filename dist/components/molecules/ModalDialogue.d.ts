import React, { FC } from 'react';
import { ModalProps } from '../atoms/modal/Modal';
export interface ModalDialogueProps extends ModalProps {
    title: string;
    footer?: React.ReactElement;
}
declare const ModalDialogue: FC<ModalDialogueProps>;
export default ModalDialogue;
