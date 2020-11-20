import { ThemeProvider } from 'next-themes'
import '../global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
