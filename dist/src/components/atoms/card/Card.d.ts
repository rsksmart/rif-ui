import { FC } from 'react';
import { CardProps as MUICardProps } from '@material-ui/core';
export interface CardProps extends MUICardProps {
}
declare const Card: FC<CardProps>;
export default Card;
