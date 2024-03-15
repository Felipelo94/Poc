export function filterItems(dataFilter, categoryFilter, subCategory, type) {
  if (!subCategory) {
    return dataFilter.filter(function(item) {
      if (item.category && item.type) {
        return (
          item.category.filter(
            catego => categoryFilter.indexOf(catego.contentful_id) >= 0
          ).length > 0 &&
          item.type.filter(
            typeClient => type?.indexOf(typeClient.contentful_id) >= 0
          ).length > 0
        )
      }
      return null
    })
  } else {
    return dataFilter.filter(function(item) {
      if (item.category && item.categoriaCliente && item.type) {
        return (
          item.category.filter(
            catego => categoryFilter.indexOf(catego.contentful_id) >= 0
          ).length > 0 &&
          item.categoriaCliente.filter(
            subcat => subCategory.indexOf(subcat.contentful_id) >= 0
          ).length > 0 &&
          item.type.filter(
            typeClient => type?.indexOf(typeClient.contentful_id) >= 0
          ).length > 0
        )
      }
      return null
    })
  }
}
