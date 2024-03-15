import React from 'react'
import AccessibilityMenu from './accessibility-menu'
import darkMode from '../../../themes/dark'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const dataUser = {
  id: 616,
  name: 'esteban asdasdas',
  type: 1,
  category: 'Cesantías',
  subcategory: 'Cesante',
  date: '3/3/2020',
  state: 1,
  hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
}

const mockStore = configureStore()

const initialState = {
  youcantmiss: {
    userValue: dataUser
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    type: 1
  }
}

describe('Button', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={darkMode}>
          <AccessibilityMenu
            setActiveAccesibilty={() => {}}
            dispatch={() => {}}
            isActiveAccesibility={true}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={darkMode}>
          <AccessibilityMenu
            setActiveAccesibilty={() => {}}
            dispatch={() => {}}
            isActiveAccesibility={false}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders correctly click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={darkMode}>
          <AccessibilityMenu
            setActiveAccesibilty={() => {}}
            dispatch={() => {}}
            isActiveAccesibility={true}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper.find('#accessibily-close').simulate('click')
  })

  it('renders correctly without props  mobile', () => {
    global.innerWidth = 399
    global.dispatchEvent(new Event('resize'))
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={darkMode}>
          <AccessibilityMenu
            setActiveAccesibilty={() => {}}
            dispatch={() => {}}
            isActiveAccesibility={false}
          />
        </ThemeProvider>
      </Provider>
    )
  })
})
