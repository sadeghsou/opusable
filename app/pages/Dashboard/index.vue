<script setup lang="ts">
definePageMeta({ layout: "dashboard" });

const stats = [
  { label: "Total Users", value: "2,543", change: "+12%" },
  { label: "Revenue", value: "$45,231", change: "+8%" },
  { label: "Active Projects", value: "32", change: "+5%" },
  { label: "Completed", value: "128", change: "+23%" },
];
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-dashboard-text mb-2">Dashboard Overview</h1>
    <p class="text-dashboard-muted mb-8">Welcome back! Here's what's happening.</p>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-dashboard-surface border border-dashboard-border rounded-lg p-6">
        <p class="text-dashboard-muted text-sm mb-1">{{ stat.label }}</p>
        <p class="text-2xl font-bold text-dashboard-text mb-1">{{ stat.value }}</p>
        <p class="text-dashboard-primary text-sm">{{ stat.change }}</p>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-dashboard-surface border border-dashboard-border rounded-lg p-6">
      <h2 class="text-xl font-semibold text-dashboard-text mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-dashboard-border pb-3">
          <div>
            <p class="text-dashboard-text font-medium">New user registration</p>
            <p class="text-dashboard-muted text-sm">5 minutes ago</p>
          </div>
          <span class="text-dashboard-accent text-sm">Success</span>
        </div>
        <div class="flex items-center justify-between border-b border-dashboard-border pb-3">
          <div>
            <p class="text-dashboard-text font-medium">Project updated</p>
            <p class="text-dashboard-muted text-sm">1 hour ago</p>
          </div>
          <span class="text-dashboard-accent text-sm">Success</span>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-dashboard-text font-medium">Payment received</p>
            <p class="text-dashboard-muted text-sm">3 hours ago</p>
          </div>
          <span class="text-dashboard-accent text-sm">Success</span>
        </div>
      </div>
    </div>
  </div>
</template>
