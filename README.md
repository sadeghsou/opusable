# Opusable Web App

A modern, server-side rendered web application built with Nuxt 3 and Tailwind CSS for Opusable - your partner in digital
solutions.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Fast initial page loads and SEO-friendly
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Modern UI** - Built with Tailwind CSS and custom design system
- **Improved Accessibility** - Better text contrast and mobile-friendly sizing
- **Performance Optimized** - Fast page transitions and optimized assets

## 📋 Pages

- **Home** (`/`) - Hero section with services overview, features, and testimonials
- **Services** (`/services`) - Comprehensive list of all services offered
- **Portfolio** (`/portfolio`) - Showcase of completed projects
- **Process** (`/process`) - Step-by-step breakdown of the project workflow
- **Contact** (`/contact`) - Contact form and company information

## 🎨 Brand Identity

### Tagline

**"More Customers, Less Hassle"**

### Mission Statement

_"Opusable makes your business online, usable, and profitable—without compromising creativity or quality."_

### Color Palette

The app uses a carefully designed dark theme with teal accent colors:

- Background: Dark blue (`#0F172A`)
- Accent: Teal (`#2DD4BF`)
- Text: Light gray with improved contrast ratios

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (v4.2.2)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`
- **Icons**: [Lucide Icons](https://lucide.dev/) via `lucide-vue-next` and `@nuxt/icon`
- **Image Optimization**: `@nuxt/image`
- **Type Safety**: TypeScript
- **UI Components**: Custom Vue components with `class-variance-authority`

## 📦 Setup

Make sure to install dependencies:

```bash
npm install
```

## 🌐 Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## 🏗️ Build for Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Generate static site:

```bash
npm run generate
```

## 📁 Project Structure

```
opusable/
├── app/
│   └── app.vue              # Root application component
├── assets/
│   └── css/
│       └── tailwind.css     # Tailwind configuration and custom styles
├── components/
│   ├── Navigation.vue       # Header navigation with mobile menu
│   ├── Footer.vue           # Footer with links and contact info
│   └── ui/                  # Reusable UI components
│       ├── Button.vue
│       ├── Card.vue
│       └── ...
├── layouts/
│   └── default.vue          # Default layout wrapper
├── pages/
│   ├── index.vue            # Home page
│   ├── services.vue         # Services page
│   ├── portfolio.vue        # Portfolio page
│   ├── process.vue          # Process page
│   └── contact.vue          # Contact page
├── utils/
│   └── cn.ts                # Utility for merging Tailwind classes
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Key Improvements from React Version

### Mobile Responsiveness

- Reduced font sizes on mobile with responsive breakpoints
- Better spacing with responsive padding/margins
- Improved touch targets for mobile users
- Mobile-friendly navigation menu with hamburger

### Text Contrast

- Improved text readability with `text-foreground/70` and `text-foreground/80`
- Better contrast ratios for accessibility
- Enhanced visual hierarchy

### SSR Benefits

- Faster initial page loads
- Better SEO with server-rendered content
- Improved performance metrics
- Social media preview support

## 📱 Contact Form

The contact form includes:

- Name and email (required fields)
- Company name (optional)
- Service selection dropdown
- Message textarea with validation
- Success feedback on submission

## 🚀 Deployment

### Static Generation (Recommended)

```bash
npm run generate
```

Deploy the `.output/public` directory to any static hosting (Vercel, Netlify, Cloudflare Pages).

### Server Deployment

```bash
npm run build
```

Deploy the `.output` directory to Node.js hosting platforms.

## 👥 Target Audience

Small businesses, pubs, restaurants, and local establishments looking to:

- Get online quickly and affordably
- Increase customer bookings and orders
- Showcase their menu, services, and brand
- Improve online visibility and reach

---

**Built with ❤️ for business owners who want results**
