<script setup lang="ts">
interface Props {
  from: string;
}

const { lang } = useLang();
const props = withDefaults(defineProps<Props>(), {
  from: "",
});
</script>

<template>
  <div v-if="lang === from">
    {{ lang === from }}
    <slot />
  </div>
</template>
