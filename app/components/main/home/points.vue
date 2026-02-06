<script setup lang="ts">
const statistics = ref([
  { localeLabel: "homePage.points.statistics.projectCompleted", value: "50+" },
  { localeLabel: "homePage.points.statistics.clientSatisfaction", value: "100%" },
  { localeLabel: "homePage.points.statistics.yearsExperience", value: "5+" },
  { localeLabel: "homePage.points.statistics.supportAvailable", value: "24/7" },
]);
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div class="flex flex-col gap-6">
      <h2 class="text-3xl font-bold">{{ $t("homePage.points.title") }}</h2>
      <p class="text-main-muted text-xl">{{ $t("homePage.points.description") }}</p>
      <ul class="grid grid-cols-2 grid-rows-3 gap-2">
        <ol
          v-for="item in 6"
          :key="`HomePagePointsListItem-${item}`"
          class="flex items-center gap-2">
          <Icon
            name="solar:check-circle-broken"
            class="bg-main-accent text-2xl" />
          <span>{{ $t(`homePage.points.list.item${item}`) }}</span>
        </ol>
      </ul>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4">
      <div
        v-for="(statistic, index) in statistics"
        :key="`HomePagePointsStatistics${index}`"
        class="rounded-md bg-main-border ring-1 ring-main-accent flex flex-col items-start gap-4 p-4">
        <span class="text-4xl text-main-text font-bold">{{ statistic.value }}</span>
        <span class="text-main-muted">{{ $t(statistic.localeLabel) }}</span>
      </div>
    </div>
  </section>
</template>
