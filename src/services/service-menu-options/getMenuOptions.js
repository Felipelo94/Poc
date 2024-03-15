import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import { mapPayloadToQueryParams } from '../service-utils'

const getMenuOptions = payload =>
  new Promise((resolve, reject) => {
    const payloadTemp = { ...payload }
    let requestURL = `${URL_SERVICES}menu-options2`
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

export default getMenuOptions
