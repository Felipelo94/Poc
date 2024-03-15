import {
  VALID_TYPE_USER_URL,
  VALID_USER_CATEGORIES_URL
} from '../const/dictionary/general-const'
import {
  addPathUrlProfilingIfNeeds,
  getValidateTypeUser,
  getValidateUserCategory,
  setEndSlashToString,
  setInitialSlashToString
} from './general-utils'

describe('Test for general utils', () => {
  test('setEndSlashToString should return string with end slash', () => {
    const link = '/path/from/link'
    const string = setEndSlashToString(link)
    expect(string).toBe(`${link}/`)
  })

  test('setEndSlashToString should return empty string when string parameter is empty', () => {
    const string = setEndSlashToString()
    expect(string).toBe('')
  })

  test('setEndSlashToString should return same string when includes end slash', () => {
    const link = '/path/from/link/'
    const string = setEndSlashToString(link)
    expect(string).toBe(link)
  })

  test('setInitialSlashToString should return string with initial slash', () => {
    const link = 'path/from/link'
    const string = setInitialSlashToString(link)
    expect(string).toBe(`/${link}`)
  })

  test('setInitialSlashToString should return empty string when string parameter is empty', () => {
    const string = setInitialSlashToString()
    expect(string).toBe('')
  })

  test('setInitialSlashToString should return same string when includes initial slash', () => {
    const link = '/path/from/link/'
    const string = setInitialSlashToString(link)
    expect(string).toBe(link)
  })
  test('getValidateTypeUser should return a valid type user', () => {
    const payload = 1
    const validUserCategory = getValidateTypeUser(payload)
    expect(validUserCategory).toEqual(VALID_TYPE_USER_URL[1])
  })

  test('getValidateTypeUser should return a empty string when typeUser is invalid', () => {
    const payload = 3
    const invalidUserCategory = getValidateTypeUser(payload)
    expect(invalidUserCategory).toEqual('')
  })

  test('getValidateUserCategory should return a valid category', () => {
    const payload = 'Ahorro'
    const validUserCategory = getValidateUserCategory(payload)
    expect(validUserCategory).toEqual(VALID_USER_CATEGORIES_URL.ahorro)
  })

  test('getValidateUserCategory should return a pensión category', () => {
    const payload = 'Pensión'
    const validUserCategory = getValidateUserCategory(payload)
    expect(validUserCategory).toEqual(VALID_USER_CATEGORIES_URL.pensión)
  })

  test('getValidateUserCategory should return a empty string when userCategory is invalid', () => {
    const payload = 'invalidUserCategory'
    const invalidUserCategory = getValidateUserCategory(payload)
    expect(invalidUserCategory).toEqual('')
  })

  test('getValidateUserCategory should return a empty string when userCategory is undefined', () => {
    const invalidUserCategory = getValidateUserCategory()
    expect(invalidUserCategory).toEqual('')
  })

  test('addPathUrlProfilingIfNeeds should return urlSeo with path url profiling', () => {
    const typeCustomer = 1
    const category = 'Ahorro'
    const urlSeo = 'url-seo'
    const finalUrlSeo = addPathUrlProfilingIfNeeds(
      typeCustomer,
      category,
      urlSeo
    )
    expect(finalUrlSeo).toEqual(
      `${getValidateTypeUser(typeCustomer)}/${getValidateUserCategory(
        category
      )}/${urlSeo}`
    )
  })

  test('addPathUrlProfilingIfNeeds should return urlSeo without path url profiling when includes it', () => {
    const typeCustomer = 1
    const category = 'Ahorro'
    const urlSeo = 'persona/ahorro/url-seo'
    const finalUrlSeo = addPathUrlProfilingIfNeeds(
      typeCustomer,
      category,
      urlSeo
    )
    expect(finalUrlSeo).toEqual(`${urlSeo}`)
  })

  test('addPathUrlProfilingIfNeeds should return empty urlSeo when urlSeo is undefined', () => {
    const typeCustomer = 1
    const category = 'Ahorro'
    const finalUrlSeo = addPathUrlProfilingIfNeeds(typeCustomer, category)
    expect(finalUrlSeo).toEqual('')
  })
})
