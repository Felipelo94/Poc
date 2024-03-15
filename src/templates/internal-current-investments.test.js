import React from 'react'
import renderer from 'react-test-renderer'
import InternalCurrentInvestments from './internal-current-investments'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { useStaticQuery } from 'gatsby'

const data = {
  allContentfulActualidadDeInversiones: {
    edges: [
      {
        node: {
          titulo: 'Actualidad',
          contentful_id: '6kLqtSng0Jz7Wt8LegB9mB',
          urlSeo: 'inversiones/actualidad/actualidad-de-inversiones',
          podcast: [
            {
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ],
              titulo:
                'La volatilidad en los mercados ha ido aumentado, tal como se esperaba.',
              OrigenDeAudio: ['Spotify'],
              linkPodcast: {
                linkPodcast:
                  'https://open.spotify.com/embed-podcast/show/2PgqwvmicwiqkdbZfgSzTi'
              },
              descripcion:
                'Hoy último debate presidencial en EE.UU Expectativas y posibles impactos con Juan Ignacio Medina.',
              updatedAt: '2020-10-28T17:36:36.953Z'
            },
            {
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ],
              titulo: 'Informe Semanal',
              OrigenDeAudio: ['Contentful'],
              linkPodcast: {
                linkPodcast:
                  'https://images.ctfassets.net/y3qdch79qxiw/4pm6a5dhKStZcZKGyIvNn7/7605d9a9d6d2955cda01b287e5bafec0/WhatsApp-Audio-2020-10-19-at-1.33.52-PM-_1_.mp3'
              },
              descripcion:
                'El mercado accionario global marcó retrocesos con caídas más pronunciadas en Europa',
              updatedAt: '2020-11-25T16:53:06.498Z'
            }
          ],
          Informes: [
            {
              updatedAt: '2020-11-25T05:35:01.612Z',
              titulo: 'Ensayo informes inversiones contenido',
              linkCallToActionInformes: null,
              textoIntroductorioBite: 'Ensayo informes inversiones contenido',
              contentful_id: '156x7USXSE8Zy0ZdFLUpng',
              tipoDeInforme: 'Visión Mensual de Inversiones',
              contenido: {
                tituloCorto: 'Ensayo informes inversiones contenido',
                linkCallToAction: 'https://www.youtube.com/watch?v=Of6uOq_7ceE',
                Tema: [
                  {
                    contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
                    tituloCorto: 'GENERICO INVERSIONES'
                  }
                ],
                textoIntroductorio: 'Ensayo informes inversiones contenido',
                textoCallToActionBite: 'Quiero conocer más',
                urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
                contentful_id: 'ixxKMebxvMfDmOvqutmqz',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
                updatedAt: '2020-10-22T14:00:16.360Z',
                imagenpequena: {
                  file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
                  }
                },
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                categoriaCliente: [
                  {
                    descripcion: 'Conozco de Inversiones',
                    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                  },
                  {
                    descripcion: 'Estoy Aprendiendo',
                    contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                  }
                ]
              },
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            },
            {
              updatedAt: '2020-11-25T05:34:47.872Z',
              titulo: 'Informe de ejemplo inversiones (2)',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '1iapMqBhFQTeYhdwLUfWSK',
              tipoDeInforme: 'Informe trimestral Portafolios Balanceados',
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            },
            {
              updatedAt: '2020-11-25T05:34:30.408Z',
              titulo: 'Informe de ejemplo inversiones (1)',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '4tZTfI6Kb326d5CMMNoIP8',
              tipoDeInforme: 'Informe trimestral de mercados',
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            },
            {
              updatedAt: '2020-11-25T05:33:53.119Z',
              titulo: 'Informe de ejemplo inversiones',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '7iimejGXVlqN9Vulsn4HVp',
              tipoDeInforme: 'Informe semanal',
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          ],
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/7K70oFOCdHf85zoXJWQL8x/50a8c5d5cbc5178a5987c243e1b0de12/IMG-banner1.svg',
              fileName: 'IMG-banner1.svg'
            }
          },
          descripcion: {
            id: '22cfba06-7dfd-5af6-ba53-6aeac5ed7b22',
            descripcion: 'Lorem'
          }
        }
      },
      {
        node: {
          titulo: 'Cifras de mercado',
          contentful_id: '8GMSacJVozO0la62SSeix',
          urlSeo: 'inversiones/actualidad/cifras-de-mercado',
          podcast: null,
          Informes: null,
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/7tVnQkt53yMQRw80OKl4OE/8a7e5d801facba01f6027918dd3abb91/Group_1073cifras.png',
              fileName: 'Group 1073cifras.png'
            }
          },
          descripcion: {
            id: 'e3ddfbea-598f-52e5-87f8-a3e59d7f5ff8',
            descripcion:
              'En este espacio podrás encontrar todo lo que necesites saber sobre Cesantías'
          }
        }
      },
      {
        node: {
          titulo: 'Qué dice el experto',
          contentful_id: '2iSc262lfCDuc5XCafkl7K',
          urlSeo: 'inversiones/actualidad/el-experto-dice',
          podcast: null,
          Informes: null,
          imagen: null,
          descripcion: {
            id: 'f80df2b7-25dc-5521-874d-52e9ef1e463d',
            descripcion: 'Lorem'
          }
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
            location={url}
            pageContext={{
              slug: 'inversiones/actualidad/actualidad-de-inversiones/',
              id: '6kLqtSng0Jz7Wt8LegB9mB',
              type: 'actualidad',
              line: 'actualidad',
              ids: [
                '6kLqtSng0Jz7Wt8LegB9mB',
                '8GMSacJVozO0la62SSeix',
                '2iSc262lfCDuc5XCafkl7K'
              ],
              categoriaProducto: 'Actualidad'
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
            location={url}
            pageContext={{
              slug: 'inversiones/actualidad/actualidad-de-inversiones/',
              id: '8GMSacJVozO0la62SSeix',
              type: 'actualidad',
              line: 'actualidad',
              ids: [
                '6kLqtSng0Jz7Wt8LegB9mB',
                '8GMSacJVozO0la62SSeix',
                '2iSc262lfCDuc5XCafkl7K'
              ],
              categoriaProducto: 'Actualidad'
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
            slug: 'inversiones/actualidad/actualidad-de-inversiones/',
            id: '6kLqtSng0Jz7Wt8LegB9mB',
            type: 'actualidad',
            line: 'actualidad',
            ids: [
              '6kLqtSng0Jz7Wt8LegB9mB',
              '8GMSacJVozO0la62SSeix',
              '2iSc262lfCDuc5XCafkl7K'
            ],
            categoriaProducto: 'Actualidad'
          }}
          data={data}
          test={true}
        />
      </Provider>
    )
  })
})
