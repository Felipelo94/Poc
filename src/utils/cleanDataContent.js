export const cleanDataContent = (data, filter) => {
  const concatData = data?.allContentfulActualidadDeInversiones.edges.concat(
    data?.allContentfulBeneficio.edges,
    data?.allContentfulCampana.edges,
    data?.allContentfulContenidoEducativo.edges,
    data?.allContentfulCorporativoYAccionistas.edges,
    data?.allContentfulLeyesYDecretos.edges,
    data?.allContentfulNovedad.edges,
    data?.allContentfulOfertaComplementaria.edges,
    data?.allContentfulOfertaDiferencial.edges,
    data?.allContentfulProducto.edges
  )
  for (const data of concatData) {
    if (data.node?.contenido) {
      if (data.node?.lineaDeProducto) {
        Array.isArray(data.node.contenido)
          ? data.node.contenido.map(
              element => (element.lineadenegocio = data.node.lineaDeProducto)
            )
          : (data.node.contenido.lineadenegocio = data.node.lineaDeProducto)
      } else {
        Array.isArray(data.node.contenido)
          ? data.node.contenido.map(
              element => (element.lineadenegocio = data.node.lineadenegocio)
            )
          : (data.node.contenido.lineadenegocio = data.node.lineadenegocio)
      }
    }
  }

  const cleanData = concatData.flatMap(elemento => {
    if (!elemento.node.contenido) {
      return {
        contenido: {
          ...elemento.node,
          lineadenegocio: elemento.node?.lineaDeProducto
            ? elemento.node?.lineaDeProducto
            : elemento.node?.lineadenegocio
        }
      }
    } else if (Array.isArray(elemento.node.contenido)) {
      return elemento.node.contenido.map(element => ({ contenido: element }))
    } else {
      return {
        contenido: elemento.node.contenido
      }
    }
  })

  const typeData = cleanData.filter(elemento =>
    elemento.contenido?.tipoDeCliente?.some(type => type?.nombre === filter)
  )

  const sortData = typeData.sort(
    (a, b) => new Date(b.contenido.updatedAt) - new Date(a.contenido.updatedAt)
  )

  return sortData
}
