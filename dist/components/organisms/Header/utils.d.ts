/// <reference types="react" />
import { NavLinkProps } from 'react-router-dom';
export declare const headerConstants: {
    headerTongueHeight: number;
};
export interface HeaderProps {
    hreflogo: string;
    items: HeaderItemProps[];
    login: React.ElementType;
}
export interface HeaderItemProps extends NavLinkProps {
    icon?: any;
}
