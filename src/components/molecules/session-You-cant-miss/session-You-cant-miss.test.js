import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import SessionYouCantMissComponent, {
  SessionYouCantMiss
} from './session-You-cant-miss'
import data from '../../../const/dictionary/youcantmiss.json'
import { mount } from 'enzyme'

describe('HomePage', () => {
  const user = { userValue: [] }
  const dataProducto = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      relevancia: 'Relevancia Media',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      relevancia: 'Relevancia Baja',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      relevancia: 'Relevancia Media',
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    }
  ]

  const educativos = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      relevancia: 'Relevancia Media',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      relevancia: 'Relevancia Baja',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      relevancia: 'Relevancia Media',
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      relevancia: 'Relevancia Baja',
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'educativo'
    }
  ]

  const beneficios = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      titulo: 'asdasdasdasdsadsadsad',
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      tipoContent: 'beneficio',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      relevancia: 'Relevancia Baja',
      tipoBite: ''
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      titulo: '',
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      tipoContent: 'beneficio',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      relevancia: 'Relevancia Baja',
      tipoBite: ''
    }
  ]

  const beneficiosWrong = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      titulo: 'asdasdasdasdsadsadsad',
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      tipoContent: 'd',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      relevancia: 'Relevancia Baja',
      tipoBite: ''
    }
  ]
  const novedadades = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      tipoContent: 'novedad',
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      relevancia: 'Relevancia Baja',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    }
  ]

  const novedadadesWrong = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      relevancia: 'Relevancia Baja',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    }
  ]
  const dataFeatured = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      titulo: 'asdasdasdasdsadsadsad',
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,

      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      relevancia: 'Relevancia Baja',
      tipoBite: ''
    }
  ]
  const index = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 1 },
    { nombre: 'educacion', tamaño: 4 }
  ]
  const indexProduct = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 0 },
    { nombre: 'educacion', tamaño: 0 }
  ]

  const indexProduct2 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 1 },
    { nombre: 'educacion', tamaño: 1 }
  ]

  const indexProduct3 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 2 },
    { nombre: 'educacion', tamaño: 1 }
  ]

  const indexProduct4 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 3 },
    { nombre: 'educacion', tamaño: 1 }
  ]

  const indexProduct5 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 1 },
    { nombre: 'educacion', tamaño: 2 }
  ]

  const indexProduct6 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 1 },
    { nombre: 'educacion', tamaño: 3 }
  ]

  const indexProduct7 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 24 },
    { nombre: 'servicio', tamaño: 24 },
    { nombre: 'educacion', tamaño: 24 }
  ]
  const indexProduct8 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 24 },
    { nombre: 'educacion', tamaño: 4 }
  ]
  const indexProduct9 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 24 },
    { nombre: 'educacion', tamaño: 5 }
  ]
  const indexProduct10 = [
    { nombre: 'productos', tamaño: 24 },
    { nombre: 'servicio', tamaño: 24 },
    { nombre: 'educacion', tamaño: 6 }
  ]

  const dataProductoJustPrducts = [
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    },
    {
      imagenpequena: {
        fluid: {
          src:
            'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
        }
      },
      urlSeo: null,
      textoCallToActionBite: 'Explícame',
      tituloCorto: null,
      textoIntroductorio: null,
      descripcioncorta: null,
      updatedAt: '2020-02-28T14:56:05.042Z',
      categoriaCliente: [
        { descripcion: 'Cesante' },
        { descripcion: 'Empleado' },
        { descripcion: 'Independiente' }
      ],
      category: [{ nombre: 'Cesantías' }],
      tipoBite: 'producto'
    }
  ]
  const mockStore = configureStore()

  const dataUser = {
    userValue: {
      id: 1496,
      name: 'esteban jimenez',
      type: 1,
      category: 'Cesantías',
      subcategory: 'Independiente',
      date: '31/3/2020',
      state: 1,
      hostUser: { host: '19025012443ESTEBANJIMENEZ3132020162436', state: 1 }
    }
  }

  const initialState = {
    youcantmiss: { userValue: dataUser }
  }
  const initialStateArray = {
    youcantmiss: { userValue: [dataUser] }
  }
  let useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f())
  }
  let store
  let storeArray
  beforeEach(() => {
    fetch.resetMocks()
    useEffect = jest.spyOn(React, 'useEffect')
    store = mockStore(initialState)
    storeArray = mockStore(initialStateArray)
    store.dispatch = jest.fn()
    storeArray.dispatch = jest.fn()
  })

  const getSuccess = jest.fn(() =>
    Promise.resolve({
      id: 137,
      name: 'laura',
      type: 1,
      category: 'Cesantías',
      subcategory: 'Empleado',
      date: '17/2/2020',
      state: 1,
      hostUser: {
        host: '50100646453736800398710653736',
        state: 1
      }
    })
  )
  it('render product', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
          dataFeatured={dataFeatured}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render prodycto with featured', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto.concat(dataProducto)}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render a few productos without featured', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render producto with education', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto.concat(educativos)}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render education', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={educativos.concat(educativos)}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficiosWrong}
          dataNovedad={novedadadesWrong}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render few education', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={educativos}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficiosWrong}
          dataNovedad={novedadadesWrong}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render without education and prodtc', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={[]}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
          dataFeatured={undefined}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render camapañas 3 1', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render camapañas 3 2', () => {
    const indexPage2 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={user}
          indexArrays={index}
          dataBeneficio={[]}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage2.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render camapañas 3 1', () => {
    const indexPage = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={dataUser}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render camapañas 3 2', () => {
    const indexPage2 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={dataProducto}
          userData={user}
          indexArrays={index}
          dataBeneficio={[]}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage2.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 3', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={index}
          dataBeneficio={beneficios}
          dataNovedad={[]}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct}
          dataBeneficio={[]}
          dataNovedad={[]}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct2}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct3}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct4}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct5}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct6}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    mockUseEffect()
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProductoJustPrducts}
          userData={user}
          indexArrays={indexProduct7}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct2}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct2}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct8}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct9}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renderer camapañas 3 4', () => {
    const indexPage3 = renderer.create(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={dataProducto}
          userData={user}
          indexArrays={indexProduct10}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
    const tree = indexPage3.toJSON()
    expect(tree).toMatchSnapshot()
  })

  global.window = Object.create(window)

  it('renders correctly with click events', () => {
    global.innerWidth = 1366
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title=""
          data={data}
          userData={user}
          indexArrays={indexProduct2}
          dataBeneficio={beneficios}
          dataNovedad={novedadades}
        />
      </Provider>
    )
  })

  it('render 1', () => {
    const indexPage = renderer.create(
      <Provider store={storeArray}>
        <SessionYouCantMissComponent
          accessibility={{ fontSize: 3, lineSize: 2 }}
          getF={getSuccess}
          title="Lo que no te puedes perder"
          data={[]}
          userData={dataUser}
          indexArrays={[]}
          dataBeneficio={[]}
          dataNovedad={[]}
          indexDBUser={dataUser}
        />
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
