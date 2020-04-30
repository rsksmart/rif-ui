import { FC } from 'react';
export interface LoginOptionProps {
    className?: string;
    onClick: () => void;
    text: string;
}
declare const LoginOption: FC<LoginOptionProps>;
export default LoginOption;
