// nuxt.config.ts
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    // "@mdi/font/css/materialdesignicons.min.css", // should use this instead of below scss line
    "@mdi/font/scss/materialdesignicons.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    preset: "vercel",
  },
});
