import { getCurrentHost } from './redirectUtil'

export const getIdDiv = titleChanged => {
  return titleChanged
    ? titleChanged
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    : ''
}

const getUrlByUserInformation = (userTypeId, userCategory) => {
  const userType = userTypeId
    ? userTypeId === 1
      ? 'personas'
      : 'empresas'
    : null
  const category = getIdDiv(userCategory)

  return `${getCurrentHost()}/${userType}/${category}/`
}

export const redirectBreadCrumb = (words, userType, userCategory) => {
  const businessLines = ['inversion', 'ahorro', 'cesantias', 'pension']
  const lineWordIndex = words?.findIndex(word => businessLines.includes(word))

  return words?.map((word, index) => ({
    word,
    url:
      lineWordIndex === index && getUrlByUserInformation(userType, userCategory)
  }))
}
