<template>
  <header class="fixed -top-px z-20 mx-auto w-full max-w-3xl">
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
