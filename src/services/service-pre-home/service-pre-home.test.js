import { postApiPreHome } from './service-pre-home'

beforeEach(() => {
  fetch.resetMocks()
})

test('returns result if array', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      id: 'f7c28640-30bb-4acb-8527-360e943c07fc',
      nombre: 'user.saved',
      idTrazabilidad: null,
      appId: '132',
      userName: 'anonymous',
      idSession: 'SESION_NO_DISPONIBLE',
      timestamp: 1576864022235
    })
  )

  const onResponse = jest.fn()
  const onError = jest.fn()
  return postApiPreHome(
    {
      nombre: 'user.saved',
      payload: {}
    },
    `${process.env.URI_BACK}commands`
  )
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})

test('returns callback null', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      id: 'f7c28640-30bb-4acb-8527-360e943c07fc',
      nombre: 'user.saved',
      idTrazabilidad: null,
      appId: '132',
      userName: 'anonymous',
      idSession: 'SESION_NO_DISPONIBLE',
      timestamp: 1576864022235
    })
  )

  const onResponse = jest.fn()
  const onError = jest.fn()
  return postApiPreHome(
    {
      nombre: 'user.saved',
      payload: {}
    },
    `${process.env.URI_BACK}commands`,
    null
  )
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})
