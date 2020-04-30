import { FC } from 'react';
import { FormControlProps as MUIFormControlProps } from '@material-ui/core';
export interface IFormControlProps extends MUIFormControlProps {
}
declare const FormControl: FC<IFormControlProps>;
export default FormControl;
