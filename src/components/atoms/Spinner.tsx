import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { logoBlueIcon } from '../../assets/images'

export type SpinnerProps = {
  className?: string
}

const useStyles = makeStyles(() => ({
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  overlay: {
    zIndex: 2,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF55',
  },
  spinner: {
    display: 'inline-block',
    zIndex: 3,
    width: '50px',
    height: '50px',
    border: 'none',
    animation: '$spin 2s ease-in-out infinite',
  },
}))

const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  const classes = useStyles()
  return (
    <div className={`${classes.overlay} ${className}`}>
      <img className={classes.spinner} src={logoBlueIcon} alt="logo" />
    </div>
  )
}

export default Spinner
