import React from 'react'
import renderer from 'react-test-renderer'
import YouCantMissDesktop from './You-cant-miss-desktop'
import { mount } from 'enzyme'

describe('Button', () => {
  const dataundefined = [
    {
      imagenpequena: {
        fluid: {
          src: undefined
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: undefined,
      textoIntroductorio: undefined,
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src: undefined
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: undefined,
      textoIntroductorio: undefined,
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src: null
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'gato',
      type: [{ contentful_id: '' }]
    }
  ]
  const data = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo',
      type: [{ contentful_id: '' }]
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
        }
      },
      urlSeo: 'cesantias/declaracion',
      textoCallToActionBite: 'Ir a allá',
      tituloCorto: 'Declaración de renta',
      textoIntroductorio:
        'Descubre cómo usar tus cesantías para la declaración de renta',
      descripcioncorta:
        'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
      updatedAt: '2020-04-20T20:56:20.460Z',
      categoriaCliente: [
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto',
      type: [{ contentful_id: '' }]
    }
  ]

  const dataContenido = [
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      type: [{ contentful_id: '' }],
      category: 'Cesantías',
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'producto',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'producto',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'producto',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'producto',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    },
    {
      tipoBite: 'educativo',
      category: 'Cesantías',
      type: [{ contentful_id: '' }],
      descripcioncorta:
        'Conoce todo lo que debes saber sobre las cesantías y comienza a ahorrar junto a Protección.',
      titulo: '¿Qué son las cesantías?',
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/c523c49609f3a6ac7245d58318764bb1/AdobeStock_134591623cesantias.png?w=800&q=50'
        }
      },
      categoriaCliente: [
        {
          descripcion: 'Cesante'
        },
        {
          descripcion: 'Empleado'
        },
        {
          descripcion: 'Independiente'
        }
      ]
    }
  ]

  it('renders correctly without props 1', () => {
    const tree = renderer
      .create(
        <YouCantMissDesktop
          accessibility={{ fontSize: 3, lineSize: 2 }}
          line={{ cetgory: 'Cesantías' }}
          data={data}
          numBite={11}
          index={10}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 2', () => {
    const tree = renderer
      .create(
        <YouCantMissDesktop
          accessibility={{ fontSize: 3, lineSize: 2 }}
          line={{ cetgory: 'Cesantías' }}
          data={dataundefined}
          numBite={11}
          index={10}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props 3', () => {
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Ahorro' }}
        data={dataContenido}
        numBite={11}
        index={10}
      />
    )
    wrapper.find('#next').simulate('click')
  })

  it('renders onMouseEnter bosillo next', () => {
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Cesantías' }}
        data={dataContenido}
        numBite={11}
        index={10}
      />
    )
    wrapper.find('#next').simulate('mouseenter')
    wrapper.find('#next').simulate('mouseout')
    wrapper.find('#next-btn').simulate('mouseenter')
    wrapper.find('#next-btn').simulate('mouseout')
  })

  it('renders onMouseEnter bosillo prev', () => {
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Cesantías' }}
        data={dataContenido}
        numBite={11}
        index={10}
      />
    )
    wrapper.find('#next').simulate('click')
  })

  it('renders onMouseEnter bosillo prev', () => {
    global.innerWidth = 2500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Cesantías' }}
        data={dataContenido}
        numBite={11}
        index={10}
        idCarrusel="contendio-"
      />
    )
    wrapper.find('#next').simulate('click')
  })

  it('renders onMouseEnter bosillo prev', () => {
    global.innerWidth = 2600
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Ahorro' }}
        data={dataContenido}
        numBite={11}
        index={10}
        type={2}
        idCarrusel="contendio-relevante"
      />
    )
    wrapper.find('#next').simulate('click')
    wrapper.find('#next').simulate('mouseenter')
    wrapper.find('#next').simulate('mouseout')
  })

  it('renders onMouseEnter bosillo prev', () => {
    global.innerWidth = 2600
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <YouCantMissDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{
          host: '19191229128ESTEBAN172202114620',
          nameuser: 'esteban',
          category: 'Inversión',
          subcategory: 'inexperto',
          type: 1,
          age: 0,
          gender: null,
          encuesta: 'false',
          id: 6
        }}
        data={dataContenido}
        numBite={11}
        index={10}
        type={1}
        idCarrusel="contendio-relevante"
      />
    )
    wrapper.find('#next').simulate('click')
    wrapper.find('#next').simulate('mouseenter')
    wrapper.find('#next').simulate('mouseout')
  })
})
