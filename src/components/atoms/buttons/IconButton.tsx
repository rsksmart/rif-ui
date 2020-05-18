import React, { FC } from 'react';
import { IconButton as MUIIconButton, IconButtonProps as MUIIconButtonProps } from '@material-ui/core';

export interface IconButtonProps extends MUIIconButtonProps {
};

const IconButton: FC<IconButtonProps> = ({ children, ...rest }) => {
  return (
    <MUIIconButton {...rest}>{children}</MUIIconButton>
  );
};

export default IconButton;
