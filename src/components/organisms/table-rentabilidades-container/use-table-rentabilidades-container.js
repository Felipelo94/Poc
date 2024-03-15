import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_PROFITABILITY_REQUEST,
  FETCH_PROFITABILITY_SUCCESS,
  FETCH_PROFITABILITY_FAILTURE,
  RequestStatus
} from '../../../reducers/profitability/profitability'
import { getProfitabilityTable } from '../../../services/profitability-service/get-profitability-table'

export function useTableRentabilidadesContainer() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.profitability)
  const isLoading = state.status === RequestStatus.loading

  useEffect(() => {
    async function fetchProfitability() {
      dispatch({ type: FETCH_PROFITABILITY_REQUEST })
      const result = await getProfitabilityTable()
      dispatch({ type: FETCH_PROFITABILITY_SUCCESS, result })
    }

    if (isLoading) {
      fetchProfitability().catch(error => {
        dispatch({ type: FETCH_PROFITABILITY_FAILTURE, error })
      })
    }
  }, [isLoading])

  return {
    ...state,
    isLoading
  }
}
