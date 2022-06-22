/**
 * middleware: update language state
 */

import { defineNuxtRouteMiddleware } from "#app";
import { i18n } from "../plugins/i18n";
import { useLang } from "../composables/useLang";

const locales = ["en", "ja"];

export default defineNuxtRouteMiddleware((to, from) => {
  const lang = to.params.lang || "ja";
  const { updateLang } = useLang();

  if (typeof lang === "string" && locales.includes(lang)) {
    i18n.global.locale = lang;
    updateLang(lang);
  }
});
