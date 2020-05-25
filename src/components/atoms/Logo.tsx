import React from 'react'
import { logoFullWhite } from '../../assets/images'

interface LogoProps extends React.Props<HTMLImageElement> {
  alt?: string
  style?: React.CSSProperties
}

export default React.forwardRef((
  props: LogoProps,
  ref?: React.Ref<HTMLImageElement> | null,
) => {
  const { alt = 'RIF OS', ...other } = props

  return <img src={logoFullWhite} alt={alt} ref={ref} {...other} />
})
