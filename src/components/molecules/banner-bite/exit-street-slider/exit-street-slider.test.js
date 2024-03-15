import React from 'react'
import ExitStreetSlider from './exit-street-slider'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const data = {
  edges: [
    {
      node: {
        nombre: 'Pensiones Voluntarias',
        textoIntroductorioBite: 'Pensiones Voluntarias'
      }
    },
    {
      node: {
        nombre: 'Pensiones Obligatorias',
        textoIntroductorioBite: 'Pensiones Voluntarias'
      }
    },
    {
      node: {
        nombre: 'Inversión',
        textoIntroductorioBite: 'Pensiones Voluntarias'
      }
    }
  ]
}

const initialState = {
  welcome: {
    nameValue: '',
    typeUSer: 1
  },
  home: {
    categoria: 'Cesantías',
    subcategoria: 'Cesante'
  }
}
const mockStore = configureStore()
describe('ExitStreetSlider', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  it('ExitStreetSlider renders mount Pensión', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ExitStreetSlider
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          currentLine={'Pensión'}
          line={{ type: 2 }}
        />
      </Provider>
    )
  })
  it('ExitStreetSlider renders mount Pensión', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ExitStreetSlider
          accessibility={{ fontSize: 3, lineSize: 2 }}
          currentLine={'Pensión'}
          line={{ type: 2 }}
        />
      </Provider>
    )
  })

  it('ExitStreetSlider  renders mount Inversión', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ExitStreetSlider
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          currentLine={'Inversión'}
          line={{ type: 1 }}
        />
      </Provider>
    )
    //expect(wrapper.hasClass('exit-street-container')).toEqual(true);
  })

  it('click to btns prev and next renders correctly', () => {
    global.window = Object.create(window)
    global.innerWidth = 320
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ExitStreetSlider
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          currentLine={'Pensión'}
          line={{ type: 2 }}
        />
      </Provider>
    )
  })
})
