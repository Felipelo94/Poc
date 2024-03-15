import darkMode from '../../../themes/dark'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import renderer from 'react-test-renderer'

import Accessibility from './accessibility'

describe('Accessibility', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          {' '}
          <Accessibility
            isActiveAccesibility={true}
            setActiveAccesibilty={() => {}}
            lineaActual="Ahorro"
          />{' '}
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          {' '}
          <Accessibility
            isActiveAccesibility={false}
            setActiveAccesibilty={() => {}}
            lineaActual="Inrversión"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly click', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Accessibility
          isActiveAccesibility={true}
          setActiveAccesibilty={() => {}}
          lineaActual="Inversión"
        />
      </ThemeProvider>
    )
    const accessibilityContainer = wrapper.find('#accessibility-container')
    accessibilityContainer.first().simulate('click')
  })

  it('renders correctly click mobile', () => {
    global.innerWidth = 399
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Accessibility
          isActiveAccesibility={true}
          setActiveAccesibilty={() => {}}
          lineaActual="Inversión"
        />
      </ThemeProvider>
    )
    const accessibilityContainer = wrapper.find('#accessibility-container')
    accessibilityContainer.first().simulate('click')
  })
})
