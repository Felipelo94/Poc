import React from 'react'
import renderer from 'react-test-renderer'

import Reserva from './reserva'
import { mount } from 'enzyme'

describe('Reserva', () => {
  it('renders correctly Resrva', () => {
    const indexPage = mount(
      <Reserva accessibility={{ fontSize: 3, lineSize: 2 }} />
    )
  })
})
