import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './input'

describe('<Input/>', () => {
  test('Should render correctly without props', () => {
    render(<Input />)
    expect(screen).toMatchSnapshot()
  })

  test('Should show label text correctly when is not required', () => {
    render(<Input labelText="Test" isRequired={false} />)
    screen.getByText('Test')
  })

  test('Should show label text correctly when is required', () => {
    render(<Input labelText="Test" isRequired={true} />)
    screen.getByText('Test*')
  })

  test('Should show error text correctly', () => {
    render(<Input error="Error" />)
    screen.getByText('Error')
  })
})
