import React from 'react'
import renderer from 'react-test-renderer'
import SubTitleSesion from './sub-title-sesion'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <SubTitleSesion subtitle="Tener tus cesantías en Protección te da muchos beneficios. Descubre algunos aquí." />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
