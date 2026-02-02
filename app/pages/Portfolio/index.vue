<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web App",
    image: "https://placehold.co/600x400/1E3A5F/2DD4BF?text=Project+1",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "https://placehold.co/600x400/1E3A5F/2DD4BF?text=Project+2",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://placehold.co/600x400/1E3A5F/2DD4BF?text=Project+3",
  },
  {
    id: 4,
    title: "Social Network",
    category: "Web App",
    image: "https://placehold.co/600x400/1E3A5F/2DD4BF?text=Project+4",
  },
];
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-main-accent mb-4">Portfolio</h1>
      <p class="text-main-muted mb-12 max-w-2xl">Check out our recent projects</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="`/portfolio/${project.id}`"
          class="group bg-main-surface border border-main-border rounded-lg overflow-hidden hover:border-main-accent transition">
          <div class="aspect-video bg-main-primary">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <p class="text-main-accent text-sm mb-1">{{ project.category }}</p>
            <h3 class="text-lg font-semibold text-main-text group-hover:text-main-accent transition">
              {{ project.title }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
