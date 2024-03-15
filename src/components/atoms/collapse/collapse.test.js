import { mount, shallow } from 'enzyme'
import React from 'react'
import Collapse from './collapse'

describe('Test for Collapse component', () => {
  test('should render collapsed', () => {
    const wrapper = shallow(
      <Collapse>
        <div id="children" />
      </Collapse>
    )
    expect(wrapper.find('#children')).toHaveLength(0)
  })
  test('should render expanded', () => {
    const wrapper = mount(
      <Collapse isOpen>
        <div id="children" />
      </Collapse>
    )
    expect(wrapper.find('#children')).toHaveLength(1)
  })
  test('should render collapse and scroll', () => {
    const wrapper = mount(
      <Collapse id="collapse-container" isOpen={false} activateScroll>
        <div id="children" style={{ height: '200px' }} />
      </Collapse>
    )
    wrapper.setProps({ isOpen: true })
    expect(wrapper.find('#children')).toHaveLength(1)
  })
})
