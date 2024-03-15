import { mount } from 'enzyme'
import React from 'react'
import Simulator from './simulator'
describe('Simulator', () => {
  it('option 2', () => {
    const wrapper = mount(<Simulator type={0} setType={() => {}} />)
  })

  it('option 1', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    wrapper
      .find('#labelSubCategory')
      .first()
      .simulate('click')
  })
  it('option 1', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    wrapper
      .find('#labelSubCategory')
      .at(1)
      .simulate('click')
  })

  it('btn reiniciar', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    wrapper.find('#button-container-mi-reserva-button').simulate('click')
  })

  it('input 1', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '2000000' } }
    input.at(0).simulate('change', eventObj)
  })

  it('input 2 ', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '2' } }
    input.at(1).simulate('change', eventObj)
  })

  it('moseover tooltip', () => {
    const wrapper = mount(<Simulator type={1} setType={() => {}} />)
    wrapper.find('#container-result-operation-icon').simulate('mouseover')
    wrapper.find('#container-result-operation-icon').simulate('mouseout')
  })
})
