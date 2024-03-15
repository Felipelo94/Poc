import React from 'react'
import renderer from 'react-test-renderer'

import Button from './button'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<Button className="secondary" title="secondary" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<Button className="primary" title="primary" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Button className="secondary-border" title="secondary con border" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Button
          className="secondary-border-transparent"
          title="secondary con border y trasnsparencia"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  it('renders correctly with props', () => {
    const tree = renderer.create(<Button btn="soy los props" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const tree = renderer
      .create(<Button btn="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
