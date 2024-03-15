import { shallow } from 'enzyme'
import React from 'react'
import UserCompany from './user-company'

describe('Test for UserCompany component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UserCompany />)
    expect(wrapper.exists()).toBeTruthy()
  })
  test('should render correctly with props', () => {
    const wrapper = shallow(<UserCompany isActive />)
    expect(wrapper.text()).toBeDefined()
  })
})
