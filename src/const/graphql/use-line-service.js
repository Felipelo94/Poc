import { useStaticQuery, graphql } from 'gatsby'

export const useLineService = () => {
  const dataContentful = useStaticQuery(
    graphql`
      query LineasServicio {
        allContentfulCanal(
          filter: { contentful_id: { eq: "2vn2SgPCl0kmJMiXjTU58N" } }
        ) {
          edges {
            node {
              descripcion {
                descripcion
              }
              nombre
            }
          }
        }
      }
    `
  )
  return dataContentful
}
