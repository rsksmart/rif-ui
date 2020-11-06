import { NavLinkProps } from 'react-router-dom';
import { HTMLAttributes, ReactElement } from 'react';
export interface HeaderProps {
    hreflogo: string;
    itemsStart: NavItemProps[];
    itemsEnd?: ActionHeaderItemProps[];
    login: React.ElementType;
}
export declare type NavItemProps = NavLinkProps & NavHeaderItemProps;
export declare type NavHeaderItemProps = {
    icon?: ReactElement;
    title: string;
};
export declare type ActionHeaderItemProps = {
    icon: ReactElement;
} & Partial<HTMLAttributes<HTMLElement>>;
