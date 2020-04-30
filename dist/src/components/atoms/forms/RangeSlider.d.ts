import { FC, FormEvent } from 'react';
import { SliderProps as MUISliderProps } from '@material-ui/core/Slider';
interface RangeSliderProps extends MUISliderProps {
    handleChange: (event: FormEvent<Element>, newValue: number | number[]) => void;
}
declare const RangeSlider: FC<RangeSliderProps>;
export default RangeSlider;
