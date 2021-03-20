import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <title>Tachom - A full-service digital agency.</title>
          <meta name="title" content="Tachom - A full-service digital agency."/>
          <meta name="description" content="We’re a team of designers and developers who spend our time solving problems and telling the stories of great companies."/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://devtachom.com/"/>
          <meta property="og:title" content="Tachom - A full-service digital agency."/>
          <meta property="og:description" content="We’re a team of designers and developers who spend our time solving problems and telling the stories of great companies."/>
          <meta property="og:image" content=""/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://devtachom.com/TachomDevGroup"/>
          <meta property="twitter:title" content="Tachom - A full-service digital agency."/>
          <meta property="twitter:description" content="We’re a team of designers and developers who spend our time solving problems and telling the stories of great companies."/>
          <meta property="twitter:image" content="/img/logo-light.png"/>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
