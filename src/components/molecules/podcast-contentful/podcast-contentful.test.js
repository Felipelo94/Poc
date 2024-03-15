import { shallow } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import PodcastContentful from './podcast-contentful'

describe('Test for PodcastContentful component', () => {
  test('should render default podcast', () => {
    const wrapper = shallow(<PodcastContentful />)
    expect(wrapper.find('div').length).toBe(1)
  })
  test('should render default podcast when received various OrigeDeAudio', () => {
    const podcast = {
      OrigenDeAudio: ['Spotify', 'Contentful']
    }
    const wrapper = shallow(<PodcastContentful podcast={podcast} />)
    expect(wrapper.find('div').length).toBe(1)
  })
  test('should render Spotify podcast', () => {
    const podcast = {
      linkPodcast: { linkPodcast: 'https://podcast.com' },
      OrigenDeAudio: ['Spotify']
    }
    const wrapper = shallow(<PodcastContentful podcast={podcast} />)
    expect(wrapper.find('iframe').length).toBe(1)
  })
  test('should render Contentful podcast', () => {
    const podcast = {
      linkPodcast: { linkPodcast: 'https://podcast.com' },
      OrigenDeAudio: ['Contentful']
    }
    const initialState = {
      accesibility: {}
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    store.dispatch = jest.fn()
    const wrapper = shallow(
      <Provider store={store}>
        <PodcastContentful podcast={podcast} />
      </Provider>
    )
    expect(wrapper.find('ContextProvider').length).toBe(1)
  })
  test('should render NaranjaMedia podcast', () => {
    const podcast = {
      OrigenDeAudio: ['NaranjaMedia']
    }
    const wrapper = shallow(<PodcastContentful podcast={podcast} />)
    expect(wrapper.find('PodcastNaranjaMedia').length).toBe(1)
  })
})
