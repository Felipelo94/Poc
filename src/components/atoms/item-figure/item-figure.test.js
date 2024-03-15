import React from 'react'
import renderer from 'react-test-renderer'
import ItemFigure from './item-figure'

const data = {
  Titulo: '7,3%',
  descripcion: 'Aumentó en 2017, creación de empresas en Colombia',
  icono: {
    file: {
      url:
        '//images.ctfassets.net/y3qdch79qxiw/46baVZg0njWYdqSgtPjClI/a6c42bf239195462fa3eac83217e5e82/Group_561.png',
      fileName: 'Group 561.png'
    }
  }
}

describe('ItemFigure', () => {
  it('renders correctly without props isLastOne', () => {
    const tree = renderer
      .create(<ItemFigure id={'prueba'} figure={data} isLastOne={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props isFirstOne', () => {
    const tree = renderer
      .create(<ItemFigure id={'prueba'} figure={data} isFirstOne={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
