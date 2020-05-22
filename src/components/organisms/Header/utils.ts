import { NavLinkProps } from 'react-router-dom';

export interface HeaderProps {
  hreflogo: string;
  items: HeaderItemProps[];
  login: React.ElementType;
}

export interface HeaderItemProps extends NavLinkProps {
  icon?: any;
}