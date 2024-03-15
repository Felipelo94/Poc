import { shallow } from 'enzyme'
import React from 'react'
import PodcastNaranjaMedia, { PodcastLinkItem } from './podcast-naranja-media'

describe('Test for PodcastLinkItem component', () => {
  test('should render link and image', () => {
    const link = 'https//link-1.com'
    const srcImage = 'image.png'
    const wrapper = shallow(<PodcastLinkItem link={link} srcImg={srcImage} />)
    expect(wrapper.find('.podcast-links-item').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
  })

  test('should render link and image and simulate click ', () => {
    const link = 'https//link-1.com'
    const srcImage = 'image.png'
    const wrapper = shallow(<PodcastLinkItem link={link} srcImg={srcImage} />)
    wrapper.find('.podcast-links-item').simulate('click')
    expect(wrapper.find('.podcast-links-item').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
  })

  test('should render link and image with props GA', () => {
    const categoryGA = 'LandingOfertas'
    const eventGA = 'ClicPodcastInspirate'
    const labelGA = 'Spotify'
    const link = 'https//link-1.com'
    const srcImage = 'image.png'
    const wrapper = shallow(
      <PodcastLinkItem
        link={link}
        srcImg={srcImage}
        categoryGA={categoryGA}
        eventGA={eventGA}
        labelGA={labelGA}
      />
    )
    expect(wrapper.find('.podcast-links-item').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
  })

  test('should not render nothing without props', () => {
    const wrapper = shallow(<PodcastLinkItem />)
    expect(wrapper.find('.podcast-links-item').length).toBe(0)
    expect(wrapper.find('img').length).toBe(0)
  })
})

describe('Test for PodcastNaranjaMedia component', () => {
  test('should render 1 Podcast Link Item', () => {
    const contentURL = 'https//link-1.com'
    const contentTitle = 'Talento si hay'
    const podcast = {
      titulo: 'Talento si hay podcast',
      linkPodcast: { linkPodcast: 'https//podcast.com' },
      LinkListaDeReproduccion1: 'https//deezer.com',
      ImagenListaDeReproduccion1: {
        file: {
          url: 'image.png'
        }
      }
    }
    const wrapper = shallow(
      <PodcastNaranjaMedia
        contentTitle={contentTitle}
        contentURL={contentURL}
        podcast={podcast}
        eventsGAComponentShare={{}}
      />
    )
    expect(wrapper.find('PodcastLinkItem').length).toBe(1)
    expect(
      wrapper.hasClass('Internal-talento-si-hay-container-podcats-reproductor')
    ).toBeTruthy()
  })

  test('should render 3 Podcast Link Item', () => {
    const contentURL = 'https//link-1.com'
    const contentTitle = 'Talento si hay'
    const podcast = {
      titulo: 'Talento si hay podcast',
      linkPodcast: { linkPodcast: 'https//podcast.com' },
      LinkListaDeReproduccion1: 'https//spotify.com',
      ImagenListaDeReproduccion1: {
        file: {
          url: 'image.png'
        }
      },
      LinkListaDeReproduccion2: 'https//deezer.com',
      ImagenListaDeReproduccion2: {
        file: {
          url: 'image2.png'
        }
      },
      LinkListaDeReproduccion3: 'https//apple-podcast.com',
      ImagenListaDeReproduccion3: {
        file: {
          url: 'image3.png'
        }
      }
    }
    const wrapper = shallow(
      <PodcastNaranjaMedia
        contentTitle={contentTitle}
        contentURL={contentURL}
        podcast={podcast}
        eventsGAComponentShare={{}}
      />
    )
    expect(wrapper.find('PodcastLinkItem').length).toBe(3)
    expect(
      wrapper.hasClass('Internal-talento-si-hay-container-podcats-reproductor')
    ).toBeTruthy()
  })

  test('should simulate click in button share', () => {
    const contentURL = 'https//link-1.com'
    const contentTitle = 'Talento si hay'
    const podcast = {
      titulo: 'Talento si hay podcast',
      linkPodcast: { linkPodcast: 'https//podcast.com' }
    }
    const wrapper = shallow(
      <PodcastNaranjaMedia
        contentTitle={contentTitle}
        contentURL={contentURL}
        podcast={podcast}
        eventsGAComponentShare={{}}
      />
    )
    wrapper.find('#button-share-podcast-naranja-media').simulate('click')
    wrapper.update()
    expect(
      wrapper
        .find('#section-share-podcast-naranja-media')
        .hasClass('share-animation-active')
    ).toBeTruthy()
    expect(
      wrapper.hasClass('Internal-talento-si-hay-container-podcats-reproductor')
    ).toBeTruthy()
  })
})
