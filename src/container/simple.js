import React from 'react'
import styled from 'styled-components'

const SimpleTag = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${(props) => props.gap || '1rem'};
`
export const Simple = ({ items, component, style, className, gap }) => {
  return (
    <SimpleTag style={style} className={className} gap={gap}>
      {items.map((el, idx) => (
        <li key={idx}>{component({ item: el })}</li>
      ))}
    </SimpleTag>
  )
}
