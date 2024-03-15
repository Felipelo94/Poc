import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Content from './content-application'
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

const dataFull = {
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Vivienda: ',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-6'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo: 'titulo',
    textoButton: 'texto',
    url: 'sdddddd'
  },
  video: [
    'https://www.youtube.com/embed/8420jbTNoMw',
    'https://www.youtube.com/embed/8420jbTNoMw'
  ]
}

const dataEmpty = {
  parrafos: [],
  cta: undefined,
  video: null
}

describe('Calculator', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('render correctly DataFull', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <Content data={dataFull} subtitulo="prueba">
            {' '}
            <div></div>
          </Content>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly dateEmpty', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <Content data={dataEmpty} subtitulo="prueba">
            {' '}
            <div></div>
          </Content>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
