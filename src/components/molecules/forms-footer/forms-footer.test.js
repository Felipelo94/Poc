import React from 'react'
import { render, screen } from '@testing-library/react'
import FormsFooter from './forms-footer'

describe('<FormsFooter />', () => {
  test('Should render correctly', () => {
    render(<FormsFooter />)
    expect(screen).toMatchSnapshot()
  })

  test('Should redirects to call when click a label', () => {
    const expectedRef = 'tel: +57 (601)744 44 64'
    const expectedText = 'Bogotá'
    render(<FormsFooter />)
    expect(screen.getByText(expectedText).parentNode.getAttribute('href')).toBe(
      expectedRef
    )
  })

  test('Should change correctly the redirect way on WhatsApp item', () => {
    const expectedRef = 'https://wa.me/573102205575'
    const expectedText = 'WhatsApp'
    render(<FormsFooter />)
    expect(screen.getByText(expectedText).parentNode.getAttribute('href')).toBe(
      expectedRef
    )
  })
})
