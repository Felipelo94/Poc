import React, { useEffect, useState } from 'react'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from '../utils/select-theme'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import { connect } from 'react-redux'
import './categories.scss'
import FilterPills from '../components/molecules/filter-pills/filter-pills'
import SelectComponent from '../components/atoms/select/select-component'
import { ReactComponent as ImageXIcon } from '../assets/images/x-circle.svg'
import NewHeader from '../components/organisms/new-header/new-header'
import { addInfoName } from '../actions/welcome/welcome'
import ScrollAnimate from '../components/molecules/scroll-animation/scroll-animation'
import { cleanDataContent } from '../utils/cleanDataContent'
import NewBreadCrumb from '../components/atoms/new-bread-crumb.js/new-bread-crumb'
import Footer from '../components/molecules/footer/footer'
import { isAndroid, isIOS } from 'react-device-detect'

let Categories = props => {
  const [indexDBUser, setIndexDBUser] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [allData, setAllData] = useState([])
  const [allDataFilter, setAllDataFilter] = useState([])
  const [dataTopic, setDataTopic] = useState([])
  const [dataTopicFilter, setDataTopicFilter] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState(null)
  const typeUser = props.nameUser.typeUser === 1 ? 'Afiliado' : 'Empleador'
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const getDataTopic = () => {
    const buildObjects = props.data?.allContentfulTema?.edges.map(element => ({
      value: element.node.tituloCorto,
      label: element.node.tituloCorto,
      lineaDeNegocio: element.node.lineaDeProducto,
      tipoAfiliado: element.node.tipoDeCliente,
      tituloFiltro: element.node.titulo
    }))

    return buildObjects.filter(element =>
      element.tipoAfiliado.some(type => type.nombre === typeUser)
    )
  }

  const updateData = () => {
    setAllData(cleanDataContent(props.data, typeUser))
  }

  useEffect(() => {
    if (!selectedFilter && !selectedOption) {
      setAllDataFilter([])
      return
    }
    if (selectedFilter && selectedOption) {
      setAllDataFilter(
        allData.filter(elemento => {
          const lineaDeNegocioArray = Array.isArray(
            elemento?.contenido?.lineadenegocio
          )
            ? elemento.contenido.lineadenegocio
            : [elemento.contenido.lineadenegocio]

          const lineaDeNegocioFilter = lineaDeNegocioArray.filter(
            businessLine =>
              businessLine.tituloAgrupadorContenidos === selectedFilter
          )

          const temaFilter =
            Array.isArray(elemento?.contenido?.Tema) &&
            elemento?.contenido?.Tema.some(
              tema => tema.titulo === selectedOption.tituloFiltro
            )

          return lineaDeNegocioFilter.length > 0 && temaFilter
        })
      )
    } else if (selectedFilter) {
      setAllDataFilter(
        allData.filter(elemento => {
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
      )
    } else {
      setAllDataFilter(
        allData.filter(elemento => {
          const temaFilter =
            Array.isArray(elemento?.contenido?.Tema) &&
            elemento?.contenido?.Tema.some(
              tema => tema.titulo === selectedOption.tituloFiltro
            )
          return temaFilter
        })
      )
    }
  }, [selectedFilter, selectedOption])

  useEffect(() => {
    updateData()
  }, [typeUser])

  useEffect(() => {
    props.dispatch(addInfoName('', props.path.includes('empresas') ? 2 : 1))
    if (props.hasOwnProperty('getInfoDb')) {
      props.getInfoDb().then(responde => {
        const indexDBUser = responde[0]
        setIndexDBUser(indexDBUser)
      })
    }
    setTitle(
      props.data?.allContentfulContenidoHome?.edges[0]?.node
        ?.tituloInternaCategorias
    )
    setDescription(
      props.data?.allContentfulContenidoHome?.edges[0]?.node
        ?.descripcionInternaCategorias
    )
    setDataTopic(getDataTopic())
    updateData()
  }, [])

  useEffect(() => {
    setDataTopicFilter(
      dataTopic.filter(element =>
        element.lineaDeNegocio.some(
          businessLine =>
            businessLine.tituloAgrupadorContenidos === selectedFilter
        )
      )
    )
  }, [selectedFilter])

  const handleChange = titleContent => {
    if (titleContent === selectedFilter) {
      setSelectedFilter(null)
      setSelectedOption(null)
      return
    }
    setSelectedFilter(titleContent)
    setSelectedOption(null)
  }

  return (
    <ThemeProvider
      theme={selectTheme(
        indexDBUser?.category,
        props.accessibility,
        indexDBUser?.type
      )}
    >
      <NewHeader typeUser={props.nameUser.typeUser} dispatch={props.dispatch} prefix={prefix} />
      <NewBreadCrumb
        typeUser={props.nameUser.typeUser}
        breadCrumbElements={[{ word: 'categorias', url: false }]}
        prefix={prefix}
      />
      <div className="container-new-categories">
        <div className="container-filter-categories">
          <FilterPills
            title={title}
            description={description}
            accessibility={props.accessibility.fontSize}
            data={props.data?.allContentfulLineaDeNegocio?.edges}
            value={selectedFilter}
            handleChange={handleChange}
          />
        </div>
        <div className="container-filter-topics">
          <span className="container-filter-topics-span">
            Selecciona un tema de interés
          </span>
          <div className="container-filter-topics-select">
            <SelectComponent
              dataOptions={
                dataTopicFilter.length > 0 ? dataTopicFilter : dataTopic
              }
              handleChange={selected => setSelectedOption(selected)}
              value={selectedOption}
              placeHolder={'Todos los temas'}
            />
          </div>
          <div
            className={`container-filter-topics-clear-filter`}
            id="clear-filter"
            role="button"
            tabIndex={0}
            onClick={() => {
              setSelectedFilter(null)
              setSelectedOption(null)
            }}
            onKeyDown={() => {
              setSelectedFilter(null)
              setSelectedOption(null)
            }}
          >
            <span>Limpiar filtros</span>
            <ImageXIcon
              alt={`Ícono de un círculo con una x adentro, con el texto "Limpiar filtro", para eliminar los filtros aplicados en el contenido`}
              title="Ícono de Limpiar Filtro"
              style={{ marginLeft: 8 }}
            />
          </div>
        </div>
        <ScrollAnimate
          accessibility={props.accessibility}
          data={allDataFilter.length > 0 ? allDataFilter : allData}
          type={props.nameUser.typeUser}
        />
      </div>
      <Footer           
          isIOS={isIOS}
          isAndroid={isAndroid}
          colorFooter={'#FFFFFF'}
          />
    </ThemeProvider>
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
Categories = connect(mapStateToProps)(Categories)

export const CategoriesPage = props => {
  const data = useLineServiceComplete()

  return (
    <div className="container-page-home">
      <Categories
        {...props}
        data={data}
        getInfoDb={getDataIb}
        showTest={true}
      />
    </div>
  )
}

export default CategoriesPage
