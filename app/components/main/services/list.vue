<script setup lang="ts">
const services = ref({
  webDesign: {
    icon: "solar:pallete-2-broken",
    itemsLocale: ["uiuxDesign", "brandIdentity", "responsiveDesign", "wireframingAndPrototyping"],
  },
  webDevelopment: {
    icon: "solar:code-bold",
    itemsLocale: ["frontendDevelopment", "backendDevelopment", "apiIntegration", "ecommerceSolutions"],
  },
  mobileFirstDesign: {
    icon: "solar:smartphone-broken",
    itemsLocale: ["responsiveLayouts", "progressiveWebApps", "mobileOptimization", "crossBrowserTesting"],
  },
  techAdvice: {
    icon: "solar:lightbulb-minimalistic-broken",
    itemsLocale: ["technologyStackSelection", "architecturePlanning", "performanceOptimization", "securityConsulting"],
  },
  databaseSolutions: {
    icon: "solar:database-broken",
    itemsLocale: ["databaseDesign", "dataMigration", "performanceTuning", "cloudDatabaseSetup"],
  },
  securityAndMaintenance: {
    icon: "solar:shield-minimalistic-broken",
    itemsLocale: ["securityAudits", "regularUpdates", "backupSolutions", "performanceMonitoring"],
  },
  performanceOptimization: {
    icon: "solar:rewind-forward-broken",
    itemsLocale: ["speedOptimization", "codeMinification", "cdnIntegration", "imageOptimization"],
  },
  seoAndMarketing: {
    icon: "solar:mention-circle-broken",
    itemsLocale: ["seoOptimization", "analyticsSetup", "contentStrategy", "conversionOptimization"],
  },
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    <div
      v-for="(service, serviceName) in services"
      :key="`MainServices-${serviceName}`"
      class="flex flex-col items-start text-start gap-2 p-6 rounded-lg bg-main-surface ring-1 ring-main-border hover:ring-main-accent hover:shadow-sm hover:shadow-main-accent transition-all">
      <UiIcon
        :name="service.icon"
        class="p-3"
        icon-size="4xl" />
      <h4 class="text-2xl text-main-text mt-4 font-bold">{{ $t(`servicesPage.${serviceName}.title`) }}</h4>
      <p class="text-main-muted text-sm">{{ $t(`servicesPage.${serviceName}.description`) }}</p>
      <ul class="flex flex-col items-start gap-2 mt-3 list-disc text-main-accent pl-4">
        <li
          v-for="item in service.itemsLocale"
          :key="`MainServices-${serviceName}-Item-${item}`"
          class="text-sm">
          <span class="text-main-muted">{{ $t(`servicesPage.${serviceName}.items.${item}`) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
