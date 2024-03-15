import { getIsAllowedCategoryGA } from './classGtmUtil'

describe('Test for getIsAllowedCategoryGA function', () => {
  test('should return false when category is an empty string', () => {
    const category = ''
    const isAllowedCategoryGA = getIsAllowedCategoryGA(category)
    expect(isAllowedCategoryGA).toBeFalsy()
  })
  test('should return false when category is undefined', () => {
    const isAllowedCategoryGA = getIsAllowedCategoryGA()
    expect(isAllowedCategoryGA).toBeFalsy()
  })
  test('should return true when category is valid', () => {
    const category = 'Ahorro'
    const isAllowedCategoryGA = getIsAllowedCategoryGA(category)
    expect(isAllowedCategoryGA).toBeTruthy()
  })
})
