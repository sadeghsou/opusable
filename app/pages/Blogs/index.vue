<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: "Getting Started with Nuxt 4",
    excerpt: "Learn the basics of Nuxt 4 and its new features",
    date: "2026-01-05",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    excerpt: "Best practices for building scalable web applications",
    date: "2026-01-03",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Modern CSS with Tailwind",
    excerpt: "How to leverage Tailwind CSS for rapid development",
    date: "2025-12-28",
    author: "John Doe",
  },
  {
    id: 4,
    title: "TypeScript Tips & Tricks",
    excerpt: "Advanced TypeScript patterns for better code",
    date: "2025-12-25",
    author: "Jane Smith",
  },
];
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-main-accent mb-4">Blog</h1>
      <p class="text-main-muted mb-12 max-w-2xl">Latest articles and updates</p>

      <div class="max-w-3xl space-y-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/blogs/${post.id}`"
          class="block bg-main-surface border border-main-border rounded-lg p-6 hover:border-main-accent transition">
          <h2 class="text-2xl font-semibold text-main-text mb-2 hover:text-main-accent transition">{{ post.title }}</h2>
          <p class="text-main-muted mb-4">{{ post.excerpt }}</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-main-muted">By {{ post.author }}</span>
            <span class="text-main-accent">{{ post.date }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
