import { getPodcastLinks, getSrcImgPodcast } from './podcast-utils'

describe('Test for podcast util', () => {
  test('getSrcImgPodcast should return empty string when there is no image', () => {
    const imageContentful = null
    const srcImg = getSrcImgPodcast(imageContentful)
    expect(srcImg).toBe('')
  })

  test('getSrcImgPodcast should return source image when there is image', () => {
    const imageContentful = {
      fluid: {
        src: 'image.png'
      }
    }
    const srcImg = getSrcImgPodcast(imageContentful)
    expect(srcImg).toBe(imageContentful.fluid.src)
  })

  test('getSrcImgPodcast should return url image when there is image', () => {
    const imageContentful = {
      file: {
        url: 'image.svg'
      }
    }
    const srcImg = getSrcImgPodcast(imageContentful)
    expect(srcImg).toBe(imageContentful.file.url)
  })

  test('getPodcastLinks should return 1 podcast link', () => {
    const contentPodcast = {
      LinkListaDeReproduccion1: 'link.com',
      ImagenListaDeReproduccion1: {
        file: {
          url: 'image1.png',
          fileName: 'image 1'
        },
        fluid: {
          src: null
        }
      },
      LinkListaDeReproduccion2: null,
      ImagenListaDeReproduccion2: {
        file: null,
        fluid: null
      },
      LinkListaDeReproduccion3: null,
      ImagenListaDeReproduccion3: {
        file: null,
        fluid: null
      }
    }
    const podcastLinks = getPodcastLinks(contentPodcast)
    expect(podcastLinks.length).toBe(1)
  })

  test('getPodcastLinks should return 2 podcasts link', () => {
    const contentPodcast = {
      LinkListaDeReproduccion1: 'link.com',
      ImagenListaDeReproduccion1: {
        file: {
          url: 'image1.png',
          fileName: 'image 1'
        },
        fluid: {
          src: null
        }
      },
      LinkListaDeReproduccion2: null,
      ImagenListaDeReproduccion2: {
        file: null,
        fluid: null
      },
      LinkListaDeReproduccion3: 'link3.com',
      ImagenListaDeReproduccion3: {
        file: null,
        fluid: {
          src: 'image3.png'
        }
      }
    }
    const podcastLinks = getPodcastLinks(contentPodcast)
    expect(podcastLinks.length).toBe(2)
  })
})
