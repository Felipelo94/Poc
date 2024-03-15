import React from 'react'
import { render, screen } from '@testing-library/react'
import FormsHeader from './forms-header'

describe('<FormsHeader />', () => {
  test('should render correctly', () => {
    const { component } = render(<FormsHeader />)
    expect(component).toMatchSnapshot()
  })

  test('should render the correct image', () => {
    const expectedAlt =
      'Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado'
    const expectedSrc = 'test-file-stub'
    render(<FormsHeader />)
    const imageRendered = screen.getByAltText(expectedAlt)
    expect(imageRendered.getAttribute('src')).toBe(expectedSrc)
  })
})
