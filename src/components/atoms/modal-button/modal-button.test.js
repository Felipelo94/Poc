import React from 'react'
import renderer from 'react-test-renderer'
import ModalButton from './modal-button'
import { mount } from 'enzyme'
import Modal from '../modal/modal'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  }
}

describe('ModalButton', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  beforeEach(() => {})

  it('ModalButton renders correctly  isSticky false', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModalButton text="Encuesta de satisfacción" isSticky={false} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ModalButton renders correctly  isSticky false', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Modal
            id="encuesta"
            close={() => {}}
            image={'../..'}
            titte="Compártenos tus comentarios"
            alt="icon-encuesta"
            style={{ bottom: '76px', right: '88px' }}
            height={'960px'}
            width={'975px'}
            margin=" 72px 0px "
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ModalButton open modal', () => {
    global.innerWidth = 1200
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ModalButton text="Encuesta de satisfacción" isSticky={false} />
      </Provider>
    )
    //wrapper.find('').simulate('click');
  })

  it('ModalButton close modal', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalButton text="Encuesta de satisfacción" isSticky={false} />
      </Provider>
    )
    wrapper
      .find('#encuesta-container')
      .first()
      .simulate('click')
    wrapper
      .find('#btn-modal-close-encuesta')
      .first()
      .simulate('click')
  })

  it('ModalButton renders correctly ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModalButton
            text="Encuesta de satisfacción isSticky true"
            isSticky={true}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ModalButton renders correctly mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModalButton
            text="Encuesta de satisfacción isSticky true"
            isSticky={true}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ModalButton text="Encuesta de satisfacción" isSticky={false} />
      </Provider>
    )

    wrapper
      .find('#encuesta-container-mobile')
      .first()
      .simulate('click')
    wrapper
      .find('#btn-modal-close-encuesta')
      .first()
      .simulate('click')
  })
})
