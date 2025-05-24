const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr','ar'],
    defaultLocale: 'fr'
  }
}

module.exports = withPWA(
  nextTranslate(nextConfig)
) 