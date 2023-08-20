<template>
  <aside
    class="hidden fixed left-0 w-20 top-0 bottom-0 sm:flex flex-col justify-between py-8 border-r-2 border-white/5"
  >
    <div class="flex flex-col gap-8">
      <NuxtLink to="/" class="text-center">
        <span class="material-symbols-rounded"> home </span>
      </NuxtLink>
      <NuxtLink to="/" class="text-center opacity-40">
        <span class="material-symbols-rounded"> search </span>
      </NuxtLink>
      <NuxtLink to="/" class="text-center opacity-40">
        <span class="material-symbols-rounded"> notifications </span>
      </NuxtLink>
      <NuxtLink to="/" class="text-center opacity-40">
        <span class="material-symbols-rounded"> mail </span>
      </NuxtLink>
    </div>

    <NuxtLink to="/" class="text-center opacity-50">
      <span class="material-symbols-rounded"> person </span>
    </NuxtLink>
  </aside>
</template>
