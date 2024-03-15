import {
  PATH_URL_PROFILING,
  VALID_TYPE_USER_URL,
  VALID_USER_CATEGORIES_URL
} from '../const/dictionary/general-const'

export const setInitialSlashToString = (link = '') => {
  if (link.length) return link.charAt(0) === '/' ? link : `/${link}`
  return link
}

export const setEndSlashToString = (link = '') => {
  if (link.length)
    return link.charAt(link.length - 1) === '/' ? link : `${link}/`
  return link
}

export const getValidateTypeUser = typeUser => {
  return VALID_TYPE_USER_URL[typeUser] || ''
}

export const getValidateUserCategory = (userCategory = '') => {
  return VALID_USER_CATEGORIES_URL[userCategory.toLowerCase()] || ''
}

export const removeInitialSlash = (string = '') => {
  if (string.length && string.charAt(0) === '/') return string.substring(1)

  return string
}

export const removeEndSlash = (string = '') => {
  if (string.length && string.charAt(string.length - 1) === '/')
    return string.slice(0, -1)

  return string
}

export const removeInitialAndEndSlash = (string = '') => {
  return removeEndSlash(removeInitialSlash(string))
}

export const addPathUrlProfilingIfNeeds = (
  typeCustomer,
  category,
  urlSeo = ''
) => {
  if (!urlSeo) return ''

  const isLinkIncludesPath = getIsUrlSEOIncludesPathProfiling(urlSeo)

  if (!isLinkIncludesPath)
    return `${getValidateTypeUser(typeCustomer)}/${getValidateUserCategory(
      category
    )}/${urlSeo}`

  return urlSeo
}

export const getIsUrlSEOIncludesPathProfiling = (urlSeo = '') => {
  return PATH_URL_PROFILING.some(pathUrl => {
    return urlSeo?.includes(pathUrl.pathURL)
  })
}

export const removePathUrlProfiling = (urlSeo = '') => {
  if (!urlSeo) return ''

  const urlSeoWithoutSlash = removeInitialAndEndSlash(urlSeo)
  const isLinkIncludesPathProfiling = getIsUrlSEOIncludesPathProfiling(
    urlSeoWithoutSlash
  )

  if (isLinkIncludesPathProfiling) {
    let urlSeoWithoutPathProfiling = urlSeoWithoutSlash
    PATH_URL_PROFILING.forEach(pathUrl => {
      urlSeoWithoutPathProfiling = urlSeoWithoutPathProfiling.replace(
        pathUrl.pathURL,
        ''
      )
    })
    return removeInitialAndEndSlash(urlSeoWithoutPathProfiling)
  }

  return urlSeoWithoutSlash
}

export const camelize = str => {
  return str
    ?.replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
      return word.toUpperCase()
    })
    .replace(/\s+/g, '')
    .replace(/-/g, ' ')
}
