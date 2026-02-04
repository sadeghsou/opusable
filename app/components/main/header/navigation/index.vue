<script setup lang="ts">
interface MainHeaderNavigationProps {
  links: HeaderLink[];
}
const props = defineProps<MainHeaderNavigationProps>();
</script>
<template>
  <nav>
    <ul class="flex items-center gap-1">
      <li
        v-for="link in links"
        :key="`MainHeaderLink-${link.name}`"
        class="px-2 py-1">
        <NuxtLink
          :to="link.url"
          class="text-main-muted font-medium hover:text-main-text transition-all"
          active-class="!text-main-accent"
          >{{ link.labelLocale ? $t(link.labelLocale) : link.label }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
