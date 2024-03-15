import React from 'react'
import renderer from 'react-test-renderer'
import ButtonClose from './button-close'

describe('ContainerModal Menu', () => {
  it('ButtonClose Menu renders correctly', () => {
    const tree = renderer
      .create(<ButtonClose activeAnimation={false} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
