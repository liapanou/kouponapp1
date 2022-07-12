import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="bumblebee">
      <Head />
      <body className="bg-base-100 h-full min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
