import React from 'react'
import './header-inversiones.scss'
import Image from '../../atoms/image/image'
import { useCurrentWidth } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'
import CallToAction from '../call-to-action/call-to-action'

export default function HeaderInversiones({
  title,
  descripcion,
  images,
  line = 'Inversión',
  callToActionSuperior,
  accessibility,
  pageContext,
  type
}) {
  const widthScreen = useCurrentWidth()

  return (
    <div
      className="header-inversiones-container"
      id="header-inversiones-container"
    >
      <div
        className="header-inversiones-container-text"
        id="header-inversiones-container-text"
      >
        <div
          className="header-inversiones-container-text-title"
          id="header-inversiones-container-text-title"
        >
          <span>{title}</span>
        </div>
        <div
          className="header-inversiones-container-text-descripcion"
          id="header-inversiones-container-text-descripcion"
        >
          <span>{descripcion}</span>
        </div>
      </div>
      {images ? (
        <div
          className="header-inversiones-container-image"
          id="header-inversiones-container-image"
        >
          <Image
            imagen={images.imagen}
            imgTitle={images.title}
            height={widthScreen > 1024 ? '350px' : '194px'}
            line={line}
            width={widthScreen > 1024 ? '350px' : '194px'}
            alt={images.nameImage}
            id="LongText-container-parrafo-imagen-value"
            classGtm=""
            style={
              checkIfExtensionImageIsAllowed(images.imagen)
                ? {
                    borderRadius: '50%',
                    position: 'absolute'
                  }
                : {}
            }
            animacion
          />
        </div>
      ) : null}
      {callToActionSuperior && (
        <CallToAction
          accessibility={accessibility}
          descripcion={''}
          titulo={callToActionSuperior ? callToActionSuperior.texto : null}
          link={callToActionSuperior ? callToActionSuperior.url : null}
          line={pageContext?.line}
          lineGtm={pageContext?.lineGtm}
          type={type}
          titleContent={title}
          callToActionSuperior={true}
        />
      )}
    </div>
  )
}
