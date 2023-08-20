<template>
  <footer
    class="fixed -bottom-px z-20 flex h-16 w-full items-center justify-between border-t-2 border-text/5 bg-background/50 px-8 backdrop-blur sm:hidden"
  >
    <NuxtLink
      to="/"
      class="grid place-items-center opacity-40 transition-opacity hover:opacity-100"
    >
      <span class="material-symbols-rounded"> home </span>
    </NuxtLink>
    <NuxtLink
      to="/search"
      class="grid place-items-center opacity-40 transition-opacity hover:opacity-100"
    >
      <span class="material-symbols-rounded"> search </span>
    </NuxtLink>
    <NuxtLink
      to="/notifications"
      class="grid place-items-center opacity-40 transition-opacity hover:opacity-100"
    >
      <span class="material-symbols-rounded"> notifications </span>
    </NuxtLink>
    <NuxtLink
      to="/messages"
      class="grid place-items-center opacity-40 transition-opacity hover:opacity-100"
    >
      <span class="material-symbols-rounded"> mail </span>
    </NuxtLink>
  </footer>
</template>
