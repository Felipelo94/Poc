import { shallow } from 'enzyme'
import React from 'react'
import FooterLink from './footer-link'

describe('Test for FooterLink component', () => {
  test('should render without error', () => {
    const title = 'Bogota'
    const wrapper = shallow(
      <FooterLink
        title={title}
        number="1234"
        id="0"
        classGtm="phone-number"
        link="link.com"
      />
    )
    expect(wrapper.find('Anchor')).toHaveLength(1)
    expect(wrapper.find('.footer-link__icon')).toHaveLength(0)
    expect(wrapper.find('Anchor').hasClass('footer-link')).toEqual(true)
  })

  test('should render without error', () => {
    const title = 'Bogota'
    const wrapper = shallow(
      <FooterLink
        title={title}
        number="1234"
        id="0"
        classGtm="phone-number"
        link="link.com"
        icon={<img alt="vacio" />}
      />
    )
    expect(wrapper.find('Anchor')).toHaveLength(1)
    expect(wrapper.find('.footer-link__icon')).toHaveLength(1)
    expect(wrapper.find('Anchor').hasClass('footer-link')).toEqual(true)
  })
})
