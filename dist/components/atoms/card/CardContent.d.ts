import { FC } from 'react';
import { CardContentProps as MUICardContentProps } from '@material-ui/core';
export interface CardProps extends MUICardContentProps {
}
declare const CardContent: FC<CardProps>;
export default CardContent;
