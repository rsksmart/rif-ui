import React, { FC } from 'react'
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { fonts } from '../../theme'

export interface TypographyProps extends MUITypographyProps {
  weight?: 'normal' | 'lightBold' | 'bold' | 'superBold'
}

const useStyles = makeStyles(() => ({
  normal: {
    fontWeight: fonts.weight.light,
  },
  lightBold: {
    fontWeight: fonts.weight.regular,
  },
  bold: {
    fontWeight: fonts.weight.medium,
  },
  superBold: {
    fontWeight: fonts.weight.bold,
  },
}))

const Typography: FC<TypographyProps> = ({
  weight = 'normal', className = '', children, ...rest
}) => {
  const classes = useStyles()

  return (
    <MUITypography className={`${classes[weight]} ${className}`.trim()} {...rest}>
      {children}
    </MUITypography>
  )
}

export default Typography
