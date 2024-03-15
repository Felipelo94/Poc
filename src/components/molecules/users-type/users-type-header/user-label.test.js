import { mount } from 'enzyme'
import React from 'react'
import { UserLabelStyled } from './user-label'

describe('Test for UserLabelStyled component', () => {
  test('should render correctly without props', () => {
    const wrapper = mount(<UserLabelStyled />)
    expect(wrapper.exists()).toBeTruthy()
  })
  test('should render correctly categoryDefaulft is Inversión', () => {
    const wrapper = mount(
      <UserLabelStyled
        categoryDefaulft="Inversión"
        accessibility={{ darkMode: false }}
      />
    )
    expect(wrapper.exists()).toBeTruthy()
  })
  test('should render correctly categoryDefaulft is Inversión and dark mode', () => {
    const wrapper = mount(
      <UserLabelStyled
        categoryDefaulft="Inversión"
        accessibility={{ darkMode: true }}
        isActive
      />
    )
    expect(wrapper.exists()).toBeTruthy()
  })
})
