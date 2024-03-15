import {
  HEADINGS_CONTENT_SOLUTIONS_BY_ID_OF_INTERNALS,
  ID_DEFAULT,
  MAP_URL_PRODUCT_LEAD_SOURCE,
  PRODUCT_LEAD_SOURCE_VALUE_DEFAULT
} from '../const/dictionary/content-solutions-const'

export const getHeadingsContentSolutionById = (id = '') => {
  if (HEADINGS_CONTENT_SOLUTIONS_BY_ID_OF_INTERNALS[id])
    return HEADINGS_CONTENT_SOLUTIONS_BY_ID_OF_INTERNALS[id]
  return HEADINGS_CONTENT_SOLUTIONS_BY_ID_OF_INTERNALS[ID_DEFAULT]
}

export const returnProductLeadSource = (urlPathNameProductCurrent = '') => {
  const productLeadSource = MAP_URL_PRODUCT_LEAD_SOURCE.find(p =>
    urlPathNameProductCurrent.includes(p.url)
  )

  return productLeadSource || PRODUCT_LEAD_SOURCE_VALUE_DEFAULT
}
