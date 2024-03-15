import React, { useEffect, useState } from 'react'
import './home.scss'
import FeaturedSlider from '../components/molecules/banner-bite/featured-slider/featured-slider'
import { connect } from 'react-redux'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from '../utils/select-theme'
import MediumRelevance from '../components/molecules/medium-relevance/medium-relevance'
import { InterestLinkCard } from '../components/molecules/interestLinkCard/InterestLinkCard'
import Anchor from '../components/atoms/anchor/anchor'
import { LowRelevance } from '../components/molecules/low-relevance/low-relevance'

import FilterPills from '../components/molecules/filter-pills/filter-pills'
import ButtonFilterPills from '../components/atoms/button-filter-pills/button-filter-pills'
import ButtonIconFilterPills from '../components/atoms/button-icon-filter-pills/button-icon-filter-pills'
import { cleanDataContent } from '../utils/cleanDataContent'
import { addInfoName } from '../actions/welcome/welcome'
import NewHeader from '../components/organisms/new-header/new-header'
import { PrivilegesBanner } from '../components/molecules/privileges-banner/privileges-banner'
import { SCALE_SIZE_14PX, SCALE_SIZE_16PX, SCALE_SIZE_18PX, SCALE_SIZE_26PX, SCALE_SIZE_30PX, SCALE_SIZE_34PX, scaleLine, scaleText } from '../utils/scaleText'
import Footer from '../components/molecules/footer/footer'
import { isAndroid, isIOS } from 'react-device-detect'

let Home = props => {
  const [allContentfulBiteFeatured, setAllContentfulBiteFeatured] = useState([])
  const [contenidoInteres, setContenidoInteres] = useState([])
  const [interestLinksTitle, setInterestLinksTitle] = useState('')
  const [lowRelevanceTitle, setLowRelevanceTitle] = useState('')
  const [lowRelevanceDescription, setLowRelevanceDescription] = useState('')
  const [allContentfulLowRelevance, setAllContentfulLowRelevance] = useState([])
  const [privilegesBannerContent, setPrivilegesBannerContent] = useState([])
  const [isData, setIsData] = useState(false)
  const [
    allContentfulLowRelevanceFilter,
    setAllContentfulLowRelevanceFilter
  ] = useState([])
  const [indexDBUser, setIndexDBUser] = useState('')
  const [currentStepTourGuide] = useState(0)
  const [
    allContentfulMediumRelevance,
    setAllContentfulMediumRelevance
  ] = useState([])
  const [selectedFilter, setSelectedFilter] = useState(null)
  const typeuser = props.nameUser.typeUser === 1 ? 'Afiliado' : 'Empleador'
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const tipoAfiliado = contenidoInteres.filter(elemento => {
    const tipoDeCliente = elemento.tipoDeCliente.find(
      cliente => cliente.nombre === typeuser
    )
    return tipoDeCliente !== undefined
  }) 

  const tipoAfiliadoRelevanciaAlta = allContentfulBiteFeatured.filter(
    elemento => {
      const tipoDeCliente = elemento.tipoDeCliente.find(
        cliente => cliente.nombre === typeuser
      )
      return tipoDeCliente !== undefined
    }
  )

  const tipoAfiliadoRelevanciaMedia = allContentfulMediumRelevance.filter(
    elemento => {
      const tipoDeCliente = elemento.tipoDeCliente.find(
        cliente => cliente.nombre === typeuser
      )
      return tipoDeCliente !== undefined
    }
  )

  const updateData = () => {
    setAllContentfulBiteFeatured(
      props.nameUser.typeUser === 1
        ? props.data?.allContentfulContenidoHome?.edges[0]?.node?.contenidosRelevanciaAlta.slice(
            0,
            8
          )
        : props.data?.allContentfulContenidoHome?.edges[0]?.node?.contenidosRelevanciaAltaEmpresas.slice(
            0,
            8
          )
    )
    setAllContentfulMediumRelevance(
      props.nameUser.typeUser === 1
        ? props.data?.allContentfulContenidoHome?.edges[0]?.node?.contenidosRelevanciaMedia.slice(
            0,
            4
          )
        : props.data?.allContentfulContenidoHome?.edges[0]?.node?.contenidosRelevanciaMediaEmpresas.slice(
            0,
            4
          )
    )
    setContenidoInteres(
      props.nameUser.typeUser === 1
        ? props.data?.allContentfulContenidoHome?.edges[0]?.node
            ?.enlacesDeInteres
        : props.data?.allContentfulContenidoHome?.edges[0]?.node
            ?.enlacesDeInteresEmpresas
    )
    setAllContentfulLowRelevance(cleanDataContent(props.data, typeuser))
    setPrivilegesBannerContent(
      props.nameUser.typeUser === 1
        ? props.data?.allContentfulContenidoHome?.edges[0]?.node
            ?.contenidosDestacados[0]
        : props.data?.allContentfulContenidoHome?.edges[0]?.node
            ?.contenidosDestacadosEmpresas[0]
    )
  }

  useEffect(() => {
    updateData()
  }, [typeuser])

  useEffect(() => {
    props.dispatch(addInfoName('', props.path.includes('empresas') ? 2 : 1))
    if (props.hasOwnProperty('getInfoDb')) {
      props.getInfoDb().then(responde => {
        const indexDBUser = responde[0]
        setIndexDBUser(indexDBUser)
      })
    }
    updateData()
    setInterestLinksTitle(
      props.data?.allContentfulContenidoHome?.edges[0]?.node?.tituloPrincipal
    )
    setLowRelevanceTitle(
      props.data?.allContentfulContenidoHome?.edges[0]?.node
        ?.tituloContenidosRelevanciaBaja
    )
    setLowRelevanceDescription(
      props.data?.allContentfulContenidoHome?.edges[0]?.node
        ?.descripcionContenidosRelevanciaBaja
    )
    if (props.data?.allContentfulContenidoHome !== undefined) {
      setIsData(true)
    }
  }, [])

  useEffect(() => {
    filterCategory()
  }, [selectedFilter])

  const handleChange = titleContent => {
    if (titleContent === selectedFilter) {
      setSelectedFilter(null)
      return
    }
    setSelectedFilter(titleContent)
  }

  const filterCategory = () => {
    if (selectedFilter === null) {
      setAllContentfulLowRelevanceFilter([])
      return
    }

    setAllContentfulLowRelevanceFilter(
      allContentfulLowRelevance
        .filter(elemento => {
          if (Array.isArray(elemento?.contenido?.lineadenegocio)) {
            return elemento?.contenido?.lineadenegocio.some(
              businessLine =>
                businessLine.tituloAgrupadorContenidos === selectedFilter
            )
          } else {
            return (
              elemento?.contenido?.lineadenegocio?.tituloAgrupadorContenidos ===
              selectedFilter
            )
          }
        })
        .slice(0, 8)
    )
  }

  return (
    <>
      {isData ? (
        <ThemeProvider
          theme={selectTheme(
            indexDBUser?.category,
            props.accessibility,
            indexDBUser?.type
          )}
        >
          <NewHeader typeUser={props.nameUser.typeUser} dispatch={props.dispatch} prefix={prefix} /> 
          <div className="container-new-home">
            <div className="container-main-slider">
              <FeaturedSlider
                data={tipoAfiliadoRelevanciaAlta}
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
                title={
                  props.data?.allContentfulContenidoHome?.edges[0].node
                    .tituloContenidosRelevanciaAlta
                }
              />
            </div>
            <div className="interests-links-title"> 
              <h1 id="interests-links-title"
                  style={{
                        fontSize: scaleText(props.accessibility.fontSize, SCALE_SIZE_30PX, 1.5).fontSize,
                        lineHeight: scaleLine(props.accessibility && props.accessibility.lineSize)
                        }}
              >
                {interestLinksTitle}
              </h1>
            </div> 
            <div className="interests-links-container">
              {tipoAfiliado.slice(0, 6).map((item, index) => (
                <Anchor
                style={{
                  fontSize: scaleText(props.accessibility.fontSize, SCALE_SIZE_16PX, 1.5)
                    .fontSize,
                    lineHeight: scaleLine(props.accessibility && props.accessibility.lineSize)
                }} 
                  className="interests-links-cards"
                  key={index}
                  id={`interest-link-card-${index}`}
                  href={item.LinkCallToAction.LinkCallToAction}
                  target={'_blank'}
                >
                  <div>
                    <InterestLinkCard item={item} accessibility={props.accessibility}/>
                  </div>
                </Anchor>
              ))}
            </div>
            <MediumRelevance
              data={tipoAfiliadoRelevanciaMedia}
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
              title={
                props.data?.allContentfulContenidoHome?.edges[0].node
                  .tituloContenidosRelevanciaMedia
              }
            />
            <div className="low-relevance-filter">
              <FilterPills
                accessibility={props.accessibility.fontSize}
                title={lowRelevanceTitle}
                subtitle={'Filtrar por'}
                description={lowRelevanceDescription}
                data={props.data?.allContentfulLineaDeNegocio?.edges}
                value={selectedFilter}
                handleChange={handleChange}
              />
              <ButtonFilterPills
                accessibility={props.accessibility}
                title="Todos los contenidos"
                link={
                  props.nameUser.typeUser === 1
                    ? `${prefix}personas/categorias`
                    : `${prefix}empresas/categorias`
                }
              />
            </div> 
            <LowRelevance
              data={
                allContentfulLowRelevanceFilter.length > 0
                  ? allContentfulLowRelevanceFilter
                  : allContentfulLowRelevance.slice(0, 8)
              }
              numBite={1}
              index={allContentfulLowRelevance.length}
              accessibility={props.accessibility}
              line={{ category: 'Inversión' }}
              styleSliderCard={{ marginLeft: 98, marginRight: 0 }}
              id={allContentfulLowRelevance.contentful_id}
              type={
                props.pageContext
                  ? props.pageContext.cliente
                  : props.perfilamiento.categoria !== ''
                  ? props.nameUser.typeUser
                  : indexDBUser.type
              }
              actionGA="ClicInternaInversion-ContenidoBienInformado"
            />
            <ButtonIconFilterPills
              title="Todos los contenidos"
              link={
                props.nameUser.typeUser === 1
                  ? `${prefix}personas/categorias`
                  : `${prefix}empresas/categorias`
              }
            /> 
            <PrivilegesBanner data={privilegesBannerContent} accessibility={props.accessibility} />
          </div>
          <Footer 
          indexDBUser={indexDBUser}         
          isIOS={isIOS}
          isAndroid={isAndroid}
          colorFooter={'#FFFFFF'}
          />
        </ThemeProvider>
      ) : null}
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
Home = connect(mapStateToProps)(Home)

export const IndexPage = props => {
  const data = useLineServiceComplete()

  return (
    <div className="container-page-home">
      <Home {...props} data={data} getInfoDb={getDataIb} showTest={true} />
    </div>
  )
}

export default IndexPage
