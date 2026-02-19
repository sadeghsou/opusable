<script setup lang="ts">
const processTimelines = ref([
  { week: "1", titleLocale: "contactAndBrief" },
  { week: "2-3", titleLocale: "designConcepts" },
  { week: "4-6", titleLocale: "development" },
  { week: "7", titleLocale: "testingAndQA" },
  { week: "8", titleLocale: "goLive" },
]);
</script>
<template>
  <section class="flex flex-col gap-6 text-center w-full">
    <h3 class="text-5xl font-bold text-main-text">{{ $t("processPage.timeline.title") }}</h3>
    <p class="text-main-muted text-lg">{{ $t("processPage.timeline.description") }}</p>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
      <div
        v-for="(timeline, index) in processTimelines"
        :key="`MainProcessTimeline-${index}`"
        class="flex flex-col items-center p-3 rounded-lg ring-1 ring-main-border bg-main-surface odd:ring-main-accent odd:bg-main-accent/5">
        <span class="text-main-text font-bold">{{ $t("week") }} {{ timeline.week }}</span>
        <span class="text-main-muted text-sm">{{ $t(`processPage.timeline.${timeline.titleLocale}`) }}</span>
      </div>
    </section>
  </section>
</template>
