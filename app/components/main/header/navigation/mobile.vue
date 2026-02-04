<script setup lang="ts">
interface MainHeaderNavigationMobileProps {
  links: HeaderLink[];
}
const props = defineProps<MainHeaderNavigationMobileProps>();

const showMenu = ref(false);
</script>
<template>
  <Icon
    name="solar:hamburger-menu-line-duotone"
    @click="showMenu = true" />
  <div
    class="overlay overflow-hidden fixed inset-0 bg-zinc-950/40 z-40"
    @click="showMenu = false"
    v-if="showMenu"></div>
  <ul
    class="bg-gray-100 fixed -left-full top-0 bottom-0 w-8/12 max-w-80 flex flex-col gap-2 transition-all"
    :class="{ 'left-0 z-50': showMenu }">
    <li
      v-for="link in links"
      :key="`MainHeaderNavigationMobileLink-${link.name}`">
      <NuxtLink
        :to="link.url"
        @click="showMenu = false"
        class="block text-main-surface py-3 px-4 border-b-[1px]"
        active-class="bg-main-border text-main-text"
        >{{ link.labelLocale ? $t(link.labelLocale) : link.label }}</NuxtLink
      >
    </li>
  </ul>
</template>
