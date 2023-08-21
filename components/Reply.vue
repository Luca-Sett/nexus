<template>
  <div
    class="rounded-xl bg-text/5 outline-none transition-colors hover:bg-text/[0.08] focus-visible:bg-text/10 sm:rounded-2xl"
  >
    <div class="flex gap-3 p-5 pb-0 pr-8 sm:p-6 sm:pb-0">
      <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-text/10">
        <img
          src="https://picsum.photos/40?random=23"
          alt="John Doe's profile picture"
        />
      </div>

      <div class="w-full">
        <h2 class="mb-2 font-semibold">Luca Sett</h2>

        <textarea
          placeholder="Your reply..."
          class="w-full resize-none bg-transparent text-xl outline-none transition-[height]"
          rows="1"
          ref="textarea"
          @input="handleInput"
        ></textarea>
      </div>
    </div>

    <div class="flex justify-end p-2">
      <button
        type="button"
        class="group flex items-center gap-2 rounded-lg bg-text/5 px-6 py-2 outline-none transition-colors hover:bg-text/10 focus-visible:bg-text/10"
      >
        Reply
        <span
          class="material-symbols-rounded !text-xl transition-colors group-hover:text-accent group-focus-visible:text-accent"
        >
          arrow_forward
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};
</script>
