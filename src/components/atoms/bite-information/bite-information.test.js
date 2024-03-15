import React from 'react'
import renderer from 'react-test-renderer'
import BiteInformation from './bite-information'

describe('BiteInformation', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <BiteInformation
          title="Camino Real"
          direccionOficina="Dirección:Carrera 47 # 52 - 86, C.C. Camino Real, Local 231"
          telefono="Línea de fax nacional:(4)4306220"
          horario="Horario de atención:Lunes a viernes de 8 a 4 jornada continua"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <BiteInformation
          title="Camino Real"
          direccionOficina="Dirección:Carrera 47 # 52 - 86, C.C. Camino Real, Local 231"
          telefono="Línea de fax nacional:(4)4306220"
          horario="Horario de atención:Lunes a viernes de 8 a 4 jornada continua"
          isMark={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
