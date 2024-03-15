import { mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import menuD from '../../../../const/dictionary/multilevel-menu-options-person.json'
import lightTheme from '../../../../themes/light'
import MenuHamburger from './menu-hamburger'

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

const initialState = {
  youcantmiss: {
    userValue: dataUser
  }
}
const mockStore = configureStore()

const cleanDataMenu = dataDirty => {
  const newDataMenu = []
  const dataResult = dataDirty.filter(
    item =>
      item.typeCustomer === 2 ||
      item.category === 'Ahorro' ||
      item.subcategory === 'ALL'
  )
  dataResult.map((items, index) =>
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
describe('Menu Hamburger', () => {
  let store
  let container
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    container = document.createElement('div')
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            services={dataUser}
            typeUser={2}
            setActiveAccesibilty={() => {}}
            isOpenMenu={false}
            setActiveAccesibilty={() => {}}
          />
        </ThemeProvider>
      </Provider>,
      {
        attachTo: container
      }
    )
  })

  it('Modal Menu renders correctly', () => {
    const tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            setActiveAccesibilty={() => {}}
            dataMenuOptions={cleanDataMenu(menuD)}
            services={dataUser}
            typeUser={2}
            isOpenMenu={false}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            name="Silvio"
            services={dataUser}
            setActiveAccesibilty={() => {}}
            isOpenMenu={true}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnClose = wrapper.find('#btn-menu-item')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            name="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            category="Cesantías"
            setActiveAccesibilty={() => {}}
            subcategory="Cesante"
            services={dataUser}
            isOpenMenu={true}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnClose = wrapper.find('#btn-menu-item')
    btnClose.last().simulate('click')
  })

  it('onKeyDown Menu renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            name="Silvio"
            category="Cesantías"
            subcategory="Cesante"
            services={dataUser}
            isOpenMenu={true}
            setActiveAccesibilty={() => {}}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnClose = wrapper.find('#btn-menu-item')
    btnClose.first().simulate('keydown')
  })

  it('onKeyDown btn-img-subitem', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            name="Silvio"
            category="Cesantías"
            subcategory="Cesante"
            services={dataUser}
            isOpenMenu={true}
            setActiveAccesibilty={() => {}}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnClose = wrapper.find('#btn-img-subitem')
    btnClose.first().simulate('keydown')
  })

  it('click btn-img-subitem', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MenuHamburger
            welcome="Silvio"
            dataMenuOptions={cleanDataMenu(menuD)}
            name="Silvio"
            category="Cesantías"
            subcategory="Cesante"
            services={dataUser}
            isOpenMenu={true}
            setActiveAccesibilty={() => {}}
          />
        </ThemeProvider>
      </Provider>
    )
    const btnClose = wrapper.find('#btn-img-subitem')
    btnClose.first().simulate('click')
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })
})
