import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import SimulatorMutuoColombia from './simulator-mutuo-colombia'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SimulatorMutuoColombia setChangeTab={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '2000000' } }
    input.at(0).simulate('change', eventObj)
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '3000000' } }
    input.at(0).simulate('change', eventObj)
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '5000000' } }
    input.at(0).simulate('change', eventObj)
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '5000000' } }
    input.at(0).simulate('change', eventObj)
    const button = wrapper.find('.button-container__button--secondary')
    button.first().simulate('click')
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const input = wrapper.find('input')
    const eventObj = { target: { value: '5000000' } }
    input.at(0).simulate('change', eventObj)
    const button2 = wrapper.find('.button-container__button--primary')
    button2.first().simulate('click')
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const input2 = wrapper.find('input')
    input2.at(1).simulate('change', eventObj)
    const input3 = wrapper.find('input')
    input3.at(2).simulate('change', eventObj)
  })

  it('input 1', () => {
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const eventObj2 = { target: { value: null } }

    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const input3 = wrapper.find('input')
    input3.at(2).simulate('change', eventObj2)
    const input2 = wrapper.find('input')
    input2.at(1).simulate('change', eventObj2)
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(0).simulate('mouseout')
    toñtip.at(0).simulate('mouseover')
    toñtip.at(0).simulate('focus')
    toñtip.at(0).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(0).simulate('click')
    toñtip.at(0).simulate('keydown')
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(1).simulate('mouseout')
    toñtip.at(1).simulate('mouseover')
    toñtip.at(1).simulate('focus')
    toñtip.at(1).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(1).simulate('click')
    toñtip.at(1).simulate('keydown')
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(4).simulate('mouseout')
    toñtip.at(4).simulate('mouseover')
    toñtip.at(4).simulate('focus')
    toñtip.at(4).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(4).simulate('click')
    toñtip.at(4).simulate('keydown')
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(5).simulate('mouseout')
    toñtip.at(5).simulate('mouseover')
    toñtip.at(5).simulate('focus')
    toñtip.at(5).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(5).simulate('click')
    toñtip.at(5).simulate('keydown')
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(6).simulate('mouseout')
    toñtip.at(6).simulate('mouseover')
    toñtip.at(6).simulate('focus')
    toñtip.at(6).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(6).simulate('click')
    toñtip.at(6).simulate('keydown')
  })

  it('input 1', () => {
    global.innerWidth = 15000
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(7).simulate('mouseout')
    toñtip.at(7).simulate('mouseover')
    toñtip.at(7).simulate('focus')
    toñtip.at(7).simulate('blur')
  })

  it('input 1', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const wrapper = mount(<SimulatorMutuoColombia setChangeTab={() => {}} />)
    const eventObj = { target: { value: '5000000' } }
    const input = wrapper.find('input')
    input.at(0).simulate('change', eventObj)
    const toñtip = wrapper.find('#container-result-operation-icon')
    toñtip.at(7).simulate('click')
    toñtip.at(7).simulate('keydown')
  })
})
