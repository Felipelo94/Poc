import React, { useState, useEffect } from 'react'
import LayoutMain from '../templates/layout-main'
import './contenido.scss'
import HeaderSession from '../components/molecules/header-session/header-session'
import { connect } from 'react-redux'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { get } from '../services/service-general/service-general'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import ContentUtil from '../utils/ContentUtil'
import mapCategories from '../const/dictionary/map-categories'
import ScrollAnimate from '../components/molecules/scroll-animation/scroll-animation'
import Filtercontenido from '../components/molecules/filter-contenido/filter-contenido'
import SkeletonBite from '../components/atoms/skeleton-bite/skeleton-bite'
import ContentLoader from 'react-content-loader'
import { transformData } from '../utils/transform-data'
import { filterItems } from '../utils/filter-contenido'
import useSetTypeUserAndCategoryState from './../hooks/useSetTypeUserAndCategoryState'
import Seo from '../components/internal-pages/common/seo/seo'

export let Contenido = ({
  location,
  dataBite,
  getF,
  getInfoDb,
  dispatch,
  userData,
  dataContenido,
  indexDBUserName,
  setindexDBUserName,
  accessibility,
  pageContext
}) => {
  const [category, setCategory] = useState('Cesantías')
  const [filterData, setfilterData] = useState([])
  const [dataReset, setDataReset] = useState([])
  const contentUtil = new ContentUtil()
  let isBrowser = typeof window !== 'undefined'
  const data = dataContenido
    ? dataContenido
    : dataBite
    ? dataBite.dataInternal
    : null

  const filterDataTranforms = () => {
    if (indexDBUserName || pageContext) {
      let dataFilter = filterItems(
        transformData(data, contentUtil),
        mapCategories(
          dataContenido,
          pageContext ? pageContext.line : indexDBUserName.category
        ),
        mapCategories(
          dataContenido,
          pageContext
            ? pageContext.line === indexDBUserName.category
              ? indexDBUserName.subcategory
              : null
            : null
        ),
        mapCategories(
          dataContenido,
          pageContext?.cliente ? pageContext.cliente : indexDBUserName.type
        )
      )
      if (
        (pageContext?.line === 'Pensión' && indexDBUserName.category) ===
          'Pensión' &&
        indexDBUserName.subcategory === 'pension-vejez'
      ) {
        const ageProfile = indexDBUserName.age
        const genreProfile = indexDBUserName.gender
        const dataFinalNull = dataFilter.filter(
          item => item.generoEdad === null
        )
        const dataFinalNotNull = dataFilter.filter(
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

        dataFilter = dataFinalNull.concat(dataFinalByAgeGenre)
      }

      dataFilter.sort(function(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })

      setfilterData(dataFilter)
      setDataReset(dataFilter)
    } else {
      const dataFilterDefault = transformData(data, contentUtil)
      setfilterData(dataFilterDefault)
      setDataReset(dataFilterDefault)
    }
  }

  useSetTypeUserAndCategoryState(
    pageContext?.typeCustomer,
    pageContext?.category
  )
  useEffect(filterDataTranforms, [indexDBUserName, pageContext])

  const componentWillMountUser = () => {
    sendUserDataRedux(
      getInfoDb,
      setindexDBUserName,
      getF,
      dispatch,
      addInfoUser
    )
    if (pageContext) {
      setCategory(pageContext.line)
    } else if (indexDBUserName.category) {
      setCategory(indexDBUserName.category)
    } else if (userData) {
      if (userData.userValue) {
        if (!Array.isArray(userData.userValue)) {
          if (userData.userValue.hasOwnProperty('category')) {
            setCategory(userData.userValue.category)
          }
        }
      }
    }
  }

  useEffect(() => {
    setCategory(pageContext?.line ? pageContext.line : indexDBUserName.category)
  }, [indexDBUserName, pageContext])
  useEffect(componentWillMountUser, [])

  return (
    <>
      <Seo
        pageContext={{
          title: 'Contenidos' + (category ? ' ' + category : '')
        }}
      />
      <div className="container-categoria-internal">
        <LayoutMain
          classBread="container-categoria-internal-breadcrumb"
          location={location}
          isBrowser={isBrowser}
          crumbLabel={category}
          showType={true}
          showQuickAccess={false}
          defaultTypeUser={pageContext?.cliente}
          defaultCategoryUser={pageContext?.line}
          defaultSubcategoryUser={
            pageContext?.line === 'Pensión' && pageContext?.cliente === 1
              ? 'pension-vejez'
              : ''
          }
          isOpenMenu={false}
          indexDBUserName={indexDBUserName.nameuser}
          home={false}
          showBread={true}
        >
          <div className="container-categoria-internal-header">
            {filterData.length > 0 ? (
              <HeaderSession
                title={category ? category : ''}
                isDark={category === 'Inversión'}
                subtitle={
                  category
                    ? `En este espacio podrás encontrar todo lo que necesites saber sobre ${category}`
                    : 'En este espacio podrás encontrar todo lo que necesites saber acerca de Pensiones, Cesantías, Ahorro e Inversión.'
                }
                className="title-bold"
                tamaño="32px"
              />
            ) : (
              <ContentLoader>
                <rect x="0" y="10" rx="4" ry="4" width="300" height="18" />
                <rect x="0" y="40" rx="3" ry="3" width="800" height="10" />
              </ContentLoader>
            )}
          </div>

          {category && filterData.length > 0 ? (
            <div className="container-categoria-internal-filter">
              <Filtercontenido
                setfilterData={setfilterData}
                category={category}
                data={data.allContentfulTema}
                indexDBUserName={
                  pageContext
                    ? {
                        category: pageContext.line,
                        type: pageContext.cliente
                      }
                    : indexDBUserName
                }
                type={pageContext ? pageContext.cliente : indexDBUserName.type}
                isDark={category === 'Inversión'}
                dataReset={dataReset}
              />
            </div>
          ) : null}

          {filterData.length > 0 ? (
            <ScrollAnimate
              accessibility={accessibility}
              data={filterData}
              type={pageContext ? pageContext.cliente : indexDBUserName.type}
              subcategorySelectedUser={
                pageContext
                  ? pageContext.line === indexDBUserName.category
                    ? indexDBUserName.subcategory
                    : null
                  : null
              }
              line={{ category }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0px 11px',
                justifyContent: 'center'
              }}
            >
              <SkeletonBite />
              <SkeletonBite />
              <SkeletonBite />
              <SkeletonBite />
            </div>
          )}
        </LayoutMain>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    dataBite: state.internalCategoria,
    userData: state.youcantmiss,
    accessibility: state.accesibility
  }
}
Contenido = connect(mapStateToProps)(Contenido)

function ContenidoComponente({ location, dataBite, userData, pageContext }) {
  const [indexDBUserName, setindexDBUserName] = useState('')

  const dataCompleta = useLineServiceComplete(
    pageContext
      ? {
          category: pageContext.line,
          type: pageContext.cliente
        }
      : indexDBUserName
  )
  return (
    <div>
      <Contenido
        location={location}
        dataBite={dataBite}
        getF={get}
        getInfoDb={getDataIb}
        userData={userData}
        dataContenido={dataCompleta}
        indexDBUserName={indexDBUserName}
        setindexDBUserName={setindexDBUserName}
        pageContext={pageContext}
      />
    </div>
  )
}

export default ContenidoComponente
