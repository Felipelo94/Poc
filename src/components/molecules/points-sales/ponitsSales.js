import React, { useState, useEffect } from 'react'
import { InfoWindow, Marker } from 'react-google-maps'
import BiteInformation from '../../atoms/bite-information/bite-information'
import pinactive from '../../../assets/images/pin_active.png'

const PonitsSales = ({ salesPointsInfo, onClickMarker, isTest }) => {
  const [idMarker, setIdMarker] = useState('')
  const [latitudeUser, setlatitudeUser] = useState()
  const [longitudeUser, setlongitudeUser] = useState()
  const [selectedCenter, setSelectedCenter] = useState(null)

  const GetlocalizatorMarker = () => {
    navigator.geolocation.getCurrentPosition(localizatorUser => {
      setlatitudeUser(localizatorUser.coords.latitude)
      setlongitudeUser(localizatorUser.coords.longitude)
    })
  }

  useEffect(GetlocalizatorMarker, [])

  return (
    <>
      {isTest ? (
        <Marker
          position={{
            lat: parseFloat(latitudeUser),
            lng: parseFloat(longitudeUser)
          }}
        />
      ) : null}
      {salesPointsInfo.map((element, index) => {
        return (
          <div key={index} id="marker">
            {isTest ? (
              <Marker
                labelClass="marker"
                onClick={() => {
                  onClickMarker(element)
                  setIdMarker(index)
                  setSelectedCenter(element)
                }}
                position={{
                  lat: parseFloat(element.latitud),
                  lng: parseFloat(element.longitud)
                }}
                icon={pinactive}
              >
                {idMarker === index && selectedCenter && (
                  <InfoWindow
                    options={{ maxWidth: 900 }}
                    position={{
                      lat: parseFloat(element.latitud),
                      lng: parseFloat(element.longitud)
                    }}
                    onCloseClick={() => {
                      setSelectedCenter(null)
                    }}
                  >
                    <BiteInformation
                      isMark={true}
                      title={element.oficina}
                      direccionOficina={element.direccion}
                      telefono={element.fax}
                      horario={element.horario}
                    />
                  </InfoWindow>
                )}
              </Marker>
            ) : (
              <React.Fragment>
                <InfoWindow
                  position={{
                    lng: parseFloat(element.longitud),
                    lat: parseFloat(element.latitud)
                  }}
                  onCloseClick={() => {
                    setSelectedCenter(null)
                  }}
                  options={{ maxWidth: 900 }}
                >
                  <BiteInformation
                    horario={element.horario}
                    title={element.oficina}
                    isMark={true}
                    telefono={element.fax}
                    direccionOficina={element.direccion}
                  />
                </InfoWindow>
              </React.Fragment>
            )}
          </div>
        )
      })}
    </>
  )
}

export default PonitsSales
