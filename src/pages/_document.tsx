import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="min-h-screen bg-cover bg-[url('/bg.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
