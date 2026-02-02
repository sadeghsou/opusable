<script setup lang="ts">
const route = useRoute();
const projectId = route.params.id;

const project = {
  title: "E-commerce Platform",
  category: "Web Application",
  description:
    "A full-featured e-commerce platform built with Nuxt 4, featuring product management, shopping cart, and secure checkout.",
  image: "https://placehold.co/1200x600/1E3A5F/2DD4BF?text=Project+Detail",
  tech: ["Nuxt 4", "TypeScript", "Tailwind CSS", "Firebase"],
  link: "https://example.com",
};
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <NuxtLink
        to="/portfolio"
        class="text-main-accent hover:text-main-text mb-6 inline-block"
        >&larr; Back to Portfolio</NuxtLink
      >

      <div class="max-w-4xl">
        <div class="bg-main-surface border border-main-border rounded-lg overflow-hidden mb-8">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="w-full" />
        </div>

        <div>
          <p class="text-main-accent text-sm mb-2">{{ project.category }}</p>
          <h1 class="text-4xl font-bold text-main-text mb-4">{{ project.title }}</h1>
          <p class="text-main-muted text-lg mb-6">{{ project.description }}</p>

          <div class="mb-6">
            <h3 class="text-xl font-semibold text-main-text mb-3">Technologies:</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="bg-main-surface border border-main-border px-3 py-1 rounded text-main-accent text-sm">
                {{ tech }}
              </span>
            </div>
          </div>

          <a
            :href="project.link"
            target="_blank"
            class="inline-block bg-main-accent text-main-bg px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            View Live Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
