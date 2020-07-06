import React, { FC } from 'react';
interface LogoProps extends React.Props<HTMLImageElement> {
    alt?: string;
    height?: string | number;
    style?: React.CSSProperties;
}
declare const LogoNavbar: FC<LogoProps>;
export default LogoNavbar;
