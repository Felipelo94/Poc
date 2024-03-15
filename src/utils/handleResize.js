import { useCurrentWidth as getSizeScreen } from 'react-socks'

const isBrowser = typeof window !== 'undefined'

function handleResize() {
  let result = false
  if (isBrowser) {
    result = window.innerWidth <= 1024
  }
  return result
}

function getSizeScreenClass() {
  return isBrowser ? window.innerWidth : 9999
}

export { handleResize, getSizeScreen, getSizeScreenClass }
