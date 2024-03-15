import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import LongText from './long-text'
import { useStaticQuery } from 'gatsby'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    },
    pageContext: {
      ...pageContextInitialState
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const data = {
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/4k5jHj0molysRnGyVTyCdO/939ec911ac21a1e9769182a7b086c489/Por-qu__-estar-en-Protecci__n-max.jpg?w=800&q=50',
      nameImage: 'Por qué estar en Protección max'
    }
  ],
  callToAction: {
    titulo: 'sssss',
    textoButton: 'sdadsad',
    url: 'https://url-prueba'
  }
}

describe('LongText', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  beforeEach(() => {})

  it('LongText renders correctly', () => {
    global.innerWidth = 768
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <LongText data={data} isGetSubtitulo={false} subtitle="" />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
