<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "~/utils/cn";

interface CardProps {
  class?: string;
}

const props = defineProps<CardProps>();
</script>
