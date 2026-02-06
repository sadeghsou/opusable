<template>
  <section class="flex flex-col items-center gap-6 text-center py-20 px-4 sm:px-6 lg:px-8">
    <h2 class="text-6xl font-bold text-main-text">{{ $t("servicesPage.title") }}</h2>
    <p class="text-main-muted text-xl max-w-3xl mb-8">{{ $t("servicesPage.description") }}</p>
    <MainServicesList />
    <div class="text-center py-20">
      <h3 class="text-4xl font-bold">{{ $t("servicesPage.subtitle") }}</h3>
      <p class="text-xl text-main-muted mt-4 mb-6">{{ $t("servicesPage.caption") }}</p>
      <NuxtLink
        to="/contact-us"
        class="bg-main-accent text-main-surface rounded px-6 py-3 font-semibold text-sm"
        >{{ $t("servicesPage.cta") }}</NuxtLink
      >
    </div>
  </section>
</template>
