import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../../../components/atoms/modal/modal.js'
import darkMode from '../../../themes/dark'
import { mount } from 'enzyme'
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
          <Provider store={store}>
            <Modal
              id="encuesta-home"
              close={() => {}}
              image={''}
              titte="proteccion.com"
              alt="icon-encuesta"
              height={'1200px'}
              width={'975px'}
              isCosed={true}
              margin=" 72px 0px "
            >
              <div />{' '}
            </Modal>
          </Provider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Provider store={store}>
          <Modal
            id="encuesta-home"
            close={() => {}}
            image={''}
            titte="proteccion.com"
            alt="icon-encuesta"
            height={'1200px'}
            width={'975px'}
            isCosed={false}
            margin=" 72px 0px "
          >
            <div />{' '}
          </Modal>
        </Provider>
      </ThemeProvider>
    )
    wrapper.find('.container-modal-content-body').simulate('click')
    wrapper.find('.container-modal-content-body').simulate('keydown')
  })
})
