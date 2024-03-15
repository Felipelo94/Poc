import React from 'react'
import renderer from 'react-test-renderer'
import QuickAccess from './quick-access'
import dataAcesso from '../../../const/dictionary/quick_access_person_company.json'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const services = {
  host: '19191229128SDFD159202093557',
  nameuser: 'sdfd',
  category: 'Cesantías',
  subcategory: 'Cesante',
  type: 1,
  age: 0,
  gender: null,
  encuesta: 'false'
}

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

describe('Button', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            data={dataAcesso}
            animation={false}
            services={services}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={2}
            category={'Cesantías'}
            subCategory={'Cesante'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={1}
            category={'Cesantías'}
            subCategory={'Cesante'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={1}
            category={'Ahorro'}
            subCategory={'Cesante'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={2}
            category={'Ahorro'}
            subCategory={'Cesante'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={2}
            category={'Pensión'}
            subCategory={'pensionado'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuickAccess
            accessibility={{ fontSize: 3, lineSize: 2 }}
            animation={true}
            services={dataAcesso}
            type={1}
            category={'Cesantías'}
            subCategory={'Cesante'}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it("renders correctly OficinaComponent", () => {
  //   global.innerWidth = 800
  //   global.dispatchEvent(new Event("resize"))
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <QuickAccess
  //         accessibility={{ fontSize: 3, lineSize: 2 }}
  //         animation={true}
  //         services={dataAcesso}
  //         type={2}
  //         category={"Cesantías"}
  //         subCategory={"Cesante"}
  //       />
  //     </Provider>
  //   )
  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("click")

  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("mouseover")

  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("mouseout")
  // })

  // it("renders correctly OficinaComponent", () => {
  //   global.innerWidth = 400
  //   global.dispatchEvent(new Event("resize"))
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <QuickAccess
  //         accessibility={{ fontSize: 3, lineSize: 2 }}
  //         animation={true}
  //         services={dataAcesso}
  //         type={2}
  //         category={"Cesantías"}
  //         subCategory={"Cesante"}
  //       />
  //     </Provider>
  //   )
  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("click")
  // })

  // it("renders correctly OficinaComponent", () => {
  //   global.innerWidth = 400
  //   global.dispatchEvent(new Event("resize"))
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <QuickAccess
  //         accessibility={{ fontSize: 3, lineSize: 2 }}
  //         animation={true}
  //         services={dataAcesso}
  //         type={1}
  //         category={"Cesantías"}
  //         subCategory={"Cesante"}
  //       />
  //     </Provider>
  //   )
  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("mouseenter")
  // })

  // it("renders correctly OficinaComponent", () => {
  //   global.innerWidth = 400
  //   global.dispatchEvent(new Event("resize"))
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <QuickAccess
  //         accessibility={{ fontSize: 3, lineSize: 2 }}
  //         animation={true}
  //         services={dataAcesso}
  //         type={2}
  //         category={"Cesantías"}
  //         subCategory={"Cesante"}
  //       />
  //     </Provider>
  //   )
  //   wrapper
  //     .find(".container-quick-access-call-to-action")
  //     .first()
  //     .simulate("mouseleave")
  // })

  it('renders correctly OficinaComponent', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <QuickAccess
          accessibility={{ fontSize: 3, lineSize: 2 }}
          animation={true}
          services={dataAcesso}
          type={2}
          category={'Cesantías'}
          subCategory={'Cesante'}
        />
      </Provider>
    )
  })
})
