import React from 'react'
import renderer from 'react-test-renderer'
import ComponentPresent from './component-present'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

const image = {
  file: {
    url:
      '//images.ctfassets.net/y3qdch79qxiw/7K70oFOCdHf85zoXJWQL8x/50a8c5d5cbc5178a5987c243e1b0de12/IMG-banner1.svg',
    fileName: 'IMG-banner1.svg'
  }
}

const data = [
  {
    updatedAt: '2020-12-01T14:31:40.156Z',
    titulo: 'Visión Mensual de Inversiones',
    linkCallToActionInformes: {
      linkCallToActionInformes:
        'https://www.proteccion.com/wps/wcm/connect/proteccion/ee688a09-a14e-4906-af12-1fe472269738/VMI_NOV2020.pdf?MOD=AJPERES'
    },
    textoIntroductorioBite: 'Ensayo informes inversiones contenido',
    contentful_id: '156x7USXSE8Zy0ZdFLUpng',
    tipoDeInforme: 'Visión Mensual de Inversiones',
    contenido: {
      tituloCorto: 'Ensayo informes inversiones contenido',
      linkCallToAction: 'https://www.youtube.com/watch?v=Of6uOq_7ceE',
      Tema: [
        {
          contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
          tituloCorto: 'GENERICO INVERSIONES'
        }
      ],
      textoIntroductorio: 'Ensayo informes inversiones contenido',
      textoCallToActionBite: 'Quiero conocer más',
      urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
      contentful_id: 'ixxKMebxvMfDmOvqutmqz',
      relevancia: 'Relevancia Baja',
      descripcioncorta:
        'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
      updatedAt: '2020-10-22T14:00:16.360Z',
      imagenpequena: {
        file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
        fluid: {
          src:
            '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
        }
      },
      tipoDeCliente: [
        { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
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
      ]
    },
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ]
  },
  {
    updatedAt: '2020-12-01T14:29:57.860Z',
    titulo: 'Informe semanal',
    linkCallToActionInformes: {
      linkCallToActionInformes:
        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
    },
    textoIntroductorioBite: 'Conoce los valores del mercado actual',
    contentful_id: '7iimejGXVlqN9Vulsn4HVp',
    tipoDeInforme: 'Informe semanal',
    contenido: null,
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ]
  },
  {
    updatedAt: '2020-12-01T14:29:47.760Z',
    titulo: 'Informe trimestral de mercados',
    linkCallToActionInformes: {
      linkCallToActionInformes:
        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
    },
    textoIntroductorioBite: 'Conoce los valores del mercado actual',
    contentful_id: '4tZTfI6Kb326d5CMMNoIP8',
    tipoDeInforme: 'Informe trimestral de mercados',
    contenido: null,
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ]
  },
  {
    updatedAt: '2020-12-01T14:29:33.644Z',
    titulo: 'Informe trimestral Portafolios Balanceados',
    linkCallToActionInformes: {
      linkCallToActionInformes:
        'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
    },
    textoIntroductorioBite: 'Conoce los valores del mercado actual',
    contentful_id: '1iapMqBhFQTeYhdwLUfWSK',
    tipoDeInforme: 'Informe trimestral Portafolios Balanceados',
    contenido: null,
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ]
  }
]

const poscatds = [
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
      'Protección marca un hito trascendental en la transformación del proceso de inversiones con características de sostenibilidad. Durante más de 28 años hemos trabajado para proteger el futuro de millones de personas con la convicción de un futuro sostenible.',
    categoriaCliente: [
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' }
    ],
    textoIntroductorio:
      'El futuro sostenible lo hacemos conservando nuestros recursos',
    tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
    updatedAt: '2020-10-08T20:46:43.025Z',
    urlSeo: 'novedad/futuro-sostenible',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
      },
      file: {
        fileName:
          'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
      }
    },
    tema: [
      {
        contentful_id: '7cTYlI6D258aUgSOhXfiTp',
        tituloCorto: 'Novedades y Beneficios'
      }
    ],
    nombreImagen:
      'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
  }
]

const audio = [
  {
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ],
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
  },
  {
    lineaDeProducto: [
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
    ],
    titulo: 'Informe Semanal',
    OrigenDeAudio: ['Contentful'],
    linkPodcast: {
      linkPodcast:
        'https://images.ctfassets.net/y3qdch79qxiw/4pm6a5dhKStZcZKGyIvNn7/7605d9a9d6d2955cda01b287e5bafec0/WhatsApp-Audio-2020-10-19-at-1.33.52-PM-_1_.mp3'
    },
    descripcion:
      'El mercado accionario global marcó retrocesos con caídas más pronunciadas en Europa',
    updatedAt: '2020-11-25T16:53:06.498Z'
  }
]
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
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  global.window = Object.create(window)
  const url = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/',
    state: { key: '1588081418971' }
  }
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      pathname: '/contenido/',
      state: { key: '1588081418971' }
    }
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ComponentPresent
            accessibility={{ fontSize: 3, lineSize: 2 }}
            imagen={image}
            data={data}
            userData={{ userValue: [] }}
            type={1}
            dataNovedad={poscatds}
            indexBitestateSecond={1}
            podcasts={audio}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly persona click category inactive', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ComponentPresent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          imagen={image}
          data={data}
          userData={{ userValue: [] }}
          type={1}
          dataNovedad={poscatds}
          indexBitestateSecond={1}
          podcasts={audio}
        />
      </Provider>
    )
    const category = wrapper.find('.component-present-container-slider')
    category.simulate('click')
  })
})
