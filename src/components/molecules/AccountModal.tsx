import React, { FC } from 'react'
import Web3 from 'web3'
import { Typography, Theme, makeStyles } from '@material-ui/core'
import {
  Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
} from '../atoms'
import ProviderInfo, { EProvider } from '../../models/ProviderInfo'

export interface AccountModalProps {
  web3: Web3 | null
  networkName: string | null
  setProvider: (provider: EProvider, onProviderSet?:
    (account: string) => void) => Promise<void>
  availableProviders?: ProviderInfo[]
  handleClose?: () => void
  onProviderSet?: (account) => void
  open: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
  imageWrapper: {
    maxHeight: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
}))

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  availableProviders,
  open,
  handleClose,
  onProviderSet,
}) => {
  const classes = useStyles()
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
            availableProviders && availableProviders.length && availableProviders.map(
              (providerInfo) => (
                <LoginOption
                  key={providerInfo.eProvider}
                  content={(
                    <React.Fragment>
                      {
                        providerInfo.iconImg
                        && (
                          <img
                            className={classes.imageWrapper}
                            src={providerInfo.iconImg}
                            alt={`${providerInfo.name} icon`}
                          />
                        )
                      }
                      {providerInfo.name}
                    </React.Fragment>
                  )}
                  onClick={async (): Promise<void> => {
                    await setProvider(providerInfo.eProvider, onProviderSet)
                  }}
                />
              ),
            )
          }
          {!availableProviders
            && (
              // TODO: redirect to install Nifty Wallet
              <LoginOption
                content={<Typography>Install Nifty</Typography>}
                onClick={() => ''}
              />
            )}
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
