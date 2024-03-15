import {
  URL_PORTFOLIO_UNIT_VALUE,
  API_BACK_PORTFOLIOS
} from '../../utils/paramApplication'
import axios from 'axios'

const getPortfolioUnitValue = id =>
  new Promise((resolve, reject) => {
    axios
      .get(URL_PORTFOLIO_UNIT_VALUE + id, {
        headers: {
          'x-api-key': API_BACK_PORTFOLIOS
        }
      })
      .then(res => {
        resolve(res.data)
      })
  })

export default getPortfolioUnitValue
