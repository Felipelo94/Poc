import ContentUtil from './ContentUtil'

const content = new ContentUtil()

const getPhoneNumbers = (dataContentful = {}) => {
  return content.removeSpecialCharLines(
    dataContentful?.allContentfulCanal?.edges?.[0]
      ? dataContentful?.allContentfulCanal?.edges?.[0]?.node?.descripcion
          ?.descripcion
      : ''
  )
}

export default getPhoneNumbers
