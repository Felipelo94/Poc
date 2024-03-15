import React from 'react'
import StepTourGuide from '../components/molecules/step-tour-guide/step-tour-guide'
import { validateCurrentLine } from './bite-caracter'
import { currentDay } from './dateUtil'
import { URL_SERVICES } from './paramApplication'
import queryString from 'query-string'

export const subcategoryDefault = [
  {
    contentful_id: '5fP153BoelxfRsusePVnBU',
    descripcion: 'Cesante'
  },
  {
    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
    descripcion: 'Independiente'
  },
  {
    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
    descripcion: 'Empleado'
  },
  {
    contentful_id: '7lDDi92WQvINHDoyppiGG1',
    descripcion: 'Pensión por invalidez'
  },
  {
    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
    descripcion: 'Pensión por vejez'
  },
  {
    contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
    descripcion: 'Pensión por sobrevivencia'
  },
  {
    contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
    descripcion: 'Soy pensionado'
  },
  {
    contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
    descripcion: 'Estoy Aprendiendo'
  },
  {
    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
    descripcion: 'Conozco de Inversiones'
  }
]

export const getConfigTourGuide = close => {
  return [
    {
      selector: '[data-tut="reactour__menu"]',
      content: ({ goTo }) => (
        <StepTourGuide
          goTo={goTo}
          current={1}
          closeEvent={() => close()}
          description="Navega por el sitio web con opciones y accesos más rápidos y sencillos. Desde el menú podrás cambiar tu perfilamiento según tus intereses."
          title="Navegación simple"
          titleImage="Ícono de Navegación Simple"
          alt={`Ícono de una esfera y texto "Navegación simple", brinda información sobre accesos sencillos para cambiar tu perfilamiento`}
        />
      )
    },
    {
      selector: '[data-tut="reactour__card"]',
      content: ({ goTo }) => (
        <StepTourGuide
          goTo={goTo}
          current={2}
          closeEvent={() => close()}
          description="En estas tarjetas encontrarás contenidos destacados con información actualizada acerca de nuestros productos y servicios."
          title="Contenido destacado"
          titleImage="Ícono de Contenido Destacado"
          alt={`Ícono de una esfera y texto "Contenido destacado", enseña las tarjetas con las que puedes acceder a información actualizada`}
        />
      )
    },
    {
      selector: '[data-tut="reactour__card2"]',
      content: ({ goTo }) => (
        <StepTourGuide
          goTo={goTo}
          current={3}
          closeEvent={() => close()}
          description="En este carrusel de contenidos podrás encontrar tarjetas con información acorde a tus necesidades e intereses."
          title="Información de tu interés"
          titleImage="Ícono de Información de tu interés"
          alt={`Ícono de una esfera y texto "Información de tu interés", enseña un carrusel de contenidos con tarjetas de información acorde a tus intereses`}
        />
      )
    },
    {
      selector: '[data-tut="reactour__show"]',
      content: ({ goTo }) => (
        <StepTourGuide
          goTo={goTo}
          current={4}
          closeEvent={() => close()}
          description="Al dar clic en este botón, podrás encontrar todas las tarjetas de contenido relacionadas con los temas de tu interés."
          title="Explora más contenidos"
          titleImage="Ícono de Explora más contenidos"
          alt={`Ícono de una esfera y texto "Explora más contenidos", al dar clic podrás encontrar todas las tarjetas de contenido relacionadas a los temas de tu interés`}
        />
      )
    },
    {
      selector: '[data-tut="reactour__exit"]',
      content: ({ goTo }) => (
        <StepTourGuide
          goTo={goTo}
          current={5}
          closeEvent={() => close()}
          description="Haciendo clic en estas tarjetas podrás navegar entre diferentes contenidos relacionados con nuestros productos y servicios. Allí podrás perfilarte de acuerdo a lo que quieres saber."
          title="Conoce mucho más"
          titleImage="Ícono de Conoce mucho más"
          alt={`Ícono de una esfera y texto "Conoce mucho más" para navegar entre tarjetas con diferentes contenidos de productos y servicios`}
        />
      )
    }
  ]
}

export const redirectHome = indexDBUser => {
  const isBrowser = typeof window !== 'undefined'
  let params = queryString.parse(isBrowser ? window.location.search : '')
  let validateQuery =
    params['tipoCliente'] || params['linea'] || params['changeModal']
      ? true
      : false
  if (indexDBUser && !validateQuery) {
    window.location.href =
      process.env.PATH_PREFIX === ''
        ? window.location.origin +
          `/home/${indexDBUser?.type === 1 ? 'personas' : 'empresas'}/${
            indexDBUser?.category === 'Ahorro'
              ? 'ahorro'
              : indexDBUser?.category === 'Cesantías'
              ? 'cesantias'
              : indexDBUser?.category === 'Inversión'
              ? 'inversion'
              : indexDBUser?.category === 'Pensión'
              ? 'pension'
              : ''
          }`
        : window.location.origin +
          '/' +
          process.env.PATH_PREFIX +
          '/' +
          `home/${indexDBUser?.type === 1 ? 'personas' : 'empresas'}/${
            indexDBUser?.category === 'Ahorro'
              ? 'ahorro'
              : indexDBUser?.category === 'Cesantías'
              ? 'cesantias'
              : indexDBUser?.category === 'Inversión'
              ? 'inversion'
              : indexDBUser?.category === 'Pensión'
              ? 'pension'
              : ''
          }`
  }
}

export const validationChangeHome = (
  props,
  prevProps,
  updateHostUser,
  state,
  postApiPreHome,
  refreshPage,
  eventState,
  timeOutEvent,
  user = null
) => {
  if (props.perfilamiento.categoria !== prevProps.perfilamiento.categoria) {
    if (
      props.perfilamiento.categoria === 'Ahorro' ||
      (props.perfilamiento.categoria === 'Inversión' &&
        process.env.RESTRIGIR_REDIRECT === 'true') ||
      state.indexDBUser.type === 2
    ) {
      if (!state.IsOpenMenu) {
        updateHostUser({
          category: props.perfilamiento.categoria,
          subcategory: ''
        })
        const dataSend = {
          comando: {
            nombre: 'user.saved',
            payload: {
              name: props.nameUser.nameValue,
              type: props.nameUser.typeUser,
              hostUser: {
                host: state.indexDBUser.host,
                state: 1
              },
              category: props.perfilamiento.categoria,
              subcategory: '',
              date: currentDay(),
              state: 1,
              age: 0,
              gender: null
            }
          }
        }
        if (state.validateStreetCard) {
          postApiPreHome(
            JSON.stringify(dataSend),
            `${URL_SERVICES}commands`,
            refreshPage()
          )
        } else {
          postApiPreHome(JSON.stringify(dataSend), `${URL_SERVICES}commands`)
        }
      }
    } else {
      eventState()
    }
  }

  if (props.statusTourguide !== prevProps.statusTourguide) {
    if (props.statusTourguide) {
      if (timeOutEvent) {
        timeOutEvent()
      }
    }
  }
}

export const convertOldDataToNew = currentItem => {
  let newItem = {}
  const categoria = currentItem.node.lineadenegocio
  const auxCurrentItem = currentItem.hasOwnProperty('node')
    ? currentItem.node.contenido
    : currentItem.contenido
  if (auxCurrentItem !== null) {
    newItem.titulo = auxCurrentItem.tituloCorto
    newItem.tipoContent = auxCurrentItem.tipoContent
    newItem.tituloCorto = auxCurrentItem.tituloCorto
    newItem.category = categoria
    newItem.imagen = auxCurrentItem.imagenpequena
    newItem.categoriaCliente = auxCurrentItem.categoriaCliente
      ? auxCurrentItem.categoriaCliente
      : subcategoryDefault
    newItem.type = auxCurrentItem.tipoDeCliente
    newItem.imagenpequena = auxCurrentItem.imagenpequena
    newItem.nombreImagen =
      auxCurrentItem?.imagenpequena?.description === ''
        ? auxCurrentItem.imagenpequena.title
        : auxCurrentItem.imagenpequena?.description
    newItem.tipoBite = auxCurrentItem.tipoBite
    newItem.link =
      auxCurrentItem.urlSeo !== null
        ? auxCurrentItem.urlSeo
          ? auxCurrentItem.urlSeo.toLowerCase()
          : null
        : null
    newItem.urlSeo =
      auxCurrentItem.urlSeo !== null
        ? auxCurrentItem.urlSeo
          ? auxCurrentItem.urlSeo
          : null
        : null
    newItem.relevancia = auxCurrentItem.relevancia
    newItem.updatedAt = auxCurrentItem.updatedAt
    newItem.generoEdad = auxCurrentItem.edadygenero
    if (auxCurrentItem.hasOwnProperty('textoIntroductorio')) {
      newItem.descripcion = auxCurrentItem.textoIntroductorio
      newItem.textoIntroductorio = auxCurrentItem.textoIntroductorio
    }
    if (auxCurrentItem.hasOwnProperty('textoCallToActionBite')) {
      newItem.textoBoton = auxCurrentItem.textoCallToActionBite
      newItem.textoCallToActionBite = auxCurrentItem.textoCallToActionBite
    }
  }

  return newItem
}

export const generateCleanData = (dataArray, relevancia) => {
  let arrayReturn = dataArray.map(itemArray => {
    return convertOldDataToNew(itemArray)
  })
  return arrayReturn.filter(itemR => itemR.relevancia === relevancia)
}

export const filterItems = (category, subCategory, type, data) => {
  if (!subCategory) {
    return data.filter(function(item) {
      if (item.category && item.type) {
        return (
          item.category.filter(
            catego => category?.indexOf(catego.contentful_id) >= 0
          ).length > 0 &&
          item.type.filter(
            typeClient => type?.indexOf(typeClient.contentful_id) >= 0
          ).length > 0
        )
      }
      return null
    })
  } else {
    return data.filter(function(item) {
      if (item.category && item.categoriaCliente && item.type !== null) {
        return (
          item.category.filter(
            catego => category?.indexOf(catego.contentful_id) >= 0
          ).length > 0 &&
          item.categoriaCliente.filter(
            subcat => subCategory?.indexOf(subcat.contentful_id) >= 0
          ).length > 0 &&
          item.type.filter(
            typeClient => type?.indexOf(typeClient.contentful_id) >= 0
          ).length > 0
        )
      } else if (
        item.categoriaCliente === null ||
        item.categoriaCliente.length === 0
      ) {
        return (
          item.category?.filter(
            catego => category?.indexOf(catego?.contentful_id) >= 0
          ).length > 0 &&
          item.type?.filter(
            typeClient => type?.indexOf(typeClient?.contentful_id) >= 0
          ).length > 0
        )
      }
      return null
    })
  }
}

export const sortData = data => {
  data.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
  })
}

export const setArrayType = (arryaGeneral, type, typeContent) => {
  return arryaGeneral.map(itemGeneral => {
    if (itemGeneral.hasOwnProperty('node')) {
      if (itemGeneral.node.contenido !== null) {
        itemGeneral.node.contenido.tipoBite = typeContent
        itemGeneral.node.contenido.tipoContent = typeContent
      }
    } else {
      itemGeneral.tipoBite = typeContent
      itemGeneral.tipoContent = typeContent
    }
    return itemGeneral
  })
}

export const setArrayCapania = arrayOldCampania => {
  return setArrayType(arrayOldCampania, 'campañas', 'campañas')
}

export const setArrayFeatured = (arrayOldFeatured, type) => {
  return setArrayType(arrayOldFeatured, 'destacado', type)
}

export const setArrayActualidad = arrayOldProduct => {
  let arrayNewProduct = []
  arrayOldProduct.map(items => {
    arrayNewProduct.push({
      imagenpequena: items.node.imagen,
      nombreImagen:
        items.node.imagen.description === ''
          ? items.node.imagen.title
          : items.node.imagen.description,
      urlSeo:
        items.node.urlSeo !== null ? items.node.urlSeo.toLowerCase() : null,
      textoCallToActionBite:
        items.node.contenidoCorporativo.TextoCallToActionBite
          .TextoCallToActionBite,
      tituloCorto: items.node.contenidoCorporativo.TituloCortoBite,
      textoIntroductorio:
        items.node.contenidoCorporativo.TextoIntroductorioBite,
      descripcioncorta: items.node.descripcion.descripcion,
      updatedAt: items.node.updatedAt,
      categoriaCliente: items.node.categoriaCliente
        ? items.node.categoriaCliente
        : subcategoryDefault,
      category: items.node.lineaDeProducto,
      type: items.node.tipoDeCliente,
      tipoBite: 'actualidad',
      relevancia: items.node.contenidoCorporativo.Relevancia
    })
    return null
  })
  sortData(arrayNewProduct)
  return arrayNewProduct
}

export const setArrayProduct = arrayOldProduct => {
  let arrayNewProduct = []
  let categoryProduct
  let idCategoryProduct
  arrayOldProduct.map(items => {
    categoryProduct = items.node.titulo
    idCategoryProduct = items.node.contentful_id
    if (items.node.contenido) {
      items.node.contenido.map(x => {
        arrayNewProduct.push({
          imagenpequena: x.imagenpequena,
          nombreImagen:
            x.imagenpequena.description === ''
              ? x.imagenpequena.title
              : x.imagenpequena.description,
          urlSeo: x.urlSeo !== null ? x.urlSeo.toLowerCase() : null,
          textoCallToActionBite: x.textoCallToActionBite,
          tituloCorto: x.tituloCorto,
          textoIntroductorio: x.textoIntroductorio,
          descripcioncorta: x.descripcioncorta,
          updatedAt: x.updatedAt,
          categoriaCliente: x.categoriaCliente
            ? x.categoriaCliente
            : subcategoryDefault,
          category: [
            {
              nombre: categoryProduct,
              contentful_id: idCategoryProduct
            }
          ],
          type: x.tipoDeCliente,
          tipoBite: 'producto',
          relevancia: x.relevancia,
          generoEdad: x.edadygenero
        })
        return null
      })
    }
    return null
  })
  sortData(arrayNewProduct)
  return arrayNewProduct
}

export const setArrayEducativo = arrayOldEducativo => {
  let arrayNewEducation = []
  let categoryEducativo
  arrayOldEducativo.map(itemsEducativos => {
    categoryEducativo = itemsEducativos.node.lineaDeProducto
    if (itemsEducativos.node.contenido) {
      arrayNewEducation.push({
        imagenpequena: itemsEducativos.node.contenido.imagenpequena,
        nombreImagen:
          itemsEducativos.node.contenido.imagenpequena.description === ''
            ? itemsEducativos.node.contenido.imagenpequena.title
            : itemsEducativos.node.contenido.imagenpequena.description,
        urlSeo:
          itemsEducativos.node.contenido.urlSeo !== null
            ? itemsEducativos.node.contenido.urlSeo.toLowerCase()
            : null,
        textoCallToActionBite:
          itemsEducativos.node.contenido.textoCallToActionBite,
        tituloCorto: itemsEducativos.node.contenido.tituloCorto,
        textoIntroductorio: itemsEducativos.node.contenido.textoIntroductorio,
        descripcioncorta: itemsEducativos.node.contenido.descripcioncorta,
        updatedAt: itemsEducativos.node.contenido.updatedAt,
        categoriaCliente: itemsEducativos.node.contenido.categoriaCliente
          ? itemsEducativos.node.contenido.categoriaCliente
          : subcategoryDefault,
        category: [categoryEducativo],
        type: itemsEducativos.node.contenido.tipoDeCliente,
        tipoBite: 'educativo',
        relevancia: itemsEducativos.node.contenido.relevancia,
        generoEdad: itemsEducativos.node.contenido.edadygenero
      })
    }
    return null
  })
  sortData(arrayNewEducation)
  return arrayNewEducation
}

export const setArrayBites = (edgesDataContentful, biteType) => {
  let newArray = []
  const arrayNoEmpty = edgesDataContentful.filter(edge => edge.node.contenido)
  arrayNoEmpty.forEach(edge => {
    edge.node.contenido.forEach(contenido =>
      newArray.push({
        imagenpequena: contenido.imagenpequena,
        nombreImagen: contenido.imagenpequena
          ? contenido.imagenpequena.description === ''
            ? contenido.imagenpequena.title
            : contenido.imagenpequena.description
            ? contenido.imagenpequena.description
            : 'image por defecto'
          : 'image por defecto',
        urlSeo:
          contenido.urlSeo !== null ? contenido.urlSeo.toLowerCase() : null,
        textoCallToActionBite: contenido.textoCallToActionBite,
        tituloCorto: contenido.tituloCorto,
        textoIntroductorio: contenido.textoIntroductorio,
        descripcioncorta: contenido.descripcioncorta,
        updatedAt: contenido.updatedAt,
        categoriaCliente: null,
        category: edge.node.lineaDeProducto,
        type: contenido.tipoDeCliente,
        tipoBite: biteType,
        relevancia: contenido.relevancia,
        generoEdad: contenido.edadygenero
      })
    )
  })
  sortData(newArray)
  return newArray
}

export const setArrayTalento = arrayOldTalento => {
  let arrayNewTalemto = []
  arrayOldTalento.map(itemsTalentos => {
    if (itemsTalentos.node.contenido[0]) {
      arrayNewTalemto.push({
        imagenpequena: itemsTalentos.node.contenido[0].imagenpequena,
        nombreImagen: itemsTalentos.node.contenido[0].imagenpequena
          ? itemsTalentos.node.contenido[0].imagenpequena.description === ''
            ? itemsTalentos.node.contenido[0].imagenpequena.title
            : itemsTalentos.node.contenido[0].imagenpequena.description
            ? itemsTalentos.node.contenido[0].imagenpequena.description
            : 'image por defecto'
          : 'image por defecto',
        urlSeo:
          itemsTalentos.node.contenido[0].urlSeo !== null
            ? itemsTalentos.node.contenido[0].urlSeo.toLowerCase()
            : null,
        textoCallToActionBite:
          itemsTalentos.node.contenido[0].textoCallToActionBite,
        tituloCorto: itemsTalentos.node.contenido[0].tituloCorto,
        textoIntroductorio: itemsTalentos.node.contenido[0].textoIntroductorio,
        descripcioncorta: itemsTalentos.node.contenido[0].descripcioncorta,
        updatedAt: itemsTalentos.node.contenido[0].updatedAt,
        categoriaCliente: null,
        category: itemsTalentos.node.lineaDeProducto,
        type: itemsTalentos.node.contenido[0].tipoDeCliente,
        tipoBite: 'Talento',
        relevancia: itemsTalentos.node.contenido[0].relevancia,
        generoEdad: itemsTalentos.node.contenido[0].edadygenero
      })
    }
    return null
  })
  sortData(arrayNewTalemto)
  return arrayNewTalemto
}

export const setArrayMarketplace = arrayOldMarketplace => {
  let arrayNewMarketplace = []
  arrayOldMarketplace.map(itemsMarketplace => {
    if (itemsMarketplace.node.contenido) {
      arrayNewMarketplace.push({
        imagenpequena: itemsMarketplace.node.contenido.imagenpequena,
        nombreImagen: itemsMarketplace.node.contenido.imagenpequena
          ? itemsMarketplace.node.contenido.imagenpequena.description === ''
            ? itemsMarketplace.node.contenido.imagenpequena.title
            : itemsMarketplace.node.contenido.imagenpequena.description
            ? itemsMarketplace.node.contenido.imagenpequena.description
            : 'image por defecto'
          : 'image por defecto',
        urlSeo:
          itemsMarketplace.node.contenido.urlSeo !== null
            ? itemsMarketplace.node.contenido.urlSeo.toLowerCase()
            : null,
        textoCallToActionBite:
          itemsMarketplace.node.contenido.textoCallToActionBite,
        tituloCorto: itemsMarketplace.node.contenido.tituloCorto,
        textoIntroductorio: itemsMarketplace.node.contenido.textoIntroductorio,
        descripcioncorta: itemsMarketplace.node.contenido.descripcioncorta,
        updatedAt: itemsMarketplace.node.contenido.updatedAt,
        categoriaCliente: null,
        category: itemsMarketplace.node.lineaDeProducto,
        type: itemsMarketplace.node.contenido.tipoDeCliente,
        tipoBite: 'OfertaComplementaria',
        relevancia: itemsMarketplace.node.contenido.relevancia,
        generoEdad: itemsMarketplace.node.contenido.edadygenero
      })
    }
    return null
  })
  sortData(arrayNewMarketplace)
  return arrayNewMarketplace
}

export const generateDataBite = (
  dataContentful,
  stateCategory,
  props,
  mapCategories,
  pageContext
) => {
  let beneficios = generateCleanData(
    setArrayFeatured(
      props.data
        ? props.data.allContentfulBeneficio
          ? props.data.allContentfulBeneficio.edges
          : []
        : [],
      'beneficio'
    ).slice(),
    'Relevancia Alta'
  )

  let campania = generateCleanData(
    setArrayCapania(
      dataContentful
        ? dataContentful.allContentfulCampana
          ? dataContentful.allContentfulCampana.edges
          : []
        : []
    ).slice(),
    'Relevancia Alta'
  )

  let novedades = generateCleanData(
    setArrayFeatured(
      dataContentful
        ? dataContentful.allContentfulNovedad
          ? dataContentful.allContentfulNovedad.edges
          : []
        : [],
      'novedad'
    ).slice(),
    'Relevancia Alta'
  )

  let producto = setArrayProduct(
    dataContentful
      ? dataContentful.allContentfulProducto
        ? dataContentful.allContentfulProducto.edges
        : []
      : []
  ).slice()

  let actualidad = setArrayActualidad(
    dataContentful
      ? dataContentful.allContentfulActualidadDeInversiones
        ? dataContentful.allContentfulActualidadDeInversiones.edges
        : []
      : []
  ).slice()

  let educativo = setArrayEducativo(
    dataContentful
      ? dataContentful.allContentfulContenidoEducativo
        ? dataContentful.allContentfulContenidoEducativo.edges
        : []
      : []
  ).slice()

  let talento = setArrayTalento(
    dataContentful
      ? dataContentful.allContentfulOfertaDiferencial
        ? dataContentful.allContentfulOfertaDiferencial.edges
        : []
      : []
  ).slice()

  let marketplace = setArrayMarketplace(
    dataContentful?.allContentfulOfertaComplementaria?.edges || []
  ).slice()

  let corporativo = setArrayBites(
    dataContentful
      ? dataContentful.allContentfulCorporativoYAccionistas
        ? dataContentful.allContentfulCorporativoYAccionistas.edges
        : []
      : [],
    'CorporativoYAccionistas'
  ).slice()

  let leyesdecretos = setArrayBites(
    dataContentful
      ? dataContentful.allContentfulLeyesYDecretos
        ? dataContentful.allContentfulLeyesYDecretos.edges
        : []
      : [],
    'LeyesYDecretos'
  ).slice()

  producto = producto.filter(itemP => itemP.relevancia === 'Relevancia Alta')

  actualidad = actualidad.filter(
    itemP => itemP.relevancia === 'Relevancia Alta'
  )

  educativo = educativo.filter(itemE => itemE.relevancia === 'Relevancia Alta')

  talento = talento.filter(itemT => itemT.relevancia === 'Relevancia Alta')

  marketplace = marketplace.filter(
    marketplaceItem => marketplaceItem.relevancia === 'Relevancia Alta'
  )

  corporativo = corporativo.filter(
    itemT => itemT.relevancia === 'Relevancia Alta'
  )

  leyesdecretos = leyesdecretos.filter(
    itemT => itemT.relevancia === 'Relevancia Alta'
  )

  novedades = novedades.filter(itemN => itemN.relevancia === 'Relevancia Alta')

  beneficios = beneficios.filter(
    itemB => itemB.relevancia === 'Relevancia Alta'
  )

  campania = campania.filter(itemC => itemC.relevancia === 'Relevancia Alta')

  const productoFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    producto
  )

  const actualidadFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    actualidad
  )

  const talentoFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    null,
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    talento
  )

  const marketplaceFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    null,
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    marketplace
  )

  const corporativoFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    null,
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    corporativo
  )

  const leyesdecretosFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    null,
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    leyesdecretos
  )

  const educativoFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    educativo
  )

  const campaniaFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    campania
  )

  const beneficioFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    beneficios
  )

  const novedadFilter = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    novedades
  )

  let dataFinal = educativoFilter
    .concat(productoFilter)
    .concat(beneficioFilter)
    .concat(campaniaFilter)
    .concat(novedadFilter)
    .concat(actualidadFilter)
    .concat(talentoFilter)
    .concat(marketplaceFilter)
    .concat(corporativoFilter)
    .concat(leyesdecretosFilter)

  if (
    pageContext?.line === 'Pensión' &&
    stateCategory?.category === 'Pensión' &&
    stateCategory?.subcategory === 'pension-vejez'
  ) {
    const ageProfile = stateCategory?.age
    const genreProfile = stateCategory?.gender
    const dataFinalNull = dataFinal.filter(item => item.generoEdad === null)
    const dataFinalNotNull = dataFinal.filter(item => item.generoEdad !== null)
    const dataFinalByAgeGenre = dataFinalNotNull.filter(itemAge => {
      const listbyGenre = itemAge.generoEdad.filter(ga =>
        ga.includes(genreProfile === 'H' ? 'Masculino' : 'Femenino')
      )
      const listbyAge = listbyGenre.filter(age => {
        const ages = age.split(' ')[0]
        const ageInf = Number(ages.split('-')[0])
        const ageSup =
          genreProfile === 'H'
            ? Number(ages.split('-')[1]) >= 62
              ? 100
              : Number(ages.split('-')[1])
            : Number(ages.split('-')[1]) >= 57
            ? 100
            : Number(ages.split('-')[1])
        return ageProfile >= ageInf && ageProfile <= ageSup
      })
      return listbyAge.length > 0
    })

    dataFinal = dataFinalNull.concat(dataFinalByAgeGenre)
  }

  sortData(dataFinal)
  dataFinal = dataFinal.length > 0 ? dataFinal.splice(0, 6) : dataFinal
  return dataFinal
}

export const generateDataBiteYoucantmiss = (
  dataContentful,
  stateCategory,
  mapCategories,
  state,
  indexProduct,
  pageContext
) => {
  let producto = setArrayProduct(
    dataContentful
      ? dataContentful.allContentfulProducto
        ? dataContentful.allContentfulProducto.edges
        : []
      : []
  ).slice()

  let actualidad = setArrayActualidad(
    dataContentful
      ? dataContentful.allContentfulActualidadDeInversiones
        ? dataContentful.allContentfulActualidadDeInversiones.edges
        : []
      : []
  ).slice()

  const servicio = []

  let educativo = setArrayEducativo(
    dataContentful
      ? dataContentful.allContentfulContenidoEducativo
        ? dataContentful.allContentfulContenidoEducativo.edges
        : []
      : []
  ).slice()

  let talento = setArrayTalento(
    dataContentful
      ? dataContentful.allContentfulOfertaDiferencial
        ? dataContentful.allContentfulOfertaDiferencial.edges
        : []
      : []
  ).slice()

  let marketplace = setArrayMarketplace(
    dataContentful?.allContentfulOfertaComplementaria?.edges || []
  ).slice()

  let beneficio = generateCleanData(
    setArrayFeatured(
      dataContentful
        ? dataContentful.allContentfulBeneficio
          ? dataContentful.allContentfulBeneficio.edges
          : []
        : [],
      'beneficio'
    ).slice(),
    'Relevancia Media'
  )

  let campania = setArrayCapania(
    dataContentful
      ? dataContentful.allContentfulCampana
        ? dataContentful.allContentfulCampana.edges
        : []
      : []
  ).slice()

  let novedad = generateCleanData(
    setArrayFeatured(
      dataContentful
        ? dataContentful.allContentfulNovedad
          ? dataContentful.allContentfulNovedad.edges
          : []
        : [],
      'novedad'
    ).slice(),
    'Relevancia Media'
  )

  let corporativo = setArrayBites(
    dataContentful
      ? dataContentful.allContentfulCorporativoYAccionistas
        ? dataContentful.allContentfulCorporativoYAccionistas.edges
        : []
      : [],
    'CorporativoYAccionistas'
  ).slice()

  let leyesdecretos = setArrayBites(
    dataContentful
      ? dataContentful.allContentfulLeyesYDecretos
        ? dataContentful.allContentfulLeyesYDecretos.edges
        : []
      : [],
    'LeyesYDecretos'
  ).slice()

  producto = producto.filter(
    itemP =>
      itemP.relevancia === 'Relevancia Baja' ||
      itemP.relevancia === 'Relevancia Media'
  )

  novedad = novedad.filter(
    itemP =>
      itemP.relevancia === 'Relevancia Baja' ||
      itemP.relevancia === 'Relevancia Media'
  )

  campania = campania.filter(
    itemP =>
      itemP.relevancia === 'Relevancia Baja' ||
      itemP.relevancia === 'Relevancia Media'
  )

  beneficio = beneficio.filter(
    itemP =>
      itemP.relevancia === 'Relevancia Baja' ||
      itemP.relevancia === 'Relevancia Media'
  )

  educativo = educativo.filter(
    itemE =>
      itemE.relevancia === 'Relevancia Baja' ||
      itemE.relevancia === 'Relevancia Media'
  )

  talento = talento.filter(
    itemT =>
      itemT.relevancia === 'Relevancia Baja' ||
      itemT.relevancia === 'Relevancia Media'
  )

  marketplace = marketplace.filter(
    marketplaceItem =>
      marketplaceItem.relevancia === 'Relevancia Baja' ||
      marketplaceItem.relevancia === 'Relevancia Media'
  )

  corporativo = corporativo.filter(
    itemT =>
      itemT.relevancia === 'Relevancia Baja' ||
      itemT.relevancia === 'Relevancia Media'
  )

  leyesdecretos = leyesdecretos.filter(
    itemT =>
      itemT.relevancia === 'Relevancia Baja' ||
      itemT.relevancia === 'Relevancia Media'
  )

  actualidad = actualidad.filter(
    itemE =>
      itemE.relevancia === 'Relevancia Baja' ||
      itemE.relevancia === 'Relevancia Media'
  )

  const isInversion = validateCurrentLine(
    pageContext
      ? {
          category: pageContext.line,
          type: pageContext.cliente
        }
      : state.indexDBUser
  )

  const dataInitialProduct = isInversion
    ? [
        producto,
        servicio,
        educativo,
        actualidad,
        talento,
        marketplace,
        leyesdecretos,
        corporativo,
        campania,
        novedad,
        beneficio
      ]
    : [
        producto,
        servicio,
        educativo,
        talento,
        marketplace,
        leyesdecretos,
        corporativo,
        campania,
        novedad,
        beneficio
      ]

  const dataFinal = []

  dataInitialProduct.map(itemsProducts => {
    itemsProducts.map(x => {
      dataFinal.push(x)
      return null
    })
    return null
  })

  let dataFilterFinal = []

  dataFilterFinal = filterItems(
    mapCategories(
      dataContentful,
      pageContext ? pageContext.line : stateCategory?.category
    ),
    mapCategories(
      dataContentful,
      pageContext
        ? pageContext.line === stateCategory?.category
          ? stateCategory?.subcategory
          : null
        : null
    ),
    mapCategories(
      dataContentful,
      pageContext ? pageContext.cliente : stateCategory?.type
    ),
    dataFinal
  )

  let dataProductIndex = []
  let dataeducativoIndex = []
  let dataactualidadIndex = []
  let dataTalentoIndex = []
  let dataMarketplaceIndex = []
  let dataCorporativoIndex = []
  let dataLeyesDecretoIndex = []
  let dataBeneficioIndex = []
  let dataNovedadIndex = []
  let dataCampanaIndex = []

  dataFilterFinal.map(items => {
    if (items.tipoBite === 'producto') {
      dataProductIndex.push(items)
    }
    if (items.tipoBite === 'campañas') {
      dataCampanaIndex.push(items)
    }
    if (items.tipoBite === 'beneficio') {
      dataBeneficioIndex.push(items)
    }
    if (items.tipoBite === 'novedad') {
      dataNovedadIndex.push(items)
    }
    if (items.tipoBite === 'educativo') {
      dataeducativoIndex.push(items)
    }
    if (items.tipoBite === 'actualidad') {
      dataactualidadIndex.push(items)
    }
    if (items.tipoBite === 'Talento') {
      dataTalentoIndex.push(items)
    }
    if (items.tipoBite === 'Marketplace') {
      dataMarketplaceIndex.push(items)
    }
    if (items.tipoBite === 'CorporativoYAccionistas') {
      dataCorporativoIndex.push(items)
    }
    if (items.tipoBite === 'LeyesYDecretos') {
      dataLeyesDecretoIndex.push(items)
    }
    return null
  })

  if (
    pageContext?.line === 'Pensión' &&
    stateCategory?.category === 'Pensión' &&
    stateCategory?.subcategory === 'pension-vejez'
  ) {
    const ageProfile = stateCategory?.age
    const genreProfile = stateCategory?.gender
    const dataFinalNull = dataFilterFinal.filter(
      item => item.generoEdad === null
    )
    const dataFinalNotNull = dataFilterFinal.filter(
      item => item.generoEdad !== null
    )
    const dataFinalByAgeGenre = dataFinalNotNull.filter(itemAge => {
      const listbyGenre = itemAge.generoEdad.filter(ga =>
        ga.includes(genreProfile === 'H' ? 'Masculino' : 'Femenino')
      )
      const listbyAge = listbyGenre.filter(age => {
        const ages = age.split(' ')[0]
        const ageInf = Number(ages.split('-')[0])
        const ageSup =
          genreProfile === 'H'
            ? Number(ages.split('-')[1]) >= 62
              ? 100
              : Number(ages.split('-')[1])
            : Number(ages.split('-')[1]) >= 57
            ? 100
            : Number(ages.split('-')[1])
        return ageProfile >= ageInf && ageProfile <= ageSup
      })
      return listbyAge.length > 0
    })

    dataFilterFinal = dataFinalNull.concat(dataFinalByAgeGenre)
  }

  let arrayIndex = [
    { nombre: 'producto', tamaño: dataProductIndex.length },
    { nombre: 'educacion', tamaño: dataeducativoIndex.length },
    { nombre: 'actualidad', tamaño: dataactualidadIndex.length },
    { nombre: 'talento', tamaño: dataTalentoIndex.length },
    { nombre: 'marketplace', tamaño: dataMarketplaceIndex.length },
    { nombre: 'beneficio', tamaño: dataBeneficioIndex.length },
    { nombre: 'novedad', tamaño: dataNovedadIndex.length },
    { nombre: 'campañas', tamaño: dataCampanaIndex.length },
    { nombre: 'CorporativoYAccionistas', tamaño: dataCorporativoIndex.length },
    { nombre: 'LeyesYDecretos', tamaño: dataLeyesDecretoIndex.length }
  ]
  indexProduct = arrayIndex
  sortData(dataFilterFinal)
  return dataFilterFinal
}
