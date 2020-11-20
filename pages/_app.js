import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../global.css'

const Meta = () => (
  <Head>
    <link rel='icon' type='image/png' href='/favicon.png' />
    <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
  </Head>
)

const MyApp = ({ Component, pageProps }) => (
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
