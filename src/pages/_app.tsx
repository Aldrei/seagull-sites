import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import { templateDefault } from '@/styles/themes/default'
import useThemeCostumer from '@/hooks/Theme'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useThemeCostumer({ templateDefault })

  return (
    <ThemeProvider theme={templateDefault as unknown as DefaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
