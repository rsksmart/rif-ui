import React, { FC } from 'react';
import { NavLinkProps } from 'react-router-dom';
export interface HeaderProps {
    hreflogo: string;
    items: HeaderItemProps[];
    login: React.ElementType;
}
export interface HeaderItemProps extends NavLinkProps {
    icon?: any;
}
declare const Header: FC<HeaderProps>;
export default Header;
