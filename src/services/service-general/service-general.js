import { API_BACK } from '../../utils/paramApplication'

const get = (queryParams, url, enableApiKey) =>
  new Promise((resolve, reject) => {
    let header = {}
    header['Content-Type'] = 'application/json'
    if (enableApiKey && API_BACK !== '') {
      header['x-api-key'] = API_BACK
    }

    fetch(addQueryParams(url, queryParams), {
      method: 'GET',
      headers: header
    })
      .then(response => {
        resolve(response.json())
      })
      .catch(() => reject())
  })

function addQueryParams(urlInitial, params) {
  let urlFinal = urlInitial
  if (params !== null) {
    if (params.length > 0) {
      let charConcat
      for (let i = 0; i < params.length; i++) {
        charConcat = i === 0 ? '?' : '&'
        if (params[i].name && params[i].value) {
          urlFinal = `${urlFinal}${charConcat}${params[i].name}=${params[i].value}`
        }
      }
    }
  }
  return urlFinal
}
export { get }
