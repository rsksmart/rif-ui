import { FC } from 'react';
import { InputProps as MUIInputProps } from '@material-ui/core';
export interface InputProps extends MUIInputProps {
    maxValue?: number;
    minValue?: number;
}
declare const Input: FC<InputProps>;
export default Input;
