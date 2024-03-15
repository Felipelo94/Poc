import axios from 'axios'
import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'

const SUCCESS_RESPONSE_CODE = 'BC0000'

export const getProfitabilityTable = async () => {
  const userIpAddress = '127.0.0.1'
  const url = `${URL_SERVICES}consulta-tabla-rentabilidades/${userIpAddress}`
  const { data } = await axios.get(url, {
    headers: {
      'x-api-key': API_BACK,
      'Content-Type': 'application/json'
    }
  })

  if (data.header.responseCode !== SUCCESS_RESPONSE_CODE) {
    const error = new Error(data.header.detail)
    error.code = data.header.responseCode
    throw error
  }

  return {
    date: data.payload.fechaConsulta,
    profitabilities: data.payload.alternativas,
  }
}
