import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import { useStaticQuery } from 'gatsby'

import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'

import StepByStepMobile from './step-by-step-mobile'

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

const data = {
  imagenes: [],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            { data: {}, marks: [], value: 'Desempleo', nodeType: 'text' }
          ],
          nodeType: 'heading-1'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener a puros a fin de mes.\r\n',
              nodeType: 'text'
            }
          ],
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
            { data: {}, marks: [], value: 'Vivienda', nodeType: 'text' }
          ],
          nodeType: 'heading-1'
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
                      value: 'Compra de vivienda o lote',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Remodelación',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Construcción de vivienda',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Liberación de gravámenes sobre el inmueble',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Pago de impuestos',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Pago de cánones de Leasing',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Compra de títulos de vivienda',
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
              marks: [],
              value: '\r\nEducación Superior:',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-1'
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
                      value: 'Educación en territorio nacional',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Educación en España',
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
              marks: [],
              value: 'Educación para el trabajo y el desarrollo humano:',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-1'
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
                        'Programas de educación Media con convenios en instituciones de educación superior.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value:
                        'Educación no formal con títulos acreditados por el Sistema Nacional de Formación para el Trabajo.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value:
                        'Instituciones de educación media, técnica académica con certificación internacional.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Educación para el trabajo y desarrollo humano ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Programa de idiomas.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Pago de créditos ICETEX.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value: 'Pago de crédito educativo ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
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
                      value:
                        'Retiro parcial de ahorro programado o seguro educativo ',
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
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo: 'Elige el mejor destino para tus Cesantías',
    textoButton: 'Inviértelas o ahórralas',
    url: 'https://www.proteccion.com/wps/portal/proteccion'
  },
  video: null
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })

  test('renders correctly with data', () => {
    render(
      <Provider store={initialState}>
        <StepByStepMobile
          data={{
            imagenes: [],
            parrafos: [
              {
                data: {
                  target: { sys: { contentType: { sys: { id: 'aliados' } } } }
                },
                content: [
                  {
                    data: {
                      target: {
                        sys: {
                          contentType: { sys: { id: 'contenido' } }
                        },
                        fields: {
                          descripcion: { 'en-US': 'description' },
                          titulo: { 'en-US': 'title' },
                          linkCallToAction: { 'en-US': 'link' },
                          textoCallToAction: { 'en-US': 'link' },
                          imagen: {
                            'en-US': [
                              {
                                fields: {
                                  file: {
                                    'en-US': {
                                      fileName: 'fileName',
                                      url: 'url'
                                    }
                                  },
                                  title: {
                                    'en-US': 'title'
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Desempleo',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'embedded-entry-block'
                  }
                ],
                nodeType: 'embedded-entry-block'
              }
            ],
            cta: {
              titulo: 'Elige el mejor destino para tus Cesantías',
              textoButton: 'Inviértelas o ahórralas',
              url: 'https://www.proteccion.com/wps/portal/proteccion'
            },
            video: null
          }}
        />
      </Provider>
    )
  })

  test('renders correctly with data', () => {
    render(
      <Provider store={initialState}>
        <StepByStepMobile
          data={{
            imagenes: [],
            parrafos: [
              {
                data: {
                  target: { sys: { contentType: { sys: { id: 'aliados' } } } }
                },
                content: [
                  {
                    data: {
                      target: {
                        sys: {
                          contentType: { sys: { id: 'aliados' } }
                        },
                        fields: {
                          descripcion: { 'en-US': 'description' },
                          titulo: { 'en-US': 'title' },
                          linkCallToAction: { 'en-US': 'link' },
                          textoCallToAction: { 'en-US': 'link' },
                          imagen: {
                            'en-US': [
                              {
                                fields: {
                                  file: {
                                    'en-US': {
                                      fileName: 'fileName',
                                      url: 'url'
                                    }
                                  },
                                  title: {
                                    'en-US': 'title'
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Desempleo',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'embedded-entry-block'
                  }
                ],
                nodeType: 'embedded-entry-block'
              }
            ],
            cta: {
              titulo: 'Elige el mejor destino para tus Cesantías',
              textoButton: 'Inviértelas o ahórralas',
              url: 'https://www.proteccion.com/wps/portal/proteccion'
            },
            video: null
          }}
        />
      </Provider>
    )
  })

  test('renders correctly without props', () => {
    render(
      <Provider store={initialState}>
        <StepByStepMobile
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
        />
      </Provider>
    )
  })

  test('Keydown SubCategories', () => {
    render(
      <Provider store={initialState}>
        <StepByStepMobile
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          selectedTabIndex={0}
          titleH2="titleAccordion"
          imageStepbyStepJpg={[{ alt: 'alt', step: 'step' }]}
        />
      </Provider>
    )

    fireEvent.click(
      document.getElementById('container-step-by-step-title-value-0')
    )
    fireEvent.keyDown(
      document.getElementById('container-step-by-step-title-value-0')
    )
    fireEvent.click(
      document.getElementById('container-step-by-step-title-value-2')
    )

    fireEvent.click(screen.getByText('Vivienda'))
  })
})
