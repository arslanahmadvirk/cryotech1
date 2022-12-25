/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        {/* <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script> */}
        <Script
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"
        />
      </body>
    </Html>
  );
}
