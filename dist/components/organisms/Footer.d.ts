import { FC } from 'react';
import { FooterColumnProps } from '../molecules/FooterColumn';
export interface FooterProps {
    copyrightText: string;
    linksColumns: FooterColumnProps[];
}
declare const Footer: FC<FooterProps>;
export default Footer;
