import { get } from './service-general'

beforeEach(() => {
  fetch.resetMocks()
})

test('returns result if array', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      ip: '10.245.25.36'
    })
  )
  const onResponse = jest.fn()
  const onError = jest.fn()
  return get(
    [{ name: 'format', value: 'json' }],
    'https://api.ipify.org/',
    false
  )
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})

test('returns result if param 2 array', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      ip: '10.245.25.36'
    })
  )
  const onResponse = jest.fn()
  const onError = jest.fn()
  return get(
    [
      { name: 'format', value: 'json' },
      { name: 'format2', value: 'jsonp' },
      { name: 'format2', value: 'jsonp' }
    ],
    'https://api.ipify.org/',
    true
  )
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})

test('returns params null', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      ip: '10.245.25.36'
    })
  )
  const onResponse = jest.fn()
  const onError = jest.fn()
  return get(null, 'https://api.ipify.org/')
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})

test('returns params empty', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      ip: '10.245.25.36'
    })
  )
  const onResponse = jest.fn()
  const onError = jest.fn()
  return get([], 'https://api.ipify.org/')
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })
})
