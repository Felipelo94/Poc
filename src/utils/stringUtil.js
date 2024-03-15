export function onlyNumbers(valueText) {
  const arrayvalue = (valueText + '').split('')
  let valueClean = ''
  for (let i = 0; i < arrayvalue.length; i++) {
    if (!isNaN(arrayvalue[i]) && arrayvalue[i] !== ' ') {
      valueClean = valueClean + arrayvalue[i]
    }
  }
  return valueClean
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

export function getFormat(text, formatInput) {
  if (formatInput) {
    if (formatInput === 'currency') {
      return formatter.format(text).replace(/,/g, '.')
    } else {
      return text !== ''
        ? text + ' ' + formatInput + (text == '1' ? '' : 's')
        : text
    }
  } else {
    return text
  }
}
