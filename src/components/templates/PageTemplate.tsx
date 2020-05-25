import React, { FC, HTMLAttributes } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { globalConstants } from '../../theme'

export type PageTemplateProps = HTMLAttributes<HTMLElement>;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // as the header has fixed position, we need to match its height
    marginTop: theme.spacing(globalConstants.headerHeight),
    width: '100%',
  },
}))

const PageTemplate: FC<PageTemplateProps> = ({ children, className = '', ...props }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default PageTemplate
