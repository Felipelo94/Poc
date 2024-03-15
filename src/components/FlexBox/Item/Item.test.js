import React from 'react'
import { shallow } from 'enzyme'
import Item from './Item'

describe('FlexBox [Item]', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Item order={1}>
        <h1>Prueba</h1>
      </Item>
    )
    expect(wrapper.hasClass('order-1')).toEqual(true)
  })

  it('should render correctly with with', () => {
    const wrapper = shallow(
      <Item order={1} align-self>
        <h1>Prueba</h1>
      </Item>
    )
    expect(wrapper.hasClass('order-1')).toEqual(true)
    expect(wrapper.hasClass('align-self-start')).toEqual(true)
  })
})
