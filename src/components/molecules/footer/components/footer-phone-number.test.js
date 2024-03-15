import { shallow } from 'enzyme'
import React from 'react'
import FooterPhoneNumber from './footer-phone-number'

describe('Test for FooterPhoneNumber component', () => {
  test('should render without error', () => {
    const title = 'Bogota'
    const wrapper = shallow(
      <FooterPhoneNumber
        title={title}
        number="1234"
        id="0"
        className="phone-number"
      />
    )
    expect(wrapper.find('Anchor')).toHaveLength(1)
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual(`${title}:`)
    expect(
      wrapper
        .find('span')
        .first()
        .hasClass('footer-phone-number__title')
    ).toEqual(true)
  })
})
