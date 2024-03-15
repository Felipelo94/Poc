export const SUBCATEGORIES_PENSION_ID_CONTENTFUL = {
  '7lDDi92WQvINHDoyppiGG1': 'pension-invalidez',
  nCqE4RiPTxgo0ayMwnilO: 'pension-vejez',
  eP6WF0PzwcNtIU09rfa2g: 'sobrevivencia',
  '1BCikKVbP8AH0vdkZJMzNF': 'pensionado',
  default: 'pension-vejez'
}

export const getSubcategoryPensionFromBiteOne = (infoBite = {}) => {
  const infoBiteTemp = infoBite?.subcategoria ?? []
  if (infoBiteTemp && infoBiteTemp.length > 0) {
    const subCategoryIdContentfulTemp =
      infoBiteTemp[0]?.contentful_id ?? 'default'
    return SUBCATEGORIES_PENSION_ID_CONTENTFUL[subCategoryIdContentfulTemp]
  }
  return SUBCATEGORIES_PENSION_ID_CONTENTFUL['default']
}
