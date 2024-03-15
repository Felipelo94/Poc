import React from 'react'
import { render } from '@testing-library/react'
import MenuItem from './menu-item'

describe('<MenuItem />', () => {
  test('renders correctly', () => {
    const props = {
      img: '',
      text: 'test'
    }

    const component = render(<MenuItem {...props} />)
    component.getByText('test')
  })
})
