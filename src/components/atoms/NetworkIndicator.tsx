import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import { green, yellow } from '@material-ui/core/colors'

export interface NetworkIndicatorProps {
  iconClassName?: string
  currentNetworkId?: number
  requiredNetworkId?: number
  onCorrectNetworkMessage?: string
  onNetworkMismatchMessage?: string
  noNetworkMessage?: string
}

const defaultonCorrectNetworkMessage = 'You are on the right network'
const deaulftonNetworkMismatchMessage = 'You are on the wrong network'
const defaultNoNetworkMessage = 'You are not connected to any network'

export enum NetworkStatus {
  NO_NETWORK = 1,
  NETWORK_MISSMATCH = 2,
  CORRECT_NETWORK = 3
}

const getNetworkStatus = (currentNetworkId, requiredNetworkId): NetworkStatus => {
  if (!currentNetworkId) return NetworkStatus.NO_NETWORK

  if (currentNetworkId === requiredNetworkId) return NetworkStatus.CORRECT_NETWORK
  return NetworkStatus.NETWORK_MISSMATCH
}

const NetworkIndicator: FC<NetworkIndicatorProps> = ({
  iconClassName = '',
  currentNetworkId, requiredNetworkId, onCorrectNetworkMessage,
  onNetworkMismatchMessage, noNetworkMessage,
}) => {
  const networkStatus = getNetworkStatus(currentNetworkId, requiredNetworkId)

  const iconPerNetworkStatus = new Map()
  iconPerNetworkStatus.set(NetworkStatus.NO_NETWORK, (
    <Tooltip title={noNetworkMessage || defaultNoNetworkMessage}>
      <WarningIcon className={iconClassName} style={{ color: yellow[800] }} />
    </Tooltip>
  ))
  iconPerNetworkStatus.set(NetworkStatus.NETWORK_MISSMATCH, (
    <Tooltip title={onNetworkMismatchMessage || deaulftonNetworkMismatchMessage}>
      <ErrorIcon className={iconClassName} color="error" />
    </Tooltip>
  ))
  iconPerNetworkStatus.set(NetworkStatus.CORRECT_NETWORK, (
    <Tooltip title={onCorrectNetworkMessage || defaultonCorrectNetworkMessage}>
      <CheckCircleOutlineOutlinedIcon
        className={iconClassName}
        style={{ color: green[300] }}
      />
    </Tooltip>
  ))

  return (
    iconPerNetworkStatus.get(networkStatus)
  )
}

export default NetworkIndicator
