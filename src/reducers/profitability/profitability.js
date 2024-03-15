export const FETCH_PROFITABILITY_REQUEST = 'FETCH_PROFITABILITY/REQUEST'
export const FETCH_PROFITABILITY_SUCCESS = 'FETCH_PROFITABILITY/SUCCESS'
export const FETCH_PROFITABILITY_FAILTURE = 'FETCH_PROFITABILITY/FAILURE'

export const RequestStatus = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED'
}

const INITIAL_STATE = {
  status: RequestStatus.loading,
  result: {
    date: null,
    profitabilities: []
  }
}

const profitability = (state, action) => {
  switch (action.type) {
    case FETCH_PROFITABILITY_REQUEST:
      return { ...state, status: RequestStatus.loading }
    case FETCH_PROFITABILITY_SUCCESS:
      return {
        ...state,
        result: action.result,
        status: RequestStatus.success,
        error: null
      }
    case FETCH_PROFITABILITY_FAILTURE:
      return { ...state, error: action.error, status: RequestStatus.failed }
    default:
      return INITIAL_STATE
  }
}

export default profitability
