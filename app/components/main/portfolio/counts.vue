<script setup lang="ts">
const counts = ref([
  { localeTitle: "projectsCompleted", value: 50, isPercent: false },
  { localeTitle: "happyClients", value: 40, isPercent: false },
  { localeTitle: "industriesServed", value: 15, isPercent: false },
  { localeTitle: "satisfactionRate", value: 98, isPercent: true },
]);
</script>
<template>
  <section class="flex items-center justify-between w-full py-40">
    <div
      class="flex flex-col gap-2"
      v-for="(count, index) in counts"
      :key="`MainPortfolioCount-${index}`">
      <span class="text-main-accent font-bold text-4xl">{{ count.value }}{{ count.isPercent ? "%" : "+" }}</span>
      <span class="text-main-muted">{{ $t(`portfolioPage.counts.${count.localeTitle}`) }}</span>
    </div>
  </section>
</template>
