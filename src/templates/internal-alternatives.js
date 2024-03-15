import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { connect } from 'react-redux'
import { useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import ButtonShare from '../components/atoms/button-share/button-share'
import Like from '../components/atoms/like/like'
import BestMenu from '../components/molecules/best-menu/best-menu'
import ComponentShare from '../components/molecules/component-share/component-share'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import Footer from '../components/molecules/footer/footer'
import HeaderOficina from '../components/molecules/header-oficina/header-oficina'
import Header from '../components/molecules/header/header'
import mapCategories from '../const/dictionary/map-categories'
import options from '../const/dictionary/options-more-content.json'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import useInternalPathPages from '../hooks/useInternalPathPages'
import useSetTypeUserAndCategoryState from '../hooks/useSetTypeUserAndCategoryState'
import { get } from '../services/service-general/service-general'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { getLinkCallToActionFromPathPages } from '../utils/call-to-action-utils'
import { removeInitialAndEndSlash } from '../utils/general-utils'
import {
  proxyPresent,
  setArrayProduct
} from '../utils/get-category-alternativas'
import { getDataMoreContent } from '../utils/moreContent'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { selectTheme } from '../utils/select-theme'
import './internal-alternatives.scss'
import Seo from '../components/internal-pages/common/seo/seo'

let InternalAlternatives = ({
  location,
  pageContext,
  data,
  dispatch,
  test,
  accessibility,
  userInfoPageContext
}) => {
  const pathPages = useInternalPathPages()
  let titleInversionData = []
  const widthScreen = useCurrentWidth()
  var isBrowser = typeof window !== 'undefined'
  const dataNovedad = useLineServiceComplete({
    category: pageContext.line,
    type: pageContext.cliente
  })
  const [isShare, setIsShare] = useState(false)
  const locationBread = location
  const [dataUtils, setdataUtils] = useState([])
  const [itemActive, setitemActive] = useState('')
  const [indexActivo, setindexActivo] = useState(0)
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [filterDataNovedad, setFilterDataNovedad] = useState([])
  const [indexBitestateSecond, setindexBitestateSecond] = useState(0)
  const [onload, setOnload] = useState(false)
  const [marginAdditional, setMarginAdditional] = useState(false)
  const dataProduct = useLineServiceComplete({
    category: pageContext.line,
    type: pageContext.cliente
  })
  useSetTypeUserAndCategoryState(
    pageContext?.typeCustomer,
    pageContext?.category
  )
  const category_id = mapCategories(dataProduct, 'Inversión')
  const type_id = mapCategories(dataProduct, 1)

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
        : []
    )
    setTimeout(() => {
      setOnload(true)
    }, 100)
  }, [])

  data.allContentfulAlternativaCerrada.edges.map(x => {
    titleInversionData.push({
      nombre: x.node.titulo,
      id: x.node.contentful_id,
      UrlseoContenido: x?.node?.urlSeo?.urlSeo
        ? removeInitialAndEndSlash(
            getLinkCallToActionFromPathPages(
              pathPages,
              x.node.urlSeo.urlSeo.toLowerCase(),
              userInfoPageContext,
              indexDBUserName
            )
          )
        : null,
      createdAt:
        x.node.contentful_id === '4iyIbURlwNfeTUwnjgHBdI'
          ? (x.node.createdAt + '').replace('21:32:', '21:30:')
          : x.node.createdAt,
      descripcion: x.node.descripcion.descripcion,
      imagen: x.node.imagen,
      tiempo: 0,
      alternatives: x.node.NombreAlternativaCerrada
    })
  })

  titleInversionData.sort(function(a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt)
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
              className="internal-alternatives"
              id="internal-alternatives"
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
              <main className="responsive-mobile-internas">
                {onload || test ? (
                  <BestMenu
                    options={titleInversionData}
                    setitemActive={setitemActive}
                    active={itemActive}
                    setindexActivo={setindexActivo}
                    indexActivo={indexActivo}
                    redirectUrl={true}
                    inversion={true}
                  >
                    <section
                      className="internal-alternatives-header"
                      id="internal-alternatives-header"
                    >
                      <HeaderOficina
                        accessibility={accessibility}
                        showCoverImage
                        data={{
                          title: titleInversionData[indexActivo].nombre,
                          subtitle: titleInversionData[indexActivo].descripcion,
                          image: titleInversionData[indexActivo].imagen.file.url
                        }}
                      />
                    </section>
                    {proxyPresent(
                      titleInversionData[indexActivo].id,
                      titleInversionData,
                      indexActivo,
                      widthScreen
                    )}
                  </BestMenu>
                ) : null}
                <div className="separator" />
                <section className="internal-alternatives-like">
                  <Like
                    indexDBUser={indexDBUserName}
                    line="Inversión"
                    item={{
                      node: {}
                    }}
                    pathname={locationBread}
                    title={titleInversionData[indexActivo].nombre}
                  />
                  <div
                    id="internal-alternatives-like-share"
                    className="internal-alternatives-like-share"
                  >
                    <ButtonShare
                      title={titleInversionData[indexActivo].nombre}
                      type="Persona"
                      line="Inversión"
                      setIsShare={setIsShare}
                      isShare={isShare}
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
                        title={titleInversionData[indexActivo].nombre}
                        type="Persona"
                        line="Inversión"
                        url={locationBread.href}
                        isActive={isShare}
                        setIsShare={setIsShare}
                      />
                    </div>
                  </div>
                </section>
                <ExitStreet
                  accessibility={accessibility}
                  dataUtils={dataUtils}
                  options={options}
                  widthScreen={widthScreen}
                  pageContext={pageContext}
                  line={'Inversión'}
                  filterDataNovedad={filterDataNovedad}
                  indexDBUserName={indexDBUserName}
                />
              </main>

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

InternalAlternatives = connect(mapStateToProps)(InternalAlternatives)

export default InternalAlternatives

export const pageQuery = graphql`
  query PageContentBySlugAlternatives($ids: [String!]) {
    allContentfulAlternativaCerrada(filter: { contentful_id: { in: $ids } }) {
      edges {
        node {
          contentful_id
          urlSeo {
            urlSeo
          }
          titulo
          imagen {
            file {
              url
              fileName
            }
            description
            title
          }
          descripcion {
            descripcion
          }
          NombreAlternativaCerrada {
            CuerpoContenido {
              json
            }
            TextoCallToAction1
            TextoCallToAction2
            LinkCallToAction1 {
              LinkCallToAction1
            }
            LinkCallToAction2 {
              LinkCallToAction2
            }
            descripcion {
              descripcion
            }
            titulo
          }
          createdAt
        }
      }
    }
  }
`
