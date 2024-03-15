import {
  getValidateTypeUser,
  getValidateUserCategory,
  removeInitialAndEndSlash,
  setEndSlashToString
} from './general-utils'
import { getCurrentHost } from './redirectUtil'

export const buildPathInfoUser = (typeUser, userCategory) => {
  return `${getValidateTypeUser(typeUser)}/${getValidateUserCategory(
    userCategory
  )}`
}

export const getPathInfoUserIfValidCategory = (
  userInfoProfile,
  userInfoContext
) => {
  if (userInfoProfile.typeUser && userInfoProfile.userCategory)
    return buildPathInfoUser(
      userInfoProfile.typeUser,
      userInfoProfile.userCategory
    )
  if (userInfoContext.type && userInfoContext.category)
    return buildPathInfoUser(userInfoContext.type, userInfoContext.category)
  return ''
}

export const getLinkCallToAction = (initialLink = '') => {
  if (initialLink.includes('https:')) return initialLink

  return `${setEndSlashToString(getCurrentHost())}${setEndSlashToString(
    removeInitialAndEndSlash(initialLink)
  )}`
}

export const getPathInfoUserIfValidTypeCustomerAndUserCategory = (
  typeCustomer,
  userCategory
) => {
  if (typeCustomer && userCategory)
    return buildPathInfoUser(typeCustomer, userCategory)
  return ''
}

export const getLinkCTAFromPathPage = (
  pathPages = [],
  pathURLInfoUser = '',
  urlSeo = ''
) => {
  const pathPageInfoUser = `${pathURLInfoUser}/${urlSeo}`

  const filteredPathPagesInfoUser = pathPages.filter(
    path =>
      removeInitialAndEndSlash(path) ===
      removeInitialAndEndSlash(pathPageInfoUser)
  )

  return filteredPathPagesInfoUser?.[0] || ''
}

export const generateUrlSeo = (
  filteredPathPages,
  pathInfoUserContext,
  pathInfoUserProfiling,
  initialLinkWithoutSlashes
) => {
  return (
    getLinkCTAFromPathPage(
      filteredPathPages,
      pathInfoUserContext,
      initialLinkWithoutSlashes
    ) ||
    getLinkCTAFromPathPage(
      filteredPathPages,
      pathInfoUserProfiling,
      initialLinkWithoutSlashes
    ) ||
    filteredPathPages[0]
  )
}

export const getLinkCallToActionFromPathPages = (
  pathPages = [],
  initialLink = '',
  userInfoProfile = { typeUser: '', userCategory: '' },
  userInfoContext = { type: '', category: '' }
) => {
  if (initialLink.includes('https:')) return initialLink

  const initialLinkWithoutSlashes = removeInitialAndEndSlash(initialLink)
  const filteredPathPages = pathPages.filter(path =>
    path.includes(initialLinkWithoutSlashes)
  )

  if (filteredPathPages?.length) {
    const pathInfoUserContext = getPathInfoUserIfValidTypeCustomerAndUserCategory(
      userInfoProfile.typeUser,
      userInfoProfile.userCategory
    )
    const pathInfoUserProfiling = getPathInfoUserIfValidTypeCustomerAndUserCategory(
      userInfoContext.type,
      userInfoContext.category
    )

    const linkCTA = generateUrlSeo(
      filteredPathPages,
      pathInfoUserContext,
      pathInfoUserProfiling,
      initialLinkWithoutSlashes
    )

    return linkCTA
  }

  return initialLink
}
