<template>
  <header>
    <slot name="header"> Default header content </slot>
    <nav>
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/about/">about</NuxtLink>
      <NuxtLink to="/en/">en</NuxtLink>
      <NuxtLink to="/en/about/">en-about</NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  width: 100%;
  gap: 2em;
}
</style>
