# @rsksmart/rif-ui

> This repository is a [React](https://reactjs.org/) library written in [Typescript](https://www.typescriptlang.org/) and based on [Material-UI](https://material-ui.com/). It exposes common components, services and assets to be re used in RIF projects.

**Warning: This project is in alpha state. There might (and most probably will) be changes in the future to its working. Also, no guarantees can be made about its stability, efficiency, and security at this stage.**

## Install

For now you can add the dependency on the `package.json` file, pointing to this repo as below:
```
...,
"dependencies": {
  ...
  "@rsksmart/rif-ui": "github:rsksmart/rif-ui"
  ...
},
...
```

## Usage

```tsx
import React, { Component } from 'react'
import Typography from '@rsksmart/rif-ui'
import '@rsksmart/rif-ui/dist/index.css'

class Example extends Component {
  render() {
    return <Typography color='primary'>Hello world :)<Typography/>
  }
}
```

### PageTemplate and Header components
Those components were created to work together. As the Header has a fixed position, we leave the same top space on PageTemplate as the Header's height.

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

3. (Optional) Import the components, assets or services that you want in the `App.js` file following the [Usage](#usage) section to see them in action.

## License

MIT © [rsksmart](https://github.com/rsksmart)
