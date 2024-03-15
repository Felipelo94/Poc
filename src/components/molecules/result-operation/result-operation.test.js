import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Result from './result-opration'

describe('Input', () => {
  it('renders Input', () => {
    const tree = renderer
      .create(
        <Result
          title="tituslo"
          toottipText="dfsdfsd"
          value="cvlaiue"
          className="classs"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Input', () => {
    const wrapper = mount(
      <Result
        title="tituslo"
        toottipText="dfsdfsd"
        value="cvlaiue"
        className="classs"
      />
    )
    wrapper.find('#container-result-operation-icon').simulate('mouseover')
    wrapper.find('#container-result-operation-icon').simulate('mouseout')
    wrapper.find('#container-result-operation-icon').simulate('click')
  })

  it('renders Input', () => {
    global.innerWidth = 450
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Result
        title="tituslo"
        toottipText="dfsdfsd"
        value="cvlaiue"
        className="classs"
      />
    )
    wrapper.find('#container-result-operation-icon').simulate('click')
  })
})
