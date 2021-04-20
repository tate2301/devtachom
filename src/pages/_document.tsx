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
          <title>Tachom - An African Digital Agency</title>
          <meta name="description" content="Tachom Pvt Ltd specialises in customised software development, mobile application development, web design, web application in various domains and also provide"/>
          <meta name="keywords" content="software company, software development company, software design, app development software, custom software development company, top software companies, erp software companies, mobile development, advertising agency, digital marketing agency, seo company"/>
          <meta name="robots" content="index, follow"/>
          <meta name="copyright" content="Tachom 2021"/>
          <meta name="language" content="EN"/>
          <meta name="distribution" content="global"/>
          <meta name="rating" content="general"/>
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
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"></meta>
          
                  <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-195034074-1"
              />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-195034074-1');
                    gtag('config', 'AW-384017805');  
                    gtag('event', 'conversion', {'send_to': 'AW-384017805/yT6ZCOjR74kCEI3LjrcB'});
                  
                `,
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({ 
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Branding",
              "item": "https://devtachom.com/services/branding"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "Web Development",
              "item": "https://devtachom.com/services/websites"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "Mobile Application",
              "item": "https://devtachom.com/services/mobile"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "Enterprise Software",
              "item": "https://devtachom.com/services/enterprise"  
            }]}) 
          }}
          />
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
