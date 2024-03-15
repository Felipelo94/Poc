import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { getCMS } from '../../../utils/apiCMS'

import TableRentabilidades, {
  ExpandedComponent
} from './table-rentabilidades.js'

const observe = jest.fn()

window.IntersectionObserver = jest.fn(function() {
  this.observe = observe
})

describe('Table Rentabilidades', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TableRentabilidades />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly expanded component', () => {
    const tree = renderer.create(ExpandedComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should be exist handleScrollEvent', () => {
    const wrapper = shallow(<TableRentabilidades />)
    expect(typeof wrapper.instance().handleScrollEvent).toBe('function')
  })

  it('should be handling handleScrollEvent', () => {
    const wrapper = shallow(<TableRentabilidades />)
    wrapper.instance().handleScrollEvent()

    expect(typeof wrapper.instance().handleScrollEvent).toBe('function')
  })

  const wrapperTest = mount(<TableRentabilidades />, {
    attachTo: document.body
  })
  it('should be handling changeHeaderToNormal', () => {
    wrapperTest.instance().changeHeaderToNormal()
    expect(typeof wrapperTest.instance().changeHeaderToNormal).toBe('function')
  })

  it('should be handling changeHeaderToSticky', () => {
    wrapperTest.instance().changeHeaderToSticky()
    expect(typeof wrapperTest.instance().changeHeaderToSticky).toBe('function')
  })

  it('should be handling ExpandedComponent', () => {
    const data = { data: { id: '41' } }
    const wrapper = mount(<TableRentabilidades />)
    wrapper.setState({
      contentFichasTecnicas: [{ fields: { IDAlternativaDeInversion: '41' } }]
    })
    wrapper.instance().ExpandedComponent(data)
    expect(typeof wrapper.instance().ExpandedComponent).toBe('function')
  })

  it('validates if you have rendered the header titles', () => {
    const title1 = 'PORTAFOLIO DE INVERSIÓN'
    const title2 = 'RENTABILIDAD'

    const wrapper = shallow(<TableRentabilidades />)

    const textTitle1 = wrapper.find('#title-colum1').text()
    const textTitle2 = wrapper.find('#title-colum2').text()

    expect(textTitle1).toBe(title1)
    expect(textTitle2).toBe(title2)
  })

  it('should call componentDidMount once', () => {
    const componentDidMountSpy = jest.spyOn(
      TableRentabilidades.prototype,
      'componentDidMount'
    )

    const component = shallow(<TableRentabilidades />)
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
  })

  it('should change the state contentFichasTecnicas', () => {
    const wrapper = mount(<TableRentabilidades />)

    getCMS('fichastecnicas').then(data => {
      wrapper.setState({
        contentFichasTecnicas: data.items
      })
      expect(wrapper.state().contentFichasTecnicas.lenght).toBeGreaterThan(0)
    })
  })

  it('should populate the state', () => {
    const component = shallow(<TableRentabilidades />)
    expect(component.state().contentFichasTecnicas).toEqual({})
  })
})
