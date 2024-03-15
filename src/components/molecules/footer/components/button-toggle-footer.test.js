import { mount, shallow } from 'enzyme'
import React from 'react'
import ButtonToggleFooter from './button-toggle-footer'

describe('Test for ButtonToggleFooter component', () => {
  jest.useFakeTimers()
  test('should render without error and invoke open footer', () => {
    const handleOpenFooter = jest.fn()
    const wrapper = shallow(
      <ButtonToggleFooter handleOpenFooter={handleOpenFooter} />
    )
    expect(wrapper.find('.button-toggle-footer__toggle-icon')).toHaveLength(1)
    const btn = wrapper.find('#btnExpandableFooter')
    btn.simulate('click')
    expect(handleOpenFooter).toBeCalled()
  })

  test('should render without error and invoke animate footer', async () => {
    const handleOpenFooter = jest.fn()
    const wrapper = mount(
      <ButtonToggleFooter handleOpenFooter={handleOpenFooter} />
    )
    expect(wrapper.find('.button-toggle-footer__toggle-icon')).toHaveLength(1)
    const btn = wrapper.find('#btnExpandableFooter')
    btn.simulate('click')
    expect(handleOpenFooter).toBeCalled()
    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })

  test('should render icon up', () => {
    const wrapper = shallow(<ButtonToggleFooter isOpenFooter={false} />)
    expect(wrapper.find('.button-toggle-footer__toggle-icon')).toHaveLength(1)
  })
})
