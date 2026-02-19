<template>
  <section class="flex flex-col items-center gap-6 text-center py-20 px-4 sm:px-6 lg:px-8">
    <h2 class="text-6xl font-bold text-main-text">{{ $t("portfolioPage.title") }}</h2>
    <p class="text-main-muted text-xl max-w-3xl mb-8">{{ $t("portfolioPage.description") }}</p>
    <MainPortfolioList />
    <MainPortfolioCounts />
    <div class="text-center py-20">
      <h3 class="text-4xl font-bold">{{ $t("portfolioPage.subtitle") }}</h3>
      <p class="text-xl text-main-muted mt-4 mb-6">{{ $t("portfolioPage.caption") }}</p>
      <NuxtLink
        to="/contact-us"
        class="bg-main-accent text-main-surface rounded px-6 py-3 font-semibold text-sm"
        >{{ $t("portfolioPage.cta") }}</NuxtLink
      >
    </div>
  </section>
</template>
