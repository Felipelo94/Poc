import { DEFAULT_COLORS_RANGE_TRACK } from '../const/dictionary/general-const'
import {
  getColorsRangeTrackDesktop,
  getColorsRangeTrackMobile
} from './themes-utils'

describe('Test for getColorsRangeTrackMobile util', () => {
  test('should return default colors range when params are undefined', () => {
    const colorsRange = getColorsRangeTrackMobile()
    expect(colorsRange).toEqual(['#0033A0', '#B4BCCE'])
  })
  test('should return colors range for company customer', () => {
    const colorsRange = getColorsRangeTrackMobile(2)
    expect(colorsRange).toEqual(['#E3E829', '#B4BCCE'])
  })
  test('should return colors range for inversion category', () => {
    const colorsRange = getColorsRangeTrackMobile(1, 'Inversión')
    expect(colorsRange).toEqual(['#F5F548', '#B4BCCE'])
  })
})

describe('Test for getColorsRangeTrackDesktop util', () => {
  test('should return default colors range when params are undefined', () => {
    const colorsRange = getColorsRangeTrackDesktop()
    expect(colorsRange).toEqual(DEFAULT_COLORS_RANGE_TRACK)
  })
  test('should return colors range for inversion category', () => {
    const colorsRange = getColorsRangeTrackDesktop('Inversión')
    expect(colorsRange).toEqual(['#292730', '#B4BCCE'])
  })
  test('should return colors range when isDarkMode param is true', () => {
    const colorsRange = getColorsRangeTrackDesktop('Inversión', true)
    expect(colorsRange).toEqual(['#E3E829', '#7F839B'])
  })
})
