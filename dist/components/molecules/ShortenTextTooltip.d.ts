import { FC } from 'react';
export interface ShortenTextTooltipProps {
    value: string;
    maxLength?: number;
    charsShownCount?: number;
}
declare const ShortenTextTooltip: FC<ShortenTextTooltipProps>;
export default ShortenTextTooltip;
