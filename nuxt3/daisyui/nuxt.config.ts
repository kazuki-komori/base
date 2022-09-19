// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        // https://daisyui.com/docs/themes/
        "data-theme": "light",
      },
    },
  },
})
