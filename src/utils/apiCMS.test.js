import { getCMS } from './apiCMS'

describe('Test for CMS API functions', () => {
  test('Should return a CMS response', async () => {
    expect(getCMS('servicio')).toBeDefined()
  })
})
