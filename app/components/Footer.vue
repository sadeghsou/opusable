<template>
  <footer class="border-t border-border bg-card/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <Icon
              name="lucide:hexagon"
              class="h-7 w-7 text-accent" />
            <h3 class="font-semibold text-lg">Opusable</h3>
          </div>
          <p class="text-sm text-muted-foreground mb-2">More Customers, Less Hassle</p>
          <p class="text-xs text-muted-foreground leading-relaxed">
            Opusable makes your business online, usable, and profitable—without compromising creativity or quality.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Services</h4>
          <ul class="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-accent transition-colors">
                Web Design
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-accent transition-colors">
                Web Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-accent transition-colors">
                Online Booking Systems
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-accent transition-colors">
                Menu & Catalog Design
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Company</h4>
          <ul class="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <NuxtLink
                to="/portfolio"
                class="hover:text-accent transition-colors">
                Portfolio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/process"
                class="hover:text-accent transition-colors">
                Our Process
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="hover:text-accent transition-colors">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Get In Touch</h4>
          <ul class="space-y-2.5 text-sm text-muted-foreground">
            <li class="flex items-start gap-2">
              <Icon
                name="lucide:mail"
                class="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a
                href="mailto:hello@opusable.com"
                class="hover:text-accent transition-colors">
                hello@opusable.com
              </a>
            </li>
            <li class="flex items-start gap-2">
              <Icon
                name="lucide:phone"
                class="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a
                href="tel:+15551234567"
                class="hover:text-accent transition-colors">
                +1 (555) 123-4567
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-muted-foreground text-center sm:text-left">
          © {{ new Date().getFullYear() }} Opusable. All rights reserved.
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            class="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Twitter">
            <Icon
              name="lucide:twitter"
              class="h-5 w-5" />
          </a>
          <a
            href="#"
            class="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn">
            <Icon
              name="lucide:linkedin"
              class="h-5 w-5" />
          </a>
          <a
            href="#"
            class="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub">
            <Icon
              name="lucide:github"
              class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
