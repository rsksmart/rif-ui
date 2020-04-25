import { FC } from 'react';
import { CardHeaderProps as MUICardHeaderProps } from '@material-ui/core';
export interface CardProps extends MUICardHeaderProps {
}
declare const CardHeader: FC<CardProps>;
export default CardHeader;
