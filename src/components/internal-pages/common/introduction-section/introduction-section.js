import React from 'react'
import { useCurrentWidth } from 'react-socks'
import { checkIfExtensionImageIsAllowed } from '../../../../utils/image-utils'
import Image from '../../../atoms/image/image'
import './introduction-section.scss'

export default function IntroductionSection({
  title = '',
  description = '',
  line = '',
  image = { imagen: '', title: '', nameImage: '' }
}) {
  const currentWidth = useCurrentWidth()

  return (
    <section className="container-introduction-section">
      <div className="introduction-section__text">
        <h1
          className="container-introduction-section-title"
          id="section-introduction-title"
        >
          {title}
        </h1>
        <p className="container-introduction-section-description">
          {description}
        </p>
      </div>
      {image?.imagen && (
        <div className="introduction-section__image">
          <Image
            line={line}
            imagen={image.imagen}
            imgTitle={image.title}
            alt={image.nameImage}
            height={currentWidth > 1024 ? '350px' : '194px'}
            width={currentWidth > 1024 ? '350px' : '194px'}
            id="section-introduction-image"
            classGtm=""
            style={
              checkIfExtensionImageIsAllowed(image.imagen)
                ? {
                    borderRadius: '50%',
                    position: 'absolute'
                  }
                : {}
            }
            animacion
          />
        </div>
      )}
    </section>
  )
}
