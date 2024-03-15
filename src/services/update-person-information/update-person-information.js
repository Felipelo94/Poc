import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import { UPDATE_PERSON_INFORMATION_COMMAND } from '../../const/commands'
import axios from 'axios'

const config = {
  headers: {
    'content-type': 'application/json',
    'x-api-key': API_BACK
  }
}

const getBodyFromData = data => {
  const {
    user,
    name,
    lastname,
    documentType: typeId,
    documentNumber: identification,
    phone: cel,
    email,
    habeasData,
    adAuth: dataPolicy,
    thirdAuth: dataShare,
    recaptchaValue: gRecaptchaResponse
  } = data

  return {
    comando: {
      nombre: UPDATE_PERSON_INFORMATION_COMMAND,
      payload: {
        name: `${name} ${lastname}`,
        typeId,
        identification,
        cel,
        email,
        dataPolicy,
        dataShare,
        habeasData,
        gRecaptchaResponse,
        hostUser: {
          host: user?.host || 'Anónimo',
          state: 1
        }
      }
    }
  }
}

export const updatePersonInformation = async data => {
  const body = getBodyFromData(data)
  const url = `${URL_SERVICES}commands`
  return axios.post(url, body, config)
}
