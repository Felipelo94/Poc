import React from 'react'
import renderer from 'react-test-renderer'
import Bannerbite from './featured-slider'
import { mount } from 'enzyme'

describe('Bannerbite', () => {
  const data2Bites = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: null
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data3campaigns = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data2featured = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data1Capapaing1featured = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data3Bites = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data4Bites = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const data4Campaings = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const dataFullBites = [
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'campañas',
      categoria: {
        etiqueta: 'inversion'
      },
      descripcion:
        'Sigue estos pasos y descarga fácil y rápido el certificado.',
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },

    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    },
    {
      titulo: 'Cononce Todo Sobre Inversiones2',
      tipoBite: 'destacado',
      categoria: {
        etiqueta: 'inversion'
      },
      subcategoria: [
        {
          etiqueta: 'trabajando'
        }
      ],
      imagen: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/5I6MjqCnD9c5HkzGCUikaK/a349a2bedff68da423f633f22f19a9e4/AdobeStock_265492084_1inver.png?w=800&q=50'
        }
      }
    }
  ]

  const dataMobile = [
    [
      {
        titulo: 'Cajas de Compensación Familiar',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
          }
        },
        tipoBite: 'destacado',
        link: 'Beneficio/Cajadecompensacion',
        textoBoton: 'Quiero conocer más'
      },
      {
        titulo: 'Afiliación Digital',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
          }
        },
        tipoBite: 'campañas',
        link: 'afiliaciondigital/pension',
        descripcion:
          'Afiliate a Pensión Obligatoria de manera digital en segundos',
        textoBoton: 'Conocer más'
      },
      {
        titulo: 'Utiliza nuestros canales digitales',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/1wwx1C2zdeGpiT3eVvFvkA/e4e33d7bed953e8b679d33f80a83a311/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max.jpg?w=800&q=50'
          }
        },
        tipoBite: 'destacado',
        link: 'novedad/canales-digitales',
        textoBoton: 'Quiero conocer más'
      }
    ],
    [
      {
        titulo: '¡Conoce este nuevo beneficio!',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/4k5jHj0molysRnGyVTyCdO/939ec911ac21a1e9769182a7b086c489/Por-qu__-estar-en-Protecci__n-max.jpg?w=800&q=50'
          }
        },
        tipoBite: 'destacado',
        link: 'cesantias/soat',
        textoBoton: 'Conocer más'
      },
      {
        titulo: 'Con Vecindario haz realidad tu sueño de vivienda',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/2coWOKoFJrelW0GzeviGV2/822fdf14e6b8a07a168adf144b731e76/cesantias-en-la-declaracion-de-renta-max.jpg?w=800&q=50'
          }
        },
        tipoBite: 'destacado',
        link: 'cesantias/novedad/vecindario',
        textoBoton: 'Quiero conocer más'
      },
      {
        titulo: 'Beneficio SOAT Protección',
        imagen: {
          fluid: {
            src:
              'https://images.ctfassets.net/y3qdch79qxiw/6bgVKaPXgm98a18VNeFlUP/cb02f3874628da63b7914838e94ec4d1/Por-que__-estar-en-Proteccio__n-max.jpeg?w=800&q=50'
          }
        },
        tipoBite: 'destacado',
        link: 'cesantias/soat',
        textoBoton: 'Quiero conocer más'
      }
    ]
  ]

  it('renders correctly 2 bites', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data2Bites}
          type={1}
          line={{
            host: '19191229128ASDSD510202012194',
            nameuser: 'asdsd',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false'
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 3 campaigns', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data3campaigns}
          type={2}
          line={{
            host: '19191229128ASDSD510202012194',
            nameuser: 'asdsd',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false'
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 featured', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data2featured}
          type={1}
          line={{
            host: '19191229128ASDSD510202012194',
            nameuser: 'asdsd',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false'
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 featured', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data1Capapaing1featured}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 featured', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data3Bites}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 featured', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data4Bites}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly 2 featured', () => {
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={dataFullBites}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  global.window = Object.create(window)

  it('renders responsive', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={dataFullBites}
          line={{ category: 'Ces' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders responsive', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Bannerbite
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={dataFullBites}
          line={{ category: 'Inversión' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
