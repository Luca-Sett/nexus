<template>
  <div class="flex flex-col gap-3 sm:gap-6">
    <NuxtLink :to="`/posts/${i}`" v-for="i in 10" :key="i">
      <Post :i="i" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Home" });
</script>
