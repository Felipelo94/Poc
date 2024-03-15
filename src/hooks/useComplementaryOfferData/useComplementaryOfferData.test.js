import { renderHook } from '@testing-library/react-hooks'
import useComplementaryOfferData from './useComplementaryOfferData'
import {
  MARKETPLACE_MOCK_DATA,
  MARKETPLACE_MOCK_DATA_WITHOUT_SALESFORCE
} from '../../const/dictionary/marketplace-const'

describe('useComplementaryOfferData', () => {
  test('should return the correct information', () => {
    const { result } = renderHook(() =>
      useComplementaryOfferData(MARKETPLACE_MOCK_DATA, '2nGwVr1Dk6KSO14BrRR3lC')
    )
    expect(result.current.showFilters).toBeTruthy()
    expect(result.current.showSalesforceForm).toBeTruthy()
    expect(result.current.portfolioData).toBeDefined()
    expect(result.current.general).toBeNull()
    expect(result.current.filterTabsInformation).toStrictEqual([
      { name: 'Educación', quantity: 1 },
      { name: 'Electrónica & Tecnología', quantity: 1 }
    ])
  })

  test('should return the correct information when filters and form are disabled', () => {
    const { result } = renderHook(() =>
      useComplementaryOfferData(
        MARKETPLACE_MOCK_DATA_WITHOUT_SALESFORCE,
        '2nGwVr1Dk6KSO14BrRR3lC'
      )
    )
    expect(result.current.showFilters).toBeFalsy()
    expect(result.current.showSalesforceForm).toBeFalsy()
  })
})
