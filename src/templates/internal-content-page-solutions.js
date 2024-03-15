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
  getSettingsBitesDark
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
import { getLinkCallToActionFromPathPages } from '../utils/call-to-action-utils'
import { contentScript } from '../utils/contentScript'
import {
  removeInitialAndEndSlash,
  removePathUrlProfiling
} from '../utils/general-utils'
import { mapParagraphtoParrafo } from '../utils/map-paragraph-to-parrafo'
import { getDataMoreContent } from '../utils/moreContent'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { selectTheme } from '../utils/select-theme'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import Seo from '../components/internal-pages/common/seo/seo'
import BannerSolutions from '../components/molecules/banner-solutions/banner-solutions'
import NavigationBar from '../components/molecules/navigation-bar/navigation-bar'
import './internal-content.scss'

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
  const defaultTypeUser = pageContext.cliente
  const pathPages = useInternalPathPages()
  const defaultSubCategoryUserPageContext = pageContext?.sublinea ?? ''
  const defaultCategoryUserPageContext = pageContext.category
  const defaultSubcategoryUser = defaultSubCategoryUserPageContext
  const widthScreen = useCurrentWidth()
  const [dataParceTab, setDataParceTab] = useState(
    JSON.parse(isBrowser ? sessionStorage.getItem('dataPage') : null)
  )
  const [isShare, setIsShare] = useState(false)
  const [dataUtils, setdataUtils] = useState([])
  const [typeBiteValue, settypeBiteValue] = useState(pageContext.type)
  const [locationBread, setlocationBread] = useState(location)
  const [productActive, setproductActive] = useState(0)
  const [itemActive, setitemActive] = useState('')
  const [onload, setOnload] = useState(false)
  const [currentId, setcurrentId] = useState(pageContext.id)
  const [subtitulo, setSubtitulo] = useState([])
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [subtitulo2, setSubtitulo2] = useState([])
  const [parrafos, setParrafos] = useState([])
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [parrafos2, setParrafos2] = useState([])
  const refSlider = useRef()
  const [indexBite, setIndexBite] = useState('')
  const [bannerInformation, setBannerInformation] = useState(null)
  const [bestMenuOptions, setBestMenuOptions] = useState(null)

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

  let settitleAhorro

  const sortDataASC = dataDate => {
    return dataDate.sort(function(a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
  }
  useSetTypeUserAndCategoryState(pageContext.typeCustomer, pageContext.category)

  const profilingUserPageContext = {
    category: pageContext.category,
    type: pageContext.cliente
  }
  const dataProduct = useLineServiceComplete(profilingUserPageContext)
  let category_id = mapCategories(
    dataProduct,
    indexDBUserName ? indexDBUserName.category : 'Ahorro'
  )

  let type_id = mapCategories(
    dataProduct,
    indexDBUserName ? indexDBUserName.type : 1
  )

  let SubCategory_id = mapCategories(dataProduct, pageContext.sublinea)

  const getImagesBite = () => {
    switch (pageContext.line) {
      case 'Inversión':
        return ImagenesInv
      case 'Pensión':
        return ImagenesPension
      case 'Ahorro':
        return ImagenesAhorro
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
          null,
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
          null,
          pageContext.line
        )
    )
  }, [category_id, SubCategory_id, type_id])

  const [isSnack, setisSnack] = useState(false)
  var isBrowser = typeof window !== 'undefined'

  const generateSeoTags = (tittleSeo, metaSeo, keyworodsSeo) => {
    const keyWordsDefine = [{ name: `keywords`, content: keyworodsSeo }]

    return new SeoModel(tittleSeo, metaSeo, keyWordsDefine)
  }

  useEffect(() => {
    const dataMappedToInternal = mapContentFulToInternal()
    setDataMapped(dataMappedToInternal)
    getBannerInformationForCurrentSolution()
  }, [itemActive])

  const viewDataMapped = () => {
    return dataMapped
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
          null,
          pageContext.line
        )
    )
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch, category_id, SubCategory_id, type_id])

  const sortData = services => {
    const dataFilter = data.allContentfulContenido.edges

    let ArrayProduct = []
    let titleAhorrosData = []
    if (dataProduct) {
      dataProduct.allContentfulProducto.edges.map(x => {
        if (
          x.node.categoriaProducto === pageContext.categoriaProducto &&
          pageContext.idProduct === x.node.contentful_id
        ) {
          x.node.contenido.map(e => {
            const urlSeo =
              e.urlSeo !== null
                ? removeInitialAndEndSlash(
                    getLinkCallToActionFromPathPages(
                      pathPages,
                      removePathUrlProfiling(e.urlSeo.toLowerCase()),
                      userInfoPageContext,
                      profilingUserPageContext
                    )
                  )
                : null
            titleAhorrosData.push({
              nombre: e.tituloCorto,
              cliente: e.tipoDeCliente,
              id: x.node.contentful_id,
              contentful_idContenido: e.contentful_id,
              UrlseoContenido: urlSeo,
              createdAt: x.node.createdAt
            })
            return titleAhorrosData
          })
        }
      })
    }

    const currentContenidoPage = data.allContentfulContenido.edges.filter(
      itemContent => {
        return itemContent.node.urlSeo + '/' === pageContext.slug
      }
    )

    let typeClient
    if (
      !currentContenidoPage[0] ||
      currentContenidoPage[0].node.tipoDeCliente?.length > 1
    ) {
      typeClient = mapCategories(dataProduct, services ? services.type : 1)
    } else {
      typeClient =
        currentContenidoPage[0].node.tipoDeCliente?.[0]?.contentful_id
    }

    const filterAhorro = titleAhorrosData.filter(function(item) {
      if (item.cliente) {
        return (
          item.cliente.filter(
            typClient => typeClient.indexOf(typClient.contentful_id) >= 0
          ).length > 0
        )
      }
      return null
    })

    const dataFinal = sortDataASC(filterAhorro)
    settitleAhorro = dataFinal
    dataFinal.map((product, i) => {
      const resultBite = dataFilter.filter(
        word => word.node.contentful_id === product.contentful_idContenido
      )
      return ArrayProduct.push(resultBite[0])
    })

    const resultFilterData = ArrayProduct

    return resultFilterData
  }

  const BitesDta = settitleAhorro

  let createData = sortData(indexDBUserName)

  const [dataBites, setDataites] = useState(createData)
  const [biteMain, setBiteMain] = useState(createData[0])
  const [select, setSelect] = useState(
    data.allContentfulContenido.edges.filter(
      activeOption => activeOption.node.contentful_id === pageContext.id
    )[0]
  )
  const [groupsOriginal, setgroupsOriginal] = useState(BitesDta)
  const [indexActivo, setindexActivo] = useState(0)

  const { category, subcategory, type } = indexDBUserName

  const mapContentFulToInternal = () => {
    const content = dataParceTab
      ? dataParceTab.biteSelect.node
      : select
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

  const dataMappedToInternal = mapContentFulToInternal()
  const [dataMapped, setDataMapped] = useState(dataMappedToInternal)

  useEffect(() => {
    setDataites(createData)
    setBiteMain(createData[0])
  }, [indexDBUserName, category, subcategory, type])

  const TabMenu = () => {
    const resultBites = data.allContentfulContenido.edges.filter(
      word => word.node.contentful_id === pageContext.id
    )
    setSelect(resultBites[0])
    settitleAhorro.forEach((x, i) => {
      if (x.contentful_idContenido === pageContext.id) {
        setindexActivo(i)
      }
    })
  }
  useEffect(TabMenu, [
    indexDBUserName,
    category,
    subcategory,
    type,
    dataParceTab
  ])

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
          setBiteMain(bites[0])
          setgroupsOriginal(originalBite)
          setDataites(bites)
          setcurrentId(biteSelect.node.contentful_id)
          setSelect(biteSelect)
          setlocationBread(window.location)
        }
      }
    } else {
      const stateObj = {
        isMain: biteMain === select,
        id: select?.node.contentful_id,
        biteSelect: select,
        bites: dataBites,
        indexActive: 0,
        originalBite: groupsOriginal
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
      isMain: biteMain === itemSelect,
      id: itemSelect?.node.contentful_id,
      biteSelect: itemSelect,
      bites: dataBites,
      indexActive: index,
      originalBite: groupsOriginal
    }
    sessionStorage.setItem('dataPage', JSON.stringify(stateObj))
    pageContext.id = stateObj.id
    pageContext.metatittleSeo = `${stateObj.biteSelect.node.tituloCorto} | Protección`
    pageContext.slug = `${stateObj.biteSelect.node.urlSeo}/`
    setDataParceTab(stateObj)
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
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
  var configuracionBite = validateCurrentLine(indexDBUserName)
    ? getSettingsBitesDark({
        id: 'contendio-relevante',
        clickAction: clickSlider,
        showArrow: dataBites.length > 1 && widthScreen <= 768,
        classContainerDots: 'carousel-container-section-dots-bites',
        isDarkInvert: validateCurrentLine(indexDBUserName)
      })
    : getSettingsBites({
        id: 'contendio-relevante',
        clickAction: clickSlider,
        showArrow: dataBites.length > 1 && widthScreen <= 768,
        isDarkInvert: validateCurrentLine(indexDBUserName),
        classContainerDots: 'carousel-container-section-dots-bites'
      })

  configuracionBite = {
    ...configuracionBite,
    variableWidth: widthScreen <= 550,
    responsive: responsive,
    adaptiveHeight: widthScreen <= 550 ? true : null,
    className: widthScreen <= 550 ? 'slider variable-width' : null
  }

  const separateParagraphs = () => {
    if (viewDataMapped().parrafos) {
      viewDataMapped().parrafos.map((paragraph, index) =>
        paragraph.content.map(({ nodeType }, i) => {
          if (index === 0) {
            if (i === 0) {
              if (viewDataMapped().parrafos.length === 1) {
                setParrafos(viewDataMapped().parrafos)
                setSubtitulo(null)
              } else if (nodeType.indexOf('heading') >= 0) {
                setParrafos(viewDataMapped().parrafos)
                setSubtitulo(null)
              } else {
                const parrafosEliminado = viewDataMapped().parrafos.splice(0, 1)
                setSubtitulo(parrafosEliminado)
                const parrafosEliminados = viewDataMapped().parrafos.splice(1)
                setParrafos(parrafosEliminados)
              }
            }
          }
        })
      )
    }

    if (viewDataMapped().parrafos2) {
      viewDataMapped().parrafos2.map((paragra, ind) =>
        paragra.content.map(({ nodeType }, i) => {
          if (ind === 0) {
            if (i === 0) {
              if (viewDataMapped().parrafos.length === 1) {
                setParrafos2(viewDataMapped().parrafos2)
                setSubtitulo2(null)
              } else if (nodeType.indexOf('heading') >= 0) {
                setParrafos2(viewDataMapped().parrafos2)
                setSubtitulo2(null)
              } else {
                const parrafosEliminado2 = viewDataMapped().parrafos2.splice(
                  0,
                  1
                )
                setSubtitulo2(parrafosEliminado2)
                const parrafosEliminados2 = viewDataMapped().parrafos2.splice(1)
                setParrafos2(parrafosEliminados2)
              }
            }
          }
        })
      )
    }
  }

  const getBannerInformationForCurrentSolution = () => {
    const actualProduct = data.allContentfulProducto?.edges.filter(
      product => product.node.contentful_id === pageContext.idProduct
    )

    const bannerInformationByOption = actualProduct?.[0]?.node.contenido.find(
      content => content.contentful_id === pageContext.id
    )

    const bannerInformation = {
      id: bannerInformationByOption?.contentful_id,
      title: bannerInformationByOption?.titulo,
      description: bannerInformationByOption?.subtitulo,
      imageUrl: bannerInformationByOption?.imagenes?.[0].file.url,
      mobileImageUrl: bannerInformationByOption?.ImagenMobile?.file.url
    }
    setBannerInformation(bannerInformation)
  }

  const getBestMenuOptionsByCustomerType = () => {
    const actualProduct = data.allContentfulProducto?.edges.filter(
      product => product.node.contentful_id === pageContext.idProduct
    )

    const customerTypeIdByOption = {
      1: '3XCf8zuzh5bGWNcuvFBuwx',
      2: '7IF4VrReibXT0Vb13iX3rd'
    }

    const bestMenuOptionsByCustomerType = actualProduct?.[0]?.node.contenido.filter(
      content =>
        content.tipoDeCliente?.filter(
          customerType =>
            customerType.contentful_id ===
            customerTypeIdByOption[pageContext.typeCustomer]
        ).length
    )

    const bestMenuOptions = bestMenuOptionsByCustomerType?.map(
      bestMenuOption => {
        const urlSeo = removeInitialAndEndSlash(
          getLinkCallToActionFromPathPages(
            pathPages,
            removePathUrlProfiling(bestMenuOption.urlSeo.toLowerCase()),
            userInfoPageContext,
            profilingUserPageContext
          )
        )

        return {
          nombre: bestMenuOption.tituloCorto,
          cliente: bestMenuOption.tipoDeCliente,
          id: actualProduct?.[0].node.contentful_id,
          contentful_idContenido: bestMenuOption.contentful_id,
          UrlseoContenido: urlSeo
        }
      }
    )

    setBestMenuOptions(bestMenuOptions)
  }

  useEffect(() => {
    separateParagraphs()
    getBannerInformationForCurrentSolution()
    getBestMenuOptionsByCustomerType()
  }, [])

  const elementContentProxy = (
    <div>
      <div>
        <div
          id={`container-header-container-parrafo-content-conatiner-parrafo1`}
        >
          <ContentProxy
            user={indexDBUserName.nameuser}
            accessibility={accessibility}
            nombreCallToActionTextoCierre={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : viewDataMapped().cabeceraContenido
                      .nombreCallToActionTextoCierre
                : viewDataMapped().cabeceraContenido
                    .nombreCallToActionTextoCierre
            }
            callToActionBtn2={viewDataMapped().callToAction2}
            callToActionBtn={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : viewDataMapped().callToAction
                : viewDataMapped().callToAction
            }
            linkCallToActionTextoCierre={
              parrafos2 && process.env.isParrafo === 'false'
                ? parrafos2.length > 0
                  ? null
                  : viewDataMapped().cabeceraContenido
                      .linkCallToActionTextoCierre
                : viewDataMapped().cabeceraContenido.linkCallToActionTextoCierre
            }
            podcast={viewDataMapped().podcast}
            video={viewDataMapped().video}
            infographicMobile={viewDataMapped().infograficoMobile}
            infographic={viewDataMapped().infografico}
            images={viewDataMapped().imagenes}
            paragraphs={viewDataMapped().parrafos}
            subtitulo={viewDataMapped().cabeceraContenido.subtitulo}
            type={typeBiteValue}
            isSnack={e => {
              if (dataBites) {
                if (dataBites.length <= 1) {
                  setisSnack(false)
                } else {
                  setisSnack(e)
                }
              }
            }}
            titulo={viewDataMapped().cabeceraContenido.titulo}
            alertText={viewDataMapped().cabeceraContenido.textoCierre}
            line={productActive.id}
            lineGtm={pageContext.category}
            idContent={currentId}
            descrpcionCorta={
              viewDataMapped().cabeceraContenido.descripcionCorta
            }
            widget={viewDataMapped().widget}
            typeCustomer={getTypeNode(select)}
          />
        </div>
        {parrafos2 && process.env.isParrafo === 'false' ? (
          parrafos2.length > 0 ? (
            <React.Fragment>
              <div className="container-internal-content-componente-header">
                <HeaderInternal
                  isParrafo2={true}
                  twoSubtitulo={subtitulo2}
                  isCallToAction={
                    viewDataMapped().callToAction2.url ? true : false
                  }
                  inversiones={pageContext.line === 'Inversión'}
                />
              </div>
              <div
                id={`container-header-container-parrafo-content-conatiner-parrafo2`}
              >
                <ContentProxy
                  user={indexDBUserName.nameuser}
                  accessibility={accessibility}
                  nombreCallToActionTextoCierre={
                    viewDataMapped().cabeceraContenido
                      .nombreCallToActionTextoCierre
                  }
                  callToActionBtn={viewDataMapped().callToAction}
                  video={null}
                  linkCallToActionTextoCierre={
                    viewDataMapped().cabeceraContenido
                      .linkCallToActionTextoCierre
                  }
                  infographic={null}
                  podcast={null}
                  paragraphs={viewDataMapped().parrafos2}
                  infographicMobile={null}
                  type={typeBiteValue}
                  images={
                    viewDataMapped().imagenes
                      ? viewDataMapped().imagenes[1]
                        ? [viewDataMapped().imagenes[1]]
                        : viewDataMapped().imagenes
                      : viewDataMapped().imagenes
                  }
                  subtitulo={viewDataMapped().cabeceraContenido.subtitulo}
                  isSnack={e => {
                    if (dataBites) {
                      if (dataBites.length <= 1) {
                        setisSnack(false)
                      } else {
                        setisSnack(e)
                      }
                    }
                  }}
                  titulo={viewDataMapped().cabeceraContenido.titulo}
                  alertText={viewDataMapped().cabeceraContenido.textoCierre}
                  line={productActive.id}
                  lineGtm={pageContext.category}
                  idContent={null}
                  descrpcionCorta={
                    viewDataMapped().cabeceraContenido.descripcionCorta
                  }
                  widget={null}
                  typeCustomer={getTypeNode(select)}
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
              style={{ marginBottom: 12 }}
              className="container-internal-bite gtmCesantiasContenSupSugeridos"
            >
              <InternalBites
                id={item}
                text={item?.node.tituloCorto}
                image={Imagenes[i] ? Imagenes[i].image : null}
                onClick={clickBite}
                idActive={item}
                active={select}
                subcategorySelectedUser={subcategory}
                line={pageContext.line}
                index={i}
                typeCustomer={getTypeNode(select)}
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
          indexDBUserName ? indexDBUserName.category : pageContext.category,
          accessibility,
          indexDBUserName ? indexDBUserName.type : pageContext.typeCustomer
        )}
      >
        {onload ? (
          <div className={'container-internal-content'}>
            <Header
              isOpenMenu={false}
              showTypePerson={true}
              defaultCategoryUser={defaultCategoryUserPageContext}
              defaultTypeUser={defaultTypeUser}
              indexDBUserName={indexDBUserName.nameuser}
              defaultSubcategoryUser={defaultSubcategoryUser}
              indexDBUser={indexDBUserName}
              typeCliente={viewDataMapped().tipoDeCliente}
              enabledAccessibility={e => {
                setMarginAdditional(e)
              }}
            />
            <div
              className="container-internal-content-bread-crumb"
              style={{ marginTop: marginAdditional ? '114px' : '52px' }}
            >
              {location && (
                <BreadCrumb
                  location={locationBread}
                  defaultTypeUser={defaultTypeUser}
                  defaultSubcategoryUser={defaultSubcategoryUser}
                  defaultCategoryUser={defaultCategoryUserPageContext}
                />
              )}
              <div className="bread-crumbs" />
            </div>
            <div className="responsive-mobile-internas">
              <main>
                {isSnack ? (
                  <div
                    className="container-internal-content-componente-internal-bite"
                    style={{ marginTop: widthScreen <= 1024 ? 24 : 42 }}
                  >
                    <ContainerFlexBox
                      style={{ marginTop: 42, height: 150 }}
                      className="container-internal-content-componente-internal-bite-menu"
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
                  <div
                    style={{ marginBottom: '24px' }}
                    className="container-internal-content-componente-header soluciones-header"
                  >
                    <div className="container-internal-content-componente-header-menu">
                      {onload ? (
                        <>
                          <NavigationBar
                            options={bestMenuOptions}
                            setItemActive={setitemActive}
                            indexActive={indexActivo}
                            setIndexActive={setindexActivo}
                            dataBites={dataBites}
                            categoryGtm="Ahorro"
                            actionGtm="ClicInternaAhorro-Menu"
                            setProductActive={setproductActive}
                            onClick={clickBite}
                            investment={pageContext.category === 'Inversión'}
                          />
                          <div className="container-internal-content-componente-header-banner">
                            <BannerSolutions {...bannerInformation} />
                          </div>
                          {elementContentProxy}
                          <div className="container-internal-content-componente-like">
                            <Like
                              item={select}
                              indexDBUser={indexDBUserName}
                              line={pageContext.category}
                              pathname={locationBread}
                              title={viewDataMapped().cabeceraContenido.titulo}
                            />

                            <ButtonShare
                              title={viewDataMapped().cabeceraContenido.titulo}
                              line={pageContext.category}
                              isShare={isShare}
                              type={getTypeNode(select)}
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
                                  viewDataMapped().cabeceraContenido.titulo
                                }
                              />

                              <ButtonShare
                                title={
                                  viewDataMapped().cabeceraContenido.titulo
                                }
                                line={pageContext.category}
                                isShare={isShare}
                                type={getTypeNode(select)}
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
                                    viewDataMapped().cabeceraContenido.titulo
                                  }
                                  type={getTypeNode(select)}
                                  line={pageContext.category}
                                  setIsShare={setIsShare}
                                  url={locationBread.href}
                                  isActive={isShare}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
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
  query PageContentBySlugSoluctions($ids: [String!]) {
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
    allContentfulProducto {
      edges {
        node {
          contentful_id
          titulo
          contenido {
            tituloCorto
            titulo
            subtitulo
            urlSeo
            contentful_id
            tipoDeCliente {
              contentful_id
            }
            ImagenMobile {
              file {
                url
              }
            }
            imagenes {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
