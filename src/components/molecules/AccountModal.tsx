import React, { FC, useState } from 'react';
import { EProvider } from '../../services/Web3Service';
import Web3 from 'web3';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, LoginOption, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Typography } from '../../components/atoms';
import { colors, fonts } from '../../theme';

export interface AccountModalProps {
  web3: Web3 | null;
  networkName: string | null;
  setProvider: (provider: EProvider) => void;
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
    <React.Fragment>
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
                  onClick={() => {
                    setProvider(provider);
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
    </React.Fragment>
  );
};

export default AccountModal;
