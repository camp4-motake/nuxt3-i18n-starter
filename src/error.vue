<script setup lang="ts">
import { useError } from "#app";
const error = useError();
</script>

<template>
  <div>
    <ul>
      <li>{{ error.statusCode }}</li>
      <li>{{ error.message }}</li>
    </ul>
  </div>
</template>
