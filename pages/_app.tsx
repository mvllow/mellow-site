import type { AppProps } from 'next/app'

import Head from 'next/head'
import { ThemeProvider, useTheme } from 'next-themes'
import '../global.css'

const Meta = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Head>
      <title>mellow</title>
      <link
        rel='icon'
        type='image/png'
        href={`/${resolvedTheme || 'dark'}.png`}
      />
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
    </Head>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider
    attribute='class'
    defaultTheme='system'
    disableTransitionOnChange
  >
    <Meta />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
