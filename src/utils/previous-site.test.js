import { redirectUrl } from './previous-site'

describe('Tests for previous site utils', () => {
  test('redirectUrl for type 1 and category Cesantías', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas'

    const url = redirectUrl(1, 'Cesantías')
    expect(url).toBe(expectedUrlReturned)
  })

  test('redirectUrl for type 2 and category Cesantías', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/empresas'

    const url = redirectUrl(2, 'Cesantías')
    expect(url).toBe(expectedUrlReturned)
  })

  test('redirectUrl for type 1 and category Ahorro', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/'

    const url = redirectUrl(1, 'Ahorro')
    expect(url).toBe(expectedUrlReturned)
  })

  test('redirectUrl for type 2 and category Ahorro', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/web-empresas'

    const url = redirectUrl(2, 'Ahorro')
    expect(url).toBe(expectedUrlReturned)
  })

  test('redirectUrl for type 2 and any category', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/web-empresas'

    const url = redirectUrl(2)
    expect(url).toBe(expectedUrlReturned)
  })

  test('redirectUrl for any type and any category', () => {
    const expectedUrlReturned =
      'https://www.proteccion.com/wps/portal/proteccion/'

    const url = redirectUrl()
    expect(url).toBe(expectedUrlReturned)
  })
})
