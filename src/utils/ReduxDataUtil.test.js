import { sendUserDataRedux } from './ReduxDataUtil'
import * as indexDB from '../services/service-indexDB/service-indexDB'

describe('sendUserDataRedux function', () => {
  test('execute happy flow', () => {
    jest.spyOn(indexDB, 'getDataIb').mockImplementation(async () => [])

    sendUserDataRedux(
      async () => [{ host: 'host' }],
      jest.fn(),
      async () => [{}],
      jest.fn(),
      jest.fn()
    )
    sendUserDataRedux(
      async () => [{ host: 'host' }],
      null,
      async () => [],
      jest.fn(),
      jest.fn()
    )
    sendUserDataRedux(
      async () => [],
      null,
      async () => [],
      jest.fn(),
      jest.fn()
    )
    sendUserDataRedux(null, null, async () => [], jest.fn(), jest.fn())
    sendUserDataRedux(
      async () => [{ host: 'host' }],
      jest.fn(),
      async () => {
        throw new Error({})
      },
      jest.fn(),
      jest.fn()
    )
  })

  test('execute other flow', () => {
    jest.spyOn(indexDB, 'getDataIb').mockImplementation(async () => [{}])

    sendUserDataRedux(
      async () => [{ host: 'host' }],
      jest.fn(),
      async () => [{}],
      jest.fn(),
      jest.fn()
    )
    sendUserDataRedux(
      async () => [{ host: 'host' }],
      null,
      async () => [],
      jest.fn(),
      jest.fn()
    )
    sendUserDataRedux(
      async () => [],
      null,
      async () => [],
      jest.fn(),
      jest.fn()
    )
  })
})
