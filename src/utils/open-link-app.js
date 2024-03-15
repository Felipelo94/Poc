import { getCurrentHost } from './redirectUtil'

export const getLinkApp = (linksApp, isAndroid, isIOS, urlApp) => {
  let linkApp = ''
  if (linksApp[2]) {
    linkApp = getCurrentHost() + urlApp
  }
  if (isAndroid && linksApp[1]) {
    linkApp = linksApp[1].node.enlace
  }
  if (isIOS && linksApp[0]) {
    linkApp = linksApp[0].node.enlace
  }
  return linkApp
}

const openLinkApp = (linksApp, isAndroid, isIOS, urlApp) => {
  if (window && window.location) {
    window.location = getLinkApp(linksApp, isAndroid, isIOS, urlApp)
  }
}

export default openLinkApp
