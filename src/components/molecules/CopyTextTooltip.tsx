import React, { FC, useState } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { Typography, makeStyles } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export interface CopyTextTooltipProps extends TooltipProps {
  displayElement: React.ReactElement
  fullText: string
}

const useStyles = makeStyles(() => ({
  tooltipTitle: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const CopyTextTooltip: FC<CopyTextTooltipProps> = ({ displayElement, fullText }) => {
  const [isCopied, setIsCopied] = useState(false)

  const classes = useStyles()

  const tooltipContent = (
    <div className={classes.tooltipTitle}>
      <FileCopyIcon />
      <Typography variant="body2">
        {fullText}
      </Typography>
    </div>
  )

  return (
    <Tooltip
      interactive
      title={isCopied ? <Typography variant="body2">Copied!</Typography> : tooltipContent}
      onClick={() => {
        navigator.clipboard.writeText(fullText)
          .then(() => { setIsCopied(true) })
      }}
      onClose={() => {
        setIsCopied(false)
      }}
    >
      {displayElement}
    </Tooltip>
  )
}

export default CopyTextTooltip
