import React from 'react'
import renderer from 'react-test-renderer'
import ScrollAnimate from './scroll-animation'
import data from './dataScroll.json'
import { mount } from 'enzyme'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<ScrollAnimate data={data} type={1} line={'inversíon'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = mount(
      <ScrollAnimate data={data} type={1} line={'inversíon'} />
    )
    tree.find('#scroll-contenido').simulate('scroll')
    tree.find('#scroll-contenido').simulate('scroll')
  })

  it
})
