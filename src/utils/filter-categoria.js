export function filterCategoria(category, data, subcategoria, type) {
  return data.filter(function(item) {
    if (subcategoria && category && type) {
      return (
        item.node.category.filter(
          catego => category.indexOf(catego.contentful_id) >= 0
        ).length > 0 &&
        item.node.categoriaCliente.filter(
          sub => subcategoria.indexOf(sub.contentful_id) >= 0
        ).length > 0 &&
        item.node.tipoDeCliente.filter(
          cli => type.indexOf(cli.contentful_id) >= 0
        ).length > 0
      )
    } else if (category && type) {
      return (
        item.node.category.filter(
          catego => category.indexOf(catego.contentful_id) >= 0
        ).length > 0 &&
        item.node.tipoDeCliente.filter(
          cli => type.indexOf(cli.contentful_id) >= 0
        ).length > 0
      )
    }
  })
}

export default filterCategoria
