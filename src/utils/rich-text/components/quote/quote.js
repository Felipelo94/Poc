import React from 'react'
import BrainImage from '@assets/images/image-cerebro.png'
import MobileBrainImage from '@assets/images/image-cerebro-mobile.svg'
import useCurrentWidth from '@hooks/useCurrentWidth/useCurrentWidth'

export const Quote = ({ text, lineUser }) => {
  const width = useCurrentWidth()

  return (
    <div
      className="container-parrafo__content-quote"
      id="container-parrafo-content-quote"
    >
      {lineUser === 'Inversión' && (
        <img
          src={width > 1024 ? BrainImage : MobileBrainImage}
          alt="Imagen de icono del parrafo"
        />
      )}
      {text}
    </div>
  )
}
