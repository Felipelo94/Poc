import React from 'react'
import { mapParagraphtoParrafo } from '../../../utils/map-paragraph-to-parrafo'
import LargeText2 from '../large-text2/large-text2'
import './says-expert.scss'

export default function SaysExpert({
  contenido,
  imagen,
  titleContent,
  userData
}) {
  const dataDefualtContenful = contenido.CuerpoContenido
    ? contenido.CuerpoContenido.json
    : null

  const dataParrafos = contenido.CuerpoContenido
    ? contenido.CuerpoContenido.json.content.slice()
    : null

  const parrafos = contenido.CuerpoContenido
    ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful)
    : []

  const imageParrafo = [
    {
      imagen: imagen.file.url,
      nameImage: imagen.file.fileName
    }
  ]

  const CallToActionParrafo = {
    textoButton: 'Quiero conocerlos',
    titulo: contenido.descripcionCallToAction.descripcionCallToAction,
    url: contenido.linkCallToAction.linkCallToAction
  }

  const dataSend = {
    title: null,
    imagenes: imageParrafo,
    parrafos: parrafos,
    cta: CallToActionParrafo,
    video: null
  }

  return (
    <div className="says-expert" id="says-expert">
      <LargeText2
        titleContent={titleContent}
        data={dataSend}
        line={'Inversión'}
        actionGA="ClicInternaInversion-CTA-"
        user={userData}
      />
    </div>
  )
}
