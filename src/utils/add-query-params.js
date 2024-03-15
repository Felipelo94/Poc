export const addQueryParamsToUrl = (url, params) => {
  const urlWithParams = new URL(url)
  Object.entries(params).forEach(([name, value]) => {
    urlWithParams.searchParams.set(name, value)
  })
  return urlWithParams.toString()
}
