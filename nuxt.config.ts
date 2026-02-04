// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/device", "@nuxt/icon", "@nuxtjs/i18n"],
  nitro: {
    routeRules: {
      "/sw.js": { redirect: "/" },
    },
  },
  css: ["@/assets/scss/global.scss"],
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
  },
});
