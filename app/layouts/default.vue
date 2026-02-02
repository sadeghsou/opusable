<template>
  <div class="default-layout">
    <nav class="bg-main-surface border-b border-main-border px-4 py-3">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-main-accent"
          >Opusable</NuxtLink
        >
        <div class="flex gap-6">
          <NuxtLink
            to="/services"
            class="text-main-text hover:text-main-accent transition"
            >Services</NuxtLink
          >
          <NuxtLink
            to="/portfolio"
            class="text-main-text hover:text-main-accent transition"
            >Portfolio</NuxtLink
          >
          <NuxtLink
            to="/blogs"
            class="text-main-text hover:text-main-accent transition"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/dashboard"
            class="text-main-text hover:text-main-accent transition"
            >Dashboard</NuxtLink
          >
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
