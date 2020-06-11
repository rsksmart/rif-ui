import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

export interface NetworkIndicatorProps {
  currentNetwork?: Number
  requiredNetwork?: Number
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


const NetworkIndicator: FC<NetworkIndicatorProps> =
  ({
    currentNetwork, requiredNetwork, onRightNetworkMessage,
    onWrongNetworkMessage, noNetworkMessage
  }) => {

    // .ito - DELETEME
    console.log('****************************************************************')
    console.log('current network: ', currentNetwork)
    console.log('****************************************************************')

    const networkStatus = getNetworkStatus(currentNetwork, requiredNetwork)

    // .ito - TODO: use map
    const iconPerNetworkStatus = {}
    iconPerNetworkStatus[NetworkStatus.NO_NETWORK] = (
      <Tooltip title={noNetworkMessage || defaultNoNetworkMessage}>
        <WarningIcon />
      </Tooltip>
    )
    iconPerNetworkStatus[NetworkStatus.NETWORK_MISSMATCH] = (
      <Tooltip title={onWrongNetworkMessage || deaulftOnWrongNetworkMessage}>
        <ErrorIcon />
      </Tooltip>
    )
    iconPerNetworkStatus[NetworkStatus.RIGHT_NETWORK] = (
      <Tooltip title={onRightNetworkMessage || defaultOnRightNetworkMessage}>
        <CheckIcon />
      </Tooltip>
    )

    return (
      iconPerNetworkStatus[networkStatus]
    )
  }

export default NetworkIndicator
