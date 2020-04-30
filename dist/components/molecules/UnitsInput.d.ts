import React, { FC } from 'react';
import { InputProps } from '../atoms/forms/Input';
export interface UnitsInputProps extends InputProps {
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnBlur: () => void;
    maxValue?: number;
    minValue?: number;
    step?: number;
    units?: string;
}
declare const UnitsInput: FC<UnitsInputProps>;
export default UnitsInput;
