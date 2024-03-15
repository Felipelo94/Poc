export const mapParagraphtoParrafo = (
  parrafos,
  dataDefualt,
  typeParagraph = 'heading'
) => {
  const parrafosSplice = parrafos
  const totalParrafos = parrafos
    .map((paragraph, index) =>
      paragraph.nodeType.indexOf(typeParagraph) >= 0 && index > 0 ? index : null
    )
    .filter(item => item !== null)
  let lastIndex = 0
  const result = totalParrafos.map(item => {
    const arrayRestul = parrafosSplice.splice(0, item - lastIndex)
    lastIndex = item
    return {
      ...dataDefualt,
      content: arrayRestul
    }
  })
  result.push({ ...dataDefualt, content: parrafosSplice })
  return result
}
