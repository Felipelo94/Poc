import { shallow } from 'enzyme'
import React from 'react'
import FooterDetails from './footer-details'

jest.mock('react-redux', () => ({
  useSelector: jest
    .fn(() => {
      return {
        accesibility: {
          darkMode: false
        }
      }
    })
    .mockImplementationOnce(() => {
      return {
        accesibility: {
          darkMode: true
        }
      }
    })
}))

describe('Test for FooterDetails component', () => {
  test('should render without error', () => {
    const wrapper = shallow(<FooterDetails />)
    expect(wrapper.hasClass('footer-content__details')).toBeTruthy()
  })

  test('should render FooterSocials', () => {
    const dataContentful = {
      allContentfulRedSocial: {
        edges: [
          {
            node: {
              nombre: '',
              id: '',
              url: '',
              icono: {
                fluid: {
                  src: ''
                }
              }
            }
          }
        ]
      }
    }
    const wrapper = shallow(<FooterDetails dataContentful={dataContentful} />)
    expect(wrapper.find('FooterSocials')).toHaveLength(1)
  })
})
