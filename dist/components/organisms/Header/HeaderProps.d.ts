import { NavLinkProps } from 'react-router-dom';
import { ReactElement } from 'react';
export interface HeaderProps {
    hreflogo: string;
    items: HeaderItemProps[];
    login: React.ElementType;
}
export interface HeaderItemProps extends NavLinkProps {
    icon?: ReactElement;
    title: string;
}
