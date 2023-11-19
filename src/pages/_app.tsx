import '../styles/globals.css'

import { ThemeProvider } from 'styled-components'

import type { AppProps } from 'next/app'
import { templateTwo } from '@/styles/themes/default'
import { TTheme } from '@/styles/themes/default/index.d'
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={templateTwo as TTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}