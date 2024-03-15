import React from 'react'
import { mount, shallow } from 'enzyme'
import MegaMenuModal from './mega-menu-modal'

const subcategory = ''
const typeUser = 1
const setmodalClosed = jest.fn()
const overModal = jest.fn()
const options = [
  {
    option: 'option 1'
  },
  {
    option: 'option2'
  }
]
const servicesUser = {
  age: 0,
  category: 'Ahorro',
  encuesta: 'false',
  gender: null,
  host: '19084119244RAGZ652021141629',
  nameuser: 'Ragz',
  subcategory: '',
  type: 1
}

describe('modal-mega-menu', () => {
  it('redenrs properly false', () => {
    const icon = 1
    const selectedTitle = 1
    const selectedMenu = false
    const modal = shallow(
      <MegaMenuModal
        classGtm={'gtmHomeAccesosRapidos'}
        statusOver={selectedMenu && selectedTitle === icon ? true : false}
        tittle={'gtmHomeAccesosRapidos'}
        setmodalClosed={setmodalClosed}
        overModal={overModal}
        services={typeUser}
        servicesUser={servicesUser}
        subcategory={subcategory}
        idIcon={icon}
        options={options}
        typeUser={typeUser}
        className={`container-buton-open-test-${icon}`}
      />
    )
    expect(modal.length).toEqual(1)
  })
  it('functions OnClick called', () => {
    const icon = 1
    const selectedTitle = 1
    const selectedMenu = false
    const setsoluciones = jest.fn()
    const setclick = jest.fn()
    const modal = mount(
      <MegaMenuModal
        classGtm={'gtmHomeAccesosRapidos'}
        statusOver={selectedMenu && selectedTitle === icon ? true : false}
        tittle={'gtmHomeAccesosRapidos'}
        setmodalClosed={setmodalClosed}
        overModal={overModal}
        services={typeUser}
        servicesUser={servicesUser}
        subcategory={subcategory}
        idIcon={icon}
        options={options}
        typeUser={typeUser}
        className={`container-buton-open-test-${icon}`}
        setsoluciones={setsoluciones}
        setclick={setclick}
      />
    )
    modal.simulate('click')
    expect(setsoluciones).toHaveBeenCalledTimes(1)
    expect(setclick).toHaveBeenCalledTimes(1)
  })
  it('switch case', () => {
    const icon = 2
    const selectedTitle = 2
    const selectedMenu = false
    const setsNameClass = jest.fn()
    const setNameId = jest.fn()
    const setNameTitle = jest.fn()
    const setsoluciones = jest.fn()
    const setclick = jest.fn()
    const modal = mount(
      <MegaMenuModal
        classGtm={'gtmHomeAccesosRapidos'}
        statusOver={selectedMenu && selectedTitle === icon ? true : false}
        tittle={'gtmHomeAccesosRapidos'}
        setmodalClosed={setmodalClosed}
        overModal={overModal}
        services={typeUser}
        servicesUser={servicesUser}
        subcategory={subcategory}
        idIcon={icon}
        options={options}
        typeUser={typeUser}
        className={`container-buton-open-test-${icon}`}
        setsNameClass={setsNameClass}
        setNameId={setNameId}
        setNameTitle={setNameTitle}
        setsoluciones={setsoluciones}
        setclick={setclick}
      />
    )
    modal.simulate('click')
    modal.setProps({ icon: 3, selectedTitle: 3 })
    modal.setProps({ icon: 1, selectedTitle: 1 })
    modal.setProps({ icon: 2, selectedTitle: 2 })
  })
})
