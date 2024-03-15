import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import darkMode from '../../../themes/dark'
import Alert from './alert'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            <Alert accessibility={{ fontSize: 3, lineSize: 2 }} text="hola" />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            {' '}
            <Alert
              accessibility={{ fontSize: 3, lineSize: 2 }}
              text="hola"
              linkCallToActionTextoCierre={'xxxxxxxxxxx'}
              nombreCallToActionTextoCierre={'xxxxxxxxx'}
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            {' '}
            <Alert
              accessibility={{ fontSize: 3, lineSize: 2 }}
              text="hola"
              linkCallToActionTextoCierre={'xxxxxxxxxxx'}
              nombreCallToActionTextoCierre={'xxxxxxxxx'}
              alertBlue={'xxxxxxxxx'}
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            {' '}
            <Alert
              accessibility={{ fontSize: 3, lineSize: 2 }}
              text="hola"
              linkCallToActionTextoCierre={'xxxxxxxxxxx'}
              nombreCallToActionTextoCierre={'xxxxxxxxx'}
              alertBlue={'xxxxxxxxx'}
              type={'InternaAhorro'}
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <Alert
            accessibility={{ fontSize: 3, lineSize: 2 }}
            text="hola"
            linkCallToActionTextoCierre={'xxxxxxxxxxx'}
            nombreCallToActionTextoCierre={'xxxxxxxxx'}
            alertBlue={'xxxxxxxxx'}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper.find('Anchor').simulate('click')
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            <Alert
              accessibility={{ fontSize: 3, lineSize: 2 }}
              text="hola"
              linkCallToActionTextoCierre={'xxxxxxxxxxx'}
              nombreCallToActionTextoCierre={'xxxxxxxxx'}
              isInversion={true}
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
