import React, { FC, useState } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { Typography } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';

export interface CopyTextTooltipProps extends TooltipProps {
  displayElement: React.ReactElement
  fullText: string
}

const CopyTextTooltip: FC<CopyTextTooltipProps> = ({ displayElement, fullText }) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Tooltip
      interactive
      title={isCopied ? 'Copied!' : <React.Fragment>{fullText} <FileCopyIcon /></React.Fragment>}
      onClick={() => {
        navigator.clipboard.writeText(fullText)
          .then(() => { setIsCopied(true) })
      }}
      onClose={() => {
        setIsCopied(false)
      }}
    >
      {displayElement}
    </Tooltip >
  )
}

export default CopyTextTooltip
