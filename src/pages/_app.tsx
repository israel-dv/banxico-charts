import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Layout } from 'src/components/Layout'
import 'src/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
