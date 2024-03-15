import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import RichText from '../../../utils/rich-text/rich-text'
import ContentChannel from './content-channel'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const dataFull = {
  json: {
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
            value: '¿Qué puedes hacer?',
            nodeType: 'text'
          }
        ],
        nodeType: 'heading-6'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Retiro de Cesantías',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Afiliarte a Nuestros Productos',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
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
                      'Consultas generales de cesantías y Pensiones Obligatorias',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Recomposiciones ',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Inscripción de cuenta financiera',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Pagos de excedentes de disponibilidad',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      }
    ],
    nodeType: 'document'
  }
}

const data2P = {
  json: {
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
            value: '¿Qué puedes hacer?',
            nodeType: 'text'
          }
        ],
        nodeType: 'heading-6'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Retiro de Cesantías',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Afiliarte a Nuestros Productos',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
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
                      'Consultas generales de cesantías y Pensiones Obligatorias',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Recomposiciones ',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Inscripción de cuenta financiera',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Pagos de excedentes de disponibilidad',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
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
            value: '¿Qué puedes hacer?',
            nodeType: 'text'
          }
        ],
        nodeType: 'heading-6'
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Retiro de Cesantías',
                    nodeType: 'text'
                  }
                ],
                nodeType: 'paragraph'
              }
            ],
            nodeType: 'list-item'
          }
        ],
        nodeType: 'unordered-list'
      }
    ],
    nodeType: 'document'
  }
}

const dataEmpty = {
  json: []
}

describe('ContentChannel', () => {
  it('render correctly DataFull', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentChannel data={dataFull} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly no exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentChannel data={undefined} />
      </Provider>
    )
    expect(!wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly exists paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentChannel data={dataFull} />
      </Provider>
    )
    expect(wrapper.find(RichText).exists()).toBeTruthy()
  })

  it('render correctly exists 2 paraffo', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentChannel data={data2P} />
      </Provider>
    )
    expect(wrapper.find(RichText).exists()).toBeTruthy()
  })

  afterEach(cleanup)
})
