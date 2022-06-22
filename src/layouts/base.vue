<script setup lang="ts">
import { useLang } from "../composables/useLang";
const { lang } = useLang();
const title = "Hello Nuxt3!!";
</script>

<template>
  <div>
    <Html :lang="lang">
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="`This is ${title} page`" />
      </Head>
    </Html>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
