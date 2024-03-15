import { useEffect, useState } from 'react'
import { getDataIb } from '../services/service-indexDB/service-indexDB'

const useGetUserInfoIndexDBState = () => {
  const [userProfiling, setUserProfiling] = useState({
    type: '',
    category: '',
    subcategory: ''
  })

  useEffect(() => {
    getDataIb().then(respondedb => {
      if (respondedb.length > 0) {
        const userInfoIDB = respondedb[respondedb.length - 1]
        if (
          userProfiling.type !== userInfoIDB.type ||
          userProfiling.category !== userInfoIDB.category ||
          userProfiling.subcategory !== userInfoIDB.subcategory
        ) {
          setUserProfiling(respondedb[respondedb.length - 1])
        }
      }
    })
  }, [userProfiling])

  return userProfiling
}

export default useGetUserInfoIndexDBState
