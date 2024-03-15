import React from 'react'
import renderer from 'react-test-renderer'
import SeeMore from './see-more'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<SeeMore title="ver mas" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SeeMore title="Quiero ver más" symbol="+" bottom={false} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SeeMore title="Quiero ver más" symbol="+" bottom={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
