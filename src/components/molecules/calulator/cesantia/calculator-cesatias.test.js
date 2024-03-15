import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Calculator from './calculator-cesatias'

describe('Calculator', () => {
  it('render correctly DataFull', () => {
    const tree = renderer.create(<Calculator />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly inputchange', () => {
    const wrapper = mount(<Calculator />)
    const input1 = wrapper.find('input').first()
    const input2 = wrapper.find('input').last()
    input1.simulate('change', { target: { value: '40000' } })
    input2.simulate('change', { target: { value: '360' } })
    const values = wrapper.find('#container-result-operation-data')
    expect(values.text()).toBe('$1.200.000')
  })
})
