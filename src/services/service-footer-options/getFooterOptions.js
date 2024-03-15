import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'

const getFooterOptions = async () => {
  const requestURL = `${URL_SERVICES}footer-options`
  return fetch(requestURL, {
    method: 'GET',
    headers: {
      'x-api-key': API_BACK
    }
  })
}

export default getFooterOptions
