import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/y3qdch79qxiw/environments/master",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer kJnowSU145qeU6n7NqQbuZaoZyEhmcnYQSnfh0WcV7A",
    "content-type": "application/json",
  },
});

export default client;
