import { join } from "path";
import { defineNuxtConfig } from "nuxt";

const pageLists = ["/", "/about"];
const langs = ["/", "/en"];
let routes = [];
langs.forEach(
  (lang) => (routes = routes.concat(pageLists.map((page) => join(lang, page))))
);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",
  ssr: false,
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
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue"),
      });
    },
  },
  generate: {
    fallback: "404.html",
    routes,
  },
});
