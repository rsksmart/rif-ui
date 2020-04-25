import { FC } from 'react';
import { CheckboxProps } from '../atoms/forms/Checkbox';
export interface LabeledCheckboxProps extends CheckboxProps {
    labelText: string;
    labelClassName?: string;
}
declare const LabeledCheckbox: FC<LabeledCheckboxProps>;
export default LabeledCheckbox;
