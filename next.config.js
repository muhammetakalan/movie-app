const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    TMDB_API_URL: process.env.TMDB_API_URL,
    TMDB_API_IMAGE_URL: process.env.TMDB_API_IMAGE_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },

  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  images: {
    domains: ["image.tmdb.org", "www.themoviedb.org"],
  },
});
