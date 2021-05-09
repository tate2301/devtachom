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
          <meta name="description" content="Established in 2020 by a team of young expert software professionals, Tachom specialises in software development, mobile app dev and website design."/>
          <meta name="keywords" content="it companies south africa,apps in development,it companies Johannesburg,it companies Harare,developing mobile app,builder apps,software companies in south africa,software companies in Zimbabwe,software development companies,apps development company,software companies in Harare,android app development,software development companies in cape town,software development companies in south africa,software development companies johannesburg,software companies in johannesburg,develop custom software,software app developers,software developers south africa,top software developer companies,app developers cape town,software developer jobs south africa,develop mobile application,creating app for android,app developers,software create app,design an app for android,app programmer,software for apps,cost of an app development,software to build an app,creating an app from a website,software companies in pretoria,build mobile apps,android app building,website dev company,software development south africa,software engineering companies in south africa,software companies in gauteng,list of software development companies in south africa,list of software development companies in Zimbabwe,software mobile app development,free software for app development,software development cape town,software development harare,software development companies in pretoria,software developer cape town,mobile app developer company,best app developer software,app developer near me,app development software for android,best app builder,free app builder software,digital marketing is,online marketer,marketer agency,marketing companies,advertising agencies in cape town,advertising agencies in Zimbabwe,agency digital,digital marketing strategies,online advertising,marketing companies in south africa,marketing companies in Harare,companies digital marketing,digital marketing agencies in johannesburg,digital marketing agencies in Harare,digital marketing cape town,marketing agencies in south africa,digital marketing agencies cape town,internet marketing,marketing agencies in cape town,marketing agencies in johannesburg,media companies in south africa,advertising digital,digital marketing agencies in south africa,digital marketing as a service,digital marketing in south africa,marketing companies in cape town,marketing companies in zimbabwe,marketing companies in johannesburg,marketing companies in harare,social media marketing agencies,agency online marketing,digital marketing companies in south africa,digital agency cape town,web designing sites"/>    
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="English"/>
          <meta name="revisit-after" content="10 days"/>
          <meta name="author" content="Tachom Software Developers"/>
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
                    gtag('event', 'conversion', {'send_to': 'AW-384017805/1pXaCPC7wZECEI3LjrcB'});
                  
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
