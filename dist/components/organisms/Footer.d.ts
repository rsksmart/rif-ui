import { FC, HTMLAttributes } from 'react';
import { FooterColumnProps } from '../molecules/FooterColumn';
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    copyrightText: string;
    linksColumns: FooterColumnProps[];
}
declare const Footer: FC<FooterProps>;
export default Footer;
