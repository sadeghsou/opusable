<template>
  <div class="min-h-screen pt-24 pb-20">
    <!-- Header -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6">Our Services</h1>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-2 leading-relaxed">
          Comprehensive web solutions designed to elevate your digital presence and drive business growth
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card
            v-for="service in services"
            :key="service.title"
            class="border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon
                  :name="service.icon"
                  class="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <CardTitle class="text-xl sm:text-2xl mb-2">{{ service.title }}</CardTitle>
              <CardDescription class="text-sm sm:text-base text-foreground/70">
                {{ service.description }}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-2 sm:gap-3 text-sm text-foreground/80">
                  <div class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Let's Build Something Amazing Together</h2>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 px-2 leading-relaxed">
          Ready to transform your digital presence? Contact us today to discuss your project.
        </p>
        <Button
          as="a"
          href="/contact"
          size="lg"
          class="bg-accent hover:bg-accent/90 text-accent-foreground">
          Get Started
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

const services = [
  {
    icon: "lucide:palette",
    title: "Web Design",
    description: "Creating stunning, user-centric designs that engage and convert.",
    features: ["UI/UX Design", "Brand Identity", "Responsive Design", "Wireframing & Prototyping"],
  },
  {
    icon: "lucide:code",
    title: "Web Development",
    description: "Building robust, scalable web applications with modern technologies.",
    features: ["Frontend Development", "Backend Development", "API Integration", "E-commerce Solutions"],
  },
  {
    icon: "lucide:smartphone",
    title: "Mobile-First Design",
    description: "Ensuring your website looks perfect on every device.",
    features: ["Responsive Layouts", "Progressive Web Apps", "Mobile Optimization", "Cross-browser Testing"],
  },
  {
    icon: "lucide:lightbulb",
    title: "Tech Advice",
    description: "Strategic technology consulting to guide your digital transformation.",
    features: [
      "Technology Stack Selection",
      "Architecture Planning",
      "Performance Optimization",
      "Security Consulting",
    ],
  },
  {
    icon: "lucide:database",
    title: "Database Solutions",
    description: "Efficient data management and storage solutions for your applications.",
    features: ["Database Design", "Data Migration", "Performance Tuning", "Cloud Database Setup"],
  },
  {
    icon: "lucide:shield",
    title: "Security & Maintenance",
    description: "Keeping your web presence secure and up-to-date.",
    features: ["Security Audits", "Regular Updates", "Backup Solutions", "Performance Monitoring"],
  },
  {
    icon: "lucide:zap",
    title: "Performance Optimization",
    description: "Making your website blazing fast for better user experience.",
    features: ["Speed Optimization", "Code Minification", "CDN Integration", "Image Optimization"],
  },
  {
    icon: "lucide:target",
    title: "SEO & Marketing",
    description: "Improving your online visibility and driving organic traffic.",
    features: ["SEO Optimization", "Analytics Setup", "Content Strategy", "Conversion Optimization"],
  },
];

useHead({
  title: "Our Services - Opusable",
  meta: [
    {
      name: "description",
      content: "Comprehensive web design, development, and technology consulting services to elevate your business.",
    },
  ],
});
</script>
