import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import { green, yellow } from '@material-ui/core/colors';

export interface NetworkIndicatorProps {
  iconClassName?: string
  currentNetwork?: number
  requiredNetwork?: number
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

const getNetworkStatus = (currentNetwork, requiredNetwork): NetworkStatus => {
  if (currentNetwork) {
    if (currentNetwork === requiredNetwork) {
      return NetworkStatus.RIGHT_NETWORK
    }
    return NetworkStatus.NETWORK_MISSMATCH
  }
  return NetworkStatus.NO_NETWORK
}


const NetworkIndicator: FC<NetworkIndicatorProps> = ({
  iconClassName = '',
  currentNetwork, requiredNetwork, onRightNetworkMessage,
  onWrongNetworkMessage, noNetworkMessage,
}) => {
  const networkStatus = getNetworkStatus(currentNetwork, requiredNetwork)

  // .ito - TODO: use map
  const iconPerNetworkStatus = {}
  iconPerNetworkStatus[NetworkStatus.NO_NETWORK] = (
    <Tooltip title={noNetworkMessage || defaultNoNetworkMessage}>
      <WarningIcon className={iconClassName} style={{ color: yellow[800] }} />
    </Tooltip>
  )
  iconPerNetworkStatus[NetworkStatus.NETWORK_MISSMATCH] = (
    <Tooltip title={onWrongNetworkMessage || deaulftOnWrongNetworkMessage}>
      <ErrorIcon className={iconClassName} color='error' />
    </Tooltip>
  )
  iconPerNetworkStatus[NetworkStatus.RIGHT_NETWORK] = (
    <Tooltip title={onRightNetworkMessage || defaultOnRightNetworkMessage}>
      <CheckCircleOutlineOutlinedIcon className={iconClassName} style={{ color: green[300] }} />
    </Tooltip>
  )

  return (
    iconPerNetworkStatus[networkStatus]
  )
}

export default NetworkIndicator
