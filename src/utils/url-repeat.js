import { getIsUrlSEOIncludesPathProfiling } from './general-utils'

const getIdDiv = titleChanged => {
  return titleChanged
    ? titleChanged
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    : ''
}

const setPathUrlProfiling = (e, pageContext) => {
  if (e.node.contenido) {
    if (e.node.contenido.length > 0) {
      e.node.contenido.map(p => {
        if (!getIsUrlSEOIncludesPathProfiling(p.urlSeo)) {
          p.urlSeo = p.urlSeo
            ? `${
                pageContext.type
                  ? pageContext.type.length
                    ? 'all'
                    : pageContext.type === 1
                    ? 'persona'
                    : 'empresa'
                  : null
              }/${getIdDiv(
                pageContext.category ? pageContext.category.toLowerCase() : null
              )}/${p.urlSeo.toLowerCase()}`
            : p.linkCallToActionBite
        }
      })
    } else {
      if (!getIsUrlSEOIncludesPathProfiling(e.node.contenido.urlSeo)) {
        e.node.contenido.urlSeo =
          e.node.contenido.urlSeo &&
          `${
            pageContext.type
              ? pageContext.type.length
                ? 'all'
                : pageContext.type === 1
                ? 'persona'
                : 'empresa'
              : null
          }/${getIdDiv(
            pageContext.category ? pageContext.category.toLowerCase() : null
          )}/${e.node.contenido.urlSeo?.toLowerCase()}`

        e.node.contenido.linkCallToActionBite !== null
          ? (e.node.contenido.urlSeo = e.node.contenido.linkCallToActionBite)
          : (e.node.contenido.urlSeo = e.node.contenido.urlSeo)
      }
    }
  } else if (e.node) {
    if (e.node.urlSeo) {
      if (
        e.node.urlSeo.urlSeo &&
        !getIsUrlSEOIncludesPathProfiling(e.node.urlSeo.urlSeo)
      ) {
        e.node.urlSeo.urlSeo = `${
          pageContext.type
            ? pageContext.type.length
              ? 'all'
              : pageContext.type === 1
              ? 'persona'
              : 'empresa'
            : null
        }/${getIdDiv(
          pageContext.category ? pageContext.category.toLowerCase() : null
        )}/${e.node.urlSeo.urlSeo.toLowerCase()}`
      } else if (
        typeof e.node.urlSeo === 'string' &&
        !getIsUrlSEOIncludesPathProfiling(e.node.urlSeo)
      ) {
        e.node.urlSeo = e.node.urlSeo
          ? `${
              pageContext.type
                ? pageContext.type.length
                  ? 'all'
                  : pageContext.type === 1
                  ? 'persona'
                  : 'empresa'
                : null
            }/${getIdDiv(
              pageContext.category ? pageContext.category.toLowerCase() : null
            )}/${e.node.urlSeo.toLowerCase()}`
          : e.node.linkCallToActionBite
      }
    }
  }
}

export const fuctionUrlRepeat = (PreHomeQuery, pageContext) => {
  let arrayData = []
  let dataComplete2 = []
  let dataContentfulNoIncludeURLProfiling = []
  let urlRepeats = []

  if (PreHomeQuery) {
    dataComplete2 = PreHomeQuery.allContentfulBeneficio?.edges.concat(
      PreHomeQuery.allContentfulCampana?.edges,
      PreHomeQuery.allContentfulContenidoEducativo?.edges,
      PreHomeQuery.allContentfulNovedad?.edges,
      PreHomeQuery.allContentfulProducto?.edges,
      PreHomeQuery.allContentfulInformes?.edges,
      PreHomeQuery.allContentfulActualidadDeInversiones?.edges,
      PreHomeQuery.allContentfulAlternativaCerrada?.edges
    )
    dataContentfulNoIncludeURLProfiling = PreHomeQuery.allContentfulOfertaDiferencial?.edges.concat(
      PreHomeQuery.allContentfulLeyesYDecretos?.edges,
      PreHomeQuery.allContentfulCorporativoYAccionistas?.edges
    )
  }

  const dataCompleta = dataComplete2.filter(x => x !== undefined)
  const dataNoIncludeURLProfiling = dataContentfulNoIncludeURLProfiling.filter(
    x => x !== undefined
  )
  dataCompleta.map(e => {
    if (e?.node.contenido) {
      if (e.node.contenido.length > 0) {
        e.node.contenido.forEach(p => {
          arrayData.push(p)
        })
      } else {
        arrayData.push(e.node.contenido)
      }
    } else if (e?.node) {
      arrayData.push(e.node)
    }
    return arrayData
  })
  dataNoIncludeURLProfiling.map(e => {
    if (e?.node.contenido) {
      if (e.node.contenido.length > 0) {
        e.node.contenido.forEach(p => {
          arrayData.push(p)
        })
      } else {
        arrayData.push(e.node.contenido)
      }
    } else if (e?.node) {
      arrayData.push(e.node)
    }
    return arrayData
  })

  dataCompleta.map(e => {
    if (pageContext) {
      if (
        !e.node.categoriaProducto ||
        e.node.categoriaProducto === 'Soluciones' ||
        e.node.categoriaProducto === 'Complementario'
      ) {
        setPathUrlProfiling(e, pageContext)
      }
      return arrayData
    }
  })

  const urlRepeat = data => {
    data.map(e => {
      let filterBite
      if (e.node.contenido) {
        if (e.node.contenido.length > 0) {
          e.node.contenido.map(c => {
            return (filterBite = arrayData.filter(
              fil => fil.urlSeo === c.urlSeo
            ))
          })
        } else {
          filterBite = arrayData.filter(
            fil => fil.urlSeo === e.node.contenido.urlSeo
          )
        }

        if (filterBite.length >= 2) {
          urlRepeats.push(filterBite[0].urlSeo)
        }

        if (e.node.contenido) {
          if (urlRepeats.includes(e.node.contenido.urlSeo)) {
            e.node.contenido.urlSeo = e.node.contenido.urlSeo
              ? e.node.contenido.urlSeo.concat(
                  '-',
                  e.node.contenido.contentful_id.toLowerCase()
                )
              : e.node.contenido.urlSeo
          }
          if (e.node.contenido.length > 1) {
            e.node.contenido.map(p => {
              if (urlRepeats.includes(p.urlSeo)) {
                p.urlSeo = p.urlSeo.concat('-', p.contentful_id.toLowerCase())
              }
            })
          }
        }
      }
    })
  }

  urlRepeat(dataCompleta)
}
