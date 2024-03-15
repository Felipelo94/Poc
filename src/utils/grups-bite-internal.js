const {
  PATH_URL_SOLUCIONES_AHORRO_DEFAULT,
  BUSINESS_LINES_CONTENTFUL,
  CUSTOMER_TYPES_CONTENTFUL,
  PATH_URL_TYPE_CUSTOMER_AND_CATEGORY,
  BUSINESS_LINE_FROM_ENTITY_CONTENTFUL,
  subcategoryDefault,
  dataLineas,
  mapCategories
} = require('../const/dictionary/content-grups-bite-internal.js')
const { filterCategorias } = require('./filter-categorias.js')

let groupsInternal = []

const getCategorySoluciones = businessLines => {
  if (businessLines && businessLines.length > 0) {
    return businessLines[0]
  }
  return PATH_URL_SOLUCIONES_AHORRO_DEFAULT
}

const getBusinessLineFromContentful = (businessLines = []) => {
  const pathURLBusinessLines = []
  businessLines.forEach(businessLine => {
    if (BUSINESS_LINES_CONTENTFUL[businessLine.contentful_id]) {
      pathURLBusinessLines.push(
        BUSINESS_LINES_CONTENTFUL[businessLine.contentful_id]
      )
    }
  })
  return pathURLBusinessLines
}

const getCustomerTypesFromContentful = (customerTypes = []) => {
  const pathURLCustomerTypes = []
  customerTypes.forEach(customerType => {
    if (CUSTOMER_TYPES_CONTENTFUL[customerType.contentful_id]) {
      pathURLCustomerTypes.push(
        CUSTOMER_TYPES_CONTENTFUL[customerType.contentful_id]
      )
    }
  })
  return pathURLCustomerTypes
}

const getPathURLProfilingPage = (
  pathURLBusinessLines,
  pathURLCustomerTypes
) => {
  const pathURLCustomerAndCategory = []
  if (
    pathURLBusinessLines &&
    pathURLBusinessLines.length &&
    pathURLCustomerTypes &&
    pathURLCustomerTypes.length
  ) {
    pathURLBusinessLines.forEach(({ category }) => {
      pathURLCustomerTypes.forEach(({ customerType }) => {
        const pathURLTypeAndCustomer = `${customerType}${category}`
        if (PATH_URL_TYPE_CUSTOMER_AND_CATEGORY[pathURLTypeAndCustomer]) {
          pathURLCustomerAndCategory.push(
            PATH_URL_TYPE_CUSTOMER_AND_CATEGORY[pathURLTypeAndCustomer]
          )
        }
      })
    })
  }
  return pathURLCustomerAndCategory
}

const getCategoryFromBusinessLineOfertaDiferencial = pathURLBusinessLines => {
  if (pathURLBusinessLines.length === 1) {
    return pathURLBusinessLines[0].category
  }
  return pathURLBusinessLines.filter(bLine => bLine.category !== 'Inversión')[0]
    .category
}

const urlRepeat = dataComplete => {
  let arrayDataFinalUrls = []
  dataComplete.map(e => {
    const filterUrls = dataComplete.filter(filter => filter.urlSeo === e.urlSeo)
    if (filterUrls.length >= 2) {
      filterUrls.map(x => {
        x.urlSeo = x.urlSeo ? x.urlSeo.concat('-', x.id.toLowerCase()) : ''
        arrayDataFinalUrls.push(x)
        return x
      })
    } else if (filterUrls.length < 2) {
      filterUrls.map(x => {
        arrayDataFinalUrls.push(x)
        return x
      })
    }
  })
  return arrayDataFinalUrls
}

var grupsBiteInternal = function(groups) {
  let dataComplete = []
  dataLineas(groups).map((item, i) => {
    const generateDataAndTypeItems = generateDataAndType(item.data, item.linea)
    return dataComplete.push(generateDataAndTypeItems)
  })

  let datafinalIndex = urlRepeat(dataComplete.flat())

  let dataTraformsGroups = creategrupsBiteInternal(datafinalIndex)

  return dataTraformsGroups
}

function generateDataAndType(data, type) {
  const groupQuery = []
  data.forEach(({ node }) => {
    const dataContenido = node.contenido
    let categoriaProducto = ''
    let category = [{ nombre: 'not Category' }]

    if (node.titulo) {
      category = [{ nombre: node.titulo, contentful_id: node.contentful_id }]
    } else if (node.lineaDeNegocio) {
      category = node.lineaDeNegocio
    } else if (node.lineadenegocio) {
      category = node.lineadenegocio
    } else if (node.lineaDeProducto && type !== 'producto') {
      category = [node.lineaDeProducto]
    } else if (node.lineaDeProducto && type === 'producto') {
      category = node.lineaDeProducto
    } else {
      category = [{ nombre: 'not Category' }]
    }

    if (node.categoriaProducto) {
      categoriaProducto = node.categoriaProducto
    } else {
      categoriaProducto = 'Not Category producto'
    }

    if (Array.isArray(dataContenido)) {
      dataContenido.forEach(internal => {
        if (internal.urlSeo !== null) {
          if (
            categoriaProducto !== 'Soluciones' &&
            categoriaProducto !== 'Complementario'
          ) {
            groupQuery.push({
              id: internal.contentful_id,
              type: type,
              category: category,
              urlSeo: internal.urlSeo,
              cliente: internal.tipoDeCliente
                ? internal.tipoDeCliente
                : [{ nombre: 'not name', contentful_id: 'not id' }],
              tema: internal.Tema,
              generoEdad: internal.edadygenero,
              subcategoria: internal.categoriaCliente
                ? internal.categoriaCliente.length > 0
                  ? internal.categoriaCliente
                  : subcategoryDefault
                : subcategoryDefault
            })
          }
        }
      })
    } else if (dataContenido !== null) {
      if (dataContenido.urlSeo !== null) {
        if (
          categoriaProducto !== 'Soluciones' &&
          categoriaProducto !== 'Complementario'
        ) {
          groupQuery.push({
            id: dataContenido.contentful_id,
            type: type,
            category: category,
            urlSeo: dataContenido.urlSeo,
            cliente: dataContenido.tipoDeCliente
              ? dataContenido.tipoDeCliente
              : [{ nombre: 'not name', contentful_id: 'not id' }],
            tema: dataContenido.Tema,
            generoEdad: dataContenido.edadygenero,
            subcategoria: dataContenido.categoriaCliente
              ? dataContenido.categoriaCliente.length > 0
                ? dataContenido.categoriaCliente
                : subcategoryDefault
              : subcategoryDefault
          })
        }
      }
    }
  })

  return groupQuery
}

function creategrupsBiteTemas(dataCategoria, line, type) {
  let filterGroupsInternal = []
  if (dataCategoria) {
    dataCategoria.map(dataItems => {
      filterGroupsInternal.push({
        line: line,
        cliente: type,
        biteOne: dataItems,
        biteOther: dataCategoria
      })
    })
  }
  return filterGroupsInternal
}

function creategrupsBiteInternal(data) {
  const Cesantías = mapCategories['Cesantías']
  const Pensión = mapCategories['Pensión']
  const Ahorro = mapCategories['Ahorro']
  const inversion = mapCategories['Inversión']
  const afiliado = mapCategories[1]
  const empresa = mapCategories[2]

  const dataFilterCategorias = [
    {
      line: inversion,
      data: data,
      subcategoria: null,
      type: afiliado,
      typeDefault: 1,
      categoryDefault: 'Inversión'
    },
    {
      line: Cesantías,
      data: data,
      subcategoria: null,
      type: afiliado,
      typeDefault: 1,
      categoryDefault: 'Cesantías'
    },
    {
      line: Cesantías,
      data: data,
      subcategoria: null,
      type: empresa,
      typeDefault: 2,
      categoryDefault: 'Cesantías'
    },
    {
      line: Ahorro,
      data: data,
      subcategoria: null,
      type: afiliado,
      typeDefault: 1,
      categoryDefault: 'Ahorro'
    },
    {
      line: Ahorro,
      data: data,
      subcategoria: null,
      type: empresa,
      typeDefault: 2,
      categoryDefault: 'Ahorro'
    },
    {
      line: Pensión,
      data: data,
      subcategoria: null,
      type: afiliado,
      typeDefault: 1,
      categoryDefault: 'Pensión'
    },
    {
      line: Pensión,
      data: data,
      subcategoria: null,
      type: empresa,
      typeDefault: 2,
      categoryDefault: 'Pensión'
    }
  ]

  dataFilterCategorias.map((internalItems, i) => {
    const filterCategoriasItemas = filterCategorias(
      internalItems.line,
      internalItems.data,
      null,
      internalItems.type
    )

    let creategrupsBiteTemasItemas = creategrupsBiteTemas(
      filterCategoriasItemas,
      internalItems.categoryDefault,
      internalItems.typeDefault
    )

    groupsInternal.push(creategrupsBiteTemasItemas)
    return null
  })

  return groupsInternal.flat()
}

let filteRDataGroups = (data, id, type) => {
  let result
  if (
    type === 'actualidad' ||
    type === 'alternativas' ||
    type === 'talento' ||
    type === 'leyesydecretos' ||
    type === 'corporativoyaccionistas' ||
    type === 'marketplace' ||
    type === 'canales'
  ) {
    result = data.filter(filter => filter.id === id)
  } else if (type === 'soluciones') {
    let contentsInternal = []
    data.forEach((filter, i) => {
      filter.forEach((x, index) => {
        if (x.id === id) {
          contentsInternal.push([data[i][index]])
        }
      })
    })
    result = contentsInternal
  } else {
    result = data.filter(filter => filter.biteOne.id === id)
  }
  return result
}

let grupsBiteInternalAhorro = (data, categoriaP, lineaNegocio) => {
  let queryGroups = []
  const categorySoluciones = getCategorySoluciones(
    BUSINESS_LINE_FROM_ENTITY_CONTENTFUL.filter(
      businessLine => businessLine.businessLine === lineaNegocio
    )
  )
  if (data.length > 0) {
    data.map((item, index) => {
      let queryGroupsitems = []
      let dataContefull = item.node.contenido ? item.node.contenido : []
      dataContefull.map(items => {
        if (
          item.node.categoriaProducto === categoriaP &&
          item.node.lineadenegocio.nombre === lineaNegocio
        ) {
          const customerTypes = getCustomerTypesFromContentful(
            items.tipoDeCliente
          )
          customerTypes.forEach(customerType => {
            queryGroupsitems.push({
              id: items.contentful_id,
              type: 'soluciones',
              cliente: customerType.customerType,
              typeCustomer: customerType.customerType,
              categoryBusinessLine: categorySoluciones.category,
              category: item.node.categoriaProducto,
              urlSeo: `${customerType.pathURL}/${categorySoluciones.pathURL}/${items.urlSeo}`,
              generoEdad: items.edadygenero,
              subcategoria: item.node.lineadenegocio.nombre,
              idProducto: item.node.contentful_id,
              idGroups: `${categoriaP}-${index}`
            })
          })
        }
        return 0
      })
      if (queryGroupsitems.length > 0) {
        queryGroups.push(queryGroupsitems)
      }
      return 0
    })
  }
  const dataIndex = urlRepeat(queryGroups)
  return dataIndex
}

let grupsBiteInternalInversion = (data, type, linea) => {
  let queryGroups = []
  switch (type) {
    case 'LeyesYDecretos':
    case 'CorporativoYAccionistas':
      data.forEach(invers => {
        invers.node.contenido.forEach(x => {
          queryGroups.push({
            id: x.contentful_id,
            entityId: invers.node.contentful_id,
            type: type,
            urlSeo: x.urlSeo,
            titulo: invers.node.titulo,
            category: linea
          })
        })
      })
      break
    case 'Marketplace':
      data.forEach(invers => {
        const pathURLBusinessLines = getBusinessLineFromContentful(
          invers.node.lineaDeProducto
        )
        const category = getCategoryFromBusinessLineOfertaDiferencial(
          pathURLBusinessLines
        )
        const pathURLCustomerType = getCustomerTypesFromContentful(
          invers.node.contenido.tipoDeCliente
        )
        let customerType =
          pathURLCustomerType &&
          pathURLCustomerType[0] &&
          pathURLCustomerType[0].customerType
        customerType = customerType || 1
        queryGroups.push({
          id: invers.node.contentful_id,
          type: type,
          urlSeo: invers.node.contenido.urlSeo,
          titulo: invers.node.titulo,
          category,
          customerType: category === 'Inversión' ? 1 : customerType
        })
      })
      break
    case 'Talento':
      data.forEach(invers => {
        const pathURLBusinessLines = getBusinessLineFromContentful(
          invers.node.lineaDeProducto
        )
        const category = getCategoryFromBusinessLineOfertaDiferencial(
          pathURLBusinessLines
        )
        const pathURLCustomerType = getCustomerTypesFromContentful(
          invers.node.contenido[0].tipoDeCliente
        )
        let customerType =
          pathURLCustomerType &&
          pathURLCustomerType[0] &&
          pathURLCustomerType[0].customerType
        customerType = customerType || 1
        queryGroups.push({
          id: invers.node.contentful_id,
          type: type,
          urlSeo: invers.node.contenido[0].urlSeo,
          titulo: invers.node.titulo,
          category,
          customerType: category === 'Inversión' ? 1 : customerType
        })
      })
      break
    case 'Actualidad':
      data.forEach(invers => {
        const pathURLBusinessLines = getBusinessLineFromContentful(
          invers.node.lineaDeProducto
        )
        const pathURLCustomerTypes = getCustomerTypesFromContentful(
          invers.node.tipoDeCliente
        )
        const pathURLProfiling = getPathURLProfilingPage(
          pathURLBusinessLines,
          pathURLCustomerTypes
        )
        pathURLProfiling.forEach(pathURLProfile =>
          queryGroups.push({
            id: invers.node.contentful_id,
            type: type,
            urlSeo: `${pathURLProfile.pathURL}/${invers.node.urlSeo}`,
            titulo: invers.node.titulo,
            category: pathURLProfile.category,
            customerType: pathURLProfile.typeCustomer
          })
        )
      })
      break

    case 'Alternativas':
      data.forEach(invers => {
        const pathURLBusinessLines = getBusinessLineFromContentful(
          invers.node.lineaDeProducto
        )
        const pathURLCustomerTypes = getCustomerTypesFromContentful(
          invers.node.tipoDeCliente
        )
        const pathURLProfiling = getPathURLProfilingPage(
          pathURLBusinessLines,
          pathURLCustomerTypes
        )
        pathURLProfiling.forEach(pathURLProfile =>
          queryGroups.push({
            id: invers.node.contentful_id,
            type: type,
            urlSeo: `${pathURLProfile.pathURL}/${invers.node.urlSeo}`,
            titulo: invers.node.titulo,
            category: pathURLProfile.category,
            customerType: pathURLProfile.typeCustomer
          })
        )
      })
      break
    case 'Canales':
      data.forEach(invers => {
        queryGroups.push({
          id: invers.node.contentful_id,
          type: type,
          urlSeo: `canales/${invers.node.urlSeo}`,
          titulo: invers.node.nombre,
          category: ''
        })
      })
      break
    default:
      data.forEach(invers => {
        queryGroups.push({
          id: invers.node.contentful_id,
          type: type,
          urlSeo: invers.node.urlSeo,
          titulo: invers.node.titulo,
          category: linea
        })
      })
      break
  }
  const dataIndex = urlRepeat(queryGroups)
  return dataIndex
}

module.exports.grupsBiteInternal = grupsBiteInternal
module.exports.filteRDataGroups = filteRDataGroups
module.exports.grupsBiteInternalAhorro = grupsBiteInternalAhorro
module.exports.grupsBiteInternalInversion = grupsBiteInternalInversion
