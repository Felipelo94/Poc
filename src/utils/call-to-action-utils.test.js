import {
  VALID_TYPE_USER_URL,
  VALID_USER_CATEGORIES_URL
} from '../const/dictionary/general-const'
import {
  getLinkCTAFromPathPage,
  getLinkCallToActionFromPathPages,
  buildPathInfoUser,
  getLinkCallToAction,
  getPathInfoUserIfValidCategory,
  generateUrlSeo
} from './call-to-action-utils'
import { getCurrentHost } from './redirectUtil'

describe('Test for call to action utils', () => {
  test('getLinkCTAFromPathPage should return empty string when there are no pages', () => {
    const pathPages = []
    const pathURLInfoUser = ''
    const urlSeo = ''
    const path = getLinkCTAFromPathPage(pathPages, pathURLInfoUser, urlSeo)
    expect(path).toBe('')
  })

  test('getLinkCTAFromPathPage should return link when page includes urlProfiling and urlSeo', () => {
    const pathPages = ['persona/ahorro/mi-reserva']
    const pathURLInfoUser = 'persona/ahorro'
    const urlSeo = 'mi-reserva'
    const path = getLinkCTAFromPathPage(pathPages, pathURLInfoUser, urlSeo)
    expect(path).toBe(pathPages[0])
  })

  test('getLinkCTAFromPathPage should return empty string when parameters are undefined', () => {
    const path = getLinkCTAFromPathPage()
    expect(path).toBe('')
  })

  test('getLinkCallToActionFromPathPages should return initialLink when includes https', () => {
    const pathPages = []
    const initialLink = 'https://proteccion.com'
    const userInfoProfile = { typeUser: '', userCategory: '' }
    const userInfoContext = { type: '', category: '' }
    const path = getLinkCallToActionFromPathPages(
      pathPages,
      initialLink,
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(initialLink)
  })

  test('getLinkCallToActionFromPathPages should return empty string when parameters are undefined', () => {
    const path = getLinkCallToActionFromPathPages()
    expect(path).toBe('')
  })

  test('getLinkCallToActionFromPathPages should return link from info in context page', () => {
    const pathPages = ['persona/ahorro/mi-reserva']
    const initialLink = 'mi-reserva'
    const userInfoProfile = { typeUser: 1, userCategory: 'ahorro' }
    const userInfoContext = { type: '', category: '' }
    const path = getLinkCallToActionFromPathPages(
      pathPages,
      initialLink,
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(pathPages[0])
  })

  test('getLinkCallToActionFromPathPages should return link from info in profiling', () => {
    const pathPages = ['persona/ahorro/mi-reserva']
    const initialLink = 'mi-reserva'
    const userInfoProfile = { typeUser: '', userCategory: '' }
    const userInfoContext = { type: 1, category: 'Ahorro' }
    const path = getLinkCallToActionFromPathPages(
      pathPages,
      initialLink,
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(pathPages[0])
  })

  test('getLinkCallToActionFromPathPages should return default link', () => {
    const pathPages = [
      'persona/ahorro/mi-reserva',
      'persona/ahorro/ahorro-mi-reserva'
    ]
    const initialLink = 'mi-reserva'
    const userInfoProfile = { typeUser: '', userCategory: '' }
    const userInfoContext = { type: '', category: '' }
    const path = getLinkCallToActionFromPathPages(
      pathPages,
      initialLink,
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(pathPages[0])
  })

  test('buildPathInfoUser should return path with type and user category', () => {
    const typeUser = 1
    const userCategory = 'Ahorro'
    const path = buildPathInfoUser(typeUser, userCategory)
    expect(path).toBe(
      `${VALID_TYPE_USER_URL[typeUser]}/${
        VALID_USER_CATEGORIES_URL[userCategory.toLowerCase()]
      }`
    )
  })

  test('getPathInfoUserIfValidCategory should return path with type and user category when received user info', () => {
    const userInfoProfile = {
      typeUser: 1,
      userCategory: 'Ahorro'
    }
    const userInfoContext = {}
    const path = getPathInfoUserIfValidCategory(
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(
      buildPathInfoUser(userInfoProfile.typeUser, userInfoProfile.userCategory)
    )
  })

  test('getPathInfoUserIfValidCategory should return path with type and user category when received user info default', () => {
    const userInfoContext = {
      type: 1,
      category: 'Ahorro'
    }
    const userInfoProfile = {}
    const path = getPathInfoUserIfValidCategory(
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe(
      buildPathInfoUser(userInfoContext.type, userInfoContext.category)
    )
  })

  test('getPathInfoUserIfValidCategory should return empty string when userCategory parameter is empty', () => {
    const userInfoContext = {}
    const userInfoProfile = {}
    const path = getPathInfoUserIfValidCategory(
      userInfoProfile,
      userInfoContext
    )
    expect(path).toBe('')
  })

  test('getLinkCallToAction should return same link when includes https:', () => {
    const link = 'https://path.com/from/link'
    const newLink = getLinkCallToAction(link)
    expect(newLink).toBe(link)
  })

  test('getLinkCallToAction should return link with host when initialLink parameter is empty', () => {
    const link = undefined
    const newlink = getLinkCallToAction(link)
    expect(newlink).toBe(`${getCurrentHost()}/`)
  })

  test('getLinkCallToAction should return link with host and type and user category when initialLink parameter is path url', () => {
    const link = '/path/from/link/'
    const newLink = getLinkCallToAction(link)
    expect(newLink).toBe(`${getCurrentHost()}${link}`)
  })

  test('generateUrlSeo should return the url Seo generate', () => {
    const filteredPathPages = [
      'persona/ahorro/mi-reserva',
      'persona/ahorro/ahorro-mi-reserva'
    ]
    const pathInfoUserContext = ''
    const pathInfoUserProfiling = ''
    const initialLinkWithoutSlashes = 'mi-reserva'
    const newLink = generateUrlSeo(
      filteredPathPages,
      pathInfoUserContext,
      pathInfoUserProfiling,
      initialLinkWithoutSlashes
    )
    expect(newLink).toBe(filteredPathPages[0])
  })
})
