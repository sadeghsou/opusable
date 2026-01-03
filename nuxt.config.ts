// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/tailwindcss"],
  // Global CSS handled in app.vue to avoid runtime alias resolution issues
  css: [],
  app: {
    head: {
      title: "Opusable - More Customers, Less Hassle",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Opusable makes your business online, usable, and profitable—without compromising creativity or quality.",
        },
      ],
    },
  },
});
