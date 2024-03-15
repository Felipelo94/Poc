import { shallow } from 'enzyme'
import React from 'react'
import FooterContent from './footer-content'

describe('Test for FooterContent component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<FooterContent />)
    expect(wrapper.find('FooterLinks').length).toBe(1)
    expect(wrapper.find('FooterDetails').length).toBe(1)
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('footer-desktop__content')
    ).toBeTruthy()
  })
})
