import { getRandom } from './getRandom'
import ContentUtil from './ContentUtil'
import { transformData } from './transform-data'
import { filterItems } from './filter-contenido'
import mapCategories from '../const/dictionary/map-categories'

export const getDataMoreContent = (
  data,
  idcontefull,
  id_Category,
  subcategoria,
  type,
  user,
  bites,
  line
) => {
  const getDataRandom = param => {
    return Math.floor(getRandom() * param.length)
  }

  let idCategory
  let idSubCategory
  let idType

  const createIds = (biteOneCategory, PerfilamientoCategory, Default) => {
    let categoria_id = ''
    if (
      biteOneCategory &&
      PerfilamientoCategory &&
      line !== 'soluciones' &&
      line !== 'alternativas'
    ) {
      if (biteOneCategory.length >= 2) {
        const filterCategoria_id = biteOneCategory.filter(function(item) {
          return PerfilamientoCategory.indexOf(item.contentful_id) >= 0
        })

        if (filterCategoria_id.length > 0) {
          categoria_id = filterCategoria_id[0].contentful_id
        } else {
          categoria_id = Default
        }
      } else {
        categoria_id = Default
      }
    } else {
      categoria_id = Default
    }
    return categoria_id
  }

  if (bites && line !== 'soluciones' && line !== 'alternativas') {
    idCategory = createIds(
      bites.biteOne ? bites.biteOne.category : id_Category,
      mapCategories(data, user ? user.category : ''),
      id_Category
    )

    idSubCategory = createIds(
      bites.biteOne ? bites.biteOne.subcategoria : subcategoria,
      mapCategories(data, user ? user.subcategory : ''),
      subcategoria
    )

    idType = createIds(
      bites.biteOne ? bites.biteOne.cliente : type,
      mapCategories(data, user ? user.type : ''),
      type
    )
  } else {
    idCategory = createIds(
      id_Category,
      mapCategories(data, user ? user.category : ''),
      id_Category
    )

    idSubCategory = createIds(
      subcategoria,
      mapCategories(data, user ? user.subcategory : ''),
      subcategoria
    )

    idType = createIds(type, mapCategories(data, user ? user.type : ''), type)
  }

  const validateData = dataValidate => {
    return dataValidate.filter(item => {
      if (item.hasOwnProperty('urlSeo') && item.urlSeo !== null) {
        if (item.contentful_id !== idcontefull) {
          return item
        }
      }
    })
  }

  const contentUtil = new ContentUtil()

  let newArrayContenido = transformData(data, contentUtil)
  const contenidoCompleto = validateData(newArrayContenido)

  let contenidoCompletoFiltrado = []

  if (idCategory && idType) {
    if (idSubCategory) {
      contenidoCompletoFiltrado = filterItems(
        contenidoCompleto,
        idCategory,
        idSubCategory,
        idType
      )
    } else {
      contenidoCompletoFiltrado = filterItems(
        contenidoCompleto,
        idCategory,
        null,
        idType
      )
    }
  } else {
    contenidoCompletoFiltrado = filterItems(
      contenidoCompleto,
      id_Category,
      subcategoria,
      type
    )
  }

  contenidoCompletoFiltrado.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
  })

  let numeroOne = 0
  let numeroTwo = 0
  let i = 0

  while (i < 5 && numeroOne === numeroTwo) {
    numeroOne = getDataRandom(contenidoCompletoFiltrado)
    numeroTwo = getDataRandom(contenidoCompletoFiltrado)
    i++
  }

  const arrayData = [
    contenidoCompletoFiltrado,
    contenidoCompletoFiltrado[numeroOne],
    contenidoCompletoFiltrado[numeroTwo]
  ]

  return arrayData
}
