import type { Ref } from "vue";

export const useLang = () => {
  const lang: Ref<string> = useState("lang", () => "ja");
  const updateLang = (lang: Ref<string>) => (value: string) => {
    lang.value = value;
  };

  return {
    lang: readonly(lang),
    updateLang: updateLang(lang),
  };
};
