import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { VideoAdviser } from './video-adviser-icon'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  }
}

describe('video-adviser-icon', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  beforeEach(() => {})
  jest.useFakeTimers()
  const defaultProps = {
    footerIsExpanded: false,
    accessibility: {
      darkMode: false
    },
    dataUrlVideoAsesoria: {
      allContentfulCanal: {
        edges: [
          {
            node: {
              urlSeo: 'videoasesoria'
            }
          }
        ]
      }
    }
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <VideoAdviser {...defaultProps} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <VideoAdviser {...defaultProps} />
      </Provider>
    )
  })
  afterEach(cleanup)
})
