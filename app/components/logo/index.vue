<script setup lang="ts">
interface LogoProps {
  width?: string | number;
  height?: string | number;
  fit?: "cover" | "contain" | "fill" | "inside" | "outside";
}

const props = withDefaults(defineProps<LogoProps>(), { width: 24, height: 24, fit: "contain" });
</script>
<template>
  <NuxtLink
    to="/"
    class="rounded-full ring-1 ring-main-text/50 p-2 shadow-inner shadow-main-text/50">
    <NuxtImg
      :width="width"
      :height="height"
      :fit="fit"
      alt="Opusable"
      src="/images/opusable-white.png" />
  </NuxtLink>
</template>
