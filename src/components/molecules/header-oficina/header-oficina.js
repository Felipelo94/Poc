import Markdown from 'markdown-to-jsx'
import React from 'react'
import { useCurrentWidth } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'
import {
  scaleText,
  SCALE_SIZE_34PX,
  scaleLine,
  SCALE_SIZE_15PX
} from '../../../utils/scaleText'
import Image from '../../atoms/image/image'
import CallToAction from '../call-to-action/call-to-action'
import './header-oficina.scss'

export default function HeaderOficina({
  data,
  accessibility,
  showCoverImage = false
}) {
  const widthScreen = useCurrentWidth()
  return (
    <div className="container-header-oficina" id="container-header-oficina">
      <div
        className="container-header-oficina-container"
        id="container-header-oficina-container"
      >
        <div
          className="container-header-oficina-container-text"
          id="container-header-oficina-container-text"
        >
          <div
            style={{
              fontSize: accessibility
                ? scaleText(accessibility.fontSize, SCALE_SIZE_34PX, 1.5)
                    .fontSize
                : null,
              lineHeight: accessibility
                ? scaleLine(accessibility.lineSize)
                : null
            }}
            className="container-header-oficina-container-text-title"
            id="container-header-oficina-container-text-title"
          >
            <span id="container-header-oficina-container-text-title-value">
              {data.title ? data.title : ''}
            </span>
          </div>
          <div
            className="container-header-oficina-container-text-subtitle"
            id="container-header-oficina-container-text-subtitle"
          >
            <Markdown
              style={{
                fontSize: accessibility
                  ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                      .fontSize
                  : null,
                lineHeight: accessibility
                  ? scaleLine(accessibility.lineSize)
                  : null
              }}
              id="container-header-oficina-container-text-subtitle-value"
            >
              {data.subtitle}
            </Markdown>
          </div>
          {data.textoCallToActionSuperior && (
            <CallToAction
              accessibility={accessibility}
              descripcion={''}
              titulo={
                data.textoCallToActionSuperior
                  ? data.textoCallToActionSuperior
                  : null
              }
              link={
                data.linkCallToActionSuperior
                  ? data.linkCallToActionSuperior
                  : null
              }
              callToActionSuperior={true}
            />
          )}
        </div>
        <div
          id="container-header-oficina-container-text-image"
          className="container-header-oficina-container-text-image"
        >
          <Image
            animacion={showCoverImage}
            classNames="container-header-oficina-container-text-image-value"
            imagen={data.image}
            imgTitle="imagen icono de oficinas"
            alt="imagen icono de oficinas"
            line={'Inversión'}
            id="container-header-oficina-container-text-image-value"
            classGtm=""
            style={
              showCoverImage && checkIfExtensionImageIsAllowed(data.image)
                ? {
                    borderRadius: '50%',
                    position: 'absolute'
                  }
                : {}
            }
            height={widthScreen > 1024 ? '350px' : '194px'}
            width={widthScreen > 1024 ? '350px' : '194px'}
          />
        </div>
      </div>
    </div>
  )
}
