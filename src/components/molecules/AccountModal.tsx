import React, { FC } from 'react';
import { EProvider } from '../../services/Web3Service';
import Web3 from 'web3';
import { Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../../components/atoms';

export interface AccountModalProps {
  web3: Web3 | null;
  networkName: string | null;
  setProvider: (provider: EProvider) => Promise<void>;
  providers?: EProvider[];
  handleClose: () => void;
  open: boolean,
};

const AccountModal: FC<AccountModalProps> = ({
  setProvider,
  providers,
  open,
  handleClose,
}) => {

  return (
    <Modal
      open={open} onClose={handleClose}
      aria-labelledby="account-modal-title"
      aria-describedby="account-modal-description">
      <React.Fragment>
        <ModalHeader>
          <ModalTitle>Connect a wallet to get started</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {(providers || [EProvider.METAMASK, EProvider.LOCAL]).map(
            provider => (
              <LoginOption
                key={provider}
                text={provider}
                onClick={async () => {
                  await setProvider(provider);
                  handleClose();
                }}
              />
            ),
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant='outlined' color='secondary' block onClick={handleClose}>Close</Button>
        </ModalFooter>
      </React.Fragment>
    </Modal>
  );
};

export default AccountModal;
