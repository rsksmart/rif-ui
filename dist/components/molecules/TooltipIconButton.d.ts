import React, { FC } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface TooltipIconButtonProps {
    tooltipTitle: string;
    iconButtonProps: IconButtonProps;
    icon: React.ReactNode;
}
declare const TooltipIconButton: FC<TooltipIconButtonProps>;
export default TooltipIconButton;
