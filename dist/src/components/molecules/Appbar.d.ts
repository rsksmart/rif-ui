import React, { FC } from 'react';
import { AppBarProps as MUIAppBarProps } from '@material-ui/core';
import { NavLinkProps } from 'react-router-dom';
export interface AppBarProps extends MUIAppBarProps {
    hreflogo: string;
    items: NavLinkProps[];
    login: React.ElementType;
}
declare const AppBar: FC<AppBarProps>;
export default AppBar;
