import React from 'react';
import './WithSpinner.css';
declare const WithSpinner: (WrappedComponent: React.ElementType<any>) => ({ isLoading, ...props }: {
    [x: string]: any;
    isLoading: any;
}) => JSX.Element;
export default WithSpinner;
