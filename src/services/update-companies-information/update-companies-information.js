import { API_BACK, URL_SERVICES } from '../../utils/paramApplication'
import { UPDATE_COMPANIES_INFORMATION_COMMAND } from '../../const/commands'
import axios from 'axios'

const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_BACK
  }
}

const getBodyFromData = data => {
  const {
    name,
    lastname,
    documentType: typeId,
    documentNumber: identification,
    phone: cel,
    email,
    companyPosition: cargoEnLaEmpresa,
    companyName,
    nit,
    companyPhone,
    humanManagementName,
    humanManagementEmail,
    leaderName,
    leaderEmail,
    agentName,
    agentEmail,
    habeasData,
    companyInfo: authDataShare,
    adAuth: dataPolicy,
    thirdAuth: dataShare,
    user,
    recaptchaValue: gRecaptchaResponse
  } = data

  return {
    comando: {
      nombre: UPDATE_COMPANIES_INFORMATION_COMMAND,
      payload: {
        person: {
          typeId,
          identification,
          name: `${name} ${lastname}`,
          email,
          cel,
          cargoEnLaEmpresa
        },
        company: {
          name: companyName,
          identification: nit,
          tel: companyPhone
        },
        dirRRHH: {
          name: humanManagementName,
          email: humanManagementEmail
        },
        liderNomina: {
          name: leaderName,
          email: leaderEmail
        },
        legalRepresentative: {
          name: agentName,
          email: agentEmail
        },
        dataPolicy,
        dataShare,
        habeasData,
        authDataShare,
        hostUser: {
          host: user?.host || 'Anónimo',
          state: 1
        },
        gRecaptchaResponse
      }
    }
  }
}

export const updateCompaniesInformation = async data => {
  const body = getBodyFromData(data)
  const url = `${URL_SERVICES}commands`
  return axios.post(url, body, config)
}
