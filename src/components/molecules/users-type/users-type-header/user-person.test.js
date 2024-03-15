import { shallow } from 'enzyme'
import React from 'react'
import UserPerson from './user-person'

describe('Test for UserPerson component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UserPerson indexDBUserNames={{ type: 1 }} />)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toBeDefined()
  })
})
