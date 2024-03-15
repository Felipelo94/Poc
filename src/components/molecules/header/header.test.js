import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import personMenuOptions from '../../../const/dictionary/multilevel-menu-options-person.json'
import lightTheme from '../../../themes/light'
import { HeaderComponent } from './header'
jest.useFakeTimers()
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
  welcome: {
    nameValue: 'dataUser',
    typeUser: 1
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  menu: {
    status: false
  }
}

let getSuccess
let getData
describe('HeaderComponent', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()

    getSuccess = jest.fn(() => Promise.resolve(personMenuOptions))
    getData = jest.fn(() =>
      Promise.resolve([
        { name: '', hostUser: { host: '' }, category: 'Cesantías', type: 1 }
      ])
    )
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  const data = {
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/2tePFxFZKOazwem9z0ZCmF/a6149fbc11ef5c3a4d8ab46b63c8ca04/logotipo-proteccion.svg'
            },
            contentful_id: '2tePFxFZKOazwem9z0ZCmF'
          }
        },
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/53FMOv4oVjKhXINXSjHMtu/dc3b69f5504f6c55c412332a7e963358/bg-icono-tipo-publico.svg'
            },
            contentful_id: '53FMOv4oVjKhXINXSjHMtu'
          }
        },
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
            },
            contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
          }
        }
      ]
    }
  }
  global.window = Object.create(window)
  it('renders correctly', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={data}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders dataundefind', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={undefined}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders click factory', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={undefined}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders click person', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={undefined}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders click person', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={undefined}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders click person', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent
            getInfoDb={getData}
            showTypePerson={true}
            data={data}
            getF={getSuccess}
          />
        </ThemeProvider>
      </Provider>
    )
  })
})
