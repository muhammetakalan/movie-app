import Head from 'next/head'

import '../styles/global.css'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
