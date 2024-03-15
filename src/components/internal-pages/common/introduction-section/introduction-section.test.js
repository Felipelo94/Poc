import { shallow } from 'enzyme'
import React from 'react'
import IntroductionSection from './introduction-section'

jest.mock('react-socks', () => ({
  useCurrentWidth: jest.fn(() => 1366).mockImplementationOnce(() => 360)
}))

describe('Test for IntroductionSection component', () => {
  test('should render Image child in mobile', () => {
    const image = {
      imagen: 'img.png',
      title: 'Imagen title',
      nameImage: 'Imagen alt'
    }
    const wrapper = shallow(<IntroductionSection image={image} />)
    expect(wrapper.find('Image').exists()).toBeTruthy()
  })

  test('should render without props', () => {
    const wrapper = shallow(<IntroductionSection />)
    expect(wrapper.hasClass('container-introduction-section')).toBeTruthy()
  })

  test('should render Image child when received png image', () => {
    const image = {
      imagen: 'img.png',
      title: 'Imagen title',
      nameImage: 'Imagen alt'
    }
    const wrapper = shallow(<IntroductionSection image={image} />)
    expect(wrapper.find('Image').exists()).toBeTruthy()
  })

  test('should render Image child when received svg image', () => {
    const image = {
      imagen: 'img.svg',
      title: 'Imagen title',
      nameImage: 'Imagen alt'
    }
    const wrapper = shallow(<IntroductionSection image={image} />)
    expect(wrapper.find('Image').exists()).toBeTruthy()
  })
})
