# Architecture

## Overview

This is a single-page portfolio site built with Astro as the static site generator, with React components hydrated on the client for interactive and animated sections.

```
┌─────────────────────────────────────────────┐
│                Astro (SSG)                   │
│  ┌─────────────────────────────────────────┐ │
│  │  Layout.astro (HTML shell, dark mode)   │ │
│  │  ┌───────────────────────────────────┐  │ │
│  │  │  index.astro (all sections)       │  │ │
│  │  │  ┌─────────────────────────────┐  │  │ │
│  │  │  │  Hero (Vortex + TextGen)    │  │  │ │
│  │  │  │  About (ParallaxSection)    │  │  │ │
│  │  │  │  TechCards (grid + expand)  │  │  │ │
│  │  │  │  Technologies (WobbleCards) │  │  │ │
│  │  │  │  Portfolio (ProjectCards)   │  │  │ │
│  │  │  │  Contact (form + links)     │  │  │ │
│  │  │  └─────────────────────────────┘  │  │ │
│  │  └───────────────────────────────────┘  │ │
│  └─────────────────────────────────────────┘ │
│         React 18 (client:only hydration)     │
│         Tailwind CSS 3 (utility-first)       │
│         Framer Motion (animations)           │
│         Canvas/WebGL (vortex particles)      │
└─────────────────────────────────────────────┘
         │
         ▼
    GitHub Pages (static hosting)
```

## Rendering Model

Astro generates static HTML at build time. React components are loaded only on the client using Astro's `client:only="react"` directive. This means:

- **No SSR** — the site is fully static
- **React hydration** happens per-island (each component with `client:only` hydrates independently)
- **Heavy libraries** (Three.js, tsparticles, simplex-noise) are only loaded in the browser, never during build

### Hydration Directives Used

| Directive | Behavior | Used By |
|-----------|----------|---------|
| `client:only="react"` | Render only on client, skip during SSR | Vortex, TextGenerateEffect, TypewriterEffectSmooth, TechCards, PortifolioCard, SparklesPreview |
| `client:load` | Hydrate on page load | ParallaxSection |

## Data Flow

All data is hardcoded directly in source files. There is no CMS, API, or database.

```
Hardcoded data (in .astro / .tsx files)
        │
        ▼
Component props (inline or mapped from arrays)
        │
        ▼
React components render UI
        │
        ▼
Framer Motion / Canvas handle animations at runtime
```

### Data Locations

| Data | Location | Format |
|------|----------|--------|
| Hero text | `src/pages/index.astro` | Inline strings |
| About me bio | `src/pages/index.astro` | Inline HTML/paragraph |
| Technology cards (stack) | `src/pages/index.astro` | `technologyCards` array |
| Technology skills (23 items) | `src/components/tech-list.tsx` | `technologies` array |
| Portfolio projects (4) | `src/components/card3d.tsx` | `defaultProjects` array |
| Social links | `src/pages/index.astro` | `socialLinks` array |
| Typewriter words | `src/pages/index.astro` | `words` array |

## Page Sections

The single page (`index.astro`) is organized into sequential sections:

1. **Header/Nav** — Fixed navigation bar with logo, menu links, and "Hire Me" CTA
2. **Hero** — Full-screen section with Vortex particle background, name text animation, and typewriter tagline
3. **About** (`#about`) — Bio with profile photo, wrapped in ParallaxSection
4. **TechCards** — Full technology skills grid (23 cards) with expand/collapse
5. **Technologies** (`#technologies`) — Three WobbleCards summarizing Frontend, Backend, DevOps
6. **Portfolio** (`#portfolio`) — Grid of project cards with images
7. **Contact** (`#contact`) — Email, social links, and contact form (non-functional)

## Dependencies Map

```
Core
├── astro (SSG framework)
├── @astrojs/react (React integration)
├── @astrojs/tailwind (Tailwind integration)
└── react + react-dom (UI library)

Animation
├── framer-motion (declarative animations)
├── three + @react-three/fiber + @react-three/drei (3D graphics)
├── @tsparticles/engine + @tsparticles/react + @tsparticles/slim (particle effects)
└── simplex-noise (noise-based particle movement)

UI
├── @radix-ui/react-slot (accessible component primitives)
├── class-variance-authority (variant management for Button)
├── lucide-react (icon library)
├── clsx + tailwind-merge (class name utilities)
└── tailwindcss-animate (animation plugin)
```
