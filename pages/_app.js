import "../styles/global.css";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
