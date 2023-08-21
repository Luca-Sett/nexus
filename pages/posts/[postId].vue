<template>
  <div class="flex flex-col pb-6">
    <Post :i="postId" />

    <div class="grid grid-cols-[2rem_1fr] sm:grid-cols-[4rem_1fr]">
      <div class="relative">
        <div
          class="ml-[16px] h-[55px] w-0.5 bg-muted sm:ml-[32px] sm:h-[47px]"
        ></div>
        <div
          class="ml-[16px] h-[12px] w-[16px] rounded-bl-full border-b-2 border-l-2 border-muted sm:ml-[32px] sm:h-[16px] sm:w-[32px]"
        ></div>
        <div
          class="absolute bottom-0 top-[47px] ml-[16px] w-0.5 bg-muted sm:ml-[32px]"
        ></div>
      </div>

      <div class="pt-6">
        <Reply />
      </div>

      <div class="relative">
        <div
          class="ml-[16px] h-[55px] w-0.5 bg-muted sm:ml-[32px] sm:h-[47px]"
        ></div>
        <div
          class="ml-[16px] h-[12px] w-[16px] rounded-bl-full border-b-2 border-l-2 border-muted sm:ml-[32px] sm:h-[16px] sm:w-[32px]"
        ></div>
        <div
          class="absolute bottom-0 top-[47px] ml-[16px] w-0.5 bg-muted sm:ml-[32px]"
        ></div>
      </div>

      <div class="pt-6">
        <NuxtLink :to="`/posts/${postId}`">
          <Post :i="postId" />
        </NuxtLink>
      </div>

      <div class="relative">
        <div
          class="ml-[16px] h-[55px] w-0.5 bg-muted sm:ml-[32px] sm:h-[47px]"
        ></div>
        <div
          class="ml-[16px] h-[12px] w-[16px] rounded-bl-full border-b-2 border-l-2 border-muted sm:ml-[32px] sm:h-[16px] sm:w-[32px]"
        ></div>
      </div>

      <div class="pt-6">
        <NuxtLink :to="`/posts/${postId}`">
          <Post :i="postId" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "John Doe's Post" });
const postId = parseInt(useRoute().params.postId as string);
</script>
