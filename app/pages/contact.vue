<template>
  <div class="min-h-screen pt-24 pb-20">
    <!-- Header -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6">Get In Touch</h1>
        <p class="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-2 leading-relaxed">
          Have a project in mind? Let's discuss how we can help bring your vision to life.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Contact Information</h2>
              <p class="text-sm sm:text-base text-foreground/70 mb-6">Reach out to us through any of these channels</p>
            </div>

            <Card
              v-for="info in contactInfo"
              :key="info.title"
              class="border-border hover:border-accent transition-colors">
              <CardHeader class="pb-3">
                <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon
                    :name="info.icon"
                    class="h-5 w-5 text-accent" />
                </div>
                <CardTitle class="text-base">{{ info.title }}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  :href="info.link"
                  class="text-sm text-foreground/70 hover:text-accent transition-colors break-words">
                  {{ info.value }}
                </a>
              </CardContent>
            </Card>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <Card class="border-border">
              <CardHeader>
                <CardTitle class="text-2xl sm:text-3xl">Send Us a Message</CardTitle>
                <CardDescription class="text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  @submit.prevent="handleSubmit"
                  class="space-y-5 sm:space-y-6">
                  <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div class="space-y-2">
                      <label
                        for="name"
                        class="text-sm font-medium"
                        >Name *</label
                      >
                      <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        required
                        class="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name" />
                    </div>
                    <div class="space-y-2">
                      <label
                        for="email"
                        class="text-sm font-medium"
                        >Email *</label
                      >
                      <input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        required
                        class="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your@email.com" />
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div class="space-y-2">
                      <label
                        for="company"
                        class="text-sm font-medium"
                        >Company</label
                      >
                      <input
                        id="company"
                        v-model="formData.company"
                        type="text"
                        class="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your company name" />
                    </div>
                    <div class="space-y-2">
                      <label
                        for="service"
                        class="text-sm font-medium"
                        >Service Interested In</label
                      >
                      <select
                        id="service"
                        v-model="formData.service"
                        class="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-design">Mobile-First Design</option>
                        <option value="tech-advice">Tech Advice</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label
                      for="message"
                      class="text-sm font-medium"
                      >Message *</label
                    >
                    <textarea
                      id="message"
                      v-model="formData.message"
                      required
                      rows="5"
                      class="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your project..." />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    class="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                    <Icon
                      name="lucide:send"
                      class="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
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

const formData = ref({
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
});

const contactInfo = [
  {
    icon: "lucide:mail",
    title: "Email",
    value: "hello@opusable.com",
    link: "mailto:hello@opusable.com",
  },
  {
    icon: "lucide:phone",
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "lucide:map-pin",
    title: "Office",
    value: "123 Innovation Street, Tech City, TC 12345",
    link: "#",
  },
];

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
  alert("Thank you for your message! We'll get back to you soon.");
  formData.value = {
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  };
};

useHead({
  title: "Contact Us - Opusable",
  meta: [
    {
      name: "description",
      content: "Get in touch with Opusable to discuss your web design and development project.",
    },
  ],
});
</script>
