# kian

> React UI

[![NPM](https://img.shields.io/npm/v/kian.svg)](https://www.npmjs.com/package/kian) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kian
```

## Usage

```jsx
import React from 'react'
import { ExampleComponent, HorizontalScroll, Grid } from 'kian'

const Item = ({ item }) => {
  return <ExampleComponent text={item} />
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(' ');

const App = () => {
  return <div>
    <HorizontalScroll
      items={lorem}
      component={Item}
    />
    <Grid
      items={lorem}
      minWidth='15rem'
      component={Item}
    />
  </div>
}

export default App

```

## License

MIT © [arbo77](https://github.com/arbo77)
