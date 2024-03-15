import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import render from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import OficinaComponent from './oficina'

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })
    )
  ),
  watchPosition: jest.fn()
}

global.navigator.geolocation = mockGeolocation

const dataLineas = {
  allContentfulCanal: {
    edges: [
      {
        node: {
          descripcion: {
            descripcion:
              '__Bogotá:__ 744 44 64\n__Medellín y Cali:__ 510 90 99\n__Barranquilla:__ 319 79 99\n__Cartagena:__ 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000\n'
          },
          nombre: 'Línea de servicio Protección'
        }
      }
    ]
  }
}

const data2 = [
  {
    tipoBite: 'contenido-duro',
    category: 'Cesantías',
    descripcioncorta:
      'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
    titulo: '¿Qué son las cesantías?',
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
      }
    },
    categoriaCliente: [
      {
        descripcion: 'Cesante'
      },
      {
        descripcion: 'Empleado'
      },
      {
        descripcion: 'Independiente'
      }
    ]
  }
]

const initialState = {
  internalCategoria: {
    dataInternal: data2
  }
}

const mockStore = configureStore()
const data = {
  allContentfulCanal: {
    edges: [
      {
        node: {
          descripcion: {
            descripcion:
              '__Bogotá:__ 744 44 64\n__Medellín y Cali:__ 510 90 99\n__Barranquilla:__ 319 79 99\n__Cartagena:__ 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000'
          },
          nombre: 'Línea de servicio Protección'
        }
      }
    ]
  },
  allContentfulOficina: {
    edges: [
      {
        node: {
          nombre: 'Oificina',
          direccion: {
            direccion: 'direccion'
          },
          telefono: '12155',
          horario: {
            horario: 'asdasdadsd'
          },
          ciudad: 'Medellín',
          coordenadas: {
            lat: '1212',
            lon: '122'
          }
        }
      }
    ]
  }
}

const dataundefined = {
  allContentfulCanal: {
    edges: [
      {
        node: {
          descripcion: {
            descripcion:
              '__Bogotá:__ 744 44 64\n__Medellín y Cali:__ 510 90 99\n__Barranquilla:__ 319 79 99\n__Cartagena:__ 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000'
          },
          nombre: 'Línea de servicio Protección'
        }
      }
    ]
  }
}

const dataEmpty = {
  allContentfulCanal: {
    edges: []
  },
  allContentfulOficina: {
    edges: [
      {
        node: {
          nombre: 'Oificina',
          direccion: {
            direccion: 'direccion'
          },
          telefono: '12155',
          horario: {
            horario: 'asdasdadsd'
          },
          ciudad: 'Medellín',
          coordenadas: {
            lat: '1212',
            lon: '122'
          }
        }
      }
    ]
  }
}

const dataHeader = {
  nombre: 'Proteccion.com',
  id: '31JYCa3KmNmAmNH2Pj5Zxm',
  dateImage: {
    file: {
      url:
        '//images.ctfassets.net/y3qdch79qxiw/3nass6HBBPuRMF7lKvaUqN/5fbd28be216cca4a265efe64e38063b4/Capa_2.png',
      fileName: 'Capa 2.png'
    }
  },
  textoIntroductorio: {
    textoIntroductorio:
      'En nuestro portal, además de autogestionar fácilmente tus productos, encontrarás una experiencia totalmente personalizada, con contenido útil y valioso, a la medida de tu momento de vida y situación laboral.  '
  },
  cuerpocontenido: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'heading-6',
          content: [
            {
              nodeType: 'text',
              value: '¿Qué puedes hacer?',
              marks: [],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Solicitar tu clave como afiliado o como empleador',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Solicitar certificados rápidamente por medio de Certifácil',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Retirar tus cesantías online ya sea por terminación de contrato o para vivienda',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Simular Cesantías',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Hacer el test de perfil de inversión',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Adjuntar incapacidades',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Hacerle seguimiento a tu solicitud de pensión con código único de solicitud',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Consultar historial laboral',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: '', marks: [], data: {} }],
          data: {}
        },
        {
          nodeType: 'heading-6',
          content: [
            {
              nodeType: 'text',
              value: 'Hacer afiliaciones y perfilaciones a:',
              marks: [],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Recomposiciones',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Inscripción de cuenta financiera',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'unordered-list',
          content: [
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Pagos de excedentes de disponibilidad',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: '', marks: [], data: {} }],
          data: {}
        }
      ]
    }
  },
  title: 'Proteccion.com',
  subtitle:
    'En nuestro portal, además de autogestionar fácilmente tus productos, encontrarás una experiencia totalmente personalizada, con contenido útil y valioso, a la medida de tu momento de vida y situación laboral.  ',
  image:
    '//images.ctfassets.net/y3qdch79qxiw/3nass6HBBPuRMF7lKvaUqN/5fbd28be216cca4a265efe64e38063b4/Capa_2.png',
  textoCallToAction: null,
  linkCallToAction: null,
  textoCallToAction2: null,
  linkCallToAction2: null,
  descripcionCallToAction: null
}
describe('OficinaPage', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  global.window = Object.create(window)
  const url = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/'
  }

  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      pathname: '/contenido/'
    }
  })

  it('renders correctly OficinaComponent', () => {
    const indexPage = render.create(
      <Provider store={store}>
        <OficinaComponent
          location={url}
          data={data}
          dataContent={dataLineas}
          dataHeader={dataHeader}
          openModal={() => {}}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly OficinaComponent', () => {
    const indexPage = render.create(
      <Provider store={store}>
        <OficinaComponent
          location={url}
          data={dataundefined}
          dataContent={dataLineas}
          dataHeader={dataHeader}
          openModal={() => {}}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly OficinaComponent', () => {
    const indexPage = render.create(
      <Provider store={store}>
        <OficinaComponent
          location={url}
          data={dataEmpty}
          dataContent={dataLineas}
          dataHeader={dataHeader}
          openModal={() => {}}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly OficinaComponent', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OficinaComponent
          location={url}
          data={dataEmpty}
          dataHeader={dataHeader}
          openModal={() => {}}
        />
      </Provider>
    )
    wrapper.find('#btn-arrow').simulate('click')
    wrapper
      .find('.internal-SidePointBar-container-select-input')
      .simulate('click')
    wrapper
      .find('.internal-SidePointBar-container-select-input')
      .simulate('keydown')
  })
  it('renders correctly OficinaComponent', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OficinaComponent
          location={url}
          data={dataEmpty}
          dataContent={dataLineas}
          dataHeader={dataHeader}
          openModal={() => {}}
        />
      </Provider>
    )
  })
})
