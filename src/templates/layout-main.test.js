import React from 'react'
import renderer from 'react-test-renderer'

import LayoutMain from './layout-main'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
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
  welcome: {
    typeUser: 1
  },
  home: {
    categoria: 'Inversión'
  }
}

describe('LayoutMain', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  it('renders correctly', () => {
    const tree = mount(
      <Provider store={store}>
        <LayoutMain>
          {' '}
          <div>Hello!</div>{' '}
        </LayoutMain>
      </Provider>
    )
  })
})
