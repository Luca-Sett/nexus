<template>
  <div>
    <Post v-for="i in 10" :key="i" :i="i" />
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Home" });
</script>
