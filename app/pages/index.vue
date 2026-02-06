<script setup lang="ts"></script>

<template>
  <div class="pages-home flex flex-col gap-8">
    <MainHomeHero class="pages-home__section flex flex-col items-center justify-center gap-4 text-center" />
    <MainHomeServices class="pages-home__section flex flex-col items-center justify-center gap-4 text-center" />
    <MainHomePoints class="pages-home__section" />
    <MainHomeComments class="pages-home__section flex flex-col items-center justify-center gap-4 text-center" />
  </div>
</template>
<style lang="scss" scoped>
.pages-home {
  .pages-home__section {
    @apply min-h-96 text-main-text;
  }
}
</style>
