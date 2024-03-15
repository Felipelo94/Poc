import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import './contenido-interna.scss'
import PropTypes from 'prop-types'
import Image from '../../atoms/image/image'
import CallToAction from '../call-to-action/call-to-action'
import { useCurrentWidth } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'

export default function ContenidoInterna({
  data,
  isGetSubtitulo,
  line,
  user,
  type,
  lineGtm,
  accessibility,
  THS
}) {
  const withd = useCurrentWidth()

  return (
    <div id="ContenidoInterna-container">
      {data.parrafos.map((items, index) => {
        return (
          <div
            id={`container-ContenidoInterna-bite-intenal-${index}`}
            className={
              data.parrafos.length > 1
                ? `container-ContenidoInterna bite-intenal-${index}`
                : `container-ContenidoInterna`
            }
          >
            <span className="hidden-lable" id="hidden-lable">
              texto corto
            </span>
            {data.imagenes[index] ? (
              <div
                className="container-ContenidoInterna-image"
                id={`container-ContenidoInterna-image-${index}`}
                style={
                  withd > 1024
                    ? {
                        position: 'sticky',
                        top: '20%',
                        paddingBottom: '100px',
                        paddingTop: '50px'
                      }
                    : {}
                }
              >
                <Image
                  height="350px"
                  width="350px"
                  line={lineGtm}
                  imagen={data.imagenes[index].imagen}
                  imgTitle={data.imagenes[index].title}
                  alt={data.imagenes[index].nameImage}
                  id={`container-ContenidoInterna-image-${index}-image`}
                  style={
                    checkIfExtensionImageIsAllowed(data.imagenes[index].imagen)
                      ? {
                          borderRadius: '50%',
                          position: 'absolute'
                        }
                      : {}
                  }
                  classGtm=""
                  animacion={true}
                />
              </div>
            ) : null}

            <div
              className="container-ContenidoInterna-title"
              id={`container-ContenidoInterna-title-${index}`}
            >
              <RichText
                accessibility={accessibility}
                title={data.title}
                text={items}
                isGetSubtitulo={isGetSubtitulo}
                line={lineGtm}
                type={type}
                THS={THS}
              />
            </div>
          </div>
        )
      })}
      <div
        className="contenido-interna-container-call-to-action"
        id="contenido-interna-container-call-to-action"
      >
        {data.cta ? (
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            titleContent={data.title}
            line={line}
            lineGtm={lineGtm}
            user={user}
            type={type}
          />
        ) : null}
      </div>
    </div>
  )
}

ContenidoInterna.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}
