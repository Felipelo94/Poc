import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import TourGuide from './step-tour-guide'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <TourGuide
            title="titulo"
            current={1}
            description="description"
            closeEvent={() => {}}
            goTo={() => {}}
          />{' '}
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly close btn', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <TourGuide
          title="titulo"
          current={2}
          description="description"
          closeEvent={() => {}}
          goTo={() => {}}
        />
      </ThemeProvider>
    )
    const btnClose = wrapper.find('#container-step-tour-guide-header-close')
    btnClose.simulate('click')
  })

  it('renders correctly prev btn', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <TourGuide
          title="titulo"
          current={5}
          description="description"
          closeEvent={() => {}}
          goTo={() => {}}
        />
      </ThemeProvider>
    )
    const btnClose = wrapper.find('#button-container--tg-prev')
    btnClose.simulate('click')
  })

  it('renders correctly next btn', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <TourGuide
          title="titulo"
          current={2}
          description="description"
          closeEvent={() => {}}
          goTo={() => {}}
        />
      </ThemeProvider>
    )
    const btnClose = wrapper.find('#button-container--tg-next')
    btnClose.simulate('click')
  })

  it('renders correctly prev btn mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <TourGuide
          title="titulo"
          current={5}
          description="description"
          closeEvent={() => {}}
          goTo={() => {}}
        />
      </ThemeProvider>
    )
    const btnClose = wrapper.find('#button-container--tg-prev')
    btnClose.simulate('click')
  })

  it('renders correctly next btn mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <TourGuide
          title="titulo"
          current={2}
          description="description"
          closeEvent={() => {}}
          goTo={() => {}}
        />
      </ThemeProvider>
    )
    const btnClose = wrapper.find('#button-container--tg-next')
    btnClose.simulate('click')
  })
})
