import React from 'react';
declare const WithSpinner: (WrappedComponent: React.ElementType<any>) => ({ isLoading, ...props }: {
    [x: string]: any;
    isLoading: any;
}) => JSX.Element;
export default WithSpinner;
