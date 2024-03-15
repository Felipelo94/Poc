import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import './long-text.scss'
import CallToAction from '../call-to-action/call-to-action'
import Image from '../../atoms/image/image'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import { Breakpoint } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'

export default function LongText({
  data,
  isGetSubtitulo,
  subtitle,
  line,
  user,
  type,
  lineGtm,
  accessibility,
  THS
}) {
  return (
    <div className="LongText-container" id="LongText-container">
      <span className="hidden-lable" id="hidden-lable">
        texto largo 1
      </span>
      {data.imagenes ? (
        data.imagenes[0] ? (
          <div
            className="LongText-container-parrafo-imagen"
            id="LongText-container-parrafo-imagen"
          >
            <div>
              <Breakpoint customQuery="(max-width: 1024px)">
                {data.imagenes ? (
                  <Image
                    line={lineGtm}
                    imagen={data.imagenes[0].imagen}
                    imgTitle={data.imagenes[0].title}
                    height={'194px'}
                    width={'194px'}
                    alt={data.imagenes[0].nameImage}
                    id="LongText-container-parrafo-imagen-value"
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
                ) : null}
              </Breakpoint>
              <Breakpoint customQuery="(min-width: 1025px)">
                {data.imagenes ? (
                  <Image
                    imagen={data.imagenes[0].imagen}
                    imgTitle={data.imagenes[0].title}
                    height={'350px'}
                    line={lineGtm}
                    width={'350px'}
                    alt={data.imagenes[0].nameImage}
                    id="LongText-container-parrafo-imagen-value"
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
                ) : null}
              </Breakpoint>
            </div>
          </div>
        ) : null
      ) : null}
      <div>
        <div id="ContentProxy-container-long-text-title-sesion">
          <TitleSesion title={subtitle} className="long-text" size="30px" />
        </div>
        {data.parrafos.map((items, index) => {
          return (
            <div
              className="LongText-container"
              id={`LongText-container-${index}`}
            >
              <div
                className="LongText-container-parrafo"
                id={`LongText-container-parrafo-${index}`}
              >
                <div id={`LongText-container-parrafo-value-${index}`}>
                  <RichText
                    accessibility={accessibility}
                    title={data.title}
                    text={items}
                    line={lineGtm}
                    type={type}
                    isGetSubtitulo={isGetSubtitulo}
                    THS={THS}
                  />
                </div>
              </div>
            </div>
          )
        })}
        {data.callToAction ? (
          <div
            className="ContentProxy-container-long-text-btn"
            id="ContentProxy-container-long-text-btn"
          >
            <CallToAction
              accessibility={accessibility}
              descripcion={data.callToAction.titulo}
              titulo={data.callToAction.textoButton}
              link={data.callToAction.url}
              titleContent={data.title}
              line={line}
              lineGtm={lineGtm}
              type={type}
              user={user}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
