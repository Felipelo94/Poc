import { animateScroll as scroll } from 'react-scroll'

function clickWithScrollCenter(element, gap = 0, timeout = 200) {
  if (element) {
    setTimeout(() => {
      const positionAactive = element.offsetTop - gap
      scroll.scrollTo(positionAactive)
    }, timeout)
  }
}

export { clickWithScrollCenter }
