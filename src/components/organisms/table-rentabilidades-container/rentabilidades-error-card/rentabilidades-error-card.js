import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ReactComponent as ErrorAlertIcon } from '../../../../assets/images/icons/alert-circle-error.svg'
import './rentabilidades-error-card.scss'

export function RentabilidadesErrorCard({ error }) {
  const {
    title: {
      cuerpo: { cuerpo: title }
    },
    description: {
      cuerpo: { cuerpo: description }
    }
  } = useStaticQuery(graphql`
    query RentabilidadesErrorQuery {
      title: contentfulMensajeServicio(
        contentful_id: { eq: "dt3JYxb9rqNfiq4ZgGxeb" }
      ) {
        cuerpo {
          cuerpo
        }
      }

      description: contentfulMensajeServicio(
        contentful_id: { eq: "fUTWo7uz3B8FMw7NyEEj2" }
      ) {
        cuerpo {
          cuerpo
        }
      }
    }
  `)

  return (
    <div className="container-internal-content-componente-header">
      <article className="RentabilidadesErrorCard">
        <div className="RentabilidadesErrorCard__card">
          <div className="RentabilidadesErrorCard__alertIcon">
            <ErrorAlertIcon
              style={{ fontSize: 80 }}
              className="RentabilidadesErrorCard__icon"
            />
          </div>
          <h3 className="RentabilidadesErrorCard__title">{title}</h3>
          <p className="RentabilidadesErrorCard__description">
            {description} {error?.code ? `(${error.code})` : null}
          </p>
          <div className="RentabilidadesErrorCard__backgroundIcon">
            <ErrorAlertIcon
              style={{ fontSize: 256 }}
              className="RentabilidadesErrorCard__icon"
            />
          </div>
        </div>
      </article>
    </div>
  )
}
