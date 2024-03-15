import React from 'react'
import renderer from 'react-test-renderer'
import NewPronto from './new-pronto'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { mount } from 'enzyme'

describe('<NewPronto />', () => {
  test('renders correctly without props', () => {
    const tree = renderer.create(<NewPronto />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Pronto', () => {
  jest.useFakeTimers()
  global.window = Object.create(window)

  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/contenido/'
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<NewPronto />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Pronto simulate Click', () => {
    const wrapper = mount(<NewPronto />)
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
    const { getByTestId } = render(<NewPronto />)
    jest.setTimeout(20000)
    jest.runAllTimers()
    const node = getByTestId('servicio-chat')
    fireEvent.click(node)
    const tree = renderer.create(<NewPronto />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
