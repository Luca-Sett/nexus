<template>
  <NuxtLink
    to="/post/1"
    class="rounded-2xl bg-text/5 outline-none hover:bg-text/10 focus-visible:bg-text/10"
  >
    <div class="flex gap-4 p-4">
      <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-text/10">
        <img
          :src="`https://picsum.photos/40?random=${i}`"
          alt="John Doe's profile picture"
        />
      </div>

      <div>
        <h2 class="font-semibold">John Doe</h2>

        <h3 class="mb-4 text-sm opacity-50">@johnathan_doe23 • 16/08</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt
          exercitationem officiis quos non provident, ut quia unde doloribus
          amet error ex nam iste repudiandae quidem quibusdam soluta, velit,
          quis ullam ipsa corporis debitis. Dolorum ducimus earum quo delectus
          vitae!
        </p>
      </div>
    </div>

    <div class="flex gap-1 px-2 pb-2 text-text/60">
      <button
        @click.prevent
        class="group flex w-full items-center justify-center gap-2 rounded-lg py-2 outline-none transition-colors hover:bg-text/5 focus-visible:bg-text/5"
      >
        <span
          class="material-symbols-rounded group-hover:text-accent group-focus-visible:text-accent !text-xl transition-colors"
        >
          favorite
        </span>
        <span>16</span>
      </button>

      <button
        @click.prevent
        class="group flex w-full items-center justify-center gap-2 rounded-lg py-2 outline-none transition-colors hover:bg-text/5 focus-visible:bg-text/5"
      >
        <span
          class="material-symbols-rounded group-hover:text-accent group-focus-visible:text-accent !text-xl transition-colors"
        >
          reply
        </span>
        <span>10</span>
      </button>

      <button
        @click.prevent
        class="group flex w-full items-center justify-center gap-2 rounded-lg py-2 outline-none transition-colors hover:bg-text/5 focus-visible:bg-text/5"
      >
        <span
          class="material-symbols-rounded group-hover:text-accent group-focus-visible:text-accent !text-xl transition-colors"
        >
          laps
        </span>
        <span>7</span>
      </button>

      <button
        @click.prevent
        class="group flex w-full items-center justify-center gap-2 rounded-lg py-2 outline-none transition-colors hover:bg-text/5 focus-visible:bg-text/5"
      >
        <span
          class="material-symbols-rounded group-hover:text-accent group-focus-visible:text-accent !text-xl transition-colors"
        >
          share
        </span>
      </button>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ i: number }>();
</script>
