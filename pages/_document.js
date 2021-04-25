import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Primary Meta Tags */}
          <title>台灣置物櫃地圖 Lockery - Taiwan Locker Map</title>
          <meta
            name="title"
            content="台灣置物櫃地圖 Lockery - Taiwan Locker Map"
          />
          <meta
            name="description"
            content="整理全臺灣觀光景點、火車站、捷運站等公共場所寄物櫃資訊，將收費方式、大小、地點、格數等資訊呈現在地圖上，滿足您行程規劃、臨時置物需求。"
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://taiwan-locker-map.github.io/"
          />
          <meta
            property="og:title"
            content="台灣置物櫃地圖 Lockery - Taiwan Locker Map"
          />
          <meta
            property="og:description"
            content="整理全臺灣觀光景點、火車站、捷運站等公共場所寄物櫃資訊，將收費方式、大小、地點、格數等資訊呈現在地圖上，滿足您行程規劃、臨時置物需求。"
          />
          <meta
            property="og:image"
            content="https://taiwan-locker-map.github.io/og-img.png"
          />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://taiwan-locker-map.github.io/og-img.png"
          />
          <meta
            property="twitter:title"
            content="台灣置物櫃地圖 Lockery - Taiwan Locker Map"
          />
          <meta
            property="twitter:description"
            content="整理全臺灣觀光景點、火車站、捷運站等公共場所寄物櫃資訊，將收費方式、大小、地點、格數等資訊呈現在地圖上，滿足您行程規劃、臨時置物需求。"
          />
          <meta
            property="twitter:image"
            content="https://taiwan-locker-map.github.io/og-img.png"
          />

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://taiwan-locker-map.github.io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://taiwan-locker-map.github.io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://taiwan-locker-map.github.io/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="https://taiwan-locker-map.github.io/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="https://taiwan-locker-map.github.io/safari-pinned-tab.svg"
            color="#f9b599"
          />
          <meta name="apple-mobile-web-app-title" content="Lockery" />
          <meta name="application-name" content="Lockery" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#f9b599" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BKLP3JWX3C"
          />
          <script>
            window.dataLayer = window.dataLayer || [] function gtag(){' '}
            {dataLayer.push(arguments)}
            gtag('js', new Date()) gtag('config', 'G-BKLP3JWX3C')
          </script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
