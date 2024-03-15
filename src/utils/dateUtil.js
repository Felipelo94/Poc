function dayBeetwenDates(date1, date2) {
  const ONE_DAY = 1000 * 60 * 60 * 24
  const difference_ms = Math.abs(date1 - date2)
  return Math.round(difference_ms / ONE_DAY)
}

function currentDay() {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!
  const yyyy = today.getFullYear()

  return `${dd}/${mm}/${yyyy}`
}

/**
 * Substracts the specified number of days from the given date.
 * It doesn't mutates the given date.
 *
 * @param {Date} current
 * @param {Number} numberOfDays
 */
function substractDays(current, numberOfDays) {
  const substracted = new Date(current)
  substracted.setDate(current.getDate() - numberOfDays)
  return substracted
}

export { dayBeetwenDates, currentDay, substractDays }
