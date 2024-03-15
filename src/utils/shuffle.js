const isBrowser = typeof window !== 'undefined'
const shuffle = a => {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    let numberRandom
    if (isBrowser) {
      const crypto = window.crypto || window.msCrypto
      let array = new Uint32Array(1)
      numberRandom = crypto.getRandomValues(array)[0] * Math.pow(2, -32)
    }
    j = Math.floor(numberRandom * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

export { shuffle }
