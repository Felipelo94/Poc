import { useEffect, useState } from 'react'

const useIsContentLoadedOnBrowser = () => {
  const [isContentLoadedOnBrowser, setIsContentLoadedOnBrowser] = useState(
    false
  )

  useEffect(() => {
    setIsContentLoadedOnBrowser(true)
  }, [])

  return isContentLoadedOnBrowser
}

export default useIsContentLoadedOnBrowser
