import React, { FC } from 'react'
import Hidden from '@material-ui/core/Hidden'
import { HeaderProps } from './HeaderProps'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header: FC<HeaderProps> = (props) => (
  <React.Fragment>
    <Hidden smDown>
      <HeaderDesktop {...props} />
    </Hidden>
    <Hidden mdUp>
      <HeaderMobile {...props} />
    </Hidden>
  </React.Fragment>
)

export default Header
