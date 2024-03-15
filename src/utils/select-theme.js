import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'
import darkThemeInvestment from '../themes/investment-dark'
import lightThemeInvestment from '../themes/investment-light'
import lightThemeCompany from '../themes/company'

export function selectTheme(
  category = '',
  accessibility = {},
  typeCustomer = ''
) {
  if (typeCustomer === 2) {
    if (accessibility.darkMode === true) {
      return darkTheme
    } else {
      return lightThemeCompany
    }
  } else if (category === 'Inversión') {
    if (accessibility.darkMode === true) {
      return darkThemeInvestment
    } else {
      return lightThemeInvestment
    }
  } else {
    if (accessibility.darkMode === true) {
      return darkTheme
    } else {
      return lightTheme
    }
  }
}
