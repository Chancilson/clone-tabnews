import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9156207381006589"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
