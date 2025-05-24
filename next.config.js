const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

const nextTranslate = require('next-translate')

module.exports = withPWA(nextTranslate({
  reactStrictMode: true,
})) 