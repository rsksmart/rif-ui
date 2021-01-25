import React, { FC } from 'react'
import {
  AppBar, Grid, ListItemIcon, Toolbar,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { ActionHeaderItemProps, HeaderProps, NavItemProps } from './HeaderProps'
import { LogoNavbar } from '../../atoms'
import { colors, fonts, globalConstants } from '../../../theme'
import { removeEmptySpaces } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  activeNavlink: {
    color: `${colors.white} !important`,
    fontWeight: fonts.weight.medium,
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
    display: 'flex',
  },
  root: {
    boxShadow: 'none',
    // this height needs to be equal to the marginTop of PageTemplate
    height: theme.spacing(globalConstants.headerHeight),
  },
  itemsEnd: {
    alignItems: 'center',
  },
}))

const HeaderDesktop: FC<HeaderProps> = ({
  hreflogo, itemsStart, itemsEnd, login,
}) => {
  const classes = useStyles()
  const Login = login

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Grid
          container
        >
          <Grid item xs={1}>
            <NavLink to={hreflogo}>
              <LogoNavbar />
            </NavLink>
          </Grid>
          <Grid
            item
            xs={7}
            container
            justify="flex-start"
          >
            {
              !!itemsStart?.length
              && itemsStart.map((navItem: NavItemProps) => (
                <Typography
                  className={classes.navLinkContainer}
                  key={`hi-${removeEmptySpaces(navItem.title)}`}
                >
                  <NavLink
                    className={classes.navLink}
                    activeClassName={classes.activeNavlink}
                    {...navItem}
                  >
                    {navItem.title}
                  </NavLink>
                </Typography>
              ))
            }
          </Grid>
          <Grid
            item
            xs={4}
            container
            justify="flex-end"
            alignContent="center"
          >
            {
              !!itemsEnd?.length
              && itemsEnd.map(({ icon, ...rest }: ActionHeaderItemProps) => (
                <ListItemIcon
                  className={classes.itemsEnd}
                  {...rest}
                >
                  {icon}
                </ListItemIcon>
              ))
            }
            <Login />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderDesktop
