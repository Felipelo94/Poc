import { DEFAULT_COLORS_RANGE_TRACK } from '../const/dictionary/general-const'

export const getColorsRangeTrackDesktop = (
  categoryDefault = '',
  isDarkMode = false
) => {
  return categoryDefault
    ? categoryDefault === 'Inversión' && !isDarkMode
      ? ['#292730', '#B4BCCE']
      : isDarkMode
      ? ['#E3E829', '#7F839B']
      : DEFAULT_COLORS_RANGE_TRACK
    : isDarkMode
    ? ['#E3E829', '#7F839B']
    : DEFAULT_COLORS_RANGE_TRACK
}

export const getColorsRangeTrackMobile = (
  typeCustomer = 1,
  categoryDefault = ''
) => {
  return typeCustomer === 2
    ? ['#E3E829', '#B4BCCE']
    : categoryDefault === 'Inversión'
    ? ['#F5F548', '#B4BCCE']
    : ['#0033A0', '#B4BCCE']
}
