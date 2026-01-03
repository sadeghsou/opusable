<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 text-foreground leading-tight">
            Build Something Opusable
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 px-2 leading-relaxed">
            We craft exceptional digital experiences that drive results. From concept to launch, we're your partner in
            building remarkable web solutions.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              as="a"
              href="/contact"
              size="lg"
              class="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Project
              <Icon
                name="lucide:arrow-right"
                class="ml-2 h-5 w-5" />
            </Button>
            <Button
              as="a"
              href="/portfolio"
              size="lg"
              variant="outline"
              class="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p class="text-base sm:text-lg md:text-xl text-foreground/70">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            to="/services"
            class="group">
            <Card class="border-border hover:border-accent transition-all h-full">
              <CardHeader>
                <div
                  class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon
                    :name="service.icon"
                    class="h-6 w-6 text-accent" />
                </div>
                <CardTitle class="text-xl sm:text-2xl mb-2">{{ service.title }}</CardTitle>
                <CardDescription class="text-sm sm:text-base text-foreground/60">
                  {{ service.description }}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span class="text-accent hover:text-accent/80 flex items-center gap-2 text-sm font-medium">
                  Learn more
                  <Icon
                    name="lucide:arrow-right"
                    class="h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Why Choose Opusable?</h2>
            <p class="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              We combine creativity, technical expertise, and strategic thinking to deliver solutions that exceed
              expectations.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                v-for="feature in features"
                :key="feature"
                class="flex items-center gap-2 sm:gap-3">
                <Icon
                  name="lucide:check-circle"
                  class="h-5 w-5 text-accent flex-shrink-0" />
                <span class="text-sm sm:text-base text-foreground/90">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Card class="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/50">
              <CardHeader>
                <CardTitle class="text-3xl sm:text-4xl">50+</CardTitle>
                <CardDescription class="text-sm">Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card class="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
              <CardHeader>
                <CardTitle class="text-3xl sm:text-4xl">100%</CardTitle>
                <CardDescription class="text-sm">Client Satisfaction</CardDescription>
              </CardHeader>
            </Card>
            <Card class="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/50">
              <CardHeader>
                <CardTitle class="text-3xl sm:text-4xl">5+</CardTitle>
                <CardDescription class="text-sm">Years Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card class="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
              <CardHeader>
                <CardTitle class="text-3xl sm:text-4xl">24/7</CardTitle>
                <CardDescription class="text-sm">Support Available</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
          <p class="text-base sm:text-lg md:text-xl text-foreground/70">Don't just take our word for it</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="border-border">
            <CardHeader>
              <div class="flex gap-1 mb-4">
                <Icon
                  v-for="i in testimonial.rating"
                  :key="i"
                  name="lucide:star"
                  class="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
              </div>
              <CardDescription class="text-sm sm:text-base text-foreground/70">
                "{{ testimonial.content }}"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p class="font-semibold text-sm sm:text-base">{{ testimonial.name }}</p>
              <p class="text-xs sm:text-sm text-muted-foreground">{{ testimonial.role }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Ready to Start Your Project?</h2>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 px-2 leading-relaxed">
          Let's bring your vision to life. Get in touch today and let's discuss how we can help.
        </p>
        <Button
          as="a"
          href="/contact"
          size="lg"
          class="bg-accent hover:bg-accent/90 text-accent-foreground">
          Get Started Now
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

const services = [
  {
    icon: "lucide:palette",
    title: "Web Design",
    description: "Beautiful, modern designs that captivate your audience and enhance user experience.",
  },
  {
    icon: "lucide:code",
    title: "Web Development",
    description: "Robust, scalable solutions built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: "lucide:lightbulb",
    title: "Tech Advice",
    description: "Strategic guidance to help you make informed decisions about your technology stack.",
  },
];

const features = [
  "Custom tailored solutions",
  "Responsive & mobile-first",
  "SEO optimized",
  "Fast performance",
  "Ongoing support",
  "Scalable architecture",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Opusable transformed our online presence. The team's expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignCo",
    content: "Working with Opusable was a game-changer. They delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, InnovateLabs",
    content: "Professional, creative, and results-driven. Highly recommend Opusable for any web project.",
    rating: 5,
  },
];

useHead({
  title: "Opusable - More Customers, Less Hassle",
  meta: [
    {
      name: "description",
      content:
        "Opusable makes your business online, usable, and profitable—without compromising creativity or quality.",
    },
  ],
});
</script>
