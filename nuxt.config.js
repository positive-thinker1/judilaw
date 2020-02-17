
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    LARAVEL_URL_DEV: 'http://localhost/common-app/public/api/v1',
    LARAVEL_URL_PRO: 'http://app.finpay.ml/api/v1',
    LARAVEL_URL_LIVE: 'http://app.finpay.ml/api/v1',
    PRODUCTION_TYPE: "pro", // if in local "dev" --OR-- if in production "pro" --OR-- if in Live "live"
    COMPANY_NAME: "SystimaNX IT Solutions Private Limited"
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    redirect: {
      login: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'token' },
          logout: false,//{ url: '/auth/logout', method: 'post' },
          user: { url: '/users/profile', method: 'get', propertyName: 'data' }
        },

      }
    },
  }

}
