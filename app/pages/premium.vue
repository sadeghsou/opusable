<template>
  <div class="min-h-screen pt-24 pb-20 theme-premium">
    <!-- Header -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <Icon
            name="lucide:crown"
            class="h-4 w-4 text-accent" />
          <span class="text-sm text-accent">Premium Plans</span>
        </div>
        <h1
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
          Elevate Your Experience
        </h1>
        <p class="text-xl text-foreground/70 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core features with flexible options to scale.
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <Card
            v-for="(plan, index) in plans"
            :key="index"
            :class="[
              'relative border-border',
              plan.popular ? 'border-accent shadow-lg shadow-accent/20 scale-105' : '',
            ]">
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                class="inline-flex items-center px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader class="text-center pb-8 pt-8">
              <Icon
                v-if="plan.isPremium"
                name="lucide:crown"
                class="h-8 w-8 text-accent mx-auto mb-4" />
              <CardTitle class="text-2xl mb-2">{{ plan.name }}</CardTitle>
              <CardDescription class="mb-4">{{ plan.description }}</CardDescription>
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-4xl font-bold">{{ plan.price }}</span>
                <span class="text-foreground/60">{{ plan.period }}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul class="space-y-3 mb-8">
                <li
                  v-for="(feature, idx) in plan.features"
                  :key="idx"
                  class="flex items-start gap-2">
                  <Icon
                    name="lucide:check"
                    class="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>
              <Button
                as="a"
                href="/contact"
                :class="['w-full', plan.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : '']"
                :variant="plan.popular ? 'default' : 'outline'">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Premium Features -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Premium Benefits</h2>
          <p class="text-xl text-foreground/70">Unlock the full potential of your projects</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            v-for="(feature, index) in premiumFeatures"
            :key="index"
            class="border-border text-center">
            <CardHeader>
              <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon
                  :name="feature.icon"
                  class="h-7 w-7 text-accent" />
              </div>
              <CardTitle class="text-lg">{{ feature.title }}</CardTitle>
              <CardDescription>{{ feature.description }}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Compare Plans</h2>
        </div>

        <Card class="border-border overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-card/50">
                <tr class="border-b border-border">
                  <th class="text-left p-4 font-semibold">Features</th>
                  <th class="text-center p-4 font-semibold">Starter</th>
                  <th class="text-center p-4 font-semibold bg-accent/5">Professional</th>
                  <th class="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr
                  v-for="(row, idx) in comparisonData"
                  :key="idx">
                  <td class="p-4 font-medium">{{ row.feature }}</td>
                  <td class="p-4 text-center text-foreground/60">{{ row.starter }}</td>
                  <td class="p-4 text-center bg-accent/5 text-accent font-medium">{{ row.professional }}</td>
                  <td class="p-4 text-center text-foreground/60">{{ row.enterprise }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Go Premium?</h2>
        <p class="text-xl text-foreground/70 mb-8">
          Join hundreds of satisfied customers who've elevated their projects
        </p>
        <Button
          as="a"
          href="/contact"
          size="lg"
          class="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Icon
            name="lucide:crown"
            class="mr-2 h-5 w-5" />
          Upgrade Now
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Card from "~/components/ui/Card.vue";
import CardHeader from "~/components/ui/CardHeader.vue";
import CardTitle from "~/components/ui/CardTitle.vue";
import CardDescription from "~/components/ui/CardDescription.vue";
import CardContent from "~/components/ui/CardContent.vue";
import Button from "~/components/ui/Button.vue";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small projects and startups",
    features: ["Up to 3 projects", "Basic support", "Standard hosting", "Monthly updates", "Community access"],
    isPremium: false,
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 projects",
      "Priority support",
      "Premium hosting",
      "Weekly updates",
      "Advanced analytics",
      "Custom integrations",
      "SEO optimization",
    ],
    isPremium: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/month",
    description: "For large-scale operations",
    features: [
      "Unlimited projects",
      "24/7 dedicated support",
      "Enterprise hosting",
      "Daily updates",
      "Full analytics suite",
      "Custom development",
      "White-label solutions",
      "SLA guarantee",
    ],
    isPremium: true,
    popular: false,
  },
];

const premiumFeatures = [
  {
    icon: "lucide:zap",
    title: "Lightning Fast Performance",
    description: "Optimized infrastructure ensuring blazing-fast load times",
  },
  {
    icon: "lucide:shield",
    title: "Enterprise Security",
    description: "Bank-level security with SSL, DDoS protection, and backups",
  },
  {
    icon: "lucide:star",
    title: "Premium Support",
    description: "Dedicated account manager and priority response times",
  },
  {
    icon: "lucide:crown",
    title: "Exclusive Features",
    description: "Access to advanced tools and early beta features",
  },
];

const comparisonData = [
  { feature: "Projects", starter: "3", professional: "10", enterprise: "Unlimited" },
  { feature: "Support", starter: "Basic", professional: "Priority", enterprise: "24/7 Dedicated" },
  { feature: "Hosting", starter: "Standard", professional: "Premium", enterprise: "Enterprise" },
  { feature: "Updates", starter: "Monthly", professional: "Weekly", enterprise: "Daily" },
  { feature: "Analytics", starter: "-", professional: "✓", enterprise: "✓" },
  { feature: "Custom Dev", starter: "-", professional: "-", enterprise: "✓" },
];
</script>
