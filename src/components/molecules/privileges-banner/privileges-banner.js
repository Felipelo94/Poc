import React from 'react'
import Button from '../../atoms/button/button'
import styles from './privileges-banner.module.scss'
import { SCALE_SIZE_15PX, SCALE_SIZE_16PX, SCALE_SIZE_30PX, scaleLine, scaleText } from '../../../utils/scaleText'

export const PrivilegesBanner = ({ data, accessibility }) => {
  const navigateButton = () => {
    window.open(data.linkCallToAction1, '_blank')
  }

  return (
    <div
      className={styles.banner_container}
      style={{
        backgroundImage: `url(${data.imagenFondoPrincipal.file.url})`,
        backgroundRepeat: 'no-repeat',
        width: '100%'
      }}
      data-testid="banner-container"
    >
      <div className={styles.banner_container__text_container}>
        <h1 
        className={styles.banner_container__text_container__title}
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1.5)
            .fontSize,
          lineHeight: scaleLine(accessibility.lineSize >= 8 ? accessibility.lineSize : 8)
        }}
        >
          {data.titulo}
        </h1>
        <p 
        className={styles.banner_container__text_container__descripcion}
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5)
            .fontSize
        }} 
        >
          {data.descripcion.descripcion}
        </p>

        <Button
          title={data.textoCallToAction1}
          style={{
            width: 220,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_16PX, 1.5)
            .fontSize
          }}
          className={`primary`}
          onClick={navigateButton}
        />
      </div>
      <div className={styles.banner_container__img_container}>
        <img
          alt={data.imagenPrincipal.file.fileName}
          src={data.imagenPrincipal.file.url}
        />
      </div>
    </div>
  )
}
