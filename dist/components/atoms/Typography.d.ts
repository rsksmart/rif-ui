import { FC } from 'react';
import { TypographyProps as MUITypographyProps } from '@material-ui/core';
export interface TypographyProps extends MUITypographyProps {
    weight?: 'normal' | 'lightBold' | 'bold' | 'superBold';
}
declare const Typography: FC<TypographyProps>;
export default Typography;
