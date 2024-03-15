import { useCallback, useEffect, useState } from 'react'
import companyMenuOptions from '../../src/const/dictionary/multilevel-menu-options-company.json'
import personMenuOptions from '../../src/const/dictionary/multilevel-menu-options-person.json'
import getMenuOptions from '../services/service-menu-options/getMenuOptions'
import { HOURS_TO_UPDATE_MENU_OPTIONS_CACHE } from '../utils/paramApplication'

const DEFAULT_HOURS_TO_UPDATE_MENU_OPTIONS_CACHE = 2

const filterMenuOptions = (
  menuOptions,
  typeUser,
  categoryUser,
  subcategoryUserTemp
) => {
  return menuOptions.filter(
    item =>
      item.typeCustomer === typeUser &&
      item.category === categoryUser &&
      item.subcategory === subcategoryUserTemp
  )
}

const getSubcategoryPerson = categoryUser => {
  if (
    categoryUser === 'Inversión' ||
    categoryUser === 'Cesantías' ||
    categoryUser === 'Ahorro'
  ) {
    return 'ALL'
  }
  return ''
}

const getSubcategoryCompany = categoryUser => {
  if (
    categoryUser === 'Pensión' ||
    categoryUser === 'Cesantías' ||
    categoryUser === 'Ahorro'
  ) {
    return 'ALL'
  }
  return ''
}

const getSubcategoryForService = (typeUser, category) => {
  return typeUser === 1
    ? getSubcategoryPerson(category)
    : getSubcategoryCompany(category)
}

const addHoursToDate = dateInMillisec => {
  const hoursToUpdateCache =
    HOURS_TO_UPDATE_MENU_OPTIONS_CACHE ||
    DEFAULT_HOURS_TO_UPDATE_MENU_OPTIONS_CACHE
  return dateInMillisec + parseInt(hoursToUpdateCache) * 60 * 60 * 1000
}

const isGreaterDateThan = (firstDateMillisecs, lastDateMillisecs) => {
  const firstDate = new Date(firstDateMillisecs)
  const lastDate = new Date(lastDateMillisecs)
  if (firstDate.getTime() > lastDate.getTime()) {
    return true
  }
  return false
}

const getMillisecondsDataLocalStorage = (
  typeUser,
  categoryUser,
  subcategoryUser
) => {
  // const isBrowser = typeof window !== "undefined"
  const milliseconds = localStorage.getItem(
    `${typeUser}.${categoryUser}.${subcategoryUser}.milliseconds`
  )
  // isBrowser
  //   ?
  //   : 0
  if (milliseconds) return parseInt(milliseconds)
  return 0
}

const getMenuOptionsDataLocalStorage = (
  typeUser,
  categoryUser,
  subcategoryUser
) => {
  // const isBrowser = typeof window !== "undefined"
  const menuOptions = localStorage.getItem(
    `${typeUser}.${categoryUser}.${subcategoryUser}.menuoptions`
  )
  // isBrowser
  //   ?
  //   : []
  if (menuOptions?.length) {
    try {
      return JSON.parse(menuOptions)
    } catch (error) {
      return []
    }
  }
  return []
}

const resolveMenuOptionsFromCache = (
  typeUser,
  categoryUser,
  subcategoryUser
) => {
  const millisecs = getMillisecondsDataLocalStorage(
    typeUser,
    categoryUser,
    subcategoryUser
  )
  const menuOptions = getMenuOptionsDataLocalStorage(
    typeUser,
    categoryUser,
    subcategoryUser
  )
  const isValidMenuOptions = millisecs
    ? isGreaterDateThan(addHoursToDate(millisecs), Date.now())
    : false
  if (isValidMenuOptions && menuOptions?.length) {
    return menuOptions
  }
  return []
}

const setMenuOptionsLocalStorage = (
  menuOptions,
  typeUser,
  categoryUser,
  subcategoryUser
) => {
  // const isBrowser = typeof window !== "undefined"
  // if (isBrowser) {
  localStorage.setItem(
    `${typeUser}.${categoryUser}.${subcategoryUser}.menuoptions`,
    JSON.stringify(menuOptions)
  )
  localStorage.setItem(
    `${typeUser}.${categoryUser}.${subcategoryUser}.milliseconds`,
    Date.now()
  )
  // }
}

const useMenuOptions = (typeUser, categoryUser, subcategoryUser) => {
  const [menuOptions, setMenuOptions] = useState([])

  const handleSetMenuOptions = useCallback(
    subcategoryUserTemp => {
      setMenuOptions(
        filterMenuOptions(
          typeUser === 1 ? personMenuOptions : companyMenuOptions,
          typeUser,
          categoryUser,
          subcategoryUserTemp
        )
      )
    },
    [typeUser, categoryUser]
  )

  useEffect(() => {
    const subcategoryUserTemp =
      getSubcategoryForService(typeUser, categoryUser) || subcategoryUser
    if (typeUser && categoryUser && subcategoryUserTemp) {
      const menuOptionsLocalStorage = resolveMenuOptionsFromCache(
        typeUser,
        categoryUser,
        subcategoryUserTemp
      )
      if (menuOptionsLocalStorage?.length) {
        setMenuOptions(menuOptionsLocalStorage)
        return
      }
      handleSetMenuOptions(subcategoryUserTemp)
      getMenuOptions({
        type: typeUser,
        category: categoryUser,
        subcategory: subcategoryUserTemp
      })
        .then(response => {
          if (
            !response ||
            (response?.status ?? 200) !== 200 ||
            response.length === 0
          ) {
            handleSetMenuOptions(subcategoryUserTemp)
            return
          }
          setMenuOptions(response)
          setMenuOptionsLocalStorage(
            response,
            typeUser,
            categoryUser,
            subcategoryUserTemp
          )
        })
        .catch(error => {
          handleSetMenuOptions(subcategoryUserTemp)
        })
    }
  }, [typeUser, categoryUser, subcategoryUser, handleSetMenuOptions])

  return { menuOptions }
}

export default useMenuOptions
