import { SliderProps } from '@material-ui/core/Slider';
import { FC } from 'react';
export interface RangeSliderWithInputsProps extends SliderProps {
    values: {
        start: number;
        end: number;
    };
    unit?: string;
    handleChange: ({ min, max }: {
        min: any;
        max: any;
    }) => void;
    className?: string;
}
declare const RangeSliderWithInputs: FC<RangeSliderWithInputsProps>;
export default RangeSliderWithInputs;
