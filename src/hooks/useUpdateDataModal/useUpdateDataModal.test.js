import * as Gatsby from 'gatsby'
import {
  MOCKED_HOOK_MODAL_DATA,
  MOCKED_MODAL_DATA
} from '../../const/dictionary/update-data-modal'
import useUpdateDataModal from './useUpdateDataModal'

describe('useUpdateDataModal', () => {
  test('Should return the correct information', () => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
    useStaticQuery.mockImplementation(() => MOCKED_MODAL_DATA)

    const data = useUpdateDataModal(false)

    expect(data).toStrictEqual(MOCKED_HOOK_MODAL_DATA)
  })
})
