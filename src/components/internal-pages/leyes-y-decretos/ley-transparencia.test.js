import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import LeyTransparencia from './ley-transparencia'

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
const location = {
  pathname: '/portafolios-de-inversion',
  search: '',
  hash: '',
  href: 'http://localhost:8000/portafolios-de-inversion',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  state: null,
  key: 'initial'
}

const pageContext = {
  slug: 'portafolios-de-inversion/',
  categoriaProducto: 'LeyesYDecretos',
  id: '2pyixFAOm2epRSoMezu2Jh',
  entityId: '3yYMno9NV3bPeBvisaWYGB',
  type: 'leyesydecretos',
  line: 'Inversión',
  sublinea: '',
  cliente: 1,
  ids: ['1cD2oRNCNXmUrDhw5dRaZj', '1nImAoTFAynvYKo8LByE2s'],
  metatittleSeo: null,
  keywordsSeo: null,
  metadescripcionSeo: null
}

const dataPage = {
  allContentfulLeyesYDecretos: {
    edges: [
      {
        node: {
          contentful_id: '11xw94Lkh7UI16uwbli5rx',
          titulo: {
            titulo: 'Ley de Transparencia'
          },
          contenido: [
            {
              contentful_id: '2pyixFAOm2epRSoMezu2Jh',
              cuerpocontenido: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Notificaciones Judiciales',
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
                          value: '',
                          nodeType: 'text'
                        },
                        {
                          data: {
                            uri: 'notificacionesjudiciales@proteccion.com.co'
                          },
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'notificacionesjudiciales@proteccion.com.co',
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
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
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
                          marks: [],
                          value: 'Enlaces destacados',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'heading-2'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c4SNxp8vauudCxpfA3iOCOr',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:49:20.453Z',
                            updatedAt: '2021-09-22T19:49:20.453Z',
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
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: '4SNxp8vauudCxpfA3iOCOr'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Glosario'
                            },
                            descripcion: {
                              'en-US': {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    content: [
                                      {
                                        data: {},
                                        marks: [],
                                        value:
                                          'Aquí encontrarás la definición de las palabras que usamos en nuestros contenidos',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Conocer más'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c6mvSJ8WheWnzMcDT4TFCZZ',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:49:35.352Z',
                            updatedAt: '2021-09-22T19:53:27.393Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 3,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: '6mvSJ8WheWnzMcDT4TFCZZ'
                          },
                          fields: {
                            titulo: {
                              'en-US':
                                'Preguntas Frecuentes de Pensión Obligatoria'
                            },
                            descripcion: {
                              'en-US': {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    content: [
                                      {
                                        data: {},
                                        marks: [],
                                        value:
                                          'Encuentra las preguntas más frecuentes sobre las Pensiones Obligatorias y tengas argumentos necesarios para tomar las mejores decisiones.\n',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Saber más'
                            },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/contenidos/persona/pension/pension/preguntas-frecuentes-pensiones'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c6M4o9U84OkPOujLdQc56mx',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:53:42.508Z',
                            updatedAt: '2021-09-22T19:53:42.508Z',
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
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: '6M4o9U84OkPOujLdQc56mx'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'PQRS'
                            },
                            descripcion: {
                              'en-US': {
                                nodeType: 'document',
                                data: {},
                                content: [
                                  {
                                    nodeType: 'paragraph',
                                    content: [
                                      {
                                        nodeType: 'text',
                                        value:
                                          'Cuéntanos tus dudas y requerimientos a través de nuestro formulario de PQRS',
                                        marks: [],
                                        data: {}
                                      }
                                    ],
                                    data: {}
                                  }
                                ]
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Ir a esta opción'
                            },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/wps/portal/proteccion/web/home/canales-servicios-pqr/registre-solicitud'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'HseG4A8hjAZljbkCaqgGl',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:53:53.018Z',
                            updatedAt: '2021-09-22T19:53:53.018Z',
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
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: 'HseG4A8hjAZljbkCaqgGl'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Canales de Servicio'
                            },
                            descripcion: {
                              'en-US': {
                                nodeType: 'document',
                                data: {},
                                content: [
                                  {
                                    nodeType: 'paragraph',
                                    content: [
                                      {
                                        nodeType: 'text',
                                        value:
                                          'En Protección tenemos a tu disposición diversos canales de servicio para atender a tus requerimientos. ',
                                        marks: [],
                                        data: {}
                                      }
                                    ],
                                    data: {}
                                  }
                                ]
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Conocer más'
                            },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/contenidos/canales/?c=31JYCa3KmNmAmNH2Pj5Zxm'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c3WNBuYvd4lM2oPNRHiolHX',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:54:01.805Z',
                            updatedAt: '2021-09-22T19:54:01.805Z',
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
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: '3WNBuYvd4lM2oPNRHiolHX'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Accesibilidad'
                            },
                            descripcion: {
                              'en-US': {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    content: [
                                      {
                                        data: {},
                                        marks: [],
                                        value:
                                          'Trabajamos para que cada día para que la accesibilidad e inclusión estén presentes en nuestro sitio web y procesos.',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Conoce más'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c41Df9dMPLuVoHdpGGfdtWC',
                            type: 'Entry',
                            createdAt: '2021-09-22T19:54:14.325Z',
                            updatedAt: '2021-09-22T19:54:14.325Z',
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
                                id: 'EnlacesDeInteres',
                                contentful_id: 'EnlacesDeInteres'
                              }
                            },
                            contentful_id: '41Df9dMPLuVoHdpGGfdtWC'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Convocatorias Laborales'
                            },
                            descripcion: {
                              'en-US': {
                                nodeType: 'document',
                                data: {},
                                content: [
                                  {
                                    nodeType: 'paragraph',
                                    content: [
                                      {
                                        nodeType: 'text',
                                        value:
                                          'Nuestros procesos de selección son inclusivos y diversos; además, ágiles y digitales. Conoce todos los detalles.',
                                        marks: [],
                                        data: {}
                                      }
                                    ],
                                    data: {}
                                  }
                                ]
                              }
                            },
                            TextoCallToAction: {
                              'en-US': 'Saber más'
                            },
                            LinkCallToAction: {
                              'en-US':
                                'https://empleos.sura-am.com/COLOMBIA-PROTECCION'
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c2FdEWyBu37YwCP9hG1pRcA',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:49:44.899Z',
                            updatedAt: '2021-07-13T23:47:29.193Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 4,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '2FdEWyBu37YwCP9hG1pRcA'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Magneto Empleos'
                            },
                            descripcion: {
                              'en-US':
                                'Miles de empleos disponibles en Colombia para todos los perfiles y en todas las áreas labores.'
                            },
                            textoCallToAction: {
                              'en-US': 'Hazlo ahora'
                            },
                            linkCallToAction: {
                              'en-US':
                                'https://home.magneto365.com/temporada-talento-si-hay/?utm_source=Protecci%C3%B3n&utm_medium=Referral&utm_campaign=Protecci%C3%B3n%20TSH&utm_term=talento-si-hay-pagina-proteccion&utm_content=talento-si-hay-pagina-proteccion'
                            },
                            imagen: {
                              'en-US': [
                                {
                                  metadata: {
                                    tags: []
                                  },
                                  sys: {
                                    space: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'Space',
                                        id: 'testId',
                                        contentful_id: 'testId'
                                      }
                                    },
                                    id: 'c7KXoCyek5coQ3hNzxnzXcS',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T21:54:06.351Z',
                                    updatedAt: '2021-06-24T20:38:52.820Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 2,
                                    contentful_id: '7KXoCyek5coQ3hNzxnzXcS'
                                  },
                                  fields: {
                                    title: {
                                      'en-US': 'logo magneto'
                                    },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.test.png',
                                        details: {
                                          size: 6130,
                                          image: {
                                            width: 500,
                                            height: 500
                                          }
                                        },
                                        fileName: 'Magneto-TSH (002).png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      },
                      content: [],
                      nodeType: 'embedded-entry-block'
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
                                id: 'testId',
                                contentful_id: 'testId'
                              }
                            },
                            id: 'c2Rgu7GuJv0HPicfq0TwtDJ',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:33:55.978Z',
                            updatedAt: '2021-08-24T20:53:04.211Z',
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
                                id: 'Informes',
                                contentful_id: 'Informes'
                              }
                            },
                            contentful_id: '2Rgu7GuJv0HPicfq0TwtDJ'
                          },
                          fields: {
                            tipoDeInforme: {
                              'en-US': 'Portafolios de Inversión'
                            },
                            titulo: {
                              'en-US': 'Fichas técnicas'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Encuentra la información detallada de cada portafolio'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Conocer más'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://www.proteccion.com/wps/portal/proteccion/web/historico-fichas-tecnicas'
                            },
                            lineaDeProducto: {
                              'en-US': [
                                {
                                  metadata: {
                                    tags: []
                                  },
                                  sys: {
                                    space: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'Space',
                                        id: 'testId',
                                        contentful_id: 'testId'
                                      }
                                    },
                                    id: 'c4sjSQocJHJA3wehCeeaQel',
                                    type: 'Entry',
                                    createdAt: '2019-05-16T16:26:45.039Z',
                                    updatedAt: '2020-05-21T19:01:37.999Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 4,
                                    contentType: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'ContentType',
                                        id: 'lineaDeProducto',
                                        contentful_id: 'lineaDeProducto'
                                      }
                                    },
                                    contentful_id: '4sjSQocJHJA3wehCeeaQel'
                                  },
                                  fields: {
                                    nombre: {
                                      'en-US': 'Pensiones Voluntarias'
                                    },
                                    id: {
                                      'en-US': 'VOL'
                                    },
                                    textoIntroductorioBite: {
                                      'en-US':
                                        'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
                                    }
                                  }
                                }
                              ]
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
                        {
                          data: {},
                          marks: [],
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
                          marks: [],
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
                          marks: [],
                          value: 'Enlaces de interés',
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
                          marks: [
                            {
                              type: 'bold'
                            }
                          ],
                          value: 'Políticas',
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
                          value: '',
                          nodeType: 'text'
                        },
                        {
                          data: {
                            uri:
                              'https://www.proteccion.com/wps/portal/proteccion/web/lo-nuevo/afiliados/ley-proteccion-datos-personales'
                          },
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Política de Protección de datos personales',
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
                    },
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
                              'https://www.proteccion.com/wps/portal/proteccion/web/home/corporativo-accionistas/gobierno-corporativo/politicas/politicas-inversion'
                          },
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Política de Inversión',
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
                  nodeType: 'document'
                }
              },
              cuerpocontenido2: null,
              Widget: null,
              imagenes: [
                {
                  file: {
                    fileName: 'Fichas técnicas.svg',
                    url:
                      '//images.test.svg'
                  },
                  fluid: null,
                  title: 'Ilustración Ley de Transparencia',
                  description: 'Ilustración de unos gráficos y documentos'
                },
                {
                  file: {
                    fileName: 'ley de Transparencia.jpg',
                    url:
                      '//images.test.jpg'
                  },
                  fluid: {
                    src:
                      '//images.test'
                  },
                  title: 'Ley de Transparencia',
                  description:
                    'Mujer de pie, cruzada de manos y sonriendo, de cabello platinado corto, con camiseta blanca y blazer azul.'
                }
              ],
              urlSeo: 'ley-de-transparencia',
              titulo: 'Ley de Transparencia',
              listadoVideos: null,
              descripcioncorta:
                'En cumplimiento de la Ley 1712 de 2014 ponemos a tu disposición, información relativa al funcionamiento y composición de Protección S.A., los productos y servicios prestados, nuestros canales de servicio, entre otras publicaciones relevantes',
              metatittleSeo: null,
              keywordsSeo: null,
              metadescripcionSeo: null
            }
          ]
        }
      }
    ]
  }
}

describe('Test for LeyTransparencia component', () => {
  let store
  beforeEach(() => {
    // fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  test('should render common components in internal page', () => {
    const dispatch = jest.fn()
    const accessibility = {}
    const wrapper = mount(
      <Provider store={store}>
        <LeyTransparencia
          dataPage={dataPage}
          pageContext={pageContext}
          dispatch={dispatch}
          location={location}
          accessibility={accessibility}
        />
      </Provider>
    )
    expect(wrapper.find('.container-ley-transparencia')).toHaveLength(1)
  })
})
