import React, { useState } from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import './links-interest.scss'

export default function LinksInterest({
  data,
  type,
  lineGtm,
  imageSecundaria,
  accessibility
}) {
  const [isParrafo, setIsParrafo] = useState(0)

  let DataImage = imageSecundaria
    ? {
        alt: imageSecundaria.description,
        step: imageSecundaria.file.url
      }
    : ''
  const setNumeroIsParrafo = numero => {
    if (isParrafo !== numero && numero !== 0) {
      setIsParrafo(numero)
    }
  }

  const validatePlantilla = (dataPlantilla, num) => {
    let numero
    dataPlantilla.content.map(({ data, nodeType }) => {
      const indexElement2 = nodeType.indexOf('embedded-entry-block')
      if (indexElement2 >= 0) {
        if (data) {
          if (data.target.sys.contentType) {
            if (data.target.sys.contentType.sys.id === 'EnlacesDeInteres') {
              setNumeroIsParrafo(num)
            }
          }
          setNumeroIsParrafo(0)
        }
        setNumeroIsParrafo(0)
      }
    })
    return numero
  }

  return (
    <div className="links-interest-container" id="links-interest-container">
      <div
        id="links-interest-container-image"
        className="links-interest-container-image"
      >
        <img
          id="links-interest-container-image-value"
          className="links-interest-container-image-value"
          src={DataImage.step}
          alt={DataImage.alt}
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
        />
      </div>
      <div
        id="links-interest-container-tarjetas"
        className="links-interest-container-tarjetas"
      >
        {data
          ? data.parrafos.map((contenido, i) => {
              validatePlantilla(contenido, 1)
              if (isParrafo === 1) {
                return (
                  <RichText
                    accessibility={accessibility}
                    type={type}
                    line={lineGtm}
                    title={data.title}
                    text={contenido}
                  />
                )
              }
            })
          : null}
        {data
          ? data.parrafos2.map((contenido, i) => {
              validatePlantilla(contenido, 2)
              if (isParrafo === 2) {
                return (
                  <RichText
                    key={i}
                    accessibility={accessibility}
                    type={type}
                    line={lineGtm}
                    title={data.title}
                    text={contenido}
                  />
                )
              }
            })
          : null}
      </div>
    </div>
  )
}
