import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="min-h-screen bg-[url('/bg.svg')] bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
