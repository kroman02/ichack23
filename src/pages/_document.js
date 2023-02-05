import { Html, Head, Main, NextScript } from 'next/document'
import { middleware } from './middleware.js'

export default function Document() {
  middleware()
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
