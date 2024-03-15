import React, { Fragment } from 'react'
import Audio from '../../atoms/audio/audio'
import './podcast.scss'

const Podcast = ({
  data,
  dataCompleta,
  setAudioActive,
  list,
  categoryGA,
  actionGA
}) => {
  return (
    <Fragment>
      {data ? (
        <div id="container-podcast" className="container-podcast">
          {dataCompleta ? (
            dataCompleta.map(i => {
              return (
                <div id="container-podcast-url" style={{ display: 'none' }}>
                  {i.linkPodcast.linkPodcast}
                </div>
              )
            })
          ) : (
            <div id="container-podcast-url" style={{ display: 'none' }}>
              {data.linkPodcast.linkPodcast}
            </div>
          )}
          {data.OrigenDeAudio[0] === 'Contentful' ? (
            <Audio
              title={data.titulo}
              subtitle={data.descripcion}
              audio={data.linkPodcast.linkPodcast}
              dataCompleta={dataCompleta}
              id={data.contentful_id}
              setAudioActive={setAudioActive}
              list={list}
              categoryGA={categoryGA}
              actionGA={actionGA}
            />
          ) : (
            <iframe
              title={data.titulo}
              src={data.linkPodcast.linkPodcast}
              width={'100%'}
              height="234"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              data-gtm-yt-inspected-1979138_568="true"
              data-gtm-yt-inspected-1979138_1040="true"
              data-gtm-yt-inspected-1979138_1184="true"
            ></iframe>
          )}
        </div>
      ) : null}
    </Fragment>
  )
}

export default Podcast
