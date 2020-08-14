import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import CopyTextTooltip from './CopyTextTooltip'
import { shortenString } from '../../utils'

export interface ShortenTextTooltipProps {
  value: string
  maxLength?: number
  charsShownCount?: number
}

const ShortenTextTooltip: FC<ShortenTextTooltipProps> = ({ value, maxLength = 20, charsShownCount }) => (
  <React.Fragment>
    {
      value.length > maxLength
      && (
        <CopyTextTooltip
          displayElement={<Typography variant="body2">{shortenString(value, maxLength, charsShownCount || maxLength - 5)}</Typography>}
          fullText={value}
        />
      )
    }
    {
      value.length <= maxLength
      && value
    }
  </React.Fragment>
)

export default ShortenTextTooltip
