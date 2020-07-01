import React, { FC } from 'react';
export interface LoginOptionProps {
    className?: string;
    onClick: () => void;
    content: React.ReactElement;
}
declare const LoginOption: FC<LoginOptionProps>;
export default LoginOption;
