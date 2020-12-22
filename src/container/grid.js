import React from 'react'
import styled from 'styled-components'

const GridFlowTag = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props=>props.minWidth || '10rem'}, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
`
export const Grid = ({ items, component, minWidth, style, className }) => {
  return (
    <GridFlowTag minWidth={minWidth} style={style} className={className}>
      {items.map((el, idx) => (
        <li key={idx}>{component({ item: el })}</li>
      ))}
    </GridFlowTag>
  )
}
