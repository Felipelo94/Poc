import React, { useState } from 'react'
import { useCurrentWidth } from 'react-socks'
import { ReactComponent as ImageXIcon } from '../../../assets/images/x-circle.svg'
import mapCategories from '../../../const/dictionary/map-categories'
import { useLineServiceComplete } from '../../../const/graphql/use-line-services-complete'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents,
  sendGaPush
} from '../../../utils/classGtmUtil'
import SelectComponent from '../../atoms/select/select-component'
import './filter-contenido.scss'

export const CleanData = ({
  category,
  subcategorySelectedUser,
  type,
  isDark,
  setfilterData,
  dataReset,
  setTemaActive
}) => {
  const categoryWithoutAccents = removeAccents(category)
  return (
    <div
      className={`container-filter-contenido-reset`}
      id="container-filter-contenido-reset"
      style={{ color: isDark ? '#000000' : '#0033a0' }}
      onClick={() => {
        setfilterData(dataReset)
        setTemaActive(null)
        sendGaPush(
          categoryWithoutAccents,
          `Clic${
            type === 1 ? 'Persona' : 'Empresa'
          }${getSubCategoryNameWhenIsPensionAndPerson(
            type,
            categoryWithoutAccents,
            subcategorySelectedUser
          )}-ContenidosContenidoFiltro`,
          'LimpiarFiltro'
        )
      }}
    >
      <span
        className={`gtm${removeAccents(category)}${
          type === 1 ? 'Pers' : 'Emp'
        }ContenLimpiarFiltro`}
      >
        Limpiar filtro
      </span>
      <ImageXIcon
        className={`gtm${removeAccents(category)}${
          type === 1 ? 'Pers' : 'Emp'
        }ContenLimpiarFiltro`}
        alt={`Ícono de un círculo con una x adentro, con el texto "Limpiar filtro", para eliminar los filtros aplicados en el contenido`}
        title="Ícono de Limpiar Filtro"
        style={{ marginLeft: 8 }}
      />
    </div>
  )
}

export const OptionsData = ({
  result,
  filterDataContenidos,
  category,
  subcategorySelectedUser,
  temaActive,
  isDark,
  dataReset,
  type
}) => {
  const categoryWithoutAccents = removeAccents(category)
  return result.map(x => {
    return (
      <div
        onClick={() => {
          filterDataContenidos(x.node.contentful_id, dataReset)
          sendGaPush(
            categoryWithoutAccents,
            `Clic${
              type === 1 ? 'Persona' : 'Empresa'
            }${getSubCategoryNameWhenIsPensionAndPerson(
              type,
              categoryWithoutAccents,
              subcategorySelectedUser
            )}-ContenidosContenidoFiltro`,
            x.node.tituloCorto
          )
        }}
        className={
          temaActive === x.node.contentful_id
            ? 'container-filter-contenido-active' + (isDark ? '-dark' : '')
            : 'container-filter-contenido-inactive' + (isDark ? '-dark' : '')
        }
        id={'container-filter-contenido-' + x.node.contentful_id}
      >
        <span>{x.node.tituloCorto}</span>
      </div>
    )
  })
}

export default function Filtercontenido({
  setfilterData,
  dataReset,
  isDark,
  category,
  type,
  data,
  indexDBUserName
}) {
  const dataCompleta = useLineServiceComplete(indexDBUserName)
  let id_categoria = mapCategories(dataCompleta, indexDBUserName.category)
  let id_type = mapCategories(dataCompleta, indexDBUserName.type)
  const subcategorySelectedUser = indexDBUserName?.subcategory ?? ''
  const dataSelect = []
  const [temaActive, setTemaActive] = useState(null)
  const [selectedOption, setselectedOption] = useState(null)

  const filterTema = data.edges.filter(itemTema => {
    let arrayCategorias = []
    let arrayType = []

    if (itemTema.node.lineaDeProducto) {
      itemTema.node.lineaDeProducto.map(x => {
        arrayCategorias.push(x.contentful_id)
        return x.contentful_id
      })
    }

    if (itemTema.node.tipoDeCliente) {
      itemTema.node.tipoDeCliente.map(x => {
        arrayType.push(x.contentful_id)
        return x.contentful_id
      })
    }

    const arrayLineaNegocio = id_categoria
      ? arrayCategorias.filter(catego => id_categoria.indexOf(catego) >= 0)
          .length > 0 &&
        arrayType.filter(typeCliente => id_type.indexOf(typeCliente) >= 0)
          .length > 0
      : itemTema
    return arrayLineaNegocio
  })

  const filterDataContenidos = (tema, dataContenido) => {
    let filterContenido
    filterContenido = dataContenido.filter(itemContenido => {
      let arrayTemas = []
      if (itemContenido) {
        itemContenido.tema.map(x => {
          arrayTemas.push(x.contentful_id)
          return x.contentful_id
        })
      }
      return tema
        ? arrayTemas.filter(catego => tema.indexOf(catego) >= 0).length > 0
        : itemContenido
    })
    if (filterContenido.length > 0) {
      setfilterData(filterContenido)
      setTemaActive(tema)
    } else {
      setfilterData(dataReset)
      setTemaActive(null)
    }
    return filterContenido
  }

  const handleChange = x => {
    if (dataSelect.contentful_id === 'reset') {
      setfilterData(dataReset)
      setTemaActive(null)
      setselectedOption(null)
    } else {
      setselectedOption(x)
      filterDataContenidos(x.contentful_id, dataReset)
    }
  }

  if (useCurrentWidth() <= 1024) {
    dataSelect.push({
      contentful_id: 'reset',
      tituloCorto: 'Ver todos los contenidos',
      value: 'reset',
      label: 'Ver todos los contenidos'
    })
    filterTema.map(elementItems => {
      dataSelect.push({
        contentful_id: elementItems.node.contentful_id,
        tituloCorto: elementItems.node.tituloCorto,
        value: elementItems.node.contentful_id,
        label: elementItems.node.tituloCorto
      })
    })
  }

  return (
    <React.Fragment>
      {useCurrentWidth() > 1024 ? (
        <div
          className="container-filter-contenido"
          id="container-filter-contenido"
        >
          <React.Fragment>
            <OptionsData
              result={filterTema}
              filterDataContenidos={filterDataContenidos}
              category={category}
              subcategorySelectedUser={subcategorySelectedUser}
              temaActive={temaActive}
              isDark={isDark}
              dataReset={dataReset}
              type={type}
            />
            <CleanData
              category={category}
              subcategorySelectedUser={subcategorySelectedUser}
              type={type}
              isDark={isDark}
              setfilterData={setfilterData}
              dataReset={dataReset}
              setTemaActive={setTemaActive}
            />
          </React.Fragment>
        </div>
      ) : (
        <div style={useCurrentWidth() <= 1024 ? { margin: '0px 15px' } : {}}>
          <SelectComponent
            dataOptions={dataSelect}
            handleChange={handleChange}
            value={selectedOption}
            placeHolder={'Selecciona tu tema aquí'}
            className="container-select-oficina-servicio"
          />
        </div>
      )}
    </React.Fragment>
  )
}
