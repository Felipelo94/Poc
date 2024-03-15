import React, { useState } from 'react'
import './mapSalesPoint.scss'
import SidePointBar from '../side-point-bar/sidePointBar'
import Map from '../google-maps/map'
import PointsSales from '../points-sales/ponitsSales'
import { animateScroll as scroll } from 'react-scroll'
import { MAPS_KEY } from '../../../utils/paramApplication'

export const MapSalesPointComponent = ({
  dataOficina,
  dataCiudad,
  isTest,
  accessibility
}) => {
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPS_KEY}`
  const [activePoint, setActivePoint] = useState({})
  const salesPointsInfo = dataOficina

  const onClickMarker = element => {
    setActivePoint(element)
    setTimeout(() => {
      const positionAactive = document.getElementById(`mapContainer-container`)
        .offsetTop
      scroll.scrollTo(positionAactive)
    }, 200)
  }

  return (
    <>
      <div className="mapContainer" id="mapContainer">
        <Map
          isTest={true}
          googleMapURL={mapURL}
          accessibility={accessibility}
          containerElement={
            <div
              className="mapContainer-container"
              id="mapContainer-container"
            />
          }
          mapElement={
            <div
              className="mapContainer-container-value"
              id="mapContainer-container-value"
            />
          }
          loadingElement={<p>Cargando</p>}
          salesPoints={
            isTest ? (
              <PointsSales
                salesPointsInfo={salesPointsInfo}
                onClickMarker={onClickMarker}
                isTest={true}
              />
            ) : null
          }
          activePoint={activePoint}
        />
        <SidePointBar
          accessibility={accessibility}
          salesPointsInfo={salesPointsInfo}
          activePoint={activePoint}
          onClickMarker={onClickMarker}
          dataCiudad={dataCiudad}
        />
      </div>
    </>
  )
}

export const MapSalesPoint = props => {
  let newArray = []
  let ciudad = []
  const dataProcces =
    props.data !== undefined
      ? props.data.hasOwnProperty('allContentfulOficina')
        ? props.data.allContentfulOficina.edges
        : []
      : []
  dataProcces.map(item => {
    newArray.push({
      oficina: item.node.nombre,
      direccion: item.node.direccion.direccion,
      fax: item.node.telefono,
      horario: item.node.horario.horario,
      ciudad: item.node.ciudad,
      latitud: item.node.coordenadas.lat,
      longitud: item.node.coordenadas.lon
    })

    ciudad.push(item.node.ciudad)
    return null
  })

  ciudad = ciudad.filter((v, i) => ciudad.indexOf(v) === i)

  return (
    <MapSalesPointComponent
      {...props}
      dataOficina={newArray}
      dataCiudad={ciudad}
      accessibility={props.accessibility}
    ></MapSalesPointComponent>
  )
}
export default MapSalesPoint
