import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import Video from '../../atoms/video/video'
import './content-video.scss'
import CallToAction from '../../molecules/call-to-action/call-to-action'
import { get } from '../../../services/service-general/service-general'

const ContentVideo = ({ data, line, user, type, lineGtm, accessibility }) => {
  return (
    <div className="container-content-video" id="container-content-video">
      <span className="hidden-lable" id="hidden-lable">
        video
      </span>

      <div
        id="container-content-video-parrafos"
        className="container-content-video-parrafos"
      >
        {data.parrafos.map((items, index) => {
          return (
            <div id={`container-content-video-parrafos-${index}`}>
              <RichText
                accessibility={accessibility}
                title={data.title}
                fontSize="15px"
                lineHeight="22px"
                text={items}
                line={lineGtm}
                type={type}
              />
            </div>
          )
        })}
      </div>
      <div id={`container-content-video-value`}>
        <Video
          line={lineGtm}
          titleContent={data.title}
          type={type}
          get={get}
          videoData={data.video}
        />
      </div>

      {data.cta && data.cta['titulo'] !== null && data.cta['url'] !== null ? (
        <div
          id="container-content-video-calltoaction"
          className="container-content-video-call-to-action"
        >
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            titleContent={data.title}
            line={line}
            lineGtm={lineGtm}
            type={type}
            user={user}
          />{' '}
        </div>
      ) : null}
    </div>
  )
}
export default ContentVideo
