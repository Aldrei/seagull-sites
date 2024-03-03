import GlobalsStyle from '@/styles/globalStyle'

import { ApolloProvider } from '@apollo/client'
import client from '../config/gql'

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import { CustomerProvider } from '@/hooks/useCustomer'
import { ThemeProvider } from '@/hooks/useTheme'

type AppOwnProps = { filter?: any; apollo?: any }

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx }
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, filter }: AppProps & AppOwnProps) {
  return (
    <ApolloProvider client={client}>
      <CustomerProvider>
        <ThemeProvider>
          <Component filter={filter} {...pageProps} />
        </ThemeProvider>
        <GlobalsStyle />
      </CustomerProvider>
    </ApolloProvider>
  )
}

export default MyApp
