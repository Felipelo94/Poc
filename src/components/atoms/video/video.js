import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import YouTube from '@u-wave/react-youtube'
import {
  removeAccents,
  sendEventGA,
  sendGaPush,
  upperFirst
} from '../../../utils/classGtmUtil'
import ItemVideo from '../item-video/item-video'
import './video.scss'

const Video = ({ videoData, eventGA, get, line, type, titleContent }) => {
  const [currentVideo, setCurrentVideo] = useState(
    videoData ? videoData[0].split('embed/')[1] : ''
  )
  const [listVideo, setListVideo] = useState([])

  useEffect(() => {
    setCurrentVideo(videoData ? videoData[0].split('embed/')[1] : '')
    const arrarIdVideos = videoData
      ? videoData.map(item => {
          return item.split('embed/')[1]
        })
      : []
    get(
      [
        { name: 'part', value: 'snippet' },
        { name: 'id', value: arrarIdVideos.toString() },
        { name: 'key', value: 'AIzaSyCVoE76R8A5F8zFYclIuRkDxT_kW5hwKjI' }
      ],
      'https://www.googleapis.com/youtube/v3/videos',
      false
    )
      .then(resul => {
        const listFinal = resul.items.map(videoY => {
          const itemVideo = {}
          itemVideo.id = videoY.id
          itemVideo.url = 'https://www.youtube.com/embed/' + videoY.id
          itemVideo.title = videoY.snippet.title
          itemVideo.img = videoY.snippet.thumbnails
          return itemVideo
        })
        setListVideo(listFinal)
      })
      .catch(error => {})
  }, [videoData])

  const onReady = event => {
    if (event) {
      if (event.target) {
        event.target.setOption('captions', 'track', { languageCode: 'es' })
      }
    }
  }

  return (
    <div className="container-video" id="container-video">
      <div
        className="container-video-item"
        id="container-video-item"
        style={listVideo.length > 1 ? { background: '#fafbfc' } : null}
      >
        <YouTube
          id="container-video-item-iframe"
          showRelatedVideos={false}
          video={currentVideo}
          className={
            'container-video-item-iframe ' +
            (videoData
              ? videoData.length === 1
                ? 'container-video-item-iframe-one-video'
                : ''
              : '')
          }
          autoplay={false}
          showCaptions
          lang="es"
          onPlaying={onReady}
        />
      </div>

      {listVideo.length > 1 && (
        <div id="container-video-list" className="container-video-list">
          {listVideo.map((video, index) => {
            return (
              <button
                id={'container-video-list-item-' + index}
                className={'container-video-list-item'}
                tabIndex="0"
                onClick={() => {
                  setCurrentVideo(video.id)
                  if (eventGA.category) {
                    sendEventGA(
                      eventGA.category,
                      eventGA.action,
                      eventGA.label ? eventGA.label : video?.title ?? ''
                    )
                  }
                  sendGaPush(
                    removeAccents(line),
                    `Clic${type}-${
                      type === 'InternaAhorro' ? 'Video-' : 'ContenidosVideo-'
                    }${upperFirst(removeAccents(titleContent))}`,
                    video.title
                  )
                }}
              >
                <ItemVideo
                  line={line}
                  isSelected={currentVideo === video.id}
                  video={video}
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

Video.defaultProps = {
  eventGA: {}
}

Video.propTypes = {
  eventGA: PropTypes.shape({
    category: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  })
}

export default Video
