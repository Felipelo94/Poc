import { shallow } from 'enzyme'
import React from 'react'

import Audio from './audio'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  }
}

describe('audio true', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  beforeEach(() => {})
  it('renders correctly without props', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Audio
          title={'Titulo'}
          subtitle="Subtitrulo"
          audio=""
          accessibility={{ fontSize: 3, lineSize: 2, darkMode: true }}
        />
      </Provider>
    )
  })
})
