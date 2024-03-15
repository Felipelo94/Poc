import React, { useEffect, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { sendGaPush } from '../../../utils/classGtmUtil'
import './map.scss'

const Map = ({ salesPoints, activePoint, isTest }) => {
  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState()

  const Getlocalizator = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(localizator => {
        setlatitude(localizator.coords.latitude)
        setlongitude(localizator.coords.longitude)
      })
    }
  }

  useEffect(Getlocalizator, [activePoint])

  return (
    <React.Fragment>
      {isTest ? (
        <GoogleMap
          className="mark"
          onClick={() => {
            sendGaPush('Canales', 'ClicOficinasDeServicio', 'Mapa')
          }}
          zoom={activePoint.zoom ? activePoint.zoom : 15}
          defaultCenter={{lat: 6.253275, lng: -75.579155}}
          center={{
            lat: activePoint.latitud
              ?? latitude
              ?? 6.253275,
            lng: activePoint.longitud
              ?? longitude
              ?? -75.579155
          }}
        >
          {salesPoints}
        </GoogleMap>
      ) : null}
    </React.Fragment>
  )
}

export default withScriptjs(withGoogleMap(Map))
