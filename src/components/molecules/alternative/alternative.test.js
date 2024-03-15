import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Alternative from './alternative'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const data = [
  {
    CuerpoContenido: {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'y3qdch79qxiw',
                      contentful_id: 'y3qdch79qxiw'
                    }
                  },
                  id: 'c1g6lUhhvfKZcc5Yw3fcMod',
                  type: 'Entry',
                  createdAt: '2021-01-12T21:17:46.012Z',
                  updatedAt: '2021-01-12T21:47:42.780Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                      contentful_id: 'master'
                    }
                  },
                  revision: 8,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'tabla',
                      contentful_id: 'tabla'
                    }
                  },
                  contentful_id: '1g6lUhhvfKZcc5Yw3fcMod'
                },
                fields: {
                  titulo: {
                    'en-US':
                      '¿Cuáles son los canales por los que puedo retirar mis Cesantías?'
                  },
                  tableJson: {
                    'en-US': {
                      data: [
                        {
                          'new column 3': {
                            text: 'Hasta 20 SMLV'
                          },
                          'new column 4': {
                            text: '3'
                          },
                          CANALES: {
                            text: ''
                          },
                          MONTOS: {
                            text: 'Hasta 10 SMLV'
                          }
                        },
                        {
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          },
                          CANALES: {
                            text:
                              'Proteccion.com sin clave <br> Dependientes sin clave'
                          },
                          MONTOS: {
                            text: ''
                          }
                        },
                        {
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          },
                          CANALES: {
                            text:
                              'Proteccion.com con clave <br> Voluntarios e independientes'
                          },
                          MONTOS: {
                            text: ''
                          }
                        },
                        {
                          CANALES: {
                            text: 'Online <br> Empleadores con clave ',
                            rowSpan: ''
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: 'X'
                          }
                        },
                        {
                          CANALES: {
                            text: 'Oficina Virtual'
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: 'X'
                          }
                        },
                        {
                          CANALES: {
                            text: 'Kioskos'
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          }
                        },
                        {
                          CANALES: {
                            text:
                              'Corresponsales <br> Pagafácil, Reval y Multipagas'
                          },
                          MONTOS: {
                            text: 'X'
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: ''
                          }
                        }
                      ],
                      tableHeadings: [
                        {
                          key: 'CANALES'
                        },
                        {
                          key: 'MONTOS',
                          colSpan: '3'
                        },
                        {
                          key: 'new column 3'
                        },
                        {
                          key: 'new column 4'
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'y3qdch79qxiw',
                      contentful_id: 'y3qdch79qxiw'
                    }
                  },
                  id: 'c1STXmo0xebIwYEAn0zs5OG',
                  type: 'Entry',
                  createdAt: '2021-01-26T23:13:42.557Z',
                  updatedAt: '2021-01-26T23:13:42.557Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                      contentful_id: 'master'
                    }
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'tabla',
                      contentful_id: 'tabla'
                    }
                  },
                  contentful_id: '1STXmo0xebIwYEAn0zs5OG'
                },
                fields: {
                  tableJson: {
                    'en-US': {
                      data: [
                        {
                          '1': {
                            text: '1',
                            rowSpan: '2'
                          },
                          '2': {
                            text: '2',
                            colSpan: '2'
                          },
                          'new column 3': {
                            text: ''
                          }
                        },
                        {
                          '2': {
                            text: '2'
                          },
                          'new column 3': {
                            text: '3'
                          }
                        }
                      ],
                      tableHeadings: [
                        {
                          key: '1'
                        },
                        {
                          key: '2',
                          colSpan: '2'
                        },
                        {
                          key: 'new column 3'
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {}
              }
            ],
            data: {}
          }
        ]
      }
    },
    TextoCallToAction1: 'Ver documento de adhesión',
    LinkCallToAction1: {
      LinkCallToAction1: 'google.com'
    },
    TextoCallToAction2: 'Ver documento de adhesión',
    LinkCallToAction2: {
      LinkCallToAction2: 'google.com'
    },
    descripcion: {
      descripcion:
        'La Alternativa Cerrada Renta Variable EE.UU., ha sido estructurada. A continuación podrá encontrar las condiciones de su estructuración. Para recordar las condiciones detalladas de esta Alternativa Cerrada, le invitamos a consultar el documento de adhesión.'
    },
    titulo: 'Alternativa Cerrada Renta Variable EE.UU 2020'
  }
]

const data2 = [
  {
    CuerpoContenido: {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'y3qdch79qxiw',
                      contentful_id: 'y3qdch79qxiw'
                    }
                  },
                  id: 'c1g6lUhhvfKZcc5Yw3fcMod',
                  type: 'Entry',
                  createdAt: '2021-01-12T21:17:46.012Z',
                  updatedAt: '2021-01-12T21:47:42.780Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                      contentful_id: 'master'
                    }
                  },
                  revision: 8,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'tabla',
                      contentful_id: 'tabla'
                    }
                  },
                  contentful_id: '1g6lUhhvfKZcc5Yw3fcMod'
                },
                fields: {
                  titulo: {
                    'en-US':
                      '¿Cuáles son los canales por los que puedo retirar mis Cesantías?'
                  },
                  tableJson: {
                    'en-US': {
                      data: [
                        {
                          'new column 3': {
                            text: 'Hasta 20 SMLV'
                          },
                          'new column 4': {
                            text: '3'
                          },
                          CANALES: {
                            text: ''
                          },
                          MONTOS: {
                            text: 'Hasta 10 SMLV'
                          }
                        },
                        {
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          },
                          CANALES: {
                            text:
                              'Proteccion.com sin clave <br> Dependientes sin clave'
                          },
                          MONTOS: {
                            text: ''
                          }
                        },
                        {
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          },
                          CANALES: {
                            text:
                              'Proteccion.com con clave <br> Voluntarios e independientes'
                          },
                          MONTOS: {
                            text: ''
                          }
                        },
                        {
                          CANALES: {
                            text: 'Online <br> Empleadores con clave ',
                            rowSpan: ''
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: 'X'
                          }
                        },
                        {
                          CANALES: {
                            text: 'Oficina Virtual'
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: 'X'
                          }
                        },
                        {
                          CANALES: {
                            text: 'Kioskos'
                          },
                          MONTOS: {
                            text: ''
                          },
                          'new column 3': {
                            text: 'X'
                          },
                          'new column 4': {
                            text: ''
                          }
                        },
                        {
                          CANALES: {
                            text:
                              'Corresponsales <br> Pagafácil, Reval y Multipagas'
                          },
                          MONTOS: {
                            text: 'X'
                          },
                          'new column 3': {
                            text: ''
                          },
                          'new column 4': {
                            text: ''
                          }
                        }
                      ],
                      tableHeadings: [
                        {
                          key: 'CANALES'
                        },
                        {
                          key: 'MONTOS',
                          colSpan: '3'
                        },
                        {
                          key: 'new column 3'
                        },
                        {
                          key: 'new column 4'
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'y3qdch79qxiw',
                      contentful_id: 'y3qdch79qxiw'
                    }
                  },
                  id: 'c1STXmo0xebIwYEAn0zs5OG',
                  type: 'Entry',
                  createdAt: '2021-01-26T23:13:42.557Z',
                  updatedAt: '2021-01-26T23:13:42.557Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                      contentful_id: 'master'
                    }
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'tabla2',
                      contentful_id: 'tabla2'
                    }
                  },
                  contentful_id: '1STXmo0xebIwYEAn0zs5OG'
                },
                fields: {
                  tableJson: {
                    'en-US': {
                      data: [
                        {
                          '1': {
                            text: '1',
                            rowSpan: '2'
                          },
                          '2': {
                            text: '2',
                            colSpan: '2'
                          },
                          'new column 3': {
                            text: ''
                          }
                        },
                        {
                          '2': {
                            text: '2'
                          },
                          'new column 3': {
                            text: '3'
                          }
                        }
                      ],
                      tableHeadings: [
                        {
                          key: '1'
                        },
                        {
                          key: '2',
                          colSpan: '2'
                        },
                        {
                          key: 'new column 3'
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: '',
                marks: [],
                data: {}
              }
            ],
            data: {}
          }
        ]
      }
    },
    descripcion: {
      descripcion:
        'La Alternativa Cerrada Renta Variable EE.UU., ha sido estructurada. A continuación podrá encontrar las condiciones de su estructuración. Para recordar las condiciones detalladas de esta Alternativa Cerrada, le invitamos a consultar el documento de adhesión.'
    },
    titulo: 'Alternativa Cerrada Renta Variable EE.UU 2020'
  }
]

describe('Alternative', () => {
  it('render correctly DataFull', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <Alternative data={data} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly wothou cta', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <Alternative data={data2} />
      </Provider>
    )
    const item = wrapper.find('#container-alternative-item-0-title')
    item.simulate('click')
  })

  it('render correctly one click opem', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <Alternative data={data} />
      </Provider>
    )
    const item = wrapper.find('#container-alternative-item-0-title')
    item.simulate('click')
  })

  it('render correctly two click close', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <Alternative data={data} />
      </Provider>
    )
    const item = wrapper.find('#container-alternative-item-0-title')
    item.simulate('click')
    item.simulate('click')
  })
})
