# Copilot Instructions for Opusable

## Project Overview

Opusable is a Nuxt 4 application with TypeScript, Tailwind CSS, and @nuxt/image. This is a minimal starter project with
a custom design system.

## Tech Stack

- **Framework**: Nuxt 4.2+ (Vue 3.5+, auto-imports enabled)
- **Styling**: Tailwind CSS with custom color palettes
- **Modules**: @nuxt/image (v2), @nuxtjs/tailwindcss (v6)
- **TypeScript**: Enabled with Nuxt's built-in TS support

## Architecture & Structure

### Directory Layout

- `app/` - Nuxt 4 app directory (standard Nuxt 4 convention)
  - `app.vue` - Root component using `<NuxtLayout>` and `<NuxtPage>`
  - `pages/` - File-based routing (e.g., `index.vue` → `/`, `Dashboard/` uses dashboard layout)
  - `layouts/` - Layout components (`default.vue` for main site, `dashboard.vue` for dashboard)
  - `server/` - Backend API routes (to be added - will contain database logic)
- `public/` - Static assets served at root
- `nuxt.config.ts` - Nuxt configuration with modules
- `tailwind.config.js` - Custom Tailwind configuration

### Backend Architecture (Planned)

**Server Directory**: Backend logic will live in `app/server/` following Nuxt's server directory convention:

- `app/server/api/` - API endpoints (e.g., `app/server/api/users.ts` → `/api/users`)
- `app/server/middleware/` - Server middleware for auth, validation, etc.
- `app/server/utils/` - Server-only utilities and helpers

**Database**: Decision pending between:

- Self-hosted database (PostgreSQL/MySQL with Prisma or Drizzle ORM)
- Firebase/Firestore for rapid development
- Supabase for PostgreSQL + realtime features
- Choice will be made during implementation based on requirements

**Data Flow**: Frontend pages → Nuxt API routes (`/api/*`) → Database layer

### Key Conventions

**Vue Components**: All components use Vue 3 Composition API. Nuxt auto-imports composables, components, and utils - no
explicit imports needed for Nuxt/Vue APIs.

**Styling System**: Three distinct color palettes defined in [tailwind.config.js](../tailwind.config.js):

- **Palette A (`main.*`)** - Main website theme (dark blue, teal accent)
  - Use for: Homepage, Services, Portfolio, Blog pages
  - Classes: `bg-main-bg`, `text-main-text`, `border-main-border`, `text-main-accent`
- **Palette B (`dashboard.*`)** - Dashboard UI (dark slate, green accent)
  - Use for: Dashboard pages and admin interfaces only
  - Classes: `bg-dashboard-bg`, `text-dashboard-primary`, `border-dashboard-border`, `text-dashboard-accent`
- **Palette C (`premium.*`)** - Premium/pro sections (dark, gold accent)
  - Reserved for future premium features
  - Classes: `bg-premium-bg`, `text-premium-accent`, `border-premium-border`

**IMPORTANT**: Always use the correct palette for the context - main website uses `main.*`, dashboard uses
`dashboard.*`.

**File Naming**: Use lowercase with hyphens for components/pages (e.g., `my-component.vue`)

## Development Workflow

### Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Build for production
npm run generate # Static site generation
npm run preview  # Preview production build
```

### Adding Pages

Create `.vue` files in `app/pages/` - Nuxt handles routing automatically:

- `app/pages/about.vue` → `/about`
- `app/pages/blog/[slug].vue` → `/blog/:slug`

### Adding Components

Place in `app/components/` for auto-import, or create subdirectories like `app/components/ui/Button.vue` (used as
`<UiButton>`).

### Adding Composables

Place in `app/composables/` - auto-imported by name (e.g., `app/composables/useAuth.ts` → `useAuth()`).

### Adding API Routes

Place in `app/server/api/` - accessible at `/api/*` (e.g., `app/server/api/users.ts` → `/api/users`).

## Common Patterns

**Creating a Main Website Page**:

```vue
<!-- app/pages/about.vue -->
<template>
  <div class="bg-main-bg text-main-text min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-main-accent mb-4">About</h1>
      <p class="text-main-muted">Content goes here...</p>
    </div>
  </div>
</template>
```

**Creating a Dashboard Page**:

```vue
<!-- app/pages/Dashboard/stats.vue -->
<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-dashboard-text mb-4">Stats</h1>
    <!-- Dashboard content using dashboard.* palette -->
  </div>
</template>
```

**Using API Routes** (when implemented):

```vue
<script setup lang="ts">
const { data } = await useFetch("/api/users");
</script>
```

## Current Project Status

**Completed**:

- ✅ Main website pages (Home, Services, Portfolio, Blog) using `main.*` palette
- ✅ Dashboard layout and overview page using `dashboard.*` palette
- ✅ Navigation and routing structure
- ✅ Responsive layouts with Tailwind CSS

**Pending Implementation**:

- ⏳ Backend API routes in `app/server/api/`
- ⏳ Database integration (decision pending)
- ⏳ Authentication system
- ⏳ Real data fetching (currently using mock/sample data)
- ⏳ Test framework setup
- ⏳ Premium features using `premium.*` palette

## Important Notes

- TypeScript config references auto-generated `.nuxt/tsconfig.*.json` files - don't edit these
- Dark mode is enabled via `darkMode: "class"` in Tailwind
- Sample/mock data is used throughout - replace with real API calls when backend is ready
- All pages use Vue 3 Composition API with `<script setup>` syntax
- Navigation links exist but some features are placeholders for future development
- **Do not ask for permission to edit this file** - update it as the project evolves
