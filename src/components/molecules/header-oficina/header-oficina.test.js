import React from 'react'
import renderer from 'react-test-renderer'
import HeaderOficina from './header-oficina'

describe('<HeaderOficina />', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <HeaderOficina
          accessibility={{ fontSize: 3, lineSize: 4 }}
          data={{ title: 'xxxxxxx', subtitle: 'xxxxxxxxxx' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <HeaderOficina
          accessibility={{ fontSize: 3, lineSize: 8 }}
          data={{ title: null, subtitle: 'xxxxxxxxxx', image: 'image.svg' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
