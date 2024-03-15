import { shallow } from 'enzyme'
import React from 'react'
import UserPerson from './user-person'

describe('Test for UserPerson component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UserPerson />)
    expect(wrapper.exists()).toBeTruthy()
  })
  test('should render correctly with props', () => {
    const wrapper = shallow(<UserPerson isActive />)
    expect(wrapper.text()).toBeDefined()
  })
})
