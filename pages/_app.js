import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9156207381006589"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}
