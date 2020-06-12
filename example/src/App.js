import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import DataUsageIcon from '@material-ui/icons/DataUsage';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import StorageIcon from '@material-ui/icons/Storage';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  Account,
  Footer,
  Header,
  PageTemplate,
  theme,
  Web3Provider
} from '@rsksmart/rif-ui';
import '@rsksmart/rif-ui/dist/index.css';
import Routes from './Routes';

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
        title: 'FAQ',
        to: '/faq',
        icon: <LiveHelpIcon />
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
    login: () => (
      <Web3Provider.Consumer>
        {({ state: { web3, account, networkInfo }, actions: { setProvider, registerOnAccountsChange } }) => (
          <>
          {
            registerOnAccountsChange(() => {
              console.log('************************************')
              console.log('account has changed')
              console.log('************************************')
            })
          }
            <Account
              web3={web3}
              account={account}
              setProvider={setProvider}
              currentNetwork={networkInfo?.networkId}
              requiredNetwork={1}
            />
          </>
        )}
      </Web3Provider.Consumer>
      )
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

  return (
    <ThemeProvider theme={theme}>
      <Web3Provider.Provider>
        <BrowserRouter>
          <Header {...headerProps} />
          <PageTemplate>
            <Routes />
          </PageTemplate>
          <Footer {...footerProps} />
        </BrowserRouter>
      </Web3Provider.Provider>
    </ThemeProvider>
  )
}

export default App
