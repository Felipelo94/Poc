import { mount, shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import PodCast from './podcast'
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

const data = {
  OrigenDeAudio: ['Contentful'],
  titulo: 'Titulo',
  descripcion: 'subtitulo',
  linkPodcast: {
    linkPodcast: 'link'
  }
}

const dataSpoti = {
  OrigenDeAudio: ['Spotify'],
  titulo: 'Titulo',
  descripcion: 'subtitulo',
  linkPodcast: {
    linkPodcast:
      'https://open.spotify.com/episode/26bHCqIuFABAl1n2mTh9lr?si=3SfNgqVGT7i_mD_S3EfcmQ'
  }
}
describe('Inversion', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  beforeEach(() => {})

  it('renders correctly without props audios contentful', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Provider store={store}>
          <PodCast data={data} />
        </Provider>
      </ThemeProvider>
    )
  })

  it('renders correctly without props audios spotify', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Provider store={store}>
            <PodCast data={dataSpoti} />
          </Provider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props audios spotify', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Provider store={store}>
            <PodCast data={null} />
          </Provider>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
