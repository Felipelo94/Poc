import useCurrentWidth from '../hooks/useCurrentWidth/useCurrentWidth'
import React from 'react'

const Breakpoint = ({ from, to, children }) => {
  const screenWidth = useCurrentWidth()

  if (from && to)
    return screenWidth >= from && screenWidth <= to && <>{children}</>

  if (from) return screenWidth >= from && <>{children}</>

  if (to) return screenWidth <= to && <>{children}</>

  return <>{children}</>
}

export default Breakpoint
