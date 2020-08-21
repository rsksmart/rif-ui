import React, { FC, useState, useEffect } from 'react'
import Web3 from 'web3'
import { makeStyles, Theme } from '@material-ui/core/styles'
import ProviderInfo, { EProvider } from '../../models/ProviderInfo'
import { shortenString } from '../../utils'
import { Button, NetworkIndicator, Typography } from '../atoms'
import { colors, fonts } from '../../theme'
import { AccountModal, WrongNetworkModal } from '../molecules'
import ConnectionStatus from '../../models/Enums'
import { getConnectionStatus } from '../../services/Web3Service'
import NetworkInfo from '../../models/NetworkInfo'

export interface AccountProps {
  requiredNetworkName: string
  setProvider: (provider: EProvider) => Promise<void>
  web3?: Web3
  networkInfo?: NetworkInfo
  account?: string
  availableProviders?: ProviderInfo[]
  requiredNetworkId?: number
  onCorrectNetworkMessage?: string
  onNetworkMismatchMessage?: string
  noNetworkMessage?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  accountText: {
    fontSize: fonts.size.tiny,
    textAlign: 'center',
  },
  button: {
    border: `1px solid ${colors.white}`,
    '&:hover': {
      border: `1px solid ${colors.transparent}`,
    },
  },
  networkIndicator: {
    marginRight: theme.spacing(1),
  },
}))

const Account: FC<AccountProps> = (props) => {
  const {
    web3,
    networkInfo,
    account,
    setProvider,
    availableProviders,
    requiredNetworkId,
    onCorrectNetworkMessage,
    onNetworkMismatchMessage,
    noNetworkMessage,
    requiredNetworkName,
  } = props
  const classes = useStyles()

  const [accountModalOpen, setAccountModalOpen] = useState(false)
  const handleAccountModalClose = (): void => setAccountModalOpen(false)
  const handleAccountModalOpen = (): void => setAccountModalOpen(true)
  const [wrongNetworkModalOpen, setWrongNetworkModalOpen] = useState(false)
  const openWrongNetworkModal = (): void => setWrongNetworkModalOpen(true)
  const closeWrongNetworkModal = (): void => setWrongNetworkModalOpen(false)
  const connectionStatus: ConnectionStatus = getConnectionStatus(web3, requiredNetworkId, networkInfo?.networkId, account)

  useEffect(() => {
    if (connectionStatus === ConnectionStatus.WrongNetwork) {
      openWrongNetworkModal()
    } else if (connectionStatus === ConnectionStatus.LoggedIn) closeWrongNetworkModal()
  }, [connectionStatus])

  const accountText = (): string => {
    if (connectionStatus === ConnectionStatus.LoggedOut) return 'Connect wallet'

    if (connectionStatus === ConnectionStatus.WrongNetwork) return 'Wrong Network'

    if (account) {
      // means connectionStatus  === ConnectionStatus.LoggedIn
      return shortenString(account)
    }
    return 'Unlock your wallet'
  }

  const onAccountClicked = (): void => {
    if (connectionStatus === ConnectionStatus.WrongNetwork) return openWrongNetworkModal()

    if (connectionStatus === ConnectionStatus.LoggedOut) return handleAccountModalOpen()
  }

  return (
    <React.Fragment>
      <Button onClick={onAccountClicked} className={classes.button} variant="contained" color="primary" rounded>
        {
          !!requiredNetworkId && (
            <NetworkIndicator
              iconClassName={classes.networkIndicator}
              currentNetworkId={networkInfo?.networkId}
              requiredNetworkId={requiredNetworkId}
              onCorrectNetworkMessage={onCorrectNetworkMessage}
              onNetworkMismatchMessage={onNetworkMismatchMessage}
              noNetworkMessage={noNetworkMessage}
            />
          )
        }
        <Typography className={classes.accountText}>
          {accountText()}
        </Typography>
      </Button>
      <AccountModal
        open={accountModalOpen}
        onClose={handleAccountModalClose}
        web3={web3}
        onProviderSet={handleAccountModalClose}
        setProvider={setProvider}
        availableProviders={availableProviders}
      />
      <WrongNetworkModal
        open={wrongNetworkModalOpen}
        onClose={closeWrongNetworkModal}
        requiredNetworkName={requiredNetworkName}
        currentNetworkName={networkInfo?.name}
      />
    </React.Fragment>
  )
}

export default Account
