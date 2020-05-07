import React, { FC, HTMLAttributes } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface PageTemplateProps extends HTMLAttributes<HTMLElement> { };

const useStyles = makeStyles((theme: Theme) => ({
  // this margin is the same height as the header, we need this because it has fixed position
  root: {
    marginTop: theme.spacing(8),
    width: '100%'
  }
}));

const PageTemplate: FC<PageTemplateProps> = ({ children, className = '', ...props }) => {

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default PageTemplate;
