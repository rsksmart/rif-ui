import React, { FC } from 'react';
import { TabsProps } from '@material-ui/core/Tabs';
export interface StyledTabsProps {
    value: string;
    onChange: (event: React.ChangeEvent<{}>, newValue: string) => void;
}
declare const StyledTabs: FC<TabsProps>;
export default StyledTabs;
