import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import StorageIcon from '@material-ui/icons/Storage';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import {
  Account,
  Footer,
  Grid,
  Header,
  HeaderTongue,
  PageTemplate,
  theme,
  Typography,
  nameServiceImg,
  storageImg,
  Button
} from '@rsksmart/rif-ui';
import '@rsksmart/rif-ui/dist/index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2)
  },
  servicesContainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%'
    }
  },
  serviceContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  iconImage: {
    height: theme.spacing(40),
  },
  iconTitle: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

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
    login: () => (<Account />)
  };

  const footerProps = {
    copyrightText: 'Copyright © 2020 IOV Labs. All rights reserved. v0.1.0',
    linksColumns: [
      {
        title: 'RIF',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        }]
      },
      {
        title: 'RIF Marketplace',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        }]
      },
      {
        title: 'Developers',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        }]
      },
      {
        title: 'Privacy',
        links: [{
          title: 'Services',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'Whitepaper',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        },
        {
          title: 'RIF token',
          to: 'https://developers.rsk.co/rif/',
          target: '_blank',
          isExternal: true
        }]
      }
    ]
  }

  const headerTongueProps = {
    titleLine1: 'Your marketplace',
    titleLine2: 'for decentralized services',
    description: 'RIF Marketplace provides a digital catalog with a wide range of decentralized service listings, allowing providers to publish their services and engage with users in a secure and efficient way.'
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...headerProps} />
        <PageTemplate>
          <HeaderTongue {...headerTongueProps} />
          <div className={classes.root}>
            <div className={classes.titleContainer}>
              <Typography color='primary' variant='h4'>RIF Marketplace services</Typography>
            </div>
            <Grid container className={classes.servicesContainer}>
              <Grid className={classes.serviceContent} item xs={12} lg={6}>
                <img className={classes.iconImage} src={nameServiceImg} alt='name services icon' />
                <Typography className={classes.iconTitle} variant='h6' color='primary'>Name Services</Typography>
              </Grid>
              <Grid className={classes.serviceContent} item xs={12} lg={6}>
                <img className={classes.iconImage} src={storageImg} alt='storage icon' />
                <Typography className={classes.iconTitle} variant='h6' color='primary'>Storage</Typography>
              </Grid>
            </Grid>
          </div>
        </PageTemplate>
        <Footer {...footerProps} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
