import React from 'react'
import { render } from '@testing-library/react'
import MarketplacePortfolio from './marketplace-portfolio'
import { mapParagraphtoParrafo } from '../../../utils/map-paragraph-to-parrafo'
import { MARKETPLACE_MOCK_DATA } from '../../../const/dictionary/marketplace-const'

describe('<MarketplacePortfolio />', () => {
  it('Should renders correctly without props', () => {
    const component = render(<MarketplacePortfolio />)
    expect(component).toMatchSnapshot()
  })

  it('Should renders correctly with props', () => {
    const data =
      MARKETPLACE_MOCK_DATA.allContentfulOfertaComplementaria.edges[0].node

    const linksOfInterest = data.contenido.cuerpocontenido?.json
    const linksOfInterestContent = data.contenido.cuerpocontenido?.json.content.slice()

    const [mainContent] = mapParagraphtoParrafo(
      linksOfInterestContent,
      linksOfInterest
    )

    const component = render(
      <MarketplacePortfolio portfolioData={mainContent} />
    )
    component.getByText('Conoce nuestro portafolio de productos y servicios')
  })
})
