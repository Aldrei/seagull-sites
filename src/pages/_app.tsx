import GlobalsStyle from '@/styles/globalStyle'

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import { CustomerProvider } from '@/hooks/useCustomer'
import { ThemeProvider } from '@/hooks/useTheme'

type AppOwnProps = { example: any }

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  const getClient = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()

    return repo
  }

  const repos = await getClient()

  return { ...ctx, example: repos }
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <CustomerProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalsStyle />
    </CustomerProvider>
  )
}
