import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import { useStaticQuery } from 'gatsby'
import renderer from 'react-test-renderer'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'
import Meal from './meal'

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
  title: 'Mutuocolombia - Plan Institucional Bancolombia',
  imagenes: [
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/2pchCZS7Q8sRDIq1igIVcG/57dec7d0fa2b2e882eafcdf35f375d2d/PROTECCION_HIJOS.png?w=800&q=50',
      nameImage: 'Protección Hijos',
      title: 'Protección Hijos'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Conoce tu plan\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Sabes en que consiste el Plan Institucional Mutuocolombia?\r',
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
                'Es un plan de ahorro que te ayuda a cumplir tus sueños, como tener una casa propia, estudiar o viajar por el mundo. Por eso, queremos que conozcas como funciona:\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'En Mutuocolombia interactúan 2 agentes',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', el primero es denominado el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'participe o empleado,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' el cual realiza aportes periódicos descontados de su nómina; el segundo agente es la ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'patrocinadora o empresa,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' quien realiza aportes periódicos equivalentes a un 50% del valor del aporte del participe, quién será beneficiario de este dinero según unas condiciones establecidas.\r\n\r\n',
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
              value: '¿Qué necesitas para ser parte del plan?\r',
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
                'Para ser un participe del Plan Institucional Mutuocolombia, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'debes ser un empleado del Grupo Bancolombia y tener un contrato a término indefinido.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value:
                'Si eres aprendiz o practicante no puedes ser partícipe del plan.\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
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
              value: '¿Cuáles son los beneficios?\r',
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
                'Además de recibir el 50% de tus aportes, el plan te otorga los siguientes beneficios:\r',
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
                        'Los aportes disminuyen la base mensual de la retención en la fuente\r',
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
                        'Los retiros del dinero estarán libres del pago del impuesto del 4 x 1.000\r',
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
                        'Tus ahorros en el Fondo de Pensiones Voluntarias pueden ser destinados para el complemento de pensión\r',
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
                      value: 'Agilidad y eficiencia en tus transacciones\r',
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
                        'Acompañamiento y asesoría pensional, tributaria y financiera ajustada a tu ciclo de vida\r',
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
                        'Extracto mensual para que hagas seguimiento a la evolución de tu ahorro\r',
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
                        'Diferentes canales de atención para que encuentres información y asesoría\r',
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
                        'Consultas de saldo, extractos y movimientos, constancias de afiliación y aportes, y simuladores tributarios\r',
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
                      value: 'Consultores y ejecutivos a tu disposición\r',
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
                        'Queremos que conozcas los portafolios y la forma en la que administramos los recursos del plan, por eso te invitamos a que descargues la ficha técnica ',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://www.proteccion.com/wps/wcm/connect/proteccion/4bad7f54-a902-4cd2-9241-79ea354613c8/Mutuocolombia.pdf?MOD=AJPERES'
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'haciendo clic aquí.\r\n',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
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
              value: '\n',
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
              value: '¡Contáctanos!',
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
                'Encuentra el asesor más cercano para resolver tus inquietudes, así:\r',
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
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://assets.ctfassets.net/y3qdch79qxiw/1jLQ2nEP3zGPhMswNnxL3h/eb55a650fe21078f54da32b57c77f035/Directorio_Mutuocolombia_2021.xlsm'
                      },
                      content: [
                        {
                          data: {},
                          marks: [
                            {
                              type: 'bold'
                            }
                          ],
                          value: 'Haz clic aquí',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' para descargar el documento\r',
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
                        'Escribe el nombre de la ciudad donde te encuentras ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'italic'
                        }
                      ],
                      value: '(no utilizar tildes)',
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
                        'Encuentra el nombre del asesor con sus datos de contacto\r\n\r',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'También te acompañamos a través de los siguientes canales:\r',
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
                'Oficina exclusiva de Protección en Bancolombia, Dirección General - Medellín\r\nOficinas de Servicio Protección en todo el país\r\nCentral de llamadas en ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Medellín: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '510 90 99, en ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Bogotá: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '343 00 10, y en el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'resto del país: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '01 8000 52 8000\r\n',
              nodeType: 'text'
            },
            {
              data: {
                uri: 'https://www.proteccion.com'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'www.proteccion.com',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value: '  ',
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
              value: '\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Cómo puedo simular mi ahorro?\r',
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
                'Queremos que entiendas dos conceptos clave acerca de tus aportes, antes de que vivas la experiencia de simular el valor de tu ahorro mensual optimo y el dinero que podrás retirar en un futuro:\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Aportes ordinarios: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'consisten en un aporte periódico, en este caso mensual, descontado de tu nómina quincenalmente, y sobre el cual la patrocinadora te aporta un 50% adicional.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Aportes extraordinarios: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'consisten en un aporte no periódico, que se realiza de manera adicional a los aportes ordinarios y sobre el cual la patrocinadora no realiza contribución adicional.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Simuladores: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'a continuación, te invitamos a ingresar al siguiente simulador, para que conozcas cual sería tu aporte mensual óptimo ordinario, y cuánto es el monto máximo de dinero que podrías aportar de manera extraordinaria.',
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
              value: '\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Simula tu ahorro\r',
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
                '¡Ingresa tus datos y simula tu ahorro en el Plan Institucional Mutuocolombia!',
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
                'Sigue los pasos y entérate de los valores que puedes ahorrar con la ayuda de tu Patrocinadora.',
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
              value: '\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '\rAportes y consolidación\r',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Sabes cómo se calculan los aportes en el Plan Institucional Mutuocolombia?\r',
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
                'Puedes efectuar aportes ordinarios con periodicidad mensual, vía nómina quincenalmente, estos no podrán ser inferiores al tres por ciento (3%) del SMMLV a la fecha, ni superiores al diez por ciento (10%) de tu salario básico mensual como partícipe, excluidas todas las prestaciones legales y extralegales.\r',
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
              value: 'Si tu ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'salario es integral,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' la suma de tu aporte total mensual en estas condiciones tampoco podrá superar el diez por ciento (10%) del mismo.\r',
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
                'Recuerda que tus aportes se dividen de la siguiente manera:\r',
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
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Aportes ordinarios: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'aporte periódico, en este caso mensual, descontado de nómina quincenalmente.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Aportes extraordinarios:',
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
                        'Los aportes que realices mensualmente como participe, adicional a tu aporte ordinario.\r',
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
                        'Los aportes que entregues como participe de manera ocasional y que tengan origen en las primas de servicios legales y extralegales pagadas y hasta por el ciento por ciento (100%) del valor de cada prima.\r',
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
                        'Los aportes que realices como participe de manera ocasional y extraordinaria cuyo origen sean las bonificaciones laborales, hasta por el ciento por ciento (100%) del valor de dicha bonificación.\r\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Aporte de la patrocinadora: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'la empresa efectuará aportes equivalentes al cincuenta por ciento (50%) del aporte ordinario que realices como partícipe.',
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
              value: '\n',
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
              value: 'Modificación de aportes ordinarios:',
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
                'Si deseas realizar una modificación al aporte óptimo que realizas mensualmente, debes hacerlo por el sistema SAP (Sistema interno de Bancolombia), a través del portal de autoservicios de empleados. La modificación se hará efectiva, una vez el Área de Nómina procese la solicitud de acuerdo con las fechas establecidas para las novedades de nómina.\r',
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
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/wcm/connect/proteccion/8ebb36a9-2688-4ec5-b6a3-45116f679827/Instructivo+para+MODIFICAR+los+aportes+Mutuocolombia.pdf?MOD=AJPERES'
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: '',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '\n',
              nodeType: 'text'
            },
            {
              data: {
                target: {
                  metadata: {
                    tags: []
                  },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'y3qdch79qxiw',
                        contentful_id: 'y3qdch79qxiw'
                      }
                    },
                    id: 'c2Kh6vQCVyuuvLOZQ9c3T01',
                    type: 'Asset',
                    createdAt: '2021-07-07T01:11:53.393Z',
                    updatedAt: '2021-07-07T01:11:53.393Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                        contentful_id: 'master'
                      }
                    },
                    revision: 1,
                    contentful_id: '2Kh6vQCVyuuvLOZQ9c3T01'
                  },
                  fields: {
                    title: {
                      'en-US': 'Instructivo Aportes Mutuocolombia'
                    },
                    description: {
                      'en-US':
                        'Instructivo para modificación de aportes ordinarios'
                    },
                    file: {
                      'en-US': {
                        url:
                          '//assets.ctfassets.net/y3qdch79qxiw/2Kh6vQCVyuuvLOZQ9c3T01/c7fa4babf07492d466a1a61a4afc09ce/Instructivo_Modificaci__n_Aportes_Mutuocolombia.pdf',
                        details: {
                          size: 743987
                        },
                        fileName:
                          'Instructivo_Modificación_Aportes_Mutuocolombia.pdf',
                        contentType: 'application/pdf'
                      }
                    }
                  }
                }
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: 'Ver Instructivo',
                  nodeType: 'text'
                }
              ],
              nodeType: 'asset-hyperlink'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '\n',
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
              value: '\n',
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
              value:
                'Consolidación ¿sabes que significa la consolidación en el plan?\r',
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
                'Es el momento en el cual el dinero que aporta la patrocinadora pasa a ser tuyo.\r',
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
              value: '\n',
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
              value:
                'La consolidación de los aportes de la patrocinadora en tu cuenta se realiza según las siguientes condiciones:',
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
                        'Si como partícipe completas un (1) año en el plan desde tu vinculación, tendrás derecho a una consolidación equivalente al treinta por ciento (30%) del saldo no consolidado, producto de los aportes ordinarios efectuados por la patrocinadora.\r',
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
                        'Si como partícipe no completas un (1) año en el plan desde tu vinculación, perderás el derecho a recibir los aportes/contribuciones realizados por la patrocinadora.\r',
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
                        'Si como partícipe completas dos (2) años continuos en el plan desde tu vinculación, tendrás derecho a una consolidación equivalente al 60% del saldo no consolidado, producto de los aportes ordinarios efectuados por la patrocinadora.\r',
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
                        'Si como partícipe completas tres (3) años continuos en el plan desde tu vinculación, tendrás derecho a una consolidación equivalente al 100% del saldo no consolidado, producto de los aportes ordinarios efectuados por la patrocinadora.\r',
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
                        'A partir del tercer año de permanencia como partícipe en el plan desde tu vinculación, la contribución de la patrocinadora se consolidará mensualmente en un ciento por ciento (100%).\r\n',
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
              value: '\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Afiliación al Plan Mutuocolombia',
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
                'Ser parte de este plan de ahorro es muy fácil, lee detenidamente el siguiente paso a paso para afiliarte y empezar tu ahorro:',
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
                      value: 'Descarga e imprime el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '“documento de afiliación” ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'y diligéncialo completamente, recuerda marcar los campos de autorización de recolección y uso de datos personales, para que te enviemos la información importante de tu ahorro.',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '\r ',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://www.proteccion.com/wps/wcm/connect/proteccion/c4e01435-f55d-44ec-b0fc-1b8676771815/Formato+Guia+Vinculacion.pdf?MOD=AJPERES'
                      },
                      content: [
                        {
                          data: {},
                          marks: [
                            {
                              type: 'bold'
                            }
                          ],
                          value:
                            'Descarga el documento de afiliación en formato PDF\r\n',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '',
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
                      value: 'Imprime el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '“documento de firma cliente”',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y diligencia: tipo y número de documento, nombre completo, firma y huella. ',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://www.proteccion.com/wps/wcm/connect/proteccion/22ca499c-7e16-4454-9a1a-5b87dea36173/FIRMACLIENTE+MUTUOCOLOMBIA.pdf?MOD=AJPERES'
                      },
                      content: [
                        {
                          data: {},
                          marks: [
                            {
                              type: 'bold'
                            }
                          ],
                          value:
                            'Descarga el documento de firma cliente en formato PDF',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '',
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
                        'Envía ambos documentos y la copia legible ampliada al 150% de tu cédula a nuestra representante: ',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Yecenia Alejandra Rueda Echeverri\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'Torre Oriente, Piso 5ª, puesto 243\r\nSección Novedades de Nómina\r\nMedellín\r',
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
                        'Espera el instructivo por parte del banco dónde te explicaremos en un paso a paso cómo grabar tu aporte en SAP. En el momento en que la cuenta se genere en Protección, Bancolombia te enviará el instructivo para generar la novedad en SAP.\r\n',
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
                'Para inquietudes sobre tu afiliación, escríbenos al correo electrónico ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'bienesta@bancolombia.com.co ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'con el asunto: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Inquietudes sobre mi afiliación a Mutuocolombia.\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
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
              value: 'Debido a la situación actual del COVID-19, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'hemos implementado un nuevo proceso de afiliación para que no pierdas la oportunidad de comenzar tu ahorro. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'Este proceso lo podrás realizar únicamente cuando no tengas a la mano huellero e impresora.\r',
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
              value: '\n',
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
              value:
                'Para afiliarte al Plan Institucional Mutuocolombia, debes seguir los siguientes pasos:\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '1. Diligenciar el documento de afiliación:\r ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'abre el documento haciendo clic en el siguiente vínculo: ',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/wcm/connect/proteccion/c4e01435-f55d-44ec-b0fc-1b8676771815/Formato+Guia+Vinculacion.pdf?MOD=AJPERES'
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: 'Descarga el documento de afiliación\r\n',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value:
                '\r\nEs posible que automáticamente el archivo se visualice en un navegador como Chrome o Edge, por lo cual, debes buscar la opción de ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '“descargar”',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' en la parte superior de la pantalla para poder editarlo más adelante.\r',
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
              value:
                'El documento cambiará el formato automáticamente para ser editado.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Si esto no sucede, dirígete a la carpeta de descargas de tu equipo, haz clic derecho en el documento descargado y elige la opción ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '“Abrir con Adobe Acrobat Reader DC”.\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Una vez abierto el documento, haz clic en la opción “Rellenar y firmar”',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', la cual se encuentra en el costado derecho de la pantalla.\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Ubica el cursor en cada campo a diligenciar, luego haz clic y escribe la información solicitada',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                '. Repite este proceso en cada espacio y no olvides marcar los campos de autorización de recolección y uso de datos personales para enviarte información importante de tu ahorro.\r\n\r\nCuando finalices este proceso, guarda el documento en tu equipo y continúa con el siguiente paso.\r',
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
              value: '2. Descarga el “documento de firma cliente”',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', realiza el mismo proceso de apertura y descarga que te mencionamos en el paso anterior y diligencia únicamente: tipo de documento, número de documento y nombre completo. Los demás campos se deben dejar vacíos.\r ',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/wcm/connect/proteccion/a852bcb8-3502-4846-a68f-51184fea11ea/FIRMACLIENTE+MUTUOCOLOMBIA+%281%29.pdf?MOD=AJPERES'
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: 'Descarga el documento de firma cliente.',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value: '\n',
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
              value: '\n',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/wcm/connect/proteccion/a852bcb8-3502-4846-a68f-51184fea11ea/FIRMACLIENTE+MUTUOCOLOMBIA+%281%29.pdf?MOD=AJPERES'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: '',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value:
                'Si no cuentas con impresora y huellero, podrás enviar una selfie donde se observe tu cara y tu cédula así:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {
            target: {
              metadata: {
                tags: []
              },
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'y3qdch79qxiw',
                    contentful_id: 'y3qdch79qxiw'
                  }
                },
                id: 'c2PdY9ODiOCHKwfg6RpWonm',
                type: 'Asset',
                createdAt: '2021-03-03T20:29:15.092Z',
                updatedAt: '2021-03-03T20:29:15.092Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                    contentful_id: 'master'
                  }
                },
                revision: 1,
                contentful_id: '2PdY9ODiOCHKwfg6RpWonm'
              },
              fields: {
                title: {
                  'en-US':
                    'Foto ejemplo para adjuntar en documento de mutuocolombia'
                },
                description: {
                  'en-US':
                    'Ilustración de joven portando su documento de identificación en la mano'
                },
                file: {
                  'en-US': {
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/2PdY9ODiOCHKwfg6RpWonm/2ff4b5762e66ab19b636c07ea92c48a3/Foto-demostracion.png',
                    details: {
                      size: 10000,
                      image: {
                        width: 160,
                        height: 200
                      }
                    },
                    fileName: 'Foto-demostracion.png',
                    contentType: 'image/png'
                  }
                }
              }
            }
          },
          content: [],
          nodeType: 'embedded-asset-block'
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
              value: '\n',
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
              value: '3. Envía una foto o copia legible de la cédula',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', el archivo en PDF del ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '“documento de afiliación”',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' y el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '“firma cliente”',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' diligenciados con anterioridad al siguiente correo: YRUEDA@BANCOLOMBIA.COM.CO\r\n\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '4. Espera la llamada',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' de un asesor del Plan Institucional para culminar el proceso de afiliación.\r\n\r\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Retiros y traslados\r\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '1. Retiros parciales: ',
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
                'Como Participe, sólo podrás solicitar un (1) retiro parcial en el año calendario a través de la página web o en una de nuestras oficinas de servicio (si el retiro es para vivienda ',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.proteccion.com/wps/portal/proteccion/web/home/home-afiliados-pensionados/home-pensionados/para-ahorro-pensiones-voluntarias/retiro-para-vivienda'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'ver información',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value:
                '), y podrás hacerlo únicamente en los meses de marzo, junio, septiembre o diciembre. El saldo disponible para retirar será de acuerdo al mes, así:',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Marzo y septiembre: ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'podrás retirar tu aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'ordinario',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' como partícipe, el aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'ordinario',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' de la patrocinadora consolidado a tu nombre, tu aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'extraordinario',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' como partícipe y el aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'extraordinario',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' de la patrocinadora consolidado a tu nombre. No podrás retirar los aportes que fueron realizados durante los tres (3) primeros años.\r\n\r',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Junio y diciembre: ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'podrás retirar tu aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'ordinario',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' como partícipe y el aporte ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'ordinario ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'de la patrocinadora consolidado a tu nombre. No podrás retirar los aportes que fueron realizados durante los tres (3) primeros años.\r\n',
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
              value: '\n',
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
              value: '2. Retiros definitivos\r:',
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
              value: 'Para retirarte de manera definitiva del plan debes:',
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
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://forms.office.com/Pages/ResponsePage.aspx?id=vUTitZLEW0mLEGG_1FPkIyLmRFglQJVJoLcqvrCYAglUQThLVE1NWUtIT0VQSlNBV0VRN1dLSkNUNC4u&sid=7f9c229c-e5f6-424c-bed4-5970d106da38'
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: '',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://forms.office.com/Pages/ResponsePage.aspx?id=vUTitZLEW0mLEGG_1FPkIyLmRFglQJVJoLcqvrCYAglUQThLVE1NWUtIT0VQSlNBV0VRN1dLSkNUNC4u&sid=7f9c229c-e5f6-424c-bed4-5970d106da38'
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Ingresar a este formulario',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' ',
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
                        'Seguir las instrucciones que llegaran a tu correo electrónico para finalizar el proceso de retiro.',
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
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Importante:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' si te retiras del Plan Institucional Mutuocolombia y tienes aportes sin consolidar, dichos aportes serán repartidos entre aquellos partícipes que tengan una permanencia de ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'cinco (5) años o más ininterrumpidos en el plan.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' \r',
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
                'Si necesitas más información te invitamos a consultar la opción',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                },
                {
                  type: 'italic'
                }
              ],
              value: 'Aportes y consolidación',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: ', ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'o contactar alguno de nuestros asesores, así:',
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
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://assets.ctfassets.net/y3qdch79qxiw/1jLQ2nEP3zGPhMswNnxL3h/eb55a650fe21078f54da32b57c77f035/Directorio_Mutuocolombia_2021.xlsm'
                      },
                      content: [
                        {
                          data: {},
                          marks: [
                            {
                              type: 'bold'
                            }
                          ],
                          value: 'Haz clic aquí',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' para descargar el documento\r',
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
                        'Escribe el nombre de la ciudad donde te encuentras ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'italic'
                        }
                      ],
                      value: '(no utilizar tildes)',
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
                        'Encuentra el nombre del asesor con sus datos de contacto',
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
              value: '\r\n',
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
              value:
                '3. Retiro por desvinculación del partícipe de la patrocinadora:\r',
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
                'Los retiros del Plan Institucional Mutuocolombia causados por la terminación del contrato de trabajo con la patrocinadora, tendrán el siguiente tratamiento:\r',
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
                'Como participe tendrás derecho a todos los aportes ordinarios y extraordinarios que hayas realizado, así como los aportes que la patrocinadora haya realizado y que se encuentren consolidados a tu nombre.\r\n',
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
              value: 'NOTA:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Para ambos casos, la patrocinadora recibe las solicitudes de retiro ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'hasta el día 15 de cada mes',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: '(o día hábil anterior si el 15 no es día hábil)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' y las reporta el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'día 20 del mismo mes.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Estos retiros se pagan el 5to día hábil del mes siguiente.',
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
              value: '\n',
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
              value: '5. Traslados\r:',
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
                'Si deseas trasladar tus recursos del Plan Institucional Mutuocolombia a otro producto que tengas activo en Protección o a cuentas AFC, envía un correo a Yecenia Alejandra Rueda Echeverri ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'YRUEDA@BANCOLOMBIA.COM.CO',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' con el asunto: “Solicitud de traslado del Plan Institucional Mutuocolombia".',
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
                'Ten en cuenta que por los tiempos del proceso de traslado a una cuenta AFC, se debe realizar la solicitud antes de los primeros',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: ' diez días calendario de cada mes.',
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
              value: '\rImportante: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'si por alguna razón haces la gestión por medio de una sucursal, recuerda que debes seguir este paso también. ',
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
              value: '\n',
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Reingresos',
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
                'Si eres partícipe y te retiras voluntariamente del Plan Institucional Mutuocolombia, solo podrás reintegrarte al mismo cuando hayan pasado dos (2) años desde la fecha en que fue aprobado tu retiro.',
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
                'Pasados los dos (2) años desde el retiro, debes enviar un correo con la solicitud a ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'bienesta@bancolombia.com.co',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' con tu nombre completo, número de documento e indicando en el asunto que deseas activar nuevamente tu ahorro. A tu correo te llegará un instructivo para que grabes en la herramienta SAP el valor que deseas ahorrar.\n',
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
              value: '\r',
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
      '¡Conoce todas las soluciones de ahorro que tenemos disponibles en Protección! Haz realidad todos tus sueños.',
    textoButton: 'Quiero conocer más',
    url: 'ahorro-mi-reserva'
  },
  video: null,
  podcast: null
}

const alertText = {
  textoCierre:
    'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.'
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <Meal
            accessibility={{ fontSize: 3, lineSize: 2 }}
            data={data}
            alertText={alertText}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <Meal
            accessibility={{ fontSize: 3, lineSize: 2 }}
            data={data}
            alertText={''}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <Meal
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          alertText={''}
        />
      </Provider>
    )
    wrapper
      .find('.MuiButtonBase-root')
      .first()
      .simulate('click')
    wrapper
      .find('.MuiButtonBase-root')
      .first()
      .simulate('keydown')
  })
})
