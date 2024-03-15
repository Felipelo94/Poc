function filterCategorias(category, data, subcategoria, type) {
  return data.filter(function(item) {
    if (item.cliente.length > 1 && !type) {
      if (subcategoria) {
        return (
          item.category.filter(
            catego => category.indexOf(catego.contentful_id) >= 0
          ).length > 0 &&
          item.subcategoria.filter(
            sub => subcategoria.indexOf(sub.contentful_id) >= 0
          ).length > 0
        )
      } else {
        return (
          item.category.filter(
            catego => category.indexOf(catego.contentful_id) >= 0
          ).length > 0
        )
      }
    } else if (subcategoria && category && type) {
      return (
        item.category.filter(
          catego => category.indexOf(catego.contentful_id) >= 0
        ).length > 0 &&
        item.subcategoria.filter(
          sub => subcategoria.indexOf(sub.contentful_id) >= 0
        ).length > 0 &&
        item.cliente.filter(cli => type.indexOf(cli.contentful_id) >= 0)
          .length > 0
      )
    } else if (category && type) {
      return (
        item.category.filter(
          catego => category.indexOf(catego.contentful_id) >= 0
        ).length > 0 &&
        item.cliente.filter(cli => type.indexOf(cli.contentful_id) >= 0)
          .length > 0
      )
    }
  })
}

module.exports.filterCategorias = filterCategorias
