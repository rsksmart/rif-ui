import React, { FC } from 'react'
import { logoFullWhite } from '../../assets/images'

interface LogoProps extends React.Props<HTMLImageElement> {
  alt?: string
  height?: string | number
  style?: React.CSSProperties
}

const LogoNavbar: FC<LogoProps> = ({ alt = 'navbar logo', height = '44px', ...rest }) => (
  <img
    src={logoFullWhite}
    alt={alt}
    height={height}
    {...rest}
  />
)
export default LogoNavbar
