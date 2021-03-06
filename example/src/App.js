import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { ThemeProvider } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'

import {
  Account,
  colors,
  Footer,
  Header,
  PageTemplate,
  theme,
  Web3Provider,
} from '@rsksmart/rif-ui';
import '@rsksmart/rif-ui/dist/index.css';
import Routes from './Routes';

const requiredNetworkId = 8545
const requiredNetworkName = 'Localhost 8545'

const App = () => {

  const headerProps = {
    hreflogo: '/',
    itemsStart: [
      {
        title: 'FAQ',
        to: '/faq',
        icon: <LiveHelpIcon />
      },
    ],
    itemsEnd: [
      {
        icon: <NotificationsNoneIcon htmlColor={colors.white} />
      }
    ],
    login: () => (
      <Web3Provider.Consumer>
        {({ state: { web3, account, networkInfo }, actions: { setProvider }, availableProviders }) => (
          <>
            <Account
              web3={web3}
              account={account}
              setProvider={setProvider}
              networkInfo={networkInfo}
              requiredNetworkId={requiredNetworkId}
              requiredNetworkName={requiredNetworkName}
              availableProviders={availableProviders}
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

  const onConnectedNetworkChange = () => {
    console.log('****************************************************************')
    console.log('NETWORK change fired!')
    console.log('****************************************************************')
  }

  const onConnectedAccountChange = () => {
    console.log('****************************************************************')
    console.log('ACCOUNTS change fired!')
    console.log('****************************************************************')
  }

  return (
    <ThemeProvider theme={theme}>
      <Web3Provider.Provider
        requiredNetworkId={requiredNetworkId}
        actions={{
          onConnectedAccountChange: onConnectedAccountChange,
          onConnectedNetworkChange: onConnectedNetworkChange
        }}>
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
