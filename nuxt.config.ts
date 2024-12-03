// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-swiper', '@pinia/nuxt'],
  plugins: [ 
    '~/plugins/axios.js'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  colorMode: {
    preference: 'light'
  }
})