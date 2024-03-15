import React from 'react'
import renderer from 'react-test-renderer'
import SkeletonBite from './skeleton-bite'
import SkeletonBiteMobile from './skeleton-bite-mobile'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<SkeletonBite />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<SkeletonBiteMobile />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
