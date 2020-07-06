import React, { FC } from 'react'
import { logoFullWhite } from '../../assets/images'

interface LogoProps extends React.Props<HTMLImageElement> {
  alt?: string
}

const Logo: FC<LogoProps> = ({ alt = 'RIF OS logo', ...rest }) => <img src={logoFullWhite} alt={alt} {...rest} />

export default Logo
