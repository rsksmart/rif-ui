import React, { FC } from 'react';
import { AppBar as MUIAppBar, AppBarProps as MUIAppBarProps } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { LogoNavbar, Link, Typography } from '../atoms';
import { colors, fonts } from '../../theme';

export interface AppBarProps extends MUIAppBarProps {
  hreflogo: string;
  items: NavLinkProps[];
  login: React.ElementType;
};

const useStyles = makeStyles((theme: Theme) => ({
  activeNavlink: {
    color: `${colors.white} !important`,
    fontWeight: fonts.weight.lightBold
  },
  itemsContainer: {
    display: 'flex',
  },
  loginContainer: {
    display: 'flex',
    marginLeft: 'auto',
  },
  navLink: {
    alignItems: 'center',
    color: colors.white,
    display: 'flex',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: colors.gray5,
      textDecoration: 'none',
    },
  },
  navLinkContainer: {
    display: 'flex'
  },
  root: {
    boxShadow: 'none',
    // this height need to be equal to the marginTop of the HeaderTongue component
    height: theme.spacing(8),
  },
}));

const AppBar: FC<AppBarProps> = ({ className = '', items, login, ...rest }) => {

  const classes = useStyles();
  const Login = login;

  return (
    <MUIAppBar position='fixed' className={`${classes.root} ${className}`.trim()} {...rest}>
      <Toolbar>
        <NavLink to={rest.hreflogo}>
          <LogoNavbar />
        </NavLink>
        <div className={classes.itemsContainer}>
          {
            !!items.length &&
            items.map((navItem: NavLinkProps, i) => (
              <Typography className={classes.navLinkContainer} key={`${navItem.title}-${i}`}>
                <NavLink className={classes.navLink} activeClassName={classes.activeNavlink} {...navItem}>
                  {navItem.title}
                </NavLink>
              </Typography>
            ))
          }
        </div>
        <div className={classes.loginContainer}>
          <Login />
        </div>
      </Toolbar>
    </MUIAppBar >
  );
}

export default AppBar;