import { FC } from 'react';
import { SliderProps as MUISliderProps } from '@material-ui/core/Slider';
export interface RangeSliderWithInputsProps extends MUISliderProps {
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
