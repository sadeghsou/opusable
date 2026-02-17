<script setup lang="ts"></script>

<template>
  <section class="mx-auto max-w-4xl py-32">
    <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-main-accent mb-6">{{ $t("homePage.hero.title") }}</h2>
    <p class="text-main-muted text-xl">
      {{ $t("homePage.hero.description") }}
    </p>
    <div class="flex items-center gap-4 text-sm font-semibold mt-4">
      <NuxtLink
        to="/portfolio"
        class="rounded-lg py-2 px-6 ring-1 ring-main-border"
        >{{ $t("homePage.hero.link") }}</NuxtLink
      >
      <NuxtLink
        to="/contact-us"
        class="flex items-center gap-4 bg-main-accent px-4 py-2 rounded-lg text-main-bg">
        <span>{{ $t("homePage.hero.cta") }}</span>
        <Icon name="solar:arrow-right-linear" />
      </NuxtLink>
    </div>
  </section>
</template>
