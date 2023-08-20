<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  bodyAttrs: { class: "bg-gray-950 text-gray-100 selection:bg-white/20" },
  titleTemplate: (title) => (title ? `${title} / nexus` : "nexus"),
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Raleway&display=swap");
</style>
