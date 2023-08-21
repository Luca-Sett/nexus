<template>
  <header
    ref="header"
    class="fixed -top-px z-20 mx-auto w-full max-w-3xl transition-transform"
  >
    <div
      class="flex h-16 items-center justify-between border-b-2 border-text/5 bg-background/50 px-8 backdrop-blur sm:ml-20 sm:h-20"
    >
      <NuxtLink to="/" class="flex items-center gap-3 font-serif text-2xl">
        <span class="material-symbols-rounded relative top-0.5">
          wifi_tethering
        </span>
        nexus.
      </NuxtLink>

      <NuxtLink
        to="/profile"
        class="grid place-items-center opacity-40 transition-opacity hover:opacity-100 sm:hidden"
      >
        <span class="material-symbols-rounded"> person </span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const header = ref<HTMLHeadElement | null>(null);

let lastScrollTop = 0;
useEventListener("scroll", (e) => {
  if (window.innerWidth >= 460) return;
  let currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop && currentScrollTop > 60)
    header.value?.classList.add("-translate-y-full");
  else header.value?.classList.remove("-translate-y-full");

  lastScrollTop = currentScrollTop;
});

useEventListener("resize", (e) => {
  if (window.innerWidth >= 460)
    header.value?.classList.remove("-translate-y-full");
});
</script>
