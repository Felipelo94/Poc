import React from 'react'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'
import './image.scss'

const Image = props => {
  const {
    imagen,
    alt,
    width,
    height,
    id,
    classNames,
    resize,
    style,
    classGtm,
    animacion,
    dataTut,
    line,
    imgTitle
  } = props

  return (
    <section
      id="image-container"
      className={`image-container ${classGtm} ${animacion &&
        checkIfExtensionImageIsAllowed(imagen) &&
        'image-container--margin'}`}
    >
      <section
        id="image-container-box"
        className={'image-container__box ' + classGtm}
        style={{ width: width, height: height }}
      >
        <figure className="image-container__figure">
          <img
            title={imgTitle}
            data-tut={dataTut}
            id={`image-container-box-image-${id}`}
            className={classNames + ' ' + classGtm}
            src={imagen}
            alt={alt}
            width={resize}
            height={resize}
            style={style}
            loading="lazy"
          />
        </figure>
        {animacion && checkIfExtensionImageIsAllowed(imagen) && (
          <>
            <div className="image-container__image-background-green" />
            <div
              className={`image-container__image-background-aro-${
                line === 'Inversión' ? 'negro' : 'azul'
              }`}
            />
            <div
              className={`image-container__image-background-burbuja-${
                line === 'Inversión' ? 'negra' : 'azul'
              }`}
            />
            <div
              className={`image-container__image-background-burbuja-${
                line === 'Inversión' ? 'gris' : 'azul-claro'
              }`}
            />
            <div
              className={`image-container__image-background-burbuja-puntos-${
                line === 'Inversión' ? 'gris' : 'calros'
              }`}
            />
          </>
        )}
      </section>
    </section>
  )
}

export default Image
