import { getSubcategoryPensionFromBiteOne } from './categories-internal-content-page-utils'

describe('Tests for categories internal content page utils', () => {
  let infoBite

  beforeEach(() => {
    infoBite = {
      subcategoria: [{ contentful_id: '' }]
    }
  })

  test("getSubcategoryPensionFromBiteOne should return 'pension-invalidez' when contentful_id is 7lDDi92WQvINHDoyppiGG1", () => {
    infoBite.subcategoria[0].contentful_id = '7lDDi92WQvINHDoyppiGG1'
    const subcategory = getSubcategoryPensionFromBiteOne(infoBite)
    expect(subcategory).toBe('pension-invalidez')
  })

  test("getSubcategoryPensionFromBiteOne should return 'pension-vejez' when no args", () => {
    const subcategory = getSubcategoryPensionFromBiteOne()
    expect(subcategory).toBe('pension-vejez')
  })
})
