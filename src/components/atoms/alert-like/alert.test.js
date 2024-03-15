import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Alert from './alert'
import { mount } from 'enzyme'

describe('<Alert />', () => {
  let component
  let mockHandler

  beforeEach(() => {
    const message = 'This is a test'
    const type = 'error'
    jest.useFakeTimers()

    mockHandler = jest.fn()

    component = render(
      <Alert alertMessage={message} alertType={type} onAlertEnd={mockHandler} />
    )
  })

  test('renders alert content', () => {
    component.getByText('This is a test')
  })

  test('clicking the close button calls events handler once', () => {
    const button = component.getByTestId('alert-close-button')

    fireEvent.click(button)
    jest.runAllTimers()

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  test('on mouse enter alert adds paused class', () => {
    const alert = component.getByTestId('alert')
    const alertTopLine = component.getByTestId('alert-top-line')

    fireEvent.mouseEnter(alert)

    expect(alertTopLine).toHaveClass('alert__top-line--paused')
  })

  test('on mouse leave alert deletes paused class', () => {
    const alert = component.getByTestId('alert')
    const alertTopLine = component.getByTestId('alert-top-line')

    fireEvent.mouseLeave(alert)

    expect(alertTopLine).not.toHaveClass('alert__top-line--paused')
  })

  it('renders correctly without props', () => {
    const message = 'This is a test'
    const type = 'error'
    jest.useFakeTimers()

    mockHandler = jest.fn()
    const wrapper = mount(
      <Alert alertMessage={message} alertType={type} onAlertEnd={mockHandler} />
    )
  })
})
