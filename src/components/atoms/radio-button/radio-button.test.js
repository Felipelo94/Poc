/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RadioButton from './index'

const defaultProps = {
  name: 'radio1',
  onChangeRadio: jest.fn(),
  id: 'test'
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<RadioButton {...setupProps} />)
}

describe('Test for radio button component', () => {
  test('should render withour error radio button input component', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })

  test('Should render radio button input with disabled attribute', () => {
    const wrapper = setup({ disabled: true })
    expect(wrapper.exists("input[disabled='disabled']")).toBe(true)
  })

  test('Should render radio button input with checked attribute', () => {
    const wrapper = setup({ checked: true })
    expect(wrapper.exists("input[checked='checked']")).toBe(true)
  })
})
