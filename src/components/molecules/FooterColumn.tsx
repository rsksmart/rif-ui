import React, { FC } from 'react';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '../atoms';
import { colors, fonts } from '../../theme';

export interface FooterColumnProps {
  className?: string;
  links: NavLinkProps[];
  title: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    color: colors.gray4,
    fontWeight: fonts.weight.normal,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: fonts.weight.lightBold
    }
  }
}));

const FooterColumn: FC<FooterColumnProps> = ({ title, links, className = '' }) => {

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <Typography style={{ fontSize: fonts.size.subtitleBig }} variant='subtitle1' color='primary'>{title}</Typography>
      {
        links.map((link, i) =>
          <NavLink className={classes.footerLink} color='secondary' key={i} to={link.to}>{link.title}</NavLink>
        )
      }
    </div>
  );
};

export default FooterColumn;
