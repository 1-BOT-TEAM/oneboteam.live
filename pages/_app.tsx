import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutWrapper from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
