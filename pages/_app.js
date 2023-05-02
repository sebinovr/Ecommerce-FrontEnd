import '@/styles/globals.css'
import { EcommerceProvider } from '@/context/EcommerceProvider'

export default function App({ Component, pageProps }) {
  return (
    <EcommerceProvider>
      <Component {...pageProps} />
    </EcommerceProvider>
  )
}
