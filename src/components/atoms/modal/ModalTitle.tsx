import React, { FC } from 'react';
import { Typography } from '../typography';

export interface ModalTitleProps {
  className?: string;
};

// .ito - same as modal body
const ModalTitle: FC<ModalTitleProps> = ({ children, ...rest }) => {
  return (
    <Typography variant='h5' {...rest}>
      {children}
    </Typography>
  );
};

export default ModalTitle;
