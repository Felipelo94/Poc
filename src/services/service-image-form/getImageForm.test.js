import { getFormImage } from './getImageForm'
import '@testing-library/jest-dom/extend-expect'

jest.mock('contentful', () => ({
  createClient: () => ({
    getAsset: async () => ({
      fields: {
        file: {
          url: 'url'
        },
        description: 'description'
      }
    })
  })
}))

describe('getImageForm', () => {
  test('returns clients asset image if props is not sended', () => {
    expect(getFormImage()).resolves.toEqual({})
  })

  test('returns clients asset image if props is sended', () => {
    expect(getFormImage(true)).resolves.toEqual({})
  })
})
