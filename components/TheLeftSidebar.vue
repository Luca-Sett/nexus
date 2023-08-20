<template>
  <aside
    class="fixed bottom-0 top-0 z-30 hidden w-20 flex-col justify-between border-r-2 border-text/5 bg-background py-8 sm:flex"
  >
    <div class="flex flex-col gap-8">
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
    </div>

    <NuxtLink
      to="/profile"
      class="text-center opacity-40 transition-opacity hover:opacity-100"
    >
      <span class="material-symbols-rounded"> person </span>
    </NuxtLink>
  </aside>
</template>
