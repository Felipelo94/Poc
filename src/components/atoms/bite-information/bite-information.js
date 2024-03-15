import React from 'react'
import './bite-information.scss'
import direccion from '../../../assets/images/Direccion.png'
import telefonoIcon from '../../../assets/images/telefono.png'
import reloj from '../../../assets/images/reloj.png'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_18PX
} from '../../../utils/scaleText'

export default function BiteInformation({
  title,
  direccionOficina,
  telefono,
  horario,
  isMark,
  accessibility
}) {
  return (
    <div id="idmarker" className="container-bite-information">
      <div
        className={`container-bite-information-info ${
          isMark ? 'container-mobile-bite-information' : ''
        }`}
        id="container-bite-information-info"
      >
        <div
          style={{
            fontSize: accessibility
              ? scaleText(accessibility.fontSize, SCALE_SIZE_18PX, 1).fontSize
              : null,
            lineHeight: accessibility ? scaleLine(accessibility.lineSize) : null
          }}
          className="container-bite-information-info-title"
          id="container-bite-information-info-title"
        >
          <span id="container-bite-information-info-title-value">{title}</span>
        </div>
        <div id="container-bite-information-info-oficina-container">
          <div
            style={{
              fontSize: accessibility
                ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1).fontSize
                : null,
              lineHeight: accessibility
                ? scaleLine(accessibility.lineSize)
                : null
            }}
            className={`container-bite-information-info-oficina ${
              isMark ? 'container-mobile-bite-information-oficina' : ''
            }`}
            id="container-bite-information-info-oficina-1"
          >
            <img
              async
              src={direccion}
              alt="imagen de direccion"
              className="container-bite-information-info-oficina-imagen"
              id="container-bite-information-info-oficina-imagen"
            />
            <div id="container-bite-information-info-oficina-direccion-container">
              <span id="container-bite-information-info-oficina-direccion-container-text">
                Dirección:
              </span>
              <span
                style={{
                  fontSize: accessibility
                    ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                        .fontSize
                    : null,
                  lineHeight: accessibility
                    ? scaleLine(accessibility.lineSize)
                    : null
                }}
                id="container-bite-information-info-oficina-direccion"
                className="container-bite-information-info-oficina-direccion"
              >
                {direccionOficina}
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: accessibility
                ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1).fontSize
                : null,
              lineHeight: accessibility
                ? scaleLine(accessibility.lineSize)
                : null
            }}
            className={`container-bite-information-info-oficina ${
              isMark ? 'container-mobile-bite-information-oficina' : ''
            }`}
          >
            <img
              async
              src={telefonoIcon}
              alt="imagen de telefono"
              className="container-bite-information-info-oficina-imagen"
            />
            <div>
              <span>Teléfono:</span>
              <span
                style={{
                  fontSize: accessibility
                    ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                        .fontSize
                    : null,
                  lineHeight: accessibility
                    ? scaleLine(accessibility.lineSize)
                    : null
                }}
                className="container-bite-information-info-oficina-direccion"
              >
                {telefono}
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: accessibility
                ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1).fontSize
                : null,
              lineHeight: accessibility
                ? scaleLine(accessibility.lineSize)
                : null
            }}
            className={`container-bite-information-info-oficina ${
              isMark ? 'container-mobile-bite-information-oficina' : ''
            }`}
            id="container-bite-information-info-oficina-2"
          >
            <img
              async
              src={reloj}
              alt="imagen de telefono"
              className="container-bite-information-info-oficina-imagen"
              id="container-bite-information-info-oficina-imagen"
            />
            <div
              id="container-bite-information-info-oficina-direccion-container"
              className="container-bite-information-info-oficina-direccion"
            >
              <span id="container-bite-information-info-oficina-direccion-text">
                Horario de atención:
              </span>
              <span
                style={{
                  fontSize: accessibility
                    ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                        .fontSize
                    : null,
                  lineHeight: accessibility
                    ? scaleLine(accessibility.lineSize)
                    : null
                }}
                className="container-bite-information-info-oficina-direccion"
                id="container-bite-information-info-oficina-direccion"
              >
                {horario}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
