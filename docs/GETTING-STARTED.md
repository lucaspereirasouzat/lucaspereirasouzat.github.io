# Getting Started

## Prerequisites

- [Bun](https://bun.sh/) v1.0+ (recommended) or Node.js v18+
- Git

## Setup

```bash
git clone https://github.com/lucaspereirasouzat/lucaspereirasouzat.git
cd lucaspereirasouzat
bun install
```

## Development

```bash
bun dev
```

Starts the Astro dev server (default: `http://localhost:4321`). Hot reload is enabled for all file changes.

## Build

```bash
bun run build
```

Runs `astro check` (TypeScript validation) followed by `astro build`. Output goes to `dist/`.

## Preview Production Build

```bash
bun run preview
```

Serves the contents of `dist/` locally to verify the production build.

## Deployment

The site is deployed to GitHub Pages via GitHub Actions. The workflow is in `.github/workflows/deploy.yml`.

- **Site URL:** `https://lucaspereirasouzat.github.io`
- **Base path:** `/lucaspereirasouzat`

Push to the deployment branch to trigger a new build and publish.

## Project Structure

```
portifolio-lucas/
├── src/
│   ├── pages/index.astro      # Main page (edit content here)
│   ├── layouts/Layout.astro   # HTML template
│   ├── components/            # React components
│   ├── styles/global.css      # Global styles + CSS variables
│   └── utils/cn.ts            # cn() utility
├── public/                    # Static assets (images, favicon)
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Adding a New Section

1. Create your component in `src/components/`:
   ```tsx
   // src/components/MySection.tsx
   export default function MySection() {
     return <section id="my-section">...</section>
   }
   ```

2. Import and add it to `src/pages/index.astro`:
   ```astro
   ---
   import MySection from "@/components/MySection";
   ---

   <main>
     <!-- existing sections -->
     <MySection client:only="react" />
   </main>
   ```

3. Add a nav link in the header `<nav>` lists:
   ```html
   <li class="hover:text-gray-500">
     <a href="#my-section">My Section</a>
   </li>
   ```

## Adding a New Technology Card

Edit the `technologies` array in `src/components/tech-list.tsx`:

```tsx
{
  name: "New Tech",
  description: "What it does.",
  category: "Frontend",  // must match a key in categoryColors
  icon: Code2,           // import from lucide-react
  color: "bg-blue-500",
  glowColor: "shadow-blue-500/20",
  features: ["Feature 1", "Feature 2"],
  popularity: "★★★★☆",
}
```

## Adding a New Portfolio Project

Edit the `defaultProjects` array in `src/components/card3d.tsx`:

```tsx
{
  title: "Project Name",
  description: "Short description.",
  image: "https://...",  // image URL
  tags: ["React", "Node.js"],
  github: "https://github.com/...",
  website: "https://...",
}
```

## Key Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Site URL, base path, integrations (React, Tailwind) |
| `tailwind.config.mjs` | Theme extension, colors, animations, plugins |
| `tsconfig.json` | Path aliases (`@/*`), strict mode, ESNext target |
| `components.json` | shadcn/ui component configuration |
| `postcss.config.cjs` | PostCSS plugins (Tailwind) |
