import { shallow } from 'enzyme'
import React from 'react'
import FooterMobile from './footer-mobile'

describe('Test for FooterMobile component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<FooterMobile />)
    expect(wrapper.find('footer').length).toBe(1)
    expect(wrapper.find('FooterHeader').length).toBe(1)
    expect(wrapper.find('FooterContent').length).toBe(1)
    expect(wrapper.find('Collapse').length).toBe(1)
    expect(wrapper.find('footer').hasClass('footer-mobile')).toBeTruthy()
  })

  test('should render footer with dark mode class', () => {
    const wrapper = shallow(<FooterMobile isDarkMode />)
    expect(wrapper.find('footer').length).toBe(1)
    expect(wrapper.find('FooterHeader').length).toBe(1)
    expect(wrapper.find('FooterContent').length).toBe(1)
    expect(wrapper.find('Collapse').length).toBe(1)
    expect(
      wrapper.find('footer').hasClass('footer-mobile--dark-mode')
    ).toBeTruthy()
  })
})
