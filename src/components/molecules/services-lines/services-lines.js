import React from 'react'
import './services-lines.scss'
import { ReactComponent as PhoneIcon } from '../../../assets/images/phone.svg'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_13PX,
  SCALE_SIZE_15PX
} from '../../../utils/scaleText'

const ServicesLines = props => {
  return (
    <>
      <div className="container-lines">
        <PhoneIcon className="container-lines-icon" alt="telefono oficinas" />
        <div className="container-lines-info">
          <div
            style={{
              fontSize: props.accessibility
                ? scaleText(props.accessibility.fontSize, SCALE_SIZE_15PX, 1)
                    .fontSize
                : null,
              lineHeight: props.accessibility
                ? scaleLine(props.accessibility.lineSize)
                : null
            }}
            className="container-lines-tittle"
          >
            <span>
              Recuerda, si tu ciudad no está disponible en el mapa puedes
              comunicarte con la Línea de Servicio Protección:
            </span>
          </div>
          <div className="container-lines-service-info">
            {props.lines.map(line => {
              return (
                <div className="container-lines-service">
                  <div
                    style={{
                      fontSize: props.accessibility
                        ? scaleText(
                            props.accessibility.fontSize,
                            SCALE_SIZE_13PX,
                            1
                          ).fontSize
                        : null,
                      lineHeight: props.accessibility
                        ? scaleLine(props.accessibility.lineSize)
                        : null
                    }}
                    className="container-lines-service-name"
                  >
                    <span>{line.titulo}</span>
                  </div>
                  <div
                    style={{
                      fontSize: props.accessibility
                        ? scaleText(
                            props.accessibility.fontSize,
                            SCALE_SIZE_15PX,
                            1
                          ).fontSize
                        : null,
                      lineHeight: props.accessibility
                        ? scaleLine(props.accessibility.lineSize)
                        : null
                    }}
                    className="container-lines-service-phone"
                  >
                    <span>{line.numeroContacto}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesLines
