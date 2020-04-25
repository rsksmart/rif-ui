import React, { FC } from 'react';
export interface SwitchTabsProps {
    label1: string;
    label2: string;
    value?: 0 | 1;
    onChange: (event: React.ChangeEvent<{}>, value: any) => void;
}
declare const SwitchTabs: FC<SwitchTabsProps>;
export default SwitchTabs;
