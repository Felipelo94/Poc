import { API_BACK } from '../../utils/paramApplication'

const postApiPreHome = (data, url, callback, alert) =>
  new Promise((resolve, _) => {
    let headers = { 'Content-Type': 'application/json' }
    if (API_BACK !== '') {
      headers['x-api-key'] = API_BACK
    }

    fetch(url, {
      method: 'POST',
      body: data,
      headers: headers
    })
      .then(response => {
        resolve(response.json())
        if (alert !== null) {
          if (response.status === 200 || response.status === 202) {
            callback(true)
            alert({ message: 'Comentario enviado', type: 'success' })
          } else {
            callback(false)
            alert({ message: 'Mensaje no enviado', type: 'error' })
          }
        } else if (callback !== null) {
          callback()
        }
      })
      .catch(() => {
        if (alert !== null) {
          callback(false)
          alert({ message: 'Mensaje no enviado', type: 'error' })
        }
      })
  })

export { postApiPreHome }
