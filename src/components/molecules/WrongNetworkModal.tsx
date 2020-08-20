import React, { FC, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '../../theme'
import ModalDialogue from './ModalDialogue'

export interface WrongNetworkModalProps {
  open: boolean
  currentNetworkName?: string
  requiredNetworkName: string
}

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    border: `1px solid ${colors.primary}`,
    padding: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const WrongNetworkModal: FC<WrongNetworkModalProps> = ({ open, currentNetworkName = 'Private network', requiredNetworkName }) => {
  const [isOpen, setIsOpen] = useState(open)
  const handleOnClose = () => setIsOpen(false)

  const classes = useStyles()
  return (
    <ModalDialogue
      title={`Switch to the ${requiredNetworkName} network`}
      open={isOpen}
      onClose={handleOnClose}
    >
      <React.Fragment>
        <Typography gutterBottom align="center" color="secondary" component="div">
          This dApp only works on the
          {' '}
          {requiredNetworkName}
          .
          You are currently on
          {' '}
          <Box display="inline" fontWeight="fontWeightMedium">{currentNetworkName}</Box>
          .
        </Typography>
        <Grid
          container
          className={classes.boxContainer}
          alignItems="center"
        >
          <Grid item sm={3} className={classes.loaderContainer}>
            <CircularProgress />
          </Grid>
          <Grid item sm={9}>
            <Typography gutterBottom color="secondary">Waiting for the right network...</Typography>
            <Typography color="primary" component="div">
              <Box fontWeight="fontWeightMedium">Switch networks on your provider</Box>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </ModalDialogue>
  )
}
export default WrongNetworkModal
