import React from 'react'
import { Container } from 'kian'

const Item = ({ item }) => {
  return <div style={{ padding: '10px', background: 'whitesmoke' }}>{item}</div>
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(' ');

const App = () => {
  return <div>
    <Container.Horizontal
      items={lorem}
      component={Item}
    />
    <Container.Grid
      items={lorem}
      minWidth='15rem'
      component={Item}
    />
    <Container.List
      items={lorem}
      component={Item}
    />
  </div>
}

export default App
