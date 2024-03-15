import { shallow } from 'enzyme'
import React from 'react'
import UserCompany from './user-company'

describe('Test for UserCompany component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UserCompany indexDBUserNames={{ type: 2 }} />)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toBeDefined()
  })
})
