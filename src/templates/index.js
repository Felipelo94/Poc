import React, { useEffect, useState } from 'react'
import FeaturedSlider from '../components/molecules/banner-bite/featured-slider/featured-slider'
import LayoutMain from '../templates/layout-main'
import {
  getDataIb,
  updateHostUser,
  deleteDataBases
} from '../services/service-indexDB/service-indexDB'
import { postApiPreHome } from '../services/service-pre-home/service-pre-home'
import './index.scss'
import { get } from '../services/service-general/service-general'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { connect } from 'react-redux'
import SessionYouCantMissComponent from '../components/molecules/session-You-cant-miss/session-You-cant-miss'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import ContentUtil from '../utils/ContentUtil'
import ExitStreetSlider from '../components/molecules/banner-bite/exit-street-slider/exit-street-slider'
import { URL_SERVICES } from '../utils/paramApplication'
import Modal from '../components/atoms/modal/modal'
import IndexComponents from '../components/molecules/index/index'
import dataIndex from '../utils/contenidosPrehomeValue.json'
import mapCategories from '../const/dictionary/map-categories'
import globe from '../assets/images/globe.svg'
import contenidosHomeh2Title from '../utils/contenidosHomeH2Title.json'

import { navigate } from 'gatsby'
import SeeMore from '../components/atoms/see-more/see-more'
import { restrictPrehome } from '../utils/restrictPrehome'
import Graph from '../components/molecules/graph/graph'
import { validateCurrentLine } from '../utils/bite-caracter'
import NewsInversion from '../components/molecules/news-inversion/news-inversion'
import { addStatusTourGuide } from '../actions/home/home'
import queryString from 'query-string'

import loadable from '@loadable/component'
import SkeletonBite from '../components/atoms/skeleton-bite/skeleton-bite'
import ContentLoader from 'react-content-loader'
import SkeletonBiteMobile from '../components/atoms/skeleton-bite/skeleton-bite-mobile'
import { getClassGTMSeeMoreContentHOME } from '../utils/classGtmUtil'
import {
  filterItems,
  generateCleanData,
  generateDataBite,
  generateDataBiteYoucantmiss,
  getConfigTourGuide,
  validationChangeHome,
  setArrayFeatured,
  sortData,
  redirectHome
} from '../utils/home-configuration'
import { getCurrentHost } from '../utils/redirectUtil'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { setPageContext } from '../actions/page-context/page-context'
import { selectTheme } from '../utils/select-theme'
import Anchor from '../components/atoms/anchor/anchor'
import Seo from '../components/internal-pages/common/seo/seo'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const Tour = loadable(() => import('reactour'), { ssr: false })

let indexProduct = []

const ContainerHomeStyled = styled.div`
  background: ${props =>
    props.isInversion
      ? props.theme.colors.backgroundInversion
      : props.theme.colors.background};
  transition: ${props => props.theme.animation};
`

export function IndexComponent(props) {
  restrictPrehome(dataIndex)
  const isSSR = typeof window !== 'undefined'
  const statusLocal = isSSR
    ? localStorage.getItem('enabled-tour') === 'true'
    : false

  const [allContentfulBiteFeatured, setAllContentfulBiteFeatured] = useState([])
  const [allContentfulBiteProduct, setAllContentfulBiteProduct] = useState([])
  const [indexDBUserName, setIndexDBUserName] = useState('')
  const [indexDBUser, setIndexDBUser] = useState('')
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isTourOpen, setIsTourOpen] = useState(
    process.env.IS_TOUR_GUIDE_ACTIVATED === 'true'
      ? statusLocal
        ? statusLocal
        : false
      : false
  )
  const [currentStepTourGuide, setCurrentStepTourGuide] = useState(0)
  const [validateStreetCard, setValidateStreetCard] = useState(true)
  const [validateStreetCardDelete, setValidateStreetCardDelete] = useState(
    false
  )
  const [validatechangeModalDelete, setValidatechangeModalDelete] = useState(
    false
  )
  const [openLink, setOpenLink] = useState(false)
  const [mockup, setMockup] = useState(true)
  const [perfilamientoCesantias, setPerfilamientoCesantias] = useState(true)
  const [width, setWidth] = useState(isSSR ? window.innerWidth : 0)
  const [copyProps, setCopyProps] = useState(props)

  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : ''
  }

  const setIsToursOpen = value => {
    setIsTourOpen(
      process.env.IS_TOUR_GUIDE_ACTIVATED === 'true' ? value : false
    )
    setCurrentStepTourGuide(value ? 1 : 0)
  }

  const disableBody = target => disableBodyScroll(target)
  const enableBody = target => enableBodyScroll(target)

  const closeEventTour = () => {
    setIsToursOpen(false)
    const enabledTg = localStorage.getItem('enabled-tour')
    props.dispatch(addStatusTourGuide(false))
    if (enabledTg) {
      localStorage.setItem('enabled-tour', false)
    }
  }

  const OpenEventTour = () => {
    setIsToursOpen(true)
    const enabledTg = localStorage.getItem('enabled-tour')
    props.dispatch(addStatusTourGuide(true))
    if (enabledTg) {
      localStorage.setItem('enabled-tour', true)
    }
  }

  useEffect(() => {
    servicesIndexbd()
    window.addEventListener('resize', updateDimensions)
    const { dispatch = null, pageContext = {} } = props
    if (dispatch) {
      dispatch(setPageContext(pageContext.cliente, pageContext.line))
    }
  }, [])

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  const validationLInk = (query, services) => {
    let splitUrl = window.location.pathname.split('/')
    if (query) {
      let params = queryString.parse(window.location.search)
      if (params['tipoCliente'] || params['linea'] || params['changeModal']) {
        const type = parseInt(params['tipoCliente']) !== services.type
        const category = params['linea'] !== services.category
        const changeModal = params['changeModal'] ? true : false
        if (type || category || changeModal) {
          setIsOpenMenu(true)
          setOpenLink(true)
        }
        if (changeModal) {
          setIsOpenMenu(true)
          setValidatechangeModalDelete(true)
        }
      }
    } else if (splitUrl.indexOf('home') >= 0) {
      const type = parseInt(props.pageContext.cliente) !== services?.type
      const category = props.pageContext.line !== services?.category
      if (type || category) {
        setIsOpenMenu(true)
        setOpenLink(true)
      }
    }
  }


  const refreshPage = () => {
    servicesIndexbd()
  }

  useEffect(() => {
    if (props !== copyProps) {
      validationChangeHome(
        props,
        copyProps,
        updateHostUser,
        {
          indexDBUser: indexDBUser,
          IsOpenMenu: isOpenMenu
        },
        postApiPreHome,
        () => {
          refreshPage()
        },
        () => {
          setIsOpenMenu(true)
        },
        () => {
          setTimeout(() => {
            setIsToursOpen(true)
          }, 500)
        },
        indexDBUser
      )
      setCopyProps(props)
      const { dispatch = null, pageContext = {} } = props
      if (
        dispatch &&
        (pageContext.cliente !== copyProps?.pageContext?.cliente ||
          pageContext.line !== copyProps?.pageContext?.line)
      ) {
        dispatch(setPageContext(pageContext.cliente, pageContext.line))
      }
    }
  })

  const servicesIndexbd = () => {
    if (props.hasOwnProperty('getInfoDb')) {
      props.getInfoDb().then(responde => {
        if (responde.length === 0) {
          setIsOpenMenu(false)
          setPerfilamientoCesantias(false)
          setMockup(false)
        } else if (responde.length > 0) {
          const categorySend = responde[0].category
          let params = queryString.parse(window.location.search)
          let validateQuery =
            params['tipoCliente'] || params['linea'] || params['changeModal']
              ? true
              : false
          if (
            categorySend === 'Inversión' &&
            !validateQuery &&
            process.env.RESTRIGIR_REDIRECT === 'true'
          ) {
            setPerfilamientoCesantias(true)
            setMockup(false)

            const prefix =
              process.env.PATH_PREFIX === ''
                ? 'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
                : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`
            window.location.href = prefix
          } else {
            setPerfilamientoCesantias(false)
            setMockup(false)
          }
        }
      })

      props.getInfoDb().then(responde => {
        if (responde.length > 0) {
          setMockup(false)
          const query = window.location.search
          const categorySend = responde[0].category
          validationLInk(query, responde[0])
          let params = queryString.parse(window.location.search)
          let validateQuery =
            params['tipoCliente'] || params['linea'] || params['changeModal']
              ? true
              : false
          if (
            categorySend === 'Inversión' &&
            !validateQuery &&
            process.env.RESTRIGIR_REDIRECT === 'true'
          ) {
            setPerfilamientoCesantias(true)
            const prefix =
              process.env.PATH_PREFIX === ''
                ? 'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
                : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`
            window.location.href = prefix
          } else {
            setPerfilamientoCesantias(false)
          }
          const indexDBUserName = responde[0].nameuser
          setIndexDBUserName(indexDBUserName)
          const indexDBUser = responde[0]
          setIndexDBUser(indexDBUser)

          const allContentfulBiteProduct = generateDataBiteYoucantmiss(
            props.data,
            indexDBUser,
            mapCategories,
            { indexDBUser: indexDBUser },
            indexProduct,
            props.pageContext
          )
          const allContentfulBiteFeatured = generateDataBite(
            props.data,
            indexDBUser,
            props,
            mapCategories,
            props.pageContext
          )
          setAllContentfulBiteProduct(allContentfulBiteProduct)
          setAllContentfulBiteFeatured(allContentfulBiteFeatured)

          props
            .getF(
              [{ name: 'name', value: indexDBUserName }],
              `${URL_SERVICES}users/${responde[0].host}`,
              true
            )
            .then(result => {
              if (result.length > 0) {
                props.dispatch(addInfoUser(result[result.length - 1]))
              }
            })
            .catch(error => {})
        } else {
          validationLInk(null, null)
          setMockup(true)
          const allContentfulBiteProduct = generateDataBiteYoucantmiss(
            props.data,
            null,
            mapCategories,
            { indexDBUser: indexDBUser },
            indexProduct,
            props.pageContext
          )
          const allContentfulBiteFeatured = generateDataBite(
            props.data,
            null,
            props,
            mapCategories,
            props.pageContext
          )
          setAllContentfulBiteProduct(allContentfulBiteProduct)
          setAllContentfulBiteFeatured(allContentfulBiteFeatured)
        }
      })
    }
  }

  const closeModal = () => {
    if (
      props.pageContext.line !== indexDBUser.category &&
      props.pageContext.cliente !== indexDBUser.type
    ) {
      setIsOpenMenu(false)
      setAllContentfulBiteProduct([])
      setAllContentfulBiteFeatured([])

      redirectHome(indexDBUser)
      disableBody(document.body)
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'hidden'
    } else {
      const prefixPage =
        process.env.PATH_PREFIX === ''
          ? '/'
          : '/' + process.env.PATH_PREFIX + '/'
      setIsOpenMenu(false)
      enableBody(document.body)
      document.body.style.overflowY = 'scroll'
      document.documentElement.style.overflow = null
      navigate(
        `${window.location.origin}${prefixPage}home/${
          indexDBUser.type === 1 ? 'personas' : 'empresas'
        }/${
          indexDBUser.category === 'Ahorro'
            ? 'ahorro'
            : indexDBUser.category === 'Cesantías'
            ? 'cesantias'
            : indexDBUser.category === 'Inversión'
            ? 'inversion'
            : indexDBUser.category === 'Pensión'
            ? 'pension'
            : ''
        }`
      )
    }
  }

  const getLastPodcast = () => {
    let podcasts = []
    if (props.data) {
      podcasts = props.data.allContentfulPodcast.edges
      podcasts = podcasts.map(node => {
        return node.node
      })
      sortData(podcasts)
    }
    return podcasts.length > 0 ? podcasts[0] : null
  }

  const generateDataBeneficioNovedad = (dataT, stateCategory, pageContext) => {
    return filterItems(
      mapCategories(
        props.data,
        pageContext ? pageContext.line : stateCategory.category
      ),
      mapCategories(
        props.data,
        pageContext
          ? pageContext.line === stateCategory.category
            ? stateCategory.subcategory
            : null
          : null
      ),
      mapCategories(
        props.data,
        pageContext ? pageContext.cliente : stateCategory.type
      ),
      dataT
    )
  }

  const deleteDataBaseUser = () => {
    deleteDataBases()
  }

  // if (isOpenMenu) {
  //   document.documentElement.style.overflowX = 'hidden'
  //   document.body.style.overflowX = 'hidden'
  //   document.documentElement.style.overflowY = 'hidden'
  //   document.body.style.overflowY = 'hidden'
  // }

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const titleName = () => {
    let typeName = props.pageContext
      ? props.pageContext.cliente === 1
        ? 'Personas'
        : 'Empresas'
      : indexDBUser.type === 1
      ? 'Personas'
      : 'Empresas'
    let keyH2TitleName = props.pageContext
      ? props.pageContext.line + typeName
      : indexDBUser.category + typeName
    let valueH2TitleName = contenidosHomeh2Title[keyH2TitleName]
    return `${
      props.nameUser
        ? props.nameUser.nameValue.length > 0 &&
          props.nameUser.nameValue.length <= 25
          ? props.nameUser.nameValue + ', ' + valueH2TitleName
          : indexDBUserName.length > 0 && indexDBUserName.length <= 25
          ? indexDBUserName + ', ' + valueH2TitleName
          : capitalizeFirstLetter(valueH2TitleName)
        : indexDBUserName.length > 0 && indexDBUserName.length <= 25
        ? indexDBUserName + ', ' + valueH2TitleName
        : capitalizeFirstLetter(valueH2TitleName)
    }`
  }

  return (
    <>
      <Seo
        pageContext={{
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión'
        }}
      />
      <React.Fragment>
        <div
          className="hidden-lable"
          id={
            props.accessibility
              ? props.accessibility.darkMode
                ? 'accessibility-state-true'
                : 'accessibility-state-false'
              : 'accessibility-state-false'
          }
        />
        <Helmet>
          <meta
            name="facebook-domain-verification"
            content="vqw769x2iqwmnqdx1xocn2dusrruis"
          />
        </Helmet>
        {!perfilamientoCesantias ? (
          <React.Fragment>
            {/* {isOpenMenu && validateStreetCard && !openLink ? (
              <ThemeProvider
                theme={selectTheme(
                  props.pageContext.line,
                  props.accessibility,
                  props.pageContext.cliente
                )}
              >
                <Modal
                  id="encuesta-home"
                  close={() => {
                    closeModal()
                  }}
                  styleBody={{ height: 'auto' }}
                  image={globe}
                  titte="proteccion.com"
                  alt="icon-encuesta"
                  width={width > 769 ? '50%' : '95%'}
                  isCosed={indexDBUser ? false : true}
                  margin=" 30px 0px "
                  style={{
                    overflow: 'scroll',
                    background: 'rgb(250, 251, 252)'
                  }}
                  isLogo={true}
                >
                  <IndexComponents
                    {...props}
                    data={dataIndex}
                    pageContext={props.pageContext}
                    getF={get}
                    getInfoDB={getDataIb}
                    eventClose={() => {
                      enableBody(document.body)
                    }}
                    dataContefull={props.data}
                    layaout={false}
                    next={() => {
                      setIsOpenMenu(false)
                      setMockup(false)
                      servicesIndexbd()
                      document.body.style.overflowY = 'scroll'
                      document.documentElement.style.overflow = null
                    }}
                  />
                </Modal>
              </ThemeProvider>
            ) : null}
            {isOpenMenu && validateStreetCard && openLink ? (
              <ThemeProvider
                theme={selectTheme(
                  props.pageContext.line,
                  props.accessibility,
                  props.pageContext.cliente
                )}
              >
                <Modal
                  id="encuesta-home"
                  close={() => {
                    closeModal()
                  }}
                  styleBody={{ height: 'auto' }}
                  image={globe}
                  titte="proteccion.com"
                  alt="icon-encuesta"
                  width={width > 769 ? '50%' : '95%'}
                  isCosed={indexDBUser ? false : true}
                  margin=" 30px 0px"
                  style={{
                    overflow: 'auto',
                    background: 'rgb(250, 251, 252)'
                  }}
                  OpenEventTour={() => {
                    OpenEventTour()
                  }}
                  IsOpenMenu={isOpenMenu}
                  mockup={mockup}
                  isLogo={true}
                >
                  <IndexComponents
                    {...props}
                    pageContext={props.pageContext}
                    data={dataIndex}
                    getF={get}
                    resetData={true}
                    getInfoDB={getDataIb}
                    eventClose={() => {
                      enableBody(document.body)
                    }}
                    dataContefull={props.data}
                    layaout={false}
                    next={() => {
                      setIsOpenMenu(false)
                      setMockup(false)
                      servicesIndexbd()
                      document.body.style.overflowY = 'scroll'
                      document.documentElement.style.overflow = null
                    }}
                    deleteDataBaseUser={() => {
                      if (
                        !validateStreetCardDelete &&
                        !validatechangeModalDelete
                      ) {
                        deleteDataBaseUser()
                      }
                    }}
                  />
                </Modal>
              </ThemeProvider>
            ) : null} */}
            <div
              style={
                props.accessibility
                  ? props.accessibility.darkMode
                    ? {
                        background: '#1B191F',
                        transition: 'all 0.2s ease-out'
                      }
                    : null
                  : null
              }
              className="container-home"
            >
              <LayoutMain
                colorFooter={'#FAFBFC'}
                showType={true}
                isOpenMenu={false}
                indexDBUserName={indexDBUserName}
                indexDBUser={indexDBUser}
                home={true}
                modal={isOpenMenu}
                isTourGuideActive={isTourOpen}
                isStepMenuTourGuideActive={currentStepTourGuide === 1}
                isTourOpen={isTourOpen}
                isNotUser={() => {
                  window.location.href =
                    process.env.PATH_PREFIX === ''
                      ? '/'
                      : '/' + process.env.PATH_PREFIX + '/'
                }}
                validateStreetCard={() => {
                  setValidateStreetCard(false)
                }}
                OpenEventTour={() => {
                  OpenEventTour()
                }}
                IsOpenMenu={isOpenMenu}
                mockup={mockup}
                defaultTypeUser={props.pageContext?.cliente}
                defaultCategoryUser={props.pageContext?.line}
                defaultSubcategoryUser={
                  props.pageContext?.line === 'Pensión' &&
                  props.pageContext?.cliente === 1
                    ? 'pension-vejez'
                    : ''
                }
              >
                <React.Fragment>
                  <ContainerHomeStyled
                    id="container-home-style"
                    isInversion={
                      props.pageContext
                        ? validateCurrentLine({
                            category: props.pageContext.line,
                            type: props.pageContext.cliente
                          })
                        : validateCurrentLine(indexDBUser)
                    }
                  >
                    {allContentfulBiteFeatured.length > 0 ? (
                      <FeaturedSlider
                        data={allContentfulBiteFeatured}
                        accessibility={props.accessibility}
                        line={
                          props.pageContext
                            ? {
                                category: props.pageContext.line,
                                type: props.pageContext.cliente
                              }
                            : indexDBUser
                        }
                        isStepCardTourGuideActive={currentStepTourGuide === 2}
                        type={
                          props.pageContext
                            ? props.pageContext.cliente
                            : props.perfilamiento.categoria !== ''
                            ? props.nameUser.typeUser
                            : indexDBUser.type
                        }
                      />
                    ) : width > 768 ? (
                      <React.Fragment>
                        <ContentLoader
                          style={{
                            marginLeft: 107,
                            marginTop: 107,
                            height: '70px'
                          }}
                        >
                          <rect
                            x="0"
                            y="10"
                            rx="4"
                            ry="4"
                            width="300"
                            height="18"
                          />
                          <rect
                            x="0"
                            y="40"
                            rx="3"
                            ry="3"
                            width="800"
                            height="10"
                          />
                        </ContentLoader>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                          }}
                        >
                          <SkeletonBiteMobile />
                          <SkeletonBiteMobile />
                          <SkeletonBiteMobile />
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <ContentLoader
                          style={{
                            height: '70px',
                            marginLeft: 16,
                            marginTop: 16
                          }}
                        >
                          <rect
                            x="0"
                            y="10"
                            rx="4"
                            ry="4"
                            width="300"
                            height="18"
                          />
                          <rect
                            x="0"
                            y="40"
                            rx="3"
                            ry="3"
                            width="800"
                            height="10"
                          />
                        </ContentLoader>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                          }}
                        >
                          <SkeletonBiteMobile />
                        </div>
                      </React.Fragment>
                    )}
                  </ContainerHomeStyled>
                  <ContainerHomeStyled
                    isInversion={false}
                    className="container-youcantmiss"
                  >
                    {allContentfulBiteProduct.length > 0 ? (
                      <SessionYouCantMissComponent
                        accessibility={props.accessibility}
                        isStepCard2TourGuideActive={currentStepTourGuide === 3}
                        isStepShowTourGuideActive={currentStepTourGuide === 4}
                        line={
                          props.pageContext
                            ? {
                                category: props.pageContext.line,
                                type: props.pageContext.cliente
                              }
                            : indexDBUser
                        }
                        getF={get}
                        title={titleName()}
                        data={allContentfulBiteProduct}
                        dataFeatured={[]}
                        dataBeneficio={generateDataBeneficioNovedad(
                          generateCleanData(
                            setArrayFeatured(
                              props.data.allContentfulBeneficio.edges,
                              'beneficio'
                            ).slice(),
                            'Relevancia Baja'
                          ),
                          indexDBUser,
                          props.pageContext
                        )}
                        dataNovedad={generateDataBeneficioNovedad(
                          generateCleanData(
                            setArrayFeatured(
                              props.data.allContentfulNovedad.edges,
                              'novedad'
                            ).slice(),
                            'Relevancia Baja'
                          ),
                          indexDBUser,
                          props.pageContext
                        )}
                        userData={props.user}
                        indexArrays={indexProduct}
                        indexDBUser={indexDBUser}
                        type={
                          props.pageContext
                            ? props.pageContext.cliente
                            : props.perfilamiento.categoria !== ''
                            ? props.nameUser.typeUser
                            : indexDBUser.type
                        }
                      />
                    ) : width > 768 ? (
                      <React.Fragment>
                        <ContentLoader
                          style={{
                            marginLeft: 107,
                            marginTop: 107,
                            height: '70px'
                          }}
                        >
                          <rect
                            x="0"
                            y="10"
                            rx="4"
                            ry="4"
                            width="300"
                            height="18"
                          />
                          <rect
                            x="0"
                            y="40"
                            rx="3"
                            ry="3"
                            width="800"
                            height="10"
                          />
                        </ContentLoader>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                          }}
                        >
                          <SkeletonBite />
                          <SkeletonBite />
                          <SkeletonBite />
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <ContentLoader
                          style={{
                            height: '70px',
                            marginLeft: 16,
                            marginTop: 16
                          }}
                        >
                          <rect
                            x="0"
                            y="10"
                            rx="4"
                            ry="4"
                            width="300"
                            height="18"
                          />
                          <rect
                            x="0"
                            y="40"
                            rx="3"
                            ry="3"
                            width="800"
                            height="10"
                          />
                        </ContentLoader>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                          }}
                        >
                          <SkeletonBiteMobile />
                        </div>
                      </React.Fragment>
                    )}
                    {width <= 1024 && width !== 9999 ? (
                      <Anchor
                        className="link-see-more "
                        href={
                          getCurrentHost() +
                          `/${getIdDiv(
                            props.pageContext.cliente === 1
                              ? 'personas'
                              : 'empresas'
                          )}/${getIdDiv(props.pageContext.line)}/`
                        }
                      >
                        <div
                          id="btn-home-show-more-mobile"
                          role="presentation"
                          className={`container-see-more-youcantmiss  ${getClassGTMSeeMoreContentHOME(
                            props.pageContext
                              ? props.pageContext.line
                              : indexDBUser.category
                          )}`}
                        >
                          <SeeMore
                            classGtm={getClassGTMSeeMoreContentHOME(
                              props.pageContext
                                ? props.pageContext.line
                                : indexDBUser.category
                            )}
                            title="Ver más contenidos"
                            symbol="+"
                            isDark={validateCurrentLine(
                              props.pageContext
                                ? {
                                    category: props.pageContext.line,
                                    type: props.pageContext.cliente
                                  }
                                : indexDBUser
                            )}
                            bottom={true}
                            green={true}
                          />
                        </div>
                      </Anchor>
                    ) : null}
                    {validateCurrentLine(
                      props.pageContext
                        ? {
                            category: props.pageContext.line,
                            type: props.pageContext.cliente
                          }
                        : indexDBUser
                    ) ? (
                      <div>
                        <Graph
                          accessibility={props.accessibility}
                          data={props.data.allContentfulInformes.edges}
                          line={props.pageContext.line}
                        />
                        <NewsInversion
                          accessibility={props.accessibility}
                          data={getLastPodcast()}
                        />
                      </div>
                    ) : null}
                  </ContainerHomeStyled>
                  <div>
                    {props.showTest && indexDBUser['category'] && (
                      <ExitStreetSlider
                        line={indexDBUser}
                        accessibility={props.accessibility}
                        changeData={props.nameUser}
                        currentLine={indexDBUser.category}
                        isStepExitTourGuideActive={currentStepTourGuide === 5}
                        data={
                          props.data
                            ? props.data.allContentfulLineaDeNegocio
                            : { edges: [] }
                        }
                        validateStreetCard={e => {
                          setValidateStreetCard(!e)
                          setValidateStreetCardDelete(true)
                          setIsOpenMenu(false)
                        }}
                      />
                    )}
                  </div>
                  {typeof window !== 'undefined' ? (
                    <Tour
                      className="tour-guide-container"
                      showButtons={false}
                      showCloseButton={false}
                      showNavigation={false}
                      startAt={0}
                      showNumber={false}
                      getCurrentStep={curr => {
                        if (currentStepTourGuide !== curr + 1) {
                          setCurrentStepTourGuide(curr + 1)
                        }
                      }}
                      steps={getConfigTourGuide(() => closeEventTour())}
                      // onAfterOpen={disableBody}
                      onBeforeClose={enableBody}
                      isOpen={isTourOpen}
                      onRequestClose={() => closeEventTour()}
                    />
                  ) : null}
                </React.Fragment>
              </LayoutMain>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    </>
  )
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    statusMenu: state.menu.status,
    statusTourguide: state.tourguide.status,
    accessibility: state.accesibility
  }
}

IndexComponent = connect(mapStateToProps)(IndexComponent)

export const IndexPage = props => {
  const data = useLineServiceComplete({
    category: props.pageContext.line,
    type: props.pageContext.cliente
  })

  return (
    <div className="container-page-home">
      <IndexComponent
        {...props}
        data={data}
        getF={get}
        getInfoDb={getDataIb}
        showTest={true}
      />
    </div>
  )
}

export default IndexPage
