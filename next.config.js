const withPWA = require("next-pwa");
const sitemap = require('nextjs-sitemap-generator');  

sitemap({  
  baseUrl: '',  
  pagesDirectory: __dirname + "/src/pages",  
  targetDirectory : 'public/'  
});

module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === "development",
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json 
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  target: "serverless",
});
