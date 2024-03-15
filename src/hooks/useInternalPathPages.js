import { graphql, useStaticQuery } from 'gatsby'

const useInternalPathPages = () => {
  const {
    pages: { nodes }
  } = useStaticQuery(graphql`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  return nodes.map(node => node.path)
}

export default useInternalPathPages
