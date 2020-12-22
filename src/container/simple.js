import React from 'react'
import styled from 'styled-components'

const SimpleTag = styled.ol`
  list-style: none;
  padding: 0;
`
export const Simple = ({ items, component, style, className }) => {
  return (
    <SimpleTag style={style} className={className}>
      {items.map((el, idx) => (
        <li key={idx}>{component({ item: el })}</li>
      ))}
    </SimpleTag>
  )
}
