import React from 'react'

import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'

import * as StepTourGuide from '../components/molecules/step-tour-guide/step-tour-guide'

import {
  getConfigTourGuide,
  redirectHome,
  generateCleanData,
  generateDataBiteYoucantmiss,
  generateDataBite,
  validationChangeHome,
  convertOldDataToNew,
  filterItems,
  sortData,
  setArrayCapania,
  setArrayFeatured,
  setArrayActualidad,
  setArrayProduct,
  setArrayEducativo,
  setArrayBites,
  setArrayTalento,
  setArrayMarketplace,
  __set__
} from './home-configuration'
const { default: mapCategories } = require('../const/dictionary/map-categories')

describe('home-configuration', () => {
  Object.defineProperty(window, 'location', {
    value: {
      href: '/',
      origin: 'localhost',
      search: ''
    }
  })

  beforeEach(() => {
    jest
      .spyOn(StepTourGuide, 'default')
      .mockImplementation(({ closeEvent }) => (
        <button onClick={closeEvent}>Close</button>
      ))
  })

  test('getConfigTourGuide', () => {
    getConfigTourGuide(jest.fn()).forEach(({ content }) => {
      const { unmount } = render(content(jest.fn()))
      fireEvent.click(screen.getByText('Close'))
      unmount()
    })
  })

  test('redirectHome', () => {
    redirectHome()
    redirectHome({ type: 1, category: 'Ahorro' })
    redirectHome({ type: 1, category: 'Cesantías' })
    redirectHome({ type: 1, category: 'Inversión' })
    redirectHome({ type: 1, category: 'Pensión' })
    redirectHome({ type: 1, category: 'X' })
    redirectHome({ type: 2, category: 'X' })
    process.env.PATH_PREFIX = ''
    redirectHome({ type: 1, category: 'Ahorro' })
    redirectHome({ type: 1, category: 'Cesantías' })
    redirectHome({ type: 1, category: 'Inversión' })
    redirectHome({ type: 1, category: 'Pensión' })
    redirectHome({ type: 1, category: 'X' })
    redirectHome({ type: 2, category: 'X' })
  })

  test('validationChangeHome', () => {
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Inversión'
        },
        statusTourguide: false
      },
      jest.fn(),
      {
        IsOpenMenu: false,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: true
      },
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        statusTourguide: true
      },
      jest.fn(),
      {
        IsOpenMenu: false,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: true
      },
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        statusTourguide: false
      },
      jest.fn(),
      {
        IsOpenMenu: false,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: true
      },
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: false
      },
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        statusTourguide: true
      },
      jest.fn(),
      {
        IsOpenMenu: false,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: true
      },
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    process.env.RESTRIGIR_REDIRECT = 'true'
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Inversión'
        },
        statusTourguide: false
      },
      jest.fn(),
      {
        IsOpenMenu: false,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: false
      },
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'Inversión'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Ahorro'
        },
        statusTourguide: false
      },
      jest.fn(),
      {
        IsOpenMenu: true,
        indexDBUser: {
          type: 2,
          host: 'localhost'
        },
        validateStreetCard: false
      },
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
    validationChangeHome(
      {
        perfilamiento: {
          categoria: 'X'
        },
        nameUser: {
          nameValue: 'name',
          typeUser: 'type'
        },
        statusTourguide: true
      },
      {
        perfilamiento: {
          categoria: 'Inversión'
        },
        statusTourguide: false
      },
      jest.fn(),
      {
        IsOpenMenu: true,
        indexDBUser: {
          type: 3,
          host: 'localhost'
        },
        validateStreetCard: false
      },
      jest.fn(),
      jest.fn(),
      jest.fn(),
      jest.fn()
    )
  })

  test('convertOldDataToNew', () => {
    convertOldDataToNew({
      node: {
        contenido: {
          titulo: '¡Estamos comprometidos con un futuro sostenible!',
          tipoContent: 'novedad',
          tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
          category: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            }
          ],
          imagen: {
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
            },
            file: {
              fileName:
                'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
            },
            description: '',
            title: 'futuros sostenibles'
          },
          categoriaCliente: 'categoriaCliente',
          type: [
            { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
          ],
          imagenpequena: {
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
            },
            file: {
              fileName:
                'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
            },
            description: '',
            title: 'futuros sostenibles'
          },
          nombreImagen: 'futuros sostenibles',
          tipoBite: 'novedad',
          link: 'novedad/futuro-sostenible',
          urlSeo: 'novedad/futuro-sostenible',
          relevancia: 'Relevancia Baja',
          updatedAt: '2021-02-08T16:32:31.340Z',
          generoEdad: null,
          descripcion:
            'El futuro sostenible lo hacemos conservando nuestros recursos',
          textoIntroductorio:
            'El futuro sostenible lo hacemos conservando nuestros recursos',
          textoBoton: 'Quiero conocer más',
          textoCallToActionBite: 'Quiero conocer más'
        }
      }
    })

    convertOldDataToNew({
      node: {
        contenido: {
          titulo: '¡Estamos comprometidos con un futuro sostenible!',
          tipoContent: 'novedad',
          tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
          category: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            }
          ],
          imagen: {
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
            },
            file: {
              fileName:
                'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
            },
            description: '',
            title: 'futuros sostenibles'
          },
          categoriaCliente: 'categoriaCliente',
          type: [
            { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
          ],
          imagenpequena: {
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
            },
            file: {
              fileName:
                'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
            },
            description: '',
            title: 'futuros sostenibles'
          },
          nombreImagen: 'futuros sostenibles',
          tipoBite: 'novedad',
          link: 'novedad/futuro-sostenible',
          urlSeo: 'novedad/futuro-sostenible',
          relevancia: 'Relevancia Baja',
          updatedAt: '2021-02-08T16:32:31.340Z',
          generoEdad: null,
          descripcion:
            'El futuro sostenible lo hacemos conservando nuestros recursos',
          textoBoton: 'Quiero conocer más'
        }
      }
    })

    convertOldDataToNew({ node: { contenido: null } })
  })

  test('generateCleanData', () => {
    generateCleanData([{ node: { contenido: null } }])
  })

  test('filterItems', () => {
    filterItems(
      ['categoria'],
      ['subCategory'],
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: [{ contentful_id: 'type' }],
          categoriaCliente: [{ contentful_id: 'subCategory' }]
        }
      ]
    )
    filterItems(
      ['categoria'],
      ['subCategory'],
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: [{ contentful_id: 'type' }],
          categoriaCliente: null
        }
      ]
    )
    filterItems(
      ['categoria'],
      ['subCategory'],
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: [{ contentful_id: 'type' }],
          categoriaCliente: []
        }
      ]
    )
    filterItems(
      ['categoria'],
      ['subCategory'],
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: null,
          categoriaCliente: [{ contentful_id: 'subCategory' }]
        }
      ]
    )
    filterItems(
      ['categoria'],
      null,
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: [{ contentful_id: 'type' }],
          categoriaCliente: [{ contentful_id: 'subCategory' }]
        }
      ]
    )
    filterItems(
      ['categoria'],
      null,
      ['type'],
      [
        {
          category: null,
          type: [{ contentful_id: 'type' }],
          categoriaCliente: [{ contentful_id: 'subCategory' }]
        }
      ]
    )
    filterItems(
      ['categoria'],
      null,
      ['type'],
      [
        {
          category: [{ contentful_id: 'categoria' }],
          type: null,
          categoriaCliente: [{ contentful_id: 'subCategory' }]
        }
      ]
    )
  })

  test('sortData', () => {
    sortData([{ updatedAt: 12332432342 }, { updatedAt: 2384234872 }])
  })

  test('setArrayCapania', () => {
    setArrayCapania([{ node: { contenido: null } }])
    setArrayCapania([{}])
    setArrayFeatured(
      [
        {
          node: {
            contenido: {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más'
            }
          }
        }
      ],
      'novedad'
    )
  })

  test('setArrayActualidad', () => {
    setArrayActualidad([
      {
        node: {
          titulo: 'Qué dice el experto',
          contentful_id: '2iSc262lfCDuc5XCafkl7K',
          urlSeo: 'inversiones/actualidad/el-experto-dice',
          updatedAt: '2020-12-10T14:40:58.480Z',
          tipoDeCliente: [
            {
              nombre: 'Afiliado',
              contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
            }
          ],
          categoriaCliente: [
            {
              descripcion: 'Estoy Aprendiendo',
              contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
            },
            {
              descripcion: 'Conozco de Inversiones',
              contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
            }
          ],
          lineaDeProducto: [
            {
              nombre: 'Inversión',
              contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
            }
          ],
          Tema: [
            {
              titulo: 'GENERICO INVERSIONES',
              contentful_id: '4JYXjOW5V5v8hrNyNI9x43'
            }
          ],
          contenidoCorporativo: {
            titulo: '¿En dónde estamos parados?',
            TituloCortoBite: '¿En dónde estamos parados? - Qué dice el experto',
            TextoCallToActionBite: 'Quiero conocer más',
            TextoIntroductorioBite:
              'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
            Relevancia: 'Relevancia Media',
            CuerpoContenido: {
              json: {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Juan Ignacio Medina Villar',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'heading-6'
                  }
                ],
                nodeType: 'document'
              }
            },
            descripcionCallToAction: {
              descripcionCallToAction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum magna et leo luctus congue.'
            },
            linkCallToAction: {
              linkCallToAction:
                'https://www.proteccion.com/contenidos/ahorro/afiliado/momento-de-ahorrar/'
            }
          },
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg',
              fileName: 'JPG-1.jpg'
            },
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg?w=800&q=50'
            },
            description: ''
          },
          descripcion: {
            id: 'f80df2b7-25dc-5521-874d-52e9ef1e463d',
            descripcion: 'Lorem'
          }
        }
      }
    ])

    setArrayActualidad([
      {
        node: {
          titulo: 'Qué dice el experto',
          contentful_id: '2iSc262lfCDuc5XCafkl7K',
          urlSeo: 'inversiones/actualidad/el-experto-dice',
          updatedAt: '2020-12-10T14:40:58.480Z',
          tipoDeCliente: [
            {
              nombre: 'Afiliado',
              contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
            }
          ],
          lineaDeProducto: [
            {
              nombre: 'Inversión',
              contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
            }
          ],
          Tema: [
            {
              titulo: 'GENERICO INVERSIONES',
              contentful_id: '4JYXjOW5V5v8hrNyNI9x43'
            }
          ],
          contenidoCorporativo: {
            titulo: '¿En dónde estamos parados?',
            TituloCortoBite: '¿En dónde estamos parados? - Qué dice el experto',
            TextoCallToActionBite: 'Quiero conocer más',
            TextoIntroductorioBite:
              'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
            Relevancia: 'Relevancia Media',
            CuerpoContenido: {
              json: {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Juan Ignacio Medina Villar',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'heading-6'
                  }
                ],
                nodeType: 'document'
              }
            },
            descripcionCallToAction: {
              descripcionCallToAction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum magna et leo luctus congue.'
            },
            linkCallToAction: {
              linkCallToAction:
                'https://www.proteccion.com/contenidos/ahorro/afiliado/momento-de-ahorrar/'
            }
          },
          imagen: {
            file: {
              url:
                '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg',
              fileName: 'JPG-1.jpg'
            },
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg?w=800&q=50'
            }
          },
          descripcion: {
            id: 'f80df2b7-25dc-5521-874d-52e9ef1e463d',
            descripcion: 'Lorem'
          }
        }
      }
    ])
  })

  test('setArrayProduct', () => {
    setArrayProduct([{ node: {} }])
    setArrayProduct([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            },
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: null,
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: 'as',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: null,
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            }
          ]
        }
      }
    ])
  })

  test('setArrayEducativo', () => {
    setArrayEducativo([{ node: {} }])
    setArrayEducativo([
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: 'd',
              title: 'futuros sostenibles'
            },
            categoriaCliente: 'categoriaCliente',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: 'novedad/futuro-sostenible',
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      },
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            categoriaCliente: '',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: 'sad',
              title: 'futuros sostenibles'
            },
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: null,
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      }
    ])
  })

  test('setArrayBites', () => {
    setArrayBites([{ node: {} }])
    setArrayBites([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            },
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: null,
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: 'as',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: null,
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            },
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: null,
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: null,
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: null,
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            },
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: null,
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: null,
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: null,
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            }
          ]
        }
      }
    ])
  })

  test('setArrayTalento', () => {
    setArrayTalento([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            }
          ]
        }
      }
    ])
    setArrayTalento([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: null,
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            },
            setArrayTalento([
              {
                node: {
                  contenido: [
                    {
                      titulo:
                        '¡Estamos comprometidos con un futuro sostenible!',
                      tipoContent: 'novedad',
                      tituloCorto:
                        '¡Estamos comprometidos con un futuro sostenible!',
                      category: [
                        {
                          nombre: 'Cesantías',
                          contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                        },
                        {
                          nombre: 'Inversión',
                          contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                        },
                        {
                          nombre: 'Pensiones Obligatorias',
                          contentful_id: '45FVyiIWU70wBqFgR750SE'
                        }
                      ],
                      imagen: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                        },
                        file: {
                          fileName:
                            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                        },
                        description: '',
                        title: 'futuros sostenibles'
                      },
                      categoriaCliente: 'categoriaCliente',
                      type: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ],
                      imagenpequena: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                        },
                        file: {
                          fileName:
                            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                        },
                        description: '',
                        title: 'futuros sostenibles'
                      },
                      nombreImagen: 'futuros sostenibles',
                      tipoBite: 'novedad',
                      link: 'novedad/futuro-sostenible',
                      urlSeo: 'novedad/futuro-sostenible',
                      relevancia: 'Relevancia Baja',
                      updatedAt: '2021-02-08T16:32:31.340Z',
                      generoEdad: null,
                      descripcion:
                        'El futuro sostenible lo hacemos conservando nuestros recursos',
                      textoIntroductorio:
                        'El futuro sostenible lo hacemos conservando nuestros recursos',
                      textoBoton: 'Quiero conocer más',
                      textoCallToActionBite: 'Quiero conocer más'
                    }
                  ]
                }
              }
            ])
          ]
        }
      }
    ])
    setArrayTalento([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: 'asdas',
                title: 'futuros sostenibles'
              },
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: null,
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            }
          ]
        }
      }
    ])
    setArrayTalento([
      {
        node: {
          contenido: [
            {
              titulo: '¡Estamos comprometidos con un futuro sostenible!',
              tipoContent: 'novedad',
              tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
              category: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              imagen: {
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                },
                file: {
                  fileName:
                    'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                },
                description: '',
                title: 'futuros sostenibles'
              },
              categoriaCliente: 'categoriaCliente',
              type: [
                { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
              ],
              imagenpequena: null,
              nombreImagen: 'futuros sostenibles',
              tipoBite: 'novedad',
              link: 'novedad/futuro-sostenible',
              urlSeo: 'novedad/futuro-sostenible',
              relevancia: 'Relevancia Baja',
              updatedAt: '2021-02-08T16:32:31.340Z',
              generoEdad: null,
              descripcion:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoIntroductorio:
                'El futuro sostenible lo hacemos conservando nuestros recursos',
              textoBoton: 'Quiero conocer más',
              textoCallToActionBite: 'Quiero conocer más'
            }
          ]
        }
      }
    ])
    setArrayTalento([
      {
        node: {
          contenido: []
        }
      }
    ])
  })

  test('setArrayMarketplace', () => {
    setArrayMarketplace([
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: 'd',
              title: 'futuros sostenibles'
            },
            categoriaCliente: 'categoriaCliente',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: 'novedad/futuro-sostenible',
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      },
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            categoriaCliente: '',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: 'sad',
              title: 'futuros sostenibles'
            },
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: null,
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      },
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            categoriaCliente: '',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: null,
              title: 'futuros sostenibles'
            },
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: null,
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      },
      {
        node: {
          contenido: {
            titulo: '¡Estamos comprometidos con un futuro sostenible!',
            tipoContent: 'novedad',
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            category: [
              {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              },
              {
                nombre: 'Inversión',
                contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
              },
              {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            ],
            imagen: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: 'futuros sostenibles'
            },
            categoriaCliente: '',
            type: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            imagenpequena: null,
            nombreImagen: 'futuros sostenibles',
            tipoBite: 'novedad',
            link: 'novedad/futuro-sostenible',
            urlSeo: null,
            relevancia: 'Relevancia Baja',
            updatedAt: '2021-02-08T16:32:31.340Z',
            generoEdad: null,
            descripcion:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoIntroductorio:
              'El futuro sostenible lo hacemos conservando nuestros recursos',
            textoBoton: 'Quiero conocer más',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      }
    ])
    setArrayMarketplace([
      {
        node: {
          contenido: null
        }
      }
    ])
  })
})

test('array data null 1', () => {
  const dataFilter = [
    {
      titulo: '¡Estamos comprometidos con un futuro sostenible!',
      tipoContent: 'novedad',
      tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
        },
        file: {
          fileName:
            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
        },
        description: '',
        title: 'futuros sostenibles'
      },
      categoriaCliente: null,
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
        },
        file: {
          fileName:
            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
        },
        description: '',
        title: 'futuros sostenibles'
      },
      nombreImagen: 'futuros sostenibles',
      tipoBite: 'novedad',
      link: 'novedad/futuro-sostenible',
      urlSeo: 'novedad/futuro-sostenible',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-08T16:32:31.340Z',
      generoEdad: null,
      descripcion:
        'El futuro sostenible lo hacemos conservando nuestros recursos',
      textoIntroductorio:
        'El futuro sostenible lo hacemos conservando nuestros recursos',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
      tipoContent: 'novedad',
      tituloCorto:
        'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
        },
        description:
          'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
        title: '2021 nueva oportunidad para cumplir propósitos'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
        },
        description:
          'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
        title: '2021 nueva oportunidad para cumplir propósitos'
      },
      nombreImagen:
        'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
      tipoBite: 'novedad',
      link: 'ahorro/cumplir-propositos',
      urlSeo: 'ahorro/cumplir-propositos',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-19T18:48:43.563Z',
      generoEdad: null,
      descripcion:
        'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
      textoIntroductorio:
        'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Comprar vivienda y conocer todos los subsidios',
      tipoContent: 'novedad',
      tituloCorto: 'Comprar vivienda y conocer todos los subsidios',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        },
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'Comprar vivienda y conocer todos los subsidios.jpeg'
        },
        description:
          'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
        title: '¿Cómo comprar vivienda y descubrir todos los subsidios?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'Comprar vivienda y conocer todos los subsidios.jpeg'
        },
        description:
          'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
        title: '¿Cómo comprar vivienda y descubrir todos los subsidios?'
      },
      nombreImagen:
        'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
      tipoBite: 'novedad',
      link: 'ahorro-beneficio-vivienda',
      urlSeo: 'ahorro-beneficio-vivienda',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-15T20:46:23.720Z',
      generoEdad: null,
      descripcion: '¡Alcanzar tu sueño de tener casa propia sí es posible!',
      textoIntroductorio:
        '¡Alcanzar tu sueño de tener casa propia sí es posible!',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Por qué es importante conocer tu historial de crédito?',
      tipoContent: 'novedad',
      tituloCorto: '¿Por qué es importante conocer tu historial de crédito?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/VGwvTpstKw9I7ouGfCNqF/af06bf0efab234c5cc46b727d8fddaf5/embanca_articulo_historial_credito.PNG?w=800&q=50'
        },
        file: { fileName: 'embanca articulo historial credito.PNG' },
        description: '',
        title: 'embanca articulo historial credito'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/VGwvTpstKw9I7ouGfCNqF/af06bf0efab234c5cc46b727d8fddaf5/embanca_articulo_historial_credito.PNG?w=800&q=50'
        },
        file: { fileName: 'embanca articulo historial credito.PNG' },
        description: '',
        title: 'embanca articulo historial credito'
      },
      nombreImagen: 'embanca articulo historial credito',
      tipoBite: 'novedad',
      link: 'ahorro/historial-crediticio',
      urlSeo: 'ahorro/historial-crediticio',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-15T20:44:10.564Z',
      generoEdad: null,
      descripcion:
        '¿Quieres conocer tu historial de crédito y saber cómo te están viendo los bancos?',
      textoIntroductorio:
        '¿Quieres conocer tu historial de crédito y saber cómo te están viendo los bancos?',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Pasar de la preocupación a la acción',
      tipoContent: 'novedad',
      tituloCorto: 'Pasar de la preocupación a la acción',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg'
        },
        description:
          'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
        title:
          'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg'
        },
        description:
          'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
        title:
          'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
      },
      nombreImagen:
        'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
      tipoBite: 'novedad',
      link: 'ahorro-afiliado-preoupacionalaaccion',
      urlSeo: 'ahorro-afiliado-preoupacionalaaccion',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-12-09T21:00:08.103Z',
      generoEdad: null,
      descripcion:
        'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
      textoIntroductorio:
        'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
      tipoContent: 'novedad',
      tituloCorto:
        '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
        },
        description:
          'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
        title: '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
        },
        description:
          'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
        title: '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
      },
      nombreImagen:
        'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
      tipoBite: 'novedad',
      link: 'ahorro/tasas-de-interes',
      urlSeo: 'ahorro/tasas-de-interes',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-10T15:23:41.712Z',
      generoEdad: null,
      descripcion:
        'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
      textoIntroductorio:
        'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Finanzas para la educación de tus hijos',
      tipoContent: 'novedad',
      tituloCorto: 'Finanzas para la educación de tus hijos',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
        },
        file: { fileName: 'Finanzas para la educación de tus hijos.png' },
        description: '',
        title: 'Finanzas para la educación de tus hijos'
      },
      categoriaCliente: [
        { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
        },
        file: { fileName: 'Finanzas para la educación de tus hijos.png' },
        description: '',
        title: 'Finanzas para la educación de tus hijos'
      },
      nombreImagen: 'Finanzas para la educación de tus hijos',
      tipoBite: 'novedad',
      link: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
      urlSeo: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-10-28T19:35:46.702Z',
      generoEdad: null,
      descripcion: '¡Conoce aquí 3 formas de organizar tus finanzas! ',
      textoIntroductorio: '¡Conoce aquí 3 formas de organizar tus finanzas! ',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Estoy cumpliendo mi objetivo personal?',
      tipoContent: 'novedad',
      tituloCorto: '¿Estoy cumpliendo mi objetivo personal?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
        },
        file: {
          fileName: '3 Por qué no estoy cumpliendo mi objetivo personal.png'
        },
        description: '',
        title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
        },
        file: {
          fileName: '3 Por qué no estoy cumpliendo mi objetivo personal.png'
        },
        description: '',
        title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
      },
      nombreImagen: '¿Por qué no estoy cumpliendo mi objetivo personal?',
      tipoBite: 'novedad',
      link: 'ahorro/personas/objetivo-personal',
      urlSeo: 'ahorro/personas/objetivo-personal',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-10-28T19:42:47.859Z',
      generoEdad: null,
      descripcion:
        'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
      textoIntroductorio:
        'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Un viaje por la cultura del ahorro',
      tipoContent: 'novedad',
      tituloCorto: 'Un viaje por la cultura del ahorro',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
        },
        file: { fileName: '1 Un viaje por la cultura del ahorro.png' },
        description: '',
        title: 'Un viaje por la cultura del ahorro'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
        },
        file: { fileName: '1 Un viaje por la cultura del ahorro.png' },
        description: '',
        title: 'Un viaje por la cultura del ahorro'
      },
      nombreImagen: 'Un viaje por la cultura del ahorro',
      tipoBite: 'novedad',
      link: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
      urlSeo: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-01-06T20:58:10.844Z',
      generoEdad: null,
      descripcion:
        'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
      textoIntroductorio:
        'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Inteligencia Artificial para las compañías',
      tipoContent: 'novedad',
      tituloCorto: 'Inteligencia Artificial para las compañías',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2FCvrApgz9ZKGHQrDV2jkV/bfca8de965e8934c558a1b97d6ea1fb3/Inteligencia_Artificial_para_las_compa____as_GettyImages-960890176.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Inteligencia Artificial para las compañías GettyImages-960890176.jpeg'
        },
        description:
          'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
        title: 'Inteligencia artificial a la medida de todas las compañías'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2FCvrApgz9ZKGHQrDV2jkV/bfca8de965e8934c558a1b97d6ea1fb3/Inteligencia_Artificial_para_las_compa____as_GettyImages-960890176.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Inteligencia Artificial para las compañías GettyImages-960890176.jpeg'
        },
        description:
          'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
        title: 'Inteligencia artificial a la medida de todas las compañías'
      },
      nombreImagen:
        'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
      tipoBite: 'novedad',
      link: 'empresas-novedades-inteligencia',
      urlSeo: 'empresas-novedades-inteligencia',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-20T15:37:37.565Z',
      generoEdad: null,
      descripcion:
        'Este factor de competitividad no sólo es para grandes empresas',
      textoIntroductorio:
        'Este factor de competitividad no sólo es para grandes empresas',
      textoBoton: 'Quiero saber más',
      textoCallToActionBite: 'Quiero saber más'
    },
    {
      titulo: 'El doble reto de liderar durante el cambio',
      tipoContent: 'novedad',
      tituloCorto: 'El doble reto de liderar durante el cambio',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        },
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6FYod4xNtJzykqmDBoGh6c/6f4c0dc80a3cf9cadc11d093e0959f9f/El_doble_reto_de_liderar_durante_el_cambioGettyImages-1080558212.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'El doble reto de liderar durante el cambioGettyImages-1080558212.jpeg'
        },
        description:
          'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
        title: 'El doble reto de liderar durante tiempos de cambio'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6FYod4xNtJzykqmDBoGh6c/6f4c0dc80a3cf9cadc11d093e0959f9f/El_doble_reto_de_liderar_durante_el_cambioGettyImages-1080558212.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'El doble reto de liderar durante el cambioGettyImages-1080558212.jpeg'
        },
        description:
          'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
        title: 'El doble reto de liderar durante tiempos de cambio'
      },
      nombreImagen:
        'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
      tipoBite: 'novedad',
      link: 'empresas-ahorro-doble-reto',
      urlSeo: 'empresas-ahorro-doble-reto',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-20T15:36:25.317Z',
      generoEdad: null,
      descripcion:
        'Tips para acompañar a tu equipo de trabajo desde la virtualidad',
      textoIntroductorio:
        'Tips para acompañar a tu equipo de trabajo desde la virtualidad',
      textoBoton: 'Quiero conocerlos',
      textoCallToActionBite: 'Quiero conocerlos'
    },
    {
      titulo: 'La transformación de la contratación',
      tipoContent: 'novedad',
      tituloCorto: 'La transformación de la contratación',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4KYSlxEopkSuleWaXHAdY/f6978fb8ac05a3cd58d6b175a1ddfc4e/La_transformacion_de_la_contratacion_GettyImages-1183066519.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'La transformacion de la contratacion GettyImages-1183066519.jpeg'
        },
        description:
          'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
        title: 'La transformación de la contratación'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4KYSlxEopkSuleWaXHAdY/f6978fb8ac05a3cd58d6b175a1ddfc4e/La_transformacion_de_la_contratacion_GettyImages-1183066519.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'La transformacion de la contratacion GettyImages-1183066519.jpeg'
        },
        description:
          'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
        title: 'La transformación de la contratación'
      },
      nombreImagen:
        'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
      tipoBite: 'novedad',
      link: 'ahorro/empresas/transformacion-procesos-de-seleccion',
      urlSeo: 'ahorro/empresas/transformacion-procesos-de-seleccion',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-01-06T21:06:11.675Z',
      generoEdad: null,
      descripcion:
        '¿Sabes cómo ha cambiado la contratación en la última década? ',
      textoIntroductorio:
        '¿Sabes cómo ha cambiado la contratación en la última década? ',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Qué talento requiero atraer hoy?',
      tipoContent: 'novedad',
      tituloCorto: '¿Qué talento requiero atraer hoy?',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4UQo782xNw0Yvk1DatxDZm/6ea1786455cca6ba30f6c74d8fa5ec28/Qu___talento_requiero_a_traer_hoy_GettyImages-600580231.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Qué talento requiero a traer hoy GettyImages-600580231.jpeg'
        },
        description:
          'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
        title: '¿Qué talento requiero atraer hoy para impactar el mañana?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4UQo782xNw0Yvk1DatxDZm/6ea1786455cca6ba30f6c74d8fa5ec28/Qu___talento_requiero_a_traer_hoy_GettyImages-600580231.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Qué talento requiero a traer hoy GettyImages-600580231.jpeg'
        },
        description:
          'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
        title: '¿Qué talento requiero atraer hoy para impactar el mañana?'
      },
      nombreImagen:
        'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
      tipoBite: 'novedad',
      link: 'ahorro/empresas/el-mejor-talento',
      urlSeo: 'ahorro/empresas/el-mejor-talento',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-19T19:03:38.893Z',
      generoEdad: null,
      descripcion:
        'Hay 5 características básicas que marcarán criterios de selección',
      textoIntroductorio:
        'Hay 5 características básicas que marcarán criterios de selección',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Ejemplo contenido pensiones NOVEDAD',
      tipoContent: 'novedad',
      tituloCorto: 'Ejemplo contenido pensiones NOVEDAD',
      category: [
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
        },
        file: { fileName: 'JPG-1.jpg' },
        description: '',
        title: 'que son y como leerlos'
      },
      categoriaCliente: [
        {
          descripcion: 'Pensión por vejez',
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
        },
        file: { fileName: 'JPG-1.jpg' },
        description: '',
        title: 'que son y como leerlos'
      },
      nombreImagen: 'que son y como leerlos',
      tipoBite: 'novedad',
      link: 'mitos-realidades',
      urlSeo: 'mitos-realidades',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-03-16T21:17:25.078Z',
      generoEdad: null,
      descripcion:
        'Estar bien informado te permitirá tomar las mejores decisiones',
      textoIntroductorio:
        'Estar bien informado te permitirá tomar las mejores decisiones',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    }
  ]

  filterItems(
    'W2zNnmbYol9hf1OXMVGgR,7pUsqgXajww2lAjS8Z8Ult',
    '2L498woyc1TQ1A3SpyUpxA',
    '3XCf8zuzh5bGWNcuvFBuwx',
    dataFilter
  )

  filterItems(
    'W2zNnmbYol9hf1OXMVGgR,7pUsqgXajww2lAjS8Z8Ult',
    null,
    '3XCf8zuzh5bGWNcuvFBuwx',
    dataFilter
  )

  generateCleanData(
    [
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                tituloCorto: 'Acompañamiento'
              }
            ],
            urlSeo: 'empresas/oferta-proteccion',
            edadygenero: null,
            contentful_id: '63dP1HNCS9VGft1DuCbbPd',
            relevancia: 'Relevancia Alta',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/M6LMYIG5oUiF5KB4wQxSk/c87838d73b7fd2da7f03fe4695e9d08a/Oferta_para_Empresas_FALTA_GettyImages-651424163.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Oferta para Empresas FALTA GettyImages-651424163.jpeg'
              },
              description:
                'Grupo de personas conversando en la sala de ventas acerca de los beneficios que Protección tiene para las empresas y sus colaboradores',
              title: 'Oferta Protección para las empresas y sus colaboradores'
            },
            tituloCorto:
              '¡Conoce la oferta que tenemos para tu empresa en Protección!',
            updatedAt: '2021-01-25T21:55:15.710Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
            textoCallToAction: 'Conoce más',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                tituloCorto: 'Vivienda'
              },
              {
                contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                tituloCorto: 'Vivienda'
              }
            ],
            urlSeo: 'novedad/vecindario-proteccion',
            edadygenero: null,
            contentful_id: '3idU9aEVdgtfAmNIgyFBWM',
            relevancia: 'Relevancia Alta',
            categoriaCliente: [
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              },
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              },
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              },
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              },
              {
                descripcion: 'Pensión por vejez',
                contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
              },
              {
                descripcion: 'Soy pensionado',
                contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/3EtXtUgNPIkwgPNL2zlAjA/97ece28f40afb4a4547577b3cd79dadb/imagen_vecindario.png?w=800&q=50'
              },
              file: { fileName: 'imagen vecindario.png' },
              description: 'Haz realidad tu sueño de tener casa propia',
              title: 'Alianza Vecindario - Protección '
            },
            tituloCorto: 'Con Vecindario, tener casa propia sí es posible.',
            updatedAt: '2021-02-15T20:40:41.632Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Empieza HOY a proyectar tus sueños de vivienda',
            textoCallToAction: 'Ir a Vecindario',
            tipoDeCliente: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              '¡Tener tu ahorro en Protección ahora te permite disfrutar de nuestra alianza con Vecindario para hacer realidad ese sueño de tener casa propia!',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                tituloCorto: 'Vivienda'
              }
            ],
            urlSeo: 'ahorro/beneficio-alianza-casas-con-descuentos',
            edadygenero: null,
            contentful_id: '6RmCigcRK5cXT5V3QLjyT7',
            relevancia: 'Relevancia Alta',
            categoriaCliente: [
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              },
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              },
              {
                descripcion: 'Pensión por vejez',
                contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
              },
              {
                descripcion: 'Soy pensionado',
                contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/28gxMJQ5RwaE0Iat2VPH4z/df1b36a6ffa132f1b8cc027433fb7f77/Conoce_nuestra_nueva_alianza_1093907274.jpeg?w=800&q=50'
              },
              file: {
                fileName: 'Conoce nuestra nueva alianza 1093907274.jpeg'
              },
              description:
                'Familia reunida en la sala de su nueva casa. Recibieron descuentos por estar afiliados a Protección',
              title:
                'Nueva Alianza: "Vendemos Casas con Descuento" y Protección'
            },
            tituloCorto:
              '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
            updatedAt: '2020-12-30T16:19:58.194Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Conoce "Vendemos Casas con Descuento", el primer Outlet de vivienda en Colombia.',
            textoCallToAction: 'Quiero conocer más',
            tipoDeCliente: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              '“Vendemos Casas con Descuento” es el primer Outlet de vivienda en Colombia. En Protección queremos acompañarte para que tomes el control de tus finanzas y cumplas tus metas, por eso creamos una alianza especial.',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                tituloCorto: 'Vivienda'
              },
              {
                contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                tituloCorto: 'Vivienda'
              }
            ],
            urlSeo: 'ahorro/haz-realidad-tu-sueno-de-tener-vivienda-propia',
            edadygenero: null,
            contentful_id: '3UrKTreATDqyTlCMpu69AP',
            relevancia: 'Relevancia Baja',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/12sFWbODzAkd5peNLUKkr7/3caf1ed89b59974844878967c37b1d99/Haz_realidad_tu_sue__o_de_tener_vivienda_propia_GettyImages-638711690.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Haz realidad tu sueño de tener vivienda propia GettyImages-638711690.jpeg'
              },
              description:
                'Pareja sonríe en su nueva casa, posible gracias a que establecieron un plan de ahorro',
              title: 'Haz realidad tu sueño de tener casa propia'
            },
            tituloCorto: 'Haz realidad tu sueño de tener vivienda propia',
            updatedAt: '2021-02-15T20:37:27.429Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Con nuestros aliados y productos, conoce cómo puedes lograrlo',
            textoCallToAction: 'Ir a Vecindario.com',
            tipoDeCliente: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'Tener casa propia es uno de los grandes sueños de muchas personas. ¡Y una poderosa motivación para tomar el control de tus finanzas!',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '6QSO0SouYnUllWRWOubCZR',
                tituloCorto: 'Canales Retiro'
              }
            ],
            urlSeo: 'cesantias/por-que-estar-proteccion',
            edadygenero: null,
            contentful_id: '4SFZQxJCVrRBME6lLqdVSW',
            relevancia: 'Relevancia Alta',
            categoriaCliente: [
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              },
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              },
              {
                descripcion: 'Pensión por invalidez',
                contentful_id: '7lDDi92WQvINHDoyppiGG1'
              },
              {
                descripcion: 'Pensión por sobrevivencia',
                contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
              },
              {
                descripcion: 'Pensión por vejez',
                contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
              },
              {
                descripcion: 'Soy pensionado',
                contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/2uwLOKJVxyW69MVIqzFRGg/042f924d50368b449627e1b9d7818a77/CT1C4-Todos-los-pu__blicos_Cesanti__as_Por-que__-Proteccio__n-AJUSTADO.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT1C4-Todos-los-públicos_Cesantías_Por-qué-Protección-AJUSTADO.jpeg'
              },
              description:
                'Madre feliz con su hija sentadas en la sala aprenden sobre cesantías',
              title: 'Todos los públicos aprenden sobre qué son las cesantías'
            },
            tituloCorto: '¿Por qué estar en Protección?',
            updatedAt: '2020-09-24T15:59:09.250Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Acompañamos a millones de clientes en el logro de sus sueños',
            textoCallToAction: '¡Quiero afiliarme!',
            tipoDeCliente: [
              { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
            ],
            descripcioncorta:
              'En Protección, queremos acompañarte y queremos ser tu aliado para que hagas realidad tus sueños.',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                tituloCorto: 'Acompañamiento'
              },
              {
                contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                tituloCorto: 'Acompañamiento'
              }
            ],
            urlSeo: 'empresas-transveral-lineas',
            edadygenero: null,
            contentful_id: 'GbttKYqTGRTVZGMnbn3kY',
            relevancia: 'Relevancia Baja',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/6IpW5GZQ1YR7yx9ZqbSZhe/de29fd9d22540d1de06823938f2e85cb/Linea_de_servicio_para_empleadores_proteccion_GettyImages-1086104606.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Linea de servicio para empleadores proteccion GettyImages-1086104606.jpeg'
              },
              description:
                'Diseñadora en su taller de costura, recibe asesoría sobre tener las cesantías para empresas en Protección',
              title: 'Línea de Servicio para Empleadores Protección'
            },
            tituloCorto: 'Línea de Servicio para Empleadores Protección',
            updatedAt: '2021-01-06T21:02:17.459Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Canal que te facilita la consulta de información y gestión',
            textoCallToAction: 'Quiero conocerlos',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'En Protección queremos estar más cerca de ti y de tu empresa, para brindarte el acompañamiento que necesitas y así resolver todas tus dudas.',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                tituloCorto: 'Acompañamiento'
              },
              {
                contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                tituloCorto: 'Acompañamiento'
              }
            ],
            urlSeo:
              'empresas/oferta-canales-de-servicio-para-tus-colaboradores',
            edadygenero: null,
            contentful_id: '1sZQrmIgXQoqjbUHuTCcdU',
            relevancia: 'Relevancia Baja',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4s1e0fL73w7QEuvO7hLHmI/8320b6c99c0a9209ecd582c44af121bd/Oferta_en_canales_de_atenci__n_para_tus_empleados_GettyImages-497544516.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Oferta en canales de atención para tus empleados GettyImages-497544516.jpeg'
              },
              description:
                'Técnico revisa material reciclable de su empresa, tiene sus cesantías en Protección',
              title: 'Oferta en canales de atención para tus colaboradores '
            },
            tituloCorto: 'Oferta en canales de atención para tus empleados',
            updatedAt: '2020-11-20T15:47:20.547Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Acompañamos a tus colaboradores a través de facilidad operativa',
            textoCallToAction: 'Quiero conocer más',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'Acompañamos a tus colaboradores a través de asesoría y facilidad operativa por medio de diferentes canales',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                tituloCorto: 'Beneficios'
              }
            ],
            urlSeo: 'empresas/acompanamiento-empleador',
            edadygenero: null,
            contentful_id: '1ICpTNPSI2R0F3JgjRN5JE',
            relevancia: 'Relevancia Baja',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/32PTmQgomdmGi63Jtzbqmx/e6a8f29aa0f9b47a1184b7e48228cf71/Acompa__amiento_para_tu_como_empleador_GettyImages-696553274.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Acompañamiento para tu como empleador GettyImages-696553274.jpeg'
              },
              description:
                'Mujer habla por celular en su oficina, recibe asesoría para tener sus cesantías en Protección',
              title: 'Acompañamiento para ti como empleador'
            },
            tituloCorto: 'Acompañamiento para ti como empleador',
            updatedAt: '2020-10-28T19:38:19.187Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Te acompañamos a través de diferentes canales. ¡Conócelos!',
            textoCallToAction: 'Quiero conocer más',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'En Protección te acompañamos, a través de asesoría y facilidad operativa, por medio de diferentes canales que se adecuan a tus necesidades y preferencias.',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                tituloCorto: 'Acompañamiento'
              },
              {
                contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                tituloCorto: 'Acompañamiento'
              }
            ],
            urlSeo: 'empresas/acompanamos-a-tus-colaboradores',
            edadygenero: null,
            contentful_id: '6g6bVUXQfWmDHsFCTJE1oh',
            relevancia: 'Relevancia Alta',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4071VrOBRRG0kDGrQ05Moo/b54a45e7f9b294c05850cb77668e1970/Acompa__amos_a_tus_colaboradores_segun_sus_metas_GettyImages-973096490.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Acompañamos a tus colaboradores segun sus metas GettyImages-973096490.jpeg'
              },
              description:
                'Hombre sonríe en su negocio, sostiene una tablet donde se informa de las cesantías en Protección',
              title: 'Acompañamos a tus colaboradores según su momento de vida'
            },
            tituloCorto: 'Acompañamos a tus colaboradores según sus metas',
            updatedAt: '2021-02-16T19:46:06.341Z',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Contamos con una gran oferta para tu equipo de trabajo ¡Conócela!',
            textoCallToAction: 'Quiero conocer más',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'En Protección diseñamos una oferta de herramientas, beneficios, programas de formación y soluciones, según el momento de vida y las necesidades de tus colaboradores. ¡Conócelas!',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '2tdNwtoxba1KzfELIhHS86',
                tituloCorto: 'Novedades'
              },
              {
                contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                tituloCorto: 'Novedades y Beneficios'
              }
            ],
            urlSeo: 'empresas-beneficios-universidad',
            edadygenero: null,
            contentful_id: '4LVWRKXz2tO8hinOrqo70U',
            relevancia: 'Relevancia Alta',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/3bSUAFignYoFCLXOoz9JCU/460f3da3bfa6d262fcdbd70f8b613147/Impulsa_tu_negocio_con_universidad_proteccion_GettyImages-603314684.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Impulsa tu negocio con universidad proteccion GettyImages-603314684.jpeg'
              },
              description:
                'Mujer sonríe en su mesa de trabajo, atrás sus compañeros revisan extractos de cesantías en el computador',
              title:
                'Impulsa el crecimiento de tu negocio con Universidad Protección'
            },
            tituloCorto: 'Impulsa tu negocio con Universidad Protección',
            updatedAt: '2020-11-20T15:36:45.907Z',
            textoCallToActionBite: 'Quiero saber más',
            textoIntroductorio:
              'Te acompañamos con cursos prácticos y cápsulas de educación',
            textoCallToAction: 'Quiero conocer la oferta',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'Queremos acompañarte en el crecimiento de tu empresa, por eso te entregamos contenidos, cursos prácticos y cápsulas de educación en Universidad Protección, nuestra plataforma de formación para ti y tus colaboradores. ¡Conócela!',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      },
      {
        node: {
          lineadenegocio: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            }
          ],
          contenido: {
            Tema: [
              {
                contentful_id: '2tdNwtoxba1KzfELIhHS86',
                tituloCorto: 'Novedades'
              },
              {
                contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                tituloCorto: 'Novedades y Beneficios'
              }
            ],
            urlSeo: 'empresas-novedades-alianza',
            edadygenero: null,
            contentful_id: '7c7uXwjjUMPvG2EFJDU7ZD',
            relevancia: 'Relevancia Baja',
            categoriaCliente: null,
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/J7WWUfZ0lCPuW4Xf7Ih0M/7c64a847bad6b9f78f7c96c4f247966e/Alianza_con_crehana_y_acamica_GettyImages-586970651.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Alianza con crehana y acamica GettyImages-586970651.jpeg'
              },
              description:
                'Mujer en junta con su compañero de trabajo, revisan las ventajas de tener las cesantías en Protección',
              title:
                'Nos unimos con Crehana y Acámica para impulsar el desarrollo de tus colaboradores y tu empresa'
            },
            tituloCorto: 'Alianza con Crehana y Acámica para tu empresa',
            updatedAt: '2021-01-08T16:04:15.221Z',
            textoCallToActionBite: 'Quiero saber más',
            textoIntroductorio:
              'Aprovecha estas dos plataformas de aprendizaje 100% virtual',
            textoCallToAction: 'Ir a conocer más',
            tipoDeCliente: [
              { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
            ],
            descripcioncorta:
              'Crehana y Acámica, son dos plataformas de aprendizaje 100% virtual, en español y con certificado de asistencia. ',
            tipoBite: 'beneficio',
            tipoContent: 'beneficio'
          }
        }
      }
    ],
    'Relevancia Baja'
  )

  const dataPorps = [
    {
      titulo: '¡Estamos comprometidos con un futuro sostenible!',
      tipoContent: 'novedad',
      tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
        },
        file: {
          fileName:
            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
        },
        description: '',
        title: 'futuros sostenibles'
      },
      categoriaCliente: [
        { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
        { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
        {
          descripcion: 'Independiente',
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
        },
        file: {
          fileName:
            'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
        },
        description: '',
        title: 'futuros sostenibles'
      },
      nombreImagen: 'futuros sostenibles',
      tipoBite: 'novedad',
      link: 'novedad/futuro-sostenible',
      urlSeo: 'novedad/futuro-sostenible',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-08T16:32:31.340Z',
      generoEdad: null,
      descripcion:
        'El futuro sostenible lo hacemos conservando nuestros recursos',
      textoIntroductorio:
        'El futuro sostenible lo hacemos conservando nuestros recursos',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
      tipoContent: 'novedad',
      tituloCorto:
        'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
        },
        description:
          'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
        title: '2021 nueva oportunidad para cumplir propósitos'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
        },
        description:
          'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
        title: '2021 nueva oportunidad para cumplir propósitos'
      },
      nombreImagen:
        'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
      tipoBite: 'novedad',
      link: 'ahorro/cumplir-propositos',
      urlSeo: 'ahorro/cumplir-propositos',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-19T18:48:43.563Z',
      generoEdad: null,
      descripcion:
        'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
      textoIntroductorio:
        'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Comprar vivienda y conocer todos los subsidios',
      tipoContent: 'novedad',
      tituloCorto: 'Comprar vivienda y conocer todos los subsidios',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        },
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'Comprar vivienda y conocer todos los subsidios.jpeg'
        },
        description:
          'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
        title: '¿Cómo comprar vivienda y descubrir todos los subsidios?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'Comprar vivienda y conocer todos los subsidios.jpeg'
        },
        description:
          'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
        title: '¿Cómo comprar vivienda y descubrir todos los subsidios?'
      },
      nombreImagen:
        'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
      tipoBite: 'novedad',
      link: 'ahorro-beneficio-vivienda',
      urlSeo: 'ahorro-beneficio-vivienda',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-15T20:46:23.720Z',
      generoEdad: null,
      descripcion: '¡Alcanzar tu sueño de tener casa propia sí es posible!',
      textoIntroductorio:
        '¡Alcanzar tu sueño de tener casa propia sí es posible!',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Por qué es importante conocer tu historial de crédito?',
      tipoContent: 'novedad',
      tituloCorto: '¿Por qué es importante conocer tu historial de crédito?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/VGwvTpstKw9I7ouGfCNqF/af06bf0efab234c5cc46b727d8fddaf5/embanca_articulo_historial_credito.PNG?w=800&q=50'
        },
        file: { fileName: 'embanca articulo historial credito.PNG' },
        description: '',
        title: 'embanca articulo historial credito'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/VGwvTpstKw9I7ouGfCNqF/af06bf0efab234c5cc46b727d8fddaf5/embanca_articulo_historial_credito.PNG?w=800&q=50'
        },
        file: { fileName: 'embanca articulo historial credito.PNG' },
        description: '',
        title: 'embanca articulo historial credito'
      },
      nombreImagen: 'embanca articulo historial credito',
      tipoBite: 'novedad',
      link: 'ahorro/historial-crediticio',
      urlSeo: 'ahorro/historial-crediticio',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-15T20:44:10.564Z',
      generoEdad: null,
      descripcion:
        '¿Quieres conocer tu historial de crédito y saber cómo te están viendo los bancos?',
      textoIntroductorio:
        '¿Quieres conocer tu historial de crédito y saber cómo te están viendo los bancos?',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Pasar de la preocupación a la acción',
      tipoContent: 'novedad',
      tituloCorto: 'Pasar de la preocupación a la acción',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg'
        },
        description:
          'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
        title:
          'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
        },
        file: {
          fileName: 'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg'
        },
        description:
          'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
        title:
          'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
      },
      nombreImagen:
        'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
      tipoBite: 'novedad',
      link: 'ahorro-afiliado-preoupacionalaaccion',
      urlSeo: 'ahorro-afiliado-preoupacionalaaccion',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-12-09T21:00:08.103Z',
      generoEdad: null,
      descripcion:
        'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
      textoIntroductorio:
        'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
      tipoContent: 'novedad',
      tituloCorto:
        '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
        },
        description:
          'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
        title: '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
        },
        description:
          'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
        title: '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
      },
      nombreImagen:
        'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
      tipoBite: 'novedad',
      link: 'ahorro/tasas-de-interes',
      urlSeo: 'ahorro/tasas-de-interes',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-10T15:23:41.712Z',
      generoEdad: null,
      descripcion:
        'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
      textoIntroductorio:
        'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Finanzas para la educación de tus hijos',
      tipoContent: 'novedad',
      tituloCorto: 'Finanzas para la educación de tus hijos',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
        },
        file: { fileName: 'Finanzas para la educación de tus hijos.png' },
        description: '',
        title: 'Finanzas para la educación de tus hijos'
      },
      categoriaCliente: [
        { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
        },
        file: { fileName: 'Finanzas para la educación de tus hijos.png' },
        description: '',
        title: 'Finanzas para la educación de tus hijos'
      },
      nombreImagen: 'Finanzas para la educación de tus hijos',
      tipoBite: 'novedad',
      link: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
      urlSeo: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-10-28T19:35:46.702Z',
      generoEdad: null,
      descripcion: '¡Conoce aquí 3 formas de organizar tus finanzas! ',
      textoIntroductorio: '¡Conoce aquí 3 formas de organizar tus finanzas! ',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Estoy cumpliendo mi objetivo personal?',
      tipoContent: 'novedad',
      tituloCorto: '¿Estoy cumpliendo mi objetivo personal?',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
        },
        file: {
          fileName: '3 Por qué no estoy cumpliendo mi objetivo personal.png'
        },
        description: '',
        title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
        },
        file: {
          fileName: '3 Por qué no estoy cumpliendo mi objetivo personal.png'
        },
        description: '',
        title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
      },
      nombreImagen: '¿Por qué no estoy cumpliendo mi objetivo personal?',
      tipoBite: 'novedad',
      link: 'ahorro/personas/objetivo-personal',
      urlSeo: 'ahorro/personas/objetivo-personal',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-10-28T19:42:47.859Z',
      generoEdad: null,
      descripcion:
        'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
      textoIntroductorio:
        'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Un viaje por la cultura del ahorro',
      tipoContent: 'novedad',
      tituloCorto: 'Un viaje por la cultura del ahorro',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
        },
        file: { fileName: '1 Un viaje por la cultura del ahorro.png' },
        description: '',
        title: 'Un viaje por la cultura del ahorro'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
        },
        file: { fileName: '1 Un viaje por la cultura del ahorro.png' },
        description: '',
        title: 'Un viaje por la cultura del ahorro'
      },
      nombreImagen: 'Un viaje por la cultura del ahorro',
      tipoBite: 'novedad',
      link: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
      urlSeo: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-01-06T20:58:10.844Z',
      generoEdad: null,
      descripcion:
        'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
      textoIntroductorio:
        'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Inteligencia Artificial para las compañías',
      tipoContent: 'novedad',
      tituloCorto: 'Inteligencia Artificial para las compañías',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2FCvrApgz9ZKGHQrDV2jkV/bfca8de965e8934c558a1b97d6ea1fb3/Inteligencia_Artificial_para_las_compa____as_GettyImages-960890176.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Inteligencia Artificial para las compañías GettyImages-960890176.jpeg'
        },
        description:
          'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
        title: 'Inteligencia artificial a la medida de todas las compañías'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/2FCvrApgz9ZKGHQrDV2jkV/bfca8de965e8934c558a1b97d6ea1fb3/Inteligencia_Artificial_para_las_compa____as_GettyImages-960890176.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Inteligencia Artificial para las compañías GettyImages-960890176.jpeg'
        },
        description:
          'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
        title: 'Inteligencia artificial a la medida de todas las compañías'
      },
      nombreImagen:
        'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
      tipoBite: 'novedad',
      link: 'empresas-novedades-inteligencia',
      urlSeo: 'empresas-novedades-inteligencia',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-20T15:37:37.565Z',
      generoEdad: null,
      descripcion:
        'Este factor de competitividad no sólo es para grandes empresas',
      textoIntroductorio:
        'Este factor de competitividad no sólo es para grandes empresas',
      textoBoton: 'Quiero saber más',
      textoCallToActionBite: 'Quiero saber más'
    },
    {
      titulo: 'El doble reto de liderar durante el cambio',
      tipoContent: 'novedad',
      tituloCorto: 'El doble reto de liderar durante el cambio',
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        },
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6FYod4xNtJzykqmDBoGh6c/6f4c0dc80a3cf9cadc11d093e0959f9f/El_doble_reto_de_liderar_durante_el_cambioGettyImages-1080558212.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'El doble reto de liderar durante el cambioGettyImages-1080558212.jpeg'
        },
        description:
          'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
        title: 'El doble reto de liderar durante tiempos de cambio'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/6FYod4xNtJzykqmDBoGh6c/6f4c0dc80a3cf9cadc11d093e0959f9f/El_doble_reto_de_liderar_durante_el_cambioGettyImages-1080558212.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'El doble reto de liderar durante el cambioGettyImages-1080558212.jpeg'
        },
        description:
          'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
        title: 'El doble reto de liderar durante tiempos de cambio'
      },
      nombreImagen:
        'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
      tipoBite: 'novedad',
      link: 'empresas-ahorro-doble-reto',
      urlSeo: 'empresas-ahorro-doble-reto',
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-11-20T15:36:25.317Z',
      generoEdad: null,
      descripcion:
        'Tips para acompañar a tu equipo de trabajo desde la virtualidad',
      textoIntroductorio:
        'Tips para acompañar a tu equipo de trabajo desde la virtualidad',
      textoBoton: 'Quiero conocerlos',
      textoCallToActionBite: 'Quiero conocerlos'
    },
    {
      titulo: 'La transformación de la contratación',
      tipoContent: 'novedad',
      tituloCorto: 'La transformación de la contratación',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4KYSlxEopkSuleWaXHAdY/f6978fb8ac05a3cd58d6b175a1ddfc4e/La_transformacion_de_la_contratacion_GettyImages-1183066519.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'La transformacion de la contratacion GettyImages-1183066519.jpeg'
        },
        description:
          'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
        title: 'La transformación de la contratación'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4KYSlxEopkSuleWaXHAdY/f6978fb8ac05a3cd58d6b175a1ddfc4e/La_transformacion_de_la_contratacion_GettyImages-1183066519.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'La transformacion de la contratacion GettyImages-1183066519.jpeg'
        },
        description:
          'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
        title: 'La transformación de la contratación'
      },
      nombreImagen:
        'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
      tipoBite: 'novedad',
      link: 'ahorro/empresas/transformacion-procesos-de-seleccion',
      urlSeo: 'ahorro/empresas/transformacion-procesos-de-seleccion',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-01-06T21:06:11.675Z',
      generoEdad: null,
      descripcion:
        '¿Sabes cómo ha cambiado la contratación en la última década? ',
      textoIntroductorio:
        '¿Sabes cómo ha cambiado la contratación en la última década? ',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: '¿Qué talento requiero atraer hoy?',
      tipoContent: 'novedad',
      tituloCorto: '¿Qué talento requiero atraer hoy?',
      category: [
        { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        },
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4UQo782xNw0Yvk1DatxDZm/6ea1786455cca6ba30f6c74d8fa5ec28/Qu___talento_requiero_a_traer_hoy_GettyImages-600580231.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Qué talento requiero a traer hoy GettyImages-600580231.jpeg'
        },
        description:
          'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
        title: '¿Qué talento requiero atraer hoy para impactar el mañana?'
      },
      categoriaCliente: [
        { contentful_id: '5fP153BoelxfRsusePVnBU', descripcion: 'Cesante' },
        {
          contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
          descripcion: 'Independiente'
        },
        { contentful_id: '2L498woyc1TQ1A3SpyUpxA', descripcion: 'Empleado' },
        {
          contentful_id: '7lDDi92WQvINHDoyppiGG1',
          descripcion: 'Pensión por invalidez'
        },
        {
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
          descripcion: 'Pensión por vejez'
        },
        {
          contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
          descripcion: 'Pensión por sobrevivencia'
        },
        {
          contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
          descripcion: 'Soy pensionado'
        },
        {
          contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
          descripcion: 'Estoy Aprendiendo'
        },
        {
          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
          descripcion: 'Conozco de Inversiones'
        }
      ],
      type: [{ contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/4UQo782xNw0Yvk1DatxDZm/6ea1786455cca6ba30f6c74d8fa5ec28/Qu___talento_requiero_a_traer_hoy_GettyImages-600580231.jpeg?w=800&q=50'
        },
        file: {
          fileName:
            'Qué talento requiero a traer hoy GettyImages-600580231.jpeg'
        },
        description:
          'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
        title: '¿Qué talento requiero atraer hoy para impactar el mañana?'
      },
      nombreImagen:
        'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
      tipoBite: 'novedad',
      link: 'ahorro/empresas/el-mejor-talento',
      urlSeo: 'ahorro/empresas/el-mejor-talento',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-02-19T19:03:38.893Z',
      generoEdad: null,
      descripcion:
        'Hay 5 características básicas que marcarán criterios de selección',
      textoIntroductorio:
        'Hay 5 características básicas que marcarán criterios de selección',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    },
    {
      titulo: 'Ejemplo contenido pensiones NOVEDAD',
      tipoContent: 'novedad',
      tituloCorto: 'Ejemplo contenido pensiones NOVEDAD',
      category: [
        {
          nombre: 'Pensiones Obligatorias',
          contentful_id: '45FVyiIWU70wBqFgR750SE'
        }
      ],
      imagen: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
        },
        file: { fileName: 'JPG-1.jpg' },
        description: '',
        title: 'que son y como leerlos'
      },
      categoriaCliente: [
        {
          descripcion: 'Pensión por vejez',
          contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
        }
      ],
      type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
      imagenpequena: {
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
        },
        file: { fileName: 'JPG-1.jpg' },
        description: '',
        title: 'que son y como leerlos'
      },
      nombreImagen: 'que son y como leerlos',
      tipoBite: 'novedad',
      link: 'mitos-realidades',
      urlSeo: 'mitos-realidades',
      relevancia: 'Relevancia Baja',
      updatedAt: '2021-03-16T21:17:25.078Z',
      generoEdad: null,
      descripcion:
        'Estar bien informado te permitirá tomar las mejores decisiones',
      textoIntroductorio:
        'Estar bien informado te permitirá tomar las mejores decisiones',
      textoBoton: 'Quiero conocer más',
      textoCallToActionBite: 'Quiero conocer más'
    }
  ]

  const dataPerfilamiento = {
    host: '181137226214ASDSA163202114913',
    nameuser: 'asdsa',
    category: 'Pensión',
    subcategory: 'pension-vejez',
    type: 1,
    age: 0,
    gender: null,
    encuesta: 'false',
    id: 2
  }

  const statefinal = {
    allContentfulBiteFeatured: [],
    allContentfulBiteProduct: [],
    indexDBUserName: 'asdsa',
    indexDBUser: {
      host: '181137226214ASDSA163202114913',
      nameuser: 'asdsa',
      category: 'Cesantías',
      subcategory: 'Empleado',
      type: 2,
      age: 0,
      gender: null,
      encuesta: 'false',
      id: 2
    },
    indexArrays: [],
    IsOpenMenu: false,
    isTourOpen: false,
    currentStepTourGuide: 0,
    documentLoaded: true,
    validateStreetCard: true,
    validateStreetCardDelete: false,
    validatechangeModalDelete: false,
    openLink: false,
    mockup: false,
    isLoading: true,
    perfilamientoCesantias: false,
    width: 1318
  }

  const propsFinal = {
    path: '/',
    location: {
      pathname: '/',
      search: '',
      hash: '',
      href: 'http://localhost:8000/',
      origin: 'http://localhost:8000',
      protocol: 'http:',
      host: 'localhost:8000',
      hostname: 'localhost',
      port: '8000',
      state: null,
      key: 'initial'
    },
    pageResources: {
      json: { pageContext: {} },
      page: {
        componentChunkName: 'component---src-pages-index-js',
        path: '/',
        webpackCompilationHash: '123',
        staticQueryHashes: ['1903881951', '246369438', '624527693', '764694655']
      },
      staticQueryResults: {
        '246369438': {
          data: {
            allContentfulRedSocial: {
              edges: [
                {
                  node: {
                    nombre: 'facebook',
                    url: 'https://www.facebook.com/proteccionsa',
                    icono: {
                      fluid: {
                        sizes: '(max-width: 800px) 100vw, 800px',
                        src:
                          '//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=800&q=50',
                        srcSet:
                          '//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=200&h=200&q=50 200w,\n//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=400&h=400&q=50 400w,\n//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=512&h=512&q=50 512w',
                        srcWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=800&q=50&fm=webp',
                        srcSetWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=200&h=200&q=50&fm=webp 200w,\n//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=400&h=400&q=50&fm=webp 400w,\n//images.ctfassets.net/y3qdch79qxiw/3NZyTaUwKE971qQr72Mipo/58f88af957d055d33e50c9e62b485973/facebook__1_.png?w=512&h=512&q=50&fm=webp 512w'
                      }
                    }
                  }
                },
                {
                  node: {
                    nombre: 'twitter',
                    url: 'https://twitter.com/proteccion',
                    icono: {
                      fluid: {
                        sizes: '(max-width: 800px) 100vw, 800px',
                        src:
                          '//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=800&q=50',
                        srcSet:
                          '//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=200&h=185&q=50 200w,\n//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=400&h=370&q=50 400w,\n//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=512&h=473&q=50 512w',
                        srcWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=800&q=50&fm=webp',
                        srcSetWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=200&h=185&q=50&fm=webp 200w,\n//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=400&h=370&q=50&fm=webp 400w,\n//images.ctfassets.net/y3qdch79qxiw/6zttnm9dyMiLjeNNOONWtm/44bda62eeeb18c8e201abcfe4019ae2d/twitter__1_.png?w=512&h=473&q=50&fm=webp 512w'
                      }
                    }
                  }
                },
                {
                  node: {
                    nombre: 'instagram',
                    url: 'https://www.instagram.com/proteccionsa/',
                    icono: {
                      fluid: {
                        sizes: '(max-width: 800px) 100vw, 800px',
                        src:
                          '//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=800&q=50',
                        srcSet:
                          '//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=200&h=200&q=50 200w,\n//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=400&h=400&q=50 400w,\n//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=512&h=512&q=50 512w',
                        srcWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=800&q=50&fm=webp',
                        srcSetWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=200&h=200&q=50&fm=webp 200w,\n//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=400&h=400&q=50&fm=webp 400w,\n//images.ctfassets.net/y3qdch79qxiw/VIsqk2JUgiMsCWheUNY85/c1f44e632ce775bd4eec047ce1baf9bb/instagram__1_.png?w=512&h=512&q=50&fm=webp 512w'
                      }
                    }
                  }
                },
                {
                  node: {
                    nombre: 'linkedin',
                    url: 'https://ve.linkedin.com/company/proteccionsa',
                    icono: {
                      fluid: {
                        sizes: '(max-width: 800px) 100vw, 800px',
                        src:
                          '//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=800&q=50',
                        srcSet:
                          '//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=200&h=200&q=50 200w,\n//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=400&h=400&q=50 400w,\n//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=512&h=512&q=50 512w',
                        srcWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=800&q=50&fm=webp',
                        srcSetWebp:
                          '//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=200&h=200&q=50&fm=webp 200w,\n//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=400&h=400&q=50&fm=webp 400w,\n//images.ctfassets.net/y3qdch79qxiw/7ej108hJpMGnbxjRxhRb4F/e34b8eb2a80275c8320d4ee5dd54db9b/linkedin__1_.png?w=512&h=512&q=50&fm=webp 512w'
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        '624527693': {
          data: {
            allContentfulActualidadDeInversiones: {
              edges: [
                {
                  node: {
                    titulo: 'Qué dice el experto',
                    contentful_id: '2iSc262lfCDuc5XCafkl7K',
                    urlSeo: 'inversiones/actualidad/el-experto-dice',
                    updatedAt: '2020-12-10T14:40:58.480Z',
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ],
                    categoriaCliente: [
                      {
                        descripcion: 'Estoy Aprendiendo',
                        contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                      },
                      {
                        descripcion: 'Conozco de Inversiones',
                        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                      }
                    ],
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ],
                    Tema: [
                      {
                        titulo: 'GENERICO INVERSIONES',
                        contentful_id: '4JYXjOW5V5v8hrNyNI9x43'
                      }
                    ],
                    contenidoCorporativo: {
                      titulo: '¿En dónde estamos parados?',
                      TituloCortoBite:
                        '¿En dónde estamos parados? - Qué dice el experto',
                      TextoCallToActionBite: 'Quiero conocer más',
                      TextoIntroductorioBite:
                        'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
                      Relevancia: 'Relevancia Media',
                      CuerpoContenido: {
                        json: {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Juan Ignacio Medina Villar',
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
                                  value: 'Líder Estrategias Ahorro e Inversión',
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
                                    'Han pasado ya más de 5 meses desde que inició la pandemia generada por el COVID 19 y en este período de tiempo, y hablando específicamente del desempeño de los diferentes mercados financieros, hemos observado unos movimientos que han resultado bastante sorpresivos. Índices como el S&P 500 se ha apreciado más del 50% desde el 23 de marzo, el índice NASDAQ más de un 60%, y en términos generales, se ha evidenciado un comportamiento muy favorable para los activos de riesgo, esto en gran parte explicado por las expectativas de una recuperación económica rápida y por los enormes estímulos fiscales entregados por los gobiernos y de igual forma, por los principales Bancos Centrales apoyando en materia monetaria.\n',
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
                                    'Con esto en mente y pensando en lo que en el cierre de 2020, es importante tener claro cuáles son esos riesgos que se pueden materializar y que se deben estar monitoreando de manera cercana. En este sentido, el avance respecto al control de la pandemia será muy relevante, sobre todo dados los nuevos rebrotes que se han visto en Europa y de igual forma, de cara a los avances en la vacuna. Adicional a esto, existen otros factores muy relevantes para tener en cuenta, donde las elecciones presidenciales en EE.UU. el próximo 3 de noviembre, dado las implicaciones que pudiera tener para los mercados sobre todo si Joe Biden termina siendo elegido.',
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
                                    'De presentarse una “barrida Demócrata” lo que significa que dicho partido se quede con el control no solo de la Casa Blanca sino también del Senado, sería una señal de que podría haber cambios en temas muy sensibles como los impuestos, tanto a nivel corporativo como para el ingreso de las personas más ricas; adicional a esto, se abre un espacio a que se pueda implementar más fácilmente una ambiciosa agenda demócrata donde las nuevas regulaciones a sectores críticos causaría cierta aversión al riesgo, al menos en el corto plazo.',
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
                                      marks: [],
                                      value:
                                        'Estas regulaciones se enfocarían en sectores como Tecnología, en donde se buscaría pasar leyes anti-monopolio y que afectaría directamente a las gigantes tecnológicas como Google, Amazon, Facebook entre otras.',
                                      nodeType: 'text'
                                    }
                                  ],
                                  nodeType: 'paragraph'
                                }
                              ],
                              nodeType: 'blockquote'
                            },
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    'En el sector salud, los cambios vendrían asociados a renegociar los precios de las drogas, atándolos a los precios internacionales y de igual forma, buscando introducir una nueva opción pública similar al Medicare. Respecto al sector financiero, se pretendería implementar un impuesto a las transacciones, donde vale la pena tener en cuenta que es muy probable que Elizabeth Warren, excandidata demócrata y de fuerte posición de izquierda, podría ocupar e puesto de Secretaria del Tesoro.',
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
                                    'Para los mercados financieros esto sería en el corto plazo visto como negativo, y seguramente habría volatilidad, mientras que, de ser Donal Trump reelegido, seguiría el status quo y no se esperarían cambios significativos. De todas formas, hay que tener claro que de ser la segunda opción la que se materialice, hacia adelante también veríamos amenazas económicas que estarían muy asociadas a los altos niveles de endeudamiento de Estados Unidos y que podrían afectar el desempeño futuro.',
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
                                    'A manera de conclusión podríamos decir que las diferentes economías empiezan a avanzar en un proceso de recuperación económica, más lento en algunos países que en otros, y que, dejando a un lado el COVID-19, los mercados empiezan a incorporar en los precios otro tipo de elementos, tales como los posibles resultados en materia de elecciones presidenciales en EE.UU., confrontaciones comerciales entre EE.UU. y China, y en términos económicos, las políticas que sigan los principales Bancos Centrales, donde evidentemente la FED juega un\npapel determinante y más ahora con el anuncio de la nueva estrategia en materia de política monetaria que seguramente oficializarían en su próxima reunión. La tarea para los inversionistas y ahorradores seguirá siendo mantenerse invertidos en función de su perfil de riesgo y objetivos de inversión, para que sea cual sea el evento que genere volatilidad, no se pierda el rumbo y se logren alcanzar las metas planteadas.',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'paragraph'
                            }
                          ],
                          nodeType: 'document'
                        }
                      },
                      descripcionCallToAction: {
                        descripcionCallToAction:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum magna et leo luctus congue.'
                      },
                      linkCallToAction: {
                        linkCallToAction:
                          'https://www.proteccion.com/contenidos/ahorro/afiliado/momento-de-ahorrar/'
                      }
                    },
                    imagen: {
                      file: {
                        url:
                          '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg',
                        fileName: 'JPG-1.jpg'
                      },
                      fluid: {
                        src:
                          '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg?w=800&q=50'
                      }
                    },
                    descripcion: {
                      id: 'f80df2b7-25dc-5521-874d-52e9ef1e463d',
                      descripcion: 'Lorem'
                    }
                  }
                }
              ]
            },
            allContentfulCampana: {
              edges: [
                {
                  node: {
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                          tituloCorto: 'Generalidades'
                        }
                      ],
                      tituloCorto:
                        'Paga las Cesantías de los empleados del hogar, aquí',
                      descripcioncorta:
                        'Sabemos que para ti es importante acompañar a las personas que te ayudan en las labores del hogar, para que construyan su futuro y vivan un mejor mañana.',
                      updatedAt: '2021-02-23T19:40:56.210Z',
                      edadygenero: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ],
                      categoriaCliente: [
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      imagenpequena: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5ymmJfcHuFF0JgLsOIX42Q/09a361490542119d0d517d6da84334c9/Cesant__as_para_Empleados_del_hogar_GettyImages-1214479802.jpeg?w=800&q=50'
                        },
                        file: {
                          fileName:
                            'Cesantías para Empleados del hogar GettyImages-1214479802.jpeg'
                        },
                        description:
                          'Mujer sentada en la sala de su casa, hace cuentas de cuánto debe pagarle de Cesantías a los empleados de su hogar',
                        title:
                          '¿No sabes cuánto debes pagar por las Cesantías de tus empleados del hogar?'
                      },
                      textoIntroductorio:
                        'Acompaña a las personas que te ayudan en las labores del hogar. ¡Consigna sus Cesantías!',
                      textoCallToAction: 'Pagar Cesantías',
                      urlSeo:
                        'cesantias/pago-de-cesantias-a-empleados-del-hogar',
                      contentful_id: 'qoAqkbabLqNr3eOcstzKk',
                      textoCallToActionBite: 'Quiero conocer más',
                      relevancia: 'Relevancia Alta',
                      tipoBite: 'campañas',
                      tipoContent: 'campañas'
                    }
                  }
                },
                {
                  node: {
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias',
                        contentful_id: '45FVyiIWU70wBqFgR750SE'
                      }
                    ],
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                          tituloCorto: 'Novedades y Beneficios'
                        }
                      ],
                      tituloCorto: 'Afiliación 100% Digital',
                      descripcioncorta:
                        'Entendiendo los retos de digitalización y agilidad que buscan hoy los usuarios en todas sus experiencias, presentamos nuestro servicio de afiliación a Pensión Obligatoria de forma 100% digital',
                      updatedAt: '2020-11-03T20:05:52.901Z',
                      edadygenero: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ],
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        },
                        {
                          descripcion: 'Pensión por invalidez',
                          contentful_id: '7lDDi92WQvINHDoyppiGG1'
                        },
                        {
                          descripcion: 'Pensión por sobrevivencia',
                          contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                        },
                        {
                          descripcion: 'Pensión por vejez',
                          contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                        },
                        {
                          descripcion: 'Soy pensionado',
                          contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                        }
                      ],
                      imagenpequena: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
                        },
                        file: { fileName: 'AfiliaciondigitalHOME.png' },
                        description:
                          'Afiliación 100% digital a Pensión Obligatoria',
                        title: 'Afiliación Digital'
                      },
                      textoIntroductorio:
                        '¡Afíliate a Pensión Obligatoria en segundos!',
                      textoCallToAction: '¡Quiero afiliarme!',
                      urlSeo: 'campana/afiliacion-pension',
                      contentful_id: '2KGDTXOz5HAsxrnsqW6IEa',
                      textoCallToActionBite: 'Ver más',
                      relevancia: 'Relevancia Alta',
                      tipoBite: 'campañas',
                      tipoContent: 'campañas'
                    }
                  }
                }
              ]
            },
            allContentfulNovedad: {
              edges: [
                {
                  node: {
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '2tdNwtoxba1KzfELIhHS86',
                          tituloCorto: 'Novedades'
                        },
                        {
                          contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                          tituloCorto: 'Novedades y Beneficios'
                        },
                        {
                          contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                          tituloCorto: 'GENERICO INVERSIONES'
                        },
                        {
                          contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                          tituloCorto: 'Genérico Pensiones'
                        }
                      ],
                      tituloCorto:
                        'Disponibles los certificados para la Declaración de Renta 2020',
                      descripcioncorta:
                        '¡Ahora es posible generar el certificado de una manera mucho más fácil y rápida!, hemos mejorando la experiencia de servicio para así contribuir y cumplir con aquellas obligaciones tributarias.',
                      edadygenero: null,
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        },
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Conozco de Inversiones',
                          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Estoy Aprendiendo',
                          contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        },
                        {
                          descripcion: 'Pensión por invalidez',
                          contentful_id: '7lDDi92WQvINHDoyppiGG1'
                        },
                        {
                          descripcion: 'Pensión por sobrevivencia',
                          contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                        },
                        {
                          descripcion: 'Pensión por vejez',
                          contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                        }
                      ],
                      textoIntroductorio:
                        '¡Ahora es posible generar el certificado de una manera mucho más fácil y rápida!',
                      textoCallToAction: 'Ir a Certifacil',
                      urlSeo: 'personas/certificados-para-declaracion-de-renta',
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ],
                      contentful_id: '5JFWsQtXW9K93PzbgVFE3N',
                      updatedAt: '2021-03-16T15:16:33.332Z',
                      textoCallToActionBite: 'Quiero conocer más',
                      relevancia: 'Relevancia Alta',
                      imagenpequena: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/2G9IvaEsME5FT7PAdVoTKs/3bddcf869897e2aad7b542ec72bd4ed4/GettyImages-1172040755.jpeg?w=800&q=50'
                        },
                        file: { fileName: 'GettyImages-1172040755.jpeg' },
                        description:
                          'Mujer y hombre, sentados frente al computador, sonríen mientras descargan los certificados para la declaración de renta 2020, en el sitio web de Protección.',
                        title: 'Certificados para la Declaración de Renta 2020'
                      },
                      tipoBite: 'novedad',
                      tipoContent: 'novedad'
                    },
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      },
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      },
                      {
                        nombre: 'Pensiones Obligatorias',
                        contentful_id: '45FVyiIWU70wBqFgR750SE'
                      },
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ]
                  }
                }
              ]
            },
            allContentfulBeneficio: {
              edges: [
                {
                  node: {
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      },
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      },
                      {
                        nombre: 'Pensiones Obligatorias',
                        contentful_id: '45FVyiIWU70wBqFgR750SE'
                      }
                    ],
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                          tituloCorto: 'Acompañamiento'
                        }
                      ],
                      urlSeo: 'empresas/oferta-proteccion',
                      edadygenero: null,
                      contentful_id: '63dP1HNCS9VGft1DuCbbPd',
                      relevancia: 'Relevancia Alta',
                      categoriaCliente: null,
                      imagenpequena: {
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/M6LMYIG5oUiF5KB4wQxSk/c87838d73b7fd2da7f03fe4695e9d08a/Oferta_para_Empresas_FALTA_GettyImages-651424163.jpeg?w=800&q=50'
                        },
                        file: {
                          fileName:
                            'Oferta para Empresas FALTA GettyImages-651424163.jpeg'
                        },
                        description:
                          'Grupo de personas conversando en la sala de ventas acerca de los beneficios que Protección tiene para las empresas y sus colaboradores',
                        title:
                          'Oferta Protección para las empresas y sus colaboradores'
                      },
                      tituloCorto:
                        '¡Conoce la oferta que tenemos para tu empresa en Protección!',
                      updatedAt: '2021-01-25T21:55:15.710Z',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
                      textoCallToAction: 'Conoce más',
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ],
                      descripcioncorta:
                        'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
                      tipoBite: 'beneficio',
                      tipoContent: 'beneficio'
                    }
                  }
                }
              ]
            },
            allContentfulProducto: {
              edges: [
                {
                  node: {
                    categoriaProducto: 'Complementario',
                    titulo: 'Crédito para Vivienda Bancolombia',
                    createdAt: '2020-09-30T17:07:33.835Z',
                    contentful_id: 'JqUxWGT2p4bwRNZli6FV3',
                    contenido: [
                      {
                        Tema: [
                          {
                            contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                            tituloCorto: 'Créditos y seguros'
                          }
                        ],
                        categoriaCliente: null,
                        edadygenero: null,
                        textoIntroductorio:
                          'Haz que tu proyecto de vivienda propia se convierta en realidad.',
                        textoCallToAction: '¡Agendar cita!',
                        descripcioncorta:
                          'Haz que tu proyecto de vivienda propia se convierta en realidad. Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco.',
                        tituloCorto:
                          'Crédito para vivienda Bancolombia. ¡Conócelo!',
                        relevancia: 'Relevancia Baja',
                        textoCallToActionBite: 'Quiero conocer más',
                        updatedAt: '2021-01-06T21:36:09.264Z',
                        urlSeo:
                          'ahorro/productos-complementarios-credito-vivienda',
                        contentful_id: '4dSE5dBqXkj1OguNJk7tcp',
                        imagenpequena: {
                          file: {
                            fileName:
                              'CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png'
                          },
                          fluid: {
                            src:
                              '//images.ctfassets.net/y3qdch79qxiw/53FZItBbJT3d2qUailJ9ri/34157f56697be5c70831e3de0559b874/CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png?w=800&q=50'
                          },
                          description: '',
                          title: 'como retirar tus cesantias para vivienda'
                        },
                        tipoDeCliente: [
                          {
                            contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                            nombre: 'Afiliado'
                          },
                          {
                            contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                            nombre: 'Empleador'
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            allContentfulInformes: {
              edges: [
                {
                  node: {
                    titulo: 'Visión Mensual de Inversiones',
                    updatedAt: '2020-12-01T14:31:40.156Z',
                    textoIntroductorioBite:
                      'Ensayo informes inversiones contenido',
                    contentful_id: '156x7USXSE8Zy0ZdFLUpng',
                    tipoDeInforme: 'Visión Mensual de Inversiones',
                    linkCallToActionInformes: {
                      linkCallToActionInformes:
                        'https://www.proteccion.com/wps/wcm/connect/proteccion/ee688a09-a14e-4906-af12-1fe472269738/VMI_NOV2020.pdf?MOD=AJPERES'
                    },
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
                          tituloCorto: 'GENERICO INVERSIONES'
                        }
                      ],
                      edadygenero: null,
                      tituloCorto: 'Ensayo informes inversiones contenido',
                      linkCallToAction:
                        'https://www.youtube.com/watch?v=Of6uOq_7ceE',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Ensayo informes inversiones contenido',
                      contentful_id: 'ixxKMebxvMfDmOvqutmqz',
                      urlSeo:
                        'mitos-realidades-sistema-pensional-contendioeduc',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
                      updatedAt: '2020-10-22T14:00:16.360Z',
                      imagenpequena: {
                        file: { fileName: 'JPG-1.jpg' },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                        },
                        description: '',
                        title: 'que son y como leerlos'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Conozco de Inversiones',
                          contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                        },
                        {
                          descripcion: 'Estoy Aprendiendo',
                          contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ]
                  }
                },
                {
                  node: {
                    titulo: 'Informe semanal',
                    updatedAt: '2020-12-01T14:29:57.860Z',
                    textoIntroductorioBite:
                      'Conoce los valores del mercado actual',
                    contentful_id: '7iimejGXVlqN9Vulsn4HVp',
                    tipoDeInforme: 'Informe semanal',
                    linkCallToActionInformes: {
                      linkCallToActionInformes:
                        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
                    },
                    contenido: null,
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ]
                  }
                },
                {
                  node: {
                    titulo: 'Informe trimestral de mercados',
                    updatedAt: '2020-12-01T14:29:47.760Z',
                    textoIntroductorioBite:
                      'Conoce los valores del mercado actual',
                    contentful_id: '4tZTfI6Kb326d5CMMNoIP8',
                    tipoDeInforme: 'Informe trimestral de mercados',
                    linkCallToActionInformes: {
                      linkCallToActionInformes:
                        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
                    },
                    contenido: null,
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ]
                  }
                },
                {
                  node: {
                    titulo: 'Informe trimestral Portafolios Balanceados',
                    updatedAt: '2020-12-01T14:29:33.644Z',
                    textoIntroductorioBite:
                      'Conoce los valores del mercado actual',
                    contentful_id: '1iapMqBhFQTeYhdwLUfWSK',
                    tipoDeInforme: 'Informe trimestral Portafolios Balanceados',
                    linkCallToActionInformes: {
                      linkCallToActionInformes:
                        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
                    },
                    contenido: null,
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ]
                  }
                }
              ]
            },
            allContentfulContenidoEducativo: {
              edges: [
                {
                  node: {
                    titulo: '¿Cómo consulto mi saldo en Cesantías?',
                    contentful_id: '1WuRdaqXMdUGKoGDEwE1JA',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                          tituloCorto: 'Extractos y Certificados'
                        }
                      ],
                      tituloCorto: '¿Cómo consulto mi saldo en Cesantías?',
                      textoCallToActionBite: 'Quiero saber',
                      textoIntroductorio:
                        'Conoce cómo consultar tu saldo en Cesantías',
                      textoCallToAction: 'Ir a Certifácil',
                      urlSeo: 'cesantias/saldo-cesantias',
                      edadygenero: null,
                      contentful_id: '6Eiy6lvHkzwgN0NSmqmZ3B',
                      updatedAt: '2021-03-09T17:14:24.581Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Conoce aquí el paso a paso para consultar fácilmente tu saldo en Cesantías',
                      imagenpequena: {
                        file: { fileName: 'saldo de cesantias.PNG' },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1g4fUh7TOmqS0XiOFpaQxR/f11f91ebea6863a73ae41fec0266fec3/saldo_de_cesantias.PNG?w=800&q=50'
                        },
                        description:
                          'Mujer joven sentada en el piso, con un libro en la mano, pensando en su futuro',
                        title: 'Saldo de Cesantías'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¿Cuáles son los canales por los que puedo retirar mis Cesantías?',
                    contentful_id: '2LsNtY9b4IjH26vbi4s3ob',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto:
                        '¿Cuáles son los canales por los que puedo retirar mis Cesantías?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'En Protección te ofrecemos servicios digitales y seguros para que accedas a tus Cesantías.',
                      textoCallToAction: 'Retirar Cesantías Online',
                      urlSeo: 'cesantias/canales-y-montos-retiros',
                      edadygenero: null,
                      contentful_id: '1rcXxNLuQRh8ypUN0imb30',
                      updatedAt: '2021-03-04T20:14:32.680Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'En Protección te ofrecemos servicios digitales ágiles y seguros para que accedas a tus Cesantías. A continuación, te compartimos un cuadro con los diferentes canales que tenemos disponibles y, al frente de cada uno, el monto máximo que es posible retirar.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Canales y montos para acceder a las CES GettyImages-1181495455.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/4p2m8FSFV9y41mEM2jVvzd/82b8301823c35588151c0cab204ac75d/Canales_y_montos_para_acceder_a_las_CES_GettyImages-1181495455.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer sonríe mientras conoce en el sitio web de Protección las diferentes alternativas y facilidades que Protección le da para el retiro de sus Cesantías.',
                        title:
                          '¿Cuáles son los canales y los montos permitidos en cada uno, para el retiro de Cesantías?'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Consejos para obtener beneficios tributarios con tu ahorro ',
                    contentful_id: '3IYIe4hOF0cu4PjbbrixCD',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                          tituloCorto: 'Beneficios'
                        }
                      ],
                      tituloCorto:
                        'Consejos para obtener beneficios tributarios',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡Conoce los beneficios tributarios que puedes obtener!',
                      textoCallToAction: 'Quiero ver más',
                      urlSeo: 'Ahorro-BeneficiosTributarios',
                      edadygenero: null,
                      contentful_id: '2el4sL7ZP9VGxRibLSYmKu',
                      updatedAt: '2021-03-09T17:34:08.556Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Siempre te dicen que ahorrar es bueno, que vale la pena, que hay que pensar en el futuro; pero, tal vez, no conozcas un beneficio adicional: en Colombia se premia el ahorro. Así es, ¡si ahorras puedes llegar a contar con beneficios tributarios!',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro 1221903461.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/714jMILXFRwzqDT8LjHtMz/fa7f1e597d35e21d38e0b2a8e3ed2fb7/Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro_1221903461.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer joven revisando su tableta y conociendo cómo obtener beneficios tributarios con su ahorro en Protección',
                        title:
                          'Consejos para obtener beneficios tributarios con tu ahorro. En Colombia, se premia el ahorro con Protección'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Durante la pandemia cuida tus ahorros',
                    contentful_id: '1rZD6oPq1H89zKTkR4Pdv8',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        }
                      ],
                      tituloCorto: 'Durante la pandemia cuida tus ahorros',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'Conoce cómo cuidar los ahorros en tiempos de coronavirus',
                      textoCallToAction: 'Quiero conocerlas',
                      urlSeo: 'ahorro/durante-la-pandemia-cuida-tus-ahorros',
                      edadygenero: null,
                      contentful_id: '4218R6wZczlnVOkAAtqmIS',
                      updatedAt: '2021-03-09T17:30:51.728Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'En Protección nos preocupamos por tu salud financiera y el bienestar de tu familia, por eso te presentamos una serie de recomendaciones para cuidar tus ahorros ',
                      imagenpequena: {
                        file: {
                          fileName: 'Durante la pandemia cuida tus ahorros.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/OpCVG0hIvbORrkUZXUUPF/b2f784a936caffd1776f4d95f7374e41/Durante_la_pandemia_cuida_tus_ahorros.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer joven de cabello largo, sentada en un sofá gris analizando sus gastos y ahorros',
                        title: 'Durante la pandemia cuida tus ahorros '
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¡Realiza el curso gratuito de Finanzas Personales!',
                    contentful_id: '2zjQa1liF3ivbWXwAFKEMc',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        },
                        {
                          contentful_id: '2tdNwtoxba1KzfELIhHS86',
                          tituloCorto: 'Novedades'
                        }
                      ],
                      tituloCorto:
                        '¡Realiza el curso gratuito: Finanzas Personales!',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡En Universidad Protección tenemos cursos diseñados para ti!',
                      textoCallToAction: 'Quiero ir',
                      urlSeo: 'ahorro/curso-finanzas-personales',
                      edadygenero: null,
                      contentful_id: '3AD1AvKVKtBHuXqXTIK4K4',
                      updatedAt: '2021-03-09T17:49:48.769Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Sabemos que tener el control de tus finanzas es clave para alcanzar tus sueños; por eso diseñamos, en la Universidad Protección, un curso de Finanzas Personales que te permitirá aprender cómo optimizar gastos y mucho más. ¡Anímate a hacerlo!',
                      imagenpequena: {
                        file: {
                          fileName:
                            '¡Realiza el curso gratuito de Finanzas Personales!.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/6unQMEyrLmI9GSoIJUsI8u/400d092eedc99e1b08ad81500ee54d5a/__Realiza_el_curso_gratuito_de_Finanzas_Personales_.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre de barba y anteojos con un celular en la mano, sentado en un escritorio, al lado de una mujer de cabello largo castaño también con gafas, revisando en su computador, cómo ingresar al curso de finanzas',
                        title:
                          '¡Realiza el curso gratuito de Finanzas Personales!'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Modelos de Compensación',
                    contentful_id: '4qgYKWvGev7qXHMU8NnlAy',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                          tituloCorto: 'Planes Institucionales'
                        }
                      ],
                      tituloCorto: 'Modelos de compensación',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Transforma procesos con estrategias innovadoras',
                      textoCallToAction: 'Quiero saber más',
                      urlSeo: 'empresas-novedades-modelos',
                      edadygenero: null,
                      contentful_id: '2AJslthkG3eNLesKBAsKxb',
                      updatedAt: '2021-03-16T13:40:19.990Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Transformar procesos con estrategias innovadoras enriquece tu modelo de compensación en tiempos de cambio',
                      imagenpequena: {
                        file: { fileName: 'Modelos de compensación.jpeg' },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3Kuoct6oDd4BSOQQRbJ0vG/d45c1f20f4ca1d9852102175dd903a6a/Modelos_de_compensaci__n.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer rubia con gafas, cabello recogido, uniforme y guantes de seguridad, manipula máquina pesada dentro de la empresa en la que trabaja.',
                        title: 'Modelos de Compensación'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¿Buscas motivar a tus colaboradores y premiar gestiones sobresalientes?',
                    contentful_id: '5i07hNEhEDk4Y7Bim5XKS4',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                          tituloCorto: 'Planes Institucionales'
                        }
                      ],
                      tituloCorto:
                        'Motiva a tus colaboradores, premia sus gestiones',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Los Planes Institucionales son una alternativa interesante ',
                      textoCallToAction: 'Quiero saber más',
                      urlSeo: 'empresas-cesantias-planes-institucionales',
                      edadygenero: null,
                      contentful_id: '2unJXHCdgglQd1El51r7HV',
                      updatedAt: '2021-03-09T23:23:27.724Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Los Planes Institucionales de Protección le permiten a tu empresa contar con alternativas interesantes a la hora de diseñar modelos de compensación por resultados.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Motiva a tus colaboradores, premia sus gestiones.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5Nf6Fvya0d61mr2hE8xMwD/49dca05a7456bb07f1392c71746b0ade/Motiva_a_tus_colaboradores__premia_sus_gestiones.jpeg?w=800&q=50'
                        },
                        description:
                          'Dos empleados con uniforme azul, tapabocas industrial amarillo y guantes de protección, trabajan motivados, su empresa tiene un Plan Institucional que les ayuda a incrementar sus ahorros',
                        title:
                          '¿Buscas motivar a tus colaboradores y premiar gestiones sobresalientes?'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Soluciona y gestiona deudas e inconsistencias en proteccion.com',
                    contentful_id: '3OufjkUrZIcpSOZnn5aSdB',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                          tituloCorto: 'Acompañamiento'
                        }
                      ],
                      tituloCorto:
                        'Soluciona y gestiona deudas e inconsistencias',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡Es muy fácil! Conoce aquí cómo puedes realizar el procedimiento.',
                      textoCallToAction: 'Ir a la Zona Transaccional',
                      urlSeo:
                        'empresas/pension/gestiona-deudas-e-inconsistencias',
                      edadygenero: null,
                      contentful_id: '5gB7I8narHCkLbRzYwfG6K',
                      updatedAt: '2020-10-28T20:07:32.820Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Gestionar y solucionar las deudas e inconsistencias de los aportes a Pensión Obligatoria, es muy fácil a través de nuestra Zona Transaccional en proteccion.com. ',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Soluciona y gestiona deudas e inconsistencias en proteccion.com.png'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3GRmuOKmcyQF5TO5mcfJmC/65dcedf6af32d87a00202f9b9979a14b/Soluciona_y_gestiona_deudas_e_inconsistencias_en_proteccion.com.png?w=800&q=50'
                        },
                        description: '',
                        title:
                          'Soluciona y gestiona deudas e inconsistencias en proteccion.com'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¿Cómo gestionar los retiros de Cesantías de tus colaboradores en proteccion.com?',
                    contentful_id: '2jZWMor8X3nt7ZdDetcPTF',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto: 'Gestiona los retiros de tus empleados',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Autoriza el retiro parcial o total de las Cesantías',
                      textoCallToAction: 'Ir al instructivo',
                      urlSeo: 'empresas-cesantias-retiros',
                      edadygenero: null,
                      contentful_id: 'MiIKyQViyofCgn4WkWLvE',
                      updatedAt: '2021-03-09T17:14:00.582Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Retiro de Cesantías es una opción que, como empleador, te permite autorizar el retiro parcial o total de las Cesantías de tus colaboradores afiliados al fondo de Cesantías Protección.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Gestiona los retiros de tus empleados GettyImages-992351688.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/7Jx7udzQxu84DwnSGI4WB2/36baadadedc83477066a54a261360368/Gestiona_los_retiros_de_tus_empleados_GettyImages-992351688.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer sonríe en el depósito de materiales de su negocio, tiene sus cesantías en Protección',
                        title:
                          '¿Cómo gestionar los retiros de Cesantías de tus colaboradores en proteccion.com?'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Es momento de reinventarse',
                    contentful_id: '01QWAxhQ0NfLtplabjkHO0',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '2tdNwtoxba1KzfELIhHS86',
                          tituloCorto: 'Novedades'
                        }
                      ],
                      tituloCorto: 'Es momento de reinventarse',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¿Has pensado en realizar una reingeniería en tu empresa?',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro/empresas/es-momento-de-reinventarse',
                      edadygenero: null,
                      contentful_id: '61abU4E9rPAyg7OUBkNj5F',
                      updatedAt: '2020-10-28T19:55:16.676Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        '¿Has pensado en realizar una reingeniería en tu empresa? Es momento de encontrar el camino para transformar la forma de hacer las cosas, y para lograrlo queremos compartir contigo cinco herramientas:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Es momento de reinventarse-(contenido-que-aplica-tambi‚n-a-empresas) 1169342568.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/34kuPTroQrJe0UpuWVPWY/0af3de4066674d5a45ac23700cbc0311/Es_momento_de_reinventarse-_contenido-que-aplica-tambi___n-a-empresas__1169342568.jpeg?w=800&q=50'
                        },
                        description:
                          'Empresario enseña a sus colegas los nuevos lentes de realidad virtual de la compañía',
                        title:
                          'Es momento de reinventarse. Transforma la manera de hacer las cosas'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Actualiza los usuarios de tu clave empresarial',
                    contentful_id: '4yRAPXsZQwvUzgEstcRe82',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                          tituloCorto: 'Clave Empresarial'
                        }
                      ],
                      tituloCorto:
                        'Actualiza los usuarios de tu clave empresarial',
                      textoCallToActionBite: 'Quiero leer más',
                      textoIntroductorio:
                        'Es muy fácil. En esta nota, te contamos cómo hacerlo',
                      textoCallToAction: 'Ingresar',
                      urlSeo: 'empresas-cesantias-usuarioclave',
                      edadygenero: null,
                      contentful_id: '7oloAAaenIgKL6cRAlQ4yq',
                      updatedAt: '2021-01-14T20:15:57.266Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Mantenernos actualizados es estar más cerca, por eso, te invitamos a actualizar los usuarios que cuentan con Clave Empresarial para tu Compañía, tanto "Administradores" como "Delegados".',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Actualiza los usuarios de tu clave empresarial GettyImages-1147294030.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5lWJ8dJDOyqgIGbVdxFUN8/7c560899196eaa7750f8bb49bc1afc9c/Actualiza_los_usuarios_de_tu_clave_empresarial_GettyImages-1147294030.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre sonríe en su oficina, atrás sus compañeros trabajan en computadores, están afiliados a Protección',
                        title: 'Actualiza los usuarios de tu clave empresarial'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Diagnostica el estado de tu negocio',
                    contentful_id: '3LURTLiUIWWATazcAAR1c4',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: 'Diagnostica el estado de tu negocio',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Descubre tips de finanzas que te permitirán lograr tus objetivos',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo:
                        'ahorro/empresas/diagnostica-el-estado-de-tu-negocio',
                      edadygenero: null,
                      contentful_id: 'SsqMmohl0Lh7ZyELRehth',
                      updatedAt: '2021-01-06T22:09:39.881Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Descubre tips de finanzas que te permitirán lograr tus objetivos, independiente de cualquier situación.',
                      imagenpequena: {
                        file: {
                          fileName:
                            '1020230272-Diagnostica-el-estado-de-tu-negocio-(aplica-para-empresas).jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/Z4WPsiv5tK99uLYhqBXxq/c1780afe0d3590056ca3b0daeb5b575d/1020230272-Diagnostica-el-estado-de-tu-negocio-_aplica-para-empresas_.jpeg?w=800&q=50'
                        },
                        description:
                          'Empresaria sonríe en su emprendimiento de textiles, en la tablet lee tips de finanzas',
                        title: 'Diagnostica el estado de tu negocio '
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Elimina la palabra excusa y escoge una estrategia de ahorro',
                    contentful_id: '51wXr6G2hVCsxTfpalNiAQ',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        }
                      ],
                      tituloCorto:
                        'Elimina la palabra excusa. Es momento de ahorrar',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡Inicia hoy un hábito financiero saludable!',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro/afiliado/momento-de-ahorrar',
                      edadygenero: null,
                      contentful_id: '6NpEvFwMJiNx3D3eACWreL',
                      updatedAt: '2021-02-19T19:11:38.845Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Iniciar un hábito saludable puede ser difícil si le abres espacio a las excusas, pues se requiere disciplina y compromiso. Para que sea mucho más sencillo incorporar el ahorro a tu cotidianidad, puedes elegir un método que te motive e impulse.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Elimina la palabra excusa es momento de ahorrar GettyImages-602981307.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3rFPTiE2c1Jw0yPXIwWswK/0777e55bb7312472d76242c239118835/Elimina_la_palabra_excusa_es_momento_de_ahorrar_GettyImages-602981307.jpeg?w=800&q=50'
                        },
                        description:
                          'Pareja lee en el computador cómo escoger una estrategia de ahorro',
                        title:
                          'Ahorra según tu personalidad, inicia este hábito saludable'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Perfil financiero, rasgos que definen tu relación con el dinero',
                    contentful_id: '3XQ6kw8AeRhJJL3AO78rYD',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        }
                      ],
                      tituloCorto:
                        'Rasgos que definen tu relación con el dinero',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Conocer tu personalidad financiera es el punto de partida',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro/afiliado/perfil-financiero',
                      edadygenero: null,
                      contentful_id: '2N4ZpHyuYVhjXJG9GUif4f',
                      updatedAt: '2020-10-28T19:41:21.277Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Conocer tu personalidad financiera es el punto de partida para comenzar a tomar mejores decisiones. ¿Te has preguntado cómo administras tus finanzas? Es momento de hacerlo y así entender cómo es tu relación con el dinero.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Rasgos que definen tu relacion con el dinero GettyImages-599767404.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5WzdUswyFGTi2lw3PdryQx/cc3375d420046cf0674138cd0343c73c/Rasgos_que_definen_tu_relacion_con_el_dinero_GettyImages-599767404.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer sonríe mientras deposita dinero en la alcancía, aceptó el reto financiero Protección',
                        title: 'Rasgos que definen tu relación con el dinero'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Finanzas personales en tiempos de crisis',
                    contentful_id: '3A4Eeg2391sR3jwuHTDdKW',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: 'Finanzas personales en tiempos de crisis',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Aprende a optimizar al máximo tus recursos en tiempos difíciles',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo:
                        'ahorro/afiliado/finanzas-personales-en-tiempos-de-crisis',
                      edadygenero: null,
                      contentful_id: 'tSOcDidhDKtOsZGKkSRMg',
                      updatedAt: '2020-10-28T19:36:12.591Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Revive el Webinar transmitido en directo para nuestros clientes con Natalia Gallego, experta en asesoría pensional, financiera y tributaria. ',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Finanzas-personales-en-tiempos-de-crisis 1263125313.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/72HD0lR1W60NqAXFGGOPxn/fbc51126bc9d3ec72df6310fdd11863f/Finanzas-personales-en-tiempos-de-crisis_1263125313.jpeg?w=800&q=50'
                        },
                        description:
                          'Empresaria recibe asesoría financiera para optimizar su bienestar y finanzas personales',
                        title:
                          'Finanzas personales en tiempos de crisis. Conoce cómo optimizar tus finanzas en momentos de coyuntura'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Clave Empresarial: la llave de acceso a un mundo de soluciones digitales',
                    contentful_id: '6oGanFCNp7BCNOrueZQSOp',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                          tituloCorto: 'Clave Empresarial'
                        }
                      ],
                      tituloCorto:
                        'Clave Empresarial: la llave de acceso digital',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'El acceso a los servicios con los que contamos en Proteccion.com',
                      textoCallToAction: 'Generar Clave',
                      urlSeo: 'empresas-cesantias-clave',
                      edadygenero: null,
                      contentful_id: '3Y1CnCbyvoIGBtWorEjZCw',
                      updatedAt: '2021-02-24T19:31:22.451Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'la clave empresarial te da acceso a los servicios con los que contamos en Proteccion.com, desde el lugar en que te encuentres y en el momento en que lo necesites.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Clave Empresarial la llave de acceso digital GettyImages-468077658.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/4njAsnQolVQR71DWgxRmfr/c109da36d89a62251cbb23b20d3a6612/Clave_Empresarial_la_llave_de_acceso_digital_GettyImages-468077658.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre en silla de ruedas sonríe, acaba de cambiarse a Protección como fondo de cesantías',
                        title:
                          'Clave Empresarial: la llave de acceso a un mundo de soluciones digitales'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo identificar tu situación financiera actual?',
                    contentful_id: '1aEj9lqEo2oxwZcW53SKjx',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto:
                        'Cómo identificar tu situación financiera actual',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Sigue estos pasos para conocerla y descubre cómo mejorarla',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo:
                        'ahorro/afiliado/identifica-tu-situacion-financiera',
                      edadygenero: null,
                      contentful_id: '4EyBqmnsroiflIjC61F64x',
                      updatedAt: '2020-10-28T19:33:35.875Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        '¿Sabes cómo está tu salud financiera? ¿Sabes en qué gastas el dinero? Te invitamos a que des el primer paso. Si bien hay cosas que no puedes evitar, sí puedes contribuir a mejorar tu situación con una buena planeación financiera.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'como identificar tu situacion financiera actual 1193229502.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/4kOAMDzjFruE3m95ry08zB/a781e8ac033a54cbe02b8cb7c00e688a/como_identificar_tu_situacion_financiera_actual_1193229502.jpeg?w=800&q=50'
                        },
                        description:
                          'Dos colegas evalúan cómo reinventar su negocio para continuar creciendo',
                        title:
                          'Conoce las técnicas básicas de finanzas personales'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Planeación: ¡Fortalece tu estabilidad financiera!',
                    contentful_id: '2TxIvvcc1g4QAsTuRHXT5z',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: '¡Fortalece tu estabilidad financiera!',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Ten claro tu objetivo actual, sin perder de vista el largo plazo.',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'Ahorro/afiliado/estabilidad-financiera',
                      edadygenero: null,
                      contentful_id: '17T6PgoJNtGr4dbleOo9p0',
                      updatedAt: '2021-01-06T20:52:37.847Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Si conoces el estado actual de tus finanzas, estás en camino a implementar buenos hábitos financieros y tienes un plan para esto, es importante que te traces metas y objetivos para así tener el control.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Fortalece tu estabilidad financiera 538568444.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/62UYcZ9u4ShXDdFKS1sAg1/0ddb4b4e4529a0940c2cb7ae7d2695cd/Fortalece_tu_estabilidad_financiera_538568444.jpeg?w=800&q=50'
                        },
                        description:
                          'Ama de casa, estudia los hábitos financieros de la familia, para tener mejor control de las finanzas',
                        title:
                          'Mantener a flote nuestras finanzas depende de tomar decisiones estratégicas'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Superheroínas o villanas. ¿Qué son las deudas para ti?',
                    contentful_id: '1EvfRGVHZDWmkyw7geyxYm',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        }
                      ],
                      tituloCorto:
                        'Superheroínas o villanas. ¿Qué son las deudas?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¿Tú, qué tipo de relación tienes con las deudas? Ingresa ahora',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro/afiliado/deudas',
                      edadygenero: null,
                      contentful_id: '5E3DqDPQ2QNg5IYgXJKQHU',
                      updatedAt: '2021-01-06T22:04:56.752Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Hay quienes ven las deudas como superheroínas que han llegado para sacarlos de una dificultad, mientras que para otros serán unas villanas despiadadas que pretenden quedarse con el patrimonio; todo dependerá del tipo de relación que establezcas con ellas.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'superheroinas o villandas .-Qu‚-son-las-deudas-para-ti 1126824182.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/2bTce9puO243u4jRUcHYd4/e59924916791de22e7e7a7d2c295a453/superheroinas_o_villandas_.-Qu___-son-las-deudas-para-ti_1126824182.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer en el escritorio de su cocina, hace un listado de sus deudas y crea un plan de ahorro',
                        title:
                          'Superheroínas o villanas. ¿Qué son las deudas para ti?'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Libre soy, ¡me alcanza la quincena!',
                    contentful_id: '1R4zhzbw5TPP7bVyiSIqFd',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '73qm7KPvufncQSOIIfRTUP',
                          tituloCorto: 'Tips de ahorro'
                        }
                      ],
                      tituloCorto: 'Libre soy, ¡me alcanza la quincena!',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Ingresa ahora y conoce técnicas básicas de finanzas personales.',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro/afiliado/me-alcanza-la-quincena',
                      edadygenero: null,
                      contentful_id: '5zWdjadtQHGRoGX4AtfOg4',
                      updatedAt: '2021-01-06T22:05:37.298Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        '¿Cómo está tu relación con el dinero? Es momento de revisar y analizar tus hábitos, recuerda que el dinero debe cuidarse y valorarse.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Libre-soy,-­me-alcanza-la-quincena 99967015.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/59BwqTM51rLFE2zJ0KuJBL/a52d707790d491ac0d210e2c9b594dcc/Libre-soy_-__me-alcanza-la-quincena_99967015.jpeg?w=800&q=50'
                        },
                        description:
                          'Emprendedora sonríe en su nuevo negocio, reflexiona sobre su relación con el dinero',
                        title:
                          'Libre soy, ¡me alcanza la quincena! Conoce técnicas básicas de finanzas personales'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¡Toma el control de tus finanzas en 21 días!',
                    contentful_id: '38AGshQzGWzEWRElR2465j',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto:
                        '¡Toma el control de tus finanzas en 21 días!',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡Únete a estos retos que desde Protección hemos creado para ti!',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'Ahorro/Afiliado/retofinanzas',
                      edadygenero: null,
                      contentful_id: '1jtLjl6Z3r8aeiEpdQC5wE',
                      updatedAt: '2021-01-06T22:10:13.671Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Únete ya a los retos que desde Protección hemos creado para ti y aprende cómo puedes mejorar tus finanzas. ¡Únete y genera hábitos financieros saludables en 21 días!',
                      imagenpequena: {
                        file: {
                          fileName:
                            'toma el control de tus finanzas reto 21 dias 576473587.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3WB3erbWaUJ0yDjBlV3hCD/73def6c5649fee112dee4f3b0df5fa15/toma_el_control_de_tus_finanzas_reto_21_dias_576473587.jpeg?w=800&q=50'
                        },
                        description:
                          'Emprendedor acepta el reto financiero de Protección, busca mejorar sus finanzas',
                        title:
                          'Cuidar la salud financiera, depende de implementar pequeños hábitos'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo está tu salud financiera?',
                    contentful_id: '2m3SUZpK9D7r2tbX1u9o8j',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: '¿Cómo está tu salud financiera?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Sigue estos pasos para conocerla y descubre cómo mejorarla',
                      textoCallToAction: 'Quiero conocerlas',
                      urlSeo: 'Ahorro-SaludFinanciera',
                      edadygenero: null,
                      contentful_id: '7pNuC0N7n4dcWs1G2Ien02',
                      updatedAt: '2020-10-28T19:28:54.715Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Este diagnóstico se trata, básicamente, de sumar y restar. No toma mucho tiempo y allí podrás encontrar cosas inesperadas que te permitirán saber cómo está tu situación financiera y qué medidas tomar para tener el control y mejorarla.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'como esta tu situacion finanaciera 1129609347.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/6hcvNN09lYr74ArWkziaA0/52570aa2185c56c7955c503c3761039f/como_esta_tu_situacion_finanaciera_1129609347.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer en su escritorio, escribe su situación financiera actual',
                        title:
                          'Descubre cómo mejorar tu situación financiera actual'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo realizar retiros de Pensión Voluntaria?',
                    contentful_id: '76bZfwI52kIgiPwksyiDzo',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                          tituloCorto: 'Beneficios'
                        }
                      ],
                      tituloCorto:
                        '¿Cómo realizar retiros de Pensión Voluntaria?',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'Facilidades para retirar sin salir de casa',
                      textoCallToAction: 'Quiero conocerlo',
                      urlSeo: 'empresas/ahorro/retiro',
                      edadygenero: null,
                      contentful_id: 'WIK9JIjSo0AKBd1f2jHT4',
                      updatedAt: '2021-03-02T13:31:48.461Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Si se llegó el momento de que tus colaboradores materialicen sus sueños y necesitan retirar su ahorro en Pensión Voluntaria, en Protección les ofrecemos facilidades para que puedan hacerlo sin salir de casa',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Cómo realizar retiros de Pensión Voluntaria GettyImages-1250486696.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/4KqmNjSpou3ssXcIQdfWVr/22bfcbd0e87e6149cc2b0947e54afaad/C__mo_realizar_retiros_de_Pensi__n_Voluntaria_GettyImages-1250486696.jpeg?w=800&q=50'
                        },
                        description:
                          'Dos colegas leen sobre el retiro de pensiones voluntarias en el área de máquinas de la empresa',
                        title:
                          'Llegó el momento de materializar sueños con las pensiones voluntarias'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo atender el reto financiero actual?',
                    contentful_id: '8zn9HVHIDDaIUYYHp9twJ',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: '¿Cómo atender el reto financiero actual?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Es momento de pensar y ejecutar. Conoce aquí algunos tips',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'ahorro-afiliado-empresas-retofinanciero',
                      edadygenero: null,
                      contentful_id: '6BUCawJvfstlsh1GNFOPZl',
                      updatedAt: '2021-02-15T20:48:22.519Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Es momento de pensar y ejecutar. Te damos 5 tips para que afrontes retos financieros.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'como atender el reto financiero actual gettyimages-494326845-2048x2048.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1Je5XqKe7zTUK8rYbGMq8o/5596bca0a4b2326814b55e12b947faf3/como_atender_el_reto_financiero_actual_gettyimages-494326845-2048x2048.jpeg?w=800&q=50'
                        },
                        description:
                          'Padre e hija sonríen en su negocio familiar, reinventaron su empresa para atender el reto financiero',
                        title:
                          'Negocio familiar afronta un reto financiero con 5 tips'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        },
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Liquida y paga Aportes en Pensión Voluntaria desde Proteccion.com',
                    contentful_id: '2nOIoPxoYzFT74cED0pgbZ',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                          tituloCorto: 'Beneficios'
                        }
                      ],
                      tituloCorto:
                        'Liquida y Paga Aportes en Pensión Voluntaria',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'Renovado servicio para liquidar y pagar aportes de tus empleados.',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'empresas-ahorro-liquidaypaga',
                      edadygenero: null,
                      contentful_id: 'BT6Tya9KnH9DrVgEyGHDw',
                      updatedAt: '2021-01-12T01:24:35.479Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'En Protección queremos simplificar tu día a día. Renovamos nuestro servicio para liquidar y pagar los aportes de tus empleados a Pensión Voluntaria. Sólo debes ingresar con tu usuario y clave a la zona transaccional de empresas. Te contamos cómo',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Liquida y paga Aportes en Pensión Voluntaria GettyImages-1158243057.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/6VFwuTUVXVDWG9qRXl93SM/c1ea736fca20d465f2ff7aae4a0b8a11/Liquida_y_paga_Aportes_en_Pensi__n_Voluntaria_GettyImages-1158243057.jpeg?w=800&q=50'
                        },
                        description:
                          'Pareja de esposos en la cocina de su casa, aprende a liquidar y pagar pensiones voluntarias en Protección',
                        title:
                          'Liquida y paga Aportes en Pensión Voluntaria desde Proteccion.com'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '4 apps que te ayudarán con el control de tus finanzas',
                    contentful_id: '4D4P6bnF5Kd04TR856hNYr',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto:
                        '4 Apps que ayudan con el control de tus finanzas',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Llevar el control de tus finanzas es muy fácil. Conoce cómo aquí',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'Ahorro-ControlFinanzas',
                      edadygenero: null,
                      contentful_id: '535cTVjJlMisArXFWxMz0l',
                      updatedAt: '2021-01-06T22:11:14.005Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Hoy en día llevar el control de tus finanzas es muy fácil. Conoce algunas aplicaciones que te permitirán administrar tu dinero, hacer seguimiento de tus gastos y tener una buena salud financiera',
                      imagenpequena: {
                        file: {
                          fileName:
                            '4 apps que te ayudaran con el control de tus finanzas 5133918948-.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/4uHDhb6P4SrflSlJUA6f6K/d775a2f2567e024811622801698d300b/4_apps_que_te_ayudaran_con_el_control_de_tus_finanzas_5133918948-.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre sonríe en su bicicleta, en su celular, descargó 4 apps para el control de sus finanzas',
                        title:
                          '4 aplicaciones para administrar tu dinero: Mobills, Splitwise, Tiendeo, Icoach'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Tips de finanzas para Pymes',
                    contentful_id: '1XiqoiGTRQno9MfIItsBdo',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                          tituloCorto: 'Finanzas'
                        }
                      ],
                      tituloCorto: 'Tips de finanzas para Pymes',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Te presentamos ideas para cumplir los objetivos de tu empresa',
                      textoCallToAction: 'Ir al video',
                      urlSeo: 'empresas-ahorro-tips',
                      edadygenero: null,
                      contentful_id: '3kkyjTeW98neCFIDyjzCx5',
                      updatedAt: '2020-10-28T19:33:10.890Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'En Protección te acompañamos a entender y conocer cómo afrontar una situación nueva que se presenta en el entorno, a través de tips financieros que te permitirán cumplir los objetivos de tu empresa. Aquí te contamos algunos:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Tips de finanzas para pymesGettyImages-1210338080.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/2tPJdAimf1ubxlRHFwOkIk/c9f039388b78885ac0fc8097ba75aede/Tips_de_finanzas_para_pymesGettyImages-1210338080.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer en silla de ruedas, comparte con sus compañeros tips de finanzas para pymes',
                        title:
                          'Cumple los objetivos de tu empresa con tips financieros'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Ahorro',
                          contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Consejos para la recuperación económica de tu empresa',
                    contentful_id: 'wtMZMG6yUWYF160pNl8k1',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '2tdNwtoxba1KzfELIhHS86',
                          tituloCorto: 'Novedades'
                        }
                      ],
                      tituloCorto:
                        'Consejos para la recuperación de tu empresa',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'Conoce estrategias para cuidar las finanzas en tiempos de crisis',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'empresas-ahorro-consejos',
                      edadygenero: null,
                      contentful_id: '5Vhjt7hBRmKXrZe1QRwFlA',
                      updatedAt: '2020-10-28T19:56:55.490Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'A continuación te compartimos algunas estrategias que te permitirán cuidar las finanzas de tu empresa en tiempos de crisis',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Consejos para la recuperación económica de tu empresa GettyImages-1152308557.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/13nYT6X5L78HcMtPubKbHA/a1657fb1037d38c541b711627f8bc5b3/Consejos_para_la_recuperaci__n_econ__mica_de_tu_empresa_GettyImages-1152308557.jpeg?w=800&q=50'
                        },
                        description:
                          'Dos socios, hacen una lluvia de ideas para la recuperación económica de su empresa',
                        title:
                          'Consejos para la recuperación económica de tu empresa'
                      },
                      categoriaCliente: null,
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Pensiones Voluntarias',
                      contentful_id: '4sjSQocJHJA3wehCeeaQel'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo retirar tus Cesantías?',
                    contentful_id: '6AAwozHUXCFQP7uBKNRrLm',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                          tituloCorto: 'Vivienda'
                        },
                        {
                          contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                          tituloCorto: 'Educación'
                        },
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto: '¿Cómo retirar tus Cesantías?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Conoce aquí cómo puedes retirar tus Cesantías. ¡Es muy fácil!',
                      textoCallToAction: 'Retirar mis Cesantías',
                      urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
                      edadygenero: null,
                      contentful_id: '24ZCw88Mt35VoQTtBW13pj',
                      updatedAt: '2021-03-10T14:45:54.875Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Con este servicio podrás iniciar tu retiro de cesantías (el valor no debe exceder $18.170.520) Anexa la documentación requerida y elige el medio de pago: transferencia a cuenta bancaria registrada en Protección o pago por ventanilla en una entidad bancaria',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT2C4-Cesantes_Cesantías_Cómo-retirar-las-cesantías_Cómo-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1qUG77uXNrvnRzb1fgGN9W/7825abeeabada7911ee09c6d8ef0beaa/CT2C4-Cesantes_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer joven va en transporte público mirando en su celular cómo retirar las cesantías',
                        title: 'Cómo retirar cesantías'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        },
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      'Retiro parcial de Cesantías por disminución de ingresos',
                    contentful_id: '4dFpDW8Mlw8uQTYk9TJDxl',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto: 'Retiro por Disminución de Ingresos',
                      textoCallToActionBite: '¡Conoce más aquí!',
                      textoIntroductorio:
                        'Conoce de qué se trata y consulta los requisitos',
                      textoCallToAction: 'Descargar',
                      urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
                      edadygenero: null,
                      contentful_id: '2LTgDjm1j1nHnUz3fNTj2d',
                      updatedAt: '2021-01-08T16:26:25.961Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Los empleados que estén teniendo una disminución temporal en su ingreso, a causa de la emergencia económica, social y ecológica que se presenta con el COVID-19, podrán hacer retiros parciales de sus Cesantías a través de nuestros canales digitales.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Retiro-parcial-por-disminución-de-ingresos-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5B8ojd26mum5cWNsKuymIx/481e8aa36abd3f44a3eac4a95e011481/Retiro-parcial-por-disminucio__n-de-ingresos-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre sonríe frente al portátil, al lado tiene una libreta con información del retiro parcial de cesantías',
                        title:
                          'Retiro parcial de cesantías por disminución de ingresos'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Retira en línea tus cesantías para educación',
                    contentful_id: '7q4LaxfY132rLe5IeT0dAx',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                          tituloCorto: 'Educación'
                        }
                      ],
                      tituloCorto:
                        'Retira en línea tus Cesantías para educación',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¡Es muy fácil! Aquí te contamos cómo puedes hacerlo',
                      textoCallToAction: 'Quiero conocer más',
                      urlSeo: 'cesantias/novedad/retiro-online-educacion',
                      edadygenero: null,
                      contentful_id: '2fvYudDKy1jmtbBZS5Cywo',
                      updatedAt: '2021-03-10T14:45:43.267Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        '¡Es momento de estudiar eso que siempre has querido! Hemos habilitado nuestro canal digital para que puedas solicitar el retiro de tus Cesantías a través de este medio, sin necesidad de ir a una Oficina de Servicio de Protección.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'Qué-son-los-intereses-de-las-cesantías-max.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1jTXd0Bt7y6YDOVmq4Cj22/c24f16f2591bc900ff69e3697921ffc9/Que__-son-los-intereses-de-las-cesanti__as-max.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre sonríe y toma café mientras retira sus Cesantías en Protección desde su celular',
                        title: 'Retira en linea tus Cesantías para educación'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Gestiona el retiro de Cesantías de tus empleados',
                    contentful_id: '3uJAFaqaj7jas7hT7XgBeu',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto:
                        'Gestiona el retiro de Cesantías de tus empleados',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Ingresa ahora y conoce cómo puedes realizar este procedimientos',
                      textoCallToAction: 'Ir a la Zona Transaccional',
                      urlSeo: 'empresas/gestionar-retiro-cesantias',
                      edadygenero: null,
                      contentful_id: '23wGFDP6zN4KUqUg39HTsH',
                      updatedAt: '2021-01-07T21:19:12.865Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        '¿Sabías que con la clave empresarial puedes gestionar, desde la zona transaccional, las solicitudes de retiro de cesantías de tus colaboradores? Aquí te enseñamos cómo hacerlo.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT8C1-Todos-los-públicos_Cesantías_Certificados-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3IC1KSzhmXhVkyMFv7mw4y/c9661678337582098ea0c331543428ea/CT8C1-Todos-los-pu__blicos_Cesanti__as_Certificados-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Hombre en su oficina analiza su certificado de cesantías',
                        title:
                          'Certificado de cesantías para todos los públicos'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                          nombre: 'Empleador'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¿Qué errores evitar a la hora de usar tus cesantías para educación?',
                    contentful_id: 'kM0QkyxBYxPsqIqubUAEy',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                          tituloCorto: 'Educación'
                        }
                      ],
                      tituloCorto:
                        '¡Evita estos errores! Cesantías para educación',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Consejos para el uso de tus Cesantías',
                      textoCallToAction: 'Conoce los requisitos',
                      urlSeo:
                        'cesantias/como-usarlas/educacion/que-errores-evitar',
                      edadygenero: null,
                      contentful_id: 'KzKMI2ncK81ThfXtLx2qJ',
                      updatedAt: '2021-01-06T22:32:08.754Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        '¿Tú, o algún miembro de tu familia, está pensando en estudiar? A continuación, compartimos algunos de los errores más comunes que debes evitar si quieres alcanzar este propósito:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT4C3-Todos-los-usuarios_Cesantías_Errores-comunes-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/Wye5GV9jANEuiOzbqz6TZ/c20e552aa74cf8521666c06dd64a3a83/CT4C3-Todos-los-usuarios_Cesanti__as_Errores-comunes-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer joven en el escritorio de su habitación, lee sobre los errores en el retiro de cesantías para educación',
                        title:
                          'Errores comunes al retirar las cesantías para educación'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Tips para invertir tus Cesantias en educación',
                    contentful_id: '65i65OtKdDLmSZXYKJyT6N',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                          tituloCorto: 'Educación'
                        }
                      ],
                      tituloCorto:
                        'Tips para invertir tus Cesantías en educación',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Queremos acompañarte para que cumplas tus sueños de educación',
                      textoCallToAction: 'Conocer más',
                      urlSeo:
                        'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
                      edadygenero: null,
                      contentful_id: 'xLPj9BcW9h0dBe2PAE2st',
                      updatedAt: '2021-01-06T22:30:42.244Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'En Protección queremos acompañarte para que cumplas todos tus sueños. Alcanzar tus metas educativas es una de las inversiones más importantes de tu vida, además estas contribuyen al desarrollo y bienestar de toda tu familia. Conoce aquí algunos tips:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/c7091d54565aed06cc7e739278a82638/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer sentada en su escritorio, lee en su portátil cómo usar las cesantías para educación',
                        title:
                          'Cómo los empleados, cesantes e independientes pueden usar las cesantías para educación '
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo:
                      '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
                    contentful_id: '2WBURMnPPcoB3CxEeyPKei',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                          tituloCorto: 'Vivienda'
                        }
                      ],
                      tituloCorto:
                        'Evita estos errores: Cesantías para vivienda',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Conoce algunos errores comunes que debes evitar',
                      textoCallToAction: 'Quiero saber',
                      urlSeo:
                        'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
                      edadygenero: null,
                      contentful_id: '1kio5mE1HZTJgBKSl89vM4',
                      updatedAt: '2020-10-08T20:36:09.329Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar: ',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/d3908025d2073d23f5ad3f31def6816f/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Pareja recibe asesoría sobre los errores más comunes al retirar las cesantías para vivienda',
                        title:
                          'Errores a evitar al retirar cesantías para vivienda si eres cesante o independiente'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        },
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo usar tus cesantías para vivienda?',
                    contentful_id: '6EENkCBRl5BGJBjsFqENSB',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                          tituloCorto: 'Vivienda'
                        }
                      ],
                      tituloCorto: '¿Cómo usar tus Cesantías para vivienda?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Te presentamos algunas recomendaciones',
                      textoCallToAction: 'Ir a Vecindario',
                      urlSeo: 'cesantias/como-usarlas/vivienda/independiente',
                      edadygenero: null,
                      contentful_id: '2Ft5SGyqMyQUeG4v9myhFN',
                      updatedAt: '2020-10-08T20:36:48.184Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Las cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Para alcanzar esta meta necesitas planeación y disciplina financiera, a continuación, te presentamos algunas recomendaciones:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT3C5-Cesante-e-independiente_Vivienda_Cómo-usarlas-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/211iVEe6WywsH3bkp6diz0/32594356382a92a34ed92c46141c5165/CT3C5-Cesante-e-independiente_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Esposos sonríen mientras leen documentos sobre cómo usar las cesantías para vivienda',
                        title:
                          'Cómo usar las cesantías para vivienda si soy cesante o independiente'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo ahorrar tus Cesantías para vivienda?',
                    contentful_id: '5CdGqVxjofIu9SDkxfwfEV',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                          tituloCorto: 'Vivienda'
                        }
                      ],
                      tituloCorto: '¿Cómo ahorrar tus Cesantías para vivienda?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        'Haz un plan de ahorro y alcanza el sueño de vivienda',
                      textoCallToAction: 'Ir a Vecindario',
                      urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
                      edadygenero: null,
                      contentful_id: '6skla3FWYh4i9LophEbi8G',
                      updatedAt: '2020-10-08T20:37:29.325Z',
                      relevancia: 'Relevancia Baja',
                      descripcioncorta:
                        'Comprar vivienda nueva o remodelar la actual, son algunas metas que requieren de un ahorro constante y disciplinado. Con tus Cesantías en Protección das el primer paso para hacer este sueño realidad. Sigue estas recomendaciones:',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/799f26e382b47bd99b7c28ba217edb43/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Esposos sentados en el piso de una habitación recién pintada, leen sobre cesantías para vivienda',
                        title:
                          'Cómo puedo usar las cesantías para vivienda si soy empleado'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Dónde puedo retirar mis Cesantías?',
                    contentful_id: '1gagtTMNyzVkFmONZUTHbb',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '6QSO0SouYnUllWRWOubCZR',
                          tituloCorto: 'Canales Retiro'
                        }
                      ],
                      tituloCorto: '¿Dónde puedo retirar mis Cesantías?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¿Ya decidiste la meta que quieres cumplir con tus Cesantías?',
                      textoCallToAction: 'Conocer más',
                      urlSeo:
                        'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
                      edadygenero: null,
                      contentful_id: '34Yl1Lbb9kwskG0a3VgjI3',
                      updatedAt: '2021-02-23T19:36:48.969Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Contamos con diferentes canales para que hagas el retiro de tus Cesantías. Puedes hacerlo a través de tu empleador; en nuestro sitio web, en nuestra AppProtección, o en los más de 400 corresponsales bancarios que están disponibles en el territorio nacional',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT2C3-Empleados_Cesantías_Cómo-retirar-las-cesantías_Cómo-retirar-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/3mRuHO8xEQBR9anMQcDkfc/d596aa096e9bcdb899b2c81e49505808/CT2C3-Empleados_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-retirar-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Pareja de esposos lee en su celular cómo retirar las cesantías',
                        title: 'Cómo retirar las cesantías para empleados'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo retirar tus Cesantías?',
                    contentful_id: '5h8Q4pFToba5sLPZf6mybv',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                          tituloCorto: 'Vivienda'
                        },
                        {
                          contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                          tituloCorto: 'Educación'
                        }
                      ],
                      tituloCorto: '¿Cómo retirar tus Cesantías?',
                      textoCallToActionBite: 'Quiero conocer más',
                      textoIntroductorio:
                        '¿Eres afiliado independiente? Conoce cómo retirar tus Cesantías',
                      textoCallToAction: 'Retirar mis Cesantías',
                      urlSeo:
                        'cesantias/como-usarlas/como-retirarlas/voluntario-independiente',
                      edadygenero: null,
                      contentful_id: '58AtRI5ZqBJGlcbCIPRjaM',
                      updatedAt: '2021-03-10T14:46:06.652Z',
                      relevancia: 'Relevancia Alta',
                      descripcioncorta:
                        'Si eres afiliado voluntario o independiente, puedes hacer el retiro de tus Cesantías en www.proteccion.com, con tu usuario y clave, sin necesidad de autorización de empleadores o validaciones de requisitos adicionales.',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/c7091d54565aed06cc7e739278a82638/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer sentada en su escritorio, lee en su portátil cómo usar las cesantías para educación',
                        title:
                          'Cómo los empleados, cesantes e independientes pueden usar las cesantías para educación '
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
                    contentful_id: '6YXhOyzaixyOlbzSaYwthX',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                          tituloCorto: 'Extractos y Certificados'
                        }
                      ],
                      tituloCorto:
                        'Extractos de Cesantías, ¿qué son y cómo leerlos?',
                      textoCallToActionBite: 'Quiero saber más',
                      textoIntroductorio:
                        'Hazle seguimiento a tu ahorro de Cesantías',
                      textoCallToAction: 'Conocer mi extracto',
                      urlSeo: 'cesantias/extractos/como-leerlos',
                      edadygenero: null,
                      contentful_id: 'UtvpGfgcpx7MxtxehglAd',
                      updatedAt: '2020-09-18T19:43:00.358Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Entenderlo, te permitirá hacer seguimiento a tu ahorro.',
                      imagenpequena: {
                        file: { fileName: 'JPG-1.jpg' },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                        },
                        description: '',
                        title: 'que son y como leerlos'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                },
                {
                  node: {
                    titulo: '¿Cómo obtener tus extractos de Cesantías?',
                    contentful_id: '25GPKs1Uph6JhkvDlkghFW',
                    contenido: {
                      Tema: [
                        {
                          contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                          tituloCorto: 'Extractos y Certificados'
                        }
                      ],
                      tituloCorto: '¿Cómo obtener tus extractos de Cesantías?',
                      textoCallToActionBite: 'Conocer más',
                      textoIntroductorio:
                        'Estos te permiten estar informado acerca de tu ahorro',
                      textoCallToAction: 'Actualizar mis datos',
                      urlSeo: 'cesantias/extractos/como-obtenerlos',
                      edadygenero: null,
                      contentful_id: '7dZqpgEfBvYgEPLkmCwYRR',
                      updatedAt: '2021-01-06T22:26:29.524Z',
                      relevancia: 'Relevancia Media',
                      descripcioncorta:
                        'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Conoce aquí cómo puedes descargarlos',
                      imagenpequena: {
                        file: {
                          fileName:
                            'CT10C2-Todos-los-públicos_Cesantías_Extractos_Cómo-descargarlos-AJUSTADO.jpeg'
                        },
                        fluid: {
                          src:
                            '//images.ctfassets.net/y3qdch79qxiw/1zghPXN0VjQHiXu2F57hvE/8b668834222f428a8ea3ed723d13bcb8/CT10C2-Todos-los-pu__blicos_Cesanti__as_Extractos_Co__mo-descargarlos-AJUSTADO.jpeg?w=800&q=50'
                        },
                        description:
                          'Mujer en su portátil, se encuentra descargando sus extractos de cesantías',
                        title: 'Descargar los extractos de cesantías'
                      },
                      categoriaCliente: [
                        {
                          descripcion: 'Cesante',
                          contentful_id: '5fP153BoelxfRsusePVnBU'
                        },
                        {
                          descripcion: 'Empleado',
                          contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                        },
                        {
                          descripcion: 'Independiente',
                          contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                        }
                      ],
                      tipoDeCliente: [
                        {
                          contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                          nombre: 'Afiliado'
                        }
                      ]
                    },
                    lineaDeProducto: {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  }
                }
              ]
            },
            allContentfulLineaDeNegocio: {
              edges: [
                {
                  node: {
                    nombre: 'Inversión',
                    textoIntroductorioBite:
                      '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
                  }
                },
                {
                  node: {
                    nombre: 'Pensiones Voluntarias',
                    textoIntroductorioBite:
                      'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
                  }
                },
                {
                  node: {
                    nombre: 'Pensiones Obligatorias',
                    textoIntroductorioBite:
                      'Conoce cómo podrás tener tranquilidad en tu etapa de jubilación'
                  }
                },
                {
                  node: {
                    nombre: 'Cesantías',
                    textoIntroductorioBite:
                      'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas'
                  }
                }
              ]
            },
            allContentfulTema: {
              edges: [
                {
                  node: {
                    tituloCorto: 'Genérico Pensiones',
                    contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Obligatorias',
                        contentful_id: '45FVyiIWU70wBqFgR750SE'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Educación',
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Inmovilización, Embargo y Pignoración',
                    contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Portafolios y Tributarios',
                    contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Canales Retiro',
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Extractos y Certificados',
                    contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Mecanismo de Protección al Cesante',
                    contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Beneficios',
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Novedades y Beneficios',
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'GENERICO INVERSIONES',
                    contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Finanzas',
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Generalidades',
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Tips de ahorro',
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Planes Institucionales',
                    contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Soluciones de ahorro',
                    contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Créditos y seguros',
                    contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Novedades',
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Acompañamiento',
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Vivienda',
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'GENERICO INVERSIONES',
                    contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                    lineaDeProducto: [
                      {
                        nombre: 'Inversión',
                        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Acompañamiento',
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Vivienda',
                    contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Liquidación y Pago',
                    contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Afiliado',
                        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                      },
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'Clave Empresarial',
                    contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                    lineaDeProducto: [
                      {
                        nombre: 'Cesantías',
                        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                      }
                    ],
                    tipoDeCliente: [
                      {
                        nombre: 'Empleador',
                        contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                      }
                    ]
                  }
                },
                {
                  node: {
                    tituloCorto: 'GENERICO PARA AHORRO',
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    lineaDeProducto: [
                      {
                        nombre: 'Pensiones Voluntarias',
                        contentful_id: '4sjSQocJHJA3wehCeeaQel'
                      }
                    ],
                    tipoDeCliente: null
                  }
                }
              ]
            },
            allContentfulPodcast: {
              edges: [
                {
                  node: {
                    titulo: 'Informe Semanal',
                    OrigenDeAudio: ['Contentful'],
                    linkPodcast: {
                      linkPodcast:
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                    },
                    descripcion:
                      'El mercado accionario global marcó retrocesos con caídas más pronunciadas en Europa',
                    updatedAt: '2021-03-12T14:16:06.308Z'
                  }
                },
                {
                  node: {
                    titulo: 'Al minuto con Protección',
                    OrigenDeAudio: ['Spotify'],
                    linkPodcast: {
                      linkPodcast:
                        'https://open.spotify.com/episode/2icvsJwMBB1B45mjTF7ckD?si=0V3KQiZZTsiUDZWdVTF9dA'
                    },
                    descripcion:
                      'Avances en las vacunas pesan más que el incremento en casos.',
                    updatedAt: '2020-12-01T15:36:11.494Z'
                  }
                },
                {
                  node: {
                    titulo:
                      'La volatilidad en los mercados ha ido aumentado, tal como se esperaba.',
                    OrigenDeAudio: ['Spotify'],
                    linkPodcast: {
                      linkPodcast:
                        'https://open.spotify.com/embed-podcast/show/2PgqwvmicwiqkdbZfgSzTi'
                    },
                    descripcion:
                      'Hoy último debate presidencial en EE.UU Expectativas y posibles impactos con Juan Ignacio Medina.',
                    updatedAt: '2020-10-28T17:36:36.953Z'
                  }
                }
              ]
            }
          }
        },
        '764694655': {
          data: {
            site: {
              siteMetadata: {
                title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión ',
                description:
                  '¡Protección tiene lo que necesitas! Queremos conocerte y saber qué te interesa: Invertir, ahorrar, saber sobre pensiones o cesantías. Ingresa aquí.',
                author: '@proteccion',
                siteUrl: 'https://https://vaxtpmde69.proteccion.com.co'
              }
            }
          }
        },
        '1903881951': {
          data: {
            allContentfulCanal: {
              edges: [
                {
                  node: {
                    descripcion: {
                      descripcion:
                        '__Bogotá:__ (031) 744 44 64\n__Medellín:__ (034) 510 90 99\n__Cali:__ (032) 386 00 80\n__Barranquilla:__ (035) 319 79 99\n__Cartagena:__ (035) 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000\n'
                    },
                    nombre: 'Líneas de Servicio'
                  }
                }
              ]
            }
          }
        }
      }
    },
    uri: '/',
    pageContext: {},
    params: {},
    data: {
      allContentfulLeyesYDecretos: {
        edges: [
          {
            node: {
              contenido: [
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: 'categoriaCliente',
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: 'novedad/futuro-sostenible',
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: 'as',
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: null,
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: null,
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                }
              ]
            }
          }
        ]
      },
      allContentfulCorporativoYAccionistas: {
        edges: [
          {
            node: {
              contenido: [
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: 'categoriaCliente',
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: 'novedad/futuro-sostenible',
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: 'as',
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: null,
                    title: 'futuros sostenibles'
                  },
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                },
                {
                  titulo: '¡Estamos comprometidos con un futuro sostenible!',
                  tipoContent: 'novedad',
                  tituloCorto:
                    '¡Estamos comprometidos con un futuro sostenible!',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    },
                    {
                      nombre: 'Inversión',
                      contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                    },
                    {
                      nombre: 'Pensiones Obligatorias',
                      contentful_id: '45FVyiIWU70wBqFgR750SE'
                    }
                  ],
                  imagen: {
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                    },
                    file: {
                      fileName:
                        'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                    },
                    description: '',
                    title: 'futuros sostenibles'
                  },
                  categoriaCliente: null,
                  type: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ],
                  imagenpequena: null,
                  nombreImagen: 'futuros sostenibles',
                  tipoBite: 'novedad',
                  link: 'novedad/futuro-sostenible',
                  urlSeo: null,
                  relevancia: 'Relevancia Baja',
                  updatedAt: '2021-02-08T16:32:31.340Z',
                  generoEdad: null,
                  descripcion:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoIntroductorio:
                    'El futuro sostenible lo hacemos conservando nuestros recursos',
                  textoBoton: 'Quiero conocer más',
                  textoCallToActionBite: 'Quiero conocer más'
                }
              ]
            }
          }
        ]
      },
      allContentfulActualidadDeInversiones: {
        edges: [
          {
            node: {
              titulo: 'Qué dice el experto',
              contentful_id: '2iSc262lfCDuc5XCafkl7K',
              urlSeo: 'inversiones/actualidad/el-experto-dice',
              updatedAt: '2020-12-10T14:40:58.480Z',
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ],
              categoriaCliente: [
                {
                  descripcion: 'Estoy Aprendiendo',
                  contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                },
                {
                  descripcion: 'Conozco de Inversiones',
                  contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                }
              ],
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ],
              Tema: [
                {
                  titulo: 'GENERICO INVERSIONES',
                  contentful_id: '4JYXjOW5V5v8hrNyNI9x43'
                }
              ],
              contenidoCorporativo: {
                titulo: '¿En dónde estamos parados?',
                TituloCortoBite:
                  '¿En dónde estamos parados? - Qué dice el experto',
                TextoCallToActionBite: 'Quiero conocer más',
                TextoIntroductorioBite:
                  'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
                Relevancia: 'Relevancia Media',
                CuerpoContenido: {
                  json: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Juan Ignacio Medina Villar',
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
                            value: 'Líder Estrategias Ahorro e Inversión',
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
                              'Han pasado ya más de 5 meses desde que inició la pandemia generada por el COVID 19 y en este período de tiempo, y hablando específicamente del desempeño de los diferentes mercados financieros, hemos observado unos movimientos que han resultado bastante sorpresivos. Índices como el S&P 500 se ha apreciado más del 50% desde el 23 de marzo, el índice NASDAQ más de un 60%, y en términos generales, se ha evidenciado un comportamiento muy favorable para los activos de riesgo, esto en gran parte explicado por las expectativas de una recuperación económica rápida y por los enormes estímulos fiscales entregados por los gobiernos y de igual forma, por los principales Bancos Centrales apoyando en materia monetaria.\n',
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
                              'Con esto en mente y pensando en lo que en el cierre de 2020, es importante tener claro cuáles son esos riesgos que se pueden materializar y que se deben estar monitoreando de manera cercana. En este sentido, el avance respecto al control de la pandemia será muy relevante, sobre todo dados los nuevos rebrotes que se han visto en Europa y de igual forma, de cara a los avances en la vacuna. Adicional a esto, existen otros factores muy relevantes para tener en cuenta, donde las elecciones presidenciales en EE.UU. el próximo 3 de noviembre, dado las implicaciones que pudiera tener para los mercados sobre todo si Joe Biden termina siendo elegido.',
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
                              'De presentarse una “barrida Demócrata” lo que significa que dicho partido se quede con el control no solo de la Casa Blanca sino también del Senado, sería una señal de que podría haber cambios en temas muy sensibles como los impuestos, tanto a nivel corporativo como para el ingreso de las personas más ricas; adicional a esto, se abre un espacio a que se pueda implementar más fácilmente una ambiciosa agenda demócrata donde las nuevas regulaciones a sectores críticos causaría cierta aversión al riesgo, al menos en el corto plazo.',
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
                                marks: [],
                                value:
                                  'Estas regulaciones se enfocarían en sectores como Tecnología, en donde se buscaría pasar leyes anti-monopolio y que afectaría directamente a las gigantes tecnológicas como Google, Amazon, Facebook entre otras.',
                                nodeType: 'text'
                              }
                            ],
                            nodeType: 'paragraph'
                          }
                        ],
                        nodeType: 'blockquote'
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'En el sector salud, los cambios vendrían asociados a renegociar los precios de las drogas, atándolos a los precios internacionales y de igual forma, buscando introducir una nueva opción pública similar al Medicare. Respecto al sector financiero, se pretendería implementar un impuesto a las transacciones, donde vale la pena tener en cuenta que es muy probable que Elizabeth Warren, excandidata demócrata y de fuerte posición de izquierda, podría ocupar e puesto de Secretaria del Tesoro.',
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
                              'Para los mercados financieros esto sería en el corto plazo visto como negativo, y seguramente habría volatilidad, mientras que, de ser Donal Trump reelegido, seguiría el status quo y no se esperarían cambios significativos. De todas formas, hay que tener claro que de ser la segunda opción la que se materialice, hacia adelante también veríamos amenazas económicas que estarían muy asociadas a los altos niveles de endeudamiento de Estados Unidos y que podrían afectar el desempeño futuro.',
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
                              'A manera de conclusión podríamos decir que las diferentes economías empiezan a avanzar en un proceso de recuperación económica, más lento en algunos países que en otros, y que, dejando a un lado el COVID-19, los mercados empiezan a incorporar en los precios otro tipo de elementos, tales como los posibles resultados en materia de elecciones presidenciales en EE.UU., confrontaciones comerciales entre EE.UU. y China, y en términos económicos, las políticas que sigan los principales Bancos Centrales, donde evidentemente la FED juega un\npapel determinante y más ahora con el anuncio de la nueva estrategia en materia de política monetaria que seguramente oficializarían en su próxima reunión. La tarea para los inversionistas y ahorradores seguirá siendo mantenerse invertidos en función de su perfil de riesgo y objetivos de inversión, para que sea cual sea el evento que genere volatilidad, no se pierda el rumbo y se logren alcanzar las metas planteadas.',
                            nodeType: 'text'
                          }
                        ],
                        nodeType: 'paragraph'
                      }
                    ],
                    nodeType: 'document'
                  }
                },
                descripcionCallToAction: {
                  descripcionCallToAction:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum magna et leo luctus congue.'
                },
                linkCallToAction: {
                  linkCallToAction:
                    'https://www.proteccion.com/contenidos/ahorro/afiliado/momento-de-ahorrar/'
                }
              },
              imagen: {
                file: {
                  url:
                    '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg',
                  fileName: 'JPG-1.jpg'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/7snnRgd1Sc7W4iImyihZ3d/700775a87fbc37ac600494f73016c2ea/JPG-1.jpg?w=800&q=50'
                }
              },
              descripcion: {
                id: 'f80df2b7-25dc-5521-874d-52e9ef1e463d',
                descripcion: 'Lorem'
              }
            }
          }
        ]
      },
      allContentfulOfertaComplementaria: {
        edges: [
          {
            node: {
              contenido: {
                titulo: '¡Estamos comprometidos con un futuro sostenible!',
                tipoContent: 'novedad',
                tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
                category: [
                  {
                    nombre: 'Cesantías',
                    contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                  },
                  {
                    nombre: 'Inversión',
                    contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                  },
                  {
                    nombre: 'Pensiones Obligatorias',
                    contentful_id: '45FVyiIWU70wBqFgR750SE'
                  }
                ],
                imagen: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                  },
                  description: 'd',
                  title: 'futuros sostenibles'
                },
                categoriaCliente: 'categoriaCliente',
                type: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                  },
                  description: '',
                  title: 'futuros sostenibles'
                },
                nombreImagen: 'futuros sostenibles',
                tipoBite: 'novedad',
                link: 'novedad/futuro-sostenible',
                urlSeo: 'novedad/futuro-sostenible',
                relevancia: 'Relevancia Baja',
                updatedAt: '2021-02-08T16:32:31.340Z',
                generoEdad: null,
                descripcion:
                  'El futuro sostenible lo hacemos conservando nuestros recursos',
                textoIntroductorio:
                  'El futuro sostenible lo hacemos conservando nuestros recursos',
                textoBoton: 'Quiero conocer más',
                textoCallToActionBite: 'Quiero conocer más'
              }
            }
          }
        ]
      },
      allContentfulCampana: {
        edges: [
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                tituloCorto:
                  'Paga las Cesantías de los empleados del hogar, aquí',
                descripcioncorta:
                  'Sabemos que para ti es importante acompañar a las personas que te ayudan en las labores del hogar, para que construyan su futuro y vivan un mejor mañana.',
                updatedAt: '2021-02-23T19:40:56.210Z',
                edadygenero: null,
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                categoriaCliente: [
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5ymmJfcHuFF0JgLsOIX42Q/09a361490542119d0d517d6da84334c9/Cesant__as_para_Empleados_del_hogar_GettyImages-1214479802.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Cesantías para Empleados del hogar GettyImages-1214479802.jpeg'
                  },
                  description:
                    'Mujer sentada en la sala de su casa, hace cuentas de cuánto debe pagarle de Cesantías a los empleados de su hogar',
                  title:
                    '¿No sabes cuánto debes pagar por las Cesantías de tus empleados del hogar?'
                },
                textoIntroductorio:
                  'Acompaña a las personas que te ayudan en las labores del hogar. ¡Consigna sus Cesantías!',
                textoCallToAction: 'Pagar Cesantías',
                urlSeo: 'cesantias/pago-de-cesantias-a-empleados-del-hogar',
                contentful_id: 'qoAqkbabLqNr3eOcstzKk',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Alta',
                tipoBite: 'campañas',
                tipoContent: 'campañas'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                tituloCorto: 'Afiliación 100% Digital',
                descripcioncorta:
                  'Entendiendo los retos de digitalización y agilidad que buscan hoy los usuarios en todas sus experiencias, presentamos nuestro servicio de afiliación a Pensión Obligatoria de forma 100% digital',
                updatedAt: '2020-11-03T20:05:52.901Z',
                edadygenero: null,
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Pensión por invalidez',
                    contentful_id: '7lDDi92WQvINHDoyppiGG1'
                  },
                  {
                    descripcion: 'Pensión por sobrevivencia',
                    contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Soy pensionado',
                    contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
                  },
                  file: { fileName: 'AfiliaciondigitalHOME.png' },
                  description: 'Afiliación 100% digital a Pensión Obligatoria',
                  title: 'Afiliación Digital'
                },
                textoIntroductorio:
                  '¡Afíliate a Pensión Obligatoria en segundos!',
                textoCallToAction: '¡Quiero afiliarme!',
                urlSeo: 'campana/afiliacion-pension',
                contentful_id: '2KGDTXOz5HAsxrnsqW6IEa',
                textoCallToActionBite: 'Ver más',
                relevancia: 'Relevancia Alta',
                tipoBite: 'campañas',
                tipoContent: 'campañas'
              }
            }
          }
        ]
      },
      allContentfulNovedad: {
        edges: [
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  },
                  {
                    contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                    tituloCorto: 'GENERICO INVERSIONES'
                  },
                  {
                    contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                    tituloCorto: 'Genérico Pensiones'
                  }
                ],
                tituloCorto:
                  'Disponibles los certificados para la Declaración de Renta 2020',
                descripcioncorta:
                  '¡Ahora es posible generar el certificado de una manera mucho más fácil y rápida!, hemos mejorando la experiencia de servicio para así contribuir y cumplir con aquellas obligaciones tributarias.',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Conozco de Inversiones',
                    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Estoy Aprendiendo',
                    contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Pensión por invalidez',
                    contentful_id: '7lDDi92WQvINHDoyppiGG1'
                  },
                  {
                    descripcion: 'Pensión por sobrevivencia',
                    contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  }
                ],
                textoIntroductorio:
                  '¡Ahora es posible generar el certificado de una manera mucho más fácil y rápida!',
                textoCallToAction: 'Ir a Certifacil',
                urlSeo: 'personas/certificados-para-declaracion-de-renta',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '5JFWsQtXW9K93PzbgVFE3N',
                updatedAt: '2021-03-16T15:16:33.332Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Alta',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2G9IvaEsME5FT7PAdVoTKs/3bddcf869897e2aad7b542ec72bd4ed4/GettyImages-1172040755.jpeg?w=800&q=50'
                  },
                  file: { fileName: 'GettyImages-1172040755.jpeg' },
                  description:
                    'Mujer y hombre, sentados frente al computador, sonríen mientras descargan los certificados para la declaración de renta 2020, en el sitio web de Protección.',
                  title: 'Certificados para la Declaración de Renta 2020'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                    tituloCorto: 'GENERICO INVERSIONES'
                  }
                ],
                tituloCorto:
                  'Los aportes de Mi Reserva migran al portafolio Protección Vista',
                descripcioncorta:
                  'Este proceso interno comenzará el 26 de marzo de 2021 y concluirá el 29 del mismo mes. A partir del 24 de marzo estarán suspendidos los retiros desde Mi Reserva.',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  },
                  {
                    descripcion: 'Conozco de Inversiones',
                    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                  },
                  {
                    descripcion: 'Estoy Aprendiendo',
                    contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                  }
                ],
                textoIntroductorio: 'Conoce los detalles de esta definición',
                textoCallToAction: 'Soluciones de ahorro',
                urlSeo: 'ahorro/migracion-aportes-mi-reserva',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '2nXeh7XusdoZvgHkHyZ5DN',
                updatedAt: '2021-02-24T23:04:35.744Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Alta',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2zY3RpvLi8bCzmbPGSKE4B/b400979050d5224441648b19e3cb7def/Los_aportes_de_Mi_Reserva_migran_al_portafolio_Protecci__n_Vista_GettyImages-1175117686.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Los aportes de Mi Reserva migran al portafolio Protección Vista GettyImages-1175117686.jpeg'
                  },
                  description:
                    'Mujer, en su casa, revisa las novedades de proteccion.com en su celular',
                  title:
                    'Los aportes de Mi Reserva migran al portafolio Protección Vista'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
                descripcioncorta:
                  'Protección marca un hito trascendental en la transformación del proceso de inversiones con características de sostenibilidad. Durante más de 28 años hemos trabajado para proteger el futuro de millones de personas con la convicción de un futuro sostenible.',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                textoIntroductorio:
                  'El futuro sostenible lo hacemos conservando nuestros recursos',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'novedad/futuro-sostenible',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '6SOdfejKD5VT2a7pb4fiTy',
                updatedAt: '2021-02-08T16:32:31.340Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
                  },
                  description: '',
                  title: 'futuros sostenibles'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto:
                  'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
                descripcioncorta:
                  '¡Una meta es eso que quieres lograr! Para que sea fácil alcanzarlas, debes seleccionar propósitos claros, medibles y alcanzables. Cuando inicies el año es importante que tus metas estén divididas en categorías, así será más sencillo hacerles seguimiento.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
                textoCallToAction: 'Quiero ahorrar',
                urlSeo: 'ahorro/cumplir-propositos',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '5GWZyQhTDwnhCHiyDoHH4b',
                updatedAt: '2021-02-19T18:48:43.563Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
                  },
                  description:
                    'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
                  title: '2021 nueva oportunidad para cumplir propósitos'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                tituloCorto: '¡Ahorra tus Cesantías en Protección!',
                descripcioncorta:
                  '¡Empieza a hacer realidad tus sueños desde HOY! Tus Cesantías en Protección son el primer paso para alcanzar todas tus metas.',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  }
                ],
                textoIntroductorio:
                  'Ahorrando tus cesantías en Protección puedes tener un salvavidas para tus sueños',
                textoCallToAction: 'Quiero saber más',
                urlSeo: 'cesantias/ahorra-tus-cesantias',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '1Xek9IJ6HyYsbI3pH71uan',
                updatedAt: '2021-01-28T14:21:47.227Z',
                textoCallToActionBite: 'Quiero saber cómo',
                relevancia: 'Relevancia Alta',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2V9dVBgyyjNnS6hyvFo4pS/c96e87ca52d900cd919b4312686aa377/CES.png?w=800&q=50'
                  },
                  file: { fileName: 'CES.png' },
                  description: '',
                  title: 'Ahorra tus Cesantías en Protección'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    tituloCorto: 'Beneficios'
                  },
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                tituloCorto: 'Comprar vivienda y conocer todos los subsidios',
                descripcioncorta:
                  '¡Alcanzar tu sueño de tener casa propia sí es posible! Ahorrar en Protección es el primer paso para lograr este objetivo.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  '¡Alcanzar tu sueño de tener casa propia sí es posible!',
                textoCallToAction: 'Ir a Vecindario',
                urlSeo: 'ahorro-beneficio-vivienda',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '2ZDV5OhobOW7momvTib6SR',
                updatedAt: '2021-02-15T20:46:23.720Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Comprar vivienda y conocer todos los subsidios.jpeg'
                  },
                  description:
                    'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
                  title:
                    '¿Cómo comprar vivienda y descubrir todos los subsidios?'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                },
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto:
                  '¿Por qué es importante conocer tu historial de crédito?',
                descripcioncorta:
                  'Seguramente cuando has solicitado un crédito, el asesor del banco te ha informado que su aprobación dependerá del puntaje de crédito que tengas en las centrales de riesgo y que la tasa de interés también dependerá de tu historial crediticio.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  '¿Quieres conocer tu historial de crédito y saber cómo te están viendo los bancos?',
                textoCallToAction: 'Ir a Enbanca',
                urlSeo: 'ahorro/historial-crediticio',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: 'zMUq9h5oa0vLMpHV8UZPO',
                updatedAt: '2021-02-15T20:44:10.564Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/VGwvTpstKw9I7ouGfCNqF/af06bf0efab234c5cc46b727d8fddaf5/embanca_articulo_historial_credito.PNG?w=800&q=50'
                  },
                  file: {
                    fileName: 'embanca articulo historial credito.PNG'
                  },
                  description: '',
                  title: 'embanca articulo historial credito'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  }
                ],
                tituloCorto: 'Pasar de la preocupación a la acción',
                descripcioncorta:
                  'Es el momento de despertar tu ingenio financiero, encontrar el camino ideal para reinventarte y seguir creciendo junto a tus sueños.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'Ahorro-Afiliado-PreoupacionAlaAccion',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '7pcPW4Q3tv1YhGCFQ97NP8',
                updatedAt: '2020-12-09T21:00:08.103Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg'
                  },
                  description:
                    'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
                  title:
                    'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto:
                  '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
                descripcioncorta:
                  'En el siguiente infográfico podrás conocer qué son las tasas de interés, los tipos de tasas que hay, algunos consejos prácticos y mucho más. Antes de iniciar, recuerda: tu estabilidad económica depende de las decisiones que tomes.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
                textoCallToAction: '¿Cómo realizar el curso?',
                urlSeo: 'ahorro/tasas-de-interes',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '7trmAT0XHkH0oFCWpnUCtw',
                updatedAt: '2020-11-10T15:23:41.712Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
                  },
                  description:
                    'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
                  title:
                    '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: 'Finanzas para la educación de tus hijos',
                descripcioncorta:
                  'La familia es la mayor inspiración para soñar en grande y el mejor equipo para conseguir con éxito lo que deseamos. Cuando te sientes tranquilo con el bienestar de tu familia, te recargas de energía para luchar por los objetivos comunes.',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                textoIntroductorio:
                  '¡Conoce aquí 3 formas de organizar tus finanzas! ',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '4XsWBBaoPGooMdj2z8VH1A',
                updatedAt: '2020-10-28T19:35:46.702Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
                  },
                  file: {
                    fileName: 'Finanzas para la educación de tus hijos.png'
                  },
                  description: '',
                  title: 'Finanzas para la educación de tus hijos'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: '¿Estoy cumpliendo mi objetivo personal?',
                descripcioncorta:
                  'Cuando hablamos de objetivos financieros que involucran hábitos como el ahorro, es muy fácil perder el rumbo; pues las decisiones de consumo inmediato pueden estropear el cumplimiento de los propósitos futuros. ',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/personas/objetivo-personal',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '5FpgrPZ37ga7vie2nbq6T4',
                updatedAt: '2020-10-28T19:42:47.859Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
                  },
                  file: {
                    fileName:
                      '3 Por qué no estoy cumpliendo mi objetivo personal.png'
                  },
                  description: '',
                  title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  }
                ],
                tituloCorto: 'Un viaje por la cultura del ahorro',
                descripcioncorta:
                  'El ahorro es un hábito que brinda seguridad cuando hay incertidumbre. Las motivaciones o estrategias para crear hábitos de ahorro varían de acuerdo con las culturas y lo que se enseña en cada una de estas. A continuación, te contamos un poco más:',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
                textoCallToAction: 'Iniciar reto financiero',
                urlSeo: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '5pqMkp3LUtmxcXgzycCzpg',
                updatedAt: '2021-01-06T20:58:10.844Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
                  },
                  file: {
                    fileName: '1 Un viaje por la cultura del ahorro.png'
                  },
                  description: '',
                  title: 'Un viaje por la cultura del ahorro'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                tituloCorto: 'Inteligencia Artificial para las compañías',
                descripcioncorta:
                  'Expertos coinciden en afirmar que la Inteligencia artificial “AI” es un factor clave de competitividad. Derribar el mito de que su acceso es exclusivo para las grandes multinacionales es el reto.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Este factor de competitividad no sólo es para grandes empresas',
                textoCallToAction: 'Quiero saber más',
                urlSeo: 'empresas-novedades-inteligencia',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '4CCrkrPS86bAamDlNRsPBY',
                updatedAt: '2020-11-20T15:37:37.565Z',
                textoCallToActionBite: 'Quiero saber más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2FCvrApgz9ZKGHQrDV2jkV/bfca8de965e8934c558a1b97d6ea1fb3/Inteligencia_Artificial_para_las_compa____as_GettyImages-960890176.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Inteligencia Artificial para las compañías GettyImages-960890176.jpeg'
                  },
                  description:
                    'Hombre descansa en un cojín en su oficina. Lee los beneficios de tener las cesantías en Protección en su portátil',
                  title:
                    'Inteligencia artificial a la medida de todas las compañías'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                tituloCorto: 'El doble reto de liderar durante el cambio',
                descripcioncorta:
                  'Te damos algunos consejos para continuar acompañando a tu equipo desde la virtualidad en tiempos de cambio',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Tips para acompañar a tu equipo de trabajo desde la virtualidad',
                textoCallToAction: 'Quiero saber más',
                urlSeo: 'empresas-ahorro-doble-reto',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '6e5edis0NiF2c6l8wTfr3G',
                updatedAt: '2020-11-20T15:36:25.317Z',
                textoCallToActionBite: 'Quiero conocerlos',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6FYod4xNtJzykqmDBoGh6c/6f4c0dc80a3cf9cadc11d093e0959f9f/El_doble_reto_de_liderar_durante_el_cambioGettyImages-1080558212.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'El doble reto de liderar durante el cambioGettyImages-1080558212.jpeg'
                  },
                  description:
                    'Mujer sonríe en su negocio de accesorios para mujer, sus cesantías para empresa están en Protección',
                  title: 'El doble reto de liderar durante tiempos de cambio'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                },
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                tituloCorto: 'La transformación de la contratación',
                descripcioncorta:
                  '¿Sabes cómo ha cambiado la atracción y contratación de talento en la última década? Aquí te contamos sobre las tendencias que marcaron años anteriores y que influenciarán el futuro de este sector.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  '¿Sabes cómo ha cambiado la contratación en la última década? ',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/empresas/transformacion-procesos-de-seleccion',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '2eoZQhAobK4Y4eAyh1n9tf',
                updatedAt: '2021-01-06T21:06:11.675Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4KYSlxEopkSuleWaXHAdY/f6978fb8ac05a3cd58d6b175a1ddfc4e/La_transformacion_de_la_contratacion_GettyImages-1183066519.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'La transformacion de la contratacion GettyImages-1183066519.jpeg'
                  },
                  description:
                    'Diseñadora da puntadas a un vestido, tiene máquina de coser y un canasto con prendas, recibió asesoría de cesantías',
                  title: 'La transformación de la contratación'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                tituloCorto: 'Atracción del talento joven. ¿Cómo hacerlo?',
                descripcioncorta:
                  'En tiempos de cambios sociales y tecnológicos, las compañías han encontrado en el talento joven a una punta de lanza para mejorar sus procesos, ambientes laborales y compromisos sociales. Atraerlos y retenerlos se convierte en un tema prioritario.',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  '¿Por qué atraer y retener a los jóvenes es un tema prioritario?',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'empresas/atraccion-talento-joven',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '7MW3MO4AFSmm8kzB7W1JmL',
                updatedAt: '2020-11-20T15:45:17.220Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Alta',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4TSPEuK1MPibDh8KKa1caF/95c995eb36952cee215b7fa96f53cafe/Atraccion_del_talento_joven_c__mo_hacerlo_GettyImages-951098160.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Atraccion del talento joven cómo hacerlo GettyImages-951098160.jpeg'
                  },
                  description:
                    'Hombre habla por celular fuera de la sala de juntas, recibe asesoría para tener sus cesantías en Protección',
                  title: 'Atraccion del talento joven, ¿cómo hacerlo?'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                tituloCorto: '¿Qué talento requiero atraer hoy?',
                descripcioncorta:
                  'De acuerdo con el análisis de José Manuel Echeverry, Vicepresidente de Gestión Humana y Sostenibilidad de Protección, son cinco las características básicas que marcarán los criterios de selección de personal, te invitamos a conocerlas:',
                edadygenero: null,
                categoriaCliente: null,
                textoIntroductorio:
                  'Hay 5 características básicas que marcarán criterios de selección',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/empresas/el-mejor-talento',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                contentful_id: '6UDMDTPqYwsAk67KYITyz9',
                updatedAt: '2021-02-19T19:03:38.893Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4UQo782xNw0Yvk1DatxDZm/6ea1786455cca6ba30f6c74d8fa5ec28/Qu___talento_requiero_a_traer_hoy_GettyImages-600580231.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Qué talento requiero a traer hoy GettyImages-600580231.jpeg'
                  },
                  description:
                    'Pareja sostiene a su perro, sonríen en la cocina de su nueva casa, posible gracias a los subsidios',
                  title:
                    '¿Qué talento requiero atraer hoy para impactar el mañana?'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ]
            }
          },
          {
            node: {
              contenido: {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                tituloCorto: 'Ejemplo contenido pensiones NOVEDAD',
                descripcioncorta:
                  'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
                edadygenero: null,
                categoriaCliente: [
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  }
                ],
                textoIntroductorio:
                  'Estar bien informado te permitirá tomar las mejores decisiones',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'mitos-realidades',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                contentful_id: '7cevJhYJOiJLWaaKM5nswj',
                updatedAt: '2021-03-16T21:17:25.078Z',
                textoCallToActionBite: 'Quiero conocer más',
                relevancia: 'Relevancia Baja',
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                  },
                  file: { fileName: 'JPG-1.jpg' },
                  description: '',
                  title: 'que son y como leerlos'
                },
                tipoBite: 'novedad',
                tipoContent: 'novedad'
              },
              lineadenegocio: [
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ]
            }
          }
        ]
      },
      allContentfulBeneficio: {
        edges: [
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                urlSeo: 'empresas/oferta-proteccion',
                edadygenero: null,
                contentful_id: '63dP1HNCS9VGft1DuCbbPd',
                relevancia: 'Relevancia Alta',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/M6LMYIG5oUiF5KB4wQxSk/c87838d73b7fd2da7f03fe4695e9d08a/Oferta_para_Empresas_FALTA_GettyImages-651424163.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Oferta para Empresas FALTA GettyImages-651424163.jpeg'
                  },
                  description:
                    'Grupo de personas conversando en la sala de ventas acerca de los beneficios que Protección tiene para las empresas y sus colaboradores',
                  title:
                    'Oferta Protección para las empresas y sus colaboradores'
                },
                tituloCorto:
                  '¡Conoce la oferta que tenemos para tu empresa en Protección!',
                updatedAt: '2021-01-25T21:55:15.710Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
                textoCallToAction: 'Conoce más',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'Permite que los sueños, tanto de tu empresa como de tus colaboradores, se cumplan HOY.',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                    tituloCorto: 'Vivienda'
                  },
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                urlSeo: 'novedad/vecindario-proteccion',
                edadygenero: null,
                contentful_id: '3idU9aEVdgtfAmNIgyFBWM',
                relevancia: 'Relevancia Alta',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Soy pensionado',
                    contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3EtXtUgNPIkwgPNL2zlAjA/97ece28f40afb4a4547577b3cd79dadb/imagen_vecindario.png?w=800&q=50'
                  },
                  file: { fileName: 'imagen vecindario.png' },
                  description: 'Haz realidad tu sueño de tener casa propia',
                  title: 'Alianza Vecindario - Protección '
                },
                tituloCorto: 'Con Vecindario, tener casa propia sí es posible.',
                updatedAt: '2021-02-15T20:40:41.632Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Empieza HOY a proyectar tus sueños de vivienda',
                textoCallToAction: 'Ir a Vecindario',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  '¡Tener tu ahorro en Protección ahora te permite disfrutar de nuestra alianza con Vecindario para hacer realidad ese sueño de tener casa propia!',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                    tituloCorto: 'Vivienda'
                  }
                ],
                urlSeo: 'ahorro/beneficio-alianza-casas-con-descuentos',
                edadygenero: null,
                contentful_id: '6RmCigcRK5cXT5V3QLjyT7',
                relevancia: 'Relevancia Alta',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Soy pensionado',
                    contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/28gxMJQ5RwaE0Iat2VPH4z/df1b36a6ffa132f1b8cc027433fb7f77/Conoce_nuestra_nueva_alianza_1093907274.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName: 'Conoce nuestra nueva alianza 1093907274.jpeg'
                  },
                  description:
                    'Familia reunida en la sala de su nueva casa. Recibieron descuentos por estar afiliados a Protección',
                  title:
                    'Nueva Alianza: "Vendemos Casas con Descuento" y Protección'
                },
                tituloCorto:
                  '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
                updatedAt: '2020-12-30T16:19:58.194Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Conoce "Vendemos Casas con Descuento", el primer Outlet de vivienda en Colombia.',
                textoCallToAction: 'Quiero conocer más',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  '“Vendemos Casas con Descuento” es el primer Outlet de vivienda en Colombia. En Protección queremos acompañarte para que tomes el control de tus finanzas y cumplas tus metas, por eso creamos una alianza especial.',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
                    tituloCorto: 'Vivienda'
                  },
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                urlSeo: 'ahorro/haz-realidad-tu-sueno-de-tener-vivienda-propia',
                edadygenero: null,
                contentful_id: '3UrKTreATDqyTlCMpu69AP',
                relevancia: 'Relevancia Baja',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/12sFWbODzAkd5peNLUKkr7/3caf1ed89b59974844878967c37b1d99/Haz_realidad_tu_sue__o_de_tener_vivienda_propia_GettyImages-638711690.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Haz realidad tu sueño de tener vivienda propia GettyImages-638711690.jpeg'
                  },
                  description:
                    'Pareja sonríe en su nueva casa, posible gracias a que establecieron un plan de ahorro',
                  title: 'Haz realidad tu sueño de tener casa propia'
                },
                tituloCorto: 'Haz realidad tu sueño de tener vivienda propia',
                updatedAt: '2021-02-15T20:37:27.429Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Con nuestros aliados y productos, conoce cómo puedes lograrlo',
                textoCallToAction: 'Ir a Vecindario.com',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'Tener casa propia es uno de los grandes sueños de muchas personas. ¡Y una poderosa motivación para tomar el control de tus finanzas!',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                urlSeo: 'cesantias/por-que-estar-proteccion',
                edadygenero: null,
                contentful_id: '4SFZQxJCVrRBME6lLqdVSW',
                relevancia: 'Relevancia Alta',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Pensión por invalidez',
                    contentful_id: '7lDDi92WQvINHDoyppiGG1'
                  },
                  {
                    descripcion: 'Pensión por sobrevivencia',
                    contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Soy pensionado',
                    contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                  }
                ],
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2uwLOKJVxyW69MVIqzFRGg/042f924d50368b449627e1b9d7818a77/CT1C4-Todos-los-pu__blicos_Cesanti__as_Por-que__-Proteccio__n-AJUSTADO.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'CT1C4-Todos-los-públicos_Cesantías_Por-qué-Protección-AJUSTADO.jpeg'
                  },
                  description:
                    'Madre feliz con su hija sentadas en la sala aprenden sobre cesantías',
                  title:
                    'Todos los públicos aprenden sobre qué son las cesantías'
                },
                tituloCorto: '¿Por qué estar en Protección?',
                updatedAt: '2020-09-24T15:59:09.250Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Acompañamos a millones de clientes en el logro de sus sueños',
                textoCallToAction: '¡Quiero afiliarme!',
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ],
                descripcioncorta:
                  'En Protección, queremos acompañarte y queremos ser tu aliado para que hagas realidad tus sueños.',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                urlSeo: 'empresas-transveral-lineas',
                edadygenero: null,
                contentful_id: 'GbttKYqTGRTVZGMnbn3kY',
                relevancia: 'Relevancia Baja',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6IpW5GZQ1YR7yx9ZqbSZhe/de29fd9d22540d1de06823938f2e85cb/Linea_de_servicio_para_empleadores_proteccion_GettyImages-1086104606.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Linea de servicio para empleadores proteccion GettyImages-1086104606.jpeg'
                  },
                  description:
                    'Diseñadora en su taller de costura, recibe asesoría sobre tener las cesantías para empresas en Protección',
                  title: 'Línea de Servicio para Empleadores Protección'
                },
                tituloCorto: 'Línea de Servicio para Empleadores Protección',
                updatedAt: '2021-01-06T21:02:17.459Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Canal que te facilita la consulta de información y gestión',
                textoCallToAction: 'Quiero conocerlos',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'En Protección queremos estar más cerca de ti y de tu empresa, para brindarte el acompañamiento que necesitas y así resolver todas tus dudas.',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                urlSeo:
                  'empresas/oferta-canales-de-servicio-para-tus-colaboradores',
                edadygenero: null,
                contentful_id: '1sZQrmIgXQoqjbUHuTCcdU',
                relevancia: 'Relevancia Baja',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4s1e0fL73w7QEuvO7hLHmI/8320b6c99c0a9209ecd582c44af121bd/Oferta_en_canales_de_atenci__n_para_tus_empleados_GettyImages-497544516.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Oferta en canales de atención para tus empleados GettyImages-497544516.jpeg'
                  },
                  description:
                    'Técnico revisa material reciclable de su empresa, tiene sus cesantías en Protección',
                  title: 'Oferta en canales de atención para tus colaboradores '
                },
                tituloCorto: 'Oferta en canales de atención para tus empleados',
                updatedAt: '2020-11-20T15:47:20.547Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Acompañamos a tus colaboradores a través de facilidad operativa',
                textoCallToAction: 'Quiero conocer más',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'Acompañamos a tus colaboradores a través de asesoría y facilidad operativa por medio de diferentes canales',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    tituloCorto: 'Beneficios'
                  }
                ],
                urlSeo: 'empresas/acompanamiento-empleador',
                edadygenero: null,
                contentful_id: '1ICpTNPSI2R0F3JgjRN5JE',
                relevancia: 'Relevancia Baja',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/32PTmQgomdmGi63Jtzbqmx/e6a8f29aa0f9b47a1184b7e48228cf71/Acompa__amiento_para_tu_como_empleador_GettyImages-696553274.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Acompañamiento para tu como empleador GettyImages-696553274.jpeg'
                  },
                  description:
                    'Mujer habla por celular en su oficina, recibe asesoría para tener sus cesantías en Protección',
                  title: 'Acompañamiento para ti como empleador'
                },
                tituloCorto: 'Acompañamiento para ti como empleador',
                updatedAt: '2020-10-28T19:38:19.187Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Te acompañamos a través de diferentes canales. ¡Conócelos!',
                textoCallToAction: 'Quiero conocer más',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'En Protección te acompañamos, a través de asesoría y facilidad operativa, por medio de diferentes canales que se adecuan a tus necesidades y preferencias.',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  },
                  {
                    contentful_id: '3KRNawXdMRnF8FOmykSZWW',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                urlSeo: 'empresas/acompanamos-a-tus-colaboradores',
                edadygenero: null,
                contentful_id: '6g6bVUXQfWmDHsFCTJE1oh',
                relevancia: 'Relevancia Alta',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4071VrOBRRG0kDGrQ05Moo/b54a45e7f9b294c05850cb77668e1970/Acompa__amos_a_tus_colaboradores_segun_sus_metas_GettyImages-973096490.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Acompañamos a tus colaboradores segun sus metas GettyImages-973096490.jpeg'
                  },
                  description:
                    'Hombre sonríe en su negocio, sostiene una tablet donde se informa de las cesantías en Protección',
                  title:
                    'Acompañamos a tus colaboradores según su momento de vida'
                },
                tituloCorto: 'Acompañamos a tus colaboradores según sus metas',
                updatedAt: '2021-02-16T19:46:06.341Z',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Contamos con una gran oferta para tu equipo de trabajo ¡Conócela!',
                textoCallToAction: 'Quiero conocer más',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'En Protección diseñamos una oferta de herramientas, beneficios, programas de formación y soluciones, según el momento de vida y las necesidades de tus colaboradores. ¡Conócelas!',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                urlSeo: 'empresas-beneficios-universidad',
                edadygenero: null,
                contentful_id: '4LVWRKXz2tO8hinOrqo70U',
                relevancia: 'Relevancia Alta',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3bSUAFignYoFCLXOoz9JCU/460f3da3bfa6d262fcdbd70f8b613147/Impulsa_tu_negocio_con_universidad_proteccion_GettyImages-603314684.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Impulsa tu negocio con universidad proteccion GettyImages-603314684.jpeg'
                  },
                  description:
                    'Mujer sonríe en su mesa de trabajo, atrás sus compañeros revisan extractos de cesantías en el computador',
                  title:
                    'Impulsa el crecimiento de tu negocio con Universidad Protección'
                },
                tituloCorto: 'Impulsa tu negocio con Universidad Protección',
                updatedAt: '2020-11-20T15:36:45.907Z',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Te acompañamos con cursos prácticos y cápsulas de educación',
                textoCallToAction: 'Quiero conocer la oferta',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'Queremos acompañarte en el crecimiento de tu empresa, por eso te entregamos contenidos, cursos prácticos y cápsulas de educación en Universidad Protección, nuestra plataforma de formación para ti y tus colaboradores. ¡Conócela!',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          },
          {
            node: {
              lineadenegocio: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                },
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                },
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  },
                  {
                    contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                    tituloCorto: 'Novedades y Beneficios'
                  }
                ],
                urlSeo: 'empresas-novedades-alianza',
                edadygenero: null,
                contentful_id: '7c7uXwjjUMPvG2EFJDU7ZD',
                relevancia: 'Relevancia Baja',
                categoriaCliente: null,
                imagenpequena: {
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/J7WWUfZ0lCPuW4Xf7Ih0M/7c64a847bad6b9f78f7c96c4f247966e/Alianza_con_crehana_y_acamica_GettyImages-586970651.jpeg?w=800&q=50'
                  },
                  file: {
                    fileName:
                      'Alianza con crehana y acamica GettyImages-586970651.jpeg'
                  },
                  description:
                    'Mujer en junta con su compañero de trabajo, revisan las ventajas de tener las cesantías en Protección',
                  title:
                    'Nos unimos con Crehana y Acámica para impulsar el desarrollo de tus colaboradores y tu empresa'
                },
                tituloCorto: 'Alianza con Crehana y Acámica para tu empresa',
                updatedAt: '2021-01-08T16:04:15.221Z',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Aprovecha estas dos plataformas de aprendizaje 100% virtual',
                textoCallToAction: 'Ir a conocer más',
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ],
                descripcioncorta:
                  'Crehana y Acámica, son dos plataformas de aprendizaje 100% virtual, en español y con certificado de asistencia. ',
                tipoBite: 'beneficio',
                tipoContent: 'beneficio'
              }
            }
          }
        ]
      },
      allContentfulProducto: {
        edges: [
          {
            node: {
              categoriaProducto: 'Complementario',
              titulo: 'Crédito para Vivienda Bancolombia',
              createdAt: '2020-09-30T17:07:33.835Z',
              contentful_id: 'JqUxWGT2p4bwRNZli6FV3',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                      tituloCorto: 'Créditos y seguros'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Haz que tu proyecto de vivienda propia se convierta en realidad.',
                  textoCallToAction: '¡Agendar cita!',
                  descripcioncorta:
                    'Haz que tu proyecto de vivienda propia se convierta en realidad. Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco.',
                  tituloCorto: 'Crédito para vivienda Bancolombia. ¡Conócelo!',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:36:09.264Z',
                  urlSeo: 'ahorro/productos-complementarios-credito-vivienda',
                  contentful_id: '4dSE5dBqXkj1OguNJk7tcp',
                  imagenpequena: {
                    file: {
                      fileName: 'CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/53FZItBbJT3d2qUailJ9ri/34157f56697be5c70831e3de0559b874/CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png?w=800&q=50'
                    },
                    description: '',
                    title: 'como retirar tus cesantias para vivienda'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Complementario',
              titulo: 'Crédito de Consumo con Pignoración',
              createdAt: '2020-09-30T17:08:45.719Z',
              contentful_id: 'IBMCOurBRnD4pht9Od8Wo',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                      tituloCorto: 'Créditos y seguros'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Accede a créditos de libre destino con Bancolombia',
                  textoCallToAction: '¡Solicitar cita!',
                  descripcioncorta:
                    'La pignoración de aportes voluntarios le permite a los afiliados de Protección acceder a créditos de libre destino con Bancolombia, otorgando como garantía de dicho crédito los aportes que tenga el afiliado en el Fondo de Pensiones Voluntarias',
                  tituloCorto:
                    'Crédito con Pignoración de Pensiones Voluntarias',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:35:33.377Z',
                  urlSeo:
                    'ahorro/productos-complementarios-credito-con-pignoracion',
                  contentful_id: 'LOKbtCdPsOkXRPXCGbjHE',
                  imagenpequena: {
                    file: { fileName: 'IMG-CredtPig.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1i1t8DEbdr597Ye23UAowL/bc59e437b9a1e73e7c94903ee00c58f3/IMG-CredtPig.png?w=800&q=50'
                    },
                    description: '',
                    title:
                      'Crédito de consumo con Pignoración de Pensiones Voluntarias'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Complementario',
              titulo: 'Leasing Habitacional Bancolombia',
              createdAt: '2020-09-30T17:08:07.021Z',
              contentful_id: '4e3djROf1Dr7Jfogj7iSOi',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                      tituloCorto: 'Créditos y seguros'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Financia la adquisición, construcción o reforma de tu vivienda',
                  textoCallToAction: '¡Solicitar cita!',
                  descripcioncorta:
                    'Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco.',
                  tituloCorto: 'Leasing habitacional Bancolombia ¡Conócelo!',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:36:39.122Z',
                  urlSeo:
                    'ahorro/productos-complementarios-leasing-habitacional',
                  contentful_id: '1rn3OY1LM2bylydo88XeKj',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/799f26e382b47bd99b7c28ba217edb43/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Esposos sentados en el piso de una habitación recién pintada, leen sobre cesantías para vivienda',
                    title:
                      'Cómo puedo usar las cesantías para vivienda si soy empleado'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: null,
              titulo: 'Cesantías',
              createdAt: '2020-02-03T20:09:32.489Z',
              contentful_id: 'W2zNnmbYol9hf1OXMVGgR',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                      tituloCorto: 'Generalidades'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce todo lo que debes saber acerca de las Cesantías',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    'Las Cesantías son una prestación social a la que tienes derecho al ser un trabajador vinculado por contrato fijo o término indefinido, tanto en empresas públicas como privadas. Este ahorro es consignado en un Fondo de Cesantías, elegido libremente por ti. ',
                  tituloCorto: '¿Qué son las Cesantías?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-03-16T21:10:50.970Z',
                  urlSeo: 'cesantias/que-son',
                  contentful_id: '4r5NXg7eIYv1aKFEHT3Brk',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT1C1-Todos-los-públicos_Cesantías_Qué-son-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/11cUclDEKWST8cE0l6uWmN/d9ba153e8f7b77087d6c05b5048d8150/CT1C1-Todos-los-pu__blicos_Cesanti__as_Que__-son-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre sonriente con una tablet busca información sobre cesantías',
                    title: '¿Qué son las cesantías?'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
                      tituloCorto: 'Mecanismo de Protección al Cesante'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce todos los requisitos para beneficiarte de este mecanismo',
                  textoCallToAction: 'Conocer más',
                  descripcioncorta:
                    'Conoce todos los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo',
                  tituloCorto: 'Acceder al Mecanismo de Protección al Cesante',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Saber más',
                  updatedAt: '2021-01-08T16:23:43.184Z',
                  urlSeo: 'cesantias/mecanismo-proteccion-cesante/como-acceder',
                  contentful_id: '2kmCv1McS9VqjAtfkiE7jj',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT13C2--Todos_Cesantías_Mecanismo-de-protección-al-cesante_Requisitos-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/7itIkQ9vagteLDfTkeIYng/faa8ce4737f84102053f2315b0c1967f/CT13C2--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante_Requisitos-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre pensativo en la sala de su casa escribe en el portátil los requisitos de protección al cesante',
                    title: 'Cómo acceder al mecanismo de protección al cesante'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                      tituloCorto: 'Generalidades'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    },
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce algunos objetivos en los que puedes destinar tus Cesantías',
                  textoCallToAction: 'Quiero conocer',
                  descripcioncorta:
                    'Existen algunos casos específicos en los que podrás utilizar tus Cesantías. Entérate aquí de qué se trata',
                  tituloCorto: '¿Para qué son las Cesantías?',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-10T14:45:26.529Z',
                  urlSeo: 'cesantias/para-que-son-ces',
                  contentful_id: '7djopz1nxdiCKov302YZMa',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT1C2-Empleado_Independiente_Cesantías_Para-qué-son-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2aGTDh6GG89lRvCPEEPZj5/de261bd6b7240b21c31069913d047e1e/CT1C2-Empleado_Independiente_Cesanti__as_Para-que__-son-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre concentrado en su escritorio lee información sobre qué son las cesantías',
                    title: 'Empleado independiente aprende sobre cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
                      tituloCorto: 'Mecanismo de Protección al Cesante'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
                  textoCallToAction: 'Conocer más',
                  descripcioncorta:
                    '¿Perdiste tu empleo? El Gobierno cuenta con un programa con el que podrás aprovechar tus Cesantías, y encaminarte a un nuevo trabajo. Quedar cesante no implica perder el acceso al servicio de salud y otros beneficios sociales.',
                  tituloCorto: '¿Qué es el Mecanismo de Protección al Cesante?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Conocer más',
                  updatedAt: '2020-10-08T20:34:45.490Z',
                  urlSeo: 'cesantias/mecanismo-proteccion-cesante',
                  contentful_id: '23qtpJMSM4YNIyqXuq6rXe',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT13C1--Todos_Cesantías_Mecanismo-de-protección-al-cesante-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/7L2JUn4EJPju64Xx9dZbMI/1a50cf0d8e1da1a8b0c4ac47c15eab8c/CT13C1--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer sentada en su casa, mira la tablet mientras habla por teléfono sobre mecanismos de protección al cesante',
                    title: 'Mecanismos de protección al cesante'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                      tituloCorto: 'Generalidades'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio: 'Este ahorro tiene unos intereses',
                  textoCallToAction: 'Conocer más',
                  descripcioncorta:
                    '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Como tus Cesantías son un ahorro, tienes derecho a unos intereses anuales que van desde el 1 de enero hasta el 31 de diciembre del año correspondiente. Conoce más sobre ellos.',
                  tituloCorto: '¿Qué son los intereses de las Cesantías?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2020-11-20T15:59:05.422Z',
                  urlSeo: 'cesantias/intereses/que-son',
                  contentful_id: '4NUxp2FHGN657j83IS6iTO',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT12C1-Empleado-_-Cesante_Cesantías_Intereses-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1oBRikD3x6XdIkOfx7yj6s/872e9d9ad53175eba71fc89233ee314f/CT12C1-Empleado-_-Cesante_Cesanti__as_Intereses-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer en una cafetería, tiene su café al lado del portátil y estudia los intereses de las cesantías',
                    title: 'Intereses de las cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                      tituloCorto: 'Generalidades'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Aportes a Cesantías y quiénes deben hacerlo',
                  textoCallToAction: 'Saber más',
                  descripcioncorta:
                    'Las cesantías son una prestación social que corresponde a un mes de salario por un año trabajado, y son consignadas por el empleador a favor de cada empleado, en un Fondo de Cesantías como Protección. Te presentamos algunos datos de las Cesantías',
                  tituloCorto: '¿Qué son los aportes a Cesantías?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-01-06T22:26:00.598Z',
                  urlSeo: 'cesantias/aportes/que-son',
                  contentful_id: '7s2xq7rgMj4ktUt3bHhjok',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT9C1-Empleado-y-cesante_Qque son los aportes-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/5jbtMZygbqarwJ1FJolSF5/2feed54d07321dfdcc52dbd2c21c5191/CT9C1-Empleado-y-cesante_Qque_son_los_aportes-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre habla por teléfono con documentos en la mano sobre los aportes de cesantías',
                    title: 'Qué son los aportes a Cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                      tituloCorto: 'Portafolios y Tributarios'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce el tratamiento tributario de las Cesantías',
                  textoCallToAction: 'Cuéntame más',
                  descripcioncorta:
                    'En el tratamiento tributario de las cesantías se debe tener en cuenta si existe una relación laboral o si se trata de un ahorro como persona independiente. A continuación, te contamos cómo declarar esta prestación y quiénes deben hacerlo.',
                  tituloCorto: '¿Cómo declaran Cesantías los trabajadores?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2020-10-08T20:44:37.730Z',
                  urlSeo:
                    'cesantias/beneficios-tributarios/como-declaran-trabajadores',
                  contentful_id: '3u6HxJ6dKz4VcqryPX4PQS',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT5C1-Todos-los-públicos_Cesantías_Declaración-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/27fu6jPdHmWmF60jhSplnb/84d5e3f7a5dcb3ebeac8b76490a96706/CT5C1-Todos-los-pu__blicos_Cesanti__as_Declaracio__n-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer sentada en su escritorio con portátil y calculadora, analiza los beneficios tributarios con cesantías',
                    title: 'Cómo declarar las cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                      tituloCorto: 'Portafolios y Tributarios'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    },
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce los beneficios tributarios que puedes obtener',
                  textoCallToAction: 'Conocer más',
                  descripcioncorta:
                    'Conoce los beneficios tributarios que obtienes al realizar un ahorro voluntario como trabajador independiente',
                  tituloCorto:
                    'Beneficios tributarios al ahorrar tus Cesantías',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2020-10-08T20:45:33.201Z',
                  urlSeo: 'cesantias/beneficios-tributarios/ahorrar-cesantias',
                  contentful_id: '5z89TWtWdNGkWGhQG8x6PR',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT5C2-Todos-los-públicos_Cesantías_Independientes-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/M0VQ1Sx4cVqefzA6RTdV5/49d7ac8ba7c3b20f77f9d8da7342c6c1/CT5C2-Todos-los-pu__blicos_Cesanti__as_Independientes-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer tiene documentos en su mano mientras lee en el portátil los beneficios tributarios con cesantías',
                    title: 'Optimización tributaria para independientes'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                      tituloCorto: 'Portafolios y Tributarios'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    '¿Qué son estos Portafolios? Conoce aquí de qué se trata',
                  textoCallToAction: 'Cuéntame más',
                  descripcioncorta:
                    'Hay grandes ventajas al ahorrar tus Cesantías y una de ellas es la posibilidad de elegir, según tus metas, en qué tipo de portafolio prefieres que sea administrado tu dinero: Portafolio Largo Plazo o Portafolio Corto Plazo.',
                  tituloCorto:
                    'Portafolios Corto Plazo y Largo Plazo Cesantías',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-08T16:06:04.288Z',
                  urlSeo: 'cesantias/portafolios/corto-largo-plazo',
                  contentful_id: '635Er8TYNjTJSRJChKa5R9',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT6C1-Todos-los-públicos_Cesantías_Portafolios_Qué-son-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4qluYPx8h2Wlw1AtjZZDE7/724f887310b8dd19d459379640ae8d49/CT6C1-Todos-los-pu__blicos_Cesanti__as_Portafolios_Que__-son-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer está leyendo en su portátil y tiene documentos sobre qué son los portafolios',
                    title: 'Portafolios de cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                      tituloCorto: 'Portafolios y Tributarios'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Elige para tus Cesantías, un Portafolio acorde con tus metas.',
                  textoCallToAction: 'Zona Transaccional',
                  descripcioncorta:
                    'Al ahorrar tus Cesantías tienes la posibilidad de elegir el portafolio de inversión que más te convenga: Largo Plazo o Corto Plazo. Esta es una decisión de gran importancia, y para elegir debes tener claro los objetivos que quieres alcanzar con este ahorro',
                  tituloCorto: '¿Por qué y cómo cambiar de portafolio?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2020-09-18T19:29:35.541Z',
                  urlSeo: 'cesantias/portafolios/porque-como-cambiar',
                  contentful_id: '27WBmPnOOJ5KodhWSeurj9',
                  imagenpequena: {
                    file: { fileName: 'portafolio-max.jpg' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/7b1WR8x6gU3qgvjn57e2Pv/9f7c416c8c33eb9d15b6100bf5f3fed5/portafolio-max.jpg?w=800&q=50'
                    },
                    description: '',
                    title: 'portafolio-max'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                      tituloCorto: 'Inmovilización, Embargo y Pignoración'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio: 'Ingresa y conoce de qué se trata ',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    '¿Sabías que puedes pignorar tus Cesantías para respaldar los préstamos realizados por los empleadores? ',
                  tituloCorto: '¿Qué es la pignoración de Cesantías?',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T22:22:04.732Z',
                  urlSeo:
                    'cesantias/pignoracion-embargo-inmovilizacion/que-signfica-pignorar',
                  contentful_id: '18hr0YhTRaMvseK8PEOYOS',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT7C1-Todos-los-usuarios_Pignoración-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2txmAXSTQ4IMql24NRDeqK/083556a0c1e387641748f46d10d89045/CT7C1-Todos-los-usuarios_Pignoracio__n-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer toma café, tiene el portátil al frente con información sobre pignoración de cesantías',
                    title: 'Pignoración de cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                      tituloCorto: 'Inmovilización, Embargo y Pignoración'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce algunos motivos que pueden llevar al embargo de Cesantías',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    'Entérate aquí cuales son las circunstancias que pueden llevar al embargo de tus Cesantías. El embargo es una orden expedida por un juez mediante la cual se retienen las Cesantías a favor de una persona, empresa o cooperativa.',
                  tituloCorto: '¿Qué es el embargo de las Cesantías?',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T22:20:45.477Z',
                  urlSeo:
                    'cesantias/pignoracion-embargo-inmovilizacion/que-es-embargo',
                  contentful_id: '3oZGRnArFGxmoyDVrAoeLX',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT7C2-Todos-los-usuarios_Embargo-AJUSTADO..jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4Poiqo1pXjXBXH8ngNvsh4/acc0b753a4768afd5c4dafff2e84b1c4/CT7C2-Todos-los-usuarios_Embargo-AJUSTADO..jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre estudia un documento sobre embargo de cesantías en su oficina',
                    title: 'Embargo de cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                      tituloCorto: 'Inmovilización, Embargo y Pignoración'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
                  textoCallToAction: '¡Cuéntame más!',
                  descripcioncorta:
                    'La inmovilización de Cesantías es un paso del proceso de postulación al subsidio de vivienda que entrega el Gobierno Nacional por medio de las Cajas de Compensación Familiar y la Caja de Vivienda Popular.',
                  tituloCorto: '¿En qué consiste inmovilizar las Cesantías?',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T22:18:00.266Z',
                  urlSeo:
                    'cesantias/pignoracion-embargo-inmovilizacion/en-que-consiste-inmovilizar',
                  contentful_id: '51QUG2hfA3ftt3L2koBTnE',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT7C3-Todos-los-usuarios_Inmovilización-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2F84HVJ0G0WfyJIoqHso0v/f036b5518a67e009df24c93bd9b562bb/CT7C3-Todos-los-usuarios_Inmovilizacio__n-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre lee en su tablet a cerca de la inmovilización de cesantías, está sentado en su escritorio',
                    title: 'Inmovilización de cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                      tituloCorto: 'Extractos y Certificados'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce si estás afiliado, tu fecha de vinculación y tu ahorro',
                  textoCallToAction: 'Ir a Certifácil',
                  descripcioncorta:
                    'Los certificados de Cesantías son ese soporte que necesitarás en caso de querer demostrar que estás afiliado a Protección, la fecha de tu vinculación y el ahorro que tienes. Conoce los diferentes tipos de Certificados de Cesantías que puedes obtener.',
                  tituloCorto: '¿Cuáles son los certificados de Cesantías?',
                  relevancia: 'Relevancia Baja',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2020-10-08T20:52:15.928Z',
                  urlSeo: 'cesantias/certificados',
                  contentful_id: '3pYpjw2sFa2PdHkmqZIJND',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT8C1-Todos-los-públicos_Cesantías_Certificados-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/3IC1KSzhmXhVkyMFv7mw4y/c9661678337582098ea0c331543428ea/CT8C1-Todos-los-pu__blicos_Cesanti__as_Certificados-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre en su oficina analiza su certificado de cesantías',
                    title: 'Certificado de cesantías para todos los públicos'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                      tituloCorto: 'Clave Empresarial'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Necesitas saberlo para gestionar el ahorro de tus colaboradores',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    'Te acompañamos con los servicios que necesitas para gestionar el ahorro de tus colaboradores. Conoce aquí las 5 preguntas más frecuentes acerca de la Clave Empresarial.',
                  tituloCorto: 'Cinco preguntas sobre la Clave Empresarial',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-04T17:13:30.903Z',
                  urlSeo: 'empresas-cesantias-clavepreguntas',
                  contentful_id: '6NCf9CaxKvkpaVcs9xDv3l',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Cinco preguntas sobre la clave empresarial GettyImages-1184906038.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2QUUhToM0ILm9qlRO5pIvk/140f2c0579ffd8aa0a66b518f5cfeac7/Cinco_preguntas_sobre_la_clave_empresarial_GettyImages-1184906038.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer revisa su extracto de cesantías en la tablet, está en el depósito de su negocio',
                    title:
                      'Cinco preguntas frecuentes sobre la Clave Empresarial'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                      tituloCorto: 'Extractos y Certificados'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'La opción para descargar tus certificados en línea',
                  textoCallToAction: 'Ir a Certifácil',
                  descripcioncorta:
                    'A través de Certifácil es posible descargar o enviar, a cualquier correo electrónico y sin necesidad de clave empresarial, los diferentes tipos de certificados que tenemos disponibles. ',
                  tituloCorto: '¡Conoce Certifácil!',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocerlo',
                  updatedAt: '2021-01-07T21:12:09.706Z',
                  urlSeo: 'empresas-cesantias-certifacil',
                  contentful_id: '7HmVFsoAJ0T04LeYv6fpo',
                  imagenpequena: {
                    file: {
                      fileName: 'Conoce certifacil GettyImages-1139939226.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/5MwCSdk2RF7kUaqi7Z22gM/e125effb64b1ed6493804dff404bf83e/Conoce_certifacil_GettyImages-1139939226.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer sonríe en su oficina, frente al computador lee sobre cesantías para empresas en Protección',
                    title: '¡Conoce Certifácil!'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
                      tituloCorto: 'Liquidación y Pago'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce nuestro servicio Liquide y Pague Cesantías ',
                  textoCallToAction: 'Quiero conocerla',
                  descripcioncorta:
                    '¿Conoces los medios que tenemos a tu disposición para liquidar y pagar las Cesantías de tus colaboradores? En esta nota te contamos una de las opciones.',
                  tituloCorto:
                    'Paga las Cesantías a través de Liquide y Pague - Con Clave',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-02-04T17:14:07.916Z',
                  urlSeo: 'empresas-cesantias-liquideypague',
                  contentful_id: '27L0hIIKhpuTxBfeC7Aefh',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Como liquidar y pagar las cesantias GettyImages-1172816210.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4bW8ixu5BoiCcnUkJNiOr7/f32ed0f40babf05e25b95aa7d87bb2e2/Como_liquidar_y_pagar_las_cesantias_GettyImages-1172816210.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre en su huerta sostiene una tablet en las manos, observa su extracto de cesantías',
                    title:
                      '¿Cómo liquidar y pagar las Cesantías de tus colaboradores a través de Liquide y Pague Cesantías?'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
                      tituloCorto: 'Liquidación y Pago'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio: 'Un servicio fácil y ágil',
                  textoCallToAction: 'Pagar Cesantías',
                  descripcioncorta:
                    'Utilizar el servicio Pague Cesantías es una forma fácil y ágil de pagar las cesantías de tus colaboradores, por eso en Protección ponemos a tu disposición este medio. En esta nota te contamos sus beneficios y cómo hacer la liquidación y posterior pago.',
                  tituloCorto:
                    'Paga y Liquida las Cesantías con Pague Cesantías - Sin Clave',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-04T17:14:28.215Z',
                  urlSeo: 'empresas-cesantias-paguecesantias',
                  contentful_id: '4ZB5MQy4ZgpJYP8leMLPue',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Paga y liquida las cesantias con pague cesantias GettyImages-1081412230.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/TBciSo4rPP3Pv8b75ubDS/21abda1a1714b743e34767dd06749129/Paga_y_liquida_las_cesantias_con_pague_cesantias_GettyImages-1081412230.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer sonríe en su oficina, atrás se encuentran sus empleados, todos tienen las cesantías en Protección',
                    title:
                      'Liquida y paga las Cesantías de tus empleados a través de Pague Cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
                      tituloCorto: 'Liquidación y Pago'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio: 'Conoce todo acerca de este servicio',
                  textoCallToAction: 'Quiero conocerlos',
                  descripcioncorta:
                    'Acompañamos a las empresas en su gestión, con asesoría experta y servicios ágiles, para encender desde HOY los sueños de sus colaboradores. En esta nota te contamos acerca del servicio PILA.',
                  tituloCorto: 'Liquida y paga las Cesantías a través de PILA',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-02-04T17:13:48.698Z',
                  urlSeo: 'empresas-cesantias-pila',
                  contentful_id: '6VpQ8vnCOoNIeFzzZTkiL6',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Liquida y paga las Cesantías a través de PILA GettyImages-1189926329.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/65InRBUhcjqTucRHT1eq7p/261f3a4a4ba024e29eb7be8e0d86d2bb/Liquida_y_paga_las_Cesant__as_a_trav__s_de_PILA_GettyImages-1189926329.jpeg?w=800&q=50'
                    },
                    description:
                      'Arquitecta trabaja en los planos de una nueva obra, en su computador lee información sobre cesantías',
                    title:
                      '¿Cómo liquidar y pagar las Cesantías de tus colaboradores a través de PILA?'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                      tituloCorto: 'Generalidades'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Independiente',
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Con esta herramienta simula el valor de las Cesantías',
                  textoCallToAction: 'Ir a Pague Cesantías',
                  descripcioncorta:
                    'Este simulador te ayudará a calcular el valor de las cesantías',
                  tituloCorto: 'Calculadora de Cesantías',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero calcularlas',
                  updatedAt: '2021-01-12T01:36:05.897Z',
                  urlSeo: 'cesantias-calculadora',
                  contentful_id: 'PQcZ8hT1yHyWxd8MTkdFj',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Calculadora de Cesantías GettyImages-1151007843.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/AK1FMBIUDdhZWPF3Y32xS/d5396a54c6fa0e1da9de2eee591e0ba3/Calculadora_de_Cesant__as_GettyImages-1151007843.jpeg?w=800&q=50'
                    },
                    description:
                      'Un hombre calcula las Cesantías que debe pagarle a sus empleados a través de proteccion.com',
                    title: 'Calculadora de Cesantías'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
                      tituloCorto: 'Liquidación y Pago'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce 3 medios por los que puedes realizar la liquidación y el pago de las Cesantías',
                  textoCallToAction: 'Ir a Pague Cesantías',
                  descripcioncorta:
                    'Conoce 3 medios digitales por los que puedes realizar la liquidación y el pago de las Cesantías de tus colaboradores.',
                  tituloCorto:
                    'Medios de Liquidación y Pago. ¿Llenar planillas? ¡Tu decides!',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-22T13:41:58.821Z',
                  urlSeo: 'cesantias/medios-de-liquidacion-y-pago',
                  contentful_id: '6n6WBqAypQnjyYPg3r8nJZ',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Medios de Liquidación y Pago. ¿Llenar planillas GettyImages-1125439674.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/6p5tchhz4Np1AfdAxC81WU/3e9e3f009e8dd5c01f1d9b8c0cceffd0/Medios_de_Liquidaci__n_y_Pago.___Llenar_planillas_GettyImages-1125439674.jpeg?w=800&q=50'
                    },
                    description:
                      'Hombre y mujer, sentados al frente de un computador portatil, realizando el pago de las Cesantías de sus colaboradores a través de los canales virtuales de Protección',
                    title: 'Medios de Liquidación y Pago. ¿Llenar planillas?'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: null,
              titulo: 'Inversiones',
              createdAt: '2020-10-22T13:55:25.854Z',
              contentful_id: '3L34QSh4x4iaHAec3quWGy',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
                      tituloCorto: 'GENERICO INVERSIONES'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Estoy Aprendiendo',
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    },
                    {
                      descripcion: 'Estoy Aprendiendo',
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce aquí las rentabilidades de cada portafolio',
                  textoCallToAction: null,
                  descripcioncorta:
                    'La información de rentabilidades está actualizada al 14/02/2021. Aquellos portafolios con rentabilidad “0%”, a la fecha no tienen suficiente información para realizar el respectivo cálculo.',
                  tituloCorto: 'Rentabilidades',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero verlas',
                  updatedAt: '2021-02-16T16:22:42.877Z',
                  urlSeo: 'inversiones/rentabilidades',
                  contentful_id: '7sAAXHZuZo1MPS2j8U6U9G',
                  imagenpequena: {
                    file: { fileName: 'GettyImages-1170646439.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4UTBuf0xR4PFAYmiPvhxGW/2f493da70e7e334080ef48083217762b/GettyImages-1170646439.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Rentabilidades'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                      tituloCorto: 'GENERICO INVERSIONES'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Conozco de Inversiones',
                      contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                    },
                    {
                      descripcion: 'Estoy Aprendiendo',
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce aquí los principales indicadores de mercados a nivel global',
                  textoCallToAction: null,
                  descripcioncorta:
                    'Conoce aquí los principales indicadores de mercados a nivel global',
                  tituloCorto: 'Indicadores de mercado',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-11T22:11:45.234Z',
                  urlSeo: 'inversiones/indicadores-de-mercado',
                  contentful_id: '53aoziFAEUkV88p9hlH4aU',
                  imagenpequena: {
                    file: { fileName: 'GettyImages-1153620308.jpeg' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/55LptVpdG5Rj6f3p6Xl5uY/0ee2707d69023136d3ea3854b705d361/GettyImages-1153620308.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer revisando en su celular los indicadores de mercado',
                    title: 'Indicadores de mercado'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
                      tituloCorto: 'GENERICO INVERSIONES'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Conozco de Inversiones',
                      contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                    },
                    {
                      descripcion: 'Estoy Aprendiendo',
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce aquí información detallada de los portafolios de inversión',
                  textoCallToAction: null,
                  descripcioncorta:
                    'Conoce aquí información detallada de los portafolios de inversión: días al vencimiento, monedas y tipos de tasas.',
                  tituloCorto: 'Composición del portafolio',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-15T16:16:12.265Z',
                  urlSeo: 'inversiones/composicion-del-portafolio',
                  contentful_id: '40U6iT93UwkukYi3HzZlHJ',
                  imagenpequena: {
                    file: { fileName: 'GettyImages-1125439674.jpeg' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4t5muU4hYowsZZB36ZXtIb/2c0651eae3b40cd8d48f5e6d63de4373/GettyImages-1125439674.jpeg?w=800&q=50'
                    },
                    description:
                      'Señor y señora, sentados, revisan la información de los portafolios en el sitio web de Protección Inversiones',
                    title: 'Composición del portafolio'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: null,
              titulo: 'Ahorro',
              createdAt: '2020-09-23T13:58:13.336Z',
              contentful_id: '47oqc4NTZlwGOrMEThd6kE',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce todo sobre los Planes Institucionales',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    'Si lo que necesitas es facilitar el proceso de retiro laboral, nuestros Planes Institucionales de Protección son una gran alternativa para hacerlo. ',
                  tituloCorto: 'Administración Fondos de Ahorro de Largo Plazo',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-01-06T22:02:45.131Z',
                  urlSeo: 'empresas-ahorro-planes',
                  contentful_id: '6F7tDvZ8glmB8eZslrwtgD',
                  imagenpequena: {
                    file: {
                      fileName:
                        'administración de los fondos de ahorro de largo plazo  GettyImages-717170107.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/4yM4brrff0uOvYkGOO5TUv/9791c0a422fdc7344da6749093cddc00/administraci__n_de_los_fondos_de_ahorro_de_largo_plazo__GettyImages-717170107.jpeg?w=800&q=50'
                    },
                    description:
                      'Dos compañeros hablan sobre los fondos de ahorro de largo plazo mientras trabajan',
                    title:
                      'Facilita el proceso de retiro laboral con los Planes Insititucionales de Protección'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Los Planes Instituciones tienen una comisión, conócela',
                  textoCallToAction: 'Quiero conocerlas',
                  descripcioncorta:
                    'La comisión que cobra Protección S.A. por la administración del Plan Institucional es diferencial de acuerdo con el valor total del Plan',
                  tituloCorto: 'Comisión de administración de los Planes',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-01-06T22:02:26.502Z',
                  urlSeo: 'empresas-ahorro-comision',
                  contentful_id: '7piMAz5Eq1wOc54fiezEdo',
                  imagenpequena: {
                    file: {
                      fileName:
                        'comisión de administración de los Planes Institucionales GettyImages-1186093106.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/3KVulGAhMbP2WBDGpAbX8v/4cb2f907c334c04f7d84546629203fbc/comisi__n_de_administraci__n_de_los_Planes_Institucionales_GettyImages-1186093106.jpeg?w=800&q=50'
                    },
                    description:
                      'Mujer en un concesionario recibe asesoría sobre la compra de un carro nuevo',
                    title:
                      '¿Cuál es la comisión de administración de los Planes Institucionales?'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    },
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce los beneficios para tu empresa y para tus colaboradores',
                  textoCallToAction: 'Quiero conocerla',
                  descripcioncorta:
                    'Por ser una empresa patrocinadora de sueños te ofrecemos diferentes servicios y herramientas para que gestiones y te informes sobre el ahorro de tus colaboradores',
                  tituloCorto: 'Servicios al tener un Plan Institucional',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2020-10-28T19:46:44.569Z',
                  urlSeo: 'empresas-ahorro-serviciosplanes',
                  contentful_id: '4VCdpOEbBS9Ul394PbvAxi',
                  imagenpequena: {
                    file: {
                      fileName:
                        'servicios al tener un plan institucional GettyImages-1169434795.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1Nk7R4E0Ax2adxuhnQEKBT/4e184873157529cafc120acd18d2994c/servicios_al_tener_un_plan_institucional_GettyImages-1169434795.jpeg?w=800&q=50'
                    },
                    description:
                      'Un compañero de trabajo le explica a otro un proceso automotriz en el taller de la empresa',
                    title:
                      'Descubre los beneficios para tu empresa y colaboradores con Protección'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce las soluciones de ahorro que tenemos disponibles',
                  textoCallToAction: 'Quiero saber más',
                  descripcioncorta:
                    'Construir un ahorro e inversión a través de Pensiones Voluntarias, le permitirá a tus colaboradores tener un complemento para la pensión, alcanzar sus proyectos personales y familiares, y optimizar su planeación financiera y tributaria.',
                  tituloCorto: 'Acompañamos a tus empleados con soluciones',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2020-10-28T19:45:22.338Z',
                  urlSeo: 'empresas-ahorro-acompanamos',
                  contentful_id: 'G0m3rvEx8imM6lwa7kPjP',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Acompañamos a tus colaboradores con diferentes soluciones GettyImages-913438756.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2dwskRFRq6eRNyZaujfiql/98cbf83b2a81025d83f98a1ac6cabcb4/Acompa__amos_a_tus_colaboradores_con_diferentes_soluciones_GettyImages-913438756.jpeg?w=800&q=50'
                    },
                    description:
                      'Dos colegas discuten sobre diferentes soluciones de ahorro en Protección',
                    title:
                      'Construye un ahorro e inversión a través de las pensiones voluntarias en Protección'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    '¿Eres empleado de Bancolombia? Conoce ahora mismo este beneficio',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    '¿Eres empleado de Bancolombia? Conoce ahora mismo este beneficio, afíliate y obtén el 50% de tus ahorros a través del Plan Institucional Mutuocolombia. ¡Haz realidad tus sueños!',
                  tituloCorto: 'Mutuocolombia - Plan Institucional Bancolombia',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-15T16:00:18.925Z',
                  urlSeo: 'ahorro/plan-institucional-mutuocolombia',
                  contentful_id: 'CJ1JOb6BpUlLvwZE8zHob',
                  imagenpequena: {
                    file: { fileName: 'PROTECCION HIJOS.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2pchCZS7Q8sRDIq1igIVcG/57dec7d0fa2b2e882eafcdf35f375d2d/PROTECCION_HIJOS.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Protección Hijos'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    },
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                      tituloCorto: 'Finanzas'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    '¡Queremos acompañarte para que cumplas todos tus sueños!',
                  textoCallToAction: 'Ir a qiip',
                  descripcioncorta:
                    'En Protección estamos comprometidos con asesorar y acompañar a nuestros clientes para que desde hoy tomen decisiones que les permitan estar cada vez más cerca del futuro que sueñan.',
                  tituloCorto: 'Bienestar financiero con qiip y Protección',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-03T15:56:23.937Z',
                  urlSeo: 'ahorro/qiip-proteccion',
                  contentful_id: '6RecpTyU9umpCBhR7C9FGH',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Bienestar financiero para todos con qiip y Protección.jpg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/5Bn8TMBEwLFJlrFHUDfg6H/f6818a8d4ca7cec167742f7d72d0af6e/Bienestar_financiero_para_todos_con_qiip_y_Protecci__n.jpg?w=800&q=50'
                    },
                    description: '',
                    title:
                      'Bienestar financiero para todos con qiip y Protección'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    },
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Complementario',
              titulo: 'Plan Vive Sura',
              createdAt: '2020-09-30T17:06:56.476Z',
              contentful_id: '5CWwfkVR8AkxeilNW4iU48',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3gLW7AefhL3r7XZA74f1lr',
                      tituloCorto: 'Créditos y seguros'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    '¡Decide HOY asegurarle a tu familia un capital de respaldo!',
                  textoCallToAction: '¡Solicitar cita!',
                  descripcioncorta:
                    '¡Decide HOY asegurarle a tu familia un capital de respaldo en caso de fallecimiento, invalidez o enfermedad grave! Las decisiones que tomas cada día las haces pensando en tu bienestar y en el de los que más quieres.',
                  tituloCorto: '¡Conoce el Plan Vive Sura y asegúrate HOY!',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:09:29.453Z',
                  urlSeo: 'ahorro/productos-complementarios-vive-sura',
                  contentful_id: '7pbqYWDXBJ1v4Zsxfr49UL',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_PlanViveSura.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1PU9ZfNcV4TJjBcGOITAdw/9d4f160b92ef052dcf627b0f2cc6fcb0/IMG-Des_PlanViveSura.png?w=800&q=50'
                    },
                    description:
                      'Madre e hija sonriendo porque están aseguradas con el plan Vive Sura',
                    title: 'Plan Vive Sura'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: '+Protección',
              createdAt: '2020-09-17T16:44:25.268Z',
              contentful_id: '4dkf3aLiU6E11Wp5tbXqT3',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Construye desde el presente un mejor ingreso para tu futuro.',
                  textoCallToAction: '¡Quiero afiliarme!',
                  descripcioncorta:
                    '+Protección, es un ahorro para construir desde el presente un mejor ingreso para tu futuro, así podrás mantener tu calidad de vida al momento de la pensión. Con aportes desde 20 mil pesos mensuales podrás tener un mayor ingreso en el futuro.',
                  tituloCorto: '+Protección',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:59:39.580Z',
                  urlSeo: 'ahorro/afiliado/mas-proteccion',
                  contentful_id: '2Bn0l3tKFkLtewkIZwWh1B',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_+prote.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/6paOGTjZIjdx5RI2o0znF5/4f21d5c2f84b5b0e81a38bc3c7074a7b/IMG-Des__prote.png?w=800&q=50'
                    },
                    description: '',
                    title: '+Protección'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Construye desde el presente un mejor ingreso para tu futuro.',
                  textoCallToAction: '¡Simular ahorro!',
                  descripcioncorta:
                    '+Protección, es un ahorro para construir desde el presente un mejor ingreso para tu futuro, así podrás mantener tu calidad de vida al momento de la pensión. Con aportes desde 20 mil pesos mensuales podrás tener un mayor ingreso en el futuro.',
                  tituloCorto: '+Protección para tus colaboradores',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-23T19:39:30.971Z',
                  urlSeo: 'ahorro/empresa/mas-proteccion',
                  contentful_id: '25pH6XZt1eviTBQMIh122w',
                  imagenpequena: {
                    file: {
                      fileName:
                        'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/d3908025d2073d23f5ad3f31def6816f/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg?w=800&q=50'
                    },
                    description:
                      'Pareja recibe asesoría sobre los errores más comunes al retirar las cesantías para vivienda',
                    title:
                      'Errores a evitar al retirar cesantías para vivienda si eres cesante o independiente'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: 'Mi Reserva',
              createdAt: '2020-08-14T17:50:20.964Z',
              contentful_id: '18bfSEqhamhiOHQeS35Wpw',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: null,
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce de qué se trata y ¡comienza tu ahorro!',
                  textoCallToAction: 'Agendar cita',
                  descripcioncorta:
                    'Es un producto de nuestro Fondo de Pensión  Voluntaria, con el que mes a mes te acercarás a eso que tanto quieres',
                  tituloCorto: '¡Mi Reserva Protección!',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero saber más',
                  updatedAt: '2021-01-06T21:58:09.085Z',
                  urlSeo: 'ahorro-mi-reserva',
                  contentful_id: '12YCBJYldaKys0PKYZ1prN',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_MiReserva.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/3kqVyzi0TTgbCubJg6dvht/f10a6850d88fce2eee5639c800f5d53e/IMG-Des_MiReserva.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Mi Reserva'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: 'Siempre Activo',
              createdAt: '2020-09-17T16:46:03.872Z',
              contentful_id: '6CyAjQdjyj6ktH9uokULY8',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce de qué se trata. ¡Empieza tu ahorro!',
                  textoCallToAction: 'Contactar a un asesor',
                  descripcioncorta:
                    'Siempre Activo es una solución de ahorro voluntario para personas mayores de 55 años, enfocada en los pilares claves del envejecimiento activo: bienestar financiero, participación social y disfrute productivo del tiempo libre.',
                  tituloCorto: 'Siempre Activo',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2020-10-28T20:24:08.137Z',
                  urlSeo: 'ahorro-siempreactivo',
                  contentful_id: '2O1HpSHyL6B9iICv4muS9A',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_Activo.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/emdPDpOsIx3n0lN1OhGM2/23fa17b41ff8e27be55e4ff1cc88ff0a/IMG-Des_Activo.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Siempre Activo'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: 'Ahorro 100% Digital',
              createdAt: '2020-09-17T16:46:19.314Z',
              contentful_id: '13fk4wY88IB1fA9aeOB0qM',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Ahorra desde $20.000 pesos de manera 100% Digital en Protección',
                  textoCallToAction: '¡Empieza tu ahorro HOY!',
                  descripcioncorta:
                    'Queremos entregarte un plan de ahorro que se ajusta a tus necesidades; con el que podrías tener una ganancia sobre tu dinero ahorrado. Ahorra desde $20.000 pesos, de manera 100% Digital en Protección y comienza a cumplir todas tus metas, ¡es muy fácil!',
                  tituloCorto: 'Ahorro 100% Digital',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-19T18:52:45.921Z',
                  urlSeo: 'ahorro/digital',
                  contentful_id: '6qfrokQ9v5ZcznecbB6zJG',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_ahorro.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/7z64r9Oc6tLnwo8zIHOKPO/33bfb5339a04a5b4e2a785d1c53450ab/IMG-Des_ahorro.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Ahorro 100% Digital'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: 'Planes Institucionales',
              createdAt: '2020-09-17T16:46:34.462Z',
              contentful_id: '4FMB0tMDCxi8pCb9IvpGj',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                      tituloCorto: 'Planes Institucionales'
                    },
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce de qué se trata. ¡Empieza tu ahorro!',
                  textoCallToAction: null,
                  descripcioncorta:
                    'Son planes de ahorro contributivo, mediante los cuales las empresas otorgan beneficios previamente definidos a favor de sus colaboradores. Así mismo, permiten que los partícipes también realicen aportes para alcanzar las metas que se contemplan en el plan.',
                  tituloCorto: 'Planes Institucionales Protección',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-02-24T22:24:37.800Z',
                  urlSeo: 'ahorro-planesinstitucionales',
                  contentful_id: '6M7Vwv19Lm4giGsetgGfhM',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_Planes.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2aXkT6eY0rE1n6xTbN8kqH/1421b6295ea03811c7c805c8547fbbd7/IMG-Des_Planes.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Planes Institucionales'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: 'Soluciones',
              titulo: 'Protección Hijos',
              createdAt: '2020-09-17T16:44:43.521Z',
              contentful_id: '017vFbXOC94MeBLY4R44tx',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '3SXDBr091IkZ03dGOBOS6x',
                      tituloCorto: 'Soluciones de ahorro'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Ahorro',
                      contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                    }
                  ],
                  edadygenero: null,
                  textoIntroductorio:
                    'Conoce de qué se trata. ¡Empieza tu ahorro y asegura su futuro!',
                  textoCallToAction: '¡Agendar cita!',
                  descripcioncorta:
                    'Protección Hijos es el plan de ahorro flexible y asegurable que les abre a tus hijos las puertas a un mundo de posibilidades. Con un sencillo esfuerzo que hagas desde hoy, empiezas a asegurar la educación de tus hijos y haces realidad sus proyectos.',
                  tituloCorto: 'Protección Hijos',
                  relevancia: 'Relevancia Alta',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-01-06T21:44:02.825Z',
                  urlSeo: 'ahorro/hijos',
                  contentful_id: '4lvr3LTRUqP7Oq8jYzPhOa',
                  imagenpequena: {
                    file: { fileName: 'IMG-Des_Hijos.png' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/2OA1vKMRbE5eOa2qgFLfVH/19bbe904678bd8d830bb8a021b2d21d7/IMG-Des_Hijos.png?w=800&q=50'
                    },
                    description: '',
                    title: 'Protección Hijos'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                }
              ]
            }
          },
          {
            node: {
              categoriaProducto: null,
              titulo: 'Pensión Obligatoria',
              createdAt: '2020-07-09T22:29:09.603Z',
              contentful_id: '3Do4hL0V01gzUMDUCXlB0D',
              contenido: [
                {
                  Tema: [
                    {
                      contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                      tituloCorto: 'Genérico Pensiones'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Pensión por invalidez',
                      contentful_id: '7lDDi92WQvINHDoyppiGG1'
                    },
                    {
                      descripcion: 'Pensión por sobrevivencia',
                      contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
                    },
                    {
                      descripcion: 'Pensión por vejez',
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                    },
                    {
                      descripcion: 'Soy pensionado',
                      contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                    }
                  ],
                  edadygenero: ['36-45 Femenino'],
                  textoIntroductorio:
                    'Seguramente has oído hablar de pensiones, pero… ¿sabes qué son?',
                  textoCallToAction: 'Leer más',
                  descripcioncorta:
                    'Seguramente has oído hablar de pensiones, pero… ¿sabes qué son? Aquí te contamos',
                  tituloCorto: '¿Qué son las Pensiones Obligatorias?',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-15T19:21:11.641Z',
                  urlSeo: 'que-son-pensiones',
                  contentful_id: '2A4xaLqC0nUCjuED0TNa9E',
                  imagenpequena: {
                    file: {
                      fileName:
                        'Cuáles-son-los-certificados-de-tus-cesantías-max.jpeg'
                    },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/50xHt5WM4RUTYhuGb7rSPz/453f4a6e7f241b18406d3827a32b064a/Cua__les-son-los-certificados-de-tus-cesanti__as-max.jpeg?w=800&q=50'
                    },
                    description: '',
                    title: 'Cuáles-son-los-certificados-de-tus-cesantías-max'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    },
                    {
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                      nombre: 'Empleador'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                      tituloCorto: 'Genérico Pensiones'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Pensión por vejez',
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                    }
                  ],
                  edadygenero: ['0-35 Masculino'],
                  textoIntroductorio:
                    'Conoce aquí algunas de las diferencias que existen',
                  textoCallToAction: 'Ver más',
                  descripcioncorta:
                    'Alcanzar a pensionarte de manera anticipada, cotizar 150 semanas menos, y tener la posibilidad de generar rendimientos, son solo algunas de las ventajas que ofrecen los Fondos Privados (AFP)',
                  tituloCorto:
                    'Diferencias entre Fondos Privados y Colpensiones',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-10T20:39:53.577Z',
                  urlSeo: 'diferencias-regimenes',
                  contentful_id: '2ilVwq892IjQZLSsqthDnU',
                  imagenpequena: {
                    file: { fileName: 'para_que_se_retiran_max.jpg' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/5W1v97vzRKSefJSGsiRLh6/ef636a59699dc13eefc5b6460624ccd2/para_que_se_retiran_max.jpg?w=800&q=50'
                    },
                    description: '',
                    title: 'para que se retiran max'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                },
                {
                  Tema: [
                    {
                      contentful_id: '4SXvzovXRqBohm3RP2EIjK',
                      tituloCorto: 'Genérico Pensiones'
                    }
                  ],
                  categoriaCliente: [
                    {
                      descripcion: 'Pensión por vejez',
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                    }
                  ],
                  edadygenero: ['36-45 Femenino'],
                  textoIntroductorio:
                    'Estar bien informado te permitirá tomar las mejores decisiones',
                  textoCallToAction: 'Quiero conocer más',
                  descripcioncorta:
                    'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
                  tituloCorto:
                    'Mitos y realidades. Sistema pensional colombiano',
                  relevancia: 'Relevancia Media',
                  textoCallToActionBite: 'Quiero conocer más',
                  updatedAt: '2021-03-10T20:41:33.566Z',
                  urlSeo: 'mitos-realidades-sistema-pensional',
                  contentful_id: '6VuZ65EGUHchKosppLsVGX',
                  imagenpequena: {
                    file: { fileName: 'JPG-1.jpg' },
                    fluid: {
                      src:
                        '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                    },
                    description: '',
                    title: 'que son y como leerlos'
                  },
                  tipoDeCliente: [
                    {
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                      nombre: 'Afiliado'
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      allContentfulInformes: {
        edges: [
          {
            node: {
              titulo: 'Visión Mensual de Inversiones',
              updatedAt: '2020-12-01T14:31:40.156Z',
              textoIntroductorioBite: 'Ensayo informes inversiones contenido',
              contentful_id: '156x7USXSE8Zy0ZdFLUpng',
              tipoDeInforme: 'Visión Mensual de Inversiones',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://www.proteccion.com/wps/wcm/connect/proteccion/ee688a09-a14e-4906-af12-1fe472269738/VMI_NOV2020.pdf?MOD=AJPERES'
              },
              contenido: {
                Tema: [
                  {
                    contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
                    tituloCorto: 'GENERICO INVERSIONES'
                  }
                ],
                edadygenero: null,
                tituloCorto: 'Ensayo informes inversiones contenido',
                linkCallToAction: 'https://www.youtube.com/watch?v=Of6uOq_7ceE',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio: 'Ensayo informes inversiones contenido',
                contentful_id: 'ixxKMebxvMfDmOvqutmqz',
                urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
                updatedAt: '2020-10-22T14:00:16.360Z',
                imagenpequena: {
                  file: { fileName: 'JPG-1.jpg' },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                  },
                  description: '',
                  title: 'que son y como leerlos'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Conozco de Inversiones',
                    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
                  },
                  {
                    descripcion: 'Estoy Aprendiendo',
                    contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          },
          {
            node: {
              titulo: 'Informe semanal',
              updatedAt: '2020-12-01T14:29:57.860Z',
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '7iimejGXVlqN9Vulsn4HVp',
              tipoDeInforme: 'Informe semanal',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          },
          {
            node: {
              titulo: 'Informe trimestral de mercados',
              updatedAt: '2020-12-01T14:29:47.760Z',
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '4tZTfI6Kb326d5CMMNoIP8',
              tipoDeInforme: 'Informe trimestral de mercados',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          },
          {
            node: {
              titulo: 'Informe trimestral Portafolios Balanceados',
              updatedAt: '2020-12-01T14:29:33.644Z',
              textoIntroductorioBite: 'Conoce los valores del mercado actual',
              contentful_id: '1iapMqBhFQTeYhdwLUfWSK',
              tipoDeInforme: 'Informe trimestral Portafolios Balanceados',
              linkCallToActionInformes: {
                linkCallToActionInformes:
                  'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
              },
              contenido: null,
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ]
            }
          }
        ]
      },
      allContentfulContenidoEducativo: {
        edges: [
          {
            node: {
              titulo: '¿Cómo consulto mi saldo en Cesantías?',
              contentful_id: '1WuRdaqXMdUGKoGDEwE1JA',
              contenido: {
                Tema: [
                  {
                    contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                    tituloCorto: 'Extractos y Certificados'
                  }
                ],
                tituloCorto: '¿Cómo consulto mi saldo en Cesantías?',
                textoCallToActionBite: 'Quiero saber',
                textoIntroductorio:
                  'Conoce cómo consultar tu saldo en Cesantías',
                textoCallToAction: 'Ir a Certifácil',
                urlSeo: 'cesantias/saldo-cesantias',
                edadygenero: null,
                contentful_id: '6Eiy6lvHkzwgN0NSmqmZ3B',
                updatedAt: '2021-03-09T17:14:24.581Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Conoce aquí el paso a paso para consultar fácilmente tu saldo en Cesantías',
                imagenpequena: {
                  file: { fileName: 'saldo de cesantias.PNG' },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1g4fUh7TOmqS0XiOFpaQxR/f11f91ebea6863a73ae41fec0266fec3/saldo_de_cesantias.PNG?w=800&q=50'
                  },
                  description:
                    'Mujer joven sentada en el piso, con un libro en la mano, pensando en su futuro',
                  title: 'Saldo de Cesantías'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo:
                '¿Cuáles son los canales por los que puedo retirar mis Cesantías?',
              contentful_id: '2LsNtY9b4IjH26vbi4s3ob',
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto:
                  '¿Cuáles son los canales por los que puedo retirar mis Cesantías?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'En Protección te ofrecemos servicios digitales y seguros para que accedas a tus Cesantías.',
                textoCallToAction: 'Retirar Cesantías Online',
                urlSeo: 'cesantias/canales-y-montos-retiros',
                edadygenero: null,
                contentful_id: '1rcXxNLuQRh8ypUN0imb30',
                updatedAt: '2021-03-04T20:14:32.680Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'En Protección te ofrecemos servicios digitales ágiles y seguros para que accedas a tus Cesantías. A continuación, te compartimos un cuadro con los diferentes canales que tenemos disponibles y, al frente de cada uno, el monto máximo que es posible retirar.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Canales y montos para acceder a las CES GettyImages-1181495455.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4p2m8FSFV9y41mEM2jVvzd/82b8301823c35588151c0cab204ac75d/Canales_y_montos_para_acceder_a_las_CES_GettyImages-1181495455.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer sonríe mientras conoce en el sitio web de Protección las diferentes alternativas y facilidades que Protección le da para el retiro de sus Cesantías.',
                  title:
                    '¿Cuáles son los canales y los montos permitidos en cada uno, para el retiro de Cesantías?'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo:
                'Consejos para obtener beneficios tributarios con tu ahorro ',
              contentful_id: '3IYIe4hOF0cu4PjbbrixCD',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    tituloCorto: 'Beneficios'
                  }
                ],
                tituloCorto: 'Consejos para obtener beneficios tributarios',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡Conoce los beneficios tributarios que puedes obtener!',
                textoCallToAction: 'Quiero ver más',
                urlSeo: 'Ahorro-BeneficiosTributarios',
                edadygenero: null,
                contentful_id: '2el4sL7ZP9VGxRibLSYmKu',
                updatedAt: '2021-03-09T17:34:08.556Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Siempre te dicen que ahorrar es bueno, que vale la pena, que hay que pensar en el futuro; pero, tal vez, no conozcas un beneficio adicional: en Colombia se premia el ahorro. Así es, ¡si ahorras puedes llegar a contar con beneficios tributarios!',
                imagenpequena: {
                  file: {
                    fileName:
                      'Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro 1221903461.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/714jMILXFRwzqDT8LjHtMz/fa7f1e597d35e21d38e0b2a8e3ed2fb7/Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro_1221903461.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer joven revisando su tableta y conociendo cómo obtener beneficios tributarios con su ahorro en Protección',
                  title:
                    'Consejos para obtener beneficios tributarios con tu ahorro. En Colombia, se premia el ahorro con Protección'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Durante la pandemia cuida tus ahorros',
              contentful_id: '1rZD6oPq1H89zKTkR4Pdv8',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: 'Durante la pandemia cuida tus ahorros',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Conoce cómo cuidar los ahorros en tiempos de coronavirus',
                textoCallToAction: 'Quiero conocerlas',
                urlSeo: 'ahorro/durante-la-pandemia-cuida-tus-ahorros',
                edadygenero: null,
                contentful_id: '4218R6wZczlnVOkAAtqmIS',
                updatedAt: '2021-03-09T17:30:51.728Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'En Protección nos preocupamos por tu salud financiera y el bienestar de tu familia, por eso te presentamos una serie de recomendaciones para cuidar tus ahorros ',
                imagenpequena: {
                  file: {
                    fileName: 'Durante la pandemia cuida tus ahorros.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/OpCVG0hIvbORrkUZXUUPF/b2f784a936caffd1776f4d95f7374e41/Durante_la_pandemia_cuida_tus_ahorros.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer joven de cabello largo, sentada en un sofá gris analizando sus gastos y ahorros',
                  title: 'Durante la pandemia cuida tus ahorros '
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¡Realiza el curso gratuito de Finanzas Personales!',
              contentful_id: '2zjQa1liF3ivbWXwAFKEMc',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  },
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  }
                ],
                tituloCorto: '¡Realiza el curso gratuito: Finanzas Personales!',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡En Universidad Protección tenemos cursos diseñados para ti!',
                textoCallToAction: 'Quiero ir',
                urlSeo: 'ahorro/curso-finanzas-personales',
                edadygenero: null,
                contentful_id: '3AD1AvKVKtBHuXqXTIK4K4',
                updatedAt: '2021-03-09T17:49:48.769Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Sabemos que tener el control de tus finanzas es clave para alcanzar tus sueños; por eso diseñamos, en la Universidad Protección, un curso de Finanzas Personales que te permitirá aprender cómo optimizar gastos y mucho más. ¡Anímate a hacerlo!',
                imagenpequena: {
                  file: {
                    fileName:
                      '¡Realiza el curso gratuito de Finanzas Personales!.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6unQMEyrLmI9GSoIJUsI8u/400d092eedc99e1b08ad81500ee54d5a/__Realiza_el_curso_gratuito_de_Finanzas_Personales_.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre de barba y anteojos con un celular en la mano, sentado en un escritorio, al lado de una mujer de cabello largo castaño también con gafas, revisando en su computador, cómo ingresar al curso de finanzas',
                  title: '¡Realiza el curso gratuito de Finanzas Personales!'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Modelos de Compensación',
              contentful_id: '4qgYKWvGev7qXHMU8NnlAy',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                    tituloCorto: 'Planes Institucionales'
                  }
                ],
                tituloCorto: 'Modelos de compensación',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Transforma procesos con estrategias innovadoras',
                textoCallToAction: 'Quiero saber más',
                urlSeo: 'empresas-novedades-modelos',
                edadygenero: null,
                contentful_id: '2AJslthkG3eNLesKBAsKxb',
                updatedAt: '2021-03-16T13:40:19.990Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Transformar procesos con estrategias innovadoras enriquece tu modelo de compensación en tiempos de cambio',
                imagenpequena: {
                  file: { fileName: 'Modelos de compensación.jpeg' },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3Kuoct6oDd4BSOQQRbJ0vG/d45c1f20f4ca1d9852102175dd903a6a/Modelos_de_compensaci__n.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer rubia con gafas, cabello recogido, uniforme y guantes de seguridad, manipula máquina pesada dentro de la empresa en la que trabaja.',
                  title: 'Modelos de Compensación'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                '¿Buscas motivar a tus colaboradores y premiar gestiones sobresalientes?',
              contentful_id: '5i07hNEhEDk4Y7Bim5XKS4',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
                    tituloCorto: 'Planes Institucionales'
                  }
                ],
                tituloCorto: 'Motiva a tus colaboradores, premia sus gestiones',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Los Planes Institucionales son una alternativa interesante ',
                textoCallToAction: 'Quiero saber más',
                urlSeo: 'empresas-cesantias-planes-institucionales',
                edadygenero: null,
                contentful_id: '2unJXHCdgglQd1El51r7HV',
                updatedAt: '2021-03-09T23:23:27.724Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Los Planes Institucionales de Protección le permiten a tu empresa contar con alternativas interesantes a la hora de diseñar modelos de compensación por resultados.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Motiva a tus colaboradores, premia sus gestiones.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5Nf6Fvya0d61mr2hE8xMwD/49dca05a7456bb07f1392c71746b0ade/Motiva_a_tus_colaboradores__premia_sus_gestiones.jpeg?w=800&q=50'
                  },
                  description:
                    'Dos empleados con uniforme azul, tapabocas industrial amarillo y guantes de protección, trabajan motivados, su empresa tiene un Plan Institucional que les ayuda a incrementar sus ahorros',
                  title:
                    '¿Buscas motivar a tus colaboradores y premiar gestiones sobresalientes?'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                'Soluciona y gestiona deudas e inconsistencias en proteccion.com',
              contentful_id: '3OufjkUrZIcpSOZnn5aSdB',
              contenido: {
                Tema: [
                  {
                    contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
                    tituloCorto: 'Acompañamiento'
                  }
                ],
                tituloCorto: 'Soluciona y gestiona deudas e inconsistencias',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡Es muy fácil! Conoce aquí cómo puedes realizar el procedimiento.',
                textoCallToAction: 'Ir a la Zona Transaccional',
                urlSeo: 'empresas/pension/gestiona-deudas-e-inconsistencias',
                edadygenero: null,
                contentful_id: '5gB7I8narHCkLbRzYwfG6K',
                updatedAt: '2020-10-28T20:07:32.820Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Gestionar y solucionar las deudas e inconsistencias de los aportes a Pensión Obligatoria, es muy fácil a través de nuestra Zona Transaccional en proteccion.com. ',
                imagenpequena: {
                  file: {
                    fileName:
                      'Soluciona y gestiona deudas e inconsistencias en proteccion.com.png'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3GRmuOKmcyQF5TO5mcfJmC/65dcedf6af32d87a00202f9b9979a14b/Soluciona_y_gestiona_deudas_e_inconsistencias_en_proteccion.com.png?w=800&q=50'
                  },
                  description: '',
                  title:
                    'Soluciona y gestiona deudas e inconsistencias en proteccion.com'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Obligatorias',
                contentful_id: '45FVyiIWU70wBqFgR750SE'
              }
            }
          },
          {
            node: {
              titulo:
                '¿Cómo gestionar los retiros de Cesantías de tus colaboradores en proteccion.com?',
              contentful_id: '2jZWMor8X3nt7ZdDetcPTF',
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto: 'Gestiona los retiros de tus empleados',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Autoriza el retiro parcial o total de las Cesantías',
                textoCallToAction: 'Ir al instructivo',
                urlSeo: 'empresas-cesantias-retiros',
                edadygenero: null,
                contentful_id: 'MiIKyQViyofCgn4WkWLvE',
                updatedAt: '2021-03-09T17:14:00.582Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Retiro de Cesantías es una opción que, como empleador, te permite autorizar el retiro parcial o total de las Cesantías de tus colaboradores afiliados al fondo de Cesantías Protección.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Gestiona los retiros de tus empleados GettyImages-992351688.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/7Jx7udzQxu84DwnSGI4WB2/36baadadedc83477066a54a261360368/Gestiona_los_retiros_de_tus_empleados_GettyImages-992351688.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer sonríe en el depósito de materiales de su negocio, tiene sus cesantías en Protección',
                  title:
                    '¿Cómo gestionar los retiros de Cesantías de tus colaboradores en proteccion.com?'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Es momento de reinventarse',
              contentful_id: '01QWAxhQ0NfLtplabjkHO0',
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  }
                ],
                tituloCorto: 'Es momento de reinventarse',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¿Has pensado en realizar una reingeniería en tu empresa?',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/empresas/es-momento-de-reinventarse',
                edadygenero: null,
                contentful_id: '61abU4E9rPAyg7OUBkNj5F',
                updatedAt: '2020-10-28T19:55:16.676Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  '¿Has pensado en realizar una reingeniería en tu empresa? Es momento de encontrar el camino para transformar la forma de hacer las cosas, y para lograrlo queremos compartir contigo cinco herramientas:',
                imagenpequena: {
                  file: {
                    fileName:
                      'Es momento de reinventarse-(contenido-que-aplica-tambi‚n-a-empresas) 1169342568.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/34kuPTroQrJe0UpuWVPWY/0af3de4066674d5a45ac23700cbc0311/Es_momento_de_reinventarse-_contenido-que-aplica-tambi___n-a-empresas__1169342568.jpeg?w=800&q=50'
                  },
                  description:
                    'Empresario enseña a sus colegas los nuevos lentes de realidad virtual de la compañía',
                  title:
                    'Es momento de reinventarse. Transforma la manera de hacer las cosas'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Actualiza los usuarios de tu clave empresarial',
              contentful_id: '4yRAPXsZQwvUzgEstcRe82',
              contenido: {
                Tema: [
                  {
                    contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                    tituloCorto: 'Clave Empresarial'
                  }
                ],
                tituloCorto: 'Actualiza los usuarios de tu clave empresarial',
                textoCallToActionBite: 'Quiero leer más',
                textoIntroductorio:
                  'Es muy fácil. En esta nota, te contamos cómo hacerlo',
                textoCallToAction: 'Ingresar',
                urlSeo: 'empresas-cesantias-usuarioclave',
                edadygenero: null,
                contentful_id: '7oloAAaenIgKL6cRAlQ4yq',
                updatedAt: '2021-01-14T20:15:57.266Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Mantenernos actualizados es estar más cerca, por eso, te invitamos a actualizar los usuarios que cuentan con Clave Empresarial para tu Compañía, tanto "Administradores" como "Delegados".',
                imagenpequena: {
                  file: {
                    fileName:
                      'Actualiza los usuarios de tu clave empresarial GettyImages-1147294030.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5lWJ8dJDOyqgIGbVdxFUN8/7c560899196eaa7750f8bb49bc1afc9c/Actualiza_los_usuarios_de_tu_clave_empresarial_GettyImages-1147294030.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre sonríe en su oficina, atrás sus compañeros trabajan en computadores, están afiliados a Protección',
                  title: 'Actualiza los usuarios de tu clave empresarial'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Diagnostica el estado de tu negocio',
              contentful_id: '3LURTLiUIWWATazcAAR1c4',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: 'Diagnostica el estado de tu negocio',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Descubre tips de finanzas que te permitirán lograr tus objetivos',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/empresas/diagnostica-el-estado-de-tu-negocio',
                edadygenero: null,
                contentful_id: 'SsqMmohl0Lh7ZyELRehth',
                updatedAt: '2021-01-06T22:09:39.881Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Descubre tips de finanzas que te permitirán lograr tus objetivos, independiente de cualquier situación.',
                imagenpequena: {
                  file: {
                    fileName:
                      '1020230272-Diagnostica-el-estado-de-tu-negocio-(aplica-para-empresas).jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/Z4WPsiv5tK99uLYhqBXxq/c1780afe0d3590056ca3b0daeb5b575d/1020230272-Diagnostica-el-estado-de-tu-negocio-_aplica-para-empresas_.jpeg?w=800&q=50'
                  },
                  description:
                    'Empresaria sonríe en su emprendimiento de textiles, en la tablet lee tips de finanzas',
                  title: 'Diagnostica el estado de tu negocio '
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                'Elimina la palabra excusa y escoge una estrategia de ahorro',
              contentful_id: '51wXr6G2hVCsxTfpalNiAQ',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: 'Elimina la palabra excusa. Es momento de ahorrar',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡Inicia hoy un hábito financiero saludable!',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/afiliado/momento-de-ahorrar',
                edadygenero: null,
                contentful_id: '6NpEvFwMJiNx3D3eACWreL',
                updatedAt: '2021-02-19T19:11:38.845Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Iniciar un hábito saludable puede ser difícil si le abres espacio a las excusas, pues se requiere disciplina y compromiso. Para que sea mucho más sencillo incorporar el ahorro a tu cotidianidad, puedes elegir un método que te motive e impulse.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Elimina la palabra excusa es momento de ahorrar GettyImages-602981307.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3rFPTiE2c1Jw0yPXIwWswK/0777e55bb7312472d76242c239118835/Elimina_la_palabra_excusa_es_momento_de_ahorrar_GettyImages-602981307.jpeg?w=800&q=50'
                  },
                  description:
                    'Pareja lee en el computador cómo escoger una estrategia de ahorro',
                  title:
                    'Ahorra según tu personalidad, inicia este hábito saludable'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                'Perfil financiero, rasgos que definen tu relación con el dinero',
              contentful_id: '3XQ6kw8AeRhJJL3AO78rYD',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: 'Rasgos que definen tu relación con el dinero',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Conocer tu personalidad financiera es el punto de partida',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/afiliado/perfil-financiero',
                edadygenero: null,
                contentful_id: '2N4ZpHyuYVhjXJG9GUif4f',
                updatedAt: '2020-10-28T19:41:21.277Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Conocer tu personalidad financiera es el punto de partida para comenzar a tomar mejores decisiones. ¿Te has preguntado cómo administras tus finanzas? Es momento de hacerlo y así entender cómo es tu relación con el dinero.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Rasgos que definen tu relacion con el dinero GettyImages-599767404.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5WzdUswyFGTi2lw3PdryQx/cc3375d420046cf0674138cd0343c73c/Rasgos_que_definen_tu_relacion_con_el_dinero_GettyImages-599767404.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer sonríe mientras deposita dinero en la alcancía, aceptó el reto financiero Protección',
                  title: 'Rasgos que definen tu relación con el dinero'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Finanzas personales en tiempos de crisis',
              contentful_id: '3A4Eeg2391sR3jwuHTDdKW',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: 'Finanzas personales en tiempos de crisis',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Aprende a optimizar al máximo tus recursos en tiempos difíciles',
                textoCallToAction: 'Quiero conocer más',
                urlSeo:
                  'ahorro/afiliado/finanzas-personales-en-tiempos-de-crisis',
                edadygenero: null,
                contentful_id: 'tSOcDidhDKtOsZGKkSRMg',
                updatedAt: '2020-10-28T19:36:12.591Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Revive el Webinar transmitido en directo para nuestros clientes con Natalia Gallego, experta en asesoría pensional, financiera y tributaria. ',
                imagenpequena: {
                  file: {
                    fileName:
                      'Finanzas-personales-en-tiempos-de-crisis 1263125313.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/72HD0lR1W60NqAXFGGOPxn/fbc51126bc9d3ec72df6310fdd11863f/Finanzas-personales-en-tiempos-de-crisis_1263125313.jpeg?w=800&q=50'
                  },
                  description:
                    'Empresaria recibe asesoría financiera para optimizar su bienestar y finanzas personales',
                  title:
                    'Finanzas personales en tiempos de crisis. Conoce cómo optimizar tus finanzas en momentos de coyuntura'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                'Clave Empresarial: la llave de acceso a un mundo de soluciones digitales',
              contentful_id: '6oGanFCNp7BCNOrueZQSOp',
              contenido: {
                Tema: [
                  {
                    contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
                    tituloCorto: 'Clave Empresarial'
                  }
                ],
                tituloCorto: 'Clave Empresarial: la llave de acceso digital',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'El acceso a los servicios con los que contamos en Proteccion.com',
                textoCallToAction: 'Generar Clave',
                urlSeo: 'empresas-cesantias-clave',
                edadygenero: null,
                contentful_id: '3Y1CnCbyvoIGBtWorEjZCw',
                updatedAt: '2021-02-24T19:31:22.451Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'la clave empresarial te da acceso a los servicios con los que contamos en Proteccion.com, desde el lugar en que te encuentres y en el momento en que lo necesites.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Clave Empresarial la llave de acceso digital GettyImages-468077658.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4njAsnQolVQR71DWgxRmfr/c109da36d89a62251cbb23b20d3a6612/Clave_Empresarial_la_llave_de_acceso_digital_GettyImages-468077658.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre en silla de ruedas sonríe, acaba de cambiarse a Protección como fondo de cesantías',
                  title:
                    'Clave Empresarial: la llave de acceso a un mundo de soluciones digitales'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo identificar tu situación financiera actual?',
              contentful_id: '1aEj9lqEo2oxwZcW53SKjx',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: 'Cómo identificar tu situación financiera actual',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Sigue estos pasos para conocerla y descubre cómo mejorarla',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/afiliado/identifica-tu-situacion-financiera',
                edadygenero: null,
                contentful_id: '4EyBqmnsroiflIjC61F64x',
                updatedAt: '2020-10-28T19:33:35.875Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  '¿Sabes cómo está tu salud financiera? ¿Sabes en qué gastas el dinero? Te invitamos a que des el primer paso. Si bien hay cosas que no puedes evitar, sí puedes contribuir a mejorar tu situación con una buena planeación financiera.',
                imagenpequena: {
                  file: {
                    fileName:
                      'como identificar tu situacion financiera actual 1193229502.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4kOAMDzjFruE3m95ry08zB/a781e8ac033a54cbe02b8cb7c00e688a/como_identificar_tu_situacion_financiera_actual_1193229502.jpeg?w=800&q=50'
                  },
                  description:
                    'Dos colegas evalúan cómo reinventar su negocio para continuar creciendo',
                  title: 'Conoce las técnicas básicas de finanzas personales'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Planeación: ¡Fortalece tu estabilidad financiera!',
              contentful_id: '2TxIvvcc1g4QAsTuRHXT5z',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: '¡Fortalece tu estabilidad financiera!',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Ten claro tu objetivo actual, sin perder de vista el largo plazo.',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'Ahorro/afiliado/estabilidad-financiera',
                edadygenero: null,
                contentful_id: '17T6PgoJNtGr4dbleOo9p0',
                updatedAt: '2021-01-06T20:52:37.847Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Si conoces el estado actual de tus finanzas, estás en camino a implementar buenos hábitos financieros y tienes un plan para esto, es importante que te traces metas y objetivos para así tener el control.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Fortalece tu estabilidad financiera 538568444.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/62UYcZ9u4ShXDdFKS1sAg1/0ddb4b4e4529a0940c2cb7ae7d2695cd/Fortalece_tu_estabilidad_financiera_538568444.jpeg?w=800&q=50'
                  },
                  description:
                    'Ama de casa, estudia los hábitos financieros de la familia, para tener mejor control de las finanzas',
                  title:
                    'Mantener a flote nuestras finanzas depende de tomar decisiones estratégicas'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Superheroínas o villanas. ¿Qué son las deudas para ti?',
              contentful_id: '1EvfRGVHZDWmkyw7geyxYm',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: 'Superheroínas o villanas. ¿Qué son las deudas?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¿Tú, qué tipo de relación tienes con las deudas? Ingresa ahora',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/afiliado/deudas',
                edadygenero: null,
                contentful_id: '5E3DqDPQ2QNg5IYgXJKQHU',
                updatedAt: '2021-01-06T22:04:56.752Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Hay quienes ven las deudas como superheroínas que han llegado para sacarlos de una dificultad, mientras que para otros serán unas villanas despiadadas que pretenden quedarse con el patrimonio; todo dependerá del tipo de relación que establezcas con ellas.',
                imagenpequena: {
                  file: {
                    fileName:
                      'superheroinas o villandas .-Qu‚-son-las-deudas-para-ti 1126824182.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2bTce9puO243u4jRUcHYd4/e59924916791de22e7e7a7d2c295a453/superheroinas_o_villandas_.-Qu___-son-las-deudas-para-ti_1126824182.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer en el escritorio de su cocina, hace un listado de sus deudas y crea un plan de ahorro',
                  title:
                    'Superheroínas o villanas. ¿Qué son las deudas para ti?'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Libre soy, ¡me alcanza la quincena!',
              contentful_id: '1R4zhzbw5TPP7bVyiSIqFd',
              contenido: {
                Tema: [
                  {
                    contentful_id: '73qm7KPvufncQSOIIfRTUP',
                    tituloCorto: 'Tips de ahorro'
                  }
                ],
                tituloCorto: 'Libre soy, ¡me alcanza la quincena!',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Ingresa ahora y conoce técnicas básicas de finanzas personales.',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro/afiliado/me-alcanza-la-quincena',
                edadygenero: null,
                contentful_id: '5zWdjadtQHGRoGX4AtfOg4',
                updatedAt: '2021-01-06T22:05:37.298Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  '¿Cómo está tu relación con el dinero? Es momento de revisar y analizar tus hábitos, recuerda que el dinero debe cuidarse y valorarse.',
                imagenpequena: {
                  file: {
                    fileName: 'Libre-soy,-­me-alcanza-la-quincena 99967015.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/59BwqTM51rLFE2zJ0KuJBL/a52d707790d491ac0d210e2c9b594dcc/Libre-soy_-__me-alcanza-la-quincena_99967015.jpeg?w=800&q=50'
                  },
                  description:
                    'Emprendedora sonríe en su nuevo negocio, reflexiona sobre su relación con el dinero',
                  title:
                    'Libre soy, ¡me alcanza la quincena! Conoce técnicas básicas de finanzas personales'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¡Toma el control de tus finanzas en 21 días!',
              contentful_id: '38AGshQzGWzEWRElR2465j',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: '¡Toma el control de tus finanzas en 21 días!',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡Únete a estos retos que desde Protección hemos creado para ti!',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'Ahorro/Afiliado/retofinanzas',
                edadygenero: null,
                contentful_id: '1jtLjl6Z3r8aeiEpdQC5wE',
                updatedAt: '2021-01-06T22:10:13.671Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Únete ya a los retos que desde Protección hemos creado para ti y aprende cómo puedes mejorar tus finanzas. ¡Únete y genera hábitos financieros saludables en 21 días!',
                imagenpequena: {
                  file: {
                    fileName:
                      'toma el control de tus finanzas reto 21 dias 576473587.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3WB3erbWaUJ0yDjBlV3hCD/73def6c5649fee112dee4f3b0df5fa15/toma_el_control_de_tus_finanzas_reto_21_dias_576473587.jpeg?w=800&q=50'
                  },
                  description:
                    'Emprendedor acepta el reto financiero de Protección, busca mejorar sus finanzas',
                  title:
                    'Cuidar la salud financiera, depende de implementar pequeños hábitos'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo está tu salud financiera?',
              contentful_id: '2m3SUZpK9D7r2tbX1u9o8j',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: '¿Cómo está tu salud financiera?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Sigue estos pasos para conocerla y descubre cómo mejorarla',
                textoCallToAction: 'Quiero conocerlas',
                urlSeo: 'Ahorro-SaludFinanciera',
                edadygenero: null,
                contentful_id: '7pNuC0N7n4dcWs1G2Ien02',
                updatedAt: '2020-10-28T19:28:54.715Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Este diagnóstico se trata, básicamente, de sumar y restar. No toma mucho tiempo y allí podrás encontrar cosas inesperadas que te permitirán saber cómo está tu situación financiera y qué medidas tomar para tener el control y mejorarla.',
                imagenpequena: {
                  file: {
                    fileName:
                      'como esta tu situacion finanaciera 1129609347.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6hcvNN09lYr74ArWkziaA0/52570aa2185c56c7955c503c3761039f/como_esta_tu_situacion_finanaciera_1129609347.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer en su escritorio, escribe su situación financiera actual',
                  title: 'Descubre cómo mejorar tu situación financiera actual'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo realizar retiros de Pensión Voluntaria?',
              contentful_id: '76bZfwI52kIgiPwksyiDzo',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    tituloCorto: 'Beneficios'
                  }
                ],
                tituloCorto: '¿Cómo realizar retiros de Pensión Voluntaria?',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Facilidades para retirar sin salir de casa',
                textoCallToAction: 'Quiero conocerlo',
                urlSeo: 'empresas/ahorro/retiro',
                edadygenero: null,
                contentful_id: 'WIK9JIjSo0AKBd1f2jHT4',
                updatedAt: '2021-03-02T13:31:48.461Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Si se llegó el momento de que tus colaboradores materialicen sus sueños y necesitan retirar su ahorro en Pensión Voluntaria, en Protección les ofrecemos facilidades para que puedan hacerlo sin salir de casa',
                imagenpequena: {
                  file: {
                    fileName:
                      'Cómo realizar retiros de Pensión Voluntaria GettyImages-1250486696.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4KqmNjSpou3ssXcIQdfWVr/22bfcbd0e87e6149cc2b0947e54afaad/C__mo_realizar_retiros_de_Pensi__n_Voluntaria_GettyImages-1250486696.jpeg?w=800&q=50'
                  },
                  description:
                    'Dos colegas leen sobre el retiro de pensiones voluntarias en el área de máquinas de la empresa',
                  title:
                    'Llegó el momento de materializar sueños con las pensiones voluntarias'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo atender el reto financiero actual?',
              contentful_id: '8zn9HVHIDDaIUYYHp9twJ',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: '¿Cómo atender el reto financiero actual?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Es momento de pensar y ejecutar. Conoce aquí algunos tips',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'ahorro-afiliado-empresas-retofinanciero',
                edadygenero: null,
                contentful_id: '6BUCawJvfstlsh1GNFOPZl',
                updatedAt: '2021-02-15T20:48:22.519Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Es momento de pensar y ejecutar. Te damos 5 tips para que afrontes retos financieros.',
                imagenpequena: {
                  file: {
                    fileName:
                      'como atender el reto financiero actual gettyimages-494326845-2048x2048.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1Je5XqKe7zTUK8rYbGMq8o/5596bca0a4b2326814b55e12b947faf3/como_atender_el_reto_financiero_actual_gettyimages-494326845-2048x2048.jpeg?w=800&q=50'
                  },
                  description:
                    'Padre e hija sonríen en su negocio familiar, reinventaron su empresa para atender el reto financiero',
                  title:
                    'Negocio familiar afronta un reto financiero con 5 tips'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo:
                'Liquida y paga Aportes en Pensión Voluntaria desde Proteccion.com',
              contentful_id: '2nOIoPxoYzFT74cED0pgbZ',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
                    tituloCorto: 'Beneficios'
                  }
                ],
                tituloCorto: 'Liquida y Paga Aportes en Pensión Voluntaria',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Renovado servicio para liquidar y pagar aportes de tus empleados.',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'empresas-ahorro-liquidaypaga',
                edadygenero: null,
                contentful_id: 'BT6Tya9KnH9DrVgEyGHDw',
                updatedAt: '2021-01-12T01:24:35.479Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'En Protección queremos simplificar tu día a día. Renovamos nuestro servicio para liquidar y pagar los aportes de tus empleados a Pensión Voluntaria. Sólo debes ingresar con tu usuario y clave a la zona transaccional de empresas. Te contamos cómo',
                imagenpequena: {
                  file: {
                    fileName:
                      'Liquida y paga Aportes en Pensión Voluntaria GettyImages-1158243057.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/6VFwuTUVXVDWG9qRXl93SM/c1ea736fca20d465f2ff7aae4a0b8a11/Liquida_y_paga_Aportes_en_Pensi__n_Voluntaria_GettyImages-1158243057.jpeg?w=800&q=50'
                  },
                  description:
                    'Pareja de esposos en la cocina de su casa, aprende a liquidar y pagar pensiones voluntarias en Protección',
                  title:
                    'Liquida y paga Aportes en Pensión Voluntaria desde Proteccion.com'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '4 apps que te ayudarán con el control de tus finanzas',
              contentful_id: '4D4P6bnF5Kd04TR856hNYr',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: '4 Apps que ayudan con el control de tus finanzas',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Llevar el control de tus finanzas es muy fácil. Conoce cómo aquí',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'Ahorro-ControlFinanzas',
                edadygenero: null,
                contentful_id: '535cTVjJlMisArXFWxMz0l',
                updatedAt: '2021-01-06T22:11:14.005Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Hoy en día llevar el control de tus finanzas es muy fácil. Conoce algunas aplicaciones que te permitirán administrar tu dinero, hacer seguimiento de tus gastos y tener una buena salud financiera',
                imagenpequena: {
                  file: {
                    fileName:
                      '4 apps que te ayudaran con el control de tus finanzas 5133918948-.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/4uHDhb6P4SrflSlJUA6f6K/d775a2f2567e024811622801698d300b/4_apps_que_te_ayudaran_con_el_control_de_tus_finanzas_5133918948-.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre sonríe en su bicicleta, en su celular, descargó 4 apps para el control de sus finanzas',
                  title:
                    '4 aplicaciones para administrar tu dinero: Mobills, Splitwise, Tiendeo, Icoach'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Tips de finanzas para Pymes',
              contentful_id: '1XiqoiGTRQno9MfIItsBdo',
              contenido: {
                Tema: [
                  {
                    contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
                    tituloCorto: 'Finanzas'
                  }
                ],
                tituloCorto: 'Tips de finanzas para Pymes',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Te presentamos ideas para cumplir los objetivos de tu empresa',
                textoCallToAction: 'Ir al video',
                urlSeo: 'empresas-ahorro-tips',
                edadygenero: null,
                contentful_id: '3kkyjTeW98neCFIDyjzCx5',
                updatedAt: '2020-10-28T19:33:10.890Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'En Protección te acompañamos a entender y conocer cómo afrontar una situación nueva que se presenta en el entorno, a través de tips financieros que te permitirán cumplir los objetivos de tu empresa. Aquí te contamos algunos:',
                imagenpequena: {
                  file: {
                    fileName:
                      'Tips de finanzas para pymesGettyImages-1210338080.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/2tPJdAimf1ubxlRHFwOkIk/c9f039388b78885ac0fc8097ba75aede/Tips_de_finanzas_para_pymesGettyImages-1210338080.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer en silla de ruedas, comparte con sus compañeros tips de finanzas para pymes',
                  title:
                    'Cumple los objetivos de tu empresa con tips financieros'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: 'Consejos para la recuperación económica de tu empresa',
              contentful_id: 'wtMZMG6yUWYF160pNl8k1',
              contenido: {
                Tema: [
                  {
                    contentful_id: '2tdNwtoxba1KzfELIhHS86',
                    tituloCorto: 'Novedades'
                  }
                ],
                tituloCorto: 'Consejos para la recuperación de tu empresa',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Conoce estrategias para cuidar las finanzas en tiempos de crisis',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'empresas-ahorro-consejos',
                edadygenero: null,
                contentful_id: '5Vhjt7hBRmKXrZe1QRwFlA',
                updatedAt: '2020-10-28T19:56:55.490Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'A continuación te compartimos algunas estrategias que te permitirán cuidar las finanzas de tu empresa en tiempos de crisis',
                imagenpequena: {
                  file: {
                    fileName:
                      'Consejos para la recuperación económica de tu empresa GettyImages-1152308557.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/13nYT6X5L78HcMtPubKbHA/a1657fb1037d38c541b711627f8bc5b3/Consejos_para_la_recuperaci__n_econ__mica_de_tu_empresa_GettyImages-1152308557.jpeg?w=800&q=50'
                  },
                  description:
                    'Dos socios, hacen una lluvia de ideas para la recuperación económica de su empresa',
                  title: 'Consejos para la recuperación económica de tu empresa'
                },
                categoriaCliente: null,
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Pensiones Voluntarias',
                contentful_id: '4sjSQocJHJA3wehCeeaQel'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo retirar tus Cesantías?',
              contentful_id: '6AAwozHUXCFQP7uBKNRrLm',
              contenido: {
                Tema: [
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  },
                  {
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    tituloCorto: 'Educación'
                  },
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto: '¿Cómo retirar tus Cesantías?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Conoce aquí cómo puedes retirar tus Cesantías. ¡Es muy fácil!',
                textoCallToAction: 'Retirar mis Cesantías',
                urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
                edadygenero: null,
                contentful_id: '24ZCw88Mt35VoQTtBW13pj',
                updatedAt: '2021-03-10T14:45:54.875Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Con este servicio podrás iniciar tu retiro de cesantías (el valor no debe exceder $18.170.520) Anexa la documentación requerida y elige el medio de pago: transferencia a cuenta bancaria registrada en Protección o pago por ventanilla en una entidad bancaria',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT2C4-Cesantes_Cesantías_Cómo-retirar-las-cesantías_Cómo-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1qUG77uXNrvnRzb1fgGN9W/7825abeeabada7911ee09c6d8ef0beaa/CT2C4-Cesantes_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer joven va en transporte público mirando en su celular cómo retirar las cesantías',
                  title: 'Cómo retirar cesantías'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  },
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Retiro parcial de Cesantías por disminución de ingresos',
              contentful_id: '4dFpDW8Mlw8uQTYk9TJDxl',
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto: 'Retiro por Disminución de Ingresos',
                textoCallToActionBite: '¡Conoce más aquí!',
                textoIntroductorio:
                  'Conoce de qué se trata y consulta los requisitos',
                textoCallToAction: 'Descargar',
                urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
                edadygenero: null,
                contentful_id: '2LTgDjm1j1nHnUz3fNTj2d',
                updatedAt: '2021-01-08T16:26:25.961Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Los empleados que estén teniendo una disminución temporal en su ingreso, a causa de la emergencia económica, social y ecológica que se presenta con el COVID-19, podrán hacer retiros parciales de sus Cesantías a través de nuestros canales digitales.',
                imagenpequena: {
                  file: {
                    fileName:
                      'Retiro-parcial-por-disminución-de-ingresos-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5B8ojd26mum5cWNsKuymIx/481e8aa36abd3f44a3eac4a95e011481/Retiro-parcial-por-disminucio__n-de-ingresos-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre sonríe frente al portátil, al lado tiene una libreta con información del retiro parcial de cesantías',
                  title:
                    'Retiro parcial de cesantías por disminución de ingresos'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Retira en línea tus cesantías para educación',
              contentful_id: '7q4LaxfY132rLe5IeT0dAx',
              contenido: {
                Tema: [
                  {
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    tituloCorto: 'Educación'
                  }
                ],
                tituloCorto: 'Retira en línea tus Cesantías para educación',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¡Es muy fácil! Aquí te contamos cómo puedes hacerlo',
                textoCallToAction: 'Quiero conocer más',
                urlSeo: 'cesantias/novedad/retiro-online-educacion',
                edadygenero: null,
                contentful_id: '2fvYudDKy1jmtbBZS5Cywo',
                updatedAt: '2021-03-10T14:45:43.267Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  '¡Es momento de estudiar eso que siempre has querido! Hemos habilitado nuestro canal digital para que puedas solicitar el retiro de tus Cesantías a través de este medio, sin necesidad de ir a una Oficina de Servicio de Protección.',
                imagenpequena: {
                  file: {
                    fileName: 'Qué-son-los-intereses-de-las-cesantías-max.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1jTXd0Bt7y6YDOVmq4Cj22/c24f16f2591bc900ff69e3697921ffc9/Que__-son-los-intereses-de-las-cesanti__as-max.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre sonríe y toma café mientras retira sus Cesantías en Protección desde su celular',
                  title: 'Retira en linea tus Cesantías para educación'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Gestiona el retiro de Cesantías de tus empleados',
              contentful_id: '3uJAFaqaj7jas7hT7XgBeu',
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto: 'Gestiona el retiro de Cesantías de tus empleados',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Ingresa ahora y conoce cómo puedes realizar este procedimientos',
                textoCallToAction: 'Ir a la Zona Transaccional',
                urlSeo: 'empresas/gestionar-retiro-cesantias',
                edadygenero: null,
                contentful_id: '23wGFDP6zN4KUqUg39HTsH',
                updatedAt: '2021-01-07T21:19:12.865Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  '¿Sabías que con la clave empresarial puedes gestionar, desde la zona transaccional, las solicitudes de retiro de cesantías de tus colaboradores? Aquí te enseñamos cómo hacerlo.',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT8C1-Todos-los-públicos_Cesantías_Certificados-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3IC1KSzhmXhVkyMFv7mw4y/c9661678337582098ea0c331543428ea/CT8C1-Todos-los-pu__blicos_Cesanti__as_Certificados-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Hombre en su oficina analiza su certificado de cesantías',
                  title: 'Certificado de cesantías para todos los públicos'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd',
                    nombre: 'Empleador'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo:
                '¿Qué errores evitar a la hora de usar tus cesantías para educación?',
              contentful_id: 'kM0QkyxBYxPsqIqubUAEy',
              contenido: {
                Tema: [
                  {
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    tituloCorto: 'Educación'
                  }
                ],
                tituloCorto: '¡Evita estos errores! Cesantías para educación',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio: 'Consejos para el uso de tus Cesantías',
                textoCallToAction: 'Conoce los requisitos',
                urlSeo: 'cesantias/como-usarlas/educacion/que-errores-evitar',
                edadygenero: null,
                contentful_id: 'KzKMI2ncK81ThfXtLx2qJ',
                updatedAt: '2021-01-06T22:32:08.754Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  '¿Tú, o algún miembro de tu familia, está pensando en estudiar? A continuación, compartimos algunos de los errores más comunes que debes evitar si quieres alcanzar este propósito:',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT4C3-Todos-los-usuarios_Cesantías_Errores-comunes-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/Wye5GV9jANEuiOzbqz6TZ/c20e552aa74cf8521666c06dd64a3a83/CT4C3-Todos-los-usuarios_Cesanti__as_Errores-comunes-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer joven en el escritorio de su habitación, lee sobre los errores en el retiro de cesantías para educación',
                  title:
                    'Errores comunes al retirar las cesantías para educación'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Tips para invertir tus Cesantias en educación',
              contentful_id: '65i65OtKdDLmSZXYKJyT6N',
              contenido: {
                Tema: [
                  {
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    tituloCorto: 'Educación'
                  }
                ],
                tituloCorto: 'Tips para invertir tus Cesantías en educación',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Queremos acompañarte para que cumplas tus sueños de educación',
                textoCallToAction: 'Conocer más',
                urlSeo: 'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
                edadygenero: null,
                contentful_id: 'xLPj9BcW9h0dBe2PAE2st',
                updatedAt: '2021-01-06T22:30:42.244Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'En Protección queremos acompañarte para que cumplas todos tus sueños. Alcanzar tus metas educativas es una de las inversiones más importantes de tu vida, además estas contribuyen al desarrollo y bienestar de toda tu familia. Conoce aquí algunos tips:',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/c7091d54565aed06cc7e739278a82638/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer sentada en su escritorio, lee en su portátil cómo usar las cesantías para educación',
                  title:
                    'Cómo los empleados, cesantes e independientes pueden usar las cesantías para educación '
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
              contentful_id: '2WBURMnPPcoB3CxEeyPKei',
              contenido: {
                Tema: [
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                tituloCorto: 'Evita estos errores: Cesantías para vivienda',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Conoce algunos errores comunes que debes evitar',
                textoCallToAction: 'Quiero saber',
                urlSeo:
                  'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
                edadygenero: null,
                contentful_id: '1kio5mE1HZTJgBKSl89vM4',
                updatedAt: '2020-10-08T20:36:09.329Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar: ',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/d3908025d2073d23f5ad3f31def6816f/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Pareja recibe asesoría sobre los errores más comunes al retirar las cesantías para vivienda',
                  title:
                    'Errores a evitar al retirar cesantías para vivienda si eres cesante o independiente'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo usar tus cesantías para vivienda?',
              contentful_id: '6EENkCBRl5BGJBjsFqENSB',
              contenido: {
                Tema: [
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                tituloCorto: '¿Cómo usar tus Cesantías para vivienda?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio: 'Te presentamos algunas recomendaciones',
                textoCallToAction: 'Ir a Vecindario',
                urlSeo: 'cesantias/como-usarlas/vivienda/independiente',
                edadygenero: null,
                contentful_id: '2Ft5SGyqMyQUeG4v9myhFN',
                updatedAt: '2020-10-08T20:36:48.184Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Las cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Para alcanzar esta meta necesitas planeación y disciplina financiera, a continuación, te presentamos algunas recomendaciones:',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT3C5-Cesante-e-independiente_Vivienda_Cómo-usarlas-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/211iVEe6WywsH3bkp6diz0/32594356382a92a34ed92c46141c5165/CT3C5-Cesante-e-independiente_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Esposos sonríen mientras leen documentos sobre cómo usar las cesantías para vivienda',
                  title:
                    'Cómo usar las cesantías para vivienda si soy cesante o independiente'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo ahorrar tus Cesantías para vivienda?',
              contentful_id: '5CdGqVxjofIu9SDkxfwfEV',
              contenido: {
                Tema: [
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  }
                ],
                tituloCorto: '¿Cómo ahorrar tus Cesantías para vivienda?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  'Haz un plan de ahorro y alcanza el sueño de vivienda',
                textoCallToAction: 'Ir a Vecindario',
                urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
                edadygenero: null,
                contentful_id: '6skla3FWYh4i9LophEbi8G',
                updatedAt: '2020-10-08T20:37:29.325Z',
                relevancia: 'Relevancia Baja',
                descripcioncorta:
                  'Comprar vivienda nueva o remodelar la actual, son algunas metas que requieren de un ahorro constante y disciplinado. Con tus Cesantías en Protección das el primer paso para hacer este sueño realidad. Sigue estas recomendaciones:',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/799f26e382b47bd99b7c28ba217edb43/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Esposos sentados en el piso de una habitación recién pintada, leen sobre cesantías para vivienda',
                  title:
                    'Cómo puedo usar las cesantías para vivienda si soy empleado'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Dónde puedo retirar mis Cesantías?',
              contentful_id: '1gagtTMNyzVkFmONZUTHbb',
              contenido: {
                Tema: [
                  {
                    contentful_id: '6QSO0SouYnUllWRWOubCZR',
                    tituloCorto: 'Canales Retiro'
                  }
                ],
                tituloCorto: '¿Dónde puedo retirar mis Cesantías?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¿Ya decidiste la meta que quieres cumplir con tus Cesantías?',
                textoCallToAction: 'Conocer más',
                urlSeo:
                  'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
                edadygenero: null,
                contentful_id: '34Yl1Lbb9kwskG0a3VgjI3',
                updatedAt: '2021-02-23T19:36:48.969Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Contamos con diferentes canales para que hagas el retiro de tus Cesantías. Puedes hacerlo a través de tu empleador; en nuestro sitio web, en nuestra AppProtección, o en los más de 400 corresponsales bancarios que están disponibles en el territorio nacional',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT2C3-Empleados_Cesantías_Cómo-retirar-las-cesantías_Cómo-retirar-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/3mRuHO8xEQBR9anMQcDkfc/d596aa096e9bcdb899b2c81e49505808/CT2C3-Empleados_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-retirar-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Pareja de esposos lee en su celular cómo retirar las cesantías',
                  title: 'Cómo retirar las cesantías para empleados'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo retirar tus Cesantías?',
              contentful_id: '5h8Q4pFToba5sLPZf6mybv',
              contenido: {
                Tema: [
                  {
                    contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                    tituloCorto: 'Vivienda'
                  },
                  {
                    contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                    tituloCorto: 'Educación'
                  }
                ],
                tituloCorto: '¿Cómo retirar tus Cesantías?',
                textoCallToActionBite: 'Quiero conocer más',
                textoIntroductorio:
                  '¿Eres afiliado independiente? Conoce cómo retirar tus Cesantías',
                textoCallToAction: 'Retirar mis Cesantías',
                urlSeo:
                  'cesantias/como-usarlas/como-retirarlas/voluntario-independiente',
                edadygenero: null,
                contentful_id: '58AtRI5ZqBJGlcbCIPRjaM',
                updatedAt: '2021-03-10T14:46:06.652Z',
                relevancia: 'Relevancia Alta',
                descripcioncorta:
                  'Si eres afiliado voluntario o independiente, puedes hacer el retiro de tus Cesantías en www.proteccion.com, con tu usuario y clave, sin necesidad de autorización de empleadores o validaciones de requisitos adicionales.',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/c7091d54565aed06cc7e739278a82638/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer sentada en su escritorio, lee en su portátil cómo usar las cesantías para educación',
                  title:
                    'Cómo los empleados, cesantes e independientes pueden usar las cesantías para educación '
                },
                categoriaCliente: [
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
              contentful_id: '6YXhOyzaixyOlbzSaYwthX',
              contenido: {
                Tema: [
                  {
                    contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                    tituloCorto: 'Extractos y Certificados'
                  }
                ],
                tituloCorto: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
                textoCallToActionBite: 'Quiero saber más',
                textoIntroductorio:
                  'Hazle seguimiento a tu ahorro de Cesantías',
                textoCallToAction: 'Conocer mi extracto',
                urlSeo: 'cesantias/extractos/como-leerlos',
                edadygenero: null,
                contentful_id: 'UtvpGfgcpx7MxtxehglAd',
                updatedAt: '2020-09-18T19:43:00.358Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Entenderlo, te permitirá hacer seguimiento a tu ahorro.',
                imagenpequena: {
                  file: { fileName: 'JPG-1.jpg' },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/a19ec45d75b818c317abd6abdba70d42/JPG-1.jpg?w=800&q=50'
                  },
                  description: '',
                  title: 'que son y como leerlos'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          },
          {
            node: {
              titulo: '¿Cómo obtener tus extractos de Cesantías?',
              contentful_id: '25GPKs1Uph6JhkvDlkghFW',
              contenido: {
                Tema: [
                  {
                    contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                    tituloCorto: 'Extractos y Certificados'
                  }
                ],
                tituloCorto: '¿Cómo obtener tus extractos de Cesantías?',
                textoCallToActionBite: 'Conocer más',
                textoIntroductorio:
                  'Estos te permiten estar informado acerca de tu ahorro',
                textoCallToAction: 'Actualizar mis datos',
                urlSeo: 'cesantias/extractos/como-obtenerlos',
                edadygenero: null,
                contentful_id: '7dZqpgEfBvYgEPLkmCwYRR',
                updatedAt: '2021-01-06T22:26:29.524Z',
                relevancia: 'Relevancia Media',
                descripcioncorta:
                  'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Conoce aquí cómo puedes descargarlos',
                imagenpequena: {
                  file: {
                    fileName:
                      'CT10C2-Todos-los-públicos_Cesantías_Extractos_Cómo-descargarlos-AJUSTADO.jpeg'
                  },
                  fluid: {
                    src:
                      '//images.ctfassets.net/y3qdch79qxiw/1zghPXN0VjQHiXu2F57hvE/8b668834222f428a8ea3ed723d13bcb8/CT10C2-Todos-los-pu__blicos_Cesanti__as_Extractos_Co__mo-descargarlos-AJUSTADO.jpeg?w=800&q=50'
                  },
                  description:
                    'Mujer en su portátil, se encuentra descargando sus extractos de cesantías',
                  title: 'Descargar los extractos de cesantías'
                },
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU'
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                  }
                ],
                tipoDeCliente: [
                  {
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
                    nombre: 'Afiliado'
                  }
                ]
              },
              lineaDeProducto: {
                nombre: 'Cesantías',
                contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
              }
            }
          }
        ]
      },
      allContentfulLineaDeNegocio: {
        edges: [
          {
            node: {
              nombre: 'Inversión',
              textoIntroductorioBite:
                '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
            }
          },
          {
            node: {
              nombre: 'Pensiones Voluntarias',
              textoIntroductorioBite:
                'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
            }
          },
          {
            node: {
              nombre: 'Pensiones Obligatorias',
              textoIntroductorioBite:
                'Conoce cómo podrás tener tranquilidad en tu etapa de jubilación'
            }
          },
          {
            node: {
              nombre: 'Cesantías',
              textoIntroductorioBite:
                'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas'
            }
          }
        ]
      },
      allContentfulTema: {
        edges: [
          {
            node: {
              tituloCorto: 'Genérico Pensiones',
              contentful_id: '4SXvzovXRqBohm3RP2EIjK',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Obligatorias',
                  contentful_id: '45FVyiIWU70wBqFgR750SE'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Educación',
              contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Inmovilización, Embargo y Pignoración',
              contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Portafolios y Tributarios',
              contentful_id: 'NtTH8hEGhYSbTgRU51YND',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Canales Retiro',
              contentful_id: '6QSO0SouYnUllWRWOubCZR',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Extractos y Certificados',
              contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Mecanismo de Protección al Cesante',
              contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Beneficios',
              contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Novedades y Beneficios',
              contentful_id: '7cTYlI6D258aUgSOhXfiTp',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'GENERICO INVERSIONES',
              contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Finanzas',
              contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Generalidades',
              contentful_id: '1bveIhWTIleo2K6PHMvDQO',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Tips de ahorro',
              contentful_id: '73qm7KPvufncQSOIIfRTUP',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Planes Institucionales',
              contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Soluciones de ahorro',
              contentful_id: '3SXDBr091IkZ03dGOBOS6x',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Créditos y seguros',
              contentful_id: '3gLW7AefhL3r7XZA74f1lr',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Novedades',
              contentful_id: '2tdNwtoxba1KzfELIhHS86',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Acompañamiento',
              contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Vivienda',
              contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'GENERICO INVERSIONES',
              contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
              lineaDeProducto: [
                {
                  nombre: 'Inversión',
                  contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Acompañamiento',
              contentful_id: '3KRNawXdMRnF8FOmykSZWW',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Vivienda',
              contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Liquidación y Pago',
              contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Afiliado',
                  contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                },
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'Clave Empresarial',
              contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
              lineaDeProducto: [
                {
                  nombre: 'Cesantías',
                  contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                }
              ],
              tipoDeCliente: [
                {
                  nombre: 'Empleador',
                  contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                }
              ]
            }
          },
          {
            node: {
              tituloCorto: 'GENERICO PARA AHORRO',
              contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
              lineaDeProducto: [
                {
                  nombre: 'Pensiones Voluntarias',
                  contentful_id: '4sjSQocJHJA3wehCeeaQel'
                }
              ],
              tipoDeCliente: null
            }
          }
        ]
      },
      allContentfulPodcast: {
        edges: [
          {
            node: {
              titulo: 'Informe Semanal',
              OrigenDeAudio: ['Contentful'],
              linkPodcast: {
                linkPodcast:
                  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
              },
              descripcion:
                'El mercado accionario global marcó retrocesos con caídas más pronunciadas en Europa',
              updatedAt: '2021-03-12T14:16:06.308Z'
            }
          },
          {
            node: {
              titulo: 'Al minuto con Protección',
              OrigenDeAudio: ['Spotify'],
              linkPodcast: {
                linkPodcast:
                  'https://open.spotify.com/episode/2icvsJwMBB1B45mjTF7ckD?si=0V3KQiZZTsiUDZWdVTF9dA'
              },
              descripcion:
                'Avances en las vacunas pesan más que el incremento en casos.',
              updatedAt: '2020-12-01T15:36:11.494Z'
            }
          },
          {
            node: {
              titulo:
                'La volatilidad en los mercados ha ido aumentado, tal como se esperaba.',
              OrigenDeAudio: ['Spotify'],
              linkPodcast: {
                linkPodcast:
                  'https://open.spotify.com/embed-podcast/show/2PgqwvmicwiqkdbZfgSzTi'
              },
              descripcion:
                'Hoy último debate presidencial en EE.UU Expectativas y posibles impactos con Juan Ignacio Medina.',
              updatedAt: '2020-10-28T17:36:36.953Z'
            }
          }
        ]
      }
    },
    showTest: true,
    user: {
      userValue: {
        host: '181137226214ASDSA163202114913',
        nameuser: 'asdsa',
        category: 'Cesantías',
        subcategory: 'Empleado',
        type: 1,
        age: 0,
        gender: null,
        encuesta: 'false',
        id: 2
      }
    },
    nameUser: { nameValue: '', typeUser: 1 },
    perfilamiento: { categoria: '', subCategoria: '' },
    statusMenu: false,
    statusTourguide: false
  }
  generateDataBiteYoucantmiss(
    dataPorps,
    dataPerfilamiento,
    mapCategories,
    statefinal,
    [],
    { line: 'Pensión' }
  )
  generateDataBiteYoucantmiss(
    propsFinal.data,
    dataPerfilamiento,
    mapCategories,
    statefinal,
    [],
    { line: 'Pensión' }
  )
  generateDataBiteYoucantmiss(
    propsFinal,
    dataPerfilamiento,
    mapCategories,
    statefinal,
    [],
  )
  generateDataBite(dataPorps, dataPerfilamiento, propsFinal, mapCategories, {
    line: 'Pensión'
  })
  generateDataBite(
    propsFinal.data,
    dataPerfilamiento,
    propsFinal,
    mapCategories,
    { line: 'Pensión' }
  )
  generateDataBite(
    propsFinal.data,
    dataPerfilamiento,
    propsFinal,
    mapCategories,
    { line: 'Pensión' }
  )
  generateDataBite(
    propsFinal.data,
    dataPerfilamiento,
    propsFinal,
    mapCategories
  )
  generateDataBite(
    propsFinal.data,
    { ...dataPerfilamiento, category: 'x' },
    propsFinal,
    mapCategories,
    { line: 'Pensión' }
  )
})
