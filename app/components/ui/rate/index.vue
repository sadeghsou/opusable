<script setup lang="ts">
interface UiRateProps {
  max?: number;
}
const props = withDefaults(defineProps<UiRateProps>(), { max: 5 });

const rate = defineModel({ required: true, type: Number });
const negativeRate = computed(() => props.max - rate.value);
</script>
<template>
  <div class="flex items-center gap-1">
    <Icon
      name="solar:star-bold"
      class="bg-main-accent"
      v-for="value in rate"
      :key="`RateFill${value}`" />
    <Icon
      name="solar:star-broken"
      class="bg-main-accent"
      v-for="value in negativeRate"
      :key="`RateFill${value}`" />
  </div>
</template>
