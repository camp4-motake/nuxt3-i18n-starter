import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n/index";
import ja from "../locales/ja.json";
import en from "../locales/en.json";

export const i18n = createI18n({
  locale: "ja",
  fallbackLocale: "ja",
  messages: {
    en,
    ja,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
