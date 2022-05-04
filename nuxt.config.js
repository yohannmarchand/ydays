export default {
  auth: {
    strategies: {
      google: {
        clientId: '633700990269-fr8nu9gff7pib8k619io5061mp0hfd4f',
        codeChallengeMethod: "",
        responseType: 'token id_token',
      },
    },
    redirect: {
      login: '/api/login'
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ydays',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next', "@nuxtjs/axios"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
