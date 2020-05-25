import React, { FC, useState } from 'react'
import Web3 from 'web3'
import { makeStyles } from '@material-ui/core/styles'
import { EProvider } from '../../services/Web3Service'
import { shortenAddress } from '../../utils'
import { Button, Typography } from '../atoms'
import { colors, fonts } from '../../theme'
import AccountModal from './AccountModal'

export interface AccountProps {
  web3: Web3 | null
  networkName: string | null
  account: string | null
  setProvider: (provider: EProvider) => Promise<void>
  providers?: EProvider[]
}

const useStyles = makeStyles(() => ({
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
}))

const Account: FC<AccountProps> = ({
  web3,
  networkName,
  account,
  setProvider,
  providers,
}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleClose = (): void => setOpen(false)
  const handleOpen = (): void => setOpen(true)

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className={classes.button} variant="contained" color="primary" rounded>
        <Typography className={classes.accountText}>
          {!web3 && 'Connect wallet'}
          {web3 && networkName}
          {web3 && account && shortenAddress(account)}
        </Typography>
      </Button>

      <AccountModal
        open={open}
        handleClose={handleClose}
        networkName={networkName}
        web3={web3}
        setProvider={setProvider}
        providers={providers}
      />
    </React.Fragment>
  )
}

export default Account
