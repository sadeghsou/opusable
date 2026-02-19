<template>
  <section class="flex flex-col items-center gap-6 text-center py-20 px-4 sm:px-6 lg:px-8">
    <h2 class="text-6xl font-bold text-main-text">{{ $t("blogPage.title") }}</h2>
    <p class="text-main-muted text-xl max-w-3xl mb-8">{{ $t("blogPage.description") }}</p>
    <MainBlogList />
  </section>
</template>
