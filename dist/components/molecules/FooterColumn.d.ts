import { FC } from 'react';
import { NavLinkProps } from 'react-router-dom';
export interface FooterColumnProps {
    className?: string;
    links: FooterLinkProps[];
    title: string;
}
export interface FooterLinkProps extends NavLinkProps {
    isExternal?: boolean;
    title: string;
}
declare const FooterColumn: FC<FooterColumnProps>;
export default FooterColumn;
