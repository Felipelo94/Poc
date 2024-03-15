import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const SEOComponent = ({
  description,
  lang,
  meta,
  keywords,
  image,
  title,
  data,
  pathname,
  script
}) => {
  let metaTitle = title || data?.site?.siteMetadata.title
  let metaDescription = description || data?.site?.siteMetadata.description
  let imageContent = image && `https:${image}`
  let metaImage = imageContent || data?.site?.siteMetadata.image
  let canonical = pathname && `${data?.site?.siteMetadata.siteUrl}${pathname}`
  let author = data?.site?.siteMetadata.author || '@proteccion'
  let metaScript = script

  // Organization Schema
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Proteccion',
    alternateName: author,
    url: 'www.proteccion.com',
    logo: data?.site?.siteMetadata.image,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '01 8000 52 8000',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'CO',
      availableLanguage: 'es'
    },
    sameAs: 'https://www.facebook.com/proteccion/'
  }

  // WebSite Schema
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'www.proteccion.com' + '#website',
    headline: 'Proteccion',
    name: 'Proteccion',
    description: data?.site?.siteMetadata.description,
    url: 'www.proteccion.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'www.proteccion.com' + '?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  let schemas = []
  if (metaScript) {
    schemas = [org, website, metaScript]
  } else {
    schemas = [org, website]
  }

  const schemaOrgJSONLD = {
    type: 'application/ld+json',
    innerHTML: JSON.stringify(schemas)
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={metaTitle}
        link={
          canonical
            ? [
                {
                  rel: 'canonical',
                  href: canonical
                }
              ]
            : []
        }
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            name: 'keywords',
            content: keywords
          },
          {
            property: `og:title`,
            content: metaTitle
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:creator`,
            content: author
          },
          {
            name: `twitter:title`,
            content: metaTitle
          },
          {
            name: `twitter:description`,
            content: metaDescription
          },
          {
            name: `twitter:site`,
            content: author
          },
          {
            property: 'og:image',
            content: metaImage
          },
          {
            property: `og:image:width`,
            content: 100
          },
          {
            property: `og:image:height`,
            content: 100
          },
          {
            property: 'og:image:alt',
            content: metaDescription
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            name: 'twitter:image',
            content: metaImage
          },
          {
            name: 'twitter:image:alt',
            content: metaDescription
          },
          {
            property: `og:url`,
            content: canonical
          },
          {
            property: 'image',
            content: metaImage
          }
        ].concat(meta)}
        script={[schemaOrgJSONLD]}
      />
    </>
  )
}

SEOComponent.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  image: null
}
SEOComponent.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }),
  pathname: PropTypes.string
}

export const SEO = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  return <SEOComponent {...props} data={data} />
}

export default SEO
