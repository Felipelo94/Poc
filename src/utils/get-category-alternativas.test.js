import React from 'react'
import {
  proxyPresent,
  getCategory,
  setArrayProduct,
  proxyPresentActualidad
} from './get-category-alternativas'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { screen, getByTestId } from '@testing-library/dom'

const mockGetCategory = {
  node: {
    categoriaCliente: [
      {
        lineadenegocio: 'test'
      }
    ],
    category: [
      {
        nombre: 'test'
      }
    ]
  }
}

const setArrayProductData = {
  node: {
    lineadenegocio: 'Inversión',
    contenido: {
      textoCallToActionBite: 'text',
      descripcioncorta: 'shortDesc',
      categoriaCliente: 'clientCategory',
      textoIntroductorio: 'introductoryText',
      tituloCorto: 'shortTitle',
      updatedAt: '0000/00/00',
      urlSeo: 'https://www.test.test',
      tipoBite: 'novedad',
      tipoDeCliente: 'clientType',
      imagenpequena: {
        file: {
          fileName: 'https://www.test.test'
        }
      },
      Tema: 'subject'
    }
  }
}

const setArrayProductDataTest = {
  node: {
    lineadenegocio: 'Inversión'
  }
}

describe('getCategory', () => {
  test('returns objectName.node.categoriaCliente[0].nombre when node object is sended to the function and objectName.node.categoriaCliente.lineadenegocio > 0', () => {
    const container = getCategory({
      node: {
        categoriaCliente: [
          {
            lineadenegocio: [
              {
                nombre: 'test'
              }
            ]
          }
        ]
      }
    })
    expect(container).toBe('test')
  })

  test('returns objectName.node.categoriaCliente[0].nombre when node object is sended to the function and objectName.node.categoriaCliente.lineadenegocio < 0', () => {
    const container = getCategory({
      node: {
        categoriaCliente: [
          {
            lineadenegocio: {
              nombre: 'test'
            }
          }
        ]
      }
    })
    expect(container).toBe('Cesantias')
  })

  test('returns objectName.category[0].nombre when node object is not sended to the function and objectName.category.length > 0', () => {
    const container = getCategory({
      category: [
        {
          nombre: 'test'
        }
      ]
    })
    expect(container).toBe('test')
  })

  test('returns objectName.category when node object is not sended to the function and objectName.category.length < 0', () => {
    const container = getCategory({
      category: {
        nombre: 'test'
      }
    })
    expect(container).toStrictEqual({ nombre: 'test' })
  })
})

describe('proxyPresent', () => {
  test('alternative component is rendered when id is 4iyIbURlwNfeTUwnjgHBdI', () => {
    render(
      proxyPresent(
        '4iyIbURlwNfeTUwnjgHBdI',
        [
          {
            alternatives: [
              {
                titulo: 'test'
              }
            ]
          }
        ],
        0,
        1024
      )
    )
    screen.getByTestId('container-alternative')
  })
})

test('ContentWidget component is rendered with a 16 marginTop if widthScreen < 1024 and id is different 4iyIbURlwNfeTUwnjgHBdI', () => {
  const container = proxyPresent(
    '000',
    [
      {
        alternatives: [
          {
            titulo: 'test'
          }
        ]
      }
    ],
    0,
    720
  )
  expect(container.props.className).toBe('content-widget-container')
  expect(container.props.style).toStrictEqual({ marginTop: 16 })
})

test('ContentWidget component is rendered with a 100 marginTop if widthScreen > 1024 and id is different than 4iyIbURlwNfeTUwnjgHBdI', () => {
  const container = proxyPresent(
    '000',
    [
      {
        alternatives: [
          {
            titulo: 'test'
          }
        ]
      }
    ],
    0,
    1280
  )

  expect(container.props.className).toBe('content-widget-container')
  expect(container.props.style).toStrictEqual({ marginTop: 100 })
})

describe('setArrayProduct', () => {
  test('setArrayProduct pushes the given object to an array when objectName.node.contenido is true', () => {
    const container = setArrayProduct(setArrayProductData)
    expect(container.textoCallToActionBite).toBe(
      setArrayProductData.node.contenido.textoCallToActionBite
    )
  })

  test('setArrayProduct returns undefined when objectName.node.contenido is false', () => {
    const container = setArrayProduct(setArrayProductDataTest)
    expect(container).not.toBe(true)
  })
})

describe('proxyPresentActualidad', () => {
  test('returns ComponentPresent component when id is 6kLqtSng0Jz7Wt8LegB9mB', () => {
    const container = proxyPresentActualidad(
      '6kLqtSng0Jz7Wt8LegB9mB',
      [
        {
          imagen: 'imagen',
          informes: 'reports',
          tituloSeccionPodcast: 'podcastTitleSection',
          descripcionSeccionPodcast: 'podcastDescriptionSection',
          podcast: 'podcast',
          textoCierre: 'closingText',
          cifras: 'figures',
          contenidoCorporativo: 'corporateContent',
          nombre: 'name'
        }
      ],
      0,
      {
        userValue: {
          nameuser: 'userName'
        }
      },
      {
        type: 1
      },
      'filterDataNovedad',
      0,
      true
    )
    expect(container.props.tituloSeccionPodcast).toBe('podcastTitleSection')
  })

  test('returns MarketFigures component when id is 8GMSacJVozO0la62SSeix', () => {
    const container = proxyPresentActualidad(
      '8GMSacJVozO0la62SSeix',
      [
        {
          imagen: 'imagen',
          informes: 'reports',
          tituloSeccionPodcast: 'podcastTitleSection',
          descripcionSeccionPodcast: 'podcastDescriptionSection',
          podcast: 'podcast',
          textoCierre: 'closingText',
          cifras: 'figures',
          contenidoCorporativo: 'corporateContent',
          nombre: 'name'
        }
      ],
      0,
      {
        userValue: {
          nameuser: 'userName'
        }
      },
      {
        type: 1
      },
      'filterDataNovedad',
      0,
      true
    )
    expect(container.props.texto).toBe('closingText')
  })

  test('returns SaysExpert component when id is 2iSc262lfCDuc5XCafkl7K', () => {
    const container = proxyPresentActualidad(
      '2iSc262lfCDuc5XCafkl7K',
      [
        {
          imagen: {
            file: {
              url: 'http://test.test',
              fileName: 'imageTest'
            }
          },
          informes: 'reports',
          tituloSeccionPodcast: 'podcastTitleSection',
          descripcionSeccionPodcast: 'podcastDescriptionSection',
          podcast: 'podcast',
          textoCierre: 'closingText',
          cifras: 'figures',
          contenidoCorporativo: {
            CuerpoContenido: {
              json: {
                content: ['test']
              }
            },
            descripcionCallToAction: {
              descripcionCallToAction: 'descripcionCallToActionTest'
            },
            linkCallToAction: {
              linkCallToAction: 'http://test.test'
            }
          },
          nombre: 'name'
        }
      ],
      0,
      {
        userValue: {
          nameuser: 'userName'
        }
      },
      {
        type: 1
      },
      'filterDataNovedad',
      0,
      true
    )

    expect(container.props.contenido).toStrictEqual({
      CuerpoContenido: {
        json: {
          content: ['test']
        }
      },
      descripcionCallToAction: {
        descripcionCallToAction: 'descripcionCallToActionTest'
      },
      linkCallToAction: {
        linkCallToAction: 'http://test.test'
      }
    })
  })

  test('Non existent id', () => {
    proxyPresentActualidad(
      '000',
      [
        {
          imagen: {
            file: {
              url: 'http://test.test',
              fileName: 'imageTest'
            }
          },
          informes: 'reports',
          tituloSeccionPodcast: 'podcastTitleSection',
          descripcionSeccionPodcast: 'podcastDescriptionSection',
          podcast: 'podcast',
          textoCierre: 'closingText',
          cifras: 'figures',
          contenidoCorporativo: {
            CuerpoContenido: {
              json: {
                content: ['test']
              }
            },
            descripcionCallToAction: {
              descripcionCallToAction: 'descripcionCallToActionTest'
            },
            linkCallToAction: {
              linkCallToAction: 'http://test.test'
            }
          },
          nombre: 'name'
        }
      ],
      0,
      {
        userValue: {
          nameuser: 'userName'
        }
      },
      {
        type: 1
      },
      'filterDataNovedad',
      0,
      true
    )
  })
})
