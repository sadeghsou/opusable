<script setup lang="ts">
const portfolioList = ref<PortfolioItem[]>([
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "webDevelopment",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    tags: [
      { title: "React", url: "#" },
      { title: "Node.js", url: "#" },
      { title: "PostgreSQL", url: "#" },
      { title: "Stripe", url: "#" },
    ],
  },
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "mobileAndWeb",
    title: "Restaurant Chain App",
    description: "Online ordering system with menu management, delivery tracking, and loyalty rewards program.",
    tags: [
      { title: "React Native", url: "#" },
      { title: "GraphQL", url: "#" },
      { title: "Redis", url: "#" },
      { title: "Stripe", url: "#" },
    ],
  },
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "webDesignAndDevelopment",
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment scheduling, telemedicine integration, and electronic health records.",
    tags: [
      { title: "Next.js", url: "#" },
      { title: "TypeScript", url: "#" },
      { title: "Tailwind", url: "#" },
      { title: "AWS", url: "#" },
    ],
  },
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "uiUxDesign",
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard with real-time data visualization and comprehensive reporting tools.",
    tags: [
      { title: "Figma", url: "#" },
      { title: "React", url: "#" },
      { title: "D3.js", url: "#" },
      { title: "Firebase", url: "#" },
    ],
  },
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "webDevelopment",
    title: "Educational Platform",
    description:
      "Learning management system with course creation, student progress tracking, and interactive assessments.",
    tags: [
      { title: "Django", url: "#" },
      { title: "React", url: "#" },
      { title: "WebRTC", url: "#" },
      { title: "Docker", url: "#" },
    ],
  },
  {
    imageUrl: "/a.png",
    url: "#",
    categoryLocale: "webDevelopment",
    title: "Real Estate Website",
    description: "Property listing platform with advanced search filters, virtual tours, and mortgage calculators.",
    tags: [
      { title: "Vue.js", url: "#" },
      { title: "MongoDB", url: "#" },
      { title: "Express", url: "#" },
      { title: "Cloudinary", url: "#" },
    ],
  },
]);
</script>
<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <NuxtLink
      v-for="(item, index) in portfolioList"
      :key="`MainPortfolioListItem-${index}`"
      :to="item.url"
      class="rounded-lg ring-1 ring-main-border bg-main-surface flex flex-col">
      <NuxtImg
        :alt="item.title"
        :src="item.imageUrl"
        class="min-h-72" />
      <section class="p-4 flex flex-col justify-between gap-3 flex-1">
        <span class="flex items-center justify-between font-bold text-xs px-2"
          >{{ $t(item.categoryLocale) }}
          <Icon
            name="solar:link-line-duotone"
            class="bg-main-muted" />
        </span>
        <h5 class="font-bold text-xl text-start">{{ item.title }}</h5>
        <p class="text-start text-main-muted text-md">{{ item.description }}</p>
        <div class="flex flex-wrap items-center justify-start gap-2">
          <NuxtLink
            v-for="(tag, tagIndex) in item.tags"
            :key="`MainPortfolioListItem-${index}-Tag-${tagIndex}`"
            :to="tag.url"
            class="text-main-accent bg-main-accent/5 rounded px-2 py-1 text-xs"
            >{{ tag.title }}</NuxtLink
          >
        </div>
      </section>
    </NuxtLink>
  </section>
</template>
