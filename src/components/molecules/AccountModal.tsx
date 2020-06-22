import React, { FC } from 'react'
import Web3 from 'web3'
// import { EProvider } from '../../services/Web3Service'
import {
  Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
} from '../atoms'
import ProviderInfo, { EProvider, getProviderInfo } from '../../models/ProviderInfo'

export interface AccountModalProps {
  web3: Web3 | null
  networkName: string | null
  setProvider: (provider: EProvider, onProviderSet?:
    (account: string) => void) => Promise<void>
  // .ito - aca va a recibir un providerInfo en vez de Eprovider, asi se puede mostrar la img
  // .ito - when this is done, move back to providers and get the web3 providers from the provider
  availableProviders?: ProviderInfo[]
  providers?: EProvider[]
  handleClose?: () => void
  onProviderSet?: (account) => void
  open: boolean
}

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  availableProviders,
  providers,
  open,
  handleClose,
  onProviderSet,
}) => {
  availableProviders = availableProviders || [getProviderInfo(EProvider.METAMASK), getProviderInfo(EProvider.LOCAL)]
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
            (availableProviders || [EProvider.METAMASK, EProvider.LOCAL]).map(
              (provider) => (
                <LoginOption
                  key={provider.eProvider}
                  text={provider.name}
                  onClick={async (): Promise<void> => {
                    await setProvider(provider.eProvider, onProviderSet)
                  }}
                />
              ),
            )
            // (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(
            //   (provider) => (
            //     <LoginOption
            //       key={provider}
            //       text={provider}
            //       onClick={async (): Promise<void> => {
            //         await setProvider(provider, onProviderSet)
            //       }}
            //     />
            //   ),
            // )
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
