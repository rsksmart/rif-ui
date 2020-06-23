import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import Button from './Button'

export interface LoginOptionProps {
  className?: string
  onClick: () => void
  content: React.ReactElement
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 5,
    margin: 5,
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxHeight: theme.spacing(5),
    justifyContent: 'center',
  },
}))

const LoginOption: FC<LoginOptionProps> = ({
  className = '', onClick,
  content, ...rest
}) => {
  const classes = useStyles()
  return (
    <Button
      className={`${classes.root} ${className}`}
      block
      rounded
      variant="outlined"
      color="primary"
      onClick={onClick}
      {...rest}
    >
      <div className={classes.content}>
        {content}
      </div>
    </Button>
  )
}

export default LoginOption
