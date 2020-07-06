import React, { FC } from 'react'
import Web3 from 'web3'
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

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  availableProviders,
  open,
  handleClose,
  onProviderSet,
}) => (
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
                  providerInfo={providerInfo}
                  key={providerInfo.eProvider}
                  onClick={async (): Promise<void> => {
                    await setProvider(providerInfo.eProvider, onProviderSet)
                  }}
                />
              ),
            )
          }
        {!availableProviders
            && (
              // empty LoginOption means suggest to install Nifty wallet
              <LoginOption />
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

export default AccountModal
