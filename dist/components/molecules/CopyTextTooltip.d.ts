import React, { FC } from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip';
export interface CopyTextTooltipProps extends TooltipProps {
    displayElement: React.ReactElement;
    fullText: string;
}
declare const CopyTextTooltip: FC<CopyTextTooltipProps>;
export default CopyTextTooltip;
