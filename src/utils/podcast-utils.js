const NAME_ATTRIBUTES_LINKS_IMAGES_PODCAST = [
  {
    link: 'LinkListaDeReproduccion1',
    img: 'ImagenListaDeReproduccion1'
  },
  {
    link: 'LinkListaDeReproduccion2',
    img: 'ImagenListaDeReproduccion2'
  },
  {
    link: 'LinkListaDeReproduccion3',
    img: 'ImagenListaDeReproduccion3'
  }
]

export const getSrcImgPodcast = dataImg => {
  return (dataImg?.file?.url ?? dataImg?.fluid?.src) || ''
}

export const getPodcastLinks = contentPodcast => {
  let podcastLinks = []
  NAME_ATTRIBUTES_LINKS_IMAGES_PODCAST.forEach(nameAttribute => {
    podcastLinks.push({
      link: contentPodcast?.[nameAttribute.link],
      srcImg: getSrcImgPodcast(contentPodcast?.[nameAttribute.img])
    })
  })
  return podcastLinks.filter(
    podcastLink => podcastLink.link && podcastLink.srcImg
  )
}
