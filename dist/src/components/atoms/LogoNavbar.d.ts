import React from 'react';
interface ILogo extends React.Props<HTMLImageElement> {
    alt?: string;
    height?: string | number;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ILogo, "alt" | "height" | "style" | "children" | "key"> & React.RefAttributes<HTMLImageElement>>;
export default _default;
