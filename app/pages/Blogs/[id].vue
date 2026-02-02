<script setup lang="ts">
const route = useRoute();
const postId = route.params.id;

const post = {
  title: "Getting Started with Nuxt 4",
  date: "2026-01-05",
  author: "John Doe",
  content: `
    Nuxt 4 brings exciting new features and improvements to the Vue.js ecosystem. 
    In this article, we'll explore the key features and how to get started.
    
    ## Key Features
    
    - Improved performance with better tree-shaking
    - Enhanced TypeScript support
    - New auto-import system
    - Better dev tools integration
    
    ## Getting Started
    
    To create a new Nuxt 4 project, simply run:
    
    \`\`\`bash
    npx nuxi@latest init my-app
    \`\`\`
    
    This will set up a fresh Nuxt 4 project with all the latest features enabled.
  `,
};
</script>

<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <NuxtLink
        to="/blogs"
        class="text-main-accent hover:text-main-text mb-6 inline-block"
        >&larr; Back to Blog</NuxtLink
      >

      <article class="max-w-3xl">
        <h1 class="text-4xl font-bold text-main-text mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-main-muted mb-8 pb-8 border-b border-main-border">
          <span>By {{ post.author }}</span>
          <span>•</span>
          <span>{{ post.date }}</span>
        </div>

        <div class="prose prose-invert max-w-none">
          <div
            class="text-main-muted leading-relaxed whitespace-pre-line"
            v-html="post.content" />
        </div>

        <div class="mt-12 pt-8 border-t border-main-border">
          <h3 class="text-xl font-semibold text-main-text mb-4">Share this article</h3>
          <div class="flex gap-4">
            <button
              class="bg-main-surface border border-main-border px-4 py-2 rounded hover:border-main-accent transition text-main-text">
              Twitter
            </button>
            <button
              class="bg-main-surface border border-main-border px-4 py-2 rounded hover:border-main-accent transition text-main-text">
              LinkedIn
            </button>
            <button
              class="bg-main-surface border border-main-border px-4 py-2 rounded hover:border-main-accent transition text-main-text">
              Facebook
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
