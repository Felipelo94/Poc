export const biteCaracter = (title, num, limit) => {
  return title
    ? title.length >= num
      ? title.replace(title, title.substring(0, num).concat('...'))
      : validateWords(title, limit)
    : null
}
export const validateWords = (title, limit) => {
  const words = title.split(' ')
  if (words.length > limit) {
    words.splice(limit)
    const finalText = words.join(' ')
    return finalText.concat('...')
  } else {
    return title
  }
}

export const validateCurrentLine = (line, lineValidate) => {
  return line
    ? lineValidate
      ? line.category === lineValidate
      : line.category === 'Inversión'
    : false
}
