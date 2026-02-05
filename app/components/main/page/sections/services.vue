<script setup lang="ts">
const services = ref([
  {
    title: "Web Design",
    description: "Beautiful, modern designs that captivate your audience and enhance user experience.",
    url: "/services",
    icon: "solar:pallete-2-line-duotone",
  },
  {
    title: "Web Development",
    description: "Robust, scalable solutions built with cutting-edge technologies for optimal performance.",
    url: "#",
    icon: "solar:code-bold-duotone",
  },
  {
    title: "Tech Advice",
    description: "Strategic guidance to help you make informed decisions about your technology stack.",
    url: "#",
    icon: "solar:lightbulb-line-duotone",
  },
]);
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold">{{ $t("homePage.services.title") }}</h2>
    <p class="text-main-muted text-xl">{{ $t("homePage.services.description") }}</p>
    <div class="flex gap-6 mt-6">
      <UiCard
        v-for="(service, index) in services"
        :key="`HomePageServices-${index}`"
        :title="service.title"
        :description="service.description"
        :to="service.url"
        :icon="service.icon" />
    </div>
  </section>
</template>
