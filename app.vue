<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en", class: "overflow-x-hidden" },
  bodyAttrs: {
    class: "bg-background text-text selection:bg-text/20 overflow-x-hidden",
  },
  titleTemplate: (title) => (title ? `${title} / nexus.` : "nexus."),
});
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Raleway:wght@400;600&display=swap");

* {
  @apply lining-nums;
}
</style>
