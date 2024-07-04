// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: ["usebootstrap"],
  css: [
    "bootstrap/scss/bootstrap.scss",
    "~/assets/scss/_variables.scss",
  ]
})