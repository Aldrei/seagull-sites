import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { TTheme } from '@/styles/themes/default/index.d'
import { ThemeProvider } from 'styled-components'
import { templateTwo } from '@/styles/themes/default'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={templateTwo as TTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}