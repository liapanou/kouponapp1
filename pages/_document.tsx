import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="pastel">
      <Head />
      <body className="bg-base-200 h-full min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
