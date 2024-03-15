import { createClient } from 'contentful'

export const getFormImage = isPageForCompanies => {
  const assetId = isPageForCompanies
    ? '1eqtnbCHfFdVGcGA7pRgyM'
    : '2HVJ9G0LFhyf8ktDvMBOJp'

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIROMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  return client
    .getAsset(assetId)
    .then(asset => asset)
    .catch(console.error)
}
