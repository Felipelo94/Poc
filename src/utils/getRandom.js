const isBrowser = typeof window !== 'undefined'
export function getRandom() {
  if (isBrowser) {
    const crypto = window.crypto || window.msCrypto
    let array = new Uint32Array(1)
    return crypto.getRandomValues(array)[0] * Math.pow(2, -32)
  }
}
