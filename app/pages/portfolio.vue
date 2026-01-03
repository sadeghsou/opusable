<template>
  <div class="min-h-screen pt-24 pb-20">
    <!-- Header -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6">Our Portfolio</h1>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-2 leading-relaxed">
          Explore our latest projects and see how we've helped businesses achieve their digital goals
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card
            v-for="project in projects"
            :key="project.title"
            class="border-border hover:border-accent transition-all overflow-hidden group cursor-pointer">
            <div class="aspect-video overflow-hidden bg-muted">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardHeader>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                  {{ project.category }}
                </span>
                <Icon
                  name="lucide:external-link"
                  class="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <CardTitle class="text-lg sm:text-xl">{{ project.title }}</CardTitle>
              <CardDescription class="text-sm text-foreground/70">
                {{ project.description }}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                  {{ tag }}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Ready to Join Our Success Stories?</h2>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 px-2 leading-relaxed">
          Let's create something amazing together. Contact us to get started on your project.
        </p>
        <Button
          as="a"
          href="/contact"
          size="lg"
          class="bg-accent hover:bg-accent/90 text-accent-foreground">
          Start Your Project
          <Icon
            name="lucide:arrow-right"
            class="ml-2 h-5 w-5" />
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

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    title: "Healthcare Portal",
    category: "Web Design & Development",
    description:
      "Patient management system with appointment scheduling, telemedicine integration, and electronic health records.",
    tags: ["Next.js", "TypeScript", "Tailwind", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Modern analytics dashboard with real-time data visualization and comprehensive reporting tools.",
    tags: ["Figma", "React", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Real Estate Website",
    category: "Web Development",
    description: "Property listing platform with advanced search filters, virtual tours, and mortgage calculators.",
    tags: ["Vue.js", "MongoDB", "Express", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    title: "Restaurant Chain App",
    category: "Mobile & Web",
    description: "Online ordering system with menu management, delivery tracking, and loyalty rewards program.",
    tags: ["React Native", "GraphQL", "Redis", "Stripe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    title: "Educational Platform",
    category: "Web Development",
    description:
      "Learning management system with course creation, student progress tracking, and interactive assessments.",
    tags: ["Django", "React", "WebRTC", "Docker"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
];

useHead({
  title: "Portfolio - Opusable",
  meta: [
    {
      name: "description",
      content: "Explore our successful web design and development projects for businesses across various industries.",
    },
  ],
});
</script>
