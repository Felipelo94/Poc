import { sendGaPush } from './classGtmUtil'

export function onClickToInterna(url, category, action, label) {
  if (category) {
    sendGaPush(category, action, label)
  }
}

export function getPathClean() {
  const url = typeof window !== 'undefined' ? window.location.pathname : ''
  return url.split('/contenidos').length > 1 ? url.split('/contenidos')[1] : url
}

export function getCurrentHost() {
  const isBrowser = typeof window !== 'undefined'
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX
  if (isBrowser) {
    return (
      window.location.protocol +
      '//' +
      window.location.host +
      (prefix === '/' ? '' : prefix)
    )
  }
}

export function getCurrentPathPrefix(path) {
  if (
    path === '/' ||
    path === '' ||
    path.includes('contenido') ||
    path.includes('canales')
  ) {
    return ''
  } else {
    return 'internas'
  }
}
