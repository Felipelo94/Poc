import { shallow } from 'enzyme'
import React from 'react'
import Seo from './seo'

describe('Test for Seo component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<Seo />)
    expect(wrapper.find('SEO').length).toBe(1)
  })

  test('should render SEO component', () => {
    const pageContext = {
      metatittleSeo: 'Talento si hay'
    }
    const wrapper = shallow(<Seo pageContext={pageContext} />)
    expect(wrapper.find('SEO').length).toBe(1)
  })

  test('should render SEO component', () => {
    const pageContext = {
      metatittleSeo: 'Talento si hay',
      metadescripcionSeo: '',
      keywordsSeo: 'ahorro'
    }
    const wrapper = shallow(<Seo pageContext={pageContext} />)
    expect(wrapper.find('SEO').length).toBe(1)
  })
})
