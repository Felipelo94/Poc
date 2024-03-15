import { shallow } from 'enzyme'
import React from 'react'
import solucionesClic from '../../../assets/images/soluciones-clic.svg'
import ContainerModalMenu from './container-modal-menu'

describe('ContainerModal Menu', () => {
  const itemsMenuSuboption = [
    {
      id: 31,
      order: 1,
      url: '',
      description: 'Accesos Rápidos',
      parentId: null,
      category: 'Inversión',
      subcategory: 'ALL',
      typeCustomer: 1,
      suboptions: [
        {
          id: 122,
          order: 1,
          url: '',
          description: 'Quiero invertir',
          parentId: 31,
          category: 'Inversión',
          subcategory: 'ALL',
          typeCustomer: 1,
          suboptions: [
            {
              id: 123,
              order: 1,
              url: 'https://proteccion.com/gestion-pro',
              description: 'Gestión PRO',
              parentId: 122,
              category: 'Inversión',
              subcategory: 'ALL',
              typeCustomer: 1,
              suboptions: []
            }
          ]
        }
      ]
    }
  ]
  const itemsMenu1Suboption = [
    {
      id: 31,
      order: 1,
      url: '',
      description: 'Accesos Rápidos',
      parentId: null,
      category: 'Inversión',
      subcategory: 'ALL',
      typeCustomer: 1,
      suboptions: [
        {
          id: 122,
          order: 1,
          url: 'https://proteccion.com/gestion-pro',
          description: 'Quiero invertir',
          parentId: 31,
          category: 'Inversión',
          subcategory: 'ALL',
          typeCustomer: 1,
          suboptions: []
        }
      ]
    }
  ]
  const itemsMenu = [
    {
      id: 32,
      order: 2,
      url: '/canales/?c=31JYCa3KmNmAmNH2Pj5Zxm',
      description: 'Canales de Servicio',
      parentId: null,
      category: 'Inversión',
      subcategory: 'ALL',
      typeCustomer: 1,
      suboptions: []
    }
  ]
  it('ContainerModal Menu renders suboptions and simulate event handlers', () => {
    const wrapper = shallow(
      <ContainerModalMenu
        blackTheme
        items={itemsMenuSuboption}
        image={solucionesClic}
      />
    )
    wrapper
      .find('Anchor')
      .first()
      .simulate('click')
    wrapper
      .find('Anchor')
      .first()
      .simulate('mouseover')
    wrapper
      .find('Anchor')
      .first()
      .simulate('keydown', { keyCode: 13 })
    expect(
      wrapper
        .find('Anchor')
        .first()
        .hasClass('active')
    ).toBeTruthy()
    expect(
      wrapper.find('Anchor').contains(itemsMenuSuboption[0].description)
    ).toBe(true)
  })

  it('ContainerModal Menu renders without suboptions and simulate event handlers', () => {
    const wrapper = shallow(
      <ContainerModalMenu blackTheme items={itemsMenu} image={solucionesClic} />
    )
    wrapper
      .find('Anchor')
      .first()
      .simulate('click')
    wrapper
      .find('Anchor')
      .first()
      .simulate('mouseover')
    expect(
      wrapper
        .find('Anchor')
        .first()
        .hasClass('active')
    ).toBeTruthy()
    expect(wrapper.find('Anchor').contains(itemsMenu[0].description)).toBe(true)
  })

  it('ContainerModal Menu renders suboptions and simulate event handlers in first suboption', () => {
    const wrapper = shallow(
      <ContainerModalMenu
        blackTheme={false}
        items={itemsMenuSuboption}
        image={solucionesClic}
      />
    )
    wrapper
      .find('Anchor')
      .first()
      .simulate('click')
    wrapper
      .find('Anchor')
      .at(1)
      .simulate('click')
    wrapper
      .find('Anchor')
      .at(1)
      .simulate('mouseover')

    expect(
      wrapper
        .find('Anchor')
        .contains(itemsMenu1Suboption[0].suboptions[0].description)
    ).toBe(true)
  })

  it('ContainerModal Menu renders suboptions and simulate event handlers in only suboption', () => {
    const onToggleModalSalesforce = jest.fn()
    const wrapper = shallow(
      <ContainerModalMenu
        onToggleModalSalesforce={onToggleModalSalesforce}
        blackTheme={false}
        items={itemsMenu1Suboption}
        image={solucionesClic}
      />
    )
    wrapper
      .find('Anchor')
      .first()
      .simulate('click')
    wrapper
      .find('Anchor')
      .at(1)
      .simulate('click')
    wrapper
      .find('Anchor')
      .at(1)
      .simulate('mouseover')

    expect(
      wrapper
        .find('Anchor')
        .contains(itemsMenu1Suboption[0].suboptions[0].description)
    ).toBe(true)
    expect(onToggleModalSalesforce).toBeCalled()
  })
})
