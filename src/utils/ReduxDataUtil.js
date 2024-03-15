import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { URL_SERVICES } from '../utils/paramApplication'

export function sendUserDataRedux(
  getInfoDb,
  callback,
  getF,
  dispatch,
  callbackDispatch
) {
  getDataIb().then(respondedb => {
    if (respondedb.length === 0) {
      if (getInfoDb) {
        getInfoDb().then(responde => {
          if (responde.length > 0) {
            const indexDBUserNameReturn = responde[0]
            if (callback !== null) {
              callback(indexDBUserNameReturn)
            }

            getF([], `${URL_SERVICES}users/${responde[0].host}`, true)
              .then(result => {
                if (result.length > 0) {
                  dispatch(callbackDispatch(result[result.length - 1]))
                }
              })
              .catch(error => {})
          }
        })
      }
    } else {
      const indexDBUserNameReturn = respondedb[respondedb.length - 1]
      if (callback !== null) {
        callback(indexDBUserNameReturn)
      }
      dispatch(callbackDispatch(indexDBUserNameReturn))
    }
  })
}
