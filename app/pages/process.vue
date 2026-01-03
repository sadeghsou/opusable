<template>
  <div class="min-h-screen pt-24 pb-20">
    <!-- Header -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6">Our Process</h1>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-2 leading-relaxed">
          A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations
        </p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
      <div class="max-w-5xl mx-auto">
        <div class="space-y-6 sm:space-y-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative">
            <!-- Connection Line -->
            <div
              v-if="index < steps.length - 1"
              class="absolute left-7 top-20 bottom-0 w-0.5 bg-border hidden md:block" />

            <Card class="border-border hover:border-accent transition-all relative">
              <CardHeader>
                <div class="flex items-start gap-4 sm:gap-6">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <Icon
                      :name="step.icon"
                      class="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 sm:gap-3 mb-2">
                      <span class="text-xs sm:text-sm font-semibold text-accent"> Step {{ index + 1 }} </span>
                      <Icon
                        name="lucide:arrow-right"
                        class="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                    </div>
                    <CardTitle class="text-xl sm:text-2xl mb-2">{{ step.title }}</CardTitle>
                    <CardDescription class="text-sm sm:text-base text-foreground/70">
                      {{ step.description }}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent class="pl-16 sm:pl-20">
                <ul class="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  <li
                    v-for="detail in step.details"
                    :key="detail"
                    class="flex items-center gap-2 text-sm text-foreground/70">
                    <div class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {{ detail }}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Typical Timeline</h2>
          <p class="text-base sm:text-lg md:text-xl text-foreground/70">
            Every project is unique, but here's a general timeline
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <Card
            v-for="phase in timeline"
            :key="phase.week"
            :class="phase.class"
            class="text-center">
            <CardHeader class="py-4 sm:py-6">
              <CardTitle class="text-base sm:text-lg mb-1">{{ phase.week }}</CardTitle>
              <CardDescription class="text-xs sm:text-sm">{{ phase.phase }}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Ready to Get Started?</h2>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 px-2 leading-relaxed">
          Let's begin your journey to a remarkable web presence
        </p>
        <Button
          as="a"
          href="/contact"
          size="lg"
          class="bg-accent hover:bg-accent/90 text-accent-foreground">
          Start Your Project
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import Card from "~/components/ui/Card.vue";
import CardHeader from "~/components/ui/CardHeader.vue";
import CardTitle from "~/components/ui/CardTitle.vue";
import CardDescription from "~/components/ui/CardDescription.vue";
import CardContent from "~/components/ui/CardContent.vue";

const steps = [
  {
    icon: "lucide:message-square",
    title: "Contact",
    description: "Reach out to us with your project idea",
    details: [
      "Initial consultation call",
      "Discuss your goals and vision",
      "Understand your requirements",
      "Answer any questions you have",
    ],
  },
  {
    icon: "lucide:file-text",
    title: "Brief",
    description: "We dive deep into your requirements",
    details: [
      "Detailed project scope",
      "Timeline and milestones",
      "Budget discussion",
      "Technical requirements gathering",
    ],
  },
  {
    icon: "lucide:palette",
    title: "Design Concepts",
    description: "Creative designs tailored to your brand",
    details: [
      "Mood boards and style exploration",
      "Wireframes and mockups",
      "Interactive prototypes",
      "Design revisions and feedback",
    ],
  },
  {
    icon: "lucide:code",
    title: "Development",
    description: "Bringing designs to life with code",
    details: ["Frontend development", "Backend integration", "Quality assurance testing", "Performance optimization"],
  },
  {
    icon: "lucide:rocket",
    title: "Go Live",
    description: "Launch and beyond",
    details: [
      "Final testing and approval",
      "Domain and hosting setup",
      "Launch and deployment",
      "Ongoing support and maintenance",
    ],
  },
];

const timeline = [
  { week: "Week 1", phase: "Contact & Brief", class: "border-accent/50 bg-accent/5" },
  { week: "Week 2-3", phase: "Design Concepts", class: "border-primary/50 bg-primary/5" },
  { week: "Week 4-6", phase: "Development", class: "border-accent/50 bg-accent/5" },
  { week: "Week 7", phase: "Testing & QA", class: "border-primary/50 bg-primary/5" },
  { week: "Week 8", phase: "Go Live", class: "border-accent/50 bg-accent/5" },
];

useHead({
  title: "Our Process - Opusable",
  meta: [
    {
      name: "description",
      content: "Learn about our proven web development process from initial contact to launch and ongoing support.",
    },
  ],
});
</script>
