const {
  grupsBiteInternal,
  grupsBiteInternalAhorro,
  grupsBiteInternalInversion,
  filteRDataGroups
} = require('./grups-bite-internal')

const jsonHome = [
  {
    url: 'home/personas/ahorro',
    type: 1,
    linea: 'Ahorro',
    tituloCorto: 'Home de Personas Ahorro'
  },
  {
    url: 'home/empresas/ahorro',
    type: 2,
    linea: 'Ahorro',
    tituloCorto: 'Home de Empresas Ahorro'
  },
  {
    url: 'home/personas/cesantias',
    type: 1,
    linea: 'Cesantías',
    tituloCorto: 'Home de Personas Cesantias'
  },
  {
    url: 'home/empresas/cesantias',
    type: 2,
    linea: 'Cesantías',
    tituloCorto: 'Home de Empresas Cesantias'
  },
  {
    url: 'home/personas/inversion',
    type: 1,
    linea: 'Inversión',
    tituloCorto: 'Home de Personas Inversión'
  },
  {
    url: 'home/personas/pension',
    type: 1,
    linea: 'Pensión',
    tituloCorto: 'Home de Personas Pension'
  },
  {
    url: 'home/empresas/pension',
    type: 2,
    linea: 'Pensión',
    tituloCorto: 'Home de Empresas Pension'
  }
]

const jsonCategorias = [
  {
    url: 'personas/ahorro',
    type: 1,
    linea: 'Ahorro',
    tituloCorto: 'Contenido de Personas Ahorro'
  },
  {
    url: 'empresas/ahorro',
    type: 2,
    linea: 'Ahorro',
    tituloCorto: 'Contenido de Empresas Ahorro'
  },
  {
    url: 'personas/cesantias',
    type: 1,
    linea: 'Cesantías',
    tituloCorto: 'Contenido de Personas Cesantías'
  },
  {
    url: 'empresas/cesantias',
    type: 2,
    linea: 'Cesantías',
    tituloCorto: 'Contenido de Empresas Cesantías'
  },
  {
    url: 'personas/inversion',
    type: 1,
    linea: 'Inversión',
    tituloCorto: 'Contenido de Personas Inversión'
  },
  {
    url: 'personas/pension',
    type: 1,
    linea: 'Pensión',
    tituloCorto: 'Contenido de Personas Pensión'
  },
  {
    url: 'empresas/pension',
    type: 2,
    linea: 'Pensión',
    tituloCorto: 'Contenido de Empresas Pensión'
  }
]

const jsonDataUpdateForms = [
  {
    url: 'personas/actualizacion-datos',
    type: 1,
    linea: null,
    tituloCorto: 'Actualización de datos para personas'
  },
  {
    url: 'empresas/actualizacion-datos',
    type: 2,
    linea: null,
    tituloCorto: 'Actualización de datos para empresas'
  }
]

const jsonDataSalesforce = [
  {
    url: 'personas/inversion/agenda-una-cita',
    type: 1,
    linea: null,
    tituloCorto: '¿Quieres agendar una cita?'
  }
]

const jsonNewHome = [
  {
    url: 'personas',
    type: 1,
    linea: null,
    tituloCorto: 'Home Personas'
  },
  {
    url: 'empresas',
    type: 2,
    linea: null,
    tituloCorto: 'Home Empresas'
  },
]

const jsonNewCategories = [
  {
    url: 'personas/categorias',
    type: 1,
    linea: null,
    tituloCorto: 'Interna De Categorias Personas'
  },
  {
    url: 'empresas/categorias',
    type: 2,
    linea: null,
    tituloCorto: 'Interna De Categorias Empresas'
  },
]

const getIdDiv = titleChanged => {
  return titleChanged
    ? titleChanged
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    : ''
}

const getUniqueArray = array => {
  return [...new Set(array)]
}

function dataGeneratePages(internals, actions) {
  let closeAlternative = internals.data.allContentfulAlternativaCerrada.edges

  closeAlternative = closeAlternative.map(alt => {
    alt.node.urlSeo = alt.node.urlSeo.urlSeo
    return alt
  })

  const filterData = grupsBiteInternal(internals)

  const filterAhorros = grupsBiteInternalAhorro(
    internals.data.allContentfulProducto.edges,
    'Soluciones',
    'Pensiones Voluntarias'
  )

  const filterInversion = grupsBiteInternalAhorro(
    internals.data.allContentfulProducto.edges,
    'Soluciones',
    'Inversión'
  )

  const filterCesantias = grupsBiteInternalAhorro(
    internals.data.allContentfulProducto.edges,
    'Soluciones',
    'Cesantías'
  )

  const filterComplementario = grupsBiteInternalAhorro(
    internals.data.allContentfulProducto.edges,
    'Complementario',
    'Pensiones Voluntarias'
  )

  const filterInversiones = grupsBiteInternalInversion(
    internals.data.allContentfulActualidadDeInversiones.edges,
    'Actualidad',
    'Inversion'
  )

  const filterAlternatives = grupsBiteInternalInversion(
    closeAlternative,
    'Alternativas',
    'Inversion'
  )

  const filterCanales = grupsBiteInternalInversion(
    internals.data.allContentfulCanal.edges,
    'Canales',
    null
  )

  const filterTalento = grupsBiteInternalInversion(
    internals.data.allContentfulOfertaDiferencial.edges,
    'Talento',
    'Talento'
  )

  const filterMarketplace = grupsBiteInternalInversion(
    internals.data.allContentfulOfertaComplementaria.edges,
    'Marketplace',
    null
  )

  const filterLeyesYDecretos = grupsBiteInternalInversion(
    internals.data.allContentfulLeyesYDecretos.edges,
    'LeyesYDecretos',
    'LeyesYDecretos'
  )

  const filterCorporativoYAccionistas = grupsBiteInternalInversion(
    internals.data.allContentfulCorporativoYAccionistas.edges,
    'CorporativoYAccionistas',
    'CorporativoYAccionistas'
  )

  let arrayContenidoSimple = []
  const filterContenidoSimple = () => {
    return internals.data
      ? internals.data.allContentfulContenidoSimple.edges.map(x => {
          return arrayContenidoSimple.push({
            url: x.node.urlSeo,
            type: null,
            linea: null,
            tituloCorto: x.node.titulo
          })
        })
      : []
  }

  filterContenidoSimple()

  const dataGeneratePage = [
    {
      data: internals.data.allContentfulProducto.edges,
      actions: actions,
      type: 'producto',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulInformes.edges,
      actions: actions,
      type: 'producto',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulBeneficio.edges,
      actions: actions,
      type: 'beneficio',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulNovedad.edges,
      actions: actions,
      type: 'novedad',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulContenidoEducativo.edges,
      actions: actions,
      type: 'educativo',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulCampana.edges,
      actions: actions,
      type: 'campaña',
      filterData: filterData,
      isEspecial: null,
      template: './src/templates/internal-content-page.js'
    },
    {
      data: internals.data.allContentfulProducto.edges,
      actions: actions,
      type: 'soluciones',
      filterData: filterAhorros,
      isEspecial: 'Soluciones',
      template: './src/templates/internal-content-page-solutions.js'
    },
    {
      data: internals.data.allContentfulProducto.edges,
      actions: actions,
      type: 'soluciones',
      filterData: filterInversion,
      isEspecial: 'Soluciones-inversiones',
      template: './src/templates/internal-content-page-solutions.js'
    },
    {
      data: internals.data.allContentfulProducto.edges,
      actions: actions,
      type: 'soluciones',
      filterData: filterCesantias,
      isEspecial: 'Soluciones-cesantías',
      template: './src/templates/internal-content-page-solutions.js'
    },
    {
      data: internals.data.allContentfulProducto.edges,
      actions: actions,
      type: 'soluciones',
      filterData: filterComplementario,
      isEspecial: 'Complementario',
      template: './src/templates/internal-content-page-solutions.js'
    },
    {
      data: internals.data.allContentfulActualidadDeInversiones.edges,
      actions: actions,
      type: 'actualidad',
      filterData: filterInversiones,
      isEspecial: 'Actualidad',
      template: './src/templates/internal-current-investments.js'
    },
    {
      data: closeAlternative,
      actions: actions,
      type: 'alternativas',
      filterData: filterAlternatives,
      isEspecial: 'Alternativas',
      template: './src/templates/internal-alternatives.js'
    },
    {
      data: internals.data.allContentfulOfertaDiferencial.edges,
      actions: actions,
      type: 'talento',
      filterData: filterTalento,
      isEspecial: 'Talento',
      template: './src/templates/internal-talento-si-hay.js'
    },
    {
      data: internals.data.allContentfulOfertaComplementaria.edges,
      actions: actions,
      type: 'marketplace',
      filterData: filterMarketplace,
      isEspecial: 'Marketplace',
      template: './src/templates/internal-marketplace.js'
    },
    {
      data: internals.data.allContentfulCanal.edges,
      actions: actions,
      type: 'canales',
      filterData: filterCanales,
      isEspecial: 'Canales',
      template: './src/templates/internal-canales.js'
    },
    {
      data: internals.data.allContentfulLeyesYDecretos.edges,
      actions: actions,
      type: 'leyesydecretos',
      filterData: filterLeyesYDecretos,
      isEspecial: 'LeyesYDecretos',
      template:
        './src/templates/internal-leyes-decretos/internal-leyes-y-decretos.js'
    },
    {
      data: internals.data.allContentfulCorporativoYAccionistas.edges,
      actions: actions,
      type: 'corporativoyaccionistas',
      filterData: filterCorporativoYAccionistas,
      isEspecial: 'CorporativoYAccionistas',
      template: './src/templates/internal-corporativo-accionista.js'
    },
    {
      data: jsonHome,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'Home',
      template: './src/templates/index.js'
    },
    {
      data: arrayContenidoSimple,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'MapaSite',
      template: './src/templates/mapa-sitte.js'
    },
    {
      data: jsonCategorias,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'Categorias',
      template: './src/templates/contenido.js'
    },
    {
      data: jsonDataUpdateForms,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'ActualizaciónDeDatos',
      template: './src/templates/data-update.js'
    },
    {
      data: jsonDataSalesforce,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'Salesforce',
      template: './src/templates/salesforce-template.js'
    },
    {
      data: jsonNewHome,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'Home',
      template: './src/templates/home.js'
    },
    {
      data: jsonNewCategories,
      actions: actions,
      type: 'home',
      filterData: null,
      isEspecial: 'Categorias',
      template: './src/templates/categories.js'
    },
  ]
  return dataGeneratePage
}

function generatePagesTemplate(
  actions,
  type,
  dataGroups,
  categoriaProducto,
  node,
  dataContenido
) {
  let dataSoluciones
  let dataGroupsFinal = []

  let genretaPage = {}
  let ArraygenretaPage = []

  if (type === 'leyesydecretos' || type === 'corporativoyaccionistas') {
    dataContenido.forEach(internal => {
      const resultFilter = filteRDataGroups(
        dataGroups,
        internal.contentful_id,
        type
      )

      ArraygenretaPage.push({
        internal: internal,
        actions: actions,
        type: type,
        resultFilter: resultFilter ? resultFilter[0] : null,
        dataGroups: dataGroups,
        categoriaProducto: categoriaProducto
      })
    })
    genretaPage = ArraygenretaPage
  } else if (
    type === 'alternativas' ||
    type === 'actualidad' ||
    type === 'talento' ||
    type === 'marketplace' ||
    type === 'canales'
  ) {
    const resultFilter = filteRDataGroups(dataGroups, node.contentful_id, type)

    genretaPage = {
      internal: node,
      actions: actions,
      type: type,
      resultFilter:
        type === 'alternativas' || type === 'talento' || type === 'marketplace'
          ? resultFilter[0]
          : resultFilter,
      dataGroups: dataGroups,
      categoriaProducto: categoriaProducto
    }
  } else if (type === 'soluciones') {
    dataGroups.map(x => {
      if (x) {
        if (x.length > 0) {
          dataGroupsFinal.push(x)
        }
      }
      return 0
    })

    dataContenido.forEach(internal => {
      const resultFilter = filteRDataGroups(
        dataGroups,
        internal.contentful_id,
        type
      )
      dataGroupsFinal.forEach((filter, i) => {
        filter.forEach(x => {
          if (x.id === internal.contentful_id) {
            dataSoluciones = dataGroupsFinal[i]
          }
        })
      })
      ArraygenretaPage.push({
        internal: internal,
        actions: actions,
        type: type,
        resultFilter: resultFilter,
        dataGroups: dataSoluciones ? dataSoluciones : [],
        categoriaProducto: categoriaProducto
      })
    })
    genretaPage = ArraygenretaPage
  } else if (Array.isArray(dataContenido)) {
    dataContenido.forEach(internal => {
      const resultFilter = filteRDataGroups(
        dataGroups,
        internal.contentful_id,
        type
      )
      resultFilter.forEach(internalItems => {
        ArraygenretaPage.push({
          internal: internal,
          actions: actions,
          type: type,
          resultFilter: internalItems,
          dataGroups: dataGroups,
          categoriaProducto: categoriaProducto
        })
      })
    })
    genretaPage = ArraygenretaPage
  } else if (dataContenido !== null) {
    const resultFilter = filteRDataGroups(
      dataGroups,
      dataContenido.contentful_id,
      type
    )

    resultFilter.forEach(internalItems => {
      ArraygenretaPage.push({
        internal: dataContenido,
        actions: actions,
        type: type,
        resultFilter: internalItems,
        dataGroups: dataGroups,
        categoriaProducto: categoriaProducto
      })
    })
    genretaPage = ArraygenretaPage
  }
  return genretaPage
}

module.exports.getIdDiv = getIdDiv
module.exports.dataGeneratePages = dataGeneratePages
module.exports.getUniqueArray = getUniqueArray
module.exports.generatePagesTemplate = generatePagesTemplate
