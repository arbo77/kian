/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'

const HorizontalScrollTag = styled.ol`
  grid-auto-flow: column;
  overflow: auto;
  display: grid;
  gap: 1rem;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  padding: 0 1rem;
  margin: 1rem -1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  > li:last-child {
    padding-right: 1rem;
  }
`

export const HorizontalScroll = ({ items, component, style, className }) => {
  return (
    <HorizontalScrollTag style={style} className={className}>
      {items.map((el, idx) => (
        <li key={idx}>{component({ item: el })}</li>
      ))}
    </HorizontalScrollTag>
  )
}
