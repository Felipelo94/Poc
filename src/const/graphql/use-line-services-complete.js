import { useStaticQuery, graphql } from 'gatsby'
import { fuctionUrlRepeat } from '../../utils/url-repeat'

export const useLineServiceComplete = perfil => {
  const PreHomeQuery = useStaticQuery(graphql`
    query PreHomeQuery {
      allContentfulActualidadDeInversiones(
        filter: { contentful_id: { eq: "2iSc262lfCDuc5XCafkl7K" } }
      ) {
        edges {
          node {
            titulo
            contentful_id
            urlSeo
            updatedAt
            tipoDeCliente {
              nombre
              contentful_id
            }
            categoriaCliente {
              descripcion
              contentful_id
            }
            lineaDeProducto {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
            Tema {
              contentful_id
              tituloCorto
              titulo
              lineaDeProducto {
                nombre
                textoIntroductorioBite
                tituloAgrupadorContenidos
              }
            }
            contenidoCorporativo {
              titulo
              TituloCortoBite
              TextoCallToActionBite
              TextoIntroductorioBite
              Relevancia
              CuerpoContenido {
                json
              }
              descripcionCallToAction {
                descripcionCallToAction
              }
              linkCallToAction {
                linkCallToAction
              }
            }
            imagen {
              file {
                url
                fileName
              }
              fluid {
                src
              }
            }
            descripcion {
              id
              descripcion
            }
          }
        }
      }
      allContentfulCampana {
        edges {
          node {
            lineadenegocio {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              tituloCorto
              descripcioncorta
              updatedAt
              edadygenero
              tipoDeCliente {
                contentful_id
                nombre
              }
              categoriaCliente {
                descripcion
                contentful_id
              }
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                description
                title
              }
              textoIntroductorio
              textoCallToAction
              urlSeo
              urlEspecial
              contentful_id
              textoCallToActionBite
              linkCallToActionBite
              relevancia
            }
          }
        }
      }
      allContentfulNovedad {
        edges {
          node {
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              tituloCorto
              descripcioncorta
              edadygenero
              categoriaCliente {
                descripcion
                contentful_id
              }
              textoIntroductorio
              textoCallToAction
              urlSeo
              urlEspecial
              tipoDeCliente {
                contentful_id
                nombre
              }
              contentful_id
              updatedAt
              textoCallToActionBite
              linkCallToActionBite
              relevancia
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                description
                title
              }
            }
            lineadenegocio {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulBeneficio {
        edges {
          node {
            lineadenegocio {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              urlSeo
              urlEspecial
              edadygenero
              contentful_id
              relevancia
              categoriaCliente {
                descripcion
                contentful_id
              }
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                description
                title
              }
              tituloCorto
              updatedAt
              textoCallToActionBite
              linkCallToActionBite
              textoIntroductorio
              textoCallToAction
              tipoDeCliente {
                contentful_id
                nombre
              }
              descripcioncorta
            }
          }
        }
      }
      allContentfulProducto {
        edges {
          node {
            categoriaProducto
            titulo
            createdAt
            contentful_id
            lineadenegocio {
              contentful_id
              nombre
              tituloAgrupadorContenidos
            }
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              categoriaCliente {
                descripcion
                contentful_id
              }
              edadygenero
              textoIntroductorio
              textoCallToAction
              descripcioncorta
              tituloCorto
              relevancia
              textoCallToActionBite
              linkCallToActionBite
              updatedAt
              urlSeo
              urlEspecial
              contentful_id
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              tipoDeCliente {
                contentful_id
                nombre
              }
            }
          }
        }
      }
      allContentfulInformes {
        edges {
          node {
            titulo
            updatedAt
            textoIntroductorioBite
            contentful_id
            tipoDeInforme
            linkCallToActionInformes {
              linkCallToActionInformes
            }
            contenido {
              Tema {
                contentful_id
                tituloCorto
              }
              edadygenero
              tituloCorto
              linkCallToAction
              textoCallToActionBite
              linkCallToActionBite
              textoIntroductorio
              contentful_id
              urlSeo
              relevancia
              descripcioncorta
              updatedAt
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              categoriaCliente {
                descripcion
                contentful_id
              }
              tipoDeCliente {
                contentful_id
                nombre
              }
            }
            lineaDeProducto {
              nombre
              contentful_id
            }
          }
        }
      }
      allContentfulContenidoEducativo(
        filter: { contentful_id: { nin: ["oZT8423OQSaYbaqpqG0jT"] } }
      ) {
        edges {
          node {
            titulo
            contentful_id
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              tituloCorto
              textoCallToActionBite
              linkCallToActionBite
              textoIntroductorio
              textoCallToAction
              urlSeo
              urlEspecial
              edadygenero
              contentful_id
              updatedAt
              relevancia
              descripcioncorta
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              categoriaCliente {
                descripcion
                contentful_id
              }
              tipoDeCliente {
                contentful_id
                nombre
              }
            }
            lineaDeProducto {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulLineaDeNegocio {
        edges {
          node {
            nombre
            textoIntroductorioBite
            tituloAgrupadorContenidos
          }
        }
      }
      allContentfulTema {
        edges {
          node {
            tituloCorto
            titulo
            contentful_id
            lineaDeProducto {
              nombre
              contentful_id
              tituloAgrupadorContenidos
            }
            tipoDeCliente {
              nombre
              contentful_id
            }
          }
        }
      }
      allContentfulPodcast(
        filter: {
          lineaDeProducto: { elemMatch: { nombre: { eq: "Inversión" } } }
        }
      ) {
        edges {
          node {
            titulo
            OrigenDeAudio
            linkPodcast {
              linkPodcast
            }
            descripcion
            updatedAt
          }
        }
      }
      allContentfulOfertaDiferencial(
        filter: {
          contentful_id: {
            nin: ["f3FzEv4SNUIPhptdomqH9", "1ktPl3569zacd8eNYQOg6g"]
          }
        }
      ) {
        edges {
          node {
            contentful_id
            titulo
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              textoCallToActionBite
              linkCallToActionBite
              tituloCorto
              textoCallToAction
              textoIntroductorio
              edadygenero
              urlSeo
              urlEspecial
              updatedAt
              contentful_id
              descripcioncorta
              relevancia
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                title
                description
              }
              categoriaCliente {
                contentful_id
                descripcion
              }
              tipoDeCliente {
                nombre
                contentful_id
              }
            }
            lineaDeProducto {
              contentful_id
              nombre
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulOfertaComplementaria {
        edges {
          node {
            contentful_id
            titulo
            contenido {
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              textoCallToActionBite
              linkCallToActionBite
              tituloCorto
              textoCallToAction
              textoIntroductorio
              edadygenero
              urlSeo
              urlEspecial
              updatedAt
              contentful_id
              descripcioncorta
              relevancia
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                title
                description
              }
              categoriaCliente {
                contentful_id
                descripcion
              }
              tipoDeCliente {
                nombre
                contentful_id
              }
            }
            lineaDeProducto {
              contentful_id
              nombre
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulTipoDeCliente {
        edges {
          node {
            contentful_id
            nombre
          }
        }
      }
      allContentfulCategoriaCliente {
        edges {
          node {
            contentful_id
            descripcion
          }
        }
      }
      allContentfulLineaDeNegocio {
        edges {
          node {
            contentful_id
            nombre
            tituloAgrupadorContenidos
          }
        }
      }
      allContentfulProducto {
        edges {
          node {
            contentful_id
            titulo
            categoriaProducto
            lineadenegocio {
              ... on ContentfulLineaDeNegocio {
                contentful_id
                nombre
              }
            }
          }
        }
      }
      allContentfulAlternativaCerrada(
        filter: { contentful_id: { nin: ["776EkpJ13FzM8DZQXp3SnI"] } }
      ) {
        edges {
          node {
            contentful_id
            createdAt
            urlSeo {
              urlSeo
            }
          }
        }
      }
      allContentfulLeyesYDecretos {
        edges {
          node {
            contentful_id
            contenido {
              contentful_id
              urlSeo
              urlEspecial
              metatittleSeo
              keywordsSeo {
                keywordsSeo
              }
              metadescripcionSeo {
                metadescripcionSeo
              }
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                title
                description
              }
              textoCallToActionBite
              linkCallToActionBite
              tituloCorto
              edadygenero
              textoIntroductorio
              descripcioncorta
              updatedAt
              relevancia
              tipoDeCliente {
                nombre
                contentful_id
              }
            }
            lineaDeProducto {
              contentful_id
              nombre
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulCorporativoYAccionistas(
        filter: { contentful_id: { nin: ["3pdMLevQJQ85Fdt0IoIR4p"] } }
      ) {
        edges {
          node {
            contentful_id
            contenido {
              urlSeo
              urlEspecial
              contentful_id
              keywordsSeo {
                keywordsSeo
              }
              metatittleSeo
              metadescripcionSeo {
                metadescripcionSeo
              }
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                fluid {
                  src
                }
                file {
                  fileName
                  url
                }
                title
                description
              }
              textoCallToActionBite
              linkCallToActionBite
              tituloCorto
              edadygenero
              textoIntroductorio
              descripcioncorta
              updatedAt
              relevancia
              tipoDeCliente {
                nombre
                contentful_id
              }
            }
            lineaDeProducto {
              contentful_id
              nombre
              tituloAgrupadorContenidos
            }
          }
        }
      }
      allContentfulContenidoHome {
        edges {
          node {
            tituloContenidosRelevanciaAlta
            tituloContenidosRelevanciaBaja
            tituloContenidosRelevanciaMedia
            tituloInternaCategorias
            tituloPrincipal
            descripcionContenidosRelevanciaBaja
            descripcionInternaCategorias
            contenidosRelevanciaAlta {
              urlSeo
              titulo
              contentful_id
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              tituloCorto
              metatittleSeo
              keywordsSeo {
                keywordsSeo
              }
              metadescripcionSeo {
                metadescripcionSeo
              }
              tipoDeCliente {
                nombre
              }
              textoIntroductorio
              textoCallToAction
              textoCallToActionBite
              linkCallToAction
              linkCallToActionBite
              tiempoDeLectura
              descripcioncorta
              urlEspecial
            }
            contenidosRelevanciaAltaEmpresas {
              urlSeo
              titulo
              contentful_id
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              tituloCorto
              metatittleSeo
              keywordsSeo {
                keywordsSeo
              }
              metadescripcionSeo {
                metadescripcionSeo
              }
              tipoDeCliente {
                nombre
              }
              textoIntroductorio
              textoCallToAction
              textoCallToActionBite
              linkCallToAction
              linkCallToActionBite
              tiempoDeLectura
              descripcioncorta
              urlEspecial
            }
            contenidosRelevanciaMedia {
              urlSeo
              titulo
              contentful_id
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              tituloCorto
              metatittleSeo
              keywordsSeo {
                keywordsSeo
              }
              metadescripcionSeo {
                metadescripcionSeo
              }
              tipoDeCliente {
                nombre
              }
              textoIntroductorio
              textoCallToAction
              textoCallToActionBite
              linkCallToAction
              linkCallToActionBite
              tiempoDeLectura
              descripcioncorta
              urlEspecial
            }
            contenidosRelevanciaMediaEmpresas {
              urlSeo
              titulo
              contentful_id
              Tema {
                contentful_id
                tituloCorto
                titulo
                lineaDeProducto {
                  nombre
                  textoIntroductorioBite
                  tituloAgrupadorContenidos
                }
              }
              imagenpequena {
                file {
                  fileName
                  url
                }
                fluid {
                  src
                }
                description
                title
              }
              tituloCorto
              metatittleSeo
              keywordsSeo {
                keywordsSeo
              }
              metadescripcionSeo {
                metadescripcionSeo
              }
              tipoDeCliente {
                nombre
              }
              textoIntroductorio
              textoCallToAction
              textoCallToActionBite
              linkCallToAction
              linkCallToActionBite
              tiempoDeLectura
              descripcioncorta
              urlEspecial
            }
            enlacesDeInteres {
              titulo
              LinkCallToAction {
                LinkCallToAction
              }
              imagen {
                title
                description
                file {
                  url
                  fileName
                }
              }
              tipoDeCliente {
                nombre
              }
              imagenHover {
                title
                description
                file {
                  url
                  fileName
                }
              }
            }
            enlacesDeInteresEmpresas {
              titulo
              LinkCallToAction {
                LinkCallToAction
              }
              imagen {
                title
                description
                file {
                  url
                  fileName
                }
              }
              tipoDeCliente {
                nombre
              }
              imagenHover {
                title
                description
                file {
                  url
                  fileName
                }
              }
            }
            contenidosDestacados {
              tipoDeCliente {
                nombre
                contentful_id
              }
              titulo
              descripcion {
                descripcion
              }
              textoCallToAction1
              linkCallToAction1
              imagenPrincipal {
                title
                description
                file {
                  url
                  fileName
                }
              }
              imagenFondoPrincipal {
                title
                description
                file {
                  url
                  fileName
                }
              }
            }
            contenidosDestacadosEmpresas {
              tipoDeCliente {
                nombre
                contentful_id
              }
              titulo
              descripcion {
                descripcion
              }
              textoCallToAction1
              linkCallToAction1
              imagenPrincipal {
                title
                description
                file {
                  url
                  fileName
                }
              }
              imagenFondoPrincipal {
                title
                description
                file {
                  url
                  fileName
                }
              }
            }
          }
        }
      }
    }
  `)

  fuctionUrlRepeat(PreHomeQuery, perfil)

  return PreHomeQuery
}
