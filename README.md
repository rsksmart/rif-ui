# @rsksmart/rif-ui

> This is a [React](https://reactjs.org/) library written in [Typescript](https://www.typescriptlang.org/) and based on [Material-UI](https://material-ui.com/). It exposes common components, services and assets to be re used in RIF projects.

<p>
  <a href="https://github.com/rsksmart/rsk-contract-verifier/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@rsksmart/rif-ui">
    <img alt="npmjs reference" src="https://img.shields.io/npm/v/@rsksmart/rif-ui.svg" />
  </a>
</p>

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
      <Header/>
      <PageTemplate>
        <Typography color='primary'>Hello world :)</Typography>
      </PageTemplate>
    </BrowserRouter>
  </ThemeProvider>
)
```

## Example folder

If you want to try this library without creating a new project you can clone this repo and follow the next steps:

1. At `rif-ui`:

```
npm start
```

2. In another terminal:

```
cd example/ && npm start
```

3. (Optional) Import the components, assets or services that you want in the `example/src/App.js` file following the [Usage](#usage) section to see them in action.

## License

MIT © [rsksmart](https://github.com/rsksmart)
