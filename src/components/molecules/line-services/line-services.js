import React from 'react'
import './line-services.scss'
import OptionChannel from '../option-channel/option-channel'
import phone from '../../../assets/images/BG-icons.svg'
import calendar from '../../../assets/images/BG-icons-calendar.svg'

export default function LineServices({ dataHeader, accessibility }) {
  const {
    textoCallToAction,
    linkCallToAction,
    textoCallToAction2,
    linkCallToAction2,
    descripcionCallToAction
  } = dataHeader
  let dataOption = []
  if (textoCallToAction !== null || linkCallToAction !== null) {
    dataOption.push({
      texto: textoCallToAction,
      link: linkCallToAction,
      image: phone,
      gtmTag: 'gtmCanalesLinServLlamClic',
      title: 'Ícono de Llámanos a un clic',
      alt:
        'Ícono de teléfono, lleva al home del formulario de Videoasesoría, debes ingresar tus datos para recibir asesoría'
    })
  }

  if (textoCallToAction2 !== null || linkCallToAction2 !== null) {
    dataOption.push({
      texto: textoCallToAction2,
      link: linkCallToAction2,
      image: calendar,
      gtmTag: 'gtmCanalesLinServAgenLlam'
    })
  }

  return (
    <div>
      {dataOption.length > 0 ? (
        <div id="container-line-services" className="container-line-services">
          <OptionChannel
            accessibility={accessibility}
            title={descripcionCallToAction}
            data={dataOption}
          />
        </div>
      ) : null}
    </div>
  )
}
