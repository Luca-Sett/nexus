<template>
  <div class="border-b-2 border-white/5 px-6 py-8">
    <div class="flex items-center2 items-start2 gap-4">
      <div class="rounded-full w-10 h-10 bg-sky-700 shrink-0 overflow-hidden">
        <img
          :src="`https://picsum.photos/40?random=${i}`"
          alt="John Doe's profile picture"
        />
      </div>

      <div>
        <h2 class="font-bold">John Doe</h2>
        <h3 class="opacity-50 text-sm mb-2">@johnathan_doe23 • 16/08</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt
          exercitationem officiis quos non provident, ut quia unde doloribus
          amet error ex nam iste repudiandae quidem quibusdam soluta, velit,
          quis ullam ipsa corporis debitis. Dolorum ducimus earum quo delectus
          vitae!
        </p>
      </div>
    </div>
    
    <div class="px-8 flex justify-between">
      
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ i: number }>();
</script>
