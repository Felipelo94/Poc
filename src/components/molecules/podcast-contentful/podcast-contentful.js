import PropTypes from 'prop-types'
import React from 'react'
import Audio from '../../atoms/audio/audio'
import PodcastNaranjaMedia from '../podcast-naranja-media/podcast-naranja-media'

const PodcastContentful = ({
  contentTitle,
  contentURL,
  podcast,
  eventsGAComponentShare
}) => {
  const podcastType =
    podcast?.OrigenDeAudio?.length === 1 ? podcast.OrigenDeAudio[0] : 'default'
  switch (podcastType) {
    case 'Spotify':
      return (
        <iframe
          src={podcast.linkPodcast.linkPodcast}
          title={contentTitle}
          width={'100%'}
          height="234"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          data-gtm-yt-inspected-1979138_568="true"
          data-gtm-yt-inspected-1979138_1040="true"
          data-gtm-yt-inspected-1979138_1184="true"
        />
      )
    case 'Contentful':
      return (
        <Audio
          title={podcast.titulo}
          subtitle={podcast.descripcion}
          audio={podcast.linkPodcast.linkPodcast}
          id={podcast.contentful_id}
          list={false}
        />
      )
    case 'NaranjaMedia':
      return (
        <PodcastNaranjaMedia
          contentTitle={contentTitle}
          contentURL={contentURL}
          podcast={podcast}
          eventsGAComponentShare={eventsGAComponentShare}
        />
      )
    default:
      return <div />
  }
}

PodcastContentful.propTypes = {
  contentTitle: PropTypes.string,
  contentURL: PropTypes.string,
  podcast: PropTypes.object,
  eventsGAComponentShare: PropTypes.object
}

export default PodcastContentful
