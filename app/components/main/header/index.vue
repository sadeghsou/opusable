<script setup lang="ts">
import { HEADER_LINKS } from "~/contants/main";

const { isMobile } = useDevice();

const headerLinks = ref<HeaderLink[]>(HEADER_LINKS);
</script>
<template>
  <header class="py-2 border-b-2 border-b-main-border">
    <div class="container flex items-center justify-between">
      <MainHeaderNavigationMobile
        v-if="isMobile"
        :links="headerLinks" />
      <Logo />
      <MainHeaderNavigation
        v-if="!isMobile"
        :links="headerLinks" />
    </div>
  </header>
</template>
