import { shallow } from 'enzyme'
import React from 'react'
import FooterDesktop from './footer-desktop'

describe('Test for FooterDesktop component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<FooterDesktop />)
    expect(wrapper.find('footer').length).toBe(1)
    expect(wrapper.find('FooterHeader').length).toBe(1)
    expect(wrapper.find('Collapse').length).toBe(1)
    expect(wrapper.find('footer').hasClass('footer-desktop')).toBeTruthy()
  })

  test('should render footer with dark mode class', () => {
    const wrapper = shallow(<FooterDesktop isDarkMode />)
    expect(wrapper.find('footer').length).toBe(1)
    expect(wrapper.find('FooterHeader').length).toBe(1)
    expect(wrapper.find('Collapse').length).toBe(1)
    expect(
      wrapper.find('footer').hasClass('footer-desktop--dark-mode')
    ).toBeTruthy()
  })
})
