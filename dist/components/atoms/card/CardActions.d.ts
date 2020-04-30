import { FC } from 'react';
import { CardActionsProps as MUICardActionsProps } from '@material-ui/core';
export interface CardProps extends MUICardActionsProps {
}
declare const CardActions: FC<CardProps>;
export default CardActions;
