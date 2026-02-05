<script setup lang="ts">
interface UiCardProps {
  icon?: string;
  title: string;
  description: string;
  to?: string;
  moreLocaleLabel?: string;
}

const props = withDefaults(defineProps<UiCardProps>(), { to: "#", moreLocaleLabel: "card.learnMore" });
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex flex-col items-start justify-between text-start min-h-40 gap-6 p-4 border-main-accent/0 border-2 transition-all rounded-lg hover:border-main-accent">
    <div
      v-if="icon"
      class="rounded-md flex items-center p-2 bg-main-border">
      <Icon
        :name="icon"
        class="text-3xl bg-main-accent" />
    </div>
    <p class="flex flex-col items-start gap-4">
      <span class="font-bold text-lg">{{ title }}</span>
      <span class="text-main-muted">{{ description }}</span>
    </p>
    <p class="text-main-accent flex items-center gap-4">
      <span>{{ $t(moreLocaleLabel) }}</span>
      <Icon name="solar:arrow-right-line-duotone" />
    </p>
  </NuxtLink>
</template>
