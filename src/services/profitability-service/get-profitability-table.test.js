import axios from 'axios'
import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import { getProfitabilityTable } from './get-profitability-table'

jest.mock('axios')

const MOCK_DATA = {
  date: '2022-02-28',
  profit: {
    id: '1',
    title: 'PROTECCION RECAUDADOR',
    comision: '1,82',
    historica: '9,51',
    anual: '3,22',
    benchmarkAnual: 'N/A'
  }
}

const SUCCESS_MOCK_RESPONSE = {
  header: {
    responseCode: 'BC0000',
    errorType: '0',
    detail: null
  },
  payload: {
    fechaConsulta: MOCK_DATA.date,
    alternativas: [MOCK_DATA.profit],
  }
}

beforeEach(() => {
  jest.clearAllMocks()
  axios.get.mockResolvedValue({ data: SUCCESS_MOCK_RESPONSE })
})

test('fetches profitabilities', async () => {
  const result = await getProfitabilityTable()

  expect(result).toEqual({
    date: MOCK_DATA.date,
    profitabilities: [MOCK_DATA.profit]
  })

  expect(axios.get).toHaveBeenCalled()
  expect(axios.get).toHaveBeenCalledWith(
    expect.stringContaining(String(URL_SERVICES)),
    expect.objectContaining({
      headers: {
        'x-api-key': API_BACK,
        'Content-Type': 'application/json'
      }
    })
  )
})

test('throws if `responseCode` is not valid', () => {
  axios.get.mockResolvedValue({
    data: {
      header: {
        detail: 'foo',
        responseCode: 'bar'
      }
    }
  })
  return expect(getProfitabilityTable()).rejects.toEqual(
    expect.objectContaining({
      message: 'foo',
      code: 'bar'
    })
  )
})

test('throws if request fails', () => {
  const error = new Error('foo')
  axios.get.mockRejectedValue(error)
  return expect(getProfitabilityTable()).rejects.toThrow(error)
})
