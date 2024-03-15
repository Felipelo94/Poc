import { graphql, withPrefix } from 'gatsby'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import BiteAhorro1 from '../assets/images/AHORRO/Bite-1.jpg'
import BiteAhorro2 from '../assets/images/AHORRO/Bite-2.jpg'
import BiteAhorro3 from '../assets/images/AHORRO/Bite-3.jpg'
import Bite1 from '../assets/images/CESANTIAS/Bite-1.jpg'
import Bite2 from '../assets/images/CESANTIAS/Bite-2.jpg'
import Bite3 from '../assets/images/CESANTIAS/Bite-3.jpg'
import BiteInv1 from '../assets/images/INVERSION/Bite-1.jpg'
import BiteInv2 from '../assets/images/INVERSION/Bite-2.jpg'
import BiteInv3 from '../assets/images/INVERSION/Bite-3.jpg'
import BitePension1 from '../assets/images/PENSION/Bite-1.jpg'
import BitePension2 from '../assets/images/PENSION/Bite-2.jpg'
import BitePension3 from '../assets/images/PENSION/Bite-3.jpg'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import ButtonShare from '../components/atoms/button-share/button-share'
import InternalBites from '../components/atoms/internal-bite/internal-bite'
import Like from '../components/atoms/like/like'
import { ContainerFlexBox } from '../components/FlexBox/FlexBox'
import ComponentShare from '../components/molecules/component-share/component-share'
import ContentProxy from '../components/molecules/content-proxy/content-proxy'
import Footer from '../components/molecules/footer/footer'
import HeaderInternal from '../components/molecules/header-internal/header-internal'
import Header from '../components/molecules/header/header'
import mapCategories from '../const/dictionary/map-categories'
import options from '../const/dictionary/options-more-content.json'
import {
  getSettingsBites,
  getSettingsBitesDark,
  getSettingsResponsiveStrett,
  getSettingsResponsiveStrettDark
} from '../const/dictionary/settingCarruselMobile'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import useInternalPathPages from '../hooks/useInternalPathPages'
import useSetTypeUserAndCategoryState from '../hooks/useSetTypeUserAndCategoryState'
import { CabeceraContenido } from '../models/contenidos/cabecera-contenido.models'
import { CallToAction } from '../models/contenidos/call-to-action.models'
import { Contenido } from '../models/contenidos/contenido.models'
import { Imagen } from '../models/contenidos/imagen.models'
import { SeoModel } from '../models/contenidos/seo-model.models'
import { get } from '../services/service-general/service-general'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { validateCurrentLine } from '../utils/bite-caracter'
import { getSubcategoryPensionFromBiteOne as getSubcategoryPension } from '../utils/categories-internal-content-page-utils'
import { contentScript } from '../utils/contentScript'
import { filterCategoria } from '../utils/filter-categoria'
import { getRandom } from '../utils/getRandom'
import { mapParagraphtoParrafo } from '../utils/map-paragraph-to-parrafo'
import { getDataMoreContent } from '../utils/moreContent'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { selectTheme } from '../utils/select-theme'
import useGetUserInfoIndexDBState from './../hooks/useGetUserInfoIndexDBState'
import CallToActionComponent from '../components/molecules/call-to-action/call-to-action'
import { getSizeScreen } from '../utils/handleResize'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import Seo from '../components/internal-pages/common/seo/seo'
import { RentabilidadHeaderInternal } from '../components/organisms/table-rentabilidades-container/rentabilidad-header-internal/rentabilidad-header-internal'
import './internal-content.scss'

const lineadenegocioPensionesObligatorias = [
  {
    nombre: 'Pensiones Obligatorias'
  }
]

const lineadenegocioCesantias = [
  {
    nombre: 'Cesantías'
  }
]

const lineadenegocioInversion = [
  {
    nombre: 'Inversión'
  }
]

const subcategoryDefault = [
  {
    descripcion: 'Cesante',
    lineadenegocio: lineadenegocioCesantias,
    contentful_id: '5fP153BoelxfRsusePVnBU'
  },
  {
    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Empleado'
  },
  {
    descripcion: 'Independiente',
    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
    lineadenegocio: lineadenegocioCesantias
  },
  {
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por invalidez',
    contentful_id: '7lDDi92WQvINHDoyppiGG1'
  },
  {
    contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por sobrevivencia'
  },
  {
    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por vejez'
  },
  {
    contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Soy pensionado'
  },
  {
    lineadenegocio: lineadenegocioInversion,
    descripcion: 'Conozco de Inversiones',
    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
  },
  {
    descripcion: 'Estoy Aprendiendo',
    contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
    lineadenegocio: lineadenegocioInversion
  }
]

let contador = 0
const ImagenesCes = [
  {
    image: Bite1
  },
  {
    image: Bite2
  },
  {
    image: Bite3
  }
]

const ImagenesInv = [
  {
    image: BiteInv1
  },
  {
    image: BiteInv2
  },
  {
    image: BiteInv3
  }
]

const ImagenesAhorro = [
  {
    image: BiteAhorro1
  },
  {
    image: BiteAhorro2
  },
  {
    image: BiteAhorro3
  }
]

const ImagenesPension = [
  {
    image: BitePension1
  },
  {
    image: BitePension2
  },
  {
    image: BitePension3
  }
]

let LayoutInternalContentPage = ({
  location,
  data,
  publico,
  dispatch,
  accessibility,
  pageContext,
  userInfoPageContext
}) => {
  const getDataRandom = param => {
    return Math.floor(getRandom() * param.length)
  }

  const pathPages = useInternalPathPages()
  const defaultTypeUser = pageContext.cliente
  const defaultCategoryUserPageContext = pageContext.line
  const defaultSubCategoryUserPageContext = pageContext?.sublinea ?? ''
  const defaultSubcategoryUser =
    defaultCategoryUserPageContext === 'Pensión'
      ? getSubcategoryPension(pageContext?.bites?.biteOne)
      : defaultSubCategoryUserPageContext
  const userInfo = useGetUserInfoIndexDBState()
  const widthScreen = useCurrentWidth()
  const [dataUtils, setdataUtils] = useState([])
  const [isShare, setIsShare] = useState(false)
  const [locationBread, setlocationBread] = useState(location)
  const [typeBiteValue, settypeBiteValue] = useState(pageContext.type)
  const [currentId, setcurrentId] = useState(pageContext.id)
  const [onload, setOnload] = useState(false)
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [subtitulo, setSubtitulo] = useState([])
  const [parrafos, setParrafos] = useState([])
  const [subtitulo2, setSubtitulo2] = useState([])
  const [parrafos2, setParrafos2] = useState([])
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [indexBite, setIndexBite] = useState('')
  const refSlider = useRef()
  const refSliderComponet = useRef()

  const setRef = useCallback(
    node => {
      if (node) {
        node.slickGoTo(parseInt(indexBite), true)
      }

      refSlider.current = node
    },
    [indexBite]
  )

  const clickSlider = tipo => {
    if (tipo === 1) {
      refSlider.current.slickPrev()
    } else {
      refSlider.current.slickNext()
    }
  }

  const clickSliderCalles = tipo => {
    if (tipo === 1) {
      refSliderComponet.current.slickPrev()
    } else {
      refSliderComponet.current.slickNext()
    }
  }

  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : ''
  }

  useSetTypeUserAndCategoryState(pageContext.cliente, pageContext.line)

  const profilingUserPageContext = {
    category: pageContext.line,
    type: pageContext.cliente
  }
  const dataProduct = useLineServiceComplete(profilingUserPageContext)
  let category_id = mapCategories(dataProduct, pageContext.line)
  let type_id = mapCategories(dataProduct, pageContext.cliente)
  let SubCategory_id = mapCategories(dataProduct, pageContext.sublinea)

  const getImagesBite = () => {
    switch (pageContext.line) {
      case 'Inversión':
        return ImagenesInv
      case 'Ahorro':
        return ImagenesAhorro
      case 'Pensión':
        return ImagenesPension
      default:
        return ImagenesCes
    }
  }
  const Imagenes = getImagesBite()

  if (contador <= 0) {
    contador += 1
    setdataUtils(
      dataProduct &&
        getDataMoreContent(
          dataProduct,
          pageContext.id,
          category_id,
          SubCategory_id,
          type_id,
          null,
          pageContext.bites,
          pageContext.line
        )
    )
  }

  useEffect(() => {
    setdataUtils(
      dataProduct &&
        getDataMoreContent(
          dataProduct,
          pageContext.id,
          category_id,
          SubCategory_id,
          type_id,
          null,
          pageContext.bites,
          pageContext.line
        )
    )
  }, [category_id, SubCategory_id, type_id])

  const [isSnack, setisSnack] = useState(false)
  var isBrowser = typeof window !== 'undefined'

  const generateSeoTags = (tittleSeo, metaSeo, keyworodsSeo, image) => {
    const keyWordsDefine = [{ name: `keywords`, content: keyworodsSeo }]

    return new SeoModel(tittleSeo, metaSeo, keyWordsDefine, image)
  }

  const mapContentFulToInternal = () => {
    const content = select
      ? select.node
      : data.allContentfulContenido.edges[0].node

    const cabecera = new CabeceraContenido(
      content.titulo,
      content.tituloCorto !== null ? content.tituloCorto : '',
      content.textoCierre !== null ? content.textoCierre : '',
      content.nombreCallToActionTextoCierre !== null
        ? content.nombreCallToActionTextoCierre
        : '',
      content.linkCallToActionTextoCierre !== null
        ? content.linkCallToActionTextoCierre
        : '',
      content.tiempoDeLectura,
      publico,
      content.descripcioncorta !== null ? content.descripcioncorta : '',
      content.subtitulo !== null ? content.subtitulo : ''
    )

    const imagenes =
      content.imagenes !== null
        ? content.imagenes.map(
            image =>
              new Imagen(
                image?.fluid?.src ?? image?.file?.url ?? '',
                image.description === '' ? image.title : image.description,
                image.title
              )
          )
        : []

    const banners =
      content.imagenes !== null
        ? content.imagenes.map(
            image =>
              new Imagen(
                image.file.url,
                image.description === '' ? image.title : image.description,
                image.title
              )
          )
        : []

    const imagenesMobile =
      content.ImagenMobile !== null
        ? new Imagen(
            content.ImagenMobile ? content.ImagenMobile.file.url : '',
            content.ImagenMobile
              ? content.ImagenMobile.description === ''
                ? content.ImagenMobile.title
                : content.ImagenMobile.description
              : '',
            content.ImagenMobile ? content.ImagenMobile.title : ''
          )
        : []

    const dataDefualtContenful = content.cuerpocontenido
      ? content.cuerpocontenido.json
      : null
    const dataParrafos = content.cuerpocontenido
      ? content.cuerpocontenido.json.content.slice()
      : null
    const parrafos = content.cuerpocontenido
      ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful, 'heading-2')
      : []

    const dataDefualtContenful2 = content.cuerpocontenido2
      ? content.cuerpocontenido2.json
      : null
    const dataParrafos2 = content.cuerpocontenido2
      ? content.cuerpocontenido2.json.content.slice()
      : null
    const parrafos2 = content.cuerpocontenido2
      ? mapParagraphtoParrafo(dataParrafos2, dataDefualtContenful2, 'heading-2')
      : []

    const callToAction = new CallToAction(
      content.descripcioncalltoaction,
      content.textoCallToAction,
      content.linkCallToAction
    )

    const callToAction2 = new CallToAction(
      '',
      content.TextoCallToActionSuperior,
      content.LinkCallToActionSuperior
    )

    const seoElements = generateSeoTags(
      pageContext.metatittleSeo
        ? pageContext.metatittleSeo
        : content.metatittleSeo
        ? content.metatittleSeo
        : content.tituloCorto !== null
        ? content.tituloCorto
        : '',

      pageContext.metadescripcionSeo
        ? pageContext.metadescripcionSeo
        : content.metadescripcionSeo
        ? content.metadescripcionSeo.metadescripcionSeo
        : '',

      pageContext.keywordsSeo
        ? pageContext.keywordsSeo
        : content.keywordsSeo
        ? content.keywordsSeo.keywordsSeo
        : '',

      pageContext.metaimagenseo
        ? pageContext.metaimagenseo
        : content.imagenpequena
        ? content.imagenpequena.file.url
        : ''
    )

    const contenido = new Contenido(
      content.contentful_id,
      cabecera,
      parrafos,
      parrafos2,
      imagenes,
      imagenesMobile,
      callToAction,
      callToAction2,
      content.listadoVideos,
      seoElements,
      content.infografico,
      content.infograficoMobile,
      content.tipoDeCliente,
      banners,
      content.Widget,
      content.podcast
    )
    return contenido
  }

  const resultUser = user => {
    setindexDBUserName(user)
    setdataUtils(
      dataProduct &&
        getDataMoreContent(
          dataProduct,
          pageContext.id,
          category_id,
          SubCategory_id,
          type_id,
          user,
          pageContext.bites,
          pageContext.line
        )
    )
  }

  const createSubCategoria = data => {
    let items = {}
    data?.map(
      x =>
        (items['subcategoria'] = items['subcategoria']
          ? items['subcategoria'].concat(' ', x.contentful_id)
          : (items['subcategoria'] = x.contentful_id))
    )
    return items
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch, category_id, SubCategory_id, type_id])

  function filterItems(tema, data) {
    const filterData = data.filter(function(item) {
      if (tema) {
        if (item.node.Tema) {
          return (
            item.node.Tema.filter(
              temas => tema.indexOf(temas.contentful_id) >= 0
            ).length > 0
          )
        }
      }
    })
    return filterData
  }

  const medificacionUrls = data => {
    data.map(
      x =>
        (x.node.urlSeo = `${
          pageContext.cliente
            ? pageContext.cliente.length
              ? 'all'
              : pageContext.cliente === 1
              ? 'persona'
              : 'empresa'
            : null
        }/${getIdDiv(
          pageContext.line ? pageContext.line.toLowerCase() : null
        )}/${getIdDiv(x.node.urlSeo?.toLowerCase())}`)
    )
    return data
  }

  useEffect(() => {
    medificacionUrls(data.allContentfulContenido.edges)
  }, [])

  const sortData = services => {
    const categoriaBite = mapCategories(dataProduct, pageContext.line)
    const typeBite = mapCategories(dataProduct, pageContext.cliente)
    const dataFilter = data.allContentfulContenido.edges
    let dataFinalBites

    const subcategoriaBite = createSubCategoria(
      pageContext.bites.biteOne?.subcategoria
    )?.subcategoria

    const dataCompleta = pageContext.bites.biteOther.concat(
      pageContext.bites.biteOne
    )

    dataFilter.map(i => {
      const dataCategoria = dataCompleta.filter(
        word => word.id === i.node.contentful_id
      )

      i.node.category = dataCategoria[0] ? dataCategoria[0].category : []
      i.node.categoriaCliente = i.node.categoriaCliente
        ? i.node.categoriaCliente.length > 0
          ? i.node.categoriaCliente
          : subcategoryDefault
        : subcategoryDefault
      i.node.urlSeo = i.node.urlSeo
        ? i.node.urlSeo.toLowerCase()
        : i.node.urlSeo
    })

    let dataFilterBiteCategory = filterCategoria(
      categoriaBite,
      dataFilter,
      subcategoriaBite,
      typeBite
    )

    const filterTema = pageContext.bites.biteOne.tema?.filter(item => {
      if (categoriaBite && typeBite) {
        return (
          item.lineaDeProducto.filter(
            post => categoriaBite.indexOf(post.contentful_id) >= 0
          ).length > 0 &&
          item.tipoDeCliente.filter(
            cliente => typeBite.indexOf(cliente.contentful_id) >= 0
          ).length > 0
        )
      }
    })

    const idFilterTema = createSubCategoria(filterTema)?.subcategoria

    let dataFilterBite = filterItems(idFilterTema, dataFilterBiteCategory)
    let ageProfile
    let genreProfile
    let isPensionVejez = false
    let agesContent = null
    if (indexDBUserName !== '') {
      ageProfile = indexDBUserName.age
      genreProfile = indexDBUserName.gender
      isPensionVejez =
        indexDBUserName.category === 'Pensión' &&
        indexDBUserName.subcategory === 'pension-vejez'
    } else {
      const firtsItem = dataFilterBite[0]
      if (firtsItem) {
        agesContent = firtsItem.node.edadygenero
        const subcateryPensionVejez =
          firtsItem.node.categoriaCliente &&
          firtsItem.node.categoriaCliente !== null
            ? firtsItem.node.categoriaCliente.filter(
                sub => sub.contentful_id === 'nCqE4RiPTxgo0ayMwnilO'
              )
            : []
        isPensionVejez = subcateryPensionVejez.length > 0
      }
    }
    if (isPensionVejez) {
      const dataFinalNull = dataFilterBite.filter(
        item => item.node.edadygenero === null
      )
      const dataFinalNotNull = dataFilterBite.filter(
        item => item.node.edadygenero !== null
      )
      let dataFinalByAgeGenre
      if (agesContent !== null) {
        dataFinalByAgeGenre = dataFinalNotNull.filter(itemAge => {
          let validateArray = false
          agesContent.map(item => {
            validateArray =
              itemAge.node.edadygenero.find(ga => ga === item) !== undefined
          })
          return validateArray
        })
      } else {
        dataFinalByAgeGenre = dataFinalNotNull.filter(itemAge => {
          const listbyGenre = itemAge.node.edadygenero.filter(ga =>
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
      }
      dataFilterBite = dataFinalByAgeGenre.concat(dataFinalNull)
    }

    const resultBite1 = dataFilter.filter(
      word => word.node.contentful_id === pageContext.id
    )

    const resultOtherBites = dataFilterBite.filter(
      word => word.node.contentful_id !== pageContext.id
    )

    let numeroOne = 0
    let numeroTwo = 0
    let i = 0

    while (i < 5 && numeroOne === numeroTwo) {
      numeroOne = getDataRandom(resultOtherBites)
      numeroTwo = getDataRandom(resultOtherBites)
      i++
    }

    const resultBite2 = resultOtherBites[numeroOne]

    const resultBite3 = resultOtherBites[numeroTwo]

    if (resultOtherBites.length === 0) {
      dataFinalBites = resultBite1
    } else if (resultOtherBites.length === 1) {
      dataFinalBites = resultBite1.concat(resultOtherBites[0])
      const {
        id,
        tipoDeCliente,
        categoriaCliente,
        category,
        urlSeo,
        Tema
      } = resultOtherBites[0].node
      if (resultOtherBites[0]) {
        pageContext.bites.biteTwo = {
          id: id,
          category: category,
          urlSeo: urlSeo,
          cliente: tipoDeCliente,
          tema: Tema,
          subcategoria: categoriaCliente
        }
      }
    } else if (resultOtherBites.length === 2) {
      dataFinalBites = resultBite1
        .concat(resultOtherBites[0])
        .concat(resultOtherBites[1])
      const {
        Tema,
        urlSeo,
        category,
        categoriaCliente,
        tipoDeCliente,
        id
      } = resultOtherBites[0].node

      if (resultOtherBites[0]) {
        pageContext.bites.biteTwo = {
          category: category,
          id: id,
          cliente: tipoDeCliente,
          urlSeo: urlSeo,
          subcategoria: categoriaCliente,
          tema: Tema
        }
      }
      if (resultOtherBites[1]) {
        pageContext.bites.biteThere = {
          tema: resultOtherBites[1].node.Tema,
          subcategoria: resultOtherBites[1].node.categoriaCliente,
          id: resultOtherBites[1].node.id,
          urlSeo: resultOtherBites[1].node.urlSeo,
          cliente: resultOtherBites[1].node.tipoDeCliente,
          category: resultOtherBites[1].node.category
        }
      }
    } else {
      dataFinalBites = resultBite1.concat(resultBite2).concat(resultBite3)
      if (resultBite2) {
        pageContext.bites.biteTwo = {
          subcategoria: resultBite2.node.categoriaCliente,
          tema: resultBite2.node.Tema,
          category: resultBite2.node.category,
          urlSeo: resultBite2.node.urlSeo,
          cliente: resultBite2.node.tipoDeCliente,
          id: resultBite2.node.id
        }
      }

      if (resultBite3) {
        pageContext.bites.biteThere = {
          id: resultBite3.node.id,
          urlSeo: resultBite3.node.urlSeo,
          tema: resultBite3.node.Tema,
          cliente: resultBite3.node.tipoDeCliente,
          category: resultBite3.node.category,
          subcategoria: resultBite3.node.categoriaCliente
        }
      }
    }

    const dataFinalBitesMenu = dataFinalBites.filter(word => word !== undefined)

    const resultFilterData = dataFinalBitesMenu

    return resultFilterData
  }

  const typeBite = itemSelect => {
    if (pageContext.bites) {
      let idSlect = ''
      if (itemSelect) {
        if (itemSelect.node) {
          idSlect = itemSelect?.node.contentful_id
        }
      }

      const dataFilterBite = groupsOriginal

      let arrayType = []

      dataFilterBite.biteOther.map(i => arrayType.push(i))
      arrayType.push(dataFilterBite.biteOne)

      const resultFilter = arrayType.filter(word => {
        if (word) {
          return word.id === idSlect
        }
      })
      const stateReesult = resultFilter[0]
        ? resultFilter[0].type
        : pageContext.type
      settypeBiteValue(stateReesult)
    }
  }

  const BitesDta = pageContext.bites

  let createData = sortData(indexDBUserName)

  const [dataBites, setDataites] = useState(createData)
  const [biteMain, setBiteMain] = useState(createData[0])
  const [select, setSelect] = useState(dataBites[0])
  const [groupsOriginal, setgroupsOriginal] = useState(BitesDta)

  const { category, subcategory, type } = indexDBUserName

  useEffect(() => {
    setDataites(createData)
    setBiteMain(createData[0])
  }, [indexDBUserName, category, subcategory, type])

  useEffect(() => {
    typeBite(select)
  }, [select])

  const getDataSnack = () => {
    setTimeout(() => {
      setOnload(true)
    }, 100)
    const validation = sessionStorage.getItem('dataPage') ? true : false
    const data = sessionStorage.getItem('dataPage')
    const dataParce = JSON.parse(data)
    if (validation && pageContext.id === dataParce.id) {
      const { isMain, bites, biteSelect, originalBite, indexActive } = dataParce
      setIndexBite(indexActive)
      if (isMain !== undefined) {
        if (!isMain) {
          setDataites(bites)
          setBiteMain(bites[0])
          setSelect(biteSelect)
          setgroupsOriginal(originalBite)
          setlocationBread(window.location)
          setcurrentId(biteSelect.node.contentful_id)
        }
      }
    } else {
      const stateObj = {
        id: select?.node.contentful_id,
        isMain: biteMain === select,
        bites: dataBites,
        biteSelect: select,
        originalBite: groupsOriginal,
        indexActive: 0
      }
      setIndexBite(0)
      sessionStorage.setItem('dataPage', JSON.stringify(stateObj))
    }
  }

  useEffect(() => {
    getDataSnack()
  }, [indexDBUserName, category, subcategory, type])

  if (typeof window !== 'undefined') {
    contentScript(withPrefix('/tittle-content.js'))
  }

  const clickBite = (itemSelect, index) => {
    const stateObj = {
      id: itemSelect?.node.contentful_id,
      isMain: biteMain === itemSelect,
      bites: dataBites,
      biteSelect: itemSelect,
      originalBite: groupsOriginal,
      indexActive: index
    }
    sessionStorage.setItem('dataPage', JSON.stringify(stateObj))
  }

  const getCategory = itemnode => {
    const nodeElement = itemnode['node'] ? itemnode.node : itemnode
    if (itemnode['node']) {
      const categories = nodeElement.categoriaCliente
        ? nodeElement.categoriaCliente.length > 0
          ? nodeElement.categoriaCliente[0].lineadenegocio
          : []
        : []
      return categories.length > 0 ? categories[0].nombre : 'Cesantias'
    } else if (nodeElement['category']) {
      if (nodeElement.category.length > 0) {
        return nodeElement.category[0].nombre
      } else {
        return nodeElement.category
      }
    } else {
      return nodeElement
    }
  }
  const getTypeNode = itemnode => {
    const nodeElement = itemnode
      ? itemnode['node']
        ? itemnode.node
        : itemnode
      : {}
    return nodeElement['tipoDeCliente']
      ? nodeElement.tipoDeCliente.length === 1
        ? nodeElement.tipoDeCliente[0].nombre === 'Afiliado'
          ? 'Persona'
          : 'Empresa'
        : 'Persona'
      : 'Persona'
  }
  const responsive = [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: dataBites
          ? dataBites.length <= 2
            ? dataBites.length
            : 3
          : 3,
        slidesToScroll: dataBites
          ? dataBites.length <= 2
            ? dataBites.length
            : 3
          : 3,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
  var configuracionBite = validateCurrentLine(indexDBUserName)
    ? getSettingsBitesDark({
        id: 'contendio-relevante',
        showArrow: dataBites.length > 1 && widthScreen <= 768,
        clickAction: clickSlider,
        isDarkInvert: validateCurrentLine(indexDBUserName),
        classContainerDots: 'carousel-container-section-dots-bites'
      })
    : getSettingsBites({
        id: 'contendio-relevante',
        showArrow: dataBites.length > 1 && widthScreen <= 768,
        clickAction: clickSlider,
        classContainerDots: 'carousel-container-section-dots-bites',
        isDarkInvert: validateCurrentLine(indexDBUserName)
      })

  var configuracionCalles = validateCurrentLine(indexDBUserName)
    ? getSettingsResponsiveStrettDark({
        id: 'contendio-relevante',
        showArrow: dataUtils
          ? dataUtils.length > 1 && widthScreen <= 768
          : false,
        clickAction: clickSliderCalles,
        isDarkInvert: validateCurrentLine(indexDBUserName)
      })
    : getSettingsResponsiveStrett({
        id: 'contendio-relevante',
        showArrow: dataUtils
          ? dataUtils.length > 1 && widthScreen <= 768
          : false,
        clickAction: clickSliderCalles,
        isDarkInvert: validateCurrentLine(indexDBUserName)
      })

  configuracionBite = {
    ...configuracionBite,
    responsive: responsive,
    variableWidth: widthScreen <= 550,
    className: widthScreen <= 550 ? 'slider variable-width' : null,
    adaptiveHeight: widthScreen <= 550 ? true : null
  }

  configuracionCalles = {
    ...configuracionCalles
  }

  const separateParagraphs = () => {
    if (mapContentFulToInternal().parrafos) {
      mapContentFulToInternal().parrafos.map((paragraph, index) =>
        paragraph.content.map(({ nodeType }, i) => {
          if (index === 0) {
            if (i === 0) {
              if (mapContentFulToInternal().parrafos.length === 1) {
                setSubtitulo(null)
                setParrafos(mapContentFulToInternal().parrafos)
              } else if (nodeType.indexOf('heading') >= 0) {
                setSubtitulo(null)
                setParrafos(mapContentFulToInternal().parrafos)
              } else {
                const parrafosEliminado = mapContentFulToInternal().parrafos.splice(
                  0,
                  1
                )
                setSubtitulo(parrafosEliminado)
                const parrafosEliminados = mapContentFulToInternal().parrafos.splice(
                  1
                )
                setParrafos(parrafosEliminados)
              }
            }
          }
        })
      )
    }

    if (mapContentFulToInternal().parrafos2) {
      mapContentFulToInternal().parrafos2.map((paragra, ind) =>
        paragra.content.map(({ nodeType }, i) => {
          if (ind === 0) {
            if (i === 0) {
              if (mapContentFulToInternal().parrafos.length === 1) {
                setSubtitulo2(null)
                setParrafos2(mapContentFulToInternal().parrafos2)
              } else if (nodeType.indexOf('heading') >= 0) {
                setSubtitulo2(null)
                setParrafos2(mapContentFulToInternal().parrafos2)
              } else {
                const parrafosEliminado2 = mapContentFulToInternal().parrafos2.splice(
                  0,
                  1
                )
                setSubtitulo2(parrafosEliminado2)
                const parrafosEliminados2 = mapContentFulToInternal().parrafos2.splice(
                  1
                )
                setParrafos2(parrafosEliminados2)
              }
            }
          }
        })
      )
    }
  }

  useEffect(() => {
    separateParagraphs()
  }, [])

  const elementContentProxy = (
    <div>
      <div>
        <div
          id={`container-header-container-parrafo-content-conatiner-parrafo1`}
        >
          <ContentProxy
            accessibility={accessibility}
            user={indexDBUserName.nameuser}
            nombreCallToActionTextoCierre={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : mapContentFulToInternal().cabeceraContenido
                      .nombreCallToActionTextoCierre
                : mapContentFulToInternal().cabeceraContenido
                    .nombreCallToActionTextoCierre
            }
            callToActionBtn={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : mapContentFulToInternal().callToAction
                : mapContentFulToInternal().callToAction
            }
            callToActionBtn2={mapContentFulToInternal().callToAction2}
            linkCallToActionTextoCierre={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : mapContentFulToInternal().cabeceraContenido
                      .linkCallToActionTextoCierre
                : mapContentFulToInternal().cabeceraContenido
                    .linkCallToActionTextoCierre
            }
            video={mapContentFulToInternal().video}
            podcast={mapContentFulToInternal().podcast}
            infographic={mapContentFulToInternal().infografico}
            infographicMobile={mapContentFulToInternal().infograficoMobile}
            paragraphs={
              process.env.isParrafo === 'false'
                ? parrafos
                : mapContentFulToInternal().parrafos
            }
            images={mapContentFulToInternal().imagenes}
            type={typeBiteValue}
            subtitulo={mapContentFulToInternal().cabeceraContenido.subtitulo}
            isSnack={e => {
              if (dataBites) {
                if (dataBites.length <= 1) {
                  setisSnack(false)
                } else {
                  setisSnack(e)
                }
              }
            }}
            alertText={mapContentFulToInternal().cabeceraContenido.textoCierre}
            titulo={mapContentFulToInternal().cabeceraContenido.titulo}
            lineGtm={pageContext.line}
            line={pageContext.line}
            descrpcionCorta={
              mapContentFulToInternal().cabeceraContenido.descripcionCorta
            }
            idContent={currentId}
            typeCustomer={getTypeNode(select)}
            widget={mapContentFulToInternal().widget}
          />
        </div>
        {parrafos2 && process.env.isParrafo === 'false' ? (
          parrafos2.length > 0 ? (
            <React.Fragment>
              <div className="container-internal-content-componente-header">
                <HeaderInternal
                  inversiones={pageContext.line === 'Inversión'}
                  twoSubtitulo={subtitulo2}
                  isParrafo2={true}
                  isCallToAction={
                    mapContentFulToInternal().callToAction2.url ? true : false
                  }
                />
              </div>
              <div
                id={`container-header-container-parrafo-content-conatiner-parrafo2`}
              >
                <ContentProxy
                  accessibility={accessibility}
                  user={indexDBUserName.nameuser}
                  nombreCallToActionTextoCierre={
                    mapContentFulToInternal().cabeceraContenido
                      .nombreCallToActionTextoCierre
                  }
                  callToActionBtn={mapContentFulToInternal().callToAction}
                  linkCallToActionTextoCierre={
                    mapContentFulToInternal().cabeceraContenido
                      .linkCallToActionTextoCierre
                  }
                  video={null}
                  podcast={null}
                  infographic={null}
                  infographicMobile={null}
                  paragraphs={
                    process.env.isParrafo === 'false'
                      ? parrafos2
                      : mapContentFulToInternal().parrafos2
                  }
                  images={
                    mapContentFulToInternal().imagenes
                      ? mapContentFulToInternal().imagenes[1]
                        ? [mapContentFulToInternal().imagenes[1]]
                        : mapContentFulToInternal().imagenes
                      : mapContentFulToInternal().imagenes
                  }
                  type={typeBiteValue}
                  subtitulo={
                    mapContentFulToInternal().cabeceraContenido.subtitulo
                  }
                  isSnack={e => {
                    if (dataBites) {
                      if (dataBites.length <= 1) {
                        setisSnack(false)
                      } else {
                        setisSnack(e)
                      }
                    }
                  }}
                  alertText={
                    mapContentFulToInternal().cabeceraContenido.textoCierre
                  }
                  titulo={mapContentFulToInternal().cabeceraContenido.titulo}
                  lineGtm={pageContext.line}
                  line={pageContext.line}
                  descrpcionCorta={
                    mapContentFulToInternal().cabeceraContenido.descripcionCorta
                  }
                  idContent={null}
                  typeCustomer={getTypeNode(select)}
                  widget={null}
                />
              </div>
            </React.Fragment>
          ) : null
        ) : null}
      </div>
    </div>
  )

  const menuBite = dataBites.map((item, i) => {
    return (
      <React.Fragment>
        {onload ? (
          <React.Fragment>
            <div
              id={`container-internal-bite-${i}`}
              className="container-internal-bite gtmCesantiasContenSupSugeridos"
              style={{ marginBottom: 12 }}
            >
              <InternalBites
                text={item?.node.tituloCorto}
                id={item}
                onClick={clickBite}
                image={Imagenes[i] ? Imagenes[i].image : null}
                active={select}
                idActive={item}
                line={pageContext.line}
                subcategorySelectedUser={subcategory}
                typeCustomer={getTypeNode(select)}
                index={i}
              />
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    )
  })

  return (
    <>
      <Seo pageContext={pageContext} />
      <ThemeProvider
        theme={selectTheme(
          indexDBUserName ? indexDBUserName.category : pageContext.line,
          accessibility,
          indexDBUserName ? indexDBUserName.type : pageContext.cliente
        )}
      >
        {onload ? (
          <div className={'container-internal-content'}>
            <Header
              showTypePerson={true}
              isOpenMenu={false}
              defaultTypeUser={defaultTypeUser}
              defaultCategoryUser={defaultCategoryUserPageContext}
              defaultSubcategoryUser={defaultSubcategoryUser}
              indexDBUserName={indexDBUserName.nameuser}
              typeCliente={mapContentFulToInternal().tipoDeCliente}
              indexDBUser={indexDBUserName}
              enabledAccessibility={e => {
                setMarginAdditional(e)
              }}
            />
            <div
              style={{ marginTop: marginAdditional ? '114px' : '52px' }}
              className="container-internal-content-bread-crumb"
            >
              {location && (
                <BreadCrumb
                  location={locationBread}
                  defaultTypeUser={defaultTypeUser}
                  defaultCategoryUser={defaultCategoryUserPageContext}
                  defaultSubcategoryUser={defaultSubcategoryUser}
                />
              )}
              <div className="bread-crumbs" />
            </div>
            <div
              className="responsive-mobile-internas"
              style={{
                background: '#ffffff'
              }}
            >
              <main>
                {isSnack ? (
                  <div
                    style={{ marginTop: widthScreen <= 1024 ? 24 : 42 }}
                    className="container-internal-content-componente-internal-bite"
                  >
                    <ContainerFlexBox
                      className="container-internal-content-componente-internal-bite-menu"
                      style={{ marginTop: 42, height: 150 }}
                    >
                      {widthScreen > 1024 ? (
                        menuBite
                      ) : (
                        <React.Fragment>
                          <Slider ref={setRef} {...configuracionBite}>
                            {menuBite}
                          </Slider>
                        </React.Fragment>
                      )}
                    </ContainerFlexBox>
                  </div>
                ) : (
                  ''
                )}

                <div className="container-internal-content-componente">
                  {
                    <React.Fragment>
                      {currentId !== '24aOyom5BmwJVQmmHsV7jY' &&
                      pageContext.id !== '7sAAXHZuZo1MPS2j8U6U9G' ? (
                        <div className="container-internal-content-componente-header">
                          <HeaderInternal
                            inversiones={pageContext.line === 'Inversión'}
                            titulo={
                              mapContentFulToInternal().cabeceraContenido.titulo
                            }
                            tiempo={
                              mapContentFulToInternal().cabeceraContenido.tiempo
                            }
                            publico={
                              mapContentFulToInternal().cabeceraContenido
                                .publicoObjetivo
                            }
                            subtitle={
                              mapContentFulToInternal().cabeceraContenido
                                .descripcionCorta
                            }
                            isCallToAction={
                              mapContentFulToInternal().callToAction2.url
                                ? true
                                : false
                            }
                          />
                          <CallToActionComponent
                            accessibility={accessibility}
                            descripcion={''}
                            titulo={
                              mapContentFulToInternal().callToAction2
                                .textoButton
                            }
                            link={mapContentFulToInternal().callToAction2.url}
                            line={pageContext.line}
                            lineGtm={pageContext.lineGtm}
                            type={type}
                            titleContent={
                              mapContentFulToInternal().cabeceraContenido.titulo
                            }
                            callToActionSuperior={true}
                            styleCallToActionSupeior={
                              getSizeScreen() <= 1024
                                ? { paddingBottom: '0px' }
                                : {}
                            }
                          />
                          <div className="header-body-content">
                            <HeaderInternal
                              twoSubtitulo={
                                process.env.isParrafo === 'false'
                                  ? subtitulo
                                  : null
                              }
                            />
                          </div>
                        </div>
                      ) : currentId !== '24aOyom5BmwJVQmmHsV7jY' &&
                        pageContext.id === '7sAAXHZuZo1MPS2j8U6U9G' ? (
                        <div className="container-internal-content-componente-header">
                          <RentabilidadHeaderInternal>
                            <HeaderInternal
                              inversiones={pageContext.line === 'Inversión'}
                              titulo={
                                mapContentFulToInternal().cabeceraContenido
                                  .titulo
                              }
                              tiempo={
                                mapContentFulToInternal().cabeceraContenido
                                  .tiempo
                              }
                              publico={
                                mapContentFulToInternal().cabeceraContenido
                                  .publicoObjetivo
                              }
                              subtitle={
                                mapContentFulToInternal().cabeceraContenido
                                  .descripcionCorta
                              }
                              twoSubtitulo={
                                process.env.isParrafo === 'false'
                                  ? subtitulo
                                  : null
                              }
                              isCallToAction={
                                mapContentFulToInternal().callToAction2.url
                                  ? true
                                  : false
                              }
                            />
                          </RentabilidadHeaderInternal>
                          <CallToActionComponent
                            accessibility={accessibility}
                            descripcion={''}
                            titulo={
                              mapContentFulToInternal().callToAction2
                                .textoButton
                            }
                            link={mapContentFulToInternal().callToAction2.url}
                            line={pageContext.line}
                            lineGtm={pageContext.lineGtm}
                            type={type}
                            titleContent={
                              mapContentFulToInternal().cabeceraContenido.titulo
                            }
                            callToActionSuperior={true}
                            styleCallToActionSupeior={
                              getSizeScreen() <= 1024
                                ? { paddingBottom: '0px' }
                                : {}
                            }
                          />
                        </div>
                      ) : null}
                      {elementContentProxy}
                      <div className="separator" />
                      <div className="container-internal-content-componente-like">
                        <Like
                          indexDBUser={indexDBUserName}
                          title={
                            mapContentFulToInternal().cabeceraContenido.titulo
                          }
                          tiempo={
                            mapContentFulToInternal().cabeceraContenido.tiempo
                          }
                          publico={
                            mapContentFulToInternal().cabeceraContenido
                              .publicoObjetivo
                          }
                          subtitle={mapContentFulToInternal().cabeceraContenido.descripcionCorta.replace(
                            '[VariableFecha]',
                            '31/08/2022'
                          )}
                          twoSubtitulo={
                            process.env.isParrafo === 'false' ? subtitulo : null
                          }
                          isCallToAction={
                            mapContentFulToInternal().callToAction2.url
                              ? true
                              : false
                          }
                        />
                        <ButtonShare
                          title={
                            mapContentFulToInternal().cabeceraContenido.titulo
                          }
                          line={pageContext.line}
                          type={getTypeNode(select)}
                          url={locationBread.href}
                          isActive={isShare}
                          setIsShare={setIsShare}
                        />

                        <div
                          style={{ display: isShare ? null : 'none' }}
                          className={
                            isShare
                              ? 'container-internal-content-componente-share-component share-animation-active'
                              : 'container-internal-content-componente-share-component share-animation-inactive'
                          }
                        >
                          <ComponentShare
                            title={
                              mapContentFulToInternal().cabeceraContenido.titulo
                            }
                            line={pageContext.line}
                            type={getTypeNode(select)}
                            url={locationBread.href}
                            isActive={isShare}
                            setIsShare={setIsShare}
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  }
                </div>
                <ExitStreet
                  dataUtils={dataUtils}
                  accessibility={accessibility}
                  indexDBUserName={indexDBUserName}
                  widthScreen={widthScreen}
                  options={options}
                  line={pageContext.category}
                  pageContext={pageContext}
                />
              </main>
            </div>
            <Footer
              isIOS={isIOS}
              isAndroid={isAndroid}
              isInterna={true}
              isShare={isShare}
              colorFooter={'#FAFBFC'}
            />
          </div>
        ) : null}
      </ThemeProvider>
    </>
  )
}

function mapStateToProps(state) {
  const selectedSubcategory = state.youcantmiss.userValue
    ? Array.isArray(state.youcantmiss.userValue)
      ? state.youcantmiss.userValue.length > 0
        ? state.youcantmiss.userValue.subcategory
        : null
      : state.youcantmiss.userValue.subcategory
    : null
  return {
    publico: selectedSubcategory,
    accessibility: state.accesibility,
    userInfoPageContext: state.pageContext
  }
}

LayoutInternalContentPage = connect(mapStateToProps)(LayoutInternalContentPage)

export default LayoutInternalContentPage

export const pageQuery = graphql`
  query PageContentBySlug($ids: [String!]) {
    allContentfulContenido(filter: { contentful_id: { in: $ids } }) {
      edges {
        node {
          Tema {
            contentful_id
            tituloCorto
          }
          podcast {
            OrigenDeAudio
            contentful_id
            titulo
            linkPodcast {
              linkPodcast
            }
            updatedAt
            descripcion
          }
          titulo
          tipoDeCliente {
            nombre
            contentful_id
          }
          tituloCorto
          textoCierre {
            textoCierre
          }
          edadygenero
          categoriaCliente {
            descripcion
            contentful_id
            lineadenegocio {
              nombre
            }
          }
          subtitulo
          descripcioncorta
          linkCallToAction
          LinkCallToActionSuperior
          TextoCallToActionSuperior
          textoCallToActionBite
          textoCallToAction
          metatittleSeo
          descripcioncalltoaction
          tiempoDeLectura
          contentful_id
          imagenes {
            fluid {
              src
            }
            file {
              url
              fileName
            }
            description
            title
          }
          ImagenMobile {
            fluid {
              src
            }
            file {
              url
              fileName
            }
            description
            title
          }
          infograficoMobile {
            file {
              url
              fileName
            }
            fluid {
              src
            }
            file {
              url
              fileName
            }
            contentful_id
            description
            title
          }
          infografico {
            fluid {
              src
            }
            file {
              url
              fileName
            }
            contentful_id
            description
            title
          }
          cuerpocontenido {
            json
          }
          cuerpocontenido2 {
            json
          }
          listadoVideos
          urlSeo
          keywordsSeo {
            keywordsSeo
          }
          metadescripcionSeo {
            metadescripcionSeo
          }
          nombreCallToActionTextoCierre
          linkCallToActionTextoCierre
        }
      }
    }
  }
`
