import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import RichText from '../../../utils/rich-text/rich-text'
import CallToAction from '../call-to-action/call-to-action'
import LargeText2 from './large-text2'
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
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
    }
  ],
  cta: {
    titulo: 'titulo',
    textoButton: 'texto',
    url: 'sdddddd'
  }
}

const dataEmpty = {
  parrafos: [],
  imagenes: [],
  cta: undefined
}

describe('Large Text2', () => {
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
          <LargeText2 data={dataFull} subtitulo="hola" />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly no exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <LargeText2 data={dataEmpty} subtitulo="hola" />
      </Provider>
    )
    expect(!wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <LargeText2 data={dataFull} subtitulo="hola" />
      </Provider>
    )
    expect(wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly NO exists image', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <LargeText2 data={dataEmpty} subtitulo="hola" />
      </Provider>
    )
    expect(!wrapper.find('img').exists()).toBeTruthy()
  })

  it('render correctly btn call-to action', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <LargeText2 data={dataFull} subtitulo="hola" />
      </Provider>
    )
    expect(wrapper.find(CallToAction).exists()).toBeTruthy()
  })

  afterEach(cleanup)
})
