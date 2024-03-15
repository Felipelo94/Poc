import React from 'react'
import renderer from 'react-test-renderer'
import ItemVideo from './item-video'

describe('ItemVideo', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<ItemVideo isSelected={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ItemVideo
          isSelected={true}
          video={{ url: '', img: { default: '' }, title: '' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
