<script setup lang="ts">
interface Props {
  srcWebp: string | {};
  srcImg: {};
  alt: string;
}
const props = withDefaults(defineProps<Props>(), {
  srcWebp: "",
  srcImg: undefined,
  alt: "",
});
</script>

<template>
  <picture>
    <source :srcset="srcWebp" type="image/webp" />
    <img
      :src="srcImg.src"
      :width="srcImg.width"
      :height="srcImg.height"
      :alt="alt"
      decoding="async"
    />
  </picture>
</template>
