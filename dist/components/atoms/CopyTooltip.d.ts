import { FC } from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip';
export interface CopyTooltipProps extends TooltipProps {
    displayText: string;
    tooltipTitle: string;
}
declare const CopyTooltip: FC<CopyTooltipProps>;
export default CopyTooltip;
