import React from 'react'
import renderer from 'react-test-renderer'

import Content from './content'

describe('content', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<Content title="soy el titulo" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const tree = renderer
      .create(<Content title="soy el titulo" content="soy el contenido" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with validation', () => {
    const tree = renderer
      .create(
        <Content
          title="soy el titulo"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with validation', () => {
    const tree = renderer
      .create(
        <Content
          title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          content="soy el contenido"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with validation', () => {
    const tree = renderer
      .create(
        <Content
          title="soy el titulo"
          validation="StreetCard"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with validation', () => {
    const tree = renderer
      .create(
        <Content
          title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          content="soy el contenido"
          validation="StreetCard"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly StreetCard short tittle', () => {
    const tree = renderer
      .create(
        <Content
          title="xxxx"
          content="soy el contenido"
          validation="StreetCard"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly NONE StreetCard', () => {
    const tree = renderer
      .create(
        <Content title="XXX" content={null} validation="StreetCardNONE" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
