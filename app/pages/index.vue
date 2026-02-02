<template>
  <div class="bg-main-bg text-main-text min-h-screen">
    <header class="bg-main-surface border-b border-main-border py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-main-accent">Opusable</h1>
        <p class="text-main-muted mt-2">Your tagline goes here</p>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12">
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-main-text mb-4">Welcome to Our Platform</h2>
        <p class="text-main-muted text-lg max-w-2xl">
          This is the main landing page using Palette A (main). Build your features here.
        </p>
      </section>

      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          to="/services"
          class="bg-main-surface border border-main-border rounded-lg p-6 hover:border-main-accent transition">
          <h3 class="text-xl font-semibold text-main-accent mb-2">Services</h3>
          <p class="text-main-muted">Explore our services</p>
        </NuxtLink>

        <NuxtLink
          to="/portfolio"
          class="bg-main-surface border border-main-border rounded-lg p-6 hover:border-main-accent transition">
          <h3 class="text-xl font-semibold text-main-accent mb-2">Portfolio</h3>
          <p class="text-main-muted">View our work</p>
        </NuxtLink>

        <NuxtLink
          to="/blogs"
          class="bg-main-surface border border-main-border rounded-lg p-6 hover:border-main-accent transition">
          <h3 class="text-xl font-semibold text-main-accent mb-2">Blog</h3>
          <p class="text-main-muted">Read our articles</p>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
