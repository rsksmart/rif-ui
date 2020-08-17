import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import ModalDialogue from './ModalDialogue'

export interface WrongNetworkModalProps {
  open: boolean
}

// TODO: improve styles
const WrongNetworkModal: FC<WrongNetworkModalProps> = ({ open, ...rest }) => (
  <ModalDialogue title="Switch your network" open={open} {...rest}>
    <Typography>
      You are on the wrong network, please switch to the proper network
    </Typography>
  </ModalDialogue>
)

export default WrongNetworkModal
