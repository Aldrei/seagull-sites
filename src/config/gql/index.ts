import { isServer } from '@/utils'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
} from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { useMemo } from 'react'

/**
 * This solution was found in https://medium.com/@zhamdi/server-side-rendering-ssr-using-apollo-and-next-js-ac0b2e3ea461
 */

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const typeDefs = gql`
  extend type Query {
    draftComplaints: [Complaint]
  }
`

let apolloClient: ApolloClient<NormalizedCacheObject>

function createIsomorphLink() {
  const { HttpLink } = require('@apollo/client/link/http')
  return new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    // credentials: 'same-origin',
  })
}

function createApolloClient() {
  let defaultOptions

  if (typeof window === 'undefined') {
    //We don't want any cache to be stored server side
    defaultOptions = {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  } else {
    //We immediately show results, but check in the background if any changes occured, and eventually update the view
    defaultOptions = {
      query: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    }
  }
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    typeDefs,
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: "cache-and-network",
    //     errorPolicy: "none",
    //   },
    //   query: {
    //     fetchPolicy: "network-only",
    //     errorPolicy: "all",
    //   },
    // },
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServer()) return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
