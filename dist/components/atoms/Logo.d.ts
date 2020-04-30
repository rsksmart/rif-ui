import React from 'react';
interface ILogo extends React.Props<HTMLImageElement> {
    alt?: string;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ILogo, "alt" | "style" | "children" | "key"> & React.RefAttributes<HTMLImageElement>>;
export default _default;
