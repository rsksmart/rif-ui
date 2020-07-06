import React, { FC, useState } from 'react'
import {
  AppBar,
  Divider,
  Drawer, Toolbar,
  IconButton, List, ListItem,
  ListItemText, ListItemIcon,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { colors, globalConstants } from '../../../theme'
import { LogoNavbar } from '../../atoms'
import { HeaderProps, HeaderItemProps } from './HeaderProps'
import { removeEmptySpaces } from '../../../utils'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => createStyles({
  loginContainer: {
    display: 'flex',
    marginLeft: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  mobileAppBar: {
    boxShadow: 'none',
    // this height needs to be equal to the marginTop of PageTemplate
    height: theme.spacing(globalConstants.headerHeight),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mobileAppBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  mobileNavLink: {
    alignItems: 'center',
    color: colors.gray4,
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    '&:hover': {
      color: colors.gray5,
      textDecoration: 'none',
    },
  },
  mobileNavLinkActive: {
    color: `${colors.primary} !important`,
  },
}))

const HeaderMobile: FC<HeaderProps> = ({ hreflogo, items, login }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const Login = login

  const toggleDrawer = (isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ): void => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setOpen(isOpen)
  }

  return (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <AppBar
        position="fixed"
        className={
          `${classes.mobileAppBar} ${open ? classes.mobileAppBarShift : ''}`.trim()
        }
      >
        <Toolbar>
          {!open && (
            <React.Fragment>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <NavLink to={hreflogo}>
                <LogoNavbar />
              </NavLink>
              <div className={classes.loginContainer}>
                <Login />
              </div>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClick={toggleDrawer(false)}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            !!items.length
            && items.map((headerItem: HeaderItemProps) => (
              <ListItem
                button
                key={`him-${removeEmptySpaces(headerItem.title)}`}
              >
                <NavLink
                  to={headerItem.to}
                  className={classes.mobileNavLink}
                  activeClassName={classes.mobileNavLinkActive}
                >
                  <ListItemIcon>
                    {headerItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={headerItem.title} />
                </NavLink>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </div>

  )
}

export default HeaderMobile
