import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ExitStreet from './exit-street'
import { useStaticQuery } from 'gatsby'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  const dataUtils = [
    [
      {
        category: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
          {
            nombre: 'Pensiones Obligatorias',
            contentful_id: '45FVyiIWU70wBqFgR750SE'
          },
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        textoCallToActionBite: 'Quiero conocer más',
        descripcioncorta:
          '¡Ahora es posible generar el certificado de una manera mucho más fácil y rápida!, hemos mejorando la experiencia de servicio para así contribuir y cumplir con aquellas obligaciones tributarias.',
        categoriaCliente: [
          { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' },
          { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
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
        tituloCorto:
          'Disponibles los certificados para la Declaración de Renta 2020',
        updatedAt: '2021-03-16T15:16:33.332Z',
        urlSeo: 'personas/certificados-para-declaracion-de-renta',
        tipoBite: 'novedad',
        type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
        cliente: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
        ],
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
        tema: [
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
        nombreImagen: 'GettyImages 1172040755',
        contentful_id: '5JFWsQtXW9K93PzbgVFE3N',
        generoEdad: null
      },
      {
        category: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          },
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ],
        textoCallToActionBite: 'Quiero conocer más',
        descripcioncorta:
          'Este proceso interno comenzará el 26 de marzo de 2021 y concluirá el 29 del mismo mes. A partir del 24 de marzo estarán suspendidos los retiros desde Mi Reserva.',
        categoriaCliente: [
          { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' },
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
        tituloCorto:
          'Los aportes de Mi Reserva migran al portafolio Protección Vista',
        updatedAt: '2021-02-24T23:04:35.744Z',
        urlSeo: 'ahorro/migracion-aportes-mi-reserva',
        tipoBite: 'novedad',
        type: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
          { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
        ],
        cliente: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
          { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
        ],
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
        tema: [
          {
            contentful_id: '2tdNwtoxba1KzfELIhHS86',
            tituloCorto: 'Novedades'
          },
          {
            contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
            tituloCorto: 'GENERICO INVERSIONES'
          }
        ],
        nombreImagen:
          'Los aportes de Mi Reserva migran al portafolio Protección Vista GettyImages 1175117686',
        contentful_id: '2nXeh7XusdoZvgHkHyZ5DN',
        generoEdad: null
      },
      {
        urlSeo: 'inversiones/rentabilidades',
        textoIntroductorio: 'Conoce aquí las rentabilidades de cada portafolio',
        descripcioncorta:
          'La información de rentabilidades está actualizada al 14/02/2021. Aquellos portafolios con rentabilidad “0%”, a la fecha no tienen suficiente información para realizar el respectivo cálculo.',
        updatedAt: '2021-02-16T16:22:42.877Z',
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
        tituloCorto: 'Rentabilidades',
        category: [
          { nombre: 'Inversiones', contentful_id: '3L34QSh4x4iaHAec3quWGy' }
        ],
        textoCallToActionBite: 'Quiero verlas',
        imagenpequena: {
          file: { fileName: 'GettyImages-1170646439.png' },
          fluid: {
            src:
              '//images.ctfassets.net/y3qdch79qxiw/4UTBuf0xR4PFAYmiPvhxGW/2f493da70e7e334080ef48083217762b/GettyImages-1170646439.png?w=800&q=50'
          },
          description: '',
          title: 'Rentabilidades'
        },
        tema: [
          {
            contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
            tituloCorto: 'GENERICO INVERSIONES'
          }
        ],
        type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
        cliente: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
        ],
        nombreImagen: 'GettyImages 1170646439',
        tipoBite: 'producto',
        contentful_id: '7sAAXHZuZo1MPS2j8U6U9G',
        generoEdad: null
      },
      {
        urlSeo: 'inversiones/composicion-del-portafolio',
        textoIntroductorio:
          'Conoce aquí información detallada de los portafolios de inversión',
        descripcioncorta:
          'Conoce aquí información detallada de los portafolios de inversión: días al vencimiento, monedas y tipos de tasas.',
        updatedAt: '2021-02-15T16:16:12.265Z',
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
        tituloCorto: 'Composición del portafolio',
        category: [
          { nombre: 'Inversiones', contentful_id: '3L34QSh4x4iaHAec3quWGy' }
        ],
        textoCallToActionBite: 'Quiero conocer más',
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
        tema: [
          {
            contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
            tituloCorto: 'GENERICO INVERSIONES'
          }
        ],
        type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
        cliente: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
        ],
        nombreImagen: 'GettyImages 1125439674',
        tipoBite: 'producto',
        contentful_id: '40U6iT93UwkukYi3HzZlHJ',
        generoEdad: null
      },
      {
        urlSeo: 'inversiones/indicadores-de-mercado',
        textoIntroductorio:
          'Conoce aquí los principales indicadores de mercados a nivel global',
        descripcioncorta:
          'Conoce aquí los principales indicadores de mercados a nivel global',
        updatedAt: '2021-02-11T22:11:45.234Z',
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
        tituloCorto: 'Indicadores de mercado',
        category: [
          { nombre: 'Inversiones', contentful_id: '3L34QSh4x4iaHAec3quWGy' }
        ],
        textoCallToActionBite: 'Quiero conocer más',
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
        tema: [
          {
            contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
            tituloCorto: 'GENERICO INVERSIONES'
          }
        ],
        type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
        cliente: [
          { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
        ],
        nombreImagen: 'GettyImages 1153620308',
        tipoBite: 'producto',
        contentful_id: '53aoziFAEUkV88p9hlH4aU',
        generoEdad: null
      },
      {
        category: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
          {
            nombre: 'Pensiones Obligatorias',
            contentful_id: '45FVyiIWU70wBqFgR750SE'
          }
        ],
        textoCallToActionBite: 'Quiero conocer más',
        descripcioncorta:
          'Protección marca un hito trascendental en la transformación del proceso de inversiones con características de sostenibilidad. Durante más de 28 años hemos trabajado para proteger el futuro de millones de personas con la convicción de un futuro sostenible.',
        categoriaCliente: [
          { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
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
        tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
        updatedAt: '2021-02-08T16:32:31.340Z',
        urlSeo: 'novedad/futuro-sostenible',
        tipoBite: 'novedad',
        type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
        cliente: [
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
        tema: [
          {
            contentful_id: '7cTYlI6D258aUgSOhXfiTp',
            tituloCorto: 'Novedades y Beneficios'
          }
        ],
        nombreImagen: 'CT3C2 Todos los usuariosViviendaCuánto ahorrar AJUSTADO',
        contentful_id: '6SOdfejKD5VT2a7pb4fiTy',
        generoEdad: null
      },
      {
        imagenpequena: {
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
        nombreImagen: 'JPG-1.jpg',
        urlSeo: 'inversiones/actualidad/el-experto-dice',
        tituloCorto: '¿En dónde estamos parados? - Qué dice el experto',
        textoIntroductorio:
          'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
        descripcioncorta: 'Lorem',
        updatedAt: '2020-12-10T14:40:58.480Z',
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
        category: [
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ],
        type: [{ nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }],
        cliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ],
        tipoBite: 'producto',
        relevancia: 'Relevancia Media'
      }
    ],
    {
      imagenpequena: {
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
      nombreImagen: 'JPG-1.jpg',
      urlSeo: 'inversiones/actualidad/el-experto-dice',
      tituloCorto: '¿En dónde estamos parados? - Qué dice el experto',
      textoIntroductorio:
        'Juan Ignacio Medina, Líder Estrategias Ahorro e Inversión, nos cuenta...',
      descripcioncorta: 'Lorem',
      updatedAt: '2020-12-10T14:40:58.480Z',
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
      category: [
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
      ],
      type: [{ nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }],
      cliente: [
        { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
      ],
      tipoBite: 'producto',
      relevancia: 'Relevancia Media'
    },
    {
      category: [
        {
          nombre: 'Pensiones Voluntarias',
          contentful_id: '4sjSQocJHJA3wehCeeaQel'
        },
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
      ],
      textoCallToActionBite: 'Quiero conocer más',
      descripcioncorta:
        'Este proceso interno comenzará el 26 de marzo de 2021 y concluirá el 29 del mismo mes. A partir del 24 de marzo estarán suspendidos los retiros desde Mi Reserva.',
      categoriaCliente: [
        { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' },
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
      tituloCorto:
        'Los aportes de Mi Reserva migran al portafolio Protección Vista',
      updatedAt: '2021-02-24T23:04:35.744Z',
      urlSeo: 'ahorro/migracion-aportes-mi-reserva',
      tipoBite: 'novedad',
      type: [
        { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
        { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
      ],
      cliente: [
        { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
        { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
      ],
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
        title: 'Los aportes de Mi Reserva migran al portafolio Protección Vista'
      },
      tema: [
        { contentful_id: '2tdNwtoxba1KzfELIhHS86', tituloCorto: 'Novedades' },
        {
          contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
          tituloCorto: 'GENERICO INVERSIONES'
        }
      ],
      nombreImagen:
        'Los aportes de Mi Reserva migran al portafolio Protección Vista GettyImages 1175117686',
      contentful_id: '2nXeh7XusdoZvgHkHyZ5DN',
      generoEdad: null
    }
  ]

  const options = [
    {
      name: 'Cesantías',
      link:
        'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas#que-son',
      classGtm: 'gtmHomeAdemParaTiCesantias',
      classGtmInterna: 'gtmCesantiasMasContenCesantias'
    },
    {
      name: 'Pensión',
      link:
        'https://www.proteccion.com/wps/portal/proteccion/web/nueva-zona-pensional',
      classGtm: 'gtmHomeAdemParaTiPension',
      classGtmInterna: 'gtmCesantiasMasContenPension'
    },
    {
      name: 'Ahorro',
      link:
        'https://www.proteccion.com/wps/portal/proteccion/web/home/afiliarse',
      classGtm: 'gtmHomeAdemParaTiAhorro',
      classGtmInterna: 'gtmCesantiasMasContenAhorro'
    },
    {
      name: 'Inversión',
      link:
        'https://www.proteccion.com/wps/portal/proteccion/web/inversion/home/',
      classGtm: 'gtmHomeAdemParaTiInversion',
      classGtmInterna: 'gtmCesantiasMasContenInversion'
    }
  ]

  const pageContext = {
    slug: 'inversiones/actualidad/el-experto-dice/',
    id: '2iSc262lfCDuc5XCafkl7K',
    type: 'actualidad',
    line: 'alternativas',
    sublinea: '',
    cliente: 1,
    ids: [
      '2iSc262lfCDuc5XCafkl7K',
      '6kLqtSng0Jz7Wt8LegB9mB',
      '8GMSacJVozO0la62SSeix'
    ],
    categoriaProducto: 'Actualidad'
  }
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ExitStreet
            accessibility={{ fontSize: 3, lineSize: 2 }}
            dataUtils={dataUtils}
            options={options}
            widthScreen={'1318'}
            pageContext={pageContext}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ExitStreet
            accessibility={{ fontSize: 3, lineSize: 2 }}
            dataUtils={dataUtils}
            options={options}
            widthScreen={'500'}
            pageContext={pageContext}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ExitStreet
            accessibility={{ fontSize: 3, lineSize: 2 }}
            dataUtils={null}
            options={options}
            widthScreen={'500'}
            pageContext={pageContext}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ExitStreet
            accessibility={{ fontSize: 3, lineSize: 2 }}
            options={options}
            widthScreen={'500'}
            pageContext={pageContext}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
