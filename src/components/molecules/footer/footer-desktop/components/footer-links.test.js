import { shallow } from 'enzyme'
import React from 'react'
import FooterLinks from './footer-links'

describe('Test for FooterLinks component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<FooterLinks />)
    expect(wrapper.hasClass('footer-content__links')).toBeTruthy()
    expect(wrapper.find('FooterLink').length).not.toBe(0)
  })
})
