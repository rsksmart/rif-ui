import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RIFSpinner from '../atoms/Spinner'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  spinnerWrapper: {
    position: 'absolute',
  },
}))

const WithSpinner = (WrappedComponent: React.ElementType) => {
  const Spinner = ({ isLoading, ...props }) => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        {
          isLoading
          && (
            <RIFSpinner className={classes.spinnerWrapper} />
          )
        }
        <WrappedComponent {...props} />
      </div>
    )
  }
  return Spinner
}

export default WithSpinner
