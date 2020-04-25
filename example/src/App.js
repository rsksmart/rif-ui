import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import StorageIcon from '@material-ui/icons/Storage';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  Button,
  Header,
  theme,
  Typography
} from '@rsksmart/rif-ui';
import '@rsksmart/rif-ui/dist/index.css'

const App = () => {

  const headerItems = [
    {
      title: 'Domains',
      to: '/domains',
      icon: <PeopleIcon />
    },
    {
      title: 'Storage',
      to: '/storage',
      icon: <StorageIcon />
    },
    {
      title: 'Payments',
      to: '/payments',
      icon: <AccountBalanceWalletIcon />
    },
    {
      title: 'Data Services',
      to: '/data_services',
      icon: <DataUsageIcon />
    },
    {
      title: 'Communications',
      to: '/communications',
      icon: <ForumIcon />
    }
  ];
  const Login = () => <div>Login</div>;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header hreflogo='/' items={headerItems} login={Login} />
        <Typography weight='bold' color='primary' variant='h1'>Hello world</Typography>
        <Button variant='contained' color='primary' rounded shadow>First button :)</Button>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
