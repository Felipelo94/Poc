import React from 'react'
import Alternative from '../components/molecules/alternative/alternative'
import ComponentPresent from '../components/molecules/component-present/component-present'
import ContentWidget from '../components/molecules/content-widget/content-widget'
import MarketFigures from '../components/molecules/market-figures/market-figures'
import SaysExpert from '../components/molecules/says-expert/says-expert'

export const getCategory = itemnode => {
  const nodeElement = itemnode['node'] ? itemnode.node : itemnode
  if (itemnode['node']) {
    const categories =
      nodeElement.categoriaCliente &&
      nodeElement.categoriaCliente.length > 0 &&
      nodeElement.categoriaCliente[0].lineadenegocio
    return categories.length > 0 ? categories[0].nombre : 'Cesantias'
  } else {
    if (nodeElement.category && nodeElement.category.length > 0) {
      return nodeElement.category[0].nombre
    } else {
      return nodeElement.category
    }
  }
}

export const proxyPresent = (
  id,
  titleInversionData,
  indexActivo,
  widthScreen
) => {
  let component
  if (id === '4iyIbURlwNfeTUwnjgHBdI' || id === '6tRmkahPbmybyKwcqPkg4n') {
    component = (
      <Alternative
        data={titleInversionData[indexActivo].alternatives}
        className="alternative-component"
      />
    )
  } else {
    component = (
      <ContentWidget
        style={{ marginTop: widthScreen < 1024 ? 16 : 100 }}
        className="content-widget-container"
        isDark={true}
        graph={
          'https://vaxtpmde69.proteccion.com.co/wps/portal/proteccion/web/inversion/afiliacion-alternativas-cerradas#/'
        }
      />
    )
  }
  return component
}

export const setArrayProduct = dataNovedad => {
  let arrayNewNovedad = []
  let categoriaNovedad
  categoriaNovedad = dataNovedad.node.lineadenegocio
  if (dataNovedad.node.contenido) {
    arrayNewNovedad.push({
      category: categoriaNovedad,
      textoCallToActionBite: dataNovedad.node.contenido.textoCallToActionBite,
      descripcioncorta: dataNovedad.node.contenido.descripcioncorta,
      categoriaCliente: dataNovedad.node.contenido.categoriaCliente,
      textoIntroductorio: dataNovedad.node.contenido.textoIntroductorio,
      tituloCorto: dataNovedad.node.contenido.tituloCorto,
      updatedAt: dataNovedad.node.contenido.updatedAt,
      urlSeo:
        dataNovedad.node.contenido.urlSeo !== null &&
        dataNovedad.node.contenido.urlSeo.toLowerCase(),
      tipoBite: 'novedad',
      type: dataNovedad.node.contenido.tipoDeCliente,
      imagenpequena: dataNovedad.node.contenido.imagenpequena,
      tema: dataNovedad.node.contenido.Tema && dataNovedad.node.contenido.Tema,
      nombreImagen: dataNovedad.node.contenido.imagenpequena?.file.fileName
    })
  }
  return arrayNewNovedad[0]
}

export const proxyPresentActualidad = (
  id,
  titleInversionData,
  indexActivo,
  user,
  indexDBUserName,
  filterDataNovedad,
  indexBitestateSecond,
  accessibility
) => {
  let component
  if (id === '6kLqtSng0Jz7Wt8LegB9mB') {
    component = (
      <ComponentPresent
        accessibility={accessibility}
        imagen={titleInversionData[indexActivo].imagen}
        data={titleInversionData[indexActivo].informes}
        line={'Inversión'}
        userData={user}
        type={indexDBUserName.type}
        dataNovedad={filterDataNovedad}
        indexBitestateSecond={indexBitestateSecond}
        tituloSeccionPodcast={
          titleInversionData[indexActivo].tituloSeccionPodcast
        }
        descripcionSeccionPodcast={
          titleInversionData[indexActivo].descripcionSeccionPodcast
        }
        podcasts={titleInversionData[indexActivo].podcast}
      />
    )
  } else if (id === '8GMSacJVozO0la62SSeix') {
    component = (
      <MarketFigures
        accessibility={accessibility}
        texto={titleInversionData[indexActivo].textoCierre}
        image={titleInversionData[indexActivo].imagen}
        figures={titleInversionData[indexActivo].cifras}
      />
    )
  } else if (id === '2iSc262lfCDuc5XCafkl7K') {
    component = (
      <SaysExpert
        accessibility={accessibility}
        contenido={titleInversionData[indexActivo].contenidoCorporativo}
        imagen={titleInversionData[indexActivo].imagen}
        titleContent={titleInversionData[indexActivo]?.nombre}
        userData={user.userValue.nameuser}
      />
    )
  }
  return component
}
