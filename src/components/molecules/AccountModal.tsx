import React, { FC } from 'react'
import Web3 from 'web3'
import { EProvider } from '../../services/Web3Service'
import {
  Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
} from '../atoms'
import { Typography, makeStyles } from '@material-ui/core'

export interface AccountModalProps {
  web3: Web3 | null
  networkName: string | null
  setProvider: (provider: EProvider, onProviderSet?:
    (account: string) => void) => Promise<void>
  providers?: EProvider[]
  handleClose?: () => void
  onProviderSet?: (account) => void
  open: boolean
  currentNetworkId: Number
  expectedNetworkId: Number
}

const useStyles = makeStyles(() => ({
  noNetworkMatch: {
    color: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  providers,
  open,
  handleClose,
  onProviderSet,
  currentNetworkId,
  expectedNetworkId
}) => {

  const classes = useStyles()
  const networkIdMatches = currentNetworkId === expectedNetworkId
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="account-modal-title"
      aria-describedby="account-modal-description"
    >
      <React.Fragment>
        <ModalHeader>
          <ModalTitle>Connect a wallet to get started</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {
            networkIdMatches && (
              (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(
                (provider) => (
                  <LoginOption
                    key={provider}
                    text={provider}
                    onClick={async (): Promise<void> => {
                      await setProvider(provider, onProviderSet)
                    }}
                  />
                ),
              )
            )
          }
          {
            !networkIdMatches && (
              <Typography className={classes.noNetworkMatch}>Please sign in to the proper network</Typography>
            )
          }
        </ModalBody>

        <ModalFooter>
          <Button
            variant="outlined"
            color="secondary"
            block
            onClick={handleClose}
          >
            Close
        </Button>
        </ModalFooter>
      </React.Fragment>
    </Modal>
  )
}
export default AccountModal
