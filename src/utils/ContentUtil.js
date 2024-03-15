export default class ContentUtil {
  generateAltImage(nameImage) {
    const fileName =
      nameImage !== null && nameImage
        ? nameImage
            .split('.')
            .slice(0, -1)
            .join('.')
        : ''
    return fileName
      .split('-')
      .join(' ')
      .split('_')
      .join('')
  }

  findContenteByTittle(array, key) {
    let resultValue = null
    if (
      array !== null &&
      array !== undefined &&
      key !== null &&
      key !== undefined
    ) {
      if (array.length > 0) {
        resultValue = array.find(element => element.node.nombreTexto === key)
      }
    }
    return resultValue
  }

  getValueContent(array, key) {
    const item = this.findContenteByTittle(array, key)
    if (item !== null && item !== undefined) {
      return item.node.valorTexto.internal.content
    }
    return ''
  }

  removeSpecialCharLines(descrip) {
    let dataArray = descrip.split('__')
    let resultArray = []
    dataArray.splice(0, 1)
    for (let i = 0; i < dataArray.length; i = i + 2) {
      let line = {}
      line.titulo = dataArray[i].substring(0, dataArray[i].length - 1)
      line.numeroContacto =
        i === dataArray.length - 2
          ? dataArray[i + 1]
          : dataArray[i + 1].substring(0, dataArray[i + 1].length - 1)
      resultArray.push(line)
    }
    return resultArray
  }

  getParagraphByTitle(paragraphs, allTitle, newData) {
    paragraphs.map((paragraph, index) => {
      paragraph.content.map(({ content, nodeType }) => {
        return content.map(value => {
          if (value.value && value.value.trim().length > 0) {
            if (nodeType.indexOf('heading-2') >= 0) {
              allTitle.push({ titulo: value.value })
              const parrafosSplice = paragraphs[index].content.slice()
              const totalParrafos = paragraphs[index].content
                .map((paragraphH, i) =>
                  paragraphH.nodeType.indexOf('heading') >= 0 && i > 0
                    ? i
                    : null
                )
                .filter(item => item !== null)
              let lastIndex = 0
              const result = totalParrafos.map(item => {
                const arrayRestul = parrafosSplice.splice(0, item - lastIndex)
                lastIndex = item
                return {
                  content: arrayRestul
                }
              })
              result.push({ content: parrafosSplice })
              newData.push({
                content: result,
                titulo: value.value,
                index: index
              })
              return result
            }
          }
          return null
        })
      })
    })
  }

  getParagraphByJson(parrafos, dataDefualt) {
    const parrafosSplice = parrafos
    const totalParrafos = parrafos
      .map((paragraph, index) =>
        paragraph.nodeType.indexOf('heading') >= 0 && index > 0 ? index : null
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
}
