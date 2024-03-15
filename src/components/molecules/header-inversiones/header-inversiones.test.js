import React from 'react'
import renderer from 'react-test-renderer'
import HeaderInversiones from './header-inversiones'

describe('<HeaderInversiones />', () => {
  it('renders correctly without props', () => {
    const tree = renderer.create(<HeaderInversiones />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const tree = renderer
      .create(
        <HeaderInversiones
          title="xxxxxxx"
          descripcion="xxxxxxxxxx"
          images={{
            imagen:
              '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/f479db916ef8048a55551cdfcfb180df/Alternativas-cerradas.png',
            nameImage:
              'Ilustración de gráficas de rentabilidades y valores de los mercados',
            title: 'Alternativas Cerradas'
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
