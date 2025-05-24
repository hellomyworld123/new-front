const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr','ar'],
    defaultLocale: 'fr'
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
};

const withPWA = require('next-pwa')(nextConfig);
module.exports = nextTranslate(withPWA); 