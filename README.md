<p align="center">
  <a href="https://rifos.org/" rel="noopener" target="_blank"><img width="150" src="https://www.rifos.org/assets/img/logo.svg" alt="RIF logo"></a></p>
</p>

<h1 align="center">RIF-UI</h1>

> This is a [React](https://reactjs.org/) library written in [Typescript](https://www.typescriptlang.org/) and based on [Material-UI](https://material-ui.com/). It exposes common components, services and assets to be re used in RIF projects.

[![license MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rsksmart/rsk-contract-verifier/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/@rsksmart/rif-ui/latest.svg)](https://www.npmjs.com/package/@rsksmart/rif-ui)
[![CircleCI](https://img.shields.io/circleci/project/github/rsksmart/rif-ui/master.svg)](https://circleci.com/gh/rsksmart/rif-ui/tree/master)
[![](https://img.shields.io/badge/made%20by-IOVLabs-blue.svg?style=flat-rounded)](http://iovlabs.org)
[![Managed by tAsEgir](https://img.shields.io/badge/%20managed%20by-tasegir-brightgreen?style=flat-rounded)](https://github.com/auhau/tasegir)
![](https://img.shields.io/badge/npm-%3E%3D6.0.0-orange.svg?style=flat-rounded)
![](https://img.shields.io/badge/Node.js-%3E%3D10.0.0-orange.svg?style=flat-rounded)
[![Follow on Twitter](https://img.shields.io/twitter/follow/rif_os.svg?label=follow+RIF)](https://twitter.com/rif_os)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=rsksmart/rif-ui)](https://dependabot.com)

**Warning: This project is in alpha state. There might (and most probably will) be changes in the future to its working. Also, no guarantees can be made about its stability, efficiency, and security at this stage.**

---

## Installation

```bash
npm i @rsksmart/rif-ui
```

## Getting Started

### Basic Usage

In order to experience all the benefits of this library, we recommend to wrap your application with the `ThemeProvider` component from Material-UI and pass in our [Material-UI theme](https://material-ui.com/es/customization/theming/).

```tsx
import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme, Typography } from '@rsksmart/rif-ui'
import '@rsksmart/rif-ui/dist/index.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color='primary'>Hello world :)</Typography>
    </ThemeProvider>
  )
}

export default App
```

### Using Header and PageTemplate components

The `Header` and `PageTemplate` components were styled and designed to work together. So, whenever you need one of them, we suggest to follow the next example

```tsx
import { Header, PageTemplate, theme, Typography } from '@rsksmart/rif-ui'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <PageTemplate>
        <Typography color='primary'>Hello world :)</Typography>
      </PageTemplate>
    </BrowserRouter>
  </ThemeProvider>
)
```

### Web3Provider
On the Web3Provider you can set the property `requiredNetworkId` and the actions `onConnectedAccountChange`, `onConnectedNetworkChange` that will get triggered once the user wallet is connected and there is a change on the account or network.
As an example

```
<Web3Provider.Provider 
  requiredNetworkId={requiredNetworkId}
  actions={{
    onConnectedAccountChange: onConnectedAccountChange,
    onConnectedNetworkChange: onConnectedNetworkChange
  }}>

  {/* Your stuff here */}
  
</Web3Provider.Provider >
```

## Development - Example folder

A sandbox project is provided in order to test the library or try new features locally without having to release a new version.
It lives at the `example` folder. In order to run it, follow the next steps:

1. At `rif-ui`:

```
npm i
npm start
```

2. Wait until it compiles to the `dist` folder. Then, in another terminal:

```
cd example/ && npm start
```

3. (Optional) Import the components, assets or services that you want in the `example/src/App.js` file following the [Usage](#usage) section to see them in action.

## Testing

To run unit test and build the library, you can use
```
npm run test
```

If you only want to run the unit test, you can use
```
npm run test:unit
```

## License

MIT © [rsksmart](https://github.com/rsksmart)

## Acknowledgments
 - This library was created with [create-react-library](https://github.com/transitive-bullshit/create-react-library). A great project to start you own library.
 - Thanks to [EVM Networks](https://github.com/ethereum-lists/chains) for providing the data source of network objects as a JSON, which inspired us to create the `NetworkInfo` interface
