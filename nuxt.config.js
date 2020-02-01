module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  dir: {
    assets: 'assets',
    layouts: 'layouts',
    middleware: 'middleware',
    pages: 'pages',
    static: 'public',
    store: 'store'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#458ce9'
  },
  css: [
    '~/assets/style/global.sass'
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt/typescript-build',
    [
      '@nuxtjs/dotenv',
      {
        path: __dirname
      }
    ]
  ],
  styleResources: {
    sass: [
      '~/assets/style/var.sass'
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
