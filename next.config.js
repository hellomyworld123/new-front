const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr','ar'],
    defaultLocale: 'fr'
  }
}

let config = nextTranslate(nextConfig)

if (process.env.NODE_ENV === 'production') {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true
  })
  config = withPWA(config)
}

module.exports = config 