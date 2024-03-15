import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Pronto from './pronto'
import { mount } from 'enzyme'

describe('Pronto', () => {
  jest.useFakeTimers()
  global.window = Object.create(window)

  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/contenido/'
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Pronto />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Pronto simulate Click', () => {
    const wrapper = mount(<Pronto />)
    jest.setTimeout(2000)
    setTimeout(() => {
      wrapper.find('.container-pronto').simulate('click')
      wrapper.find('#servicio-chat').simulate('click')
      wrapper
        .find('.gtmLateralChat')
        .first()
        .simulate('click')
      wrapper
        .find('.gtmLateralChat')
        .first()
        .simulate('keydown')
    }, 2000)
  })

  it('captures click', () => {
    const { getByTestId } = render(<Pronto />)
    jest.setTimeout(20000)
    jest.runAllTimers()
    const node = getByTestId('servicio-chat')
    fireEvent.click(node)
    const tree = renderer.create(<Pronto />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
