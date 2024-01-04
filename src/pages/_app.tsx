import GlobalsStyle from '@/styles/globalStyle'

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import { CustomerProvider } from '@/hooks/useCustomer'
import { ThemeProvider } from '@/hooks/useTheme'

type AppOwnProps = { filter?: any }

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx }
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps,
  filter,
}: AppProps & AppOwnProps) {
  return (
    <CustomerProvider>
      <ThemeProvider>
        <Component filter={filter} {...pageProps} />
      </ThemeProvider>
      <GlobalsStyle />
    </CustomerProvider>
  )
}
