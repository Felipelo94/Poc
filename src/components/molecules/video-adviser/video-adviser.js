import React, { useEffect } from 'react'
import './video-adviser.scss'
import OptionChannel from '../option-channel/option-channel'
import computer from '../../../assets/images/computer.svg'

export default function VideoAdviser({
  style,
  dataHeader,
  IsOpenMenu,
  modal,
  openModal,
  accessibility
}) {
  const {
    textoCallToAction,
    linkCallToAction,
    descripcionCallToAction
  } = dataHeader
  let dataOption = []
  if (textoCallToAction !== null || linkCallToAction !== null) {
    dataOption.push({
      texto: textoCallToAction,
      link: linkCallToAction,
      image: computer,
      gtmTag: 'gtmCanalesVidasesVidases'
    })
  }

  useEffect(openModal, [])

  return (
    <div
      id="container-video-adviser"
      style={style}
      className="container-video-adviser"
    >
      {IsOpenMenu && modal}
      <OptionChannel
        accessibility={accessibility}
        title={descripcionCallToAction}
        data={dataOption}
      />
    </div>
  )
}
