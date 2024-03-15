import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import './large-text2.scss'
import CallToAction from '../../molecules/call-to-action/call-to-action'
import Image from '../../atoms/image/image'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import { Breakpoint } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'

const LargeText2 = ({
  data,
  isGetSubtitulo,
  subtitulo,
  line,
  user,
  type,
  lineGtm,
  accessibility,
  THS,
  actionGA,
  titleContent
}) => {
  return (
    <div id="LargeText2">
      <span className="hidden-lable" id="hidden-lable">
        texto largo 2
      </span>
      <div className="container-large-text2" id="container-large-text2">
        {data.imagenes[0] ? (
          <div
            className="container-large-text2-img"
            id="container-large-text2-img"
          >
            <Breakpoint customQuery="(max-width: 1024px)">
              <Image
                height={'194px'}
                line={line}
                width={'194px'}
                imagen={data.imagenes[0].imagen}
                imgTitle={data.imagenes[0].title}
                alt={data.imagenes[0].nameImage}
                id="container-large-text2-img-value"
                style={
                  checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                    ? {
                        borderRadius: '50%',
                        position: 'absolute'
                      }
                    : {}
                }
                classGtm=""
                animacion={true}
              />
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1025px)">
              <Image
                height={'350px'}
                line={line}
                width={'350px'}
                imagen={data.imagenes[0].imagen}
                alt={data.imagenes[0].nameImage}
                imgTitle={data.imagenes[0].title}
                id="container-large-text2-img-value"
                style={
                  checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                    ? {
                        borderRadius: '50%',
                        position: 'absolute'
                      }
                    : {}
                }
                classGtm=""
                animacion={true}
              />
            </Breakpoint>
          </div>
        ) : null}
        <div>
          <div
            id="large-text-container-proxy-subtitle"
            className="container-large-text2-title"
          >
            <TitleSesion title={subtitulo} className="title-big" />
          </div>
          {data.parrafos.map((items, index) => {
            return (
              <div id={`container-large-text2-parrafos-${index}`}>
                <RichText
                  title={data.title}
                  accessibility={accessibility}
                  text={items}
                  line={lineGtm}
                  type={type}
                  isGetSubtitulo={isGetSubtitulo}
                  THS={THS}
                />
              </div>
            )
          })}

          <div id="call-to-action-LargeText2">
            {data.cta ? (
              <CallToAction
                accessibility={accessibility}
                descripcion={data.cta.titulo}
                titulo={data.cta.textoButton}
                link={data.cta.url}
                lineGtm={lineGtm}
                titleContent={data.title}
                line={line}
                type={type}
                user={user}
                actionGA={actionGA}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default LargeText2
