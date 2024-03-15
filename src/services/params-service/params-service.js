import { addQueryParamsToUrl } from '../../utils/add-query-params'
import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import axios from 'axios'

const config = {
  headers: {
    'content-type': 'application/json',
    'x-api-key': API_BACK
  }
}

const getDocumentTypes = async () => {
  const urlWithParams = addQueryParamsToUrl(`${URL_SERVICES}params`, {
    param: 'Tipo de documento'
  })
  const response = await axios.get(urlWithParams, config)
  return response.data.map(item => ({
    value: item.code,
    name: item.desciption
  }))
}

const ParamsService = {
  getDocumentTypes
}

export default ParamsService
