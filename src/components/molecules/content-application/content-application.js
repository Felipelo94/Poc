import React from 'react'
import './content-application.scss'
import RichText from '../../../utils/rich-text/rich-text'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import CallToAction from '../call-to-action/call-to-action'

const ContentApplication = ({
  data,
  subtitulo,
  children,
  user,
  line,
  accessibility,
  type,
  lineGtm
}) => {
  return (
    <div className="container-application" id="container-application">
      <span className="hidden-lable" id="hidden-lable">
        container-application
      </span>
      {children}
      <div
        id="container-application-contenido"
        className="container-application-contenido"
      >
        <div id="container-application-contenido-subtitle">
          <TitleSesion title={subtitulo} className="title-big" size="30px" />
        </div>
        <div
          id="container-application-parrafos"
          className="container-application-parrafos"
        >
          {data.parrafos.map((items, index) => {
            return (
              <div id={`container-application-parrafos-${index}`}>
                <RichText
                  accessibility={accessibility}
                  title={data.title}
                  fontSize="15px"
                  lineHeight="22px"
                  text={items}
                  type={type}
                  line={lineGtm}
                />
              </div>
            )
          })}
        </div>
        {data.cta && data.cta['titulo'] !== null && data.cta['url'] !== null ? (
          <div
            id="container-application-contenido-calltoaction"
            className="container-application-contenido-call-to-action"
          >
            <CallToAction
              accessibility={accessibility}
              descripcion={data.cta.titulo}
              titulo={data.cta.textoButton}
              link={data.cta.url}
              line={line}
              type={type}
              lineGtm={lineGtm}
              titleContent={data.title}
              user={user}
            />{' '}
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default ContentApplication
