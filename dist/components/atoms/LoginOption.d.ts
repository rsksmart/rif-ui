import { FC } from 'react';
import ProviderInfo from '../../models/ProviderInfo';
export interface LoginOptionProps {
    className?: string;
    onClick?: () => void;
    providerInfo?: ProviderInfo;
}
/**
 * If not providerInfo is received, we assume there's no provider available and so suggest to install Nifty waller
 * Same happens when no onClick is provided. We open the Nifty page on a new tab
 */
declare const LoginOption: FC<LoginOptionProps>;
export default LoginOption;
