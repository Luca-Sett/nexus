<template>
  <div class="mx-auto max-w-3xl">
    <TheHeader />

    <TheLeftSidebar />

    <main
      class="-mr-0.5 min-h-screen border-r-2 border-text/5 py-16 sm:py-20 sm:pl-20"
    >
      <div class="my-[-1px] p-3 sm:p-8">
        <slot />
      </div>
    </main>

    <TheFooter />
  </div>
</template>
