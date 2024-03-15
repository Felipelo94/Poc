import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import RichText from '../../../utils/rich-text/rich-text'
import Video from '../../atoms/video/video'
import CallToAction from '../call-to-action/call-to-action'
import ContentVideo from './content-video'
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

describe('ContentVideo', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('render correctly no exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentVideo data={dataEmpty} />
      </Provider>
    )
    expect(!wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentVideo data={dataFull} />
      </Provider>
    )
    expect(wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly exists video', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentVideo data={dataFull} />
      </Provider>
    )
    expect(wrapper.find(Video).exists()).toBeTruthy()
  })

  it('render correctly btn call-to action', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentVideo data={dataFull} />
      </Provider>
    )
    expect(wrapper.find(CallToAction).exists()).toBeTruthy()
  })
  afterEach(cleanup)
})
