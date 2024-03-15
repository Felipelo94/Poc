import { mount } from 'enzyme'
import React from 'react'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import InputRange from './input-range'

describe('Button', () => {
  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        {' '}
        <InputRange
          min={1}
          max={20}
          style={undefined}
          inputPosition={'top'}
          className={'container-simulator-input'}
          classGtm={'gtmAhorroSimCapAhorrTiemAhorr'}
          input={true}
          width={'321px'}
          step={1}
          onChange={() => {}}
          formatInput={'año'}
          ranngeRequerid={undefined}
          label={'¿Por cuánto tiempo quieres ahorrar?'}
          alert={'*El tiempo en este campo se calcula en años'}
        />
      </ThemeProvider>
    )
    wrapper.find('.ranger-cantainer').simulate('click')
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        {' '}
        <InputRange
          min={1}
          max={20}
          classGtm={'gtmAhorroSimCapAhorrTiemAhorr'}
          input={true}
          step={1}
          onChange={() => {}}
          formatInput={'año'}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('focus')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('blur')
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        {' '}
        <InputRange
          min={1}
          max={20}
          classGtm={'gtmAhorroSimCapAhorrTiemAhorr'}
          input={true}
          step={1}
          onChange={() => {}}
          formatInput={'currency'}
        />
      </ThemeProvider>
    )
    const eventObj = { target: { value: 0 } }
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventObj)
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('focus')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('blur')
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <InputRange
          min={1}
          max={2}
          classGtm={'gtmAhorroSimCapAhorrTiemAhorr'}
          input={true}
          step={1}
          onChange={() => {}}
          formatInput={'año'}
          ranngeRequerid={false}
        />
      </ThemeProvider>
    )
    const eventObj = { target: { value: 40 } }
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventObj)
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('focus')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('blur')
  })
})
