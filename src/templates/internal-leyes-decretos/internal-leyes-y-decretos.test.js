import React from 'react'
import renderer from 'react-test-renderer'
import InternalLeyesYDecretos from './internal-leyes-y-decretos'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

const data = {
  allContentfulLeyesYDecretos: {
    edges: [
      {
        node: {
          contentful_id: '3yYMno9NV3bPeBvisaWYGB',
          titulo: { titulo: 'Fondos Voluntarios de Pensión' },
          contenido: [
            {
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
                          value:
                            '¿Sabes qué son los Fondos Voluntarios de Pensión?',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'heading-2'
                    },
                    {
                      data: {},
                      content: [
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
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
                            id: 'c5fW6TyhXqT8jY9kVMuN7UC',
                            type: 'Asset',
                            createdAt: '2021-05-04T00:10:11.708Z',
                            updatedAt: '2021-05-04T00:10:11.708Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 1,
                            contentful_id: '5fW6TyhXqT8jY9kVMuN7UC'
                          },
                          fields: {
                            title: {
                              'en-US': 'Cómo solicitar la Doble Asesoría'
                            },
                            description: {
                              'en-US':
                                'Infográfico explicativo de cómo solicitar la Doble Asesoría'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/5fW6TyhXqT8jY9kVMuN7UC/ad64a111fa77ae2c5a1287f9bfd68e94/DOBLE-ASESORI__A-.png',
                                details: {
                                  size: 24093,
                                  image: { width: 755, height: 555 }
                                },
                                fileName: 'DOBLE-ASESORÍA-.png',
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
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Reglamentos de funcionamiento',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'heading-2'
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
                            id: 'c2sbV9hTKO8qf8NUPlloeuU',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:30:22.582Z',
                            updatedAt: '2021-05-27T16:30:22.582Z',
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
                                'Lorem Ipsum es simplemente el texto de relleno de las imprentas.'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Descargar el .pdf'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/wcm/connect/proteccion/3c02e1ec-d4ba-409e-999b-24e40328607f/Pol%C3%ADticas+de+Inversi%C3%B3n+Responsable+%28Septiembre+2019%29.pdf?MOD=AJPERES'
                            },
                            lineaDeProducto: {
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
                                    id: { 'en-US': 'VOL' },
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
                            id: 'YtweUbEcY1vFywRTndEuE',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:31:36.380Z',
                            updatedAt: '2021-05-27T16:31:36.380Z',
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
                            titulo: { 'en-US': 'Reglamento de Smurfit' },
                            textoIntroductorioBite: {
                              'en-US':
                                'Lorem Ipsum es simplemente el texto de relleno.'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Descargar el .pdf'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/wcm/connect/proteccion/024d6c1c-0a87-4243-903a-f211c359c4b6/Politica_de_inversi%C3%B3n_2020.pdf?MOD=AJPERES'
                            },
                            lineaDeProducto: {
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
                                    id: { 'en-US': 'VOL' },
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
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Soluciones de ahorro e inversión',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'heading-2'
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
                            id: 'c2Rgu7GuJv0HPicfq0TwtDJ',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:33:55.978Z',
                            updatedAt: '2021-05-27T16:33:55.978Z',
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
                            titulo: { 'en-US': 'Portafolios de Inversión' },
                            textoIntroductorioBite: {
                              'en-US':
                                'Lorem Ipsum es simplemente el texto de relleno de las imprentas.'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Conocer más'
                            },
                            lineaDeProducto: {
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
                                    id: { 'en-US': 'VOL' },
                                    textoIntroductorioBite: {
                                      'en-US':
                                        'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
                                    }
                                  }
                                }
                              ]
                            },
                            contenido: {
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
                                  id: 'c53aoziFAEUkV88p9hlH4aU',
                                  type: 'Entry',
                                  createdAt: '2021-02-08T20:41:46.809Z',
                                  updatedAt: '2021-02-11T22:11:45.234Z',
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
                                      id: 'contenido',
                                      contentful_id: 'contenido'
                                    }
                                  },
                                  contentful_id: '53aoziFAEUkV88p9hlH4aU'
                                },
                                fields: {
                                  categoriaCliente: {
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
                                          id: 'c3VLoCVOpLMD9hvFFbUwUzo',
                                          type: 'Entry',
                                          createdAt: '2020-09-22T20:27:21.961Z',
                                          updatedAt: '2020-09-22T20:27:21.961Z',
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
                                              id: 'categoriaCliente',
                                              contentful_id: 'categoriaCliente'
                                            }
                                          },
                                          contentful_id:
                                            '3VLoCVOpLMD9hvFFbUwUzo'
                                        },
                                        fields: {
                                          lineadenegocio: {
                                            'en-US': [
                                              {
                                                metadata: { tags: [] },
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
                                                  id: 'c4ZiidHPjG8Bz3Q0bdS9aRb',
                                                  type: 'Entry',
                                                  createdAt:
                                                    '2020-02-04T21:11:13.248Z',
                                                  updatedAt:
                                                    '2020-06-04T19:16:35.336Z',
                                                  environment: {
                                                    sys: {
                                                      id: 'master',
                                                      type: 'Link',
                                                      linkType: 'Environment',
                                                      contentful_id: 'master'
                                                    }
                                                  },
                                                  revision: 6,
                                                  contentType: {
                                                    sys: {
                                                      type: 'Link',
                                                      linkType: 'ContentType',
                                                      id: 'lineaDeProducto',
                                                      contentful_id:
                                                        'lineaDeProducto'
                                                    }
                                                  },
                                                  contentful_id:
                                                    '4ZiidHPjG8Bz3Q0bdS9aRb'
                                                },
                                                fields: {
                                                  nombre: {
                                                    'en-US': 'Inversión'
                                                  },
                                                  id: { 'en-US': 'Inversion' },
                                                  textoIntroductorioBite: {
                                                    'en-US':
                                                      '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
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
                                                                'Línea de negocio asociada a los productos de Inversión que ofrece Protección, buscando crecer la cultura inversionista de los clientes que quieren alcanzar proyectos más grandes ',
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
                                          },
                                          descripcion: {
                                            'en-US': 'Conozco de Inversiones'
                                          },
                                          tipoDeCliente: {
                                            'en-US': {
                                              metadata: { tags: [] },
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
                                                id: 'c3XCf8zuzh5bGWNcuvFBuwx',
                                                type: 'Entry',
                                                createdAt:
                                                  '2019-05-15T20:40:39.606Z',
                                                updatedAt:
                                                  '2019-05-15T20:40:39.606Z',
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
                                                    id: 'tipoDeCliente',
                                                    contentful_id:
                                                      'tipoDeCliente'
                                                  }
                                                },
                                                contentful_id:
                                                  '3XCf8zuzh5bGWNcuvFBuwx'
                                              },
                                              fields: {
                                                nombre: { 'en-US': 'Afiliado' }
                                              }
                                            }
                                          }
                                        }
                                      },
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
                                          id: 'c2DARMfEGFnJmATe8dXP3Uf',
                                          type: 'Entry',
                                          createdAt: '2020-09-22T20:27:47.212Z',
                                          updatedAt: '2020-09-22T20:27:47.212Z',
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
                                              id: 'categoriaCliente',
                                              contentful_id: 'categoriaCliente'
                                            }
                                          },
                                          contentful_id:
                                            '2DARMfEGFnJmATe8dXP3Uf'
                                        },
                                        fields: {
                                          lineadenegocio: {
                                            'en-US': [
                                              {
                                                metadata: { tags: [] },
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
                                                  id: 'c4ZiidHPjG8Bz3Q0bdS9aRb',
                                                  type: 'Entry',
                                                  createdAt:
                                                    '2020-02-04T21:11:13.248Z',
                                                  updatedAt:
                                                    '2020-06-04T19:16:35.336Z',
                                                  environment: {
                                                    sys: {
                                                      id: 'master',
                                                      type: 'Link',
                                                      linkType: 'Environment',
                                                      contentful_id: 'master'
                                                    }
                                                  },
                                                  revision: 6,
                                                  contentType: {
                                                    sys: {
                                                      type: 'Link',
                                                      linkType: 'ContentType',
                                                      id: 'lineaDeProducto',
                                                      contentful_id:
                                                        'lineaDeProducto'
                                                    }
                                                  },
                                                  contentful_id:
                                                    '4ZiidHPjG8Bz3Q0bdS9aRb'
                                                },
                                                fields: {
                                                  nombre: {
                                                    'en-US': 'Inversión'
                                                  },
                                                  id: { 'en-US': 'Inversion' },
                                                  textoIntroductorioBite: {
                                                    'en-US':
                                                      '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
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
                                                                'Línea de negocio asociada a los productos de Inversión que ofrece Protección, buscando crecer la cultura inversionista de los clientes que quieren alcanzar proyectos más grandes ',
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
                                          },
                                          descripcion: {
                                            'en-US': 'Estoy Aprendiendo'
                                          },
                                          tipoDeCliente: {
                                            'en-US': {
                                              metadata: { tags: [] },
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
                                                id: 'c3XCf8zuzh5bGWNcuvFBuwx',
                                                type: 'Entry',
                                                createdAt:
                                                  '2019-05-15T20:40:39.606Z',
                                                updatedAt:
                                                  '2019-05-15T20:40:39.606Z',
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
                                                    id: 'tipoDeCliente',
                                                    contentful_id:
                                                      'tipoDeCliente'
                                                  }
                                                },
                                                contentful_id:
                                                  '3XCf8zuzh5bGWNcuvFBuwx'
                                              },
                                              fields: {
                                                nombre: { 'en-US': 'Afiliado' }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  tipoDeCliente: {
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
                                          id: 'c3XCf8zuzh5bGWNcuvFBuwx',
                                          type: 'Entry',
                                          createdAt: '2019-05-15T20:40:39.606Z',
                                          updatedAt: '2019-05-15T20:40:39.606Z',
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
                                              id: 'tipoDeCliente',
                                              contentful_id: 'tipoDeCliente'
                                            }
                                          },
                                          contentful_id:
                                            '3XCf8zuzh5bGWNcuvFBuwx'
                                        },
                                        fields: {
                                          nombre: { 'en-US': 'Afiliado' }
                                        }
                                      }
                                    ]
                                  },
                                  tituloCorto: {
                                    'en-US': 'Indicadores de mercado'
                                  },
                                  textoIntroductorio: {
                                    'en-US':
                                      'Conoce aquí los principales indicadores de mercados a nivel global'
                                  },
                                  textoCallToActionBite: {
                                    'en-US': 'Quiero conocer más'
                                  },
                                  titulo: { 'en-US': 'Indicadores de mercado' },
                                  tiempoDeLectura: { 'en-US': '4' },
                                  descripcioncorta: {
                                    'en-US':
                                      'Conoce aquí los principales indicadores de mercados a nivel global'
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
                                        id: 'c55LptVpdG5Rj6f3p6Xl5uY',
                                        type: 'Asset',
                                        createdAt: '2021-02-08T21:03:15.768Z',
                                        updatedAt: '2021-02-08T21:03:15.768Z',
                                        environment: {
                                          sys: {
                                            id: 'master',
                                            type: 'Link',
                                            linkType: 'Environment',
                                            contentful_id: 'master'
                                          }
                                        },
                                        revision: 1,
                                        contentful_id: '55LptVpdG5Rj6f3p6Xl5uY'
                                      },
                                      fields: {
                                        title: {
                                          'en-US': 'Indicadores de mercado'
                                        },
                                        description: {
                                          'en-US':
                                            'Mujer revisando en su celular los indicadores de mercado'
                                        },
                                        file: {
                                          'en-US': {
                                            url:
                                              '//images.ctfassets.net/y3qdch79qxiw/55LptVpdG5Rj6f3p6Xl5uY/0ee2707d69023136d3ea3854b705d361/GettyImages-1153620308.jpeg',
                                            details: {
                                              size: 40376,
                                              image: {
                                                width: 500,
                                                height: 500
                                              }
                                            },
                                            fileName:
                                              'GettyImages-1153620308.jpeg',
                                            contentType: 'image/jpeg'
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
                                          id: 'c43mhwG3gxYHb7DAjEirPBo',
                                          type: 'Asset',
                                          createdAt: '2021-02-08T20:33:53.386Z',
                                          updatedAt: '2021-02-08T20:33:53.386Z',
                                          environment: {
                                            sys: {
                                              id: 'master',
                                              type: 'Link',
                                              linkType: 'Environment',
                                              contentful_id: 'master'
                                            }
                                          },
                                          revision: 1,
                                          contentful_id:
                                            '43mhwG3gxYHb7DAjEirPBo'
                                        },
                                        fields: {
                                          title: {
                                            'en-US':
                                              'Indicadores de mercado - cifras de inversiones'
                                          },
                                          file: {
                                            'en-US': {
                                              url:
                                                '//images.ctfassets.net/y3qdch79qxiw/43mhwG3gxYHb7DAjEirPBo/01274275c8402c7341305bbc6205632e/Indicadores_de_mercado_-_cifras_de_inversiones.png',
                                              details: {
                                                size: 101422,
                                                image: {
                                                  width: 450,
                                                  height: 451
                                                }
                                              },
                                              fileName:
                                                'Indicadores de mercado - cifras de inversiones.png',
                                              contentType: 'image/png'
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  keywordsSeo: {
                                    'en-US':
                                      'Indicadores de mercado, Inversiones protección, inversiones, expertos en inversión, invertir desde hoy, asesoría en inversiones, mercados globales, mercado de capitales'
                                  },
                                  metatittleSeo: {
                                    'en-US': 'Indicadores de mercado'
                                  },
                                  metadescripcionSeo: {
                                    'en-US':
                                      'Conoce aquí los principales indicadores de mercados a nivel global. Conoce más.'
                                  },
                                  urlSeo: {
                                    'en-US':
                                      'inversiones/indicadores-de-mercado'
                                  },
                                  relevancia: { 'en-US': 'Relevancia Alta' },
                                  Tema: {
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
                                          id: 'c4JYXjOW5V5v8hrNyNI9x43',
                                          type: 'Entry',
                                          createdAt: '2020-11-11T21:58:12.867Z',
                                          updatedAt: '2021-02-05T16:24:47.939Z',
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
                                              id: 'Tema',
                                              contentful_id: 'Tema'
                                            }
                                          },
                                          contentful_id:
                                            '4JYXjOW5V5v8hrNyNI9x43'
                                        },
                                        fields: {
                                          titulo: {
                                            'en-US': 'GENERICO INVERSIONES'
                                          },
                                          tituloCorto: {
                                            'en-US': 'GENERICO INVERSIONES'
                                          },
                                          lineaDeProducto: {
                                            'en-US': [
                                              {
                                                metadata: { tags: [] },
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
                                                  id: 'c4ZiidHPjG8Bz3Q0bdS9aRb',
                                                  type: 'Entry',
                                                  createdAt:
                                                    '2020-02-04T21:11:13.248Z',
                                                  updatedAt:
                                                    '2020-06-04T19:16:35.336Z',
                                                  environment: {
                                                    sys: {
                                                      id: 'master',
                                                      type: 'Link',
                                                      linkType: 'Environment',
                                                      contentful_id: 'master'
                                                    }
                                                  },
                                                  revision: 6,
                                                  contentType: {
                                                    sys: {
                                                      type: 'Link',
                                                      linkType: 'ContentType',
                                                      id: 'lineaDeProducto',
                                                      contentful_id:
                                                        'lineaDeProducto'
                                                    }
                                                  },
                                                  contentful_id:
                                                    '4ZiidHPjG8Bz3Q0bdS9aRb'
                                                },
                                                fields: {
                                                  nombre: {
                                                    'en-US': 'Inversión'
                                                  },
                                                  id: { 'en-US': 'Inversion' },
                                                  textoIntroductorioBite: {
                                                    'en-US':
                                                      '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
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
                                                                'Línea de negocio asociada a los productos de Inversión que ofrece Protección, buscando crecer la cultura inversionista de los clientes que quieren alcanzar proyectos más grandes ',
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
                                          },
                                          tipoDeCliente: {
                                            'en-US': [
                                              {
                                                metadata: { tags: [] },
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
                                                  id: 'c3XCf8zuzh5bGWNcuvFBuwx',
                                                  type: 'Entry',
                                                  createdAt:
                                                    '2019-05-15T20:40:39.606Z',
                                                  updatedAt:
                                                    '2019-05-15T20:40:39.606Z',
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
                                                      id: 'tipoDeCliente',
                                                      contentful_id:
                                                        'tipoDeCliente'
                                                    }
                                                  },
                                                  contentful_id:
                                                    '3XCf8zuzh5bGWNcuvFBuwx'
                                                },
                                                fields: {
                                                  nombre: {
                                                    'en-US': 'Afiliado'
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  Widget: { 'en-US': 'mercadosmundialesnew' }
                                }
                              }
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
                            id: 'c4BEObjGy2UzuDshSFK2bDP',
                            type: 'Entry',
                            createdAt: '2021-05-27T16:35:56.596Z',
                            updatedAt: '2021-05-27T16:35:56.596Z',
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
                              'en-US': 'Informe de retención de cuentas'
                            },
                            textoIntroductorioBite: {
                              'en-US':
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            textoCallToActionInformes: {
                              'en-US': 'Quiero conocer más'
                            },
                            linkCallToActionInformes: {
                              'en-US':
                                'https://proteccion.com/wps/portal/proteccion/web/home/corporativo-accionistas/gobierno-corporativo/politicas/politicas-inversion'
                            },
                            lineaDeProducto: {
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
                                    id: { 'en-US': 'VOL' },
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
                        { data: {}, marks: [], value: '', nodeType: 'text' }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'document'
                }
              },
              cuerpocontenido2: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Actualidad acerca de inversiones',
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
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac porttitor lorem. Pellentesque vitae sagittis diam. Mauris ornare, augue et dapibus iaculis, lacus leo condimentum tortor, eget egestas sapien nibh et dolor. Phasellus convallis sodales consectetur. Phasellus et volutpat velit. Sed dignissim quis quam quis laoreet. Aliquam ligula velit, porttitor sed tincidunt ac, venenatis in augue. Mauris sagittis blandit imperdiet.\r\n\r\nIn non fringilla mi, et consequat sem. Curabitur in purus ac nisi venenatis semper ut et tortor. Phasellus iaculis orci vel ante commodo consequat. Ut molestie finibus est sit amet tincidunt. Phasellus id arcu ac justo interdum faucibus vel a lacus. Donec pretium consequat risus, at interdum metus semper vel. Sed in cursus turpis, a ultricies velit. Quisque ornare diam eros, consequat egestas massa sagittis et. Maecenas tellus ante, placerat in turpis eget, tempus iaculis lectus. Fusce iaculis tellus elit, a fringilla diam tempus ac. Sed eget ipsum eget libero tempor malesuada.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    },
                    {
                      data: {},
                      content: [
                        { data: {}, marks: [], value: '\n', nodeType: 'text' },
                        {
                          data: {
                            uri:
                              'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#actualidad'
                          },
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Herramientas inversionistas',
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
              },
              Widget: {
                Widget:
                  'https://widgetsdataifx.blob.core.windows.net/proteccionnew/historiconewstyles'
              },
              imagenes: [
                {
                  file: {
                    fileName: 'Alternativas-cerradas.png',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/f479db916ef8048a55551cdfcfb180df/Alternativas-cerradas.png'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1dlkZelFwdwBnCxD0EwrJD/f479db916ef8048a55551cdfcfb180df/Alternativas-cerradas.png?w=800&q=50'
                  },
                  title: 'Alternativas Cerradas',
                  description:
                    'Ilustración de gráficas de rentabilidades y valores de los mercados'
                },
                {
                  file: {
                    fileName: 'Que dice el experto.jpeg',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/782TaQzQxAmaIUZ090ACly/6d19c19f09ea1494140ca7c85aaedf51/Que_dice_el_experto.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/782TaQzQxAmaIUZ090ACly/6d19c19f09ea1494140ca7c85aaedf51/Que_dice_el_experto.jpeg?w=800&q=50'
                  },
                  title: 'Qué dice el experto',
                  description:
                    'Hombre adulto, con camisa blanca y pantalón oscuro, está sentado en la sala de su casa y revisa su tablet. '
                },
                {
                  file: {
                    fileName: 'Cifras-de-mercado.png',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/7tVnQkt53yMQRw80OKl4OE/90aa8165cb631f2f06411565b5274687/Cifras-de-mercado.png'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/7tVnQkt53yMQRw80OKl4OE/90aa8165cb631f2f06411565b5274687/Cifras-de-mercado.png?w=800&q=50'
                  },
                  title: 'Cifras de mercado',
                  description: ''
                }
              ],
              urlSeo: 'fondos-voluntarios-de-pension',
              listadoVideos: ['https://www.youtube.com/embed/w_4Bk2uJAl8'],
              descripcioncorta:
                'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
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

const data5 = {
  allContentfulLeyesYDecretos: {
    edges: [
      {
        node: {
          contentful_id: '3yYMno9NV3bPeBvisaWYGB',
          titulo: { titulo: 'Fondos Voluntarios de Pensión' },
          contenido: [
            {
              Widget: null,
              imagenes: null,
              urlSeo: 'fondos-voluntarios-de-pension',
              listadoVideos: ['https://www.youtube.com/embed/w_4Bk2uJAl8'],
              descripcioncorta:
                'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
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

const data2 = [
  'https://www.youtube.com/embed/8420jbTNoMw',
  'https://www.youtube.com/embed/8420jbTNoM2'
]
const data1 = ['https://www.youtube.com/embed/8420jbTNoMw']
let getSuccess
let useEffect
const mockUseEffect = () => {
  useEffect.mockImplementationOnce(f => f())
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

const pageContext = {
  categoriaProducto: 'LeyesYDecretos',
  slug: 'fondos-voluntarios-de-pension/',
  id: '3yYMno9NV3bPeBvisaWYGB',
  line: 'leyesydecretos',
  type: 'leyesydecretos',
  cliente: 1,
  sublinea: '',
  ids: ['3yYMno9NV3bPeBvisaWYGB'],
  metatittleSeo: null,
  keywordsSeo: null,
  metadescripcionSeo: null
}

location = {
  pathname: '/fondos-voluntarios-de-pension',
  search: '',
  hash: '',
  href: 'http://localhost:8000/fondos-voluntarios-de-pension',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  state: null,
  key: 'initial'
}

describe('Button', () => {
  beforeEach(() => {
    fetch.resetMocks()
    getSuccess = jest.fn(() =>
      Promise.resolve({
        items: [
          {
            id: '8420jbTNoMw',
            snippet: {
              title: 'titlle',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/jIoEaTN7GGo/sddefault.jpg'
                }
              }
            }
          },
          {
            id: '8420jbTNoM2',
            snippet: {
              title: 'titlle',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/jIoEaTN7GGo/sddefault.jpg'
                }
              }
            }
          }
        ]
      })
    )

    useEffect = jest.spyOn(React, 'useEffect')
  })
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <InternalLeyesYDecretos
          data={data}
          pageContext={pageContext}
          dispatch={() => {}}
          location={location}
          accessibility={null}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <InternalLeyesYDecretos
          data={data5}
          pageContext={pageContext}
          dispatch={() => {}}
          location={location}
          accessibility={null}
        />
      </Provider>
    )
  })
})
