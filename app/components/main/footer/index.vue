<script setup lang="ts">
const connectInfos = ref([
  { label: "hello@opusable.com", url: "mailto:hello@opusable.com" },
  { label: "+1 (555) 123-4567", url: "tel:+15551234567" },
]);

const footerSections = ref({
  services: {
    titleLocale: "services",
    links: [
      { labelLocale: "footer.webDesign", url: "/services" },
      { labelLocale: "footer.webDevelopment", url: "/services" },
      { labelLocale: "footer.techAdvice", url: "/services" },
    ],
  },
  company: {
    titleLocale: "company",
    links: [
      { labelLocale: "footer.portfolio", url: "/portfolio" },
      { labelLocale: "footer.blog", url: "/blog" },
      { labelLocale: "footer.process", url: "/process" },
    ],
  },
});
</script>

<template>
  <footer class="ring-1 ring-main-border pt-10 mt-10">
    <section class="container grid grid-cols-1 lg:grid-cols-4 gap-8">
      <section class="flex flex-col gap-4">
        <h5 class="text-main-text font-bold">{{ $t("opusable") }}</h5>
        <p class="text-main-muted text-sm">{{ $t("footer.description") }}</p>
      </section>
      <section
        v-for="(section, sectionName) in footerSections"
        :key="`MainFooterSection-${sectionName}`"
        class="flex flex-col gap-4">
        <h5 class="text-main-text font-bold">{{ $t(section.titleLocale) }}</h5>
        <ul>
          <li
            v-for="link in section.links"
            :key="`MainFooterSection-${sectionName}-Link-${link.labelLocale}`"
            class="text-main-muted">
            <NuxtLink
              :to="link.url"
              class="hover:text-main-accent"
              >{{ $t(link.labelLocale) }}</NuxtLink
            >
          </li>
        </ul>
      </section>
      <section class="flex flex-col gap-4">
        <h5 class="text-main-text font-bold">{{ $t("connect") }}</h5>
        <div class="flex flex-col gap-2">
          <a
            v-for="(info, index) in connectInfos"
            :key="`MainFooterConnectInfo-${index}`"
            class="text-main-muted"
            :href="info.url"
            >{{ info.label }}</a
          >
        </div>
        <NuxtLink
          class="text-main-muted font-bold mt-2"
          to="/contact-us"
          >{{ $t("contactUs") }}</NuxtLink
        >
      </section>
    </section>
    <section class="text-center py-6 ring-1 ring-main-border mt-10">
      <small class="text-main-muted">{{ $t("footer.copyright") }}</small>
    </section>
  </footer>
</template>
