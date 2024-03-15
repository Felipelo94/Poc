import React from 'react'
import data from './internal-canales.json'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import CanalesComponet from './internal-canales'
import { mount } from 'enzyme'

const mockStore = configureStore()

const initialState = {
  allContentfulBiteFeatured: '',
  allContentfulBiteProduct: '',
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    typeUser: 1
  },
  youcantmiss: {
    userValue: []
  }
}

describe('Button', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  global.window = Object.create(window)
  const url = {
    url: 'http://localhost:8000/contenido',
    pathname: '/contenido/'
  }
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      search: '?c=2vn2SgPCl0kmJMiXjTU58N',
      pathname: '/contenido/'
    }
  })
  const defaultProps = {
    data: {
      allContentfulCanal: {
        edges: []
      }
    }
  }
  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <CanalesComponet
          location={url}
          accessibility={{ fontSize: 3, lineSize: 2 }}
          canales={data}
          dispatch={() => {}}
          {...defaultProps}
        />
      </Provider>
    )
  })

  it('Categories renders correctly empresa click category active', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CanalesComponet
          accessibility={{ fontSize: 3, lineSize: 2 }}
          location={url}
          canales={data}
          dispatch={() => {}}
          {...defaultProps}
        />
      </Provider>
    )
    const category = wrapper.find('#simple-tab-0').first()
  })

  it('Categories renders correctly empresa click category active', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CanalesComponet
          accessibility={{ fontSize: 3, lineSize: 2 }}
          location={url}
          canales={data}
          dispatch={() => {}}
          {...defaultProps}
        />
      </Provider>
    )
    const category = wrapper.find('.Mui-selected').first()
    //category.simulate("click")
  })

  it('Categories renders correctly empresa click video asesoria', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CanalesComponet
          accessibility={{ fontSize: 3, lineSize: 2 }}
          location={url}
          canales={data}
          dispatch={() => {}}
          {...defaultProps}
        />
      </Provider>
    )
    const category = wrapper.find('#tabs-menu-best').find('button')
  })

  it('Categories renders correctly empresa click video asesoria', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CanalesComponet
          accessibility={{ fontSize: 3, lineSize: 2 }}
          location={url}
          canales={data}
          dispatch={() => {}}
          {...defaultProps}
        />
      </Provider>
    )
    const category = wrapper.find('#tabs-menu-best').find('button')
  })
})
