import { FC } from 'react';
import { MenuItemProps as MUIMenuItemProps } from '@material-ui/core';
export interface MenuItemProps extends MUIMenuItemProps {
}
declare const MenuItem: FC<MenuItemProps | any>;
export default MenuItem;
