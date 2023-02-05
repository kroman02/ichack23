import { Html, Head, Main, NextScript } from 'next/document'
import { middleware } from './middleware.js'

export default function Document() {
  middleware()
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
