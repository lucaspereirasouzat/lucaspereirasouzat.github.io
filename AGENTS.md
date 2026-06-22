# Portfolio Lucas — AI Context

Personal portfolio site for **Lucas Pereira de Souza**, Senior Full-Stack Developer. Deployed to GitHub Pages.

## Tech Stack

- **Framework:** Astro 5.18 with React 18 integration
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3 with `tailwindcss-animate` plugin
- **UI primitives:** shadcn/ui pattern (Card, Button, Badge via `src/components/ui/`)
- **Animations:** Framer Motion, Three.js (`@react-three/fiber` + `@react-three/drei`), tsparticles
- **Build tool:** Bun (package manager), Vite (via Astro)
- **Icons:** lucide-react
- **Deployment:** GitHub Pages (`lucaspereirasouzat.github.io/lucaspereirasouzat`)

## Commands

```bash
bun dev            # Start dev server
bun run build      # Type-check (astro check) + build
bun run preview    # Preview production build
```

## Directory Structure

```
src/
├── pages/
│   └── index.astro          # Single-page app, all sections defined here
├── layouts/
│   └── Layout.astro         # HTML shell (<html class="dark">)
├── components/
│   ├── ui/                  # shadcn/ui primitives (card, button, badge, sparkles)
│   ├── magicui/             # Animated UI effects (globe, marquee, animated-list, word-rotate)
│   ├── TextGenerative.tsx   # Animated word-by-word text reveal (framer-motion stagger)
│   ├── typewriter-effect.tsx # Typewriter animation with rotating last word
│   ├── vortext.tsx          # Canvas-based particle vortex (simplex-noise)
│   ├── scroll-animation.tsx # Parallax fade-in wrapper (framer-motion whileInView)
│   ├── card3d.tsx           # Portfolio project cards grid
│   ├── tech-list.tsx        # Technology skills grid with expand/collapse
│   ├── infinite-moving-cards.tsx # Infinite scrolling card carousel
│   ├── wobble-card.tsx      # Mouse-tracking tilt card effect
│   └── 3d-card.tsx          # 3D perspective card
├── utils/
│   └── cn.ts                # cn() utility (clsx + tailwind-merge)
└── styles/
    └── global.css           # Tailwind directives + CSS variables (light/dark theme)
```

## Key Conventions

- **Astro islands:** React components use `client:only="react"` for client-side-only rendering (needed for canvas/WebGL/animation libraries)
- **Path alias:** `@/*` maps to `./src/*` (configured in `tsconfig.json` and `astro.config.mjs`)
- **Dark mode first:** `<html class="dark">` in Layout.astro, dark theme is the default
- **Semantic colors:** HSL-based CSS variables (`--background`, `--foreground`, `--primary`, etc.) defined in `src/styles/global.css`
- **Component styling:** Inline Tailwind classes, composed with `cn()` utility for conditional merging
- **No backend:** All content is hardcoded in `.astro` and `.tsx` files — no CMS, no API, no database
- **Content language:** Mixed Portuguese (PT-BR) and English
- **Single page:** The entire site is one Astro page (`index.astro`) with sections: Hero, About, Technologies, Portfolio, Contact

## Adding New Components

1. Create `.tsx` file in `src/components/`
2. Import in `src/pages/index.astro`
3. Use `client:only="react"` directive for any component that uses browser APIs, animations, or WebGL
4. Use `cn()` from `@/utils/cn` for conditional class names
5. Follow the shadcn/ui pattern for new UI primitives (place in `src/components/ui/`)
