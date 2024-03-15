export function restrictPrehome(dataPrehome) {
  if (process.env.RESTRIGIR_PREHOME === 'true') {
    dataPrehome.allContentfulCategoriasContenidos.edges.map(node => {
      const item = node.node
      item.IsActivo =
        item.category === 'Cesantías' || item.category === 'Ahorro'
      node.node = item
      return node
    })
    dataPrehome.allContentfulCategoriasContenidosEmpresas.edges.map(node => {
      const item = node.node
      item.IsActivo =
        item.category === 'Cesantías' || item.category === 'Ahorro'
      node.node = item
      return node
    })
  }
}
