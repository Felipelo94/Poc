import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import InternalTalentoSiHay from './internal-talento-si-hay'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { useStaticQuery } from 'gatsby'

const data = {
  allContentfulOfertaDiferencial: {
    edges: [
      {
        node: {
          ImagenSecundaria: [
            {
              file: {
                fileName: 'Imagen banner final.png',
                url:
                  '//images.ctfassets.net/y3qdch79qxiw/5ltBK6DWQafOrS8ZKhBXVu/49c5482323c51b1f8dfbf250bb1d06bc/Imagen_banner_final.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/5ltBK6DWQafOrS8ZKhBXVu/49c5482323c51b1f8dfbf250bb1d06bc/Imagen_banner_final.png?w=800&q=50'
              },
              title: 'Imagen Talento Sí Hay',
              description:
                'Hombre joven, de cabello rizado y camiseta blanca, sonríe'
            }
          ],
          ImagenSecundariaMobile: [
            {
              file: {
                url:
                  '//images.ctfassets.net/y3qdch79qxiw/5ltBK6DWQafOrS8ZKhBXVu/49c5482323c51b1f8dfbf250bb1d06bc/Imagen_banner_final.png',
                fileName: 'Imagen banner final.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/5ltBK6DWQafOrS8ZKhBXVu/49c5482323c51b1f8dfbf250bb1d06bc/Imagen_banner_final.png?w=800&q=50'
              },
              description:
                'Hombre joven, de cabello rizado y camiseta blanca, sonríe',
              title: 'Imagen Talento Sí Hay'
            }
          ],
          titulo: 'Talento si hay',
          contentful_id: '3AZW4bWcQv1Q8k9GkUYHP0',
          contenido: [
            {
              podcast: [
                {
                  contentful_id: '7q8dteyLjlye4eOiqximdV',
                  OrigenDeAudio: ['Spotify'],
                  linkPodcast: {
                    linkPodcast:
                      'https://open.spotify.com/episode/3Ez6YkzdUaBfSwRdKGVljD?si=872a26492ebe4464'
                  },
                  titulo: 'Podcast Talento Sí Hay Ep. 54',
                  descripcion:
                    'Casi ninguna decisión en la vida debería regirse por la premisa del matrimonio. Esa en la que existe un "para toda la vida" sobre todo si hablamos de una decisión de carrera.',
                  updatedAt: '2021-03-17T22:14:44.200Z'
                }
              ],
              cuerpocontenido: {
                json: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'heading-2',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'En Talento Sí Hay encontrarás:',
                          marks: [{ type: 'bold' }],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c6hv6BHNnIYn1Z9dVBc1Cgk',
                            type: 'Asset',
                            createdAt: '2021-03-17T21:43:43.387Z',
                            updatedAt: '2021-03-30T20:44:56.282Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 5,
                            contentful_id: '6hv6BHNnIYn1Z9dVBc1Cgk'
                          },
                          fields: {
                            title: { 'en-US': 'Ícono de libro' },
                            description: { 'en-US': 'Ícono de libro' },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/6hv6BHNnIYn1Z9dVBc1Cgk/aa39d5e65fc130894d5b14e850f63eb2/libro.svg',
                                details: {
                                  size: 596,
                                  image: { width: 48, height: 48 }
                                },
                                fileName: 'libro.svg',
                                contentType: 'image/svg+xml'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Herramientas para prepararte para tu primer empleo y grandes aliados de Protección que buscan brindar oportunidad para trabajar a quienes están comenzando su vida laboral. ',
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
                            'Además, podrás apoyarte de nuestros cursos y contenidos sobre cómo conseguir empleo y desarrollar tu perfil personal y profesional.',
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
                            'Si tienes todas las ganas de emprender, pero te falta ese empujón, tenemos historias reales e inspiradoras, y muchos consejos para atreverte a comenzar.\n',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'HzNUBUTs92fFXwABFMxdm',
                            type: 'Asset',
                            createdAt: '2021-03-17T21:46:50.684Z',
                            updatedAt: '2021-03-29T16:05:39.008Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: 'HzNUBUTs92fFXwABFMxdm'
                          },
                          fields: {
                            title: {
                              'en-US':
                                'Imagen mujer camisa rosada Talento Sí Hay'
                            },
                            description: {
                              'en-US':
                                'Mujer joven, de cabello corto y rojizo, sonríe. La mujer lleva tatuajes en sus brazos y una camisa color rosa'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/HzNUBUTs92fFXwABFMxdm/a728063124a69580d710296b4daf4384/BG-Stepper-1.png',
                                details: {
                                  size: 73112,
                                  image: { width: 450, height: 450 }
                                },
                                fileName: 'BG-Stepper-1.png',
                                contentType: 'image/png'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: '',
                          marks: [{ type: 'bold' }],
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
                          value: 'Ruta de aprendizaje',
                          marks: [{ type: 'bold' }],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c2oXD5lCAEu1V3jKsjwPrNg',
                            type: 'Asset',
                            createdAt: '2021-03-17T21:50:24.974Z',
                            updatedAt: '2021-03-30T20:45:20.456Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: '2oXD5lCAEu1V3jKsjwPrNg'
                          },
                          fields: {
                            title: { 'en-US': 'Ícono burbuja de información' },
                            description: {
                              'en-US': 'Ícono burbuja de información'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/2oXD5lCAEu1V3jKsjwPrNg/be176deb06adbc03da45f2b412e2fabe/burbujea_mensaje.svg',
                                details: {
                                  size: 2556,
                                  image: { width: 48, height: 48 }
                                },
                                fileName: 'burbujea mensaje.svg',
                                contentType: 'image/svg+xml'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: 'En ', marks: [], data: {} },
                        {
                          nodeType: 'text',
                          value: 'Talento Sí Hay ',
                          marks: [{ type: 'bold' }],
                          data: {}
                        },
                        {
                          nodeType: 'text',
                          value:
                            'hemos construido, junto a los aliados de Protección, una oferta de contenidos educativos que te permitirán mejorar tu conocimiento en diferentes áreas e industrias, y ayudar a tu carrera profesional.\r\n\r\nLa ',
                          marks: [],
                          data: {}
                        },
                        {
                          nodeType: 'text',
                          value: 'Ruta de Aprendizaje',
                          marks: [{ type: 'bold' }],
                          data: {}
                        },
                        {
                          nodeType: 'text',
                          value:
                            ' es un espacio educativo donde te ofrecemos cursos y contenidos en alianzas exclusivas que te ayudarán a formarte y ser un experto en un tema o carrera.\r\n\r\nAquí encontrarás las herramientas necesarias para ser todo un experto.',
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
                          marks: [{ type: 'bold' }],
                          data: {}
                        },
                        {
                          nodeType: 'hyperlink',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Comienza ahora',
                              marks: [{ type: 'bold' }],
                              data: {}
                            }
                          ],
                          data: {
                            uri: 'https://www.proteccion.com/rutadeaprendizaje/'
                          }
                        },
                        {
                          nodeType: 'text',
                          value: '',
                          marks: [{ type: 'bold' }],
                          data: {}
                        },
                        {
                          nodeType: 'hyperlink',
                          content: [
                            {
                              nodeType: 'text',
                              value: '.',
                              marks: [{ type: 'bold' }],
                              data: {}
                            }
                          ],
                          data: {
                            uri: 'https://www.proteccion.com/rutadeaprendizaje/'
                          }
                        },
                        {
                          nodeType: 'text',
                          value: '',
                          marks: [{ type: 'bold' }],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c5t7j2mqDMbbgcUVnE3azQW',
                            type: 'Asset',
                            createdAt: '2021-03-17T22:03:50.695Z',
                            updatedAt: '2021-03-29T16:06:03.121Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: '5t7j2mqDMbbgcUVnE3azQW'
                          },
                          fields: {
                            title: {
                              'en-US':
                                'Mujer joven de cabello corto rubio Talento Sí Hay'
                            },
                            description: {
                              'en-US':
                                'Mujer joven de cabello corto rubio, con tatuajes en los brazos y camiseta blanca, simula tomar una fotografía con sus manos'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/5t7j2mqDMbbgcUVnE3azQW/1a2d7b810ea7e0cbb5b8478875bbf169/BG-Stepper-2.png',
                                details: {
                                  size: 75056,
                                  image: { width: 450, height: 450 }
                                },
                                fileName: 'BG-Stepper-2.png',
                                contentType: 'image/png'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'heading-2',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Red de contactos',
                          marks: [{ type: 'bold' }],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c1ye2ACgAx4oybroazsk80f',
                            type: 'Asset',
                            createdAt: '2021-03-17T21:52:00.807Z',
                            updatedAt: '2021-03-30T20:45:39.575Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: '1ye2ACgAx4oybroazsk80f'
                          },
                          fields: {
                            title: { 'en-US': 'Ícono personas' },
                            description: { 'en-US': 'Ícono personas' },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/1ye2ACgAx4oybroazsk80f/782176d06581b0ef61fa6497a9f9d0e3/personas.svg',
                                details: {
                                  size: 1757,
                                  image: { width: 42, height: 34 }
                                },
                                fileName: 'personas.svg',
                                contentType: 'image/svg+xml'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: '¡Consigue empleo y prácticas profesionales! ',
                          marks: [{ type: 'bold' }],
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
                            'Conseguir empleo y hacer prácticas laborales es más sencillo con nuestras empresas aliadas y las ofertas laborales que tienen disponibles para ti. ',
                          marks: [],
                          data: {}
                        },
                        {
                          nodeType: 'text',
                          value:
                            '¡Cree en tu talento y comienza tu vida profesional ahora!',
                          marks: [{ type: 'bold' }],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c2f1bVgbQbwy0xPrZ0NNewn',
                            type: 'Asset',
                            createdAt: '2021-03-17T22:05:40.825Z',
                            updatedAt: '2021-03-29T16:06:21.433Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: '2f1bVgbQbwy0xPrZ0NNewn'
                          },
                          fields: {
                            title: {
                              'en-US':
                                'Mujer joven de cabello largo y castaño Talento Sí Hay'
                            },
                            description: {
                              'en-US':
                                'Mujer joven de cabello largo y castaño, con tatuajes en su brazo, sonríe.'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/2f1bVgbQbwy0xPrZ0NNewn/30563ba3bf407fbfa5433a90ff184480/BG-Stepper-3.png',
                                details: {
                                  size: 92983,
                                  image: { width: 450, height: 450 }
                                },
                                fileName: 'BG-Stepper-3.png',
                                contentType: 'image/png'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'JqsS7wswQZ1xLsbGwIhRS',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:04:15.480Z',
                            updatedAt: '2021-03-17T22:04:15.480Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: 'JqsS7wswQZ1xLsbGwIhRS'
                          },
                          fields: {
                            titulo: { 'en-US': 'Aptitude' },
                            descripcion: {
                              'en-US':
                                'Ahora las aptitudes y los talentos de las personas son lo mas importante,'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Aptitude'
                            },
                            imagen: {
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
                                    id: 'c2Frd3lD9BaPhH7onCCyIuE',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:04:03.562Z',
                                    updatedAt: '2021-03-17T22:04:03.562Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '2Frd3lD9BaPhH7onCCyIuE'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo aptitude' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/2Frd3lD9BaPhH7onCCyIuE/fcb434434cc0d5391df1f35e94806a7f/logo_aptitude.png',
                                        details: {
                                          size: 5888,
                                          image: { width: 215, height: 210 }
                                        },
                                        fileName: 'logo_aptitude.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c7dHWVXk7UnanB3cijDp7Fq',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:14:13.208Z',
                            updatedAt: '2021-03-17T22:14:13.208Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '7dHWVXk7UnanB3cijDp7Fq'
                          },
                          fields: {
                            titulo: { 'en-US': 'Colsubsidio' },
                            descripcion: {
                              'en-US':
                                'Te conectamos con las oportunidades laborales sin salir de casa.'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Colsubsidio'
                            },
                            imagen: {
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
                                    id: 'c3YQvVSIn5N1UKVdYkUkNSC',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:14:07.640Z',
                                    updatedAt: '2021-03-17T22:14:07.640Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '3YQvVSIn5N1UKVdYkUkNSC'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo colsubsidio' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/3YQvVSIn5N1UKVdYkUkNSC/4c6800c4fa09a0f25080c4b2ec69f4fc/colsubsidio.png',
                                        details: {
                                          size: 9803,
                                          image: { width: 189, height: 82 }
                                        },
                                        fileName: 'colsubsidio.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c1a3bfAOBR93pU8cM0Gh09n',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:58:56.272Z',
                            updatedAt: '2021-03-17T21:58:56.272Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '1a3bfAOBR93pU8cM0Gh09n'
                          },
                          fields: {
                            titulo: { 'en-US': 'Comfama' },
                            descripcion: {
                              'en-US':
                                'Conectamos talento, servicio de empleo y emprendimiento Comfama.'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Comfama'
                            },
                            imagen: {
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
                                    id: 'c7iqxmSBTKbG1IpprQ2JLIO',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T21:58:02.663Z',
                                    updatedAt: '2021-03-17T21:58:02.663Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '7iqxmSBTKbG1IpprQ2JLIO'
                                  },
                                  fields: {
                                    title: { 'en-US': 'Logo comfama' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/7iqxmSBTKbG1IpprQ2JLIO/04ca2eebee5bdb44ed711644f6bea3bc/company-logo-comfama.jpg',
                                        details: {
                                          size: 37214,
                                          image: { width: 248, height: 224 }
                                        },
                                        fileName: 'company-logo-comfama.jpg',
                                        contentType: 'image/jpeg'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'OC6hyAQ2yP39842KaCHgl',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:06:34.539Z',
                            updatedAt: '2021-03-17T22:06:34.539Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: 'OC6hyAQ2yP39842KaCHgl'
                          },
                          fields: {
                            titulo: { 'en-US': 'EmpleoYa' },
                            descripcion: { 'en-US': 'Conéctate con EmpleoYa' },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=EmpleoYa'
                            },
                            imagen: {
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
                                    id: 'c3U1GNXdtCeDavp5JxNedTg',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:06:26.515Z',
                                    updatedAt: '2021-03-17T22:06:26.515Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '3U1GNXdtCeDavp5JxNedTg'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logoEmpleoYa' },
                                    description: {
                                      'en-US': 'Logotipo de EmpleoYa'
                                    },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/3U1GNXdtCeDavp5JxNedTg/273bc3f5b168f1ed2096631c486fe5ea/logoEmpleoYa.png',
                                        details: {
                                          size: 4551,
                                          image: { width: 159, height: 37 }
                                        },
                                        fileName: 'logoEmpleoYa.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c2aWlZGpzmrtTlmhZhIPdTs',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:13:11.639Z',
                            updatedAt: '2021-03-17T22:13:11.639Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '2aWlZGpzmrtTlmhZhIPdTs'
                          },
                          fields: {
                            titulo: { 'en-US': 'enlaU' },
                            descripcion: {
                              'en-US':
                                'Las mejores oportunidades para primeros empleos y prácticas'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Talento_en_la_U'
                            },
                            imagen: {
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
                                    id: 'c4Hgu4eOWoa0aUbcpRb0twg',
                                    type: 'Asset',
                                    createdAt: '2021-03-29T13:38:00.389Z',
                                    updatedAt: '2021-03-29T13:38:00.389Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '4Hgu4eOWoa0aUbcpRb0twg'
                                  },
                                  fields: {
                                    title: { 'en-US': 'enlaU' },
                                    description: { 'en-US': 'Logotipo enlaU' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/4Hgu4eOWoa0aUbcpRb0twg/6bbe06957e5ef7e4ba92c04929ca5b62/enlau.png',
                                        details: {
                                          size: 1686,
                                          image: { width: 117, height: 30 }
                                        },
                                        fileName: 'enlau.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c2FdEWyBu37YwCP9hG1pRcA',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:49:44.899Z',
                            updatedAt: '2021-03-17T21:54:27.937Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '2FdEWyBu37YwCP9hG1pRcA'
                          },
                          fields: {
                            titulo: { 'en-US': 'Magneto Empleos' },
                            descripcion: {
                              'en-US':
                                'Conectamos tu talento con ofertas para todos los perfiles'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Magneto'
                            },
                            imagen: {
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
                                    id: 'c7KXoCyek5coQ3hNzxnzXcS',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T21:54:06.351Z',
                                    updatedAt: '2021-03-17T21:54:06.351Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '7KXoCyek5coQ3hNzxnzXcS'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo magneto' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/7KXoCyek5coQ3hNzxnzXcS/ab6a78006b6090fd3ca9bf1510610a8b/logo_magneto.png',
                                        details: {
                                          size: 4539,
                                          image: { width: 273, height: 273 }
                                        },
                                        fileName: 'logo_magneto.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c3iLz5U06QNdtvqLzWxL1z1',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:09:31.357Z',
                            updatedAt: '2021-03-17T22:09:31.357Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '3iLz5U06QNdtvqLzWxL1z1'
                          },
                          fields: {
                            titulo: { 'en-US': 'PeakU' },
                            descripcion: {
                              'en-US':
                                'Empleos de empresas internacionales y para trabajo remoto.'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=PeakU'
                            },
                            imagen: {
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
                                    id: 'c1rzBjDxBntAZHh46hZGeur',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:09:26.966Z',
                                    updatedAt: '2021-03-17T22:09:26.966Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '1rzBjDxBntAZHh46hZGeur'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo PeakU' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/1rzBjDxBntAZHh46hZGeur/0b3910f8b585924676e2246472a4be88/peaku.png',
                                        details: {
                                          size: 5509,
                                          image: { width: 146, height: 146 }
                                        },
                                        fileName: 'peaku.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c35A8HpILMMDiWMfgLXQSrJ',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:12:19.386Z',
                            updatedAt: '2021-03-17T22:12:19.386Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '35A8HpILMMDiWMfgLXQSrJ'
                          },
                          fields: {
                            titulo: { 'en-US': 'Protección' },
                            descripcion: {
                              'en-US':
                                'Trabaja con nosotros y cumple tus metas y las de miles de colombianos'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Proteccion'
                            },
                            imagen: {
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
                                    id: 'tmkXefvmfXOYLBZj2ru71',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:12:01.021Z',
                                    updatedAt: '2021-03-17T22:12:01.021Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: 'tmkXefvmfXOYLBZj2ru71'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo proteccion' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/tmkXefvmfXOYLBZj2ru71/42ee6a04084dd44bba16147448139bae/logo-proteccion.svg',
                                        details: {
                                          size: 5573,
                                          image: { width: 98, height: 16 }
                                        },
                                        fileName: 'logo-proteccion.svg',
                                        contentType: 'image/svg+xml'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c3Qz9cTjc3ZNpbbhwCTvF5B',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:08:25.881Z',
                            updatedAt: '2021-03-17T22:08:25.881Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '3Qz9cTjc3ZNpbbhwCTvF5B'
                          },
                          fields: {
                            titulo: { 'en-US': 'Torre' },
                            descripcion: { 'en-US': 'Mejora tu carrera' },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Torre'
                            },
                            imagen: {
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
                                    id: 'c135WCDNRd2ZE2bEtwbMx6M',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:08:21.855Z',
                                    updatedAt: '2021-03-17T22:08:21.855Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '135WCDNRd2ZE2bEtwbMx6M'
                                  },
                                  fields: {
                                    title: { 'en-US': 'Torre' },
                                    description: { 'en-US': 'Logotipo Torre' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/135WCDNRd2ZE2bEtwbMx6M/dd3954d56082cfcc3002bb480c8bb899/torrelogo.png',
                                        details: {
                                          size: 34950,
                                          image: { width: 695, height: 720 }
                                        },
                                        fileName: 'torrelogo.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c3CzVBWBJJiLvtn6JWbGRLW',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:11:05.389Z',
                            updatedAt: '2021-03-17T22:11:05.389Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: '3CzVBWBJJiLvtn6JWbGRLW'
                          },
                          fields: {
                            titulo: { 'en-US': 'Travail' },
                            descripcion: {
                              'en-US': 'Trabajo hecho a tu medida'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Travail'
                            },
                            imagen: {
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
                                    id: 'c615H30LXmJbJbpYDPXyDXQ',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:10:58.310Z',
                                    updatedAt: '2021-03-17T22:10:58.310Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '615H30LXmJbJbpYDPXyDXQ'
                                  },
                                  fields: {
                                    title: { 'en-US': 'Travail' },
                                    description: {
                                      'en-US': 'Logotipo Travail'
                                    },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/615H30LXmJbJbpYDPXyDXQ/db6e89ea0619cdbbe84d0def11f339fa/company-logo-2.png',
                                        details: {
                                          size: 7091,
                                          image: { width: 117, height: 47 }
                                        },
                                        fileName: 'company-logo-2.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'gdQsU3h9YJ77qwlOaWfNV',
                            type: 'Entry',
                            createdAt: '2021-03-17T22:07:20.715Z',
                            updatedAt: '2021-03-17T22:07:20.715Z',
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
                                id: 'aliados',
                                contentful_id: 'aliados'
                              }
                            },
                            contentful_id: 'gdQsU3h9YJ77qwlOaWfNV'
                          },
                          fields: {
                            titulo: { 'en-US': 'Work University' },
                            descripcion: {
                              'en-US': 'Tenemos trabajos para estudiantes.'
                            },
                            textoCallToAction: { 'en-US': 'Hazlo ahora' },
                            linkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/rutadeaprendizaje/?empleo=Work_University'
                            },
                            imagen: {
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
                                    id: 'c6ZuOlBdyRmWHmjpT5oKroC',
                                    type: 'Asset',
                                    createdAt: '2021-03-17T22:07:14.008Z',
                                    updatedAt: '2021-03-17T22:07:14.008Z',
                                    environment: {
                                      sys: {
                                        id: 'master',
                                        type: 'Link',
                                        linkType: 'Environment',
                                        contentful_id: 'master'
                                      }
                                    },
                                    revision: 1,
                                    contentful_id: '6ZuOlBdyRmWHmjpT5oKroC'
                                  },
                                  fields: {
                                    title: { 'en-US': 'logo work' },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/6ZuOlBdyRmWHmjpT5oKroC/be800b82efc3a6942f68762435619330/logo_work.png',
                                        details: {
                                          size: 6528,
                                          image: { width: 203, height: 206 }
                                        },
                                        fileName: 'logo work.png',
                                        contentType: 'image/png'
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    },
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
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c7FxQZkBBJBO8G09xfREfsY',
                            type: 'Asset',
                            createdAt: '2021-03-17T21:54:38.768Z',
                            updatedAt: '2021-03-30T20:46:07.540Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 2,
                            contentful_id: '7FxQZkBBJBO8G09xfREfsY'
                          },
                          fields: {
                            title: { 'en-US': 'Ícono herramientas' },
                            description: { 'en-US': 'Ícono herramientas' },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/7FxQZkBBJBO8G09xfREfsY/6b58e8a0ea111aec0b1c2d3ab00062f2/herramientas.svg',
                                details: {
                                  size: 1420,
                                  image: { width: 48, height: 48 }
                                },
                                fileName: 'herramientas.svg',
                                contentType: 'image/svg+xml'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Amplía tu conocimiento:',
                          marks: [{ type: 'bold' }],
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
                            'En Talento Si Hay encuentras todo lo que necesitas para mejorar tus capacidades laborales y comenzar tu vida profesional.',
                          marks: [],
                          data: {}
                        }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-asset-block',
                      content: [],
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
                            id: 'c6dxsssPgOOt93sA1mgWHBd',
                            type: 'Asset',
                            createdAt: '2021-03-17T22:07:03.008Z',
                            updatedAt: '2021-03-29T16:06:44.920Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                                contentful_id: 'master'
                              }
                            },
                            revision: 3,
                            contentful_id: '6dxsssPgOOt93sA1mgWHBd'
                          },
                          fields: {
                            title: {
                              'en-US':
                                'Hombre con cabello rizo hasta los hombros Talento Sí Hay'
                            },
                            description: {
                              'en-US':
                                'Hombre con cabello rizo hasta los hombros, lentes amarillos y camiseta azul aguamarina, sonríe.'
                            },
                            file: {
                              'en-US': {
                                url:
                                  '//images.ctfassets.net/y3qdch79qxiw/6dxsssPgOOt93sA1mgWHBd/ff1c71e8255b0add64609be0e094648b/BG-Stepper-4.png',
                                details: {
                                  size: 77953,
                                  image: { width: 450, height: 450 }
                                },
                                fileName: 'BG-Stepper-4.png',
                                contentType: 'image/png'
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c4nkhfrhtXg9JsqykINMrZH',
                            type: 'Entry',
                            createdAt: '2021-03-29T14:18:29.183Z',
                            updatedAt: '2021-03-31T13:41:12.135Z',
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
                            contentful_id: '4nkhfrhtXg9JsqykINMrZH'
                          },
                          fields: {
                            tituloCorto: {
                              'en-US':
                                'Herramientas para tu vida laboral y emprendimientos'
                            },
                            textoIntroductorio: {
                              'en-US':
                                'En Talento Si Hay encuentras todo lo que necesitas para mejorar tus capacidades laborales'
                            },
                            textoCallToActionBite: {
                              'en-US': 'Quiero conocer más'
                            },
                            titulo: {
                              'en-US':
                                'Herramientas para tu vida laboral y emprendimientos'
                            },
                            tiempoDeLectura: { 'en-US': '3' },
                            descripcioncorta: {
                              'en-US':
                                'En Talento Si Hay encuentras todo lo que necesitas para mejorar tus capacidades laborales y comenzar tu vida profesional.'
                            },
                            listadoVideos: {
                              'en-US': [
                                'https://www.youtube.com/embed/4Z8-3FITupE',
                                'https://www.youtube.com/embed/q9TiRUGRcIw',
                                'https://www.youtube.com/embed/p4GMsNg3we4',
                                'https://www.youtube.com/embed/hHymFwoK70Y',
                                'https://www.youtube.com/embed/uxnPYzwECN4',
                                'https://www.youtube.com/embed/Cb3lCR9tcBc',
                                'https://www.youtube.com/embed/6NQTfaOBizk',
                                'https://www.youtube.com/embed/OG7PPXOA6HA',
                                'https://www.youtube.com/embed/0_utqVfLIwY',
                                'https://www.youtube.com/embed/Or5qqUrIrWA',
                                'https://www.youtube.com/embed/MzDRKp9x3_s',
                                'https://www.youtube.com/embed/jh5vUXeVEjs',
                                'https://www.youtube.com/embed/9ZDw2QNYuuM',
                                'https://www.youtube.com/embed/7weTsPNhMNQ'
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
                        }
                      }
                    },
                    {
                      nodeType: 'embedded-entry-block',
                      content: [],
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
                            id: 'c4iHJAsABZwegtDPjC6UY6g',
                            type: 'Entry',
                            createdAt: '2021-03-29T14:35:39.529Z',
                            updatedAt: '2021-03-30T17:13:34.476Z',
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
                                id: 'contenido',
                                contentful_id: 'contenido'
                              }
                            },
                            contentful_id: '4iHJAsABZwegtDPjC6UY6g'
                          },
                          fields: {
                            tituloCorto: {
                              'en-US': 'Consejos para tu vida laboral'
                            },
                            textoIntroductorio: {
                              'en-US':
                                'Conoce aquí algunos consejos básicos que te permitirán prepararte mejor'
                            },
                            textoCallToActionBite: {
                              'en-US': 'Quiero conocer más'
                            },
                            titulo: {
                              'en-US': 'Consejos para tu vida laboral'
                            },
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
                                        marks: [
                                          { type: 'bold' },
                                          { type: 'italic' }
                                        ],
                                        value: 'Fuentes:',
                                        nodeType: 'text'
                                      },
                                      {
                                        data: {},
                                        marks: [],
                                        value: '\r\n\r\n',
                                        nodeType: 'text'
                                      },
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
                                          'GIPE. Consejos para superar una entrevista.\r\n',
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
                                        marks: [{ type: 'bold' }],
                                        value:
                                          'Tips para buscar trabajo: ¿Dónde busco?, ¿qué debo hacer?, ¿por dónde empiezo?',
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
                                          { type: 'italic' },
                                          { type: 'bold' }
                                        ],
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
                                        marks: [{ type: 'bold' }],
                                        value:
                                          '¿Qué deducciones tiene mi salario?',
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
                                      {
                                        data: {},
                                        marks: [],
                                        value: ' es de ',
                                        nodeType: 'text'
                                      },
                                      {
                                        data: {},
                                        marks: [{ type: 'bold' }],
                                        value:
                                          'vinculación laboral a término fijo o indefinido,',
                                        nodeType: 'text'
                                      },
                                      {
                                        data: {},
                                        marks: [],
                                        value:
                                          ' tendrás estas deducciones:\r\n\r\n\r\n',
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
                                        value:
                                          'el aporte que haces por este concepto es del 4%.\r\n\r\n',
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
                                        value:
                                          'Fondo de solidaridad pensional:',
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
                                          { type: 'bold' },
                                          { type: 'italic' }
                                        ],
                                        value: 'Fuentes:',
                                        nodeType: 'text'
                                      },
                                      {
                                        data: {},
                                        marks: [],
                                        value: '\r\n\r\n',
                                        nodeType: 'text'
                                      },
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
                                        value:
                                          'mintrabajo.gov.co: Fondo de Solidaridad Pensional.',
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
                                  title: {
                                    'en-US':
                                      'Imagen consejos para tu vida laboral'
                                  },
                                  description: {
                                    'en-US':
                                      'Hombre joven de cabello rubio con tatuajes en sus brazos, sonríe mientras con su mano derecha hace una señal de okay.'
                                  },
                                  file: {
                                    'en-US': {
                                      url:
                                        '//images.ctfassets.net/y3qdch79qxiw/5Umq22YmsqcBKxIb3sn9zr/aac69c3b41ce9fadbf8ad849e1afa959/Photos-THS_2_1.png',
                                      details: {
                                        size: 201240,
                                        image: { width: 350, height: 350 }
                                      },
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
                                    title: {
                                      'en-US':
                                        'Imagen consejos para tu vida laboral'
                                    },
                                    description: {
                                      'en-US':
                                        'Hombre joven de cabello rubio con tatuajes en sus brazos, sonríe mientras con su mano derecha hace una señal de okay.'
                                    },
                                    file: {
                                      'en-US': {
                                        url:
                                          '//images.ctfassets.net/y3qdch79qxiw/5Umq22YmsqcBKxIb3sn9zr/aac69c3b41ce9fadbf8ad849e1afa959/Photos-THS_2_1.png',
                                        details: {
                                          size: 201240,
                                          image: { width: 350, height: 350 }
                                        },
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
                        }
                      }
                    },
                    {
                      nodeType: 'paragraph',
                      content: [
                        { nodeType: 'text', value: '', marks: [], data: {} }
                      ],
                      data: {}
                    }
                  ]
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
                          value: 'Enlaces de interés:',
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
                            '¿Quieres conseguir trabajo? ¿Te gustaría saber cómo emprender? en Talento si hay tenemos para ti algunos enlaces de interés para que estés preparado para la vida profesional y encuentres el empleo que siempre soñaste.',
                          nodeType: 'text'
                        }
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
                            id: 'c2zLvgvLXrHBHVYLlaR27Cf',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:55:18.673Z',
                            updatedAt: '2021-03-17T21:55:18.673Z',
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
                            contentful_id: '2zLvgvLXrHBHVYLlaR27Cf'
                          },
                          fields: {
                            titulo: { 'en-US': 'Afiliación' },
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
                                          'Prepárate desde ya para el inicio de tu vida laboral afiliándote 100% digital a pensiones obligatorias con simples pasos y segundos.',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: { 'en-US': 'Hazlo ahora' },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com.co/afiliacion/personas?utm_source=BotonTalentoSiHay&utm_medium=Portal&utm_campaign=AfiliacionDigital'
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
                            id: 'QDAhf4lLFNp3glR36fyoa',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:57:29.835Z',
                            updatedAt: '2021-03-17T21:57:29.835Z',
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
                            contentful_id: 'QDAhf4lLFNp3glR36fyoa'
                          },
                          fields: {
                            titulo: { 'en-US': 'Universidad Protección' },
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
                                          'Encuentra aquí los cursos y webinars para impulsar tu desarrollo personal y profesional.',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: { 'en-US': 'Quiero conocerla' },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/wps/portal/proteccion/web/universidad/home?utm_source=boton_enlacesinteres&utm_medium=referido&utm_campaign=Talentosihay_universidad&utm_content=clics-sitio-web'
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
                            id: 'c1QiGWr6X12IhnQIDk0eQVV',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:58:52.445Z',
                            updatedAt: '2021-03-24T14:05:22.270Z',
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
                            contentful_id: '1QiGWr6X12IhnQIDk0eQVV'
                          },
                          fields: {
                            titulo: { 'en-US': 'Sumanti' },
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
                                          'Con Sumanti tendrás acompañamiento, acceso a cursos, y lo más importante toda la ruta de empleabilidad y asesoría financiera.',
                                        marks: [],
                                        data: {}
                                      }
                                    ],
                                    data: {}
                                  }
                                ]
                              }
                            },
                            TextoCallToAction: { 'en-US': 'Hazlo ahora' },
                            LinkCallToAction: {
                              'en-US': 'https://fondosumanti.com/'
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
                            id: 'c7i8uh4vTZVIdOizD4PG1m3',
                            type: 'Entry',
                            createdAt: '2021-03-17T21:59:48.292Z',
                            updatedAt: '2021-03-17T21:59:48.292Z',
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
                            contentful_id: '7i8uh4vTZVIdOizD4PG1m3'
                          },
                          fields: {
                            titulo: { 'en-US': 'Privilegios Protección' },
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
                                          'Aprovecha todos los beneficios que tenemos para ti con las marcas que más te gustan por ser afiliado a Protección.',
                                        nodeType: 'text'
                                      }
                                    ],
                                    nodeType: 'paragraph'
                                  }
                                ],
                                nodeType: 'document'
                              }
                            },
                            TextoCallToAction: { 'en-US': 'Quiero saber más' },
                            LinkCallToAction: {
                              'en-US':
                                'https://www.proteccion.com/privilegios?utm_source=boton_enlacesinteres&utm_medium=referido&utm_campaign=Talentosihay_privilegios&utm_content=clics-sitio-web'
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
              imagenes: [
                {
                  file: {
                    fileName: 'Photos-THS 1.png',
                    url:
                      '//images.ctfassets.net/y3qdch79qxiw/63zDFZloWLIaeodIAzATM0/bc96d2a0d0634c37586319408a383b88/Photos-THS_1.png'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/63zDFZloWLIaeodIAzATM0/bc96d2a0d0634c37586319408a383b88/Photos-THS_1.png?w=800&q=50'
                  },
                  title: 'Imagen bienvenida Talento Sí Hay',
                  description:
                    'Joven de cabello oscuro y barba, con camisa de cuadros, sonríe'
                }
              ],
              urlSeo: 'talento-si-hay',
              titulo: 'Talento Sí Hay de Protección te da la bienvenida',
              descripcioncorta:
                '#TalentoSíHay es una plataforma creada para acompañar a todos los jóvenes que buscan empleo en el desarrollo de su talento profesional, donde además encontrarás herramientas como cursos y contenidos con marcas aliadas.'
            }
          ],
          ImagenPrincipalMobile: [
            {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1ayjPvKt27QgFt0dNrs3xQ/9739fc26dd932bf3fa23cc0d6909e88c/THS-Banner-Movil.jpg?w=800&q=50'
              },
              description:
                'Mujer joven de anteojos y cabello largo, sonriedo al lado de un letrero que dice Talento Sí Hay',
              file: {
                fileName: 'THS-Banner-Movil.jpg',
                url:
                  '//images.ctfassets.net/y3qdch79qxiw/1ayjPvKt27QgFt0dNrs3xQ/9739fc26dd932bf3fa23cc0d6909e88c/THS-Banner-Movil.jpg'
              },
              title: 'Banner mobile Talento Sí Hay'
            }
          ],
          ImagenPrincipalEscritorio: [
            {
              file: {
                fileName: 'THS-Banner.jpg',
                url:
                  '//images.ctfassets.net/y3qdch79qxiw/dqyYkAT1mFmLkbmrMRKWg/38642180137d43033611361f89c3d45f/THS-Banner.jpg'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/dqyYkAT1mFmLkbmrMRKWg/38642180137d43033611361f89c3d45f/THS-Banner.jpg?w=800&q=50'
              },
              description:
                'Mujer joven de anteojos y cabello largo, sonríe al lado de un letrero que dice Talento Sí Hay',
              title: 'Banner Talento Si Hay'
            }
          ]
        }
      }
    ]
  }
}

const location = {
  pathname: '/talento-si-hay/',
  search: '',
  hash: '',
  href: 'http://localhost:8000/talento-si-hay/',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  state: null,
  key: 'initial'
}

const category = {
  categoriaProducto: 'Talento',
  slug: 'talento-si-hay/',
  id: '3AZW4bWcQv1Q8k9GkUYHP0',
  line: 'talento',
  type: 'talento',
  cliente: 1,
  sublinea: '',
  ids: ['3AZW4bWcQv1Q8k9GkUYHP0']
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
      },
      site: {
        siteMetadata: {
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión ',
          description:
            '¡Protección tiene lo que necesitas! Queremos conocerte y saber qué te interesa: Invertir, ahorrar, saber sobre pensiones o cesantías. Ingresa aquí.',
          author: '@proteccion',
          siteUrl: 'https://https://vaxtpmde69.proteccion.com.co'
        }
      }
    })
  })
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <InternalTalentoSiHay
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          dispatch={() => {}}
          location={location}
          pageContext={category}
        />
      </Provider>
    )
  })

  it('ModalButton close modal mobile', () => {
    const wrapper = mount(
      <Provider store={store}>
        <InternalTalentoSiHay
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
          dispatch={() => {}}
          location={location}
          pageContext={category}
        />
      </Provider>
    )
  })
})
