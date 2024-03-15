import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import personMenuOptions from '../../../const/dictionary/multilevel-menu-options-person.json'
import lightTheme from '../../../themes/light'
import Menu from './menu'

const dataUser = {
  id: 616,
  name: 'esteban asdasdas',
  type: 1,
  category: 'Cesantías',
  subcategory: 'Cesante',
  date: '3/3/2020',
  state: 1,
  hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
}

const dataUser2 = {
  id: 616,
  name: 'estebanjimenezruizholalslds asasd',
  type: 2,
  category: 'Cesantías',
  subcategory: 'Cesante',
  date: '3/3/2020',
  state: 1,
  hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
}

const dataUser3 = { nameValue: 'esteban', typeUser: 1 }

const mockStore = configureStore()

const initialState = {
  youcantmiss: {
    userValue: dataUser
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    type: 1
  }
}

const cleanDataMenu = dataDirty => {
  const newDataMenu = []
  dataDirty.map((items, index) =>
    newDataMenu.push({
      id: items.id,
      desciption: items.description,
      icon: index,
      order: items.order,
      options: items.suboptions,
      url: items.url
    })
  )
  return newDataMenu
}

const initialState2 = {
  youcantmiss: {
    userValue: dataUser2
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    type: 1
  }
}

const initialState3 = {
  welcome: {
    nameValue: dataUser3,
    typeUser: 1
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  }
}

describe.skip('menupizza', () => {
  let store
  let store2
  let store3
  let currentW
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()

    store2 = mockStore(initialState2)
    store2.dispatch = jest.fn()

    store3 = mockStore(initialState3)
    store3.dispatch = jest.fn()

    window.resizeTo = jest.fn()
    window.resizeTo(1200, 667)
    currentW = window.innerWidth
  })

  it('renders correctly ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <Menu
              setActiveAccesibilty={jest.fn()}
              setAnimationSobra={jest.fn()}
              isOpen={false}
              currentWidth={currentW}
              isPrehome={true}
              user={dataUser}
              services={dataUser}
              setmodalClosedmenu={() => {}}
              dataMenu={cleanDataMenu(personMenuOptions)}
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store2}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            user={dataUser}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
  })
  it('renders correctly without props', () => {
    const wraper = mount(
      <Provider store={store3}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            user={dataUser}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const wraper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={false}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('close menu', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            services={dataUser}
            currentWidth={currentW}
            isPrehome={true}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('click')
  })

  it('click  button-open-modal-comntainer', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            services={dataUser}
            currentWidth={currentW}
            isPrehome={true}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnPlus = wrapper.find('#btn-plus-modal')
  })

  it('close menu', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('keydown')
  })

  it('Button Cerrar click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )

    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('click')
  })

  it('isNotUser keydown', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('click')
  })

  it('isNotUser keydown last', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('click')
  })

  it('isNotUser keydown last', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
    wrapper
      .find('#btn-cerrar')
      .first()
      .simulate('click')
  })

  it('isNotUser click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Menu
            setActiveAccesibilty={jest.fn()}
            setAnimationSobra={jest.fn()}
            isOpen={true}
            currentWidth={currentW}
            isPrehome={true}
            services={dataUser}
            indexDBUserName="Silvio Cantil"
            nameUser={{ nameValue: 'Holaaaa' }}
            setmodalClosedmenu={() => {}}
            dataMenu={cleanDataMenu(personMenuOptions)}
          />
        </ThemeProvider>
      </Provider>
    )
  })
})
