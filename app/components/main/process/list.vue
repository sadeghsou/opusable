<script setup lang="ts">
const processSteps = ref([
  {
    icon: "solar:chat-round-line-line-duotone",
    title: "Contact",
    subtitle: "Reach out to us with your project idea",
    items: [
      "Initial consultation call",
      "Discuss your goals and vision",
      "Understand your requirements",
      "Answer any questions you have",
    ],
  },
  {
    icon: "solar:document-text-line-duotone",
    title: "Brief",
    subtitle: "We dive deep into your requirements",
    items: [
      "Detailed project scope",
      "Timeline and milestones",
      "Budget discussion",
      "Technical requirements gathering",
    ],
  },
  {
    icon: "solar:pallete-2-line-duotone",
    title: "Design Concepts",
    subtitle: "Creative designs tailored to your brand",
    items: [
      "Mood boards and style exploration",
      "Wireframes and mockups",
      "Interactive prototypes",
      "Design revisions and feedback",
    ],
  },
  {
    icon: "solar:code-line-duotone",
    title: "Development",
    subtitle: "Bringing designs to life with code",
    items: ["Frontend development", "Backend integration", "Quality assurance testing", "Performance optimization"],
  },
  {
    icon: "solar:rocket-line-duotone",
    title: "Go Live",
    subtitle: "Launch and beyond",
    items: [
      "Final testing and approval",
      "Domain and hosting setup",
      "Launch and deployment",
      "Ongoing support and maintenance",
    ],
  },
]);
</script>

<template>
  <section class="w-4/5 mx-auto flex flex-col gap-4 my-6">
    <section
      v-for="(step, index) in processSteps"
      :key="`MainProcessStep-${index}`"
      class="ring-1 ring-main-border rounded-lg p-6 flex flex-col items-start gap-4 hover:ring-main-accent transition-colors">
      <section class="flex flex-col md:flex-row items-start gap-6">
        <UiIcon
          :name="step.icon"
          icon-size="4xl" />
        <section class="flex flex-col gap-3 text-start">
          <span class="text-main-accent text-sm font-bold flex items-center gap-3"
            >{{ $t("step") }}{{ index + 1 }}
            <Icon
              name="solar:arrow-right-line-duotone"
              class="bg-main-accent" />
          </span>
          <h5 class="text-2xl text-main-text font-bold">{{ step.title }}</h5>
          <p class="text-sm text-main-muted">{{ step.subtitle }}</p>
        </section>
      </section>
      <ul
        class="grid grid-cols-1 md:grid-cols-2 gap-2 items-start text-start pl-4 md:pl-12 w-full list-disc text-main-accent">
        <li
          v-for="(item, itemIndex) in step.items"
          :key="`MainProcessStep-${index}-Item-${itemIndex}`"
          class="text-sm">
          <span class="text-main-muted">{{ item }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>
