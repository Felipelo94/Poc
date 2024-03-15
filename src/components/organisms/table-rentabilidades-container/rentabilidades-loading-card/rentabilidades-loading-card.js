import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LoaderIcon from '../../../atoms/loader-icon/loader-icon'
import './rentabilidades-loading-card.scss'

export function RentabilidadesLoadingCard() {
  const {
    contentfulMensajeServicio: {
      titulo: title,
      cuerpo: { cuerpo: description }
    }
  } = useStaticQuery(graphql`
    query RentabilidadesLoadingQuery {
      contentfulMensajeServicio(
        contentful_id: { eq: "Ly4zlRtoLsfa3kajUPFcQ" }
      ) {
        titulo
        cuerpo {
          cuerpo
        }
      }
    }
  `)

  return (
    <div className="container-internal-content-componente-header">
      <article className="RentabilidadesLoadingCard">
        <div className="RentabilidadesLoadingCard__card">
          <h3 className="RentabilidadesLoadingCard__title">{title}</h3>
          <LoaderIcon />
          <p className="RentabilidadesLoadingCard__description">
            {description}
          </p>
        </div>
      </article>
    </div>
  )
}
