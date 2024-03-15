import { mount } from 'enzyme'
import React from 'react'
import ContentAudio from './content-audio'
import { useStaticQuery } from 'gatsby'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'

const dataCompleta = {
  title: '¿Qué son las Pensiones Obligatorias?',
  imagenes: [
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/7i2A8qC7xYMMjIsUvizi0a/87b9ea69c8aec417b5078e9fecb90268/Qu__-es-la-inmovilizaci__n-de-las-cesant__as-y-c__mo-podr__a--servirte-max__1_.jpg?w=800&q=50',
      nameImage:
        'Qué-es-la-inmovilización-de-las-cesantías-y-cómo-podría--servirte-max (1)',
      title:
        'Qué-es-la-inmovilización-de-las-cesantías-y-cómo-podría--servirte-max (1)'
    }
  ],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            { data: {}, marks: [], value: 'La ', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Pensión Obligatoria',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' se construye a través de un ahorro que realizas durante tu vida laboral, sea como trabajador independiente o como empleado, y es una prestación económica que se recibe mensualmente desde el momento del retiro laboral con base en los aportes que se',
              nodeType: 'text'
            },
            {
              data: {
                target: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'y3qdch79qxiw',
                        contentful_id: 'y3qdch79qxiw'
                      }
                    },
                    id: 'c3vL1wtGbKAfLKNGzUZbdHF',
                    type: 'Asset',
                    createdAt: '2020-09-22T17:07:51.989Z',
                    updatedAt: '2020-09-22T17:07:51.989Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                        contentful_id: 'master'
                      }
                    },
                    revision: 1,
                    contentful_id: '3vL1wtGbKAfLKNGzUZbdHF'
                  },
                  fields: {
                    title: {
                      'en-US':
                        'Cómo generar y administrar la Clave Empresarial Protección'
                    },
                    file: {
                      'en-US': {
                        url:
                          '//assets.ctfassets.net/y3qdch79qxiw/3vL1wtGbKAfLKNGzUZbdHF/5221420d3c7947fdd3dee82d2d4a60d3/C__mo_generar_y_administrar_la_Clave_Empresarial_-_Protecci__n.pdf',
                        details: { size: 6909867 },
                        fileName:
                          'Cómo generar y administrar la Clave Empresarial - Protección.pdf',
                        contentType: 'application/pdf'
                      }
                    }
                  }
                }
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: ' realizaron',
                  nodeType: 'text'
                }
              ],
              nodeType: 'asset-hyperlink'
            },
            { data: {}, marks: [], value: '.\r\n', nodeType: 'text' },
            {
              data: {
                uri:
                  'https://assets.ctfassets.net/y3qdch79qxiw/663AkpJWCEjBc40bqYqcKc/52addb2dae487aaba08628e1f4f2d904/C__mo_liquidar_y_pagar_a_trav__s_de_Liquide_y_Pague_Cesant__as_Proteccion.pdf'
              },
              content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
              nodeType: 'hyperlink'
            },
            { data: {}, marks: [], value: '\n', nodeType: 'text' }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Es importante aclarar que la pensión es un pago mensual, de por vida y obligatorio, que se realiza al afiliado si ha cotizado en el sistema pensional y si cumple con las condiciones que define la ley, como son la edad y el total de semanas cotizadas:\r\n',
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
              marks: [{ type: 'bold' }],
              value: 'Edad:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' mujeres 57 años y hombres 62 años.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Semanas cotizadas:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' 1.150 en un fondo privado como Protección; y 1.300 en un fondo público como Colpensiones.\r\n',
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
              value:
                'Más allá de ser una mesada que se paga al cumplir con las condiciones de edad y semanas trabajadas, la Pensión Obligatoria es también es una protección en caso de invalidez o un respaldo económico para la familia en caso de fallecimiento.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '\n', nodeType: 'text' }],
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
              value: '¿Cómo está conformado el ahorro pensional?\r\n',
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
              marks: [],
              value:
                '\rEl ahorro pensional está conformado por los pagos que se realizan obligatoriamente cada mes y que equivalen al 16% de tu salario:\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Cuando eres empleado:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' tu empleador asume el 12%, y tú debes aportar el 4% restante. La empresa es la encargada de realizar la consignación.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Cuando eres trabajador independiente: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'debes hacerte cargo del pago total del 16% del valor de tu salario.\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo:
      'Ahora que sabes qué son las pensiones, te invitamos a conocer los diferentes tipos de pensión que existen: vejez, invalidez y sobrevivencia:',
    textoButton: 'Leer más',
    url:
      'https://d2a43pezt9qjpt.cloudfront.net/personas/certificados-para-declaracion-de-renta/'
  },
  video: null,
  podcast: [
    {
      OrigenDeAudio: ['Contentful'],
      contentful_id: 'cOLGFyePbp92jDcmXVKbn',
      titulo: 'Informe Semanal',
      linkPodcast: {
        linkPodcast:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      },
      updatedAt: '2021-03-12T14:16:06.308Z',
      descripcion:
        'El mercado accionario global marcó retrocesos con caídas más pronunciadas en Europa'
    },
    {
      OrigenDeAudio: ['Contentful'],
      contentful_id: 'tQTnZq994jxf8e2pN1imF',
      titulo: 'Proteccion Pruebas',
      linkPodcast: {
        linkPodcast:
          'https://assets.ctfassets.net/y3qdch79qxiw/4pm6a5dhKStZcZKGyIvNn7/7605d9a9d6d2955cda01b287e5bafec0/WhatsApp-Audio-2020-10-19-at-1.33.52-PM-_1_.mp3'
      },
      updatedAt: '2021-03-17T14:10:40.532Z',
      descripcion: 'Proteccion Pruebas'
    },
    {
      OrigenDeAudio: ['Spotify'],
      contentful_id: '2x2SGZQFFM77f0fIKrQ2zb',
      titulo: 'Al minuto con Protección',
      linkPodcast: {
        linkPodcast:
          'https://open.spotify.com/episode/2icvsJwMBB1B45mjTF7ckD?si=0V3KQiZZTsiUDZWdVTF9dA'
      },
      updatedAt: '2020-12-01T15:36:11.494Z',
      descripcion:
        'Avances en las vacunas pesan más que el incremento en casos.'
    }
  ]
}

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  },
  youcantmiss: {
    userValue: {}
  },
  pageContext: {
    ...pageContextInitialState
  }
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
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
  beforeEach(() => {})
  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ContentAudio
          accessibility={{ fontSize: 3, lineSize: 2, darkMode: true }}
          lineGtm="Pensión"
          type="Persona"
          data={dataCompleta}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ContentAudio
          accessibility={{ fontSize: 3, lineSize: 2, darkMode: true }}
          lineGtm="Pensión"
          type="Persona"
          cta={{}}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ContentAudio
          accessibility={{ fontSize: 3, lineSize: 2, darkMode: true }}
          lineGtm="Pensión"
          type="Persona"
          data={{}}
        />
      </Provider>
    )
  })
})
