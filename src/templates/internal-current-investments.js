import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import Like from '../components/atoms/like/like'
import BestMenu from '../components/molecules/best-menu/best-menu'
import mapCategories from '../const/dictionary/map-categories'
import options from '../const/dictionary/options-more-content.json'
import HeaderInternal from '../components/molecules/header-internal/header-internal'
import Header from '../components/molecules/header/header'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import { get } from '../services/service-general/service-general'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { isIOS, isAndroid } from 'react-device-detect'
import Footer from '../components/molecules/footer/footer'
import { getDataMoreContent } from '../utils/moreContent'
import { graphql } from 'gatsby'
import { useCurrentWidth } from 'react-socks'
import ButtonShare from '../components/atoms/button-share/button-share'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import {
  proxyPresentActualidad,
  setArrayProduct
} from '../utils/get-category-alternativas'
import { ThemeProvider } from 'styled-components'
import useSetTypeUserAndCategoryState from './../hooks/useSetTypeUserAndCategoryState'
import { removeInitialAndEndSlash } from '../utils/general-utils'
import { getLinkCallToActionFromPathPages } from '../utils/call-to-action-utils'
import useInternalPathPages from '../hooks/useInternalPathPages'
import ComponentShare from '../components/molecules/component-share/component-share'
import { selectTheme } from '../utils/select-theme'
import Seo from '../components/internal-pages/common/seo/seo'
import './internal-current-investments.scss'

let InternalCurrentInvestments = ({
  location,
  pageContext,
  data,
  dispatch,
  user,
  accessibility,
  userInfoPageContext,
  test
}) => {
  const pathPages = useInternalPathPages()
  let titleInversionData = []
  const widthScreen = useCurrentWidth()
  var isBrowser = typeof window !== 'undefined'
  const dataNovedad = useLineServiceComplete({
    category: pageContext.line,
    type: pageContext.cliente
  })
  const [dataUtils, setdataUtils] = useState([])
  const [itemActive, setitemActive] = useState('')
  const [indexActivo, setindexActivo] = useState(0)
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [filterDataNovedad, setFilterDataNovedad] = useState([])
  const [indexBitestateSecond, setindexBitestateSecond] = useState(0)
  const [onload, setOnload] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [marginAdditional, setMarginAdditional] = useState(false)

  const dataProduct = useLineServiceComplete({
    category: pageContext.line,
    type: pageContext.cliente
  })
  const category_id = mapCategories(dataProduct, 'Inversión')
  const type_id = mapCategories(dataProduct, 1)

  useSetTypeUserAndCategoryState(
    pageContext?.typeCustomer,
    pageContext?.category
  )

  useEffect(() => {
    setdataUtils(
      dataProduct || test
        ? getDataMoreContent(
            dataProduct,
            pageContext.id,
            category_id,
            null,
            type_id,
            indexDBUserName,
            null,
            pageContext.line
          )
        : null
    )
    setTimeout(() => {
      setOnload(true)
    }, 100)
  }, [])

  data.allContentfulActualidadDeInversiones.edges.map(x => {
    titleInversionData.push({
      nombre: x.node.titulo,
      id: x.node.contentful_id,
      UrlseoContenido: x?.node?.urlSeo
        ? removeInitialAndEndSlash(
            getLinkCallToActionFromPathPages(
              pathPages,
              x.node.urlSeo.toLowerCase(),
              userInfoPageContext,
              indexDBUserName
            )
          )
        : null,
      createdAt: x.node.createdAt,
      descripcion: x.node.descripcion.descripcion,
      imagen: x.node.imagen,
      tiempo: x.node.contenidoCorporativo
        ? x.node.contenidoCorporativo.TiempoDeLectura
        : undefined,
      informes: x.node.Informes,
      cifras: [],
      textoCierre: x.node.TextoCierre ? x.node.TextoCierre.TextoCierre : null,
      tituloSeccionPodcast: x.node?.TituloSeccionPodcast || '',
      descripcionSeccionPodcast: x.node?.DescripcionSeccionPodcast || '',
      podcast: x.node.podcast,
      contenidoCorporativo: x.node.contenidoCorporativo
    })
  })
  titleInversionData.sort(function(a, b) {
    if (a.nombre < b.nombre) {
      return -1
    }
    if (a.nombre > b.nombre) {
      return 1
    }
    return 0
  })
  const TabMenu = () => {
    if (titleInversionData) {
      titleInversionData.forEach((x, i) => {
        if (x.id === pageContext.id) {
          setindexActivo(i)
        }
      })
    }
  }

  const filterCategoria = (data, category) => {
    if (category) {
      return data.filter(item => {
        return (
          item?.category.filter(
            catego => category.indexOf(catego.contentful_id) >= 0
          ).length > 0
        )
      })
    }
  }

  const convertDataInversion = () => {
    let newDataNovedad = []
    if (dataNovedad) {
      dataNovedad.allContentfulNovedad.edges.map(itemsnovedad => {
        newDataNovedad.push(setArrayProduct(itemsnovedad))
      })
    }
    const filterData = filterCategoria(newDataNovedad, [
      '4ZiidHPjG8Bz3Q0bdS9aRb'
    ]).sort(function(a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt)
    })
    setFilterDataNovedad(filterData)
    setindexBitestateSecond(filterData.length)
  }

  useEffect(TabMenu, [])
  useEffect(convertDataInversion, [dataNovedad])
  const getTypeNode = itemnode => {
    const nodeElement = itemnode['node'] ? itemnode.node : itemnode
    return nodeElement['tipoDeCliente']
      ? nodeElement.tipoDeCliente.length === 1
        ? nodeElement.tipoDeCliente[0].nombre === 'Afiliado'
          ? 'Persona'
          : 'Empresa'
        : 'Persona'
      : 'Persona'
  }

  const resultUser = user => {
    setindexDBUserName(user)
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

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
        <React.Fragment>
          {onload || test ? (
            <div
              className="internal-current-investments"
              id="internal-current-investments"
              style={{ background: '#FFFFFF' }}
            >
              <Header
                showTypePerson={true}
                isOpenMenu={false}
                defaultTypeUser={pageContext?.cliente}
                defaultCategoryUser={pageContext?.line}
                defaultSubcategoryUser={pageContext?.sublinea}
                indexDBUserName={indexDBUserName.nameuser}
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
                    location={location}
                    defaultTypeUser={pageContext?.cliente}
                    defaultCategoryUser={pageContext?.line}
                    defaultSubcategoryUser={pageContext?.sublinea}
                  />
                )}
                <div className="bread-crumbs" />
              </div>
              {onload || test ? (
                <BestMenu
                  options={titleInversionData}
                  setitemActive={setitemActive}
                  active={itemActive}
                  setindexActivo={setindexActivo}
                  indexActivo={indexActivo}
                  redirectUrl={true}
                  inversion={true}
                  categoryGtm="Inversion"
                  actionGtm="ClicInternaInversion-Menu"
                >
                  <section
                    className="container-internal-content-componente-header-of-inversions"
                    id="container-internal-content-componente-header-inversiones"
                  >
                    <HeaderInternal
                      titulo={titleInversionData[indexActivo].nombre}
                      subtitle={titleInversionData[indexActivo].descripcion}
                      inversiones={true}
                      tiempo={titleInversionData[indexActivo].tiempo}
                    />
                  </section>
                  {proxyPresentActualidad(
                    titleInversionData[indexActivo].id,
                    titleInversionData,
                    indexActivo,
                    user,
                    indexDBUserName,
                    filterDataNovedad,
                    indexBitestateSecond,
                    accessibility
                  )}
                  {/* {titleInversionData[indexActivo].id !==
                "6kLqtSng0Jz7Wt8LegB9mB" ? ( */}
                  <div className="separator-internal" />
                  {/* ) : null} */}
                  {/* {titleInversionData[indexActivo].id !== */}
                  {/* "6kLqtSng0Jz7Wt8LegB9mB" ? ( */}
                  <section className="internal-current-investments-like">
                    <Like
                      line={'Inversión'}
                      item={itemActive}
                      title={'¿Te gustó esta información?'}
                      pathname={window.location}
                      indexDBUser={indexDBUserName}
                    />
                    <div className="internal-current-investments-section-share-component">
                      <ButtonShare
                        title={titleInversionData[indexActivo].nombre}
                        line={'Inversión'}
                        type={getTypeNode(titleInversionData[indexActivo])}
                        isShare={isShare}
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
                          type="Persona"
                          title={titleInversionData[indexActivo].nombre}
                          url={location.href}
                          line="Inversión"
                          isActive={isShare}
                          setIsShare={setIsShare}
                        />
                      </div>
                    </div>
                  </section>
                  {/* ) : null} */}
                </BestMenu>
              ) : null}

              {/* {titleInversionData[indexActivo].id !== "6kLqtSng0Jz7Wt8LegB9mB" ? ( */}
              <ExitStreet
                accessibility={accessibility}
                dataUtils={dataUtils}
                options={options}
                widthScreen={widthScreen}
                pageContext={pageContext}
                line={'Inversión'}
                indexDBUserName={indexDBUserName}
              />
              {/* ) : null} */}
              <Footer
                isIOS={isIOS}
                isAndroid={isAndroid}
                isInterna={true}
                colorFooter={'#FAFBFC'}
              />
            </div>
          ) : null}
        </React.Fragment>
      </ThemeProvider>
    </>
  )
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility,
    userInfoPageContext: state.pageContext
  }
}

InternalCurrentInvestments = connect(mapStateToProps)(
  InternalCurrentInvestments
)

export default InternalCurrentInvestments

export const pageQuery = graphql`
  query PageContentBySlugInversion($ids: [String!]) {
    allContentfulActualidadDeInversiones(
      filter: { contentful_id: { in: $ids } }
    ) {
      edges {
        node {
          titulo
          contentful_id
          urlSeo
          TituloSeccionPodcast
          DescripcionSeccionPodcast
          contenidoCorporativo {
            TiempoDeLectura
            CuerpoContenido {
              json
            }
            descripcionCallToAction {
              descripcionCallToAction
            }
            linkCallToAction {
              linkCallToAction
            }
          }
          podcast {
            lineaDeProducto {
              nombre
              contentful_id
            }
            titulo
            OrigenDeAudio
            linkPodcast {
              linkPodcast
            }
            descripcion
            updatedAt
          }
          Informes {
            updatedAt
            titulo
            linkCallToActionInformes {
              linkCallToActionInformes
            }
            textoIntroductorioBite
            contentful_id
            tipoDeInforme
            contenido {
              tituloCorto

              linkCallToAction
              Tema {
                contentful_id
                tituloCorto
              }
              textoIntroductorio
              textoCallToActionBite
              urlSeo
              contentful_id
              relevancia
              descripcioncorta
              updatedAt
              imagenpequena {
                file {
                  fileName
                }
                fluid {
                  src
                }
              }
              tipoDeCliente {
                contentful_id
                nombre
              }
              categoriaCliente {
                descripcion
                contentful_id
              }
            }
            lineaDeProducto {
              nombre
              contentful_id
            }
          }
          imagen {
            file {
              url
              fileName
            }
            description
            title
          }
          descripcion {
            id
            descripcion
          }
        }
      }
    }
  }
`
