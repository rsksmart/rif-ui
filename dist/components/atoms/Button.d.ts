import { FC } from 'react';
import { ButtonProps as MUIButtonProps } from '@material-ui/core';
export interface ButtonProps extends MUIButtonProps {
    block?: boolean;
    shadow?: boolean;
    rounded?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
