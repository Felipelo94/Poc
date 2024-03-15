import React from 'react'
import renderer from 'react-test-renderer'
import ButtonPrevNext from './prev-next-button'
import { mount } from 'enzyme'

describe('ButtonPrevNext', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<ButtonPrevNext />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly wit props', () => {
    const tree = renderer
      .create(<ButtonPrevNext tipo={1} clickAction={e => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders click button next', () => {
    const wrapper = mount(
      <ButtonPrevNext id="prueba" tipo={2} clickAction={e => {}} />
    )
    wrapper.find('#bite-btns-next-prueba').simulate('click')
  })

  it('renders click button prev', () => {
    const wrapper = mount(
      <ButtonPrevNext id="prueba" tipo={1} clickAction={e => {}} />
    )
    wrapper.find('#bite-btns-prev-prueba').simulate('click')
  })
})
