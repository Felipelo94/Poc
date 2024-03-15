import { useStaticQuery, graphql } from 'gatsby'

export const useLineServiceMenu = () => {
  const dataContentful = useStaticQuery(
    graphql`
    query PreMenuQuery {
      allContentfulMenuContenidos {
        edges {
          node {
            titulo
            categoriasMenu {
              tituloCategoria
              subtituloCategoria
              iconoEscritorioCategoria {
                file {
                  fileName
                  url
                }
              }
              iconoMobileCategoria {
                file {
                  fileName
                  url
                }
              }
              imagenCategoria {
                file {
                  url
                  fileName
                }
              }
              subcategoriasMenu {
                tituloSubcategoria
                opcionesMenu {
                  titulo
                  linkCallToAction
                }
              }
              opcionesMenu {
                titulo
                linkCallToAction
              }
            }
            opcionesMenu {
              titulo
              linkCallToAction
            }
          }
        }
      }
    }
    
    `
  )
  return dataContentful
}
