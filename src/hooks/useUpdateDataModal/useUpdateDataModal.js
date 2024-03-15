import { graphql, useStaticQuery } from 'gatsby'

const useUpdateDataModal = isForCompanies => {
  const information = useStaticQuery(graphql`
    query InformationByCategoryAndClientType {
      allContentfulInformacionComplementaria(
        filter: { Categoria: { Categoria: { eq: "Actualización de Datos" } } }
      ) {
        edges {
          node {
            titulo
            tituloInferior
            InformacionRelevante
            TextoCallToActionPrincipal
            LinkCallToActionPrincipal
            TextoCallToActionSecundario
            LinkCallToActionSecundario
            IconoTitulo {
              description
              file {
                url
              }
            }
            imagen {
              description
              file {
                url
              }
            }
            contenido {
              json
            }
            tipoDeCliente {
              contentful_id
            }
          }
        }
      }
    }
  `)

  const customerTypeId = isForCompanies
    ? '7IF4VrReibXT0Vb13iX3rd'
    : '3XCf8zuzh5bGWNcuvFBuwx'

  const filteredInformation = information.allContentfulInformacionComplementaria.edges.filter(
    option => {
      return option.node.tipoDeCliente[0].contentful_id === customerTypeId
    }
  )

  const {
    titulo: title,
    tituloInferior: subtitle,
    InformacionRelevante: relevantInfo,
    TextoCallToActionPrincipal: firstCallToActionText,
    LinkCallToActionPrincipal: firstCallToActionUrl,
    TextoCallToActionSecundario: secondCallToActionText,
    LinkCallToActionSecundario: secondCallToActionUrl,
    IconoTitulo: icon,
    imagen: image,
    contenido: { json: content }
  } = filteredInformation[0].node

  return {
    title,
    subtitle,
    relevantInfo,
    firstCallToActionText,
    firstCallToActionUrl,
    secondCallToActionText,
    secondCallToActionUrl,
    icon,
    image,
    content
  }
}

export default useUpdateDataModal
