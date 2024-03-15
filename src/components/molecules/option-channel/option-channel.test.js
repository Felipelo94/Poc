import React from 'react'
import renderer from 'react-test-renderer'
import OptionChannel from './option-channel'

const data = [
  {
    texto: 'texto',
    link: 'https://test.com',
    image: ''
  }
]

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <OptionChannel
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          title={'Tituloo'}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <OptionChannel
          accessibility={{ fontSize: 3, lineSize: 8 }}
          data={[]}
          titlle=""
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
