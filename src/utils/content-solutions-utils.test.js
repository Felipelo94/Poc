import {
  MAP_URL_PRODUCT_LEAD_SOURCE,
  PRODUCT_LEAD_SOURCE_VALUE_DEFAULT
} from '../const/dictionary/content-solutions-const'
import {
  getHeadingsContentSolutionById,
  returnProductLeadSource
} from './content-solutions-utils'

describe('Test for content solution utils', () => {
  test('getHeadingsContentSolutionById should return default headings when id is undefined', () => {
    const headings = getHeadingsContentSolutionById()
    expect(headings.title).toBe('¿Qué es?')
    expect(headings.subtitle).toBe('¿Cómo funciona?')
  })
  test('getHeadingsContentSolutionById should return default headings when id is invalid', () => {
    const id = ''
    const headings = getHeadingsContentSolutionById(id)
    expect(headings.title).toBe('¿Qué es?')
    expect(headings.subtitle).toBe('¿Cómo funciona?')
  })
  test('getHeadingsContentSolutionById should return headings when id is valid', () => {
    const id = 'diAO4gGvAPHX6YiphzAH8'
    const headings = getHeadingsContentSolutionById(id)
    expect(headings.title).toBe('¿De qué color imaginas tu futuro?')
    expect(headings.subtitle).toBe('¡Empieza a vivir tu futuro desde HOY!')
  })
  test('returnProductLeadSource should return default productLeadSource when urlPathNameProductCurrent is undefined', () => {
    const productLeadSource = returnProductLeadSource()
    expect(productLeadSource.text).toBe(PRODUCT_LEAD_SOURCE_VALUE_DEFAULT.text)
    expect(productLeadSource.value).toBe(
      PRODUCT_LEAD_SOURCE_VALUE_DEFAULT.value
    )
  })
  test('returnProductLeadSource should return default productLeadSource when urlPathNameProductCurrent is invalid', () => {
    const urlPathNameProductCurrent = ''
    const productLeadSource = returnProductLeadSource(urlPathNameProductCurrent)
    expect(productLeadSource.text).toBe(PRODUCT_LEAD_SOURCE_VALUE_DEFAULT.text)
    expect(productLeadSource.value).toBe(
      PRODUCT_LEAD_SOURCE_VALUE_DEFAULT.value
    )
  })
  test('returnProductLeadSource should return productLeadSource when urlPathNameProductCurrent is valid', () => {
    const urlPathNameProductCurrent = MAP_URL_PRODUCT_LEAD_SOURCE[1].url
    const productLeadSource = returnProductLeadSource(urlPathNameProductCurrent)
    expect(productLeadSource.text).toBe(MAP_URL_PRODUCT_LEAD_SOURCE[1].text)
    expect(productLeadSource.value).toBe(MAP_URL_PRODUCT_LEAD_SOURCE[1].value)
  })
})
