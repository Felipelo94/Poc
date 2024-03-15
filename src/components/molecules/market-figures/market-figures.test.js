import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import MarketFigure from './market-figures'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

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
const figures = [data, data]
const image = {
  file: {
    fileName:
      '//images.ctfassets.net/y3qdch79qxiw/46baVZg0njWYdqSgtPjClI/a6c42bf239195462fa3eac83217e5e82/Group_561.png',
    url: 'Group 561.png'
  }
}
describe('MarketFigure', () => {
  it('renders correctly without props ', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <MarketFigure
            accessibility={{ fontSize: 3, lineSize: 2 }}
            figures={figures}
            image={image}
            texto="dsfsdfsfdsdf"
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without image ', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <MarketFigure
            accessibility={{ fontSize: 3, lineSize: 2 }}
            texto="dsfsdfsfdsdf"
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
