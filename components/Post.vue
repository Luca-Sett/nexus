<template>
  <div
    class="bg-text/5 outline-none transition-colors hover:bg-text/[0.08] focus-visible:bg-text/10 rounded-xl sm:rounded-2xl"
  >
    <div class="flex gap-3 p-5 pr-8 sm:p-6">
      <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-text/10">
        <img
          :src="`https://picsum.photos/40?random=${i}`"
          alt="John Doe's profile picture"
        />
      </div>

      <div>
        <h2 class="font-semibold leading-none">John Doe</h2>

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
          class="material-symbols-rounded !text-xl transition-colors group-hover:text-accent group-focus-visible:text-accent"
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
          class="material-symbols-rounded !text-xl transition-colors group-hover:text-accent group-focus-visible:text-accent"
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
          class="material-symbols-rounded !text-xl transition-colors group-hover:text-accent group-focus-visible:text-accent"
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
          class="material-symbols-rounded !text-xl transition-colors group-hover:text-accent group-focus-visible:text-accent"
        >
          share
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ i: number }>();
</script>
