<script setup lang="ts">
interface UiIconProps {
  name: string;
  iconClass?: string;
  iconSize?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}
withDefaults(defineProps<UiIconProps>(), { iconSize: "xl", iconClass: "" });
</script>

<template>
  <div class="rounded-md flex items-center p-2 bg-main-border">
    <Icon
      :name="name"
      :class="`text-${iconSize} ${iconClass}`"
      class="bg-main-accent" />
  </div>
</template>
