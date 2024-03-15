import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import { mapPayloadToQueryParams } from '../service-utils'

const getQuickAccess = payload =>
  new Promise((resolve, reject) => {
    const payloadTemp = { ...payload }
    let requestURL = `${URL_SERVICES}shortcuts`
    const queryParams = mapPayloadToQueryParams(payloadTemp)
    if (queryParams) requestURL += `?${queryParams}`
    fetch(requestURL, {
      method: 'GET',
      headers: {
        'x-api-key': API_BACK
      }
    })
      .then(response => {
        resolve(response.json())
      })
      .catch(error => {
        reject(new Error({ error }))
      })
  })

export default getQuickAccess
