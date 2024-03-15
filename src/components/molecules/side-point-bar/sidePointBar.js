import React, { useState, useEffect } from 'react'
import './sidePointBar.scss'
import BiteInformation from '../../atoms/bite-information/bite-information'
import SelectComponent from '../../atoms/select/select-component'
import ButtonArrow from '../../atoms/button-arrow/button-arrow'
import Geocode from 'react-geocode'
import { getSizeScreen } from '../../../utils/handleResize'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { MAPS_KEY } from '../../../utils/paramApplication'

Geocode.setApiKey(`${MAPS_KEY}`)
Geocode.setLanguage('es')
Geocode.setRegion('es')
Geocode.enableDebug()

export const SidePointBarItem = ({
  element,
  activePoint,
  index,
  onClickMarker,
  accessibility
}) => (
  <div
    role="presentation"
    id="info-container"
    className={
      activePoint === element ? 'info-container active' : 'info-container'
    }
    key={index}
    onKeyDown={() => {
      onClickMarker(element)
    }}
    onClick={() => {
      onClickMarker(element)
      sendGaPush(
        'Canales',
        'ClicOficinasDeServicio',
        'SeleccionaTuCiudad-' + element.ciudad + '-' + element.oficina
      )
    }}
  >
    <BiteInformation
      accessibility={accessibility}
      title={element.oficina}
      direccionOficina={element.direccion}
      telefono={element.fax}
      horario={element.horario}
    />
  </div>
)

export const SidePointBarComponent = ({
  salesPointsInfo,
  activePoint,
  onClickMarker,
  dataCiudad,
  geoLonLat,
  accessibility
}) => {
  let ciudad = []
  dataCiudad.map(item => {
    return ciudad.push({ value: item, label: item })
  })
  const [selectedOption, setselectedOption] = useState(null)
  const [dataCity, setdataCity] = useState(salesPointsInfo)
  const [IsOpen, setIsOpen] = React.useState(true)

  function openCloseSides() {
    setIsOpen(!IsOpen)
  }

  const handleChange = x => {
    sendGaPush(
      'Canales',
      'ClicOficinasDeServicio',
      'EscribeTuCiudad-' + x.value
    )
    setselectedOption(x)
    setdataCity(salesPointsInfo.filter(f => f.ciudad === x.value))
  }

  const [latitudeUser, setlatitudeUser] = useState()
  const [longitudeUser, setlongitudeUser] = useState()

  const GetlocalizatorMarker = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(localizatorUser => {
        setlatitudeUser(localizatorUser.coords.latitude)
        setlongitudeUser(localizatorUser.coords.longitude)
      })
    }
  }

  const servicesData = () => {
    geoLonLat(latitudeUser, longitudeUser).then(
      response => {
        const address = response.results[0].address_components
        const currentCity = getCityCountry(
          address,
          'administrative_area_level_2'
        )
        const currentCountry = getCityCountry(address, 'country')
        const cityDefault = ciudad.find(
          element => element.value === currentCity
        )
        if (cityDefault) {
          handleChange(cityDefault)
        }
        if (currentCountry !== 'Colombia') {
          handleChange(ciudad.find(element => element.value === 'Medellín'))
          onClickMarker(
            dataCity.find(
              elementPoint => elementPoint.oficina === 'Torre Protección'
            )
          )
        }
      },
      error => {}
    )
  }

  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  function getCityCountry(addressArray, type) {
    let city = ''
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && type === addressArray[i].types[0]) {
        city = addressArray[i].long_name
        return city
      }
    }
  }

  useEffect(GetlocalizatorMarker, [])
  useEffect(servicesData, [latitudeUser, longitudeUser])

  return (
    <div
      style={{
        width: IsOpen ? '430px' : '40px'
      }}
      className="internal-SidePointBar-container"
    >
      <ButtonArrow openCloseModal={openCloseSides} opened={IsOpen} />
      <div
        style={{ display: IsOpen ? '' : 'none' }}
        className="internal-SidePointBar-container-select"
      >
        <div>
          <span>Escribe o selecciona tu ciudad:</span>
        </div>
        <div className="internal-SidePointBar-container-select-input">
          <SelectComponent
            dataOptions={ciudad}
            handleChange={handleChange}
            value={selectedOption}
          />
        </div>
        {selectedOption ? (
          <div className="oficinas-city-groups">
            <span>Oficinas en {selectedOption.value}:</span>{' '}
          </div>
        ) : null}
      </div>
      <div
        style={{
          width:
            getSizeScreen() <= 1024
              ? IsOpen
                ? 'auto'
                : '40px'
              : IsOpen
              ? '430px'
              : '40px'
        }}
        className="sidePoints"
      >
        <div
          style={{ display: IsOpen ? '' : 'none' }}
          className="sidePoints-container"
        >
          {dataCity.map((element, index) => {
            return (
              <React.Fragment>
                {getSizeScreen() > 1024 ? (
                  <SidePointBarItem
                    accessibility={accessibility}
                    element={element}
                    activePoint={activePoint}
                    index={index}
                    onClickMarker={onClickMarker}
                  />
                ) : selectedOption ? (
                  <SidePointBarItem
                    accessibility={accessibility}
                    element={element}
                    activePoint={activePoint}
                    index={index}
                    onClickMarker={onClickMarker}
                  />
                ) : null}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const SidePointBar = props => {
  return <SidePointBarComponent {...props} geoLonLat={Geocode.fromLatLng} />
}

export default SidePointBar
