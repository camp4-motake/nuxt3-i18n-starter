import { defineNuxtConfig } from "nuxt";

const routes = ["/en/"];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",
  vite: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue"),
      });
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: { grid: "autoplace" },
          "postcss-preset-env": {
            stage: 2,
            features: { "custom-properties": false },
          },
        },
      },
    },
  },
  generate: {
    fallback: "404.html",
    routes,
    subFolders: true,
  },
});
