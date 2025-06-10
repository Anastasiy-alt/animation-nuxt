// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  alias: {
    '@components': resolve(__dirname, './components'),
    '@color': resolve(__dirname, './const/color.sass'),
    '@mixin': resolve(__dirname, './const/mixin.sass')
  },

  ssr: false,

  modules: [
    'nuxt-svgo',
    '@nuxtjs/color-mode'
  ],

  svgo: {
    autoImportPath: './assets/icon/',
    componentPrefix: 'Icon',
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-04-17'
})