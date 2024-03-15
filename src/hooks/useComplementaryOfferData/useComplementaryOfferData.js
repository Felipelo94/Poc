import React, { useMemo } from 'react'
import { mapParagraphtoParrafo } from '../../utils/map-paragraph-to-parrafo'
import { FilterOptionsBuilder } from '../../utils/filter-options-builder/filter-options-builder'

const useComplementaryOfferData = (data, id) => {
  const createImage = image => ({
    imagen: image.file.url,
    nameImage: image.description,
    title: image.title
  })

  const transformData = () => {
    if (data) {
      const filteredData = data.allContentfulOfertaComplementaria.edges.find(
        e => e.node.contentful_id === id
      ).node

      const linksOfInterest = filteredData.contenido.cuerpocontenido?.json
      const linksOfInterestContent = filteredData.contenido.cuerpocontenido?.json.content.slice()

      const general = filteredData.contenido.cuerpocontenido2?.json
      const generalContent = filteredData.contenido.cuerpocontenido2?.json.content.slice()

      const mainContent = mapParagraphtoParrafo(
        linksOfInterestContent,
        linksOfInterest
      )

      const secondaryContent = general
        ? mapParagraphtoParrafo(generalContent, general)
        : null

      const filterOptionsBuilder = new FilterOptionsBuilder(mainContent)

      const filterTabsInformation = filterOptionsBuilder
        .addRichTextData(secondaryContent)
        .keepOnlyContentProp()
        .flatContentArrays()
        .keepOnlyEntryBlocks()
        .keepOnlyPrivilegeTypeProp()
        .setFilterTabsInformation()
        .getFilterOptions()

      return {
        title: filteredData.contenido.titulo,
        topBanner: {
          hasTitle: true,
          title: filteredData.contenido?.titulo,
          backgroundImage: filteredData.ImagenPrincipalEscritorio?.file.url,
          mobileBackgroundImage: filteredData.ImagenPrincipalMobile?.file.url,
          description: filteredData.contenido.descripcioncorta,
          callToActionText: filteredData.contenido.TextoCallToActionSuperior,
          callToActionLink: filteredData.contenido.LinkCallToActionSuperior,
          idPrefix: 'top'
        },
        bottomBanner: {
          hasTitle: false,
          backgroundImage: filteredData.ImagenSecundariaEscritorio?.file.url,
          mobileBackgroundImage: filteredData.ImagenSecundariaMobile?.file.url,
          description: filteredData.contenido.descripcioncalltoaction,
          callToActionText: filteredData.contenido.textoCallToAction,
          callToActionLink: filteredData.contenido.linkCallToAction,
          idPrefix: 'bottom'
        },
        showSalesforceForm: filteredData.Agendamiento.Agendamiento === 'Si',
        salesforceImage: filteredData.contenido.imagenes?.[0].file.url,
        salesforceImageDescription:
          filteredData.contenido.imagenes?.[0].description,
        showFilters: filteredData.filtros.filtros === 'Si',
        portfolioData: mainContent,
        general: secondaryContent,
        images: filteredData.contenido.imagenes?.map(createImage),
        filterTabsInformation
      }
    }
  }

  return useMemo(() => transformData(), [])
}

export default useComplementaryOfferData
