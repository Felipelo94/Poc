import React from 'react'
import ContentUtil from '../../../utils/ContentUtil'
import { getSizeScreen } from '../../../utils/handleResize'
import './item-figure.scss'

export default function ItemFigure({ id, figure, isLastOne, isFirstOne }) {
  const contentUtil = new ContentUtil()
  return (
    <div
      className={`container-item-figure ${
        !isLastOne && getSizeScreen() > 1024
          ? 'container-item-figure-border'
          : ''
      }`}
      id={`container-item-figure-${id}`}
    >
      <img
        id={`container-item-figure-img-${id}`}
        className="container-item-figure-img"
        alt={contentUtil.generateAltImage(figure.icono.file.fileName)}
        src={figure.icono.file.url}
      ></img>
      <div
        id={`container-item-figure-info-${id}`}
        className={`container-item-figure-info`}
      >
        <span
          id={`container-item-figure-info-title-${id}`}
          className="container-item-figure-info-value"
        >
          {figure.Titulo}
        </span>
        <p
          id={`container-item-figure-info-description-${id}`}
          className="container-item-figure-info-description"
        >
          {figure.descripcion}
        </p>
      </div>
    </div>
  )
}
