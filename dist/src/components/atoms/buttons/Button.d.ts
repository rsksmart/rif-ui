import { FC } from 'react';
import { ButtonProps as MUIButtonProps } from '@material-ui/core';
interface IButtonProps extends MUIButtonProps {
    block?: boolean;
    shadow?: boolean;
    rounded?: boolean;
}
declare const Button: FC<IButtonProps>;
export default Button;
