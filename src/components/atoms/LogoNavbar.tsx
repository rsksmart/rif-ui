import React from 'react';
import { logoFullWhite } from '../../assets/images';

interface ILogo extends React.Props<HTMLImageElement> {
  alt?: string;
  height?: string | number;
  style?: React.CSSProperties;
}

export default React.forwardRef(function LogoFooter(
  props: ILogo,
  ref?: React.Ref<HTMLImageElement> | null,
) {
  const { alt = 'RIF OS', height = '40px', ...other } = props;

  return <img src={logoFullWhite} alt={alt} height={height} ref={ref} {...other} />;
});
