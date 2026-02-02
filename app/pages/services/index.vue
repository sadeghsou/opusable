<script setup lang="ts">
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    price: "$5,000+",
  },
  { id: 2, title: "Mobile Apps", description: "Native and cross-platform mobile solutions", price: "$10,000+" },
  { id: 3, title: "UI/UX Design", description: "Beautiful and intuitive user interface design", price: "$2,500+" },
  { id: 4, title: "Consulting", description: "Technical consulting and architecture planning", price: "$150/hr" },
];
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-main-accent mb-4">Our Services</h1>
      <p class="text-main-muted mb-12 max-w-2xl">Professional services tailored to your needs</p>

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`/services/${service.id}`"
          class="bg-main-surface border border-main-border rounded-lg p-6 hover:border-main-accent transition">
          <h3 class="text-xl font-semibold text-main-text mb-2">{{ service.title }}</h3>
          <p class="text-main-muted mb-4">{{ service.description }}</p>
          <p class="text-main-accent font-bold">Starting at {{ service.price }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
