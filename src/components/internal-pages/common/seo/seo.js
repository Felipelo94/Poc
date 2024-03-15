import PropTypes from 'prop-types'
import React from 'react'
import SEO from '../../../molecules/seo/seo'

const Seo = ({ pageContext = {} }) => {
  return (
    <div>
      <SEO
        title={pageContext.metatittleSeo || ''}
        description={pageContext.metadescripcionSeo || ''}
        meta={pageContext.keywordsSeo || ''}
        image={pageContext.metaimagenseo || ''}
      />
    </div>
  )
}

Seo.propTypes = {
  pageContext: PropTypes.object
}

export default Seo
