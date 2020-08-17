import React, { FC, useState } from 'react'
import Web3 from 'web3'
import { makeStyles, Theme } from '@material-ui/core/styles'
import ProviderInfo, { EProvider } from '../../models/ProviderInfo'
import { shortenString } from '../../utils'
import { Button, Typography } from '../atoms'
import { colors, fonts } from '../../theme'
import AccountModal from './AccountModal'
import NetworkIndicator from '../atoms/NetworkIndicator'

export interface AccountProps {
  web3: Web3 | null
  networkName: string | null
  account: string | null
  setProvider: (provider: EProvider) => Promise<void>
  availableProviders?: ProviderInfo[]
  currentNetworkId?: number
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

const Account: FC<AccountProps> = ({
  web3,
  networkName,
  account,
  setProvider,
  availableProviders,
  currentNetworkId,
  requiredNetworkId,
  onCorrectNetworkMessage,
  onNetworkMismatchMessage,
  noNetworkMessage,
}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleClose = (): void => setOpen(false)
  const handleOpen = (): void => setOpen(true)

  const accountText = (): string => {
    if (!web3) return 'Connect wallet'

    if (currentNetworkId !== requiredNetworkId) {
      return 'Wrong Network'
    }

    if (account) {
      return shortenString(account)
    }
    return 'Unlock your wallet'
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className={classes.button} variant="contained" color="primary" rounded>
        {
          !!requiredNetworkId && (
            <NetworkIndicator
              iconClassName={classes.networkIndicator}
              currentNetworkId={currentNetworkId}
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
        open={open}
        handleClose={handleClose}
        networkName={networkName}
        web3={web3}
        onProviderSet={handleClose}
        setProvider={setProvider}
        availableProviders={availableProviders}
      />
    </React.Fragment>
  )
}

export default Account
