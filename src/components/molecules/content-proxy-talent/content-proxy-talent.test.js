import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ContentProxyTalent from './content-proxy-talent'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const cta = {
  cta: {
    titulo: 'sssss',
    textoButton: 'sdadsad',
    url: 'https://url-prueba'
  }
}

describe('ContentProxyTalent', () => {
  beforeEach(() => {})

  it('ContentProxyTalent renders correctly', () => {
    const tree = mount(
      <Provider store={initialState}>
        <ContentProxyTalent
          data={data}
          line={'Inversión'}
          dataSend={dataSend}
          accessibility={{ fontSize: 2, lineSize: 1 }}
        />
      </Provider>
    )
  })

  it('ContentProxyTalent renders dataEmpty', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxyTalent
            data={dataEmpty}
            line={'Inversión'}
            dataSend={dataSend}
            accessibility={{ fontSize: 2, lineSize: 1 }}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ContentProxyTalent renders dataEmpty mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxyTalent
            data={dataEmpty}
            line={'Inversión'}
            dataSend={dataSend}
            accessibility={{ fontSize: 2, lineSize: 1 }}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const dataSend = {
  imagenes: null,
  title: 'Talento Sí Hay de Protección te da la bienvenida',
  parrafos: [
    {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'heading-2',
          content: [
            {
              nodeType: 'text',
              value: 'Herramientas:',
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  ],
  parrafos2: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Enlaces de interés:',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: null,
  video: null,
  podcast: null
}
const dataEmpty = {
  tituloCorto: {},
  textoIntroductorio: {},
  textoCallToActionBite: {},
  tiempoDeLectura: {},
  imagenpequena: {},
  relevancia: {},
  Tema: {}
}
const data = {
  infographicMobile: {
    'en-US': {
      fields: {
        file: {
          'en-US': {
            fileName: 'sa',
            url:
              'https://images.ctfassets.net/y3qdch79qxiw/4xYZFeYUppMGSCOvlmsMME/0f896fc12f5fcdc161a776a519eb6d3b/infografico-extractos.png?w=800&q=50'
          }
        }
      },
      sys: {
        contentful_id: 'sadasd'
      }
    }
  },
  listadoVideos: {
    'en-US': []
  },
  infografico: {
    'en-US': {
      fields: {
        file: {
          'en-US': {
            fileName: 'sa',
            url:
              'https://images.ctfassets.net/y3qdch79qxiw/4xYZFeYUppMGSCOvlmsMME/0f896fc12f5fcdc161a776a519eb6d3b/infografico-extractos.png?w=800&q=50'
          }
        }
      },
      sys: {
        contentful_id: 'sadasd'
      }
    }
  },
  tituloCorto: { 'en-US': 'Consejos para tu vida laboral' },
  textoIntroductorio: {
    'en-US':
      'Conoce aquí algunos consejos básicos que te permitirán prepararte mejor'
  },
  textoCallToActionBite: { 'en-US': 'Quiero conocer más' },
  titulo: { 'en-US': 'Consejos para tu vida laboral' },
  tiempoDeLectura: { 'en-US': '4' },
  descripcioncorta: {
    'en-US':
      'Conoce aquí algunos consejos básicos que te permitirán llegar mejor preparado a una entrevista laboral y con los que aprenderás acerca de aquellas deducciones de ley que tiene tu salario'
  },
  cuerpocontenido: {
    'en-US': {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value:
                '7 tips que debes tener en cuenta para llegar preparado a una entrevista',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
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
              marks: [{ type: 'bold' }],
              value: 'Tip 01: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'investiga todo lo que puedas sobre la empresa, como historia, misión, visión y demás datos que tengan relación con el cargo al que te vas a presentar.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 02: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡la puntualidad es un punto a favor! Identifica dónde queda el lugar de la entrevista y sal con el tiempo suficiente, pues cualquier inconveniente se puede presentar en el camino.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 03: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡no te acuestes tarde! Descansar bien el día anterior te ayudará responder con mayor claridad todas las preguntas.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 04: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡tu hoja de vida! Si te la piden, llévala muy bien presentada.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 05: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡no te pongas nervioso! Sabemos que la ansiedad es muy grande. Por eso, si es posible, practica con un amigo o un familiar cómo podría ser la entrevista.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 06: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡organiza lo que necesites! Deja preparada tu ropa o los implementos que debes llevar. Hacer una lista de chequeo puede ser una buena opción.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Tip 07: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '¡identifica tus habilidades! Es importante que las tengas claras, sobre todo las que le aportan al cargo. Esto te ayudará a responder por qué eres el indicado.\r\n\r\n\r',
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
              marks: [{ type: 'bold' }, { type: 'italic' }],
              value: 'Fuentes:',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: '\r\n\r\n', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '1. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'GIPE. Consejos para superar una entrevista.\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '2. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'soyresponsable.es. ¿Cómo triunfar en una entrevista de trabajo?\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '3.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Mundo Adecco. 10 tips para una entrevista de trabajo exitosa.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Son preguntas que te puedes hacer cuando vas a comenzar a buscar trabajo. Por eso, queremos presentarte estos tips para que los tengas en cuenta y tu búsqueda pueda ser más efectiva:',
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
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '\rAgrega o elimina información en tu hoja de vida cada vez que sea necesario. Esto te ayudará a mantenerla actualizada.',
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
                        '\rCrea tu perfil profesional en portales de empleo como Linkedin. Debes ser preciso en tus intereses e información para que las empresas puedan seleccionar correctamente tu perfil.\r',
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
                        'Si tienes una lista de empresas en las que te gustaría trabajar, investiga si tienen bolsas de empleo propias y diligencia los formatos que sean necesarios.\r',
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
                        'Crea una “red”. Cuéntales a tus amigos y familiares que estás buscando trabajo, y comparte con ellos tu hoja de vida.',
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
                        '\rAsiste a las ferias de empleo que se realicen en tu ciudad.\r',
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
                        'Descarga en tu celular aplicaciones para buscar empleo, como Computrabajo, Opcionempleo, Indeed entre otras.\r',
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
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'italic' }, { type: 'bold' }],
              value: 'Fuentes:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '\r\n\r\n1. Mundo Adecco: Cómo buscar empleo de forma asertiva en la red\r\n2. topAndroide.com: Las 8 mejores aplicaciones para buscar trabajo',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '¿Qué deducciones tiene mi salario?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Cada mes, al recibir tu salario, encontrarás ciertas deducciones que por la legislación colombiana son obligatorias. Sabemos que este tema te puede generar confusión, pero no te preocupes porque aquí te contaremos de qué se trata.\r\n\r\nSi tu ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'contrato',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: ' es de ', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'vinculación laboral a término fijo o indefinido,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' tendrás estas deducciones:\r\n\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Salud: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'el aporte que haces por este concepto es del 4%.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Pensión: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'el aporte a pensiones obligatorias es del 16%, de los cuales tú aportas el 4% y tu empresa el 12%.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Retención: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'podrías tener retención en la fuente si tu salario supera los $3.200.000.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Fondo de solidaridad pensional:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '\r si ganas más de cuatro salarios mínimos mensuales legales vigentes (SMMLV), debes aportar el 1% de tu salario para el Fondo de Solidaridad Pensional, una cuenta del Ministerio de la Protección Social que busca subsidiar las cotizaciones a pensión de las personas que por su situación socioeconómica no tienen acceso a los sistemas de seguridad social. Además, con este dinero recaudado se otorgan subsidios a grupos en estado de indigencia o extrema pobreza.',
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
                '\rCuando tu contrato es por prestación de servicios, eres tú quien debe hacer el pago completo de seguridad social (salud, 12.5%; arl y pensión, 16%). Por tal razón, no encontrarás ese egreso en tu salario. ',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }, { type: 'italic' }],
              value: 'Fuentes:',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: '\r\n\r\n', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '1. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'elempleo.com: Descuentos legales en contratos laborales.\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '2. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'mintrabajo.gov.co: Fondo de Solidaridad Pensional.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  },
  imagenpequena: {
    'en-US': {
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
        id: 'c5Umq22YmsqcBKxIb3sn9zr',
        type: 'Asset',
        createdAt: '2021-03-30T17:13:22.506Z',
        updatedAt: '2021-03-30T17:13:22.506Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
            contentful_id: 'master'
          }
        },
        revision: 1,
        contentful_id: '5Umq22YmsqcBKxIb3sn9zr'
      },
      fields: {
        title: { 'en-US': 'Imagen consejos para tu vida laboral' },
        description: {
          'en-US':
            'Hombre joven de cabello rubio con tatuajes en sus brazos, sonríe mientras con su mano derecha hace una señal de okay.'
        },
        file: {
          'en-US': {
            url:
              '//images.ctfassets.net/y3qdch79qxiw/5Umq22YmsqcBKxIb3sn9zr/aac69c3b41ce9fadbf8ad849e1afa959/Photos-THS_2_1.png',
            details: { size: 201240, image: { width: 350, height: 350 } },
            fileName: 'Photos-THS 2 1.png',
            contentType: 'image/png'
          }
        }
      }
    }
  },
  imagenes: {
    'en-US': [
      {
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
          id: 'c5Umq22YmsqcBKxIb3sn9zr',
          type: 'Asset',
          createdAt: '2021-03-30T17:13:22.506Z',
          updatedAt: '2021-03-30T17:13:22.506Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
              contentful_id: 'master'
            }
          },
          revision: 1,
          contentful_id: '5Umq22YmsqcBKxIb3sn9zr'
        },
        fields: {
          title: { 'en-US': 'Imagen consejos para tu vida laboral' },
          description: {
            'en-US':
              'Hombre joven de cabello rubio con tatuajes en sus brazos, sonríe mientras con su mano derecha hace una señal de okay.'
          },
          file: {
            'en-US': {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/5Umq22YmsqcBKxIb3sn9zr/aac69c3b41ce9fadbf8ad849e1afa959/Photos-THS_2_1.png',
              details: { size: 201240, image: { width: 350, height: 350 } },
              fileName: 'Photos-THS 2 1.png',
              contentType: 'image/png'
            }
          }
        }
      }
    ]
  },
  relevancia: { 'en-US': 'Relevancia Baja' },
  Tema: {
    'en-US': [
      {
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id: 'E9lyaifriuQ1SewQK8oc7',
          contentful_id: 'E9lyaifriuQ1SewQK8oc7'
        }
      }
    ]
  }
}
