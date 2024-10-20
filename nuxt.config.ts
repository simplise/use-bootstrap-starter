// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-07-03",
  modules: ["usebootstrap", "@nuxt/eslint"],
  css: [
    "./assets/scss/custom.scss"
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
    }
  },
  eslint: {
    config: {
      stylistic: {
        indent: 1,
        semi: true,
      }
    }
  },
  usebootstrap: {
    integration: {
     protocol: {
      reqres: {
       type: 'fetch',
       prefix: 'https://reqres.in/api/',
      },
     },
    },
   },
}
)