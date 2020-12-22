import React from 'react'
import { HorizontalScroll } from './container/hscroll'
import { Grid } from './container/grid'
import { Simple } from './container/simple'

export const ExampleComponent = ({ text }) => {
  return <div style={{padding: '10px', background: 'whitesmoke'}}>{text}</div>
}

export const Container = {
  Horizontal: HorizontalScroll,
  Grid: Grid,
  List: Simple
}