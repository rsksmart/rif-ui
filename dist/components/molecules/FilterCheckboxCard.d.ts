import React, { FC } from 'react';
import { LabeledCheckboxProps } from './LabeledCheckbox';
export interface FilterCheckboxCardProps {
    className?: string;
    items: LabeledCheckboxProps[];
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const FilterCheckboxCard: FC<FilterCheckboxCardProps>;
export default FilterCheckboxCard;
