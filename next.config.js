const withPWA = require("next-pwa");

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
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./sitemapper');
    }

    return config;
  }

});