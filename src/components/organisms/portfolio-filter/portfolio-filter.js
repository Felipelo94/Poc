import React, { useEffect, useState } from 'react'
import { ReactComponent as CleanFilterIcon } from '../../../assets/images/x-circle.svg'
import { EMBEDDED_ENTRY_BLOCK } from '../../../const/rich-text'
import './portfolio-filter.scss'

const PortfolioFilter = ({ content, setFilteredData = () => {} }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const getFilteredContent = item => ({
    ...item,
    content: item?.content?.filter(
      item =>
        item.nodeType !== EMBEDDED_ENTRY_BLOCK ||
        selectedOptions.includes(
          item?.data?.target?.fields?.tipoDePrivilegio?.['en-US']
        )
    )
  })

  const filter = () => {
    if (!selectedOptions.length) {
      setFilteredData({
        main: content.portfolioData,
        secondary: content.general
      })
    } else {
      const main = content.portfolioData?.map(getFilteredContent)
      const secondary = content.general?.map(getFilteredContent)
      setFilteredData({ main, secondary })
    }
  }

  const onClickOption = option => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option))
    } else {
      setSelectedOptions([option, ...selectedOptions])
    }
  }

  const cleanFilter = () => {
    setSelectedOptions([])
  }

  useEffect(() => {
    filter()
  }, [selectedOptions])

  return (
    content.showFilters && (
      <section className="portfolio-filter">
        <h4 className="portfolio-filter__title">Categorías</h4>
        <section className="portfolio-filter__main">
          <h5 className="portfolio-filter__subtitle">Filtrar por</h5>
          <div className="portfolio-filter__options">
            {content.filterTabsInformation?.map(({ name, quantity }) => (
              <button
                className={`portfolio-filter__option ${
                  selectedOptions.includes(name)
                    ? 'portfolio-filter__option--active'
                    : ''
                }`}
                onClick={() => onClickOption(name)}
              >
                <span className="portfolio-filter__option-name">{name}</span>
                <span className="portfolio-filter__option-quantity">
                  {quantity}
                </span>
              </button>
            ))}
          </div>
          <button
            className="portfolio-filter__clean-filter"
            onClick={cleanFilter}
          >
            Limpiar filtro
            <CleanFilterIcon />
          </button>
        </section>
      </section>
    )
  )
}

export default PortfolioFilter
