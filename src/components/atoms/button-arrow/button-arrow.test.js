import React from 'react'
import renderer from 'react-test-renderer'

import ButtonArrow from './button-arrow'
import { mount } from 'enzyme'

describe('Button true ', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<ButtonArrow opened={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button false ', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<ButtonArrow opened={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button click ', () => {
  it('renders correctly without props', () => {
    const wrapper = mount(
      <ButtonArrow opened={false} openCloseModal={e => {}} />
    )
    wrapper.find('#btn-arrow').simulate('click')
  })
})

describe('Button keydown ', () => {
  it('renders correctly without props', () => {
    const wrapper = mount(
      <ButtonArrow opened={false} openCloseModal={e => {}} />
    )
    wrapper.find('#btn-arrow').simulate('keydown')
  })
})
