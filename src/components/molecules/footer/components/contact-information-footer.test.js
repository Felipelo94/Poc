import { shallow } from 'enzyme'
import React from 'react'
import ContactInformationFooter from './contact-information-footer'
import ENLACES_FOOTER from '../../../../utils/footer.json'

describe('Test for ContactInformationFooter component', () => {
  test('should render without error', () => {
    const wrapper = shallow(<ContactInformationFooter />)
    expect(
      wrapper.find('span.footer-contact-information__subtitle')
    ).toHaveLength(1)
    expect(
      wrapper.find('span.footer-contact-information__caption')
    ).toHaveLength(1)
    expect(wrapper.find('FooterPhoneNumber')).toHaveLength(0)
  })

  test('should render without error with phone numbers', () => {
    const contactInfo = ENLACES_FOOTER.filter(
      item => item.title === 'Información de Contacto' && item.footerOption
    )
    const wrapper = shallow(
      <ContactInformationFooter options={contactInfo[0].footerOption} />
    )
    expect(
      wrapper.find('span.footer-contact-information__subtitle')
    ).toHaveLength(1)
    expect(
      wrapper.find('span.footer-contact-information__caption')
    ).toHaveLength(1)
    expect(wrapper.find('FooterPhoneNumber')).toHaveLength(8)
  })
})
