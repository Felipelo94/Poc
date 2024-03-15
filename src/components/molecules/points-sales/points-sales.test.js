import { shallow } from 'enzyme'
import React from 'react'
import PointsSales from './ponitsSales'

const data = [
  {
    oficina: 'Camino Real',
    direccion: 'Carrera 47 # 52 - 86, C.C. Camino Real, Local 231',
    fax: '(4)4306220',
    horario: 'Lunes a viernes de 8 a 4 jornada continua',
    ciudad: 'Medellín',
    latitud: '6.249904',
    longitud: '-75.565292'
  }
]

describe('Button', () => {
  it('meal', () => {
    const wrapper = shallow(<PointsSales salesPointsInfo={data} />)
  })
})
