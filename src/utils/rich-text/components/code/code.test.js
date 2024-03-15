import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Code } from './code'

describe('<Code/>', () => {
  test('renders', () => {
    render(<Code text="test" />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
