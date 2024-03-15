import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import StepByStep from '../step-by-step/step-by-step'
import ContentProxy from './content-proxy'
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

global.window = Object.create(window)
const dataOneParra = {
  contentfulId: '12wxz9mZz9Ok44M64PSSXV',
  cabeceraContenido: {
    titulo: '¿Para qué son las Cesantías?',
    tituloCorto: 'Cesantías ¿Para qué son?',
    textoCierre: '',
    tiempo: '3',
    publicoObjetivo: null,
    descripcionCorta:
      'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
    descripcionLarga:
      'Es importante que tengas en cuenta que las cesantías son un ahorro que será de mucha ayuda cuando cambies de empleo y tengas algún imprevisto o se termine tu contrato laboral y éstas cumplan su función como seguro frente al desempleo.'
  },
  parrafos: [
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
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
    }
  ],
  callToAction: {
    titulo: null,
    textoButton: '¿Por qué elegir Protección?',
    url: null
  }
}

const dataFiveParra = {
  contentfulId: '12wxz9mZz9Ok44M64PSSXV',
  cabeceraContenido: {
    titulo: '¿Para qué son las Cesantías?',
    tituloCorto: 'Cesantías ¿Para qué son?',
    textoCierre: '',
    tiempo: '3',
    publicoObjetivo: null,
    descripcionCorta:
      'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
    descripcionLarga:
      'Es importante que tengas en cuenta que las cesantías son un ahorro que será de mucha ayuda cuando cambies de empleo y tengas algún imprevisto o se termine tu contrato laboral y éstas cumplan su función como seguro frente al desempleo.',
    subtitulo: ''
  },
  parrafos: [
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
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
    }
  ],
  callToAction: {
    titulo: null,
    textoButton: '¿Por qué elegir Protección?',
    url: null
  }
}

const dataProducto = {
  contentfulId: '12wxz9mZz9Ok44M64PSSXV',
  cabeceraContenido: {
    titulo: '¿Para qué son las Cesantías?',
    tituloCorto: 'Cesantías ¿Para qué son?',
    textoCierre: '',
    tiempo: '3',
    publicoObjetivo: null,
    descripcionCorta:
      'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
    descripcionLarga:
      'Es importante que tengas en cuenta que las cesantías son un ahorro que será de mucha ayuda cuando cambies de empleo y tengas algún imprevisto o se termine tu contrato laboral y éstas cumplan su función como seguro frente al desempleo.',
    subtitulo: ''
  },
  parrafos: [
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
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
                        'Realiza una proyección a tu futuro cercano y responde estas preguntas: ¿por cuánto tiempo tienes planeado usar tu ahorro?, ¿cuánto dinero tienes disponible?, ¿cuál es tu objetivo? Esto te ayudará a determinar un panorama de tu situación.',
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
                        'Si definitivamente tomas la decisión de retirar tus cesantías, asegúrate de usarlas de forma planeada y evita los gastos innecesarios. Recuerda que este ahorro es fundamental para tu futuro.',
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
                        'Cuando tengas el dinero, haz una lista de gastos y determina cuánto necesitas para cada uno de ellos. Así serás más ordenado con tu presupuesto. Además, ten presente que lo que puedas ahorrar será siempre una ganancia.',
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
                        'Recuerda volver a ahorrar tus cesantías inmediatamente tengas de nuevo un contrato laboral.',
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
              value:
                'Si no tienes la necesidad de gastarte este dinero y deseas conservarlo, piensa en otras posibilidades que te brinda Protección: ahorrarlas o invertirlas.',
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
                'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
                        'Realiza una proyección a tu futuro cercano y responde estas preguntas: ¿por cuánto tiempo tienes planeado usar tu ahorro?, ¿cuánto dinero tienes disponible?, ¿cuál es tu objetivo? Esto te ayudará a determinar un panorama de tu situación.',
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
                        'Si definitivamente tomas la decisión de retirar tus cesantías, asegúrate de usarlas de forma planeada y evita los gastos innecesarios. Recuerda que este ahorro es fundamental para tu futuro.',
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
                        'Cuando tengas el dinero, haz una lista de gastos y determina cuánto necesitas para cada uno de ellos. Así serás más ordenado con tu presupuesto. Además, ten presente que lo que puedas ahorrar será siempre una ganancia.',
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
                        'Recuerda volver a ahorrar tus cesantías inmediatamente tengas de nuevo un contrato laboral.',
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
              value:
                'Si no tienes la necesidad de gastarte este dinero y deseas conservarlo, piensa en otras posibilidades que te brinda Protección: ahorrarlas o invertirlas.',
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
                'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
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
            {
              data: {},
              marks: [],
              value:
                'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
                        'Realiza una proyección a tu futuro cercano y responde estas preguntas: ¿por cuánto tiempo tienes planeado usar tu ahorro?, ¿cuánto dinero tienes disponible?, ¿cuál es tu objetivo? Esto te ayudará a determinar un panorama de tu situación.',
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
                        'Si definitivamente tomas la decisión de retirar tus cesantías, asegúrate de usarlas de forma planeada y evita los gastos innecesarios. Recuerda que este ahorro es fundamental para tu futuro.',
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
                        'Cuando tengas el dinero, haz una lista de gastos y determina cuánto necesitas para cada uno de ellos. Así serás más ordenado con tu presupuesto. Además, ten presente que lo que puedas ahorrar será siempre una ganancia.',
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
                        'Recuerda volver a ahorrar tus cesantías inmediatamente tengas de nuevo un contrato laboral.',
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
              value:
                'Si no tienes la necesidad de gastarte este dinero y deseas conservarlo, piensa en otras posibilidades que te brinda Protección: ahorrarlas o invertirlas.',
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
                'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
    }
  ],
  callToAction: {
    titulo: null,
    textoButton: '¿Por qué elegir Protección?',
    url: null
  }
}

const dataProducto2 = {
  contentfulId: '3yDxxmBbyiT6GPOnG2Dj5O',
  cabeceraContenido: {
    titulo: '¿Para qué son las Cesantías?',
    tituloCorto: 'Cesantías ¿Para qué son?',
    textoCierre: '',
    tiempo: '4',
    publicoObjetivo: null,
    descripcionCorta:
      'Conoce aquí la manera correcta de utilizar tus Cesantías',
    descripcionLarga:
      'Las Cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Por ejemplo, pueden serte útiles para sostenerte mientras encuentras un nuevo trabajo, construir tu hogar o para capacitarte en lo que te gusta.\nConoce en esta infografía más información sobre los casos en los que puedes invertir tus Cesantías.\n',
    subtitulo: ''
  },
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
              value: 'Desempleo',
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
                'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener apuros a fin de mes.',
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
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Vivienda',
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
              marks: [{ type: 'bold' }],
              value: 'Educación',
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
              marks: [{ type: 'bold' }],
              value: 'Educación Superior:',
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
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Educación para el trabajo y el desarrollo humano:',
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
                      value:
                        'Pago de créditos del Icetex o créditos educativos ',
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
                        'Retiro parcial de ahorro programado o seguro educativo.',
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
          content: [{ data: {}, marks: [], value: '\n\n', nodeType: 'text' }],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [],
  callToAction: {
    titulo:
      '¡Con tus Cesantías en Protección das el primer paso para cumplir tus sueños!',
    textoButton: '¿Por qué elegir Protección?',
    url: null
  }
}

const dataProducto3 = {
  contentfulId: '2OJRVMtRN6wT6xJnlJc4sg',
  cabeceraContenido: {
    titulo: '¿Qué son las Cesantías?',
    tituloCorto: '¿Qué son las Cesantías?',
    textoCierre: '',
    tiempo: '2',
    publicoObjetivo: null,
    descripcionCorta:
      'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
    descripcionLarga:
      '__Las Cesantías son una prestación social__ a la que tienes derecho al ser un trabajador vinculado por contrato fijo o término indefinido, tanto en empresas públicas como privadas. Este es un ahorro que es consignado al fondo de Cesantías seleccionado libremente por ti y corresponde a un mes de salario por cada año laborado o proporcional a la fracción de tiempo que hayas trabajado.\n',
    subtitulo: 'Tipos de Cesantías'
  },
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
              value: 'Ordinarias',
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
                'Las Cesantías ordinarias nacieron gracias a la Ley 50. Esta ley aplica de',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: ' forma obligatoria ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'para los trabajadores que establecieron un contrato a partir del 1 de enero de 1991 y de ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'forma voluntaria',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' para los empleados con contrato anterior al 1 de enero de 1991.',
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
                'En este tipo de Cesantías se consigna de forma anual a un fondo de pensiones y Cesantías, el cual es encargado de administrar este dinero.',
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
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Retroactivas',
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
                'En este caso las Cesantías del trabajador permanecen en manos de la empresa durante todo el contrato laboral.',
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
                'La prestación social se calcula con base en el último salario del empleado por el tiempo del servicio.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            { data: {}, marks: [], value: '', nodeType: 'text' },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'Descúbrelo ya',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            { data: {}, marks: [], value: '', nodeType: 'text' }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
    },
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/3BgSS5Ud85ZaY2t4o2Excw/b586f3155f2be5c54a867f8a94061b69/imgtipos2.png?w=800&q=50'
    }
  ],
  callToAction: {
    titulo: 'Conoce en qué puedes utilizar tu ahorro.',
    textoButton: '¿Para qué sirven?',
    url: null
  }
}

const dataProducto4 = {
  contentfulId: '3PM6cWviUO1D5QWrQhg8rA',
  cabeceraContenido: {
    titulo: '¿Cómo retirar tus Cesantías para educación?',
    tituloCorto: '¿Cómo retirar Cesantías?',
    textoCierre: {
      textoCierre:
        'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.'
    },
    tiempo: '5',
    publicoObjetivo: null,
    descripcionCorta:
      'Como empleado puedes apoyar tus proyectos educativos junto a Protección.',
    descripcionLarga:
      'Como afiliado a Cesantías como cesante o independiente, puedes hacer el retiro de tus Cesantías directamente en www.proteccion.com.',
    subtitulo: ''
  },
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
              value: 'Pago de matrícula',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
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
                        'Certificado vigente de la liquidación de la matrícula de la institución en original o copia sin cancelar.',
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
                        'Certificado de la liquidación debe tener como mínimo la siguiente información:  nombre de quien se matricula (afiliado o beneficiario), valor de la matrícula, forma de pago, nombre y NIT de la entidad de educación superior.',
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
                        'Copia de la licencia de funcionamiento de la institución o acto de reconocimiento y del programa a estudiar.',
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
                        'Si el retiro es para alguno de tus beneficiarios será necesario que presentes los documentos que demuestren su relación tales como registro civil, partidas eclesiásticas o declaraciones extrajuicio. Para los hijos del cónyuge que no sean hijos reconocidos legalmente por el afiliado no se podrá hacer retiros para educación superior. ',
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
                  marks: [],
                  value:
                    'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.',
                  nodeType: 'text'
                }
              ],
              nodeType: 'paragraph'
            }
          ],
          nodeType: 'blockquote'
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
              value: 'Créditos educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
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
                        'Certificado vigente de la liquidación de la matrícula de la institución en original o copia,  sin cancelar.',
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
                        'Certificado de la liquidación debe tener como mínimo la siguiente información:  nombre de quien se matricula (afiliado o beneficiario), valor de la matrícula, forma de pago, nombre y NIT de la entidad de educación superior.',
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
                        'Copia de la licencia de funcionamiento de la institución o acto de reconocimiento.',
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
                        'Si el retiro es para alguno de tus beneficiarios será necesario que presentes los documentos que demuestren su relación. ',
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
                        'Certificado del crédito otorgado y estado de cuenta. Debe contener el nombre e identificación del deudor, saldo de la deuda o valor a pagar). Recuerda que se deberán consignar los recursos directamente a la entidad prestadora del crédito.',
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
              value: 'Seguros educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
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
                        'Certificado de existencia y representación de la entidad con la que tienes tu ahorro programado. ',
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
                      value: 'Póliza de seguro suscrito con la entidad.',
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
                        'Copia de la factura o cuenta de cobro con destino a la entidad con la que tienes el ahorro.',
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
                        'Documentos que demuestren la relación con los beneficiarios (hijo, cónyuge y compañero permanente).',
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
              value:
                'Pago de matrículas de programas ofrecidos por la UNIR en Colombia',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
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
                      value: 'Nombre y NIT de la institución.',
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
                        'Copia de la resolución de funcionamiento de la universidad o institución emitido por el Consejo de Universidades previa evaluación de la Agencia Nacional de Evaluación de la Calidad y Acreditación (ANECA) o de las agencias evaluadoras dependientes de las Comunidades Autónomas habilitadas por la normativa española.',
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
                        'Certificación de admisión a la institución, el área específica de estudio, el tiempo de duración, el valor de la matrícula y la forma de pago.',
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
                        'Registros civiles o partidas eclesiásticas que demuestren la relación que tienes con tus beneficiarios.',
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
                      value: 'Valor de la matrícula.',
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
              value: 'Préstamos educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
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
                        'Factura original y copia del Icetex o institución prestamista en el que conste el valor a pagar.',
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
                        'Documento que acredite la calidad de afiliado o beneficiario (hijo, cónyuge o compañero permanente).',
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
                        'Girar el cheque a nombre del Icetex, con los sellos restrictivos.',
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
              value: 'Según los canales ',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-3'
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
                        'A través del empleador, puedes solicitar el retiro sin importar el monto. El pago será entregado según las indicaciones entregadas por el empleador.',
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
                        'También puedes optar por las Oficinas Protección. Allí podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
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
          content: [{ data: {}, marks: [], value: '\n\n', nodeType: 'text' }],
          nodeType: 'paragraph'
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
  imagenes: [],
  callToAction: {
    titulo: '¿Estás listo para retirar tus Cesantías?',
    textoButton: 'Ir a la zona transaccional',
    url: null
  }
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
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="producto"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without images', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="producto"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="beneficio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto2.parrafos}
            images={dataProducto2.imagenes}
            type="beneficio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            video={null}
            callToActionBtn={dataProducto2.callToAction}
            alertText="caracteres "
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto3.parrafos}
            images={dataProducto3.imagenes}
            type="beneficio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            video={null}
            callToActionBtn={dataProducto3.callToAction}
            alertText="caracteres "
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="novedad"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto2.parrafos}
            images={dataProducto2.imagenes}
            type="novedad"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto2.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto3.parrafos}
            images={dataProducto3.imagenes}
            type="novedad"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto3.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 2', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto2.parrafos}
            images={dataProducto2.imagenes}
            type="producto"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto2.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 1', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto3.parrafos}
            images={dataProducto3.imagenes}
            type="producto"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto3.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props 1', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto4.parrafos}
            images={dataProducto4.imagenes}
            type="producto"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto4.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 1 parrafo', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataOneParra.parrafos}
            images={dataOneParra.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataOneParra.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 5 parrafo', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataFiveParra.parrafos}
            images={dataFiveParra.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataFiveParra.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 5 parrafo educativo', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataFiveParra.parrafos}
            images={dataFiveParra.imagenes}
            type="educativo"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataFiveParra.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without template', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataFiveParra.parrafos}
            images={dataFiveParra.imagenes}
            type="educativomone"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataFiveParra.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 1 parrafo novedad', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataOneParra.parrafos}
            images={dataOneParra.imagenes}
            type="novedad"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataOneParra.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 parrafo', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto2.parrafos}
            images={dataProducto2.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto2.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 1', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto4.parrafos}
            images={dataProducto4.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto4.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly video', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto4.parrafos}
            images={dataProducto4.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto4.callToAction}
            alertText="caracteres "
            video={['https://www.youtube.com/embed/8420jbTNoMw']}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly infographic', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto4.parrafos}
            images={dataProducto4.imagenes}
            type="servicio"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto4.callToAction}
            alertText="caracteres "
            infographic={{
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4xYZFeYUppMGSCOvlmsMME/0f896fc12f5fcdc161a776a519eb6d3b/infografico-extractos.png?w=800&q=50'
              },
              file: {
                fileName: 'name-pruena_s.jpg'
              },
              contentful_id: 'dfsdfsdfsdfsdf'
            }}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="educativo"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            accessibility={{ fontSize: 3, lineSize: 2 }}
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="soluciones"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="soluciones"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
            idContent={'PQcZ8hT1yHyWxd8MTkdFj'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="soluciones"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
            idContent={'40U6iT93UwkukYi3HzZlHJ'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="soluciones"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
            idContent={'45QAunT84EtojZDkUV54Am'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentProxy
            paragraphs={dataProducto.parrafos}
            images={dataProducto.imagenes}
            type="soluciones"
            descripcionLarga="producto Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos."
            subtitulo="caracteres "
            callToActionBtn={dataProducto.callToAction}
            alertText="caracteres "
            video={null}
            isSnack={() => {}}
            widget="xxxxxxxxxxxxxxxxxxxxxxx"
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const dataSend = {
      imagenes: dataProducto.imagenes,
      parrafos: [],
      cta: dataProducto.callToAction,
      video: null
    }
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <StepByStep data={dataSend} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
