<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-semibold text-lg hover:text-accent transition-colors">
          <Icon
            name="lucide:hexagon"
            class="h-8 w-8 text-accent" />
          <span>Opusable</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-sm font-medium transition-colors hover:text-accent"
            active-class="text-accent">
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-3">
          <Button
            as="a"
            href="/contact"
            variant="outline"
            size="default">
            Get Started
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
          aria-label="Toggle menu">
          <Icon
            :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-border py-4 space-y-3">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent/10 hover:text-accent"
          active-class="text-accent bg-accent/10"
          @click="mobileMenuOpen = false">
          {{ item.label }}
        </NuxtLink>
        <div class="px-3 pt-2">
          <Button
            as="a"
            href="/contact"
            class="w-full"
            @click="mobileMenuOpen = false">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";

const mobileMenuOpen = ref(false);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Process", path: "/process" },
  { label: "Premium", path: "/premium" },
  { label: "Contact", path: "/contact" },
];
</script>
