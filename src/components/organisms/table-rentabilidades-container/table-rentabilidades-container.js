import React from 'react'
import TableRentabilidades from '../../atoms/table-rentabilidades/table-rentabilidades'

import { RentabilidadesErrorCard } from './rentabilidades-error-card/rentabilidades-error-card'
import { RentabilidadesLoadingCard } from './rentabilidades-loading-card/rentabilidades-loading-card'
import { useTableRentabilidadesContainer } from './use-table-rentabilidades-container'

const TableRentabilidadesContainer = () => {
  const {
    error,
    isLoading,
    result: { profitabilities }
  } = useTableRentabilidadesContainer()

  if (error) {
    return (
      <div data-testid="TableRentabilidadesContainer-error">
        <RentabilidadesErrorCard error={error} />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div data-testid="TableRentabilidadesContainer-loading">
        <RentabilidadesLoadingCard />
      </div>
    )
  }

  return <TableRentabilidades data={profitabilities} />
}

export default TableRentabilidadesContainer
