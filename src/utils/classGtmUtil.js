import ReactGA from 'react-ga'
import mapCategories from '../const/dictionary/map-categories'

const TYPE_PERSON = 'Persona'
const TYPE_COMPANY = 'Empresa'
const ALLOWED_CATEGORY_GA = [
  'Home',
  'Cesantias',
  'Ahorro',
  'Pension',
  'Inversion',
  'Cuentanos',
  'Canales',
  'InformacionNoDisponible',
  'PreguntasFrecuentes',
  'LandingOfertas',
  'LandingDecretos'
]

const checkAllowedCategoryGA = (allowedCategories, category) => {
  return allowedCategories.some(allowedCategory =>
    category.includes(allowedCategory)
  )
}

export const getIsAllowedCategoryGA = (category = '') =>
  checkAllowedCategoryGA(ALLOWED_CATEGORY_GA, category)

const getTypeName = type => {
  if (type === 1) {
    return TYPE_PERSON
  } else if (type === 2) {
    return TYPE_COMPANY
  } else {
    return ''
  }
}

const removeAccents = str => {
  return str
    ? str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
    : ''
}

const upperFirst = stringT => {
  return stringT.replace(/\b\w/g, l => l.toUpperCase()).replace(/ /g, '')
}
const generateGtmTag = (name, gtmTag) => {
  return (
    gtmTag +
    '' +
    upperFirst(
      removeAccents(name ? name.replace(' a ', ' ') : '').substring(0, 30)
    )
  )
}

const getSubCategoryNameWhenIsPensionAndPerson = (
  type,
  category,
  subcategory
) => {
  return type === 1 && category === 'Pension'
    ? getSubCategoryPensionNameClassGTM(subcategory)
    : ''
}

const getCategoryName = category => {
  switch (category) {
    case 'Cesantías':
      return 'Cesantias'
    case 'Pensión':
      return 'Pension'
    case 'Inversión':
      return 'Inversion'
    default:
      return 'Ahorro'
  }
}

const getSubCategoryPensionNameClassGTM = subcategory => {
  switch (subcategory) {
    case 'pension-invalidez':
      return 'Invalidez'
    case 'pension-vejez':
      return 'Vejez'
    case 'sobrevivencia':
      return 'Sobrevivencia'
    case 'pensionado':
      return 'Pensionado'
    default:
      return ''
  }
}

const getClassGTMSeeMoreContentHOME = category => {
  switch (category) {
    case 'Cesantías':
      return 'gtmCesantiasMasContenVerMas'
    case 'Pensión':
      return 'gtmPensionMasContenVerMas'
    case 'Inversión':
      return 'gtmInversionMasContenVerMas'
    default:
      return 'gtmAhorroMasContenVerMas'
  }
}

const sendGaPush = (category, action, label) => {
  if (category) {
    const isAhorro = mapCategories(undefined, 'Ahorro').includes(category)
    category = isAhorro ? 'Ahorro' : category
    const isTalento = category === 'talento' || category === 'Talento'
    const isAllowedCategoryGA = getIsAllowedCategoryGA(category)
    if (!isTalento && isAllowedCategoryGA) {
      new Promise((resolver, rechazar) => {
        resolver()
      }).then(() => {
        ReactGA.event({
          category: category,
          action: action,
          label: label
        })
      })
    }
  }
}

const sendEventGA = (category, action, label) => {
  const isAllowedCategoryGA = getIsAllowedCategoryGA(category)
  if (isAllowedCategoryGA) {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    })
  }
}

const sendPageView = (url, title) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'virtualPageview',
    virtualPageURL: url,
    virtualPageTitle: title
  })
}

export {
  removeAccents,
  upperFirst,
  sendGaPush,
  sendPageView,
  generateGtmTag,
  getCategoryName,
  getClassGTMSeeMoreContentHOME,
  getSubCategoryNameWhenIsPensionAndPerson,
  getSubCategoryPensionNameClassGTM,
  sendEventGA,
  getTypeName,
  TYPE_PERSON,
  TYPE_COMPANY
}
