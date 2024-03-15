import { createClient } from 'contentful'
/*
import {
  REPOSITORY_CONTENTFUL_NAME,
  ACCESS_TOKEN,
  NEW_REPOSITORY_CONTENTFUL_NAME,
  NEW_ACCESS_TOKEN,
} from "../appParameters"
*/

let NEW_REPOSITORY_CONTENTFUL_NAME = process.env.CONTENTFUL_SPACE_ID
let NEW_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN


export async function getCMS(contentTypes, include = 1, contentIds = '') {
  const newClient = createClient({
    space: NEW_REPOSITORY_CONTENTFUL_NAME,
    environment: 'master',
    accessToken: NEW_ACCESS_TOKEN
  })

  const query = {
    'sys.contentType.sys.id[in]': contentTypes,
    include,
    limit: 1000
  }

  if (contentIds) {
    query['sys.id[in]'] = contentIds
  }

  return newClient.getEntries(query).then(entries => entries)
}
