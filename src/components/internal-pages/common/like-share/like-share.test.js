import { shallow } from 'enzyme'
import React from 'react'
import LikeShare from './like-share'

describe('Test for LikeShare component', () => {
  test('should render without props', () => {
    const location = { href: '' }
    const wrapper = shallow(
      <LikeShare location={location} setShowOptionsShare={jest.fn()} />
    )
    expect(wrapper.hasClass('like-container-share')).toBeTruthy()
  })

  test('should render options of share component', () => {
    const location = { href: '' }
    const wrapper = shallow(
      <LikeShare
        location={location}
        setShowOptionsShare={jest.fn()}
        showOptionsShare
      />
    )
    const div = wrapper.find('#container-share-options')
    expect(wrapper.hasClass('like-container-share')).toBeTruthy()
    expect(
      div.hasClass('container-share-options share-animation-active')
    ).toBeTruthy()
  })
})
