import React from 'react'
import { render, screen } from '@testing-library/react'
import Checkbox from './checkbox'

describe('<Input/>', () => {
  test('Should render correctly without props', () => {
    render(<Checkbox />)
    expect(screen).toMatchSnapshot()
  })

  test('Should show text correctly', () => {
    render(<Checkbox>
      Test
    </Checkbox>)
    screen.getByText('Test')
  })
})
