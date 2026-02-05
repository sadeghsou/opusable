<script setup lang="ts">
const comments = ref([
  {
    author: { name: "Sarah Johnson", role: "CEO, TechStart" },
    rate: 5,
    text: "Opusable transformed our online presence. The team's expertise and dedication are unmatched.",
  },
  {
    author: { name: "Michael Chen", role: "Founder, DesignCo" },
    rate: 5,
    text: "Working with Opusable was a game-changer. They delivered beyond our expectations.",
  },
  {
    author: { name: "Emily Rodriguez", role: "Director, InnovateLabs" },
    rate: 5,
    text: "Professional, creative, and results-driven. Highly recommend Opusable for any web project.",
  },
]);
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold">{{ $t("homePage.comments.title") }}</h2>
    <p class="text-main-muted text-xl">{{ $t("homePage.comments.description") }}</p>
    <div class="grid grid-cols-3 gap-8 mt-8">
      <div
        v-for="(comment, index) in comments"
        :key="`HomePageComments${index}`"
        class="flex flex-col items-start text-start gap-6 ring-1 ring-main-border p-4 rounded-md">
        <UiRate
          :model-value="comment.rate"
          class="text-xl" />
        <p class="text-main-muted">{{ comment.text }}</p>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-main-text font-semibold">{{ comment.author.name }}</span>
          <span class="text-main-muted text-sm">{{ comment.author.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
