import lightThemeCompany from '../themes/company'
import darkTheme from '../themes/dark'
import darkThemeInvestment from '../themes/investment-dark'
import lightThemeInvestment from '../themes/investment-light'
import lightTheme from '../themes/light'
import { selectTheme } from './select-theme'

describe('Test for selectTheme util', () => {
  test('should return light theme colors when params are undefined', () => {
    const theme = selectTheme()
    expect(theme).toEqual(lightTheme)
  })
  test('should return light theme colors of company', () => {
    const theme = selectTheme('', {}, 2)
    expect(theme).toEqual(lightThemeCompany)
  })
  test('should return dark theme colors', () => {
    const theme = selectTheme('', { darkMode: true }, 1)
    expect(theme).toEqual(darkTheme)
  })
  test('should return dark theme colors of company', () => {
    const theme = selectTheme('', { darkMode: true }, 2)
    expect(theme).toEqual(darkTheme)
  })
  test('should return dark theme colors of inversion', () => {
    const theme = selectTheme('Inversión', { darkMode: true }, 1)
    expect(theme).toEqual(darkThemeInvestment)
  })
  test('should return light theme colors of inversion', () => {
    const theme = selectTheme('Inversión', { darkMode: false }, 1)
    expect(theme).toEqual(lightThemeInvestment)
  })
})
