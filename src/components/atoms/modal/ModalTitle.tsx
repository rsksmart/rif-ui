import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'

export interface ModalTitleProps {
  className?: string
}

const ModalTitle: FC<ModalTitleProps> = ({ children, ...rest }) => (
  <Typography variant="h5" {...rest}>
    {children}
  </Typography>
)

export default ModalTitle
