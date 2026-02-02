<script setup lang="ts">
const route = useRoute();
const serviceId = route.params.id;

const service = {
  title: "Web Development",
  description: "Custom web applications built with modern technologies like Vue, Nuxt, React, and Node.js",
  price: "$5,000+",
  features: ["Responsive Design", "Modern Tech Stack", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
};
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <NuxtLink
        to="/services"
        class="text-main-accent hover:text-main-text mb-6 inline-block"
        >&larr; Back to Services</NuxtLink
      >

      <div class="bg-main-surface border border-main-border rounded-lg p-8 max-w-3xl">
        <h1 class="text-3xl font-bold text-main-text mb-4">{{ service.title }}</h1>
        <p class="text-main-muted mb-6">{{ service.description }}</p>

        <div class="mb-6">
          <p class="text-2xl font-bold text-main-accent">{{ service.price }}</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-main-text mb-3">Features Included:</h3>
          <ul class="space-y-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center text-main-muted">
              <span class="text-main-accent mr-2">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>

        <button class="mt-8 bg-main-accent text-main-bg px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
