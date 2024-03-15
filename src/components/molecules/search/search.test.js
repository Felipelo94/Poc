import React from 'react'
import renderer from 'react-test-renderer'
import Search from './search'
import { mount } from 'enzyme'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'

const eventObj = { target: { value: 'Cesantias' } }
jest.mock('react-socks', () => ({
  useCurrentWidth: jest.fn(() => 1366).mockImplementationOnce(() => 360)
}))

describe('Search', () => {
  beforeEach(() => {})

  it('Search renders correctly ', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Search />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Search input onChange', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const input = wrapper.find('#header-field-search')
  })

  it('Search input onKeyUp diferrente  to Enter', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const input = wrapper.find('#header-field-search')
  })

  it('Search input onKeyUp  Enter', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const input = wrapper.find('#header-field-search')
  })

  it('Click to search', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'history', {
      value: {
        replaceState: jest.fn()
      }
    })
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/resultados',
        href: '/resultados/?q=Holi',
        search: '?q=ddd',
        reload: jest.fn()
      }
    })
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const input = wrapper.find('#header-field-search')
  })

  it('Click to search window undefijded', () => {
    global.window = Object.create(null)
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const input = wrapper.find('#header-field-search')
  })

  it('Click to search data emmpty', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'history', {
      value: {
        replaceState: jest.fn()
      }
    })
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/resultados',
        reload: jest.fn()
      }
    })
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const div = wrapper.find('#conatiner-img-search')
    div.first().simulate('click')
  })

  it('Search renders correctly  mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const div = wrapper.find('#conatiner-img-search')
    div.first().simulate('click')
  })

  it('Search renders correctly search mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const div = wrapper.find('#conatiner-img-search')
    div.first().simulate('click')
    const input = wrapper.find('#header-field-search-mobile')
    input.first().simulate('change', eventObj)
    input.first().simulate('keyup', { keyCode: 13 })
  })

  it('Search renders correctly  close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Search />
      </ThemeProvider>
    )
    const div = wrapper.find('#conatiner-img-search')
    div.first().simulate('click')
    const close = wrapper.find('#conatiner-img-search-close')
    close.first().simulate('click')
  })
})
