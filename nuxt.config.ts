// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: ["usebootstrap"],
  css: [
    "usebootstrap/scss/usebootstrap"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
           @import "@/assets/scss/_variables.scss";
           `,
        },
      },
    }}
  }
)
