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
  Footer,
  Grid,
  Header,
  HeaderTongue,
  theme,
  Typography,
  doneThumbsUpImg
} from '@rsksmart/rif-ui';
import '@rsksmart/rif-ui/dist/index.css'

const App = () => {

  const headerProps = {
    hreflogo: '/',
    items: [
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
    ],
    login: () => <div>Login</div>
  };

  const footerProps = {
    copyrightText: 'Copyright © 2020 IOV Labs. All rights reserved. v0.1.0',
    linksColumns: [
      {
        title: 'RIF',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/'
        }]
      },
      {
        title: 'RIF Marketplace',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/'
        }]
      },
      {
        title: 'Developers',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/'
        }]
      },
      {
        title: 'Privacy',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/'
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/'
        }]
      }
    ]
  }

  const headerTongueProps = {
    title: 'Your marketplace for decentralized services',
    description: 'RIF Marketplace provides a digital catalog with a wide range of decentralized service listings, allowing providers to publish their services and engage with users in a secure and efficient way.'
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...headerProps} />
        <HeaderTongue {...headerTongueProps} />
        {/* <Typography weight='bold' color='primary' variant='h1'>Hello world</Typography> */}
        {/* <img src={doneThumbsUpImg} alt='done' /> */}
        {/* <Button variant='contained' color='primary' rounded shadow>First button :)</Button> */}
        <Footer {...footerProps} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
