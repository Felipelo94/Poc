import React from 'react'
import { render } from '@testing-library/react'
import Breakpoint from './breakpoint'

describe('<Breakpoint/>', () => {
  it('should show the children when width is in the specified range and from is given', () => {
    window.innerWidth = 1024
    const component = render(
      <Breakpoint from={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    component.getByText('This is a test!')
  })

  it('should not show the children when width is not in the specified range and from is given', () => {
    window.innerWidth = 1023
    const component = render(
      <Breakpoint from={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    const children = component.queryByText('This is a test!')
    expect(children).toBeNull()
  })

  it('should show the children when width is in the specified range and to is given', () => {
    window.innerWidth = 1024
    const component = render(
      <Breakpoint to={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    component.getByText('This is a test!')
  })

  it('should not show the children when width is not in the specified range and to is given', () => {
    window.innerWidth = 1025
    const component = render(
      <Breakpoint to={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    const children = component.queryByText('This is a test!')
    expect(children).toBeNull()
  })

  it('should show the children when width is in the specified range and to/from are given', () => {
    window.innerWidth = 1000
    const component = render(
      <Breakpoint from={512} to={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    component.getByText('This is a test!')
  })

  it('should not show the children when width is not in the specified range and to/from are given', () => {
    window.innerWidth = 300
    const component = render(
      <Breakpoint from={512} to={1024}>
        <p>This is a test!</p>
      </Breakpoint>
    )
    const children = component.queryByText('This is a test!')
    expect(children).toBeNull()
  })

  it('should show children when props are not given', () => {
    window.innerWidth = 1024
    const component = render(
      <Breakpoint>
        <p>This is a test!</p>
      </Breakpoint>
    )
    component.getByText('This is a test!')
  })
})
