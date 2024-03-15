import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'
import Contentsolutions from './content-solutions'
import { useStaticQuery } from 'gatsby'

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
const parrafo = [
  {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: '¿Cuáles son sus características?',
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
            value: 'Financiación hasta el ',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: '80% del valor comercial de la vivienda',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [],
            value:
              ' a un plazo entre 5 y 20 años, con tasa fija en pesos o variable indexada a la ',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: 'DTF',
            nodeType: 'text'
          },
          { data: {}, marks: [], value: ' o al ', nodeType: 'text' },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: 'IPC',
            nodeType: 'text'
          },
          { data: {}, marks: [], value: '.', nodeType: 'text' }
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
                      'Es posible incluir los ingresos familiares de más de un aportante.',
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
                    value: 'Estudio de crédito sin costo.\r',
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
                      'Posibilidad de hacer abonos extraordinarios al contrato de leasing cuando lo desees, sin incurrir en penalizaciones.\r\n',
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
  },
  {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: '¡Obtén grandes beneficios!',
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
                    value:
                      'Tienes la posibilidad de ceder el contrato de arrendamiento del inmueble en cualquier momento, sin incurrir en gastos de escritura y registro. (Previo estudio y aprobación de crédito del nuevo cliente).',
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
                      'Puedes reducir la base sobre la cual realizan el cálculo de la retención en la fuente, por los intereses pagados.',
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
                      'Puedes acceder al beneficio de reducción de tasas de interés otorgado por el Gobierno Nacional.\r',
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
            marks: [{ type: 'bold' }],
            value: 'Ahorrar es el primer paso: ',
            nodeType: 'text'
          },
          { data: {}, marks: [], value: '\r\n', nodeType: 'text' }
        ],
        nodeType: 'heading-6'
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: 'Ahorrar tus Cesantías es solo el comienzo:\r',
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
              'Para reunir parte del capital que necesitas para la cuota inicial de tu vivienda propia, ',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: 'reserva las cesantías que tu empleador consigna cada año',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [],
            value:
              ' a tu nombre y que equivalen a un mes de salario por año laborado.\r\r\n',
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
            value: 'Ahorrar en pensiones voluntarias, el mejor complemento:\r',
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
            value: 'Comprometerte con un ',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value:
              'aporte fijo y continuo en una cuenta de pensiones voluntarias,',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [],
            value:
              ' te permitirá construir un ahorro complementario y así reunir el capital total requerido para la cuota inicial de tu vivienda.\r',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        data: {},
        content: [
          { data: {}, marks: [], value: 'Los ', nodeType: 'text' },
          {
            data: {},
            marks: [{ type: 'bold' }],
            value: 'aportes extraordinarios,',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [],
            value:
              ' como un porcentaje de las primas, intereses a las cesantías o salarios extralegales, son ayudas adicionales al ahorro programado que pueden acortar el camino para cumplir el sueño de tener casa propia.\r\n\r\n',
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
              'El Gobierno Nacional ayuda a los colombianos a pagar hasta el 30% de la cuota mensual de su crédito hipotecario, a través del Subsidio a la Tasa de Interés*. ',
            nodeType: 'text'
          },
          {
            data: {},
            marks: [{ type: 'italic' }],
            value:
              'Beneficio que está sujeto al cumplimiento de los requisitos del programa por parte de los aspirantes.\r\n',
            nodeType: 'text'
          },
          { data: {}, marks: [], value: '*', nodeType: 'text' },
          {
            data: { uri: 'http://www.minvivienda.gov.co/' },
            content: [
              {
                data: {},
                marks: [],
                value: 'www.minvivienda.gov.co\r',
                nodeType: 'text'
              }
            ],
            nodeType: 'hyperlink'
          },
          { data: {}, marks: [], value: '\n', nodeType: 'text' }
        ],
        nodeType: 'paragraph'
      }
    ],
    nodeType: 'document'
  }
]
const data = {
  title: 'Leasing habitacional Bancolombia',
  imagenes: [
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/1sVb4Bkksb5c3ivedrnA1q/a67f5f12266ba3c5c8710a59e613431a/Leasing-Habitacional-Bancolombia-dk.png?w=800&q=50',
      nameImage: 'Leasing-Habitacional-Bancolombia',
      title: 'Leasing-Habitacional-Bancolombia'
    }
  ],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '¿Cuáles son sus características?',
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
              value: 'Financiación hasta el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '80% del valor comercial de la vivienda',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' a un plazo entre 5 y 20 años, con tasa fija en pesos o variable indexada a la ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'DTF',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: ' o al ', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'IPC',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: '.', nodeType: 'text' }
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
                        'Es posible incluir los ingresos familiares de más de un aportante.',
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
                      value: 'Estudio de crédito sin costo.\r',
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
                        'Posibilidad de hacer abonos extraordinarios al contrato de leasing cuando lo desees, sin incurrir en penalizaciones.\r\n',
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
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: '¡Obtén grandes beneficios!',
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
                      value:
                        'Tienes la posibilidad de ceder el contrato de arrendamiento del inmueble en cualquier momento, sin incurrir en gastos de escritura y registro. (Previo estudio y aprobación de crédito del nuevo cliente).',
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
                        'Puedes reducir la base sobre la cual realizan el cálculo de la retención en la fuente, por los intereses pagados.',
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
                        'Puedes acceder al beneficio de reducción de tasas de interés otorgado por el Gobierno Nacional.\r',
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
              marks: [{ type: 'bold' }],
              value: 'Ahorrar es el primer paso: ',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: '\r\n', nodeType: 'text' }
          ],
          nodeType: 'heading-6'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Ahorrar tus Cesantías es solo el comienzo:\r',
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
                'Para reunir parte del capital que necesitas para la cuota inicial de tu vivienda propia, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'reserva las cesantías que tu empleador consigna cada año',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' a tu nombre y que equivalen a un mes de salario por año laborado.\r\r\n',
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
              value:
                'Ahorrar en pensiones voluntarias, el mejor complemento:\r',
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
              value: 'Comprometerte con un ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value:
                'aporte fijo y continuo en una cuenta de pensiones voluntarias,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' te permitirá construir un ahorro complementario y así reunir el capital total requerido para la cuota inicial de tu vivienda.\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            { data: {}, marks: [], value: 'Los ', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'aportes extraordinarios,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' como un porcentaje de las primas, intereses a las cesantías o salarios extralegales, son ayudas adicionales al ahorro programado que pueden acortar el camino para cumplir el sueño de tener casa propia.\r\n\r\n',
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
                'El Gobierno Nacional ayuda a los colombianos a pagar hasta el 30% de la cuota mensual de su crédito hipotecario, a través del Subsidio a la Tasa de Interés*. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'italic' }],
              value:
                'Beneficio que está sujeto al cumplimiento de los requisitos del programa por parte de los aspirantes.\r\n',
              nodeType: 'text'
            },
            { data: {}, marks: [], value: '*', nodeType: 'text' },
            {
              data: { uri: 'http://www.minvivienda.gov.co/' },
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'www.minvivienda.gov.co\r',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            { data: {}, marks: [], value: '\n', nodeType: 'text' }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo:
      '¡Ahorrar en Protección es el primer paso para cumplir tu sueño de vivienda! Agenda ahora mismo una cita y conoce más:',
    textoButton: '¡Solicitar cita!',
    url: null
  },
  video: ['https://www.youtube.com/embed/ZI0PdhdqtiE']
}
const alertText = {
  textoCierre:
    '** Bancolombia S.A. Establecimiento Bancario asume exclusivamente la responsabilidad del cumplimiento de las obligaciones de Leasing Habitacional y del Crédito frente al consumidor financiero. Financiación sujeta a estudio de crédito y a cumplimiento de las políticas de la entidad que financia.'
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
  beforeEach(() => {})
  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <Contentsolutions
          accessibility={{ fontSize: 3, lineSize: 2 }}
          paragraphs={parrafo}
          data={data}
          alertText={alertText}
          line={'18bfSEqhamhiOHQeS35Wpw'}
          descrpcionCorta="Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco."
          nombreCallToActionTextoCierre=""
          linkCallToActionTextoCierre=""
          idContent="1rn3OY1LM2bylydo88XeKj"
          user="asdsa"
        />
      </Provider>
    )
  })
})

describe('LongText', () => {
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
  beforeEach(() => {})

  it('LongText renders correctly', () => {
    global.innerWidth = 768
    global.dispatchEvent(new Event('resize'))
    const tree = mount(
      <Provider store={store}>
        <Contentsolutions
          accessibility={{ fontSize: 3, lineSize: 2 }}
          paragraphs={parrafo}
          data={data}
          alertText={alertText}
          line={'18bfSEqhamhiOHQeS35Wpw'}
          descrpcionCorta="Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco."
          nombreCallToActionTextoCierre=""
          linkCallToActionTextoCierre=""
          idContent="1rn3OY1LM2bylydo88XeKj"
          user="asdsa"
        />
      </Provider>
    )
  })

  it('isNotUser keydown last', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Contentsolutions
          accessibility={{ fontSize: 3, lineSize: 2 }}
          paragraphs={parrafo}
          data={data}
          alertText={alertText}
          line={'18bfSEqhamhiOHQeS35Wpw'}
          descrpcionCorta="Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco."
          nombreCallToActionTextoCierre=""
          linkCallToActionTextoCierre=""
          idContent="1rn3OY1LM2bylydo88XeKj"
          user="asdsa"
        />
      </Provider>
    )
    wrapper.find('#content-solutions-container-info').simulate('click')
  })

  it('isNotUser keydown last', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <Contentsolutions
          accessibility={{ fontSize: 3, lineSize: 2 }}
          paragraphs={parrafo}
          data={data}
          alertText={alertText}
          line={'18bfSEqhamhiOHQeS35Wpw'}
          descrpcionCorta="Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco."
          nombreCallToActionTextoCierre=""
          linkCallToActionTextoCierre=""
          idContent="1rn3OY1LM2bylydo88XeKj"
          user="asdsa"
        />
      </Provider>
    )
    wrapper.find('#call-to-action-container-link').simulate('click')
    wrapper.find('#btn-modal-close-modal-salesforce').simulate('click')
  })
})
