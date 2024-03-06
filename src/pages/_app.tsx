import GlobalsStyle from '@/styles/globalStyle'

import { ApolloProvider } from '@apollo/client'

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import { useApollo } from '@/config/gql'
import { CustomerProvider } from '@/hooks/useCustomer'
import { ThemeProvider } from '@/hooks/useTheme'
import { appWithTranslation } from 'next-i18next'

import NextI18nextConfig from '@/next-i18next.config'

type AppOwnProps = { filter?: any; apollo?: any }

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx }
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, filter }: AppProps & AppOwnProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <CustomerProvider>
        <ThemeProvider>
          <Component filter={filter} {...pageProps} />
        </ThemeProvider>
        <GlobalsStyle />
      </CustomerProvider>
    </ApolloProvider>
  )
}

//i18n config https://github.com/isaachinman/next-i18next
export default appWithTranslation(MyApp, NextI18nextConfig)
// export default MyApp
