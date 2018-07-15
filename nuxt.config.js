module.exports = {
  srcDir: './app',
  head: {
    title: 'preloaders',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'link', href: 'https://fonts.googleapis.com/css?family=Quicksand', rel: 'stylesheet'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_ID || 'UA-12301-2'
      }
    ]
  ]
}
