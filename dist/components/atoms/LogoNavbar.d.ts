import React from 'react';
interface LogoProps extends React.Props<HTMLImageElement> {
    alt?: string;
    height?: string | number;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<Pick<LogoProps, "alt" | "height" | "style" | "children" | "key"> & React.RefAttributes<HTMLImageElement>>;
export default _default;
