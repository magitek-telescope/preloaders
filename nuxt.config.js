module.exports = {
  /*
  ** Headers of the page
  */
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
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
