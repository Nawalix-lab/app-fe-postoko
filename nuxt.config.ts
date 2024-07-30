// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  css: ["~/assets/style/style.sass"],
  plugins: [
    { src: "~/plugins/vue-awesome-sidebar.ts", mode: "client" },
    { src: "~/plugins/vuex.ts", mode: "client" },
  ],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-quasar-ui", "@sidebase/nuxt-auth"],
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    saltRounds: 10,
    mongodbUri: process.env.NUXT_MONGODB_URI,
    secretKey: process.env.NUXT_SECRET_KEY,
  },
  quasar: {
    plugins: [
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
      "Dark",
    ],
    sassVariables: true,
    config: {
      brand: {
        primary: "#57A3C2",
      },
    },
    extras: {
      font: "roboto-font",
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: "local",
    },
    endpoints: {
      getSession: { path: "/api/auth/user" },
    },
  },
});
