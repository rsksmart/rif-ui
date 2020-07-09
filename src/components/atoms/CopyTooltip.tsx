import React, { FC, useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { Typography } from '@material-ui/core'

export interface CopyTooltipProps {
  pretext?: string
  value: string
}

const CopyTooltip: FC<CopyTooltipProps> = ({ pretext, value }) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Tooltip
      interactive
      title={isCopied ? 'Copied!' : value}
      onClick={() => {
        navigator.clipboard.writeText(value)
          .then(() => { setIsCopied(true) })
      }}
      onClose={() => {
        setIsCopied(false)
      }}
    >
      <Typography>
        {pretext && `${pretext} ${value}`}
        {!pretext && value}
      </Typography>
    </Tooltip>
  )
}

export default CopyTooltip
