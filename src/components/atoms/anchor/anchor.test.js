import React from 'react'
import Anchor from './anchor'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Anchor />', () => {
  test('renders correctly without props', () => {
    const component = render(<Anchor>Test!</Anchor>)
    component.getByText('Test!')
  })

  test('must have absolute path in href attribute for external link', () => {
    const component = render(<Anchor href="http://test.com/">Test!</Anchor>)
    expect(component.getByText('Test!')).toHaveAttribute(
      'href',
      'http://test.com/'
    )
  })

  test('must have relative path in href attribute for internal link', () => {
    const component = render(
      <Anchor href="http://www.proteccion.com/test">Test!</Anchor>
    )
    const anchor = component.getByText('Test!')
    expect(anchor).toHaveAttribute('href', 'http://www.proteccion.com/test')
  })

  test('must call onClick function', () => {
    const mockFunction = jest.fn()
    const component = render(
      <Anchor href="http://www.proteccion.com/test" onClick={mockFunction}>
        Test!
      </Anchor>
    )
    const anchor = component.getByText('Test!')
    fireEvent.click(anchor)
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
