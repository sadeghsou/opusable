<template>
  <div class="dashboard-layout bg-dashboard-bg min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-dashboard-surface border-r border-dashboard-border">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-dashboard-accent mb-8">Dashboard</h2>
        <nav class="space-y-2">
          <NuxtLink
            to="/dashboard"
            class="block px-4 py-2 rounded text-dashboard-text hover:bg-dashboard-bg hover:text-dashboard-accent transition">
            Overview
          </NuxtLink>
          <NuxtLink
            to="/"
            class="block px-4 py-2 rounded text-dashboard-muted hover:bg-dashboard-bg hover:text-dashboard-accent transition">
            Back to Site
          </NuxtLink>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
