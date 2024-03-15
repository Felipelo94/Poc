import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PortfolioFilter from './portfolio-filter'
import { MARKETPLACE_MOCK_DATA } from '../../../const/dictionary/marketplace-const'

const portfolioData = [
  MARKETPLACE_MOCK_DATA.allContentfulOfertaComplementaria.edges[0].node
    .contenido.cuerpocontenido.json
]

const marketplaceContent = {
  showFilters: true,
  portfolioData,
  filterTabsInformation: [
    {
      name: 'Educación',
      quantity: 1
    },
    {
      name: 'Electrónica & Tecnología',
      quantity: 1
    }
  ]
}

describe('<PortfolioFilter/>', () => {
  test('Should show title correctly', () => {
    render(<PortfolioFilter content={marketplaceContent} />)
    const title = screen.getByText(/Categorías/i)
    expect(title).toBeInTheDocument()
  })

  test('Should show subtitle correctly', () => {
    render(<PortfolioFilter content={marketplaceContent} />)
    const title = screen.getByText(/Filtrar por/i)
    expect(title).toBeInTheDocument()
  })

  test('Should show clean filter option correctly', () => {
    render(<PortfolioFilter content={marketplaceContent} />)
    const title = screen.getByText(/Limpiar filtro/i)
    expect(title).toBeInTheDocument()
  })

  test('Should show nothing', () => {
    const content = { showFilters: false }
    const { container } = render(<PortfolioFilter content={content} />)
    expect(container).toBeEmpty()
  })

  test('Should show 2 filter options and clean filter option', () => {
    render(<PortfolioFilter content={marketplaceContent} />)
    const buttons = screen.getAllByRole(/button/i)
    expect(buttons).toHaveLength(3)
  })

  test('Should filter when option is clicked', () => {
    const mockedFn = jest.fn()
    render(
      <PortfolioFilter
        content={marketplaceContent}
        setFilteredData={mockedFn}
      />
    )
    const button = screen.getByRole(/button/i, { name: 'Educación 1' })
    expect(mockedFn).toHaveBeenCalledTimes(1)
    expect(mockedFn).toHaveBeenLastCalledWith({ main: portfolioData })
    fireEvent.click(button)
    expect(mockedFn).toHaveBeenCalledTimes(2)
    expect(mockedFn).not.toHaveBeenLastCalledWith({ main: portfolioData })
  })

  test('Should return original data when clean filter option is clicked', () => {
    const mockedFn = jest.fn()
    render(
      <PortfolioFilter
        content={marketplaceContent}
        setFilteredData={mockedFn}
      />
    )
    const button = screen.getByRole(/button/i, { name: 'Limpiar filtro' })
    fireEvent.click(button)
    expect(mockedFn).toHaveBeenLastCalledWith({ main: portfolioData })
  })
})
