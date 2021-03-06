import React, { FC } from 'react'
import Web3 from 'web3'
import {
  Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
} from '../atoms'
import ProviderInfo, { EProvider } from '../../models/ProviderInfo'
import NetworkInfo from '../../models/NetworkInfo'

export interface AccountModalProps {
  web3?: Web3
  networkInfo?: NetworkInfo
  setProvider?: (provider: EProvider, onProviderSet?:
    (account?: string) => void) => Promise<void>
  availableProviders?: ProviderInfo[]
  onClose?: () => void
  onProviderSet?: (account) => void
  open: boolean
}

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  availableProviders,
  open,
  onClose,
  onProviderSet,
}) => (
  <Modal
    open={open}
    onClose={onClose}
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
                    if (setProvider) await setProvider(providerInfo.eProvider, onProviderSet)
                  }}
                />
              ),
            )
          }
        {!availableProviders
            && (
              // TODO: Create LoginOptionTemplate to extract this
              // empty LoginOption means suggest to install Nifty wallet
              <LoginOption />
            )}
      </ModalBody>
      <ModalFooter>
        <Button
          variant="outlined"
          color="secondary"
          block
          onClick={onClose}
        >
          Close
        </Button>
      </ModalFooter>
    </React.Fragment>
  </Modal>
)

export default AccountModal
