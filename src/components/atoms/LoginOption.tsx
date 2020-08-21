import React, { FC } from 'react'
import { makeStyles, Theme, Tooltip } from '@material-ui/core'
import Button from './Button'
import ProviderInfo, { EProvider } from '../../models/ProviderInfo'
import { niftyIconImg } from '../../assets/images'

export interface LoginOptionProps {
  className?: string
  onClick?: () => void
  providerInfo?: ProviderInfo
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 5,
    margin: 5,
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxHeight: theme.spacing(5),
    justifyContent: 'center',
  },
  imageWrapper: {
    maxHeight: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
}))

/**
 * If not providerInfo is received, we assume there's no provider available and so suggest to install Nifty wallet
 * Same happens when no onClick is provided. We open the Nifty page on a new tab
 */
const LoginOption: FC<LoginOptionProps> = ({
  className = '',
  onClick,
  providerInfo,
  ...rest
}) => {
  const classes = useStyles()

  const providerContent = (
    <div className={classes.content}>
      {
        providerInfo?.iconImg
        && (
          <img
            className={classes.imageWrapper}
            src={providerInfo?.iconImg}
            alt={`${providerInfo?.name} icon`}
          />
        )
      }
      {providerInfo?.name}
    </div>
  )

  const handleOnClick = () => {
    if (onClick) {
      return onClick()
    }
    return window.open('https://www.poa.network/for-users/nifty-wallet/getting-started', '_blank')
  }

  return (
    <Button
      className={`${classes.root} ${className}`}
      block
      rounded
      variant="outlined"
      color="primary"
      onClick={handleOnClick}
      {...rest}
    >
      {/* only with Nifty we display the Tooltip because atm we can't check if MetaMask is also enabled */}
      {!!providerInfo && providerInfo.eProvider === EProvider.NIFTY
        && (
        <Tooltip arrow title="Please, make sure you only have one browser wallet enabled.">
          {providerContent}
        </Tooltip>
        )}
      {!!providerInfo && providerInfo.eProvider !== EProvider.NIFTY
        && providerContent}
      {!providerInfo
        && (
        <div className={classes.content}>
          <img
            className={classes.imageWrapper}
            src={niftyIconImg}
            alt="Nifty wallet icon"
          />
          Install Nifty wallet
        </div>
        )}
    </Button>
  )
}

export default LoginOption
