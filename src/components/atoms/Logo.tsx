import React, { FC } from 'react'
import { logoFullWhite } from '../../assets/images'

const Logo: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  { alt = 'RIF OS logo', ...rest },
) => <img src={logoFullWhite} alt={alt} {...rest} />

export default Logo
