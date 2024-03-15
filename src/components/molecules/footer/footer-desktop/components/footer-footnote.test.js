import { shallow } from 'enzyme'
import React from 'react'
import FooterFootnote from './footer-footnote'

describe('Test for FooterFootnote component', () => {
  test('should render without error', () => {
    const wrapper = shallow(<FooterFootnote />)
    expect(wrapper.hasClass('footer-footnote')).toBeTruthy()
  })
})
