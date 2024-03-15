import React from 'react'
import renderer from 'react-test-renderer'
import InternalCurrentInvestments from './internal-alternatives'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { useStaticQuery } from 'gatsby'

const data = {
  allContentfulAlternativaCerrada: {
    edges: [
      {
        node: {
          contentful_id: '6tRmkahPbmybyKwcqPkg4n',
          urlSeo: {
            urlSeo: 'inversiones/alternativas-cerradas-comercializacion'
          },
          titulo: 'Alternativas Cerradas en Comercialización',
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/6aed7f0f399162ee56fb1695869ddc09/Laptop-graphics.jpg',
              fileName: 'Laptop-graphics.jpg'
            },
            description:
              'Ilustración de gráficas de rentabilidades y valores de los mercados',
            title: 'Alternativas Cerradas'
          },
          descripcion: {
            descripcion:
              'Las Alternativas Cerradas son un vehículo de inversión que le permite diversificar su portafolio de inversión aprovechando oportunidades puntuales que ofrecen los mercados financieros. Ofrecemos Alternativas Cerradas con exposición a distintas clases de activos según el perfil de riesgo y horizonte de inversión, incluyendo productos de renta fija con tasa objetivo y corto plazo, participación en índices accionarios internacionales, y fondos de capital privado en el sector inmobiliario.'
          },
          NombreAlternativaCerrada: [
            {
              CuerpoContenido: {
                json: {
                  data: {},
                  content: [
                    {
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
                            updatedAt: '2021-02-23T14:29:11.679Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 10,
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
                                    'new column 3': { text: 'Hasta 20 SMLV' },
                                    'new column 4': { text: '3' },
                                    CANALES: { text: '' },
                                    MONTOS: { text: 'Hasta 10 SMLV' }
                                  },
                                  {
                                    'new column 3': { text: 'X' },
                                    'new column 4': { text: '' },
                                    CANALES: {
                                      text:
                                        'Proteccion.com sin clave Dependientes sin clave'
                                    },
                                    MONTOS: { text: '' }
                                  },
                                  {
                                    'new column 3': { text: 'Ver anexo' },
                                    'new column 4': { text: '' },
                                    CANALES: {
                                      text:
                                        'Proteccion.com con clave <br> Voluntarios e independientes'
                                    },
                                    MONTOS: { text: '' }
                                  },
                                  {
                                    CANALES: {
                                      text:
                                        'Online <br> Empleadores con clave ',
                                      rowSpan: ''
                                    },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: 'X' }
                                  },
                                  {
                                    CANALES: { text: 'Oficina Virtual' },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: 'X' }
                                  },
                                  {
                                    CANALES: { text: 'Kioskos' },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: 'X' },
                                    'new column 4': { text: '' }
                                  },
                                  {
                                    CANALES: {
                                      text:
                                        'Corresponsales <br> Pagafácil, Reval y Multipagas'
                                    },
                                    MONTOS: { text: 'X' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: '' }
                                  }
                                ],
                                tableHeadings: [
                                  { key: 'CANALES' },
                                  { key: 'MONTOS', colSpan: '3' },
                                  { key: 'new column 3' },
                                  { key: 'new column 4' }
                                ]
                              }
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
                    },
                    {
                      data: {},
                      content: [
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'document'
                }
              },
              TextoCallToAction1: 'Ver documento de adhesión',
              TextoCallToAction2: 'Novedad',
              LinkCallToAction1: {
                LinkCallToAction1:
                  'https://d2a43pezt9qjpt.cloudfront.net/cesantias/pago-de-cesantias-a-empleados-del-hogar'
              },
              LinkCallToAction2: {
                LinkCallToAction2:
                  'https://d2a43pezt9qjpt.cloudfront.net/cesantias/aportes/que-son/'
              },
              descripcion: {
                descripcion:
                  'La Alternativa Cerrada Renta Variable EE.UU., ha sido estructurada. A continuación podrá encontrar las condiciones de su estructuración. Para recordar las condiciones detalladas de esta Alternativa Cerrada, le invitamos a consultar el documento de adhesión.'
              },
              titulo: 'Alternativa Cerrada Renta Variable EE.UU 2020'
            }
          ],
          createdAt: '2020-11-25T21:33:21.836Z'
        }
      },
      {
        node: {
          contentful_id: '776EkpJ13FzM8DZQXp3SnI',
          urlSeo: { urlSeo: 'inversiones/afiliacion-alternativas-cerradas' },
          titulo: 'Afiliación Alternativas Cerradas',
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/6aed7f0f399162ee56fb1695869ddc09/Laptop-graphics.jpg',
              fileName: 'Laptop-graphics.jpg'
            },
            description:
              'Ilustración de gráficas de rentabilidades y valores de los mercados',
            title: 'Alternativas Cerradas'
          },
          descripcion: {
            descripcion:
              'Este formulario sólo aplica para aquellas personas que no han tenido ninguna alternativa cerrada en el Fondo de Pensiones Voluntarias de Protección y que se encuentran ubicadas en una de las siguientes ciudades: Armenia, Barranquilla, Bogotá, Bucaramanga, Cali, Cartagena, Cúcuta, Ibagué, Manizales, Medellín, Neiva, Pereira y Rionegro (Antioquia).\n\nDiligencie el formato y entrégueselo a su Consultor asignado o en cualquiera nuestras Oficinas de Servicio Protección, donde le daremos la asesoría e información que requiera sobre la alternativa cerrada vigente. Para ver la oficina más cercana a su sitio de ubicación haga clic aquí.'
          },
          NombreAlternativaCerrada: null,
          createdAt: '2020-11-25T21:31:34.162Z'
        }
      },
      {
        node: {
          contentful_id: '4iyIbURlwNfeTUwnjgHBdI',
          urlSeo: { urlSeo: 'inversiones/alternativas-cerradas-vigentes' },
          titulo: 'Alternativas Cerradas Vigentes',
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/6aed7f0f399162ee56fb1695869ddc09/Laptop-graphics.jpg',
              fileName: 'Laptop-graphics.jpg'
            },
            description:
              'Ilustración de gráficas de rentabilidades y valores de los mercados',
            title: 'Alternativas Cerradas'
          },
          descripcion: {
            descripcion:
              'Conozca aquí las Alternativas de Inversión que hoy se encuentran estructuradas. Detalles y contratos de adhesión. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum magna et leo luctus congue. Vivamus purus sem, venenatis eu tellus in.'
          },
          NombreAlternativaCerrada: [
            {
              CuerpoContenido: {
                json: {
                  data: {},
                  content: [
                    {
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
                            updatedAt: '2021-02-23T14:29:11.679Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 10,
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
                                    'new column 3': { text: 'Hasta 20 SMLV' },
                                    'new column 4': { text: '3' },
                                    CANALES: { text: '' },
                                    MONTOS: { text: 'Hasta 10 SMLV' }
                                  },
                                  {
                                    'new column 3': { text: 'X' },
                                    'new column 4': { text: '' },
                                    CANALES: {
                                      text:
                                        'Proteccion.com sin clave Dependientes sin clave'
                                    },
                                    MONTOS: { text: '' }
                                  },
                                  {
                                    'new column 3': { text: 'Ver anexo' },
                                    'new column 4': { text: '' },
                                    CANALES: {
                                      text:
                                        'Proteccion.com con clave <br> Voluntarios e independientes'
                                    },
                                    MONTOS: { text: '' }
                                  },
                                  {
                                    CANALES: {
                                      text:
                                        'Online <br> Empleadores con clave ',
                                      rowSpan: ''
                                    },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: 'X' }
                                  },
                                  {
                                    CANALES: { text: 'Oficina Virtual' },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: 'X' }
                                  },
                                  {
                                    CANALES: { text: 'Kioskos' },
                                    MONTOS: { text: '' },
                                    'new column 3': { text: 'X' },
                                    'new column 4': { text: '' }
                                  },
                                  {
                                    CANALES: {
                                      text:
                                        'Corresponsales <br> Pagafácil, Reval y Multipagas'
                                    },
                                    MONTOS: { text: 'X' },
                                    'new column 3': { text: '' },
                                    'new column 4': { text: '' }
                                  }
                                ],
                                tableHeadings: [
                                  { key: 'CANALES' },
                                  { key: 'MONTOS', colSpan: '3' },
                                  { key: 'new column 3' },
                                  { key: 'new column 4' }
                                ]
                              }
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
                    },
                    {
                      data: {},
                      content: [
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'document'
                }
              },
              TextoCallToAction1: 'Ver documento de adhesión',
              TextoCallToAction2: 'Novedad',
              LinkCallToAction1: {
                LinkCallToAction1:
                  'https://d2a43pezt9qjpt.cloudfront.net/cesantias/pago-de-cesantias-a-empleados-del-hogar'
              },
              LinkCallToAction2: {
                LinkCallToAction2:
                  'https://d2a43pezt9qjpt.cloudfront.net/cesantias/aportes/que-son/'
              },
              descripcion: {
                descripcion:
                  'La Alternativa Cerrada Renta Variable EE.UU., ha sido estructurada. A continuación podrá encontrar las condiciones de su estructuración. Para recordar las condiciones detalladas de esta Alternativa Cerrada, le invitamos a consultar el documento de adhesión.'
              },
              titulo: 'Alternativa Cerrada Renta Variable EE.UU 2020'
            }
          ],
          createdAt: '2020-11-25T21:32:09.286Z'
        }
      }
    ]
  }
}

const dataUser = [
  {
    id: 616,
    name: 'esteban',
    type: 1,
    category: 'Cesantías',
    subcategory: 'Cesante',
    date: '3/3/2020',
    state: 1,
    hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
  }
]

const mockStore = configureStore()
const initialState = {
  youcantmiss: {
    userValue: dataUser
  },
  home: { categoria: 'Cesantías', subCategoria: 'Cesante' },
  welcome: { typeUser: 1 },
  menu: { status: true },
  tourguide: { status: true }
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      allContentfulCampana: {
        edges: []
      },
      allContentfulBeneficio: {
        edges: []
      },
      allContentfulContenidoEducativo: {
        edges: []
      },
      allContentfulNovedad: {
        edges: []
      },
      allContentfulProducto: {
        edges: []
      },
      allContentfulInformes: {
        edges: []
      },
      allContentfulActualidadDeInversiones: {
        edges: []
      },
      allContentfulAlternativaCerrada: {
        edges: []
      },
      allContentfulOfertaDiferencial: {
        edges: []
      },
      allContentfulLeyesYDecretos: {
        edges: []
      },
      allContentfulCorporativoYAccionistas: {
        edges: []
      },
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  global.window = Object.create(window)
  const url = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/',
    state: { key: '1588081418971' }
  }
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      pathname: '/contenido/',
      state: { key: '1588081418971' }
    }
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <InternalCurrentInvestments
            accessibility={{ fontSize: 3, lineSize: 2 }}
            location={url}
            pageContext={{
              slug: 'inversiones/alternativas-cerradas-vigentes/',
              id: '4iyIbURlwNfeTUwnjgHBdI',
              type: 'alternativas',
              line: 'alternativas',
              sublinea: '',
              cliente: 1,
              ids: [
                '6tRmkahPbmybyKwcqPkg4n',
                '776EkpJ13FzM8DZQXp3SnI',
                '4iyIbURlwNfeTUwnjgHBdI'
              ],
              categoriaProducto: 'Alternativas'
            }}
            data={data}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <InternalCurrentInvestments
            accessibility={{ fontSize: 3, lineSize: 2 }}
            location={url}
            pageContext={{
              slug: 'inversiones/alternativas-cerradas-vigentes/',
              id: '4iyIbURlwNfeTUwnjgHBdI',
              type: 'alternativas',
              line: 'alternativas',
              sublinea: '',
              cliente: 1,
              ids: [
                '6tRmkahPbmybyKwcqPkg4n',
                '776EkpJ13FzM8DZQXp3SnI',
                '4iyIbURlwNfeTUwnjgHBdI'
              ],
              categoriaProducto: 'Alternativas'
            }}
            data={data}
            dispatch={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders click ver más', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wraper = mount(
      <Provider store={store}>
        <InternalCurrentInvestments
          accessibility={{ fontSize: 3, lineSize: 2 }}
          location={url}
          pageContext={{
            slug: 'inversiones/alternativas-cerradas-vigentes/',
            id: '4iyIbURlwNfeTUwnjgHBdI',
            type: 'alternativas',
            line: 'alternativas',
            sublinea: '',
            cliente: 1,
            ids: [
              '6tRmkahPbmybyKwcqPkg4n',
              '776EkpJ13FzM8DZQXp3SnI',
              '4iyIbURlwNfeTUwnjgHBdI'
            ],
            categoriaProducto: 'Alternativas'
          }}
          data={data}
        />
      </Provider>
    )
  })

  it('renders click ver más', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wraper = mount(
      <Provider store={store}>
        <InternalCurrentInvestments
          accessibility={{ fontSize: 3, lineSize: 2 }}
          test={true}
          location={url}
          pageContext={{
            slug: 'inversiones/alternativas-cerradas-vigentes/',
            id: '4iyIbURlwNfeTUwnjgHBdI',
            type: 'alternativas',
            line: 'alternativas',
            sublinea: '',
            cliente: 1,
            ids: [
              '6tRmkahPbmybyKwcqPkg4n',
              '776EkpJ13FzM8DZQXp3SnI',
              '4iyIbURlwNfeTUwnjgHBdI'
            ],
            categoriaProducto: 'Alternativas'
          }}
          data={data}
        />
      </Provider>
    )
  })
})
