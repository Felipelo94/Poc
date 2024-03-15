import React from 'react'
import renderer from 'react-test-renderer'
import HeaderInternal from './header-internal'

describe('HeaderInternal', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <HeaderInternal
          titulo="¿Cómo tramitar mi pensión?"
          tiempo="2:000 min."
          publico="Empleados"
          subtitle="Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección."
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <HeaderInternal
          titulo="¿Cómo tramitar mi pensión?"
          publico="Empleados"
          subtitle="Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección."
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
