import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useCurrentWidth } from 'react-socks'
import { sendEventGA } from '../../../utils/classGtmUtil'
import shareBtn from '../../../assets/images/button-share.png'
import ComponentShare from '../component-share/component-share'
import { getPodcastLinks } from '../../../utils/podcast-utils'

import './podcast-naranja-media.scss'
import Anchor from '../../atoms/anchor/anchor'

export const PodcastLinkItem = ({
  srcImg,
  link,
  categoryGA,
  eventGA,
  labelGA
}) => {
  return (
    <>
      {link && (
        <Anchor
          className="podcast-links-item"
          onClick={() => {
            sendEventGA(categoryGA || '', eventGA || '', labelGA || '')
          }}
          href={link}
          target="__blank"
          tabIndex="0"
        >
          {srcImg && (
            <img
              src={srcImg}
              alt={labelGA || ''}
              style={{ height: '28px', width: '92px' }}
            />
          )}
        </Anchor>
      )}
    </>
  )
}

PodcastLinkItem.propTypes = {
  srcImg: PropTypes.string,
  link: PropTypes.string,
  categoryGA: PropTypes.string,
  eventGA: PropTypes.string,
  labelGA: PropTypes.string
}

const PodcastNaranjaMedia = ({
  contentTitle,
  contentURL,
  podcast,
  eventsGAComponentShare
}) => {
  const podcastLinks = getPodcastLinks(podcast)
  const widthScreen = useCurrentWidth()
  const [isSharePodcast, setIsSharePodcast] = useState(false)
  const getLabelGA = indexPodcastLink => {
    switch (indexPodcastLink) {
      case 0:
        return 'Spotify'
      case 1:
        return 'Deezer'
      default:
        // 2
        return 'ApplePodcasts'
    }
  }
  return (
    <div
      id="Internal-talento-si-hay-container-podcats-reproductor"
      className="Internal-talento-si-hay-container-podcats-reproductor"
    >
      <Anchor
        class="spreaker-player"
        href={podcast.linkPodcast.linkPodcast}
        data-resource="show_id=3641490"
        data-width="100%"
        data-height="350px"
        data-theme="light"
        data-playlist="show"
        data-playlist-continuous="false"
        data-autoplay="false"
        data-live-autoplay="false"
        data-chapters-image="true"
        data-episode-image-position="left"
        data-hide-logo="true"
        data-hide-likes="true"
        data-hide-comments="true"
        data-hide-sharing="true"
        data-hide-download="true"
        data-color="0033a0"
      >
        {`Listen to "${podcast.titulo}" on Spreaker.`}
      </Anchor>
      <Helmet>
        <script async src="https://widget.spreaker.com/widgets.js" />
      </Helmet>
      <div
        className="podcast-links"
        style={{ justifyContent: widthScreen < 450 && 'flex-start' }}
      >
        {podcastLinks.map((podcastLink, index) => {
          return (
            <PodcastLinkItem
              key={podcastLink.link}
              srcImg={podcastLink.srcImg}
              link={podcastLink.link}
              categoryGA="LandingOfertas"
              eventGA="ClicPodcastInspirate"
              labelGA={getLabelGA(index)}
            />
          )
        })}
        <button
          className="podcast-links-item"
          onClick={() => {
            if (!isSharePodcast) {
              sendEventGA('LandingOfertas', 'ClicPodcastInspirate', 'Compartir')
            }
            setIsSharePodcast(!isSharePodcast)
          }}
          style={{
            border: '0',
            background: '#fff'
          }}
          id="button-share-podcast-naranja-media"
          tabIndex="0"
        >
          <img
            src={shareBtn}
            alt="Compartir Podcast"
            style={{
              width: '96px',
              height: '28px'
            }}
          />
          <div
            style={
              widthScreen > 1024
                ? {
                    display: isSharePodcast ? null : 'none',
                    right: 'unset',
                    bottom: 'unset',
                    margin: '8px 0 0 -35px',
                    zIndex: '2'
                  }
                : {
                    display: isSharePodcast ? null : 'none'
                  }
            }
            id="section-share-podcast-naranja-media"
            className={
              isSharePodcast
                ? 'container-internal-content-componente-share-component share-animation-active'
                : 'container-internal-content-componente-share-component share-animation-inactive'
            }
          >
            <ComponentShare
              title={contentTitle}
              type="Persona"
              line="Inversión"
              eventsGA={eventsGAComponentShare}
              url={contentURL}
              isActive={isSharePodcast}
              setIsShare={setIsSharePodcast}
              showEmail={false}
            />
          </div>
        </button>
      </div>
    </div>
  )
}

PodcastNaranjaMedia.propTypes = {
  contentTitle: PropTypes.string,
  podcastLink: PropTypes.string,
  contentURL: PropTypes.string,
  includePodcast: PropTypes.string,
  podcastLinks: PropTypes.array,
  eventsGAComponentShare: PropTypes.object
}

export default PodcastNaranjaMedia
