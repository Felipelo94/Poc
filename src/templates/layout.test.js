import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../themes/light'
import Layout from './layout'

const dataUser = [
  {
    id: 616,
    name: 'esteban',
    type: 1,
    category: 'Cesantías',
    subcategory: 'Cesante',
    date: '3/3/2020',
    state: 1,
    hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
  }
]
const mockStore = configureStore()
const initialState = {
  youcantmiss: {
    userValue: dataUser
  },
  allContentfulBiteFeatured: '',
  allContentfulBiteProduct: '',
  welcome: {
    nameValue: 'dataUser',
    typeUser: 1
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  }
}

describe('Layout', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  it('renders correctly', () => {
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Layout>
            {' '}
            <div>Hello!</div>{' '}
          </Layout>
        </ThemeProvider>
      </Provider>
    )
  })
})
