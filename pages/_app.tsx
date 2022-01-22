import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
