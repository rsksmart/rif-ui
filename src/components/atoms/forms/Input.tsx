import React, { FC } from 'react';
import { Input as MUIInput, InputProps as MUIInputProps } from '@material-ui/core';

export interface InputProps extends MUIInputProps {
	maxValue?: number;
	minValue?: number;
};

const Input: FC<InputProps> = ({ maxValue, minValue, children, ...rest }) => {
	return (
		<MUIInput
			inputProps={{
				...rest.inputProps,
				min: minValue,
				max: maxValue,
			}} {...rest} />
	);
};

export default Input;
