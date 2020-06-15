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
  onRightNetworkMessage?: string
  onWrongNetworkMessage?: string
  noNetworkMessage?: string
}

const defaultOnRightNetworkMessage = 'You are on the right network'
const deaulftOnWrongNetworkMessage = 'You are on the wrong network'
const defaultNoNetworkMessage = 'You are not connected to any network'

export enum NetworkStatus {
  NO_NETWORK = 1,
  NETWORK_MISSMATCH = 2,
  RIGHT_NETWORK = 3
}

const getNetworkStatus = (currentNetworkId, requiredNetworkId): NetworkStatus => {
  if (currentNetworkId) {
    if (currentNetworkId === requiredNetworkId) {
      return NetworkStatus.RIGHT_NETWORK
    }
    return NetworkStatus.NETWORK_MISSMATCH
  }
  return NetworkStatus.NO_NETWORK
}

const NetworkIndicator: FC<NetworkIndicatorProps> = ({
  iconClassName = '',
  currentNetworkId, requiredNetworkId, onRightNetworkMessage,
  onWrongNetworkMessage, noNetworkMessage,
}) => {
  const networkStatus = getNetworkStatus(currentNetworkId, requiredNetworkId)

  const iconPerNetworkStatus = new Map()
  iconPerNetworkStatus.set(NetworkStatus.NO_NETWORK, (
    <Tooltip title={noNetworkMessage || defaultNoNetworkMessage}>
      <WarningIcon className={iconClassName} style={{ color: yellow[800] }} />
    </Tooltip>
  ))
  iconPerNetworkStatus.set(NetworkStatus.NETWORK_MISSMATCH, (
    <Tooltip title={onWrongNetworkMessage || deaulftOnWrongNetworkMessage}>
      <ErrorIcon className={iconClassName} color="error" />
    </Tooltip>
  ))
  iconPerNetworkStatus.set(NetworkStatus.RIGHT_NETWORK, (
    <Tooltip title={onRightNetworkMessage || defaultOnRightNetworkMessage}>
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
