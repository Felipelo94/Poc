import { getLinkApp } from './open-link-app'

jest.mock('./redirectUtil', () => ({
  getCurrentHost: jest.fn(() => 'https://proteccion.com')
}))

const linksApp = [
  {
    node: {
      enlace: 'https://appstore.com'
    }
  },
  {
    node: {
      enlace: 'https://playstore.com'
    }
  },
  {
    node: {
      enlace: 'https://canales-proteccion.com'
    }
  }
]

describe('Test for getLinkApp util', () => {
  test('should return empty string', () => {
    const linkApp = getLinkApp([], false, false)
    expect(linkApp).toBe('')
  })
  test('should return link of play store', () => {
    const linkApp = getLinkApp(linksApp, true, false)
    expect(linkApp).toBe(linksApp[1].node.enlace)
  })
  test('should return link of app store', () => {
    const linkApp = getLinkApp(linksApp, false, true)
    expect(linkApp).toBe(linksApp[0].node.enlace)
  })
  test('should return link of canales', () => {
    const linkApp = getLinkApp(
      linksApp,
      false,
      false,
      '/canales/app-proteccion'
    )
    expect(linkApp).toBe('https://proteccion.com/canales/app-proteccion')
  })
})
