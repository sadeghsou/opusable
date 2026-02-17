<script setup lang="ts">
interface UiIconProps {
  name: string;
  iconClass?: string;
  iconSize?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  color?: string;
  flat?: boolean;
}
const props = withDefaults(defineProps<UiIconProps>(), { iconSize: "xl", iconClass: "", color: "main-accent" });
</script>

<template>
  <div
    class="rounded-md flex items-center"
    :class="{ 'bg-main-border p-2': !flat }">
    <Icon
      :name="name"
      :class="`text-${iconSize} ${iconClass} bg-${color}`" />
  </div>
</template>
