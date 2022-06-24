<script setup lang="ts">
const { lang } = useLang();
</script>

<template>
  <header>
    <slot name="header"> Default header content </slot>
    <nav>
      <NuxtLink :to="$langPath('')">home</NuxtLink>
      <NuxtLink :to="$langPath('about')">about</NuxtLink>
      <NuxtLink v-if="lang !== 'en'" :to="'/en' + $route.fullPath">en</NuxtLink>
      <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        >ja</NuxtLink
      >
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  width: 100%;
  gap: 2em;
}
</style>
