import type { AppProps } from 'next/app'

import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../global.css'

const Meta = () => (
  <Head>
    <title>mellow</title>
    <link rel='icon' type='image/png' href='/favicon.png' />
    <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
  </Head>
)

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
