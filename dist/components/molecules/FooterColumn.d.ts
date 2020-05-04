import { FC } from 'react';
import { NavLinkProps } from 'react-router-dom';
export interface FooterColumnProps {
    className?: string;
    links: NavLinkProps[];
    title: string;
}
declare const FooterColumn: FC<FooterColumnProps>;
export default FooterColumn;
