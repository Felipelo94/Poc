import React from 'react'
import { useSelector } from 'react-redux'
import { substractDays } from '../../../../utils/dateUtil'

/**
 * Component to augment `HeaderInternal` with `profitability` reducer.
 * It is mainly used to replace the placeholder of the date of profitability.
 */
export const RentabilidadHeaderInternal = ({ children, now = new Date() }) => {
  const date = useSelector(state => state.profitability.result.date)
  const child = React.Children.only(children)

  if (!child.props.subtitle) {
    return children
  }

  return React.cloneElement(child, {
    subtitle: child.props.subtitle.replace(
      '[VariableFecha]',
      formatDate(date || substractDays(now, 1))
    )
  })
}

/**
 * Returns a DD/MM/YYYY string representation of the given date.
 *
 * @param {Date} date
 */
const formatDate = date =>
  new Date(date)
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/')
