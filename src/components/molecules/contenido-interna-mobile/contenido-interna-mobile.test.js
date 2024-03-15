import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import darkMode from '../../../themes/dark'
import { useStaticQuery } from 'gatsby'
import ContenidoInternaMobile from './contenido-interna-mobile'
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

const data = {
  imagenes: [
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50',
      nameImage: 'imgtipos'
    },
    {
      imagen:
        'https://images.ctfassets.net/y3qdch79qxiw/3BgSS5Ud85ZaY2t4o2Excw/b586f3155f2be5c54a867f8a94061b69/imgtipos2.png?w=800&q=50',
      nameImage: 'imgtipos2'
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
  cta: {
    titulo: 'Conoce en qué puedes utilizar tu ahorro.',
    textoButton: '¿Para qué sirven?',
    url:
      'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas?gclid=EAIaIQobChMIk-Dzz_ir6QIVTZyzCh2xHQ5BEAAYASAAEgJLkPD_BwE'
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
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            <ContenidoInternaMobile data={data} isGetSubtitulo={false} />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            <ContenidoInternaMobile data={data} isGetSubtitulo={true} />{' '}
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
