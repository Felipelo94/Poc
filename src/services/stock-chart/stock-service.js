import {
  URL_PORTFOLIOS_LIST,
  API_BACK_PORTFOLIOS
} from '../../utils/paramApplication'
import axios from 'axios'

const getPortfolioList = payload =>
  new Promise((resolve, reject) => {
    axios
      .get(URL_PORTFOLIOS_LIST, {
        headers: {
          'x-api-key': API_BACK_PORTFOLIOS
        }
      })
      .then(res => {
        resolve(res.data)
      })
  })

export default getPortfolioList
