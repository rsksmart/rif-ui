import Slider, { SliderProps } from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import UnitsInput from './UnitsInput';
import { Typography } from '../atoms';

export interface RangeSliderWithInputsProps extends SliderProps {
  values: {
    start: number,
    end: number
  };
  unit?: string;
  handleChange: ({ min, max }) => void;
  className?: string;
};

const useStyles = makeStyles(() =>
  ({
    root: {
      width: "100%",
    },
    inputsContainer: {
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    toContainer: {
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  })
);

const RangeSliderWithInputs: FC<RangeSliderWithInputsProps> = ({ values: { start: startValue, end: endValue }, unit, handleChange, className, ...rest }) => {
  const classes = useStyles();

  const maxValue = rest.max || endValue;
  const minValue = rest.min || startValue
  const step = rest.step || 1;

  const handleStartInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStartValue = event.target.value === '' ? startValue : Number(event.target.value);
    handleChange({ min: newStartValue, max: endValue })
  };

  const handleEndInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndValue = event.target.value === '' ? endValue : Number(event.target.value);
    handleChange({ min: startValue, max: newEndValue })
  };

  const handleSliderChange = (_: any, newSliderValue: number | number[]) => {
    handleChange({ min: newSliderValue[0], max: newSliderValue[1] })
  }

  const handleStartValueBlur = () => {
    if (startValue < minValue) {
      handleChange({ min: minValue, max: endValue })
    } else if (startValue > endValue) {
      handleChange({ min: endValue, max: endValue })
    }
  };

  const handleEndValueBlur = () => {
    if (endValue < startValue) {
      handleChange({ min: minValue, max: startValue })
    } else if (endValue > maxValue) {
      handleChange({ min: minValue, max: maxValue })
    }
  };

  const getCommonInputValues = () => {
    return {
      maxValue: maxValue,
      minValue: minValue,
      step: step,
      units: unit,
    }
  }

  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <Slider value={[startValue, endValue]} {...rest} onChange={handleSliderChange} />
      <div className={classes.inputsContainer}>
        <UnitsInput
          handleOnBlur={handleStartValueBlur}
          handleOnChange={handleStartInputChange}
          {...getCommonInputValues()}
          value={startValue}
        />
        <Typography className={classes.toContainer} weight='bold'>
          to
        </Typography>
        <UnitsInput
          handleOnBlur={handleEndValueBlur}
          handleOnChange={handleEndInputChange}
          {...getCommonInputValues()}
          value={endValue}
        />
      </div>
    </div>
  );
}

export default RangeSliderWithInputs;