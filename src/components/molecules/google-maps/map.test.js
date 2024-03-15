import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import * as classGtmUtil from '../../../utils/classGtmUtil'

import Map from './map'

jest.mock('react-google-maps', () => ({
  GoogleMap: (props) => <button {...props}>GoogleMap</button>,
  withGoogleMap: Component => props => <Component {...props} />,
  withScriptjs: fn => fn
}))

describe('<Map />', () => {
  beforeEach(() => {
    jest.spyOn(classGtmUtil, 'sendGaPush').mockImplementation(() => jest.fn());
  })

  test('renders', () => {
    global.navigator.geolocation = {
      getCurrentPosition: (fn) => fn({ coords: {} }),
    }
    render(
      <Map
        activePoint={{ zoom: 1, latitud: 1, longitud: 1 }}
        salesPoints={<>salesPoints</>}
        isTest
      />
    )
    fireEvent.click(screen.getByText('GoogleMap'));
  })

  test('renders with other conditions', () => {
    global.navigator.geolocation = null;
    render(
      <Map
        activePoint={{}}
        salesPoints={<>salesPoints</>}
        isTest
      />
    )
    fireEvent.click(screen.getByText('GoogleMap'));
  })

  test('renders with other conditions', () => {
    global.navigator.geolocation = {
      getCurrentPosition: (fn) => fn({ coords: { latitude: 1, longitude: 1 } }),
    }
    render(
      <Map
        activePoint={{}}
        salesPoints={<>salesPoints</>}
        isTest
      />
    )
    fireEvent.click(screen.getByText('GoogleMap'));
  })

  test('renders nothing', () => {
    render(
      <Map
        activePoint={{ zoom: 1, latitud: 1, longitud: 1 }}
        salesPoints={<>salesPoints</>}
      />
    )
  })
})
