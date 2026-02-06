<script setup lang="ts">
interface ContactUsForm {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormField {
  labelLocale: string;
  placeHolderLocale: string;
  placeHolder?: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  options?: { labelLocale: string; value: string }[];
}

const contactInformations = ref([
  { icon: "solar:letter-linear", title: "Email", text: "hello@opusable.com", url: "mailto:hello@opusable.com" },
  { icon: "solar:phone-linear", title: "Phone", text: "+1 (555) 123-4567", url: "tel:+15551234567" },
  {
    icon: "solar:map-point-linear",
    title: "Office",
    text: "123 Innovation Street, Tech City, TC 12345",
    url: "https://sable-photo-70374814.figma.site/#",
  },
]);

const officeHours = ref([
  { daysLocales: ["weekDays.monday", "weekDays.friday"], hours: "9:00 AM - 6:00 PM" },
  { daysLocales: ["weekDays.saturday"], hours: "10:00 AM - 4:00 PM" },
  { daysLocales: ["weekDays.sunday"], hoursLocale: "closed" },
]);

const formFields = ref<Record<keyof ContactUsForm, FormField>>({
  fullName: {
    labelLocale: "contactUsPage.form.fullName.label",
    placeHolderLocale: "contactUsPage.form.fullName.placeHolder",
    type: "text",
    required: true,
  },
  email: {
    labelLocale: "contactUsPage.form.email.label",
    placeHolderLocale: "",
    placeHolder: "john@example.com",
    type: "email",
    required: true,
  },
  company: {
    labelLocale: "contactUsPage.form.company.label",
    placeHolderLocale: "contactUsPage.form.company.placeHolder",
    type: "text",
    required: true,
  },
  service: {
    labelLocale: "contactUsPage.form.serviceInterestedIn.label",
    placeHolderLocale: "contactUsPage.form.serviceInterestedIn.placeHolder",
    type: "select",
    options: [
      { labelLocale: "contactUsPage.form.services.selectAService", value: "Select a service" },
      { labelLocale: "contactUsPage.form.services.webDesign", value: "Web Design" },
      { labelLocale: "contactUsPage.form.services.webDevelopment", value: "Web Development" },
      { labelLocale: "contactUsPage.form.services.techAdvice", value: "Tech Advice" },
      { labelLocale: "contactUsPage.form.services.mobileDesign", value: "Mobile Design" },
      { labelLocale: "contactUsPage.form.services.other", value: "Other" },
    ],
  },
  message: {
    labelLocale: "contactUsPage.form.message.label",
    placeHolderLocale: "contactUsPage.form.message.placeHolder",
    type: "textarea",
    required: true,
  },
});

const contactUsForm = ref<ContactUsForm>({
  fullName: "",
  email: "",
  company: "",
  service: formFields.value.service.options?.[0]?.value || "",
  message: "",
});
</script>

<template>
  <section class="text-center py-20 px-4 sm:px-6 lg:px-8">
    <h2 class="text-6xl font-bold text-main-text mb-6">{{ $t("contactUsPage.title") }}</h2>
    <p class="text-main-muted text-xl">{{ $t("contactUsPage.description") }}</p>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start">
    <section class="flex flex-col gap-4 mb-8 lg:mb-0">
      <h3 class="text-2xl font-bold text-main-text">{{ $t("contactUsPage.information.title") }}</h3>
      <p class="text-main-muted text-md">{{ $t("contactUsPage.information.description") }}</p>
      <NuxtLink
        v-for="(info, index) in contactInformations"
        :key="`HomePageServices-${index}`"
        :to="info.url"
        class="flex flex-col items-start justify-between text-start min-h-40 gap-6 p-4 bg-main-surface ring-1 ring-main-border transition-all rounded-lg hover:ring-main-accent">
        <UiIcon :name="info.icon" />
        <p class="flex flex-col items-start gap-4">
          <span class="font-bold text-lg">{{ info.title }}</span>
          <span class="text-main-muted">{{ info.text }}</span>
        </p>
      </NuxtLink>
      <div class="rounded bg-main-accent/5 ring-1 ring-main-border flex flex-col gap-2 p-4">
        <h3 class="font-bold text-main-text text-lg mb-4">{{ $t("contactUsPage.information.officeHours") }}</h3>
        <div
          v-for="(hour, index) in officeHours"
          :key="`ContactUsInformationOfficeHours${index}`"
          class="flex items-center justify-between">
          <span class="text-main-muted text-sm">{{ hour.daysLocales.map($t).join(" - ") }}</span>
          <span class="text-sm">{{ hour.hoursLocale ? $t(hour.hoursLocale) : hour.hours }}</span>
        </div>
      </div>
    </section>
    <section class="col-span-2 bg-main-surface rounded-lg p-6 ring-1 ring-main-border flex flex-col gap-4">
      <h3 class="text-2xl font-bold text-main-text mb-1.5">{{ $t("contactUsPage.form.title") }}</h3>
      <p class="text-main-muted text-md">{{ $t("contactUsPage.form.description") }}</p>
      <form
        class="grid grid-cols-1 lg:grid-cols-2 gap-4"
        method="POST">
        <label
          v-for="(field, fieldName) in formFields"
          :key="`ContactUsFormSelect-${fieldName}`"
          class="flex flex-col gap-2 items-start"
          :class="{ 'lg:col-span-2': field.type === 'textarea' }">
          <span class="text-sm font-semibold">{{ $t(field.labelLocale) }} <span v-if="field.required">*</span></span>
          <textarea
            v-if="field.type === 'textarea'"
            class="bg-main-surface text-main-text rounded ring-1 ring-main-border w-full px-4 py-2 text-sm outline-none focus-within:ring-main-accent transition-colors"
            :name="fieldName"
            v-model="contactUsForm[fieldName]"
            :placeholder="$t(field.placeHolderLocale)"
            :required="field.required" />
          <select
            v-else-if="field.type === 'select'"
            class="bg-main-surface text-main-text rounded ring-1 ring-main-border w-full px-4 py-2 text-sm outline-none focus-within:ring-main-accent transition-colors"
            :name="fieldName"
            v-model="contactUsForm[fieldName]">
            <option
              v-for="(option, index) in field.options"
              :key="`ContactUsFormSelect-${fieldName}-Option-${index}`"
              :selected="index === 0"
              :disabled="index === 0"
              :value="option.value">
              {{ $t(option.labelLocale) }}
            </option>
          </select>
          <input
            v-else
            class="bg-main-surface text-main-text rounded ring-1 ring-main-border w-full px-4 py-2 text-sm outline-none focus-within:ring-main-accent transition-colors"
            :name="fieldName"
            :type="field.type"
            v-model="contactUsForm[fieldName]"
            :placeholder="field.placeHolderLocale ? $t(field.placeHolderLocale) : field.placeHolder"
            :required="field.required" />
        </label>
        <button
          class="bg-main-accent text-main-surface flex items-center justify-center gap-2 lg:col-span-2 p-2 rounded">
          <Icon
            name="solar:map-arrow-left-bold-duotone"
            class="text-lg" />
          <span>{{ $t("contactUsPage.form.submit") }}</span>
        </button>
      </form>
    </section>
  </section>
</template>
