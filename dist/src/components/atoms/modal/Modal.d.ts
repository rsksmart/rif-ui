import { FC } from 'react';
import { ModalProps as MUIModalProps } from '@material-ui/core';
export interface ModalProps extends MUIModalProps {
}
declare const Modal: FC<ModalProps>;
export default Modal;
