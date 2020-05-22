import React, { FC } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink, NavLinkProps } from 'react-router-dom'
import { LogoNavbar, Typography } from '../../atoms';
import { colors, fonts } from '../../../theme';
import { HeaderProps } from './utils'
import { globalConstants } from '../../../theme';

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
    // this height needs to be equal to the marginTop of PageTemplate
    height: theme.spacing(globalConstants.headerHeight),
  },
}));

const HeaderDesktop: FC<HeaderProps> = ({ hreflogo, items, login }) => {

  const classes = useStyles();
  const Login = login;

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <NavLink to={hreflogo}>
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
    </AppBar >
  );
};

export default HeaderDesktop;
