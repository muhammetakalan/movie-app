const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  images: {
    unoptimized: true
  },

  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY
  }
})
