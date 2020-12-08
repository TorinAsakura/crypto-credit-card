import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default history => ({ dispatch, getState }) => {
  const httpLink = createHttpLink({
    uri: getState().config.apiUrl,
  })

  const link = ApolloLink.from([
    httpLink,
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link,
  })

  return next => (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState, client, history)
    } else {
      next(action)
    }
  }
}
