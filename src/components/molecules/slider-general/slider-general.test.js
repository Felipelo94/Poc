import React from 'react'
import renderer from 'react-test-renderer'

import SliderGeneral from './slider-general'

describe('SliderGeneral', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SliderGeneral> </SliderGeneral>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
