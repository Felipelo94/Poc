import { shallow } from 'enzyme'
import React from 'react'
import { ID_CONTENTFUL_SOCIAL_MEDIA } from '../../../../../const/dictionary/footer-const'
import FooterSocials, { IconoSocialMedia } from './footer-socials'

describe('Test for IconoSocialMedia component', () => {
  test('should render default icon', () => {
    const id = '0'
    const wrapper = shallow(
      <IconoSocialMedia name="default-icon" id={id} iconSrc="img-src" />
    )
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find(`#icon-image-${id}`)).toHaveLength(1)
  })

  test('should render facebook icon', () => {
    const wrapper = shallow(
      <IconoSocialMedia
        idNode={ID_CONTENTFUL_SOCIAL_MEDIA.facebook}
        name="fb-icon"
        id="0"
        iconSrc="img-src"
      />
    )
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(`#icon-image-0`)).toHaveLength(1)
  })

  test('should render twitter icon', () => {
    const wrapper = shallow(
      <IconoSocialMedia
        idNode={ID_CONTENTFUL_SOCIAL_MEDIA.twitter}
        name="fb-icon"
        id="0"
        iconSrc="img-src"
      />
    )
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(`#icon-image-0`)).toHaveLength(1)
  })
  test('should render linkedin icon', () => {
    const wrapper = shallow(
      <IconoSocialMedia
        idNode={ID_CONTENTFUL_SOCIAL_MEDIA.linkedin}
        name="fb-icon"
        id="0"
        iconSrc="img-src"
      />
    )
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(`#icon-image-0`)).toHaveLength(1)
  })
  test('should render instagram icon', () => {
    const wrapper = shallow(
      <IconoSocialMedia
        idNode={ID_CONTENTFUL_SOCIAL_MEDIA.instagram}
        name="fb-icon"
        id="0"
        iconSrc="img-src"
      />
    )
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(`#icon-image-0`)).toHaveLength(1)
  })
})

describe('Test for FooterSocials component', () => {
  test('should render default icon', () => {
    const id = '0'
    const wrapper = shallow(
      <FooterSocials
        name="default-icon"
        id={id}
        iconSrc="img-src"
        link="link-image"
      />
    )
    expect(wrapper.find('Anchor')).toHaveLength(1)
  })

  test('should render facebook icon', () => {
    const id = '0'
    const wrapper = shallow(
      <FooterSocials
        name="fb-icon"
        id={id}
        idNode={ID_CONTENTFUL_SOCIAL_MEDIA.facebook}
        iconSrc="img-src"
        link="link-image"
      />
    )
    expect(wrapper.find('Anchor')).toHaveLength(1)
  })
})
