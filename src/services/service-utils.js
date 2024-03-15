export function mapPayloadToQueryParams(payload) {
  return payload
    ? Object.keys(payload)
        .map(k => `${k}=${encodeURIComponent(payload[k])}`)
        .join('&')
    : false
}
