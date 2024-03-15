import { graphql } from 'gatsby'
import React from 'react'
import { connect } from 'react-redux'
import { CONTENTFUL_ID_INTERNALS_LEYES_DECRETOS } from '../../const/dictionary/internal-leyes-decretos-const'
import Page404 from './../../pages/404'
import './internal-leyes-y-decretos.scss'
import PortafoliosInversion from './portafolios-inversion'
import FondoVoluntariosPension from './fondo-voluntarios-pension'
import useSetTypeUserAndCategoryState from './../../hooks/useSetTypeUserAndCategoryState'
import LeyTransparencia from '../../components/internal-pages/leyes-y-decretos/ley-transparencia'

let InternalLeyesYDecretos = ({
  data,
  pageContext,
  dispatch,
  location,
  accessibility
}) => {
  useSetTypeUserAndCategoryState(
    pageContext?.typeCustomer,
    pageContext?.category
  )

  switch (pageContext.id) {
    case CONTENTFUL_ID_INTERNALS_LEYES_DECRETOS.FONDOS_VOLUNTARIOS_PENSION:
      return (
        <FondoVoluntariosPension
          data={data}
          pageContext={pageContext}
          dispatch={dispatch}
          location={location}
          accessibility={accessibility}
        />
      )
    case CONTENTFUL_ID_INTERNALS_LEYES_DECRETOS.LEY_TRANSPARENCIA:
      return (
        <LeyTransparencia
          dataPage={data}
          pageContext={pageContext}
          dispatch={dispatch}
          location={location}
          accessibility={accessibility}
        />
      )
    case CONTENTFUL_ID_INTERNALS_LEYES_DECRETOS.PORTAFOLIOS_INVERSION:
      return (
        <PortafoliosInversion
          dataPage={data}
          pageContext={pageContext}
          dispatch={dispatch}
          location={location}
          accessibility={accessibility}
        />
      )
    default:
      return <Page404 />
  }
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility
  }
}

InternalLeyesYDecretos = connect(mapStateToProps)(InternalLeyesYDecretos)
export default InternalLeyesYDecretos

export const pageQuery = graphql`
  query PageContentBySlugLeyesYDecretos($entityId: String) {
    allContentfulLeyesYDecretos(filter: { contentful_id: { eq: $entityId } }) {
      edges {
        node {
          contentful_id
          titulo {
            titulo
          }
          contenido {
            LinkCallToActionSuperior
            TextoCallToActionSuperior
            contentful_id
            cuerpocontenido {
              json
            }
            cuerpocontenido2 {
              json
            }
            imagenes {
              file {
                fileName
                url
              }
              fluid {
                src
              }
              title
              description
            }
            urlSeo
            titulo
            listadoVideos
            descripcioncorta
            metatittleSeo
            keywordsSeo {
              keywordsSeo
            }
            metadescripcionSeo {
              metadescripcionSeo
            }
          }
        }
      }
    }
  }
`
