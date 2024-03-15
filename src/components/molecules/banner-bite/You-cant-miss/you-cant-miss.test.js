import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import YoucantmissComponent from './You-cant-miss'

const mockStore = configureStore()
global.window = Object.create(window)

const dataUser = {
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
}

const initialState = {
  youcantmiss: { userValue: dataUser }
}

describe('YouCantMiss', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  const data = [
    {
      tipoBite: 'contenido-duro',
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
      tipoBite: 'procesos',
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
      tipoBite: 'contenido-ligero',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
      tipoBite: 'contenido-duro',
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
    }
  ]

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

  it('renders correctly no titles', () => {
    const dataUser =
      '{"name":"Bryan","type":1,"hostUser":{"host":"5010064645373679039458853736","state":1},"category":"inversion","subcategory":"experto","date":"27/12/2019","state":1}'
    window.sessionStorage.setItem('data-user', dataUser)
    const tree = renderer
      .create(
        <Provider store={store}>
          <YoucantmissComponent
            data={data}
            title="xxxxxxxxx"
            accessibility={{ lineSize: 7, fontSize: 3 }}
            getF={getSuccess}
            numBite={5}
            index={8}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
