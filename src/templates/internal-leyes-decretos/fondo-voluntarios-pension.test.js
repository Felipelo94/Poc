import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { useStaticQuery } from 'gatsby'
import FondoVoluntariosPension from './fondo-voluntarios-pension'

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
  id: '1nImAoTFAynvYKo8LByE2s',
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

const data = {
  allContentfulLeyesYDecretos: {
    edges: [
      {
        node: {
          contentful_id: '3yYMno9NV3bPeBvisaWYGB',
          titulo: {
            titulo: 'Fondos Voluntarios de Pensión'
          },
          contenido: [
            {
              contentful_id: '1cD2oRNCNXmUrDhw5dRaZj',
              tituloWidget: 'Tabla comparativa de comisiones',
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
                          value: '¿Qué cambió con el Decreto 1207?',
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
                            'Para bienestar de nuestros afiliados, la información que les entregamos desde Protección sobre su ahorro e inversión, es más detallada e incluye ',
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
                            'datos actuales, históricos, comparativos y proyecciones ',
                          nodeType: 'text'
                        },
                        {
                          data: {},
                          marks: [],
                          value: 'para que puedan t',
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
                            'omar la mejor decisión que les permite construir su futuro desde hoy. ',
                          nodeType: 'text'
                        },
                        {
                          data: {},
                          marks: [],
                          value: '\r',
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
                          value: ' Conoce los principales cambios\r:\n',
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
                            id: 'c4ROHUlIs1uK5DrzvhLV13r',
                            type: 'Asset',
                            createdAt: '2021-06-18T19:50:35.894Z',
                            updatedAt: '2021-06-18T19:50:35.894Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 1,
                            contentful_id: '4ROHUlIs1uK5DrzvhLV13r'
                          },
                          fields: {
                            title: {
                              'en-US':
                                'Infográfico de Fondos Voluntarios de Pensión, Decreto 1207'
                            },
                            description: {
                              'en-US':
                                'Infográfico explicativo donde se habla acerca de qué es el Decreto 1207, para qué sirve y la fecha de aplicación'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/4ROHUlIs1uK5DrzvhLV13r/a177648d514ce4ee70721820296cb172/Infografi__co__002_.png',
                                details: {
                                  size: 20599,
                                  image: {
                                    width: 755,
                                    height: 450
                                  }
                                },
                                fileName: 'Infografíco (002).png',
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
                          marks: [],
                          value: '\r\r\n',
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
                          value: '1. Documentos: ',
                          nodeType: 'text'
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            'el reglamento podrá ser estandarizado para todas las AFP, pero cada una tendrá sus propios anexos.\r',
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
                                  value: 'Contarás con un documento llamado ',
                                  nodeType: 'text'
                                },
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: 'italic'
                                    }
                                  ],
                                  value: 'Prospecto',
                                  nodeType: 'text'
                                },
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    ' para tener más información de tu inversión',
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
                                    'Se visualizarán algunos ajustes en la ficha técnica y en el extracto\r',
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
                                    'Adicionalmente, cada 6 meses recibirás un informe de rendición de cuentas',
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
                          value: '2. Comisiones:',
                          nodeType: 'text'
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            '\r se tendrán dos tipos de comisiones: fijas y variables.',
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
                          value: '3. Forma de modificar documentos:',
                          nodeType: 'text'
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            '\r la forma de modificar los documentos será de acuerdo con requerimientos de la norma o en algunos casos, por aprobación de la Superfinanciera.\r\n',
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
                          value: 'Reglamentos',
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
                            id: 'c2sbV9hTKO8qf8NUPlloeuU',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:30:22.582Z',
                            updatedAt: '2021-07-14T00:10:46.871Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'Informes',
                                contentful_id: 'Informes'
                              }
                            },
                            contentful_id: '2sbV9hTKO8qf8NUPlloeuU'
                          },
                          fields: {
                            tipoDeInforme: {
                              'en-US': 'Reglamentos de Pensión Voluntaria'
                            },
                            titulo: {
                              'en-US': 'Reglamento de Pensión Voluntaria'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Conoce las reglas de nuestro Fondo Voluntario de Pensiones Protección'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Descargar el PDF'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/wcm/connect/proteccion/3c02e1ec-d4ba-409e-999b-24e40328607f/Pol%C3%ADticas+de+Inversi%C3%B3n+Responsable+%28Septiembre+2019%29.pdf?MOD=AJPERES'
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
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
                            id: 'YtweUbEcY1vFywRTndEuE',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:31:36.380Z',
                            updatedAt: '2021-07-14T00:10:22.326Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'Informes',
                                contentful_id: 'Informes'
                              }
                            },
                            contentful_id: 'YtweUbEcY1vFywRTndEuE'
                          },
                          fields: {
                            tipoDeInforme: {
                              'en-US': 'Reglamentos de Smurfit'
                            },
                            titulo: {
                              'en-US': 'Reglamento de Smurfit'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Conoce las reglas que aplican para aportes voluntarios de Smurfit.'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Descargar el PDF'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/wcm/connect/proteccion/024d6c1c-0a87-4243-903a-f211c359c4b6/Politica_de_inversi%C3%B3n_2020.pdf?MOD=AJPERES'
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
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
                          value: 'Documentos de Ahorro e Inversión',
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
                            id: 'c2Rgu7GuJv0HPicfq0TwtDJ',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:33:55.978Z',
                            updatedAt: '2021-07-14T00:09:22.907Z',
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
                              'en-US': 'Portafolios de Inversión'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Encuentra la información detallada de cada portafolio'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Conocer más'
                            },
                            linkCallToActionInformes: {
                              'en-US': 'inversiones/indicadores-de-mercado'
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
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
                            id: 'c4BEObjGy2UzuDshSFK2bDP',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:35:56.596Z',
                            updatedAt: '2021-07-14T00:09:51.680Z',
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
                                id: 'Informes',
                                contentful_id: 'Informes'
                              }
                            },
                            contentful_id: '4BEObjGy2UzuDshSFK2bDP'
                          },
                          fields: {
                            tipoDeInforme: {
                              'en-US': 'Informes de retenciones de cuentas'
                            },
                            titulo: {
                              'en-US': 'Informe de rendición de cuentas'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Cada 6 meses podrás conocer nuestras gestión y resultados adquiridos'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Conocer más'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/portal/proteccion/web/home/corporativo-accionistas/gobierno-corporativo/politicas/politicas-inversion'
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
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
                    }
                  ],
                  nodeType: 'document'
                }
              },
              cuerpocontenido2: {
                json: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: '\n',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'heading-2',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Actualidad sobre Inversión',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac porttitor lorem. Pellentesque vitae sagittis diam. Mauris ornare, augue et dapibus iaculis, lacus leo condimentum tortor, eget egestas sapien nibh et dolor. Phasellus convallis sodales consectetur. Phasellus et volutpat velit. Sed dignissim quis quam quis laoreet. Aliquam ligula velit, porttitor sed tincidunt ac, venenatis in augue. Mauris sagittis blandit imperdiet.\r\n\r\nIn non fringilla mi, et consequat sem. Curabitur in purus ac nisi venenatis semper ut et tortor. Phasellus iaculis orci vel ante commodo consequat. Ut molestie finibus est sit amet tincidunt. Phasellus id arcu ac justo interdum faucibus vel a lacus. Donec pretium consequat risus, at interdum metus semper vel. Sed in cursus turpis, a ultricies velit. Quisque ornare diam eros, consequat egestas massa sagittis et. Maecenas tellus ante, placerat in turpis eget, tempus iaculis lectus. Fusce iaculis tellus elit, a fringilla diam tempus ac. Sed eget ipsum eget libero tempor malesuada.',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: '\n',
                          marks: [],
                          data: {}
                        },
                        {
                          nodeType: 'hyperlink',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Herramientas inversionistas',
                              marks: [],
                              data: {}
                            }
                          ],
                          data: {
                            uri:
                              'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#actualidad'
                          }
                        },
                        {
                          nodeType: 'text',
                          value: '\n',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    }
                  ]
                }
              },
              Widget: {
                Widget:
                  'https://widgetsdataifx.blob.core.windows.net/proteccionnew/historiconewstyles'
              },
              imagenes: [
                {
                  file: {
                    fileName: 'Qué te exige la ley para pensionarte.jpg',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/56UiAPjlO84xzVt7U335zh/a6e5e06eee56e5af9c44f11e5f54676c/Qu___te_exige_la_ley_para_pensionarte.jpg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/56UiAPjlO84xzVt7U335zh/a6e5e06eee56e5af9c44f11e5f54676c/Qu___te_exige_la_ley_para_pensionarte.jpg?w=800&q=50'
                  },
                  title: 'Imagen Qué te exige la ley para pensionarte',
                  description:
                    'Hombre con camisa azul clara, barba y gafas, lee en su portátil qué necesita para acceder a una pensión.'
                },
                {
                  file: {
                    fileName:
                      'Nuevo portafolio del Fondo de Pensiones Voluntarias.jpeg',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/3N4InPr2lEd24GqCp4YVku/dd7514681857a86f9c77cc22f12c80f2/Nuevo_portafolio_del_Fondo_de_Pensiones_Voluntarias.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3N4InPr2lEd24GqCp4YVku/dd7514681857a86f9c77cc22f12c80f2/Nuevo_portafolio_del_Fondo_de_Pensiones_Voluntarias.jpeg?w=800&q=50'
                  },
                  title: 'Nuevo portafolio del Fondo de Pensiones Voluntarias',
                  description:
                    'Hombre adulto, vestido con camisa blanca, corbata oscura y saco azul, sonríe mientras toca la pantalla de su celular'
                },
                {
                  file: {
                    fileName: 'Nuestra filosofia de inversion.jpeg',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/gHXb92dJwExotBpdA1VZs/afe77e5d0744d2e64f671234b9c97b38/Nuestra_filosofia_de_inversion.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/gHXb92dJwExotBpdA1VZs/afe77e5d0744d2e64f671234b9c97b38/Nuestra_filosofia_de_inversion.jpeg?w=800&q=50'
                  },
                  title: 'Nuestra filosofía de inversión',
                  description:
                    'Hombre adulto, vestido de traje y corbata, sonríe mientras sostiene en sus manos un computador portatil'
                }
              ],
              urlSeo: 'fondos-voluntarios-de-pension',
              titulo: 'Fondos Voluntarios de Pensión',
              listadoVideos: ['https://www.youtube.com/embed/w_4Bk2uJAl8'],
              descripcioncorta:
                'En Protección ponemos a tu disposición la información que necesitas conocer para tomar la mejor decisión respecto a tu ahorro e inversión, de acuerdo con el Decreto 1207 de 2020',
              metatittleSeo: null,
              keywordsSeo: null,
              metadescripcionSeo: null
            },
            {
              contentful_id: '1nImAoTFAynvYKo8LByE2s',
              tituloWidget: null,
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
                          value: 'Multinversión',
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
                                id: 'y3qdch79qxiw',
                                contentful_id: 'y3qdch79qxiw'
                              }
                            },
                            id: 'WxNauUuAPHFaixRkhYupa',
                            type: 'Entry',
                            createdAt: '2020-03-05T20:41:19.397Z',
                            updatedAt: '2021-07-12T21:05:06.712Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'portafolio',
                                contentful_id: 'portafolio'
                              }
                            },
                            contentful_id: 'WxNauUuAPHFaixRkhYupa'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Multinversión'
                            },
                            fichastecnicas: {
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
                                      }
                                    },
                                    id: 'i3cluhOeP8NPj3HVO5cv5',
                                    type: 'Entry',
                                    createdAt: '2021-07-12T21:01:03.727Z',
                                    updatedAt: '2021-07-12T21:01:03.727Z',
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
                                        id: 'fichastecnicas',
                                        contentful_id: 'fichastecnicas'
                                      }
                                    },
                                    contentful_id: 'i3cluhOeP8NPj3HVO5cv5'
                                  },
                                  fields: {
                                    titulo: {
                                      'en-US': 'Acciones Latam'
                                    },
                                    TextoCallToActionFichaTecnica: {
                                      'en-US': 'Ficha Técnica PDF'
                                    },
                                    LinkCallToActionFichaTecnica: {
                                      'en-US':
                                        'https://assets.ctfassets.net/y3qdch79qxiw/6CNTUCS8f8izZb7z9zM5e6/d7ec00e3771f2f9a51abae79dbee71ef/Acciones_Latam.pdf'
                                    },
                                    textoCallToActionProspecto: {
                                      'en-US': 'Prospecto PDF'
                                    },
                                    HistoricoFichasTecnicas: {
                                      'en-US': {
                                        nodeType: 'document',
                                        data: {},
                                        content: [
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '2021',
                                                marks: [
                                                  {
                                                    type: 'bold'
                                                  }
                                                ],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              },
                                              {
                                                nodeType: 'asset-hyperlink',
                                                content: [
                                                  {
                                                    nodeType: 'text',
                                                    value: 'Ficha Técnica mayo',
                                                    marks: [],
                                                    data: {}
                                                  }
                                                ],
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'c6CNTUCS8f8izZb7z9zM5e6',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T20:42:40.516Z',
                                                      updatedAt:
                                                        '2021-07-12T20:42:40.516Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        '6CNTUCS8f8izZb7z9zM5e6'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Acciones Latam'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Acciones Latam'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/6CNTUCS8f8izZb7z9zM5e6/d7ec00e3771f2f9a51abae79dbee71ef/Acciones_Latam.pdf',
                                                          details: {
                                                            size: 424149
                                                          },
                                                          fileName:
                                                            'Acciones+Latam.pdf',
                                                          contentType:
                                                            'application/pdf'
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              },
                                              {
                                                nodeType: 'hyperlink',
                                                content: [
                                                  {
                                                    nodeType: 'text',
                                                    value:
                                                      'Ficha Técnica abril',
                                                    marks: [],
                                                    data: {}
                                                  }
                                                ],
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'c6CNTUCS8f8izZb7z9zM5e6',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T20:42:40.516Z',
                                                      updatedAt:
                                                        '2021-07-12T20:42:40.516Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        '6CNTUCS8f8izZb7z9zM5e6'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Acciones Latam'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Acciones Latam'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/6CNTUCS8f8izZb7z9zM5e6/d7ec00e3771f2f9a51abae79dbee71ef/Acciones_Latam.pdf',
                                                          details: {
                                                            size: 424149
                                                          },
                                                          fileName:
                                                            'Acciones+Latam.pdf',
                                                          contentType:
                                                            'application/pdf'
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                {
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
                                    id: 'c4s6dwpM0MTrVwQDamWE7nC',
                                    type: 'Entry',
                                    createdAt: '2021-07-12T21:04:58.257Z',
                                    updatedAt: '2021-07-28T16:57:50.448Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 2,
                                    contentType: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'ContentType',
                                        id: 'fichastecnicas',
                                        contentful_id: 'fichastecnicas'
                                      }
                                    },
                                    contentful_id: '4s6dwpM0MTrVwQDamWE7nC'
                                  },
                                  fields: {
                                    titulo: {
                                      'en-US': 'Renta Fija Corto Plazo'
                                    },
                                    TextoCallToActionFichaTecnica: {
                                      'en-US': 'Ficha Técnica PDF'
                                    },
                                    LinkCallToActionFichaTecnica: {
                                      'en-US':
                                        'https://assets.ctfassets.net/y3qdch79qxiw/1ylZAnhW7yQqcGMwz16a8D/5fec2ba696d19977ad1fa9dbb4023367/Renta_fija_corto_plazo.pdf'
                                    },
                                    textoCallToActionProspecto: {
                                      'en-US': 'Prospecto PDF'
                                    },
                                    LinkCallToActionProspecto: {
                                      'en-US':
                                        'https://assets.ctfassets.net/y3qdch79qxiw/1f3A0WNbcsgMfexrxUsf7V/7643c504e1d4182b7a4d7770c2354ef5/Doc_Adhesion_AC_CP_Mayo_2020_F.pdf'
                                    },
                                    HistoricoFichasTecnicas: {
                                      'en-US': {
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
                                                value: '2021',
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
                                                value: '',
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'c1ylZAnhW7yQqcGMwz16a8D',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T21:02:37.199Z',
                                                      updatedAt:
                                                        '2021-07-12T21:02:37.199Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        '1ylZAnhW7yQqcGMwz16a8D'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Renta Fija Corto Plazo'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Renta Fija Corto Plazo'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/1ylZAnhW7yQqcGMwz16a8D/5fec2ba696d19977ad1fa9dbb4023367/Renta_fija_corto_plazo.pdf',
                                                          details: {
                                                            size: 425998
                                                          },
                                                          fileName:
                                                            'Renta+fija+corto+plazo.pdf',
                                                          contentType:
                                                            'application/pdf'
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
                                                    value:
                                                      'Renta Fija Corto Plazo Mayo',
                                                    nodeType: 'text'
                                                  }
                                                ],
                                                nodeType: 'asset-hyperlink'
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
                                                marks: [
                                                  {
                                                    type: 'bold'
                                                  }
                                                ],
                                                value: '',
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'c1ylZAnhW7yQqcGMwz16a8D',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T21:02:37.199Z',
                                                      updatedAt:
                                                        '2021-07-12T21:02:37.199Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        '1ylZAnhW7yQqcGMwz16a8D'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Renta Fija Corto Plazo'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Renta Fija Corto Plazo'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/1ylZAnhW7yQqcGMwz16a8D/5fec2ba696d19977ad1fa9dbb4023367/Renta_fija_corto_plazo.pdf',
                                                          details: {
                                                            size: 425998
                                                          },
                                                          fileName:
                                                            'Renta+fija+corto+plazo.pdf',
                                                          contentType:
                                                            'application/pdf'
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
                                                    value:
                                                      'Renta Fija Corto Plazo Abril',
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
                                                value: '',
                                                nodeType: 'text'
                                              }
                                            ],
                                            nodeType: 'paragraph'
                                          }
                                        ],
                                        nodeType: 'document'
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
                          value: 'Alternativas Cerradas de Inversión',
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
                                id: 'y3qdch79qxiw',
                                contentful_id: 'y3qdch79qxiw'
                              }
                            },
                            id: 'RmdBKF32xwHIaod9HXFRP',
                            type: 'Entry',
                            createdAt: '2021-07-12T19:40:48.040Z',
                            updatedAt: '2021-07-12T19:40:48.040Z',
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
                                id: 'portafolio',
                                contentful_id: 'portafolio'
                              }
                            },
                            contentful_id: 'RmdBKF32xwHIaod9HXFRP'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Alternativas Cerradas de Inversión'
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
                          value: 'Mi Reserva Protección',
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
                                id: 'y3qdch79qxiw',
                                contentful_id: 'y3qdch79qxiw'
                              }
                            },
                            id: 'c5JovetLuiznO0OHh394ErO',
                            type: 'Entry',
                            createdAt: '2021-07-12T19:41:28.594Z',
                            updatedAt: '2021-07-12T21:07:50.530Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'portafolio',
                                contentful_id: 'portafolio'
                              }
                            },
                            contentful_id: '5JovetLuiznO0OHh394ErO'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Mi Reserva Protección'
                            },
                            fichastecnicas: {
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
                                        id: 'y3qdch79qxiw',
                                        contentful_id: 'y3qdch79qxiw'
                                      }
                                    },
                                    id: 'c5lJoH0RSki37bwDpiAK0gn',
                                    type: 'Entry',
                                    createdAt: '2021-07-12T21:07:45.425Z',
                                    updatedAt: '2021-07-17T22:11:52.177Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 2,
                                    contentType: {
                                      sys: {
                                        type: 'Link',
                                        linkType: 'ContentType',
                                        id: 'fichastecnicas',
                                        contentful_id: 'fichastecnicas'
                                      }
                                    },
                                    contentful_id: '5lJoH0RSki37bwDpiAK0gn'
                                  },
                                  fields: {
                                    titulo: {
                                      'en-US': 'Mi Reserva Protección'
                                    },
                                    TextoCallToActionFichaTecnica: {
                                      'en-US': 'Ficha Técnica PDF'
                                    },
                                    LinkCallToActionFichaTecnica: {
                                      'en-US':
                                        'https://assets.ctfassets.net/y3qdch79qxiw/CUrdMjScJPXIcuyv54CB5/582b22ecc3bb9b0fc11774eaf70411b5/Mi_Reserva_Proteccion.pdf'
                                    },
                                    textoCallToActionProspecto: {
                                      'en-US': 'Prospecto PDF'
                                    },
                                    HistoricoFichasTecnicas: {
                                      'en-US': {
                                        nodeType: 'document',
                                        data: {},
                                        content: [
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '2021',
                                                marks: [
                                                  {
                                                    type: 'bold'
                                                  }
                                                ],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [
                                                  {
                                                    type: 'bold'
                                                  }
                                                ],
                                                data: {}
                                              },
                                              {
                                                nodeType: 'asset-hyperlink',
                                                content: [
                                                  {
                                                    nodeType: 'text',
                                                    value:
                                                      'Mi Reserva Protección Mayo',
                                                    marks: [],
                                                    data: {}
                                                  }
                                                ],
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'CUrdMjScJPXIcuyv54CB5',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T21:06:25.338Z',
                                                      updatedAt:
                                                        '2021-07-12T21:06:25.338Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        'CUrdMjScJPXIcuyv54CB5'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Mi Reserva Protección'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Mi Reserva Protección'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/CUrdMjScJPXIcuyv54CB5/582b22ecc3bb9b0fc11774eaf70411b5/Mi_Reserva_Proteccion.pdf',
                                                          details: {
                                                            size: 416009
                                                          },
                                                          fileName:
                                                            'Mi+Reserva+Proteccion.pdf',
                                                          contentType:
                                                            'application/pdf'
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              },
                                              {
                                                nodeType: 'asset-hyperlink',
                                                content: [
                                                  {
                                                    nodeType: 'text',
                                                    value:
                                                      'Mi Reserva Protección Abril',
                                                    marks: [],
                                                    data: {}
                                                  }
                                                ],
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
                                                          contentful_id:
                                                            'y3qdch79qxiw'
                                                        }
                                                      },
                                                      id:
                                                        'CUrdMjScJPXIcuyv54CB5',
                                                      type: 'Asset',
                                                      createdAt:
                                                        '2021-07-12T21:06:25.338Z',
                                                      updatedAt:
                                                        '2021-07-12T21:06:25.338Z',
                                                      environment: {
                                                        sys: {
                                                          id: 'master',
                                                          type: 'Link',
                                                          linkType:
                                                            'Environment',
                                                          contentful_id:
                                                            'master'
                                                        }
                                                      },
                                                      revision: 1,
                                                      contentful_id:
                                                        'CUrdMjScJPXIcuyv54CB5'
                                                    },
                                                    fields: {
                                                      title: {
                                                        'en-US':
                                                          'Mi Reserva Protección'
                                                      },
                                                      description: {
                                                        'en-US':
                                                          'Mi Reserva Protección'
                                                      },
                                                      file: {
                                                        'en-US': {
                                                          url:
                                                            '//assets.ctfassets.net/y3qdch79qxiw/CUrdMjScJPXIcuyv54CB5/582b22ecc3bb9b0fc11774eaf70411b5/Mi_Reserva_Proteccion.pdf',
                                                          details: {
                                                            size: 416009
                                                          },
                                                          fileName:
                                                            'Mi+Reserva+Proteccion.pdf',
                                                          contentType:
                                                            'application/pdf'
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '\n\n',
                                                marks: [],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          },
                                          {
                                            nodeType: 'paragraph',
                                            content: [
                                              {
                                                nodeType: 'text',
                                                value: '',
                                                marks: [
                                                  {
                                                    type: 'bold'
                                                  }
                                                ],
                                                data: {}
                                              }
                                            ],
                                            data: {}
                                          }
                                        ]
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
                          value: 'Planes Institucionales',
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
                                id: 'y3qdch79qxiw',
                                contentful_id: 'y3qdch79qxiw'
                              }
                            },
                            id: 'c4DToBKxKmTG73w8pNPFPkH',
                            type: 'Entry',
                            createdAt: '2021-07-12T19:41:52.832Z',
                            updatedAt: '2021-07-12T19:41:52.832Z',
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
                                id: 'portafolio',
                                contentful_id: 'portafolio'
                              }
                            },
                            contentful_id: '4DToBKxKmTG73w8pNPFPkH'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Planes Institucionales'
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
                          value: 'Portafolios Especiales',
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
                                id: 'y3qdch79qxiw',
                                contentful_id: 'y3qdch79qxiw'
                              }
                            },
                            id: 'c41S1cl8pEo0LrbxOEIrKeU',
                            type: 'Entry',
                            createdAt: '2021-07-12T19:41:02.854Z',
                            updatedAt: '2021-07-12T19:41:02.854Z',
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
                                id: 'portafolio',
                                contentful_id: 'portafolio'
                              }
                            },
                            contentful_id: '41S1cl8pEo0LrbxOEIrKeU'
                          },
                          fields: {
                            titulo: {
                              'en-US': 'Portafolios Especiales'
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
                    fileName: 'Laptop-graphics.png',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/70tAqYvXlXf4Om0t9bj2Wc/77fcc623280cddb3b102c63a13c85ed8/Laptop-graphics.png'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/70tAqYvXlXf4Om0t9bj2Wc/77fcc623280cddb3b102c63a13c85ed8/Laptop-graphics.png?w=800&q=50'
                  },
                  title: 'Laptop-graphics',
                  description: ''
                }
              ],
              urlSeo: 'portafolios-de-inversion',
              titulo: 'Portafolios de Inversión',
              listadoVideos: null,
              descripcioncorta:
                'En Protección ponemos a tu disposición la información que necesitas conocer para tomar la mejor decisión respecto a tu ahorro e inversión, de acuerdo con el Decreto 1207 de 2020.',
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

describe('Unit test for FondoVoluntariosPension component', () => {
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
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FondoVoluntariosPension
          data={data}
          pageContext={pageContext}
          dispatch={() => {}}
          location={location}
          accessibility={{}}
        />
      </Provider>
    )

    expect(wrapper.find('.Internal-leyes-y-decretos-container')).toHaveLength(1)
  })
})
