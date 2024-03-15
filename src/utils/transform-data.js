const lineadenegocioCesantias = [
  {
    nombre: 'Cesantías'
  }
]

const lineadenegocioPensionesObligatorias = [
  {
    nombre: 'Pensiones Obligatorias'
  }
]

const lineadenegocioInversion = [
  {
    nombre: 'Inversión'
  }
]

const subcategoryDefault = [
  {
    contentful_id: '5fP153BoelxfRsusePVnBU',
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Cesante'
  },
  {
    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Empleado'
  },
  {
    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Independiente'
  },
  {
    contentful_id: '7lDDi92WQvINHDoyppiGG1',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por invalidez'
  },
  {
    contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por sobrevivencia'
  },
  {
    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Pensión por vejez'
  },
  {
    contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Soy pensionado'
  },
  {
    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
    lineadenegocio: lineadenegocioInversion,
    descripcion: 'Conozco de Inversiones'
  },
  {
    contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
    lineadenegocio: lineadenegocioInversion,
    descripcion: 'Estoy Aprendiendo'
  }
]

export const transformData = (data, contentUtil) => {
  let arrayNewEducation = []
  let categoryEducativo
  if (data) {
    if (data.allContentfulContenidoEducativo) {
      data.allContentfulContenidoEducativo.edges.map(itemsEducativos => {
        categoryEducativo = itemsEducativos.node.lineaDeProducto
        if (itemsEducativos.node.contenido) {
          arrayNewEducation.push({
            textoCallToActionBite:
              itemsEducativos.node.contenido.textoCallToActionBite,
            categoriaCliente: itemsEducativos.node.contenido.categoriaCliente
              ? itemsEducativos.node.contenido.categoriaCliente
              : subcategoryDefault,
            descripcioncorta: itemsEducativos.node.contenido.descripcioncorta,
            textoIntroductorio:
              itemsEducativos.node.contenido.textoIntroductorio,
            tituloCorto: itemsEducativos.node.contenido.tituloCorto,
            updatedAt: itemsEducativos.node.contenido.updatedAt,
            category: [categoryEducativo],
            urlSeo:
              itemsEducativos.node.contenido.urlSeo !== null
                ? itemsEducativos.node.contenido.urlSeo.toLowerCase()
                : null,
            tipoBite: 'educativo',
            type: itemsEducativos.node.contenido.tipoDeCliente,
            cliente: itemsEducativos.node.contenido.tipoDeCliente,
            imagenpequena: itemsEducativos.node.contenido.imagenpequena,
            tema: itemsEducativos.node.contenido.Tema
              ? itemsEducativos.node.contenido.Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsEducativos.node.contenido.imagenpequena === null
                ? null
                : itemsEducativos.node.contenido.imagenpequena.file
                ? itemsEducativos.node.contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsEducativos.node.contenido.contentful_id,
            generoEdad: itemsEducativos.node.contenido.edadygenero
          })
        }
        return null
      })
    }
  }

  let arrayNewTalento = []
  if (data) {
    if (data.allContentfulOfertaDiferencial) {
      data.allContentfulOfertaDiferencial.edges.map(itemsTalento => {
        if (itemsTalento.node.contenido[0]) {
          arrayNewTalento.push({
            textoCallToActionBite:
              itemsTalento.node.contenido[0].textoCallToActionBite,
            categoriaCliente: itemsTalento.node.contenido[0].categoriaCliente
              ? itemsTalento.node.contenido[0].categoriaCliente
              : subcategoryDefault,
            descripcioncorta: itemsTalento.node.contenido[0].descripcioncorta,
            textoIntroductorio:
              itemsTalento.node.contenido[0].textoIntroductorio,
            updatedAt: itemsTalento.node.contenido[0].updatedAt,
            tituloCorto: itemsTalento.node.contenido[0].tituloCorto,
            urlSeo:
              itemsTalento.node.contenido[0].urlSeo !== null
                ? itemsTalento.node.contenido[0].urlSeo.toLowerCase()
                : null,
            category: itemsTalento.node.lineaDeProducto,
            type: itemsTalento.node.contenido[0].tipoDeCliente,
            tipoBite: 'Talento',
            imagenpequena: itemsTalento.node.contenido[0].imagenpequena,
            cliente: itemsTalento.node.contenido[0].tipoDeCliente,
            tema: itemsTalento.node.contenido[0].Tema
              ? itemsTalento.node.contenido[0].Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsTalento.node.contenido[0].imagenpequena === null
                ? null
                : itemsTalento.node.contenido[0].imagenpequena.file
                ? itemsTalento.node.contenido[0].imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsTalento.node.contenido[0].contentful_id,
            generoEdad: itemsTalento.node.contenido[0].edadygenero
          })
        }
        return null
      })
    }
  }

  let arrayNewMarketplace = []
  if (data) {
    if (data.allContentfulOfertaComplementaria) {
      data.allContentfulOfertaComplementaria.edges.map(itemsMarketplace => {
        if (itemsMarketplace.node.contenido) {
          arrayNewMarketplace.push({
            textoCallToActionBite:
              itemsMarketplace.node.contenido.textoCallToActionBite,
            categoriaCliente: itemsMarketplace.node.contenido.categoriaCliente
              ? itemsMarketplace.node.contenido.categoriaCliente
              : subcategoryDefault,
            descripcioncorta: itemsMarketplace.node.contenido.descripcioncorta,
            textoIntroductorio:
              itemsMarketplace.node.contenido.textoIntroductorio,
            updatedAt: itemsMarketplace.node.contenido.updatedAt,
            tituloCorto: itemsMarketplace.node.contenido.tituloCorto,
            urlSeo:
              itemsMarketplace.node.contenido.urlSeo !== null
                ? itemsMarketplace.node.contenido.urlSeo.toLowerCase()
                : null,
            category: itemsMarketplace.node.lineaDeProducto,
            type: itemsMarketplace.node.contenido.tipoDeCliente,
            tipoBite: 'OfertaComplementaria',
            imagenpequena: itemsMarketplace.node.contenido.imagenpequena,
            cliente: itemsMarketplace.node.contenido.tipoDeCliente,
            tema: itemsMarketplace.node.contenido.Tema
              ? itemsMarketplace.node.contenido.Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsMarketplace.node.contenido.imagenpequena === null
                ? null
                : itemsMarketplace.node.contenido.imagenpequena.file
                ? itemsMarketplace.node.contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsMarketplace.node.contenido.contentful_id,
            generoEdad: itemsMarketplace.node.contenido.edadygenero
          })
        }
        return null
      })
    }
  }

  let arrayNewCorporativo = []
  if (data) {
    if (data.allContentfulCorporativoYAccionistas) {
      const arrayNoEmpty = data.allContentfulCorporativoYAccionistas.edges.filter(
        edge => edge.node.contenido
      )
      arrayNoEmpty.forEach(edge => {
        edge.node.contenido.forEach(contenido =>
          arrayNewCorporativo.push({
            textoCallToActionBite: contenido.textoCallToActionBite,
            categoriaCliente: contenido.categoriaCliente
              ? contenido.categoriaCliente
              : subcategoryDefault,
            descripcioncorta: contenido.descripcioncorta,
            textoIntroductorio: contenido.textoIntroductorio,
            updatedAt: contenido.updatedAt,
            tituloCorto: contenido.tituloCorto,
            urlSeo:
              contenido.urlSeo !== null ? contenido.urlSeo.toLowerCase() : null,
            category: edge.node.lineaDeProducto,
            type: contenido.tipoDeCliente,
            tipoBite: 'CorporativoYAccionistas',
            imagenpequena: contenido.imagenpequena,
            cliente: contenido.tipoDeCliente,
            tema: contenido.Tema ? contenido.Tema : [],
            nombreImagen: contentUtil.generateAltImage(
              contenido.imagenpequena === null
                ? null
                : contenido.imagenpequena.file
                ? contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: contenido.contentful_id,
            generoEdad: contenido.edadygenero
          })
        )
      })
    }
  }

  let arrayNewLeyesDecreto = []
  if (data) {
    if (data.allContentfulLeyesYDecretos) {
      const arrayNoEmpty = data.allContentfulLeyesYDecretos.edges.filter(
        edge => edge.node.contenido
      )
      arrayNoEmpty.forEach(edge => {
        edge.node.contenido.forEach(contenido =>
          arrayNewLeyesDecreto.push({
            textoCallToActionBite: contenido.textoCallToActionBite,
            categoriaCliente: contenido.categoriaCliente
              ? contenido.categoriaCliente
              : subcategoryDefault,
            descripcioncorta: contenido.descripcioncorta,
            textoIntroductorio: contenido.textoIntroductorio,
            updatedAt: contenido.updatedAt,
            tituloCorto: contenido.tituloCorto,
            urlSeo:
              contenido.urlSeo !== null ? contenido.urlSeo.toLowerCase() : null,
            category: edge.node.lineaDeProducto,
            type: contenido.tipoDeCliente,
            tipoBite: 'LeyesYDecretos',
            imagenpequena: contenido.imagenpequena,
            cliente: contenido.tipoDeCliente,
            tema: contenido.Tema ? contenido.Tema : [],
            nombreImagen: contentUtil.generateAltImage(
              contenido.imagenpequena === null
                ? null
                : contenido.imagenpequena.file
                ? contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: contenido.contentful_id,
            generoEdad: contenido.edadygenero
          })
        )
      })
    }
  }

  let arrayNewProduct = []
  let categoryProduct
  let idCategoryProduct
  if (data) {
    if (data.allContentfulProducto) {
      data.allContentfulProducto.edges.map(items => {
        categoryProduct = items.node.titulo
        idCategoryProduct = items.node.contentful_id
        if (items.node.contenido) {
          items.node.contenido.map(x => {
            arrayNewProduct.push({
              urlSeo: x.urlSeo !== null ? x.urlSeo.toLowerCase() : null,
              textoIntroductorio: x.textoIntroductorio,
              descripcioncorta: x.descripcioncorta,
              updatedAt: x.updatedAt,
              categoriaCliente: x.categoriaCliente
                ? x.categoriaCliente
                : subcategoryDefault,
              tituloCorto: x.tituloCorto,
              category: [
                { nombre: categoryProduct, contentful_id: idCategoryProduct }
              ],
              textoCallToActionBite: x.textoCallToActionBite,
              imagenpequena: x.imagenpequena,
              tema: x.Tema ? x.Tema : [],
              type: x.tipoDeCliente,
              cliente: x.tipoDeCliente,
              nombreImagen: contentUtil.generateAltImage(
                x.imagenpequena === null
                  ? null
                  : x.imagenpequena.file
                  ? x.imagenpequena.file.fileName
                  : null
              ),
              tipoBite: 'producto',
              contentful_id: x.contentful_id,
              generoEdad: x.edadygenero
            })
            return null
          })
        }
        return null
      })
    }
  }

  let arrayNewActualidad = []
  if (data) {
    if (data.allContentfulActualidadDeInversiones) {
      data.allContentfulActualidadDeInversiones.edges.map(items => {
        arrayNewActualidad.push({
          imagenpequena: items.node.imagen,
          nombreImagen:
            items.node.imagen === null
              ? null
              : items.node.imagen.file
              ? items.node.imagen.file.fileName
              : null,
          urlSeo:
            items.node.urlSeo !== null ? items.node.urlSeo.toLowerCase() : null,
          textoCallToActionBite:
            items.node.contenidoCorporativo.TextoCallToActionBite
              .TextoCallToActionBite,
          tituloCorto: items.node.contenidoCorporativo.TituloCortoBite,
          textoIntroductorio:
            items.node.contenidoCorporativo.TextoIntroductorioBite,
          descripcioncorta: items.node.descripcion.descripcion,
          updatedAt: items.node.updatedAt,
          categoriaCliente: items.node.categoriaCliente
            ? items.node.categoriaCliente
            : subcategoryDefault,
          category: items.node.lineaDeProducto,
          type: items.node.tipoDeCliente,
          tema: items.node.Tema ? items.node.Tema : [],
          cliente: items.node.tipoDeCliente,
          tipoBite: 'producto',
          relevancia: items.node.contenidoCorporativo.Relevancia,
          contentful_id: items.node.contenidoCorporativo.contentful_id
        })
        return null
      })
    }
  }

  let arrayNewBeneficio = []
  let categoriaBeneficio
  if (data) {
    if (data.allContentfulBeneficio) {
      data.allContentfulBeneficio.edges.map(itemsBeneficio => {
        categoriaBeneficio = itemsBeneficio.node.lineadenegocio
        if (itemsBeneficio.node.contenido) {
          arrayNewBeneficio.push({
            category: categoriaBeneficio,
            textoCallToActionBite:
              itemsBeneficio.node.contenido.textoCallToActionBite,
            descripcioncorta: itemsBeneficio.node.contenido.descripcioncorta,
            categoriaCliente: itemsBeneficio.node.contenido.categoriaCliente
              ? itemsBeneficio.node.contenido.categoriaCliente
              : subcategoryDefault,
            textoIntroductorio:
              itemsBeneficio.node.contenido.textoIntroductorio,
            tituloCorto: itemsBeneficio.node.contenido.tituloCorto,
            updatedAt: itemsBeneficio.node.contenido.updatedAt,
            urlSeo:
              itemsBeneficio.node.contenido.urlSeo !== null
                ? itemsBeneficio.node.contenido.urlSeo.toLowerCase()
                : null,
            tipoBite: 'beneficio',
            type: itemsBeneficio.node.contenido.tipoDeCliente,
            cliente: itemsBeneficio.node.contenido.tipoDeCliente,
            imagenpequena: itemsBeneficio.node.contenido.imagenpequena,
            tema: itemsBeneficio.node.contenido.Tema
              ? itemsBeneficio.node.contenido.Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsBeneficio.node.contenido.imagenpequena === null
                ? null
                : itemsBeneficio.node.contenido.imagenpequena.file
                ? itemsBeneficio.node.contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsBeneficio.node.contenido.contentful_id,
            generoEdad: itemsBeneficio.node.contenido.edadygenero
          })
        }
        return null
      })
    }
  }

  let arrayNewNovedad = []
  let categoriaNovedad
  if (data) {
    if (data.allContentfulNovedad) {
      data.allContentfulNovedad.edges.map(itemsNovedad => {
        categoriaNovedad = itemsNovedad.node.lineadenegocio
        if (itemsNovedad.node.contenido) {
          arrayNewNovedad.push({
            category: categoriaNovedad,
            textoCallToActionBite:
              itemsNovedad.node.contenido.textoCallToActionBite,
            descripcioncorta: itemsNovedad.node.contenido.descripcioncorta,
            categoriaCliente: itemsNovedad.node.contenido.categoriaCliente
              ? itemsNovedad.node.contenido.categoriaCliente
              : subcategoryDefault,
            textoIntroductorio: itemsNovedad.node.contenido.textoIntroductorio,
            tituloCorto: itemsNovedad.node.contenido.tituloCorto,
            updatedAt: itemsNovedad.node.contenido.updatedAt,
            urlSeo:
              itemsNovedad.node.contenido.urlSeo !== null
                ? itemsNovedad.node.contenido.urlSeo
                : null,
            tipoBite: 'novedad',
            type: itemsNovedad.node.contenido.tipoDeCliente,
            cliente: itemsNovedad.node.contenido.tipoDeCliente,
            imagenpequena: itemsNovedad.node.contenido.imagenpequena,
            tema: itemsNovedad.node.contenido.Tema
              ? itemsNovedad.node.contenido.Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsNovedad.node.contenido.imagenpequena === null
                ? null
                : itemsNovedad.node.contenido.imagenpequena.file
                ? itemsNovedad.node.contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsNovedad.node.contenido.contentful_id,
            generoEdad: itemsNovedad.node.contenido.edadygenero
          })
        }
        return null
      })
    }
  }

  let arrayNewCampaña = []
  let categoriaCampaña
  if (data) {
    if (data.allContentfulCampana) {
      data.allContentfulCampana.edges.map(itemsCampana => {
        categoriaCampaña = itemsCampana.node.lineadenegocio
        if (itemsCampana.node.contenido) {
          arrayNewCampaña.push({
            category: categoriaCampaña,
            textoCallToActionBite:
              itemsCampana.node.contenido.textoCallToActionBite,
            descripcioncorta: itemsCampana.node.contenido.descripcioncorta,
            categoriaCliente: itemsCampana.node.contenido.categoriaCliente
              ? itemsCampana.node.contenido.categoriaCliente
              : subcategoryDefault,
            textoIntroductorio: itemsCampana.node.contenido.textoIntroductorio,
            tituloCorto: itemsCampana.node.contenido.tituloCorto,
            updatedAt: itemsCampana.node.contenido.updatedAt,
            urlSeo:
              itemsCampana.node.contenido.urlSeo !== null
                ? itemsCampana.node.contenido.urlSeo.toLowerCase()
                : null,
            tipoBite: 'campaña',
            type: itemsCampana.node.contenido.tipoDeCliente,
            cliente: itemsCampana.node.contenido.tipoDeCliente,
            imagenpequena: itemsCampana.node.contenido.imagenpequena,
            tema: itemsCampana.node.contenido.Tema
              ? itemsCampana.node.contenido.Tema
              : [],
            nombreImagen: contentUtil.generateAltImage(
              itemsCampana.node.contenido.imagenpequena === null
                ? null
                : itemsCampana.node.contenido.imagenpequena.file
                ? itemsCampana.node.contenido.imagenpequena.file.fileName
                : null
            ),
            contentful_id: itemsCampana.node.contenido.contentful_id,
            generoEdad: itemsCampana.node.contenido.edadygenero
          })
        }
        return null
      })
    }
  }

  return arrayNewProduct.concat(
    arrayNewEducation,
    arrayNewBeneficio,
    arrayNewNovedad,
    arrayNewCampaña,
    arrayNewActualidad,
    arrayNewTalento,
    arrayNewMarketplace,
    arrayNewLeyesDecreto,
    arrayNewCorporativo
  )
}
