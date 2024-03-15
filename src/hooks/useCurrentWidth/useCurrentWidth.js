import { useState, useEffect } from 'react'
import { RESIZE_EVENT } from '../../const/events'

const useCurrentWidth = () => {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : null
  const [screenWidth, setScreenWidth] = useState(initialWidth)

  const updateWidthScreen = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener(RESIZE_EVENT, updateWidthScreen)
    return () => {
      window.removeEventListener(RESIZE_EVENT, updateWidthScreen)
    }
  }, [])

  return screenWidth
}

export default useCurrentWidth
