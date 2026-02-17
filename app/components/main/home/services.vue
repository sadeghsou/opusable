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
    url: "/services",
    icon: "solar:code-bold-duotone",
  },
  {
    title: "Tech Advice",
    description: "Strategic guidance to help you make informed decisions about your technology stack.",
    url: "/services",
    icon: "solar:lightbulb-line-duotone",
  },
]);
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold">{{ $t("homePage.services.title") }}</h2>
    <p class="text-main-muted text-xl">{{ $t("homePage.services.description") }}</p>
    <div class="flex flex-col lg:flex-row gap-6 mt-6">
      <NuxtLink
        v-for="(service, index) in services"
        :key="`HomePageServices-${index}`"
        :to="service.url"
        class="flex flex-col items-start justify-between text-start min-h-40 gap-6 p-4 transition-all rounded-lg bg-main-surface ring-1 ring-main-accent hover:shadow hover:shadow-main-accent">
        <UiIcon
          :name="service.icon"
          icon-size="3xl" />
        <p class="flex flex-col items-start gap-4">
          <span class="font-bold text-lg">{{ service.title }}</span>
          <span class="text-main-muted">{{ service.description }}</span>
        </p>
        <p class="text-main-accent flex items-center gap-4">
          <span>{{ $t("card.learnMore") }}</span>
          <Icon name="solar:arrow-right-line-duotone" />
        </p>
      </NuxtLink>
    </div>
  </section>
</template>
