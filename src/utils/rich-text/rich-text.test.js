import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import RichText from './rich-text'

const store = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const data = {
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
          marks: [{ type: 'bold' }],
          value: 'Ordinarias',
          nodeType: 'text'
        }
      ],
      nodeType: 'heading-5'
    },
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
      nodeType: 'heading-4'
    },
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
      nodeType: 'heading-3'
    },
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
      nodeType: 'heading-2'
    },
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
      nodeType: 'heading-1'
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Las Cesantías ordinarias nacieron gracias a la Ley 50. Esta ley aplica de ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: 'forma obligatoria',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [],
          value:
            ' para los trabajadores que establecieron un contrato a partir del 1 de enero de 1991 y de ',
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
            'En este tipo de Cesantías se consigna de forma anual a un fondo de pensiones y Cesantías, el cual es encargado de administrar este dinero.',
          nodeType: 'text'
        }
      ],
      nodeType: 'paragraph'
    }
  ],
  nodeType: 'document'
}

const dataImage = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Los dependientes o trabajadores que cuentan con una relación laboral, cada año reciben un aporte por parte de su empleador, el cual corresponde a un mes de salario por un año de trabajo. Este aporte es realizado a un ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: 'Fondo de Cesantías',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [],
          value:
            ', el cual es escogido libremente por el afiliado, y debe entenderse como un ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: 'ingreso al patrimonio del trabajador.',
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
            'Con base en lo anterior, cada año gravable el empleado deberá reconocer el ingreso asociado por concepto de Cesantías y así realizar el proceso correspondiente para la declaración.\r',
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
          marks: [{ type: 'italic' }],
          value:
            'Es importante tener en cuenta que esto no aplica para aquellos regímenes especiales de cesantías del sector público, como el ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }, { type: 'italic' }],
          value: 'Fondo Nacional de Prestaciones Sociales del Magisterio ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'italic' }],
          value: 'o el ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }, { type: 'italic' }],
          value:
            'Fondo de Bienestar Social de la Contraloría General de la República.\r\n',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [],
          value:
            '\r\nActualmente la ley contempla unos beneficios gracias a que considera las cesantías como rentas exentas para aquellos trabajadores cuyo ingreso mensual promedio, durante los últimos 6 meses, no exceda las ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: '350 UVT',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [],
          value: ' ($ 12.462.000 para el 2020)\r',
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
            'Quienes superen este monto podrán tener unos porcentajes con beneficio, según el numeral 4 del artículo 206 del Estatuto Tributario:\r\n\r\n',
          nodeType: 'text'
        }
      ],
      nodeType: 'paragraph'
    },
    {
      data: {
        target: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'y3qdch79qxiw' }
            },
            id: 'c6DFZYwAEQnOiNM1164oln1',
            type: 'Asset',
            createdAt: '2020-06-09T14:21:42.720Z',
            updatedAt: '2020-06-09T14:21:42.720Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1
          },
          fields: {
            title: { 'en-US': 'tabla porcentajes parte gravable' },
            file: {
              'en-US': {
                url:
                  '//images.ctfassets.net/y3qdch79qxiw/6DFZYwAEQnOiNM1164oln1/f298f2d565a17df47c584522d8f66bb7/tabla_porcentajes.PNG',
                details: { size: 19707, image: { width: 520, height: 348 } },
                fileName: 'tabla porcentajes.PNG',
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
      content: [{ data: {}, marks: [], value: '\n', nodeType: 'text' }],
      nodeType: 'paragraph'
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Todas las personas que tengan ingresos por rentas laborales deben registrarlos dentro de la cédula general. Esta tiene como limitante, para deducciones y rentas exentas, ',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: 'el 40% de los ingresos netos y hasta 5040 UVT',
          nodeType: 'text'
        },
        {
          data: {},
          marks: [],
          value: ' (para el 2020, $ 179.459.000).\r\n',
          nodeType: 'text'
        }
      ],
      nodeType: 'paragraph'
    }
  ],
  nodeType: 'document'
}

const dataLink = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Por estos días la casa es oficina, refugio para tus abuelos, colegio para tus hijos, el mejor lugar para cuidarte y cuidarnos. La casa lo es todo. Por eso, nuestra alianza con vecindario tiene cada vez más relevancia y continua vigente, para que aquellos que tienen el sueño de tener casa propia, lo sigan proyectando.',
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
            'Por ser cliente Protección, puedes acceder a una asesoría completa y personalizada para la compra de vivienda, y recibir descuentos exclusivos en los proyectos inmobiliarios de tu preferencia.',
          nodeType: 'text'
        }
      ],
      nodeType: 'paragraph'
    },
    {
      data: {},
      content: [
        { data: {}, marks: [], value: 'Ingresa a ', nodeType: 'text' },
        {
          data: {
            uri:
              'https://www.proteccion.com/wps/portal/proteccion/web/lo-nuevo/afiliados/vecindario-proteccion'
          },
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'vecindario.com/proteccion ',
              nodeType: 'text'
            }
          ],
          nodeType: 'hyperlink'
        },
        { data: {}, marks: [{ type: 'bold' }], value: ' ', nodeType: 'text' },
        {
          data: {},
          marks: [],
          value:
            'y encuentra recomendación de las zonas y apartamentos que más se ajusten a tus necesidades, así como asesoría para definir la forma de pago y calcular el porcentaje de ahorro que deberás destinar para la cuota inicial. A esto se suma un descuento exclusivo dentro de nuestro programa de Privilegios Protección en los proyectos inmobiliarios.',
          nodeType: 'text'
        }
      ],
      nodeType: 'paragraph'
    },
    {
      data: {},
      content: [{ data: {}, marks: [], value: '\n', nodeType: 'text' }],
      nodeType: 'paragraph'
    }
  ],
  nodeType: 'document'
}

describe('Parrafo', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RichText text={data} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RichText text={dataImage} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RichText text={dataLink} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders click ver más mobile data inlcomplete', () => {
    const wraperMobile = mount(
      <Provider store={store}>
        <RichText text={dataLink} />
      </Provider>
    )
    const btn = wraperMobile.find('a')
    btn.simulate('click')
  })
})
