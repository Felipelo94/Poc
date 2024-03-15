import React from 'react'
import { render, screen } from '@testing-library/react'
import Select from './select'

describe('<Select/>', () => {
  test('Should render correctly without props', () => {
    render(<Select />)
    expect(screen).toMatchSnapshot()
  })

  test('Should show label text correctly when is not required', () => {
    render(<Select labelText="Test" isRequired={false} />)
    screen.getByText('Test')
  })

  test('Should show label text correctly when is required', () => {
    render(<Select labelText="Test" isRequired={true} />)
    screen.getByText('Test*')
  })

  test('Should show error text correctly', () => {
    render(<Select error="Error" />)
    screen.getByText('Error')
  })
})
