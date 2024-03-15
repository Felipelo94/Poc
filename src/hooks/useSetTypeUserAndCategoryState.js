import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageContext } from '../actions/page-context/page-context'
import { getValidateUserCategory } from '../utils/general-utils'

const useSetTypeUserAndCategoryState = (typeUser = '', userCategory = '') => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeUser && userCategory) {
      dispatch(
        setPageContext({
          userCategory: getValidateUserCategory(userCategory),
          typeUser
        })
      )
    }
  }, [dispatch, typeUser, userCategory])
}

export default useSetTypeUserAndCategoryState
