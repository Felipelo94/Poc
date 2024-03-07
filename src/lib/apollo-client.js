import { ApolloClient, InMemoryCache } from "@apollo/client/core";
const token = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/y3qdch79qxiw/environments/master",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
  },
});

export default client;
