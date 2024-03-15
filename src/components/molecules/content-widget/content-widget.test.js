import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import EvolutionUnitValue from './content-widget'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  }
}

describe('Button', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  beforeEach(() => {})

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <EvolutionUnitValue
            graph="wwww.pruebas.com"
            size={{}}
            className="xxxxxxx"
            id="xxxxxxxxxxx"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <EvolutionUnitValue
            graph="wwww.pruebas.com"
            size={{}}
            className="xxxxxxx"
            id="xxxxxxxxxxx"
            showGiftTable={true}
            eventOnload={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly OficinaComponent', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Provider store={store}>
          <EvolutionUnitValue
            graph="wwww.pruebas.com"
            size={{}}
            className="xxxxxxx"
            id="xxxxxxxxxxx"
            showGiftTable={true}
            eventOnload={() => {}}
          />
        </Provider>
      </ThemeProvider>
    )

    wrapper
      .find('#xxxxxxxxxxx')
      .first()
      .simulate('load')
  })

  it('renders correctly OficinaComponent', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Provider store={store}>
          <EvolutionUnitValue
            graph="wwww.pruebas.com"
            size={{}}
            className="xxxxxxx"
            id="xxxxxxxxxxx"
            showGiftTable={true}
            eventOnload={() => {}}
            test={true}
          />
        </Provider>
      </ThemeProvider>
    )

    wrapper
      .find('.container-modal-content-body')
      .first()
      .simulate('click')
  })
})
