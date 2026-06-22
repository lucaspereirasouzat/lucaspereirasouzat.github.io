# Components

## Layout Components

### Layout.astro
**Path:** `src/layouts/Layout.astro`

HTML shell for all pages. Sets `<html class="dark">`, includes meta tags, favicon, and slots for body content.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page `<title>` |

---

## UI Primitives (shadcn/ui)

### Card
**Path:** `src/components/ui/card.tsx`

Exports: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`

All are `forwardRef` div/h3/p elements that accept standard HTML attributes and `className`. Uses semantic color variables (`bg-card`, `text-card-foreground`, etc.).

### Button
**Path:** `src/components/ui/button.tsx`

Variant-based button using `class-variance-authority`.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | Visual style |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | Size |
| `asChild` | `boolean` | Render as child element via Radix Slot |

### Badge
**Path:** `src/components/ui/badge.tsx`

Inline label component.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | Visual style |

### Sparkles
**Path:** `src/components/ui/sparkles.tsx`

Canvas-based sparkle/particle effect using tsparticles. Used internally by `SparklesPreview`.

---

## Animated Components

### TextGenerateEffect
**Path:** `src/components/TextGenerative.tsx`

Reveals text word-by-word with staggered opacity animation using Framer Motion.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `words` | `string` | Text to animate (split by spaces) |
| `className` | `string?` | Optional wrapper class |

**Dependencies:** framer-motion

### TypewriterEffect / TypewriterEffectSmooth
**Path:** `src/components/typewriter-effect.tsx`

Two variants of a typewriter animation:
- **TypewriterEffect** — reveals characters one by one with stagger, supports rotating last word (cycling through `lastOptions` array on an interval)
- **TypewriterEffectSmooth** — reveals entire text with a width-expanding animation plus blinking cursor

**Props (TypewriterEffect):**
| Prop | Type | Description |
|------|------|-------------|
| `words` | `{ text: string; className?: string }[]` | Words to type out |
| `className` | `string?` | Wrapper class |
| `cursorClassName` | `string?` | Cursor element class |
| `lastOptions` | `string[]?` | Rotating options for the last word |
| `intervalMs` | `number?` | Rotation interval (default: 3000ms) |

**Props (TypewriterEffectSmooth):**
| Prop | Type | Description |
|------|------|-------------|
| `words` | `{ text: string; className?: string }[]` | Words to reveal |
| `className` | `string?` | Wrapper class |
| `cursorClassName` | `string?` | Cursor element class |

**Dependencies:** framer-motion

### Vortex
**Path:** `src/components/vortext.tsx`

Full-screen canvas particle effect using simplex noise for organic movement. Renders particles as colored line segments with glow post-processing.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `children` | `any` | Content overlaid on the vortex |
| `className` | `string?` | Class for the content overlay |
| `containerClassName` | `string?` | Class for the outer container |
| `particleCount` | `number?` | Number of particles (default: 700) |
| `rangeY` | `number?` | Vertical spawn range (default: 100) |
| `baseHue` | `number?` | Base color hue 0-360 (default: 220) |
| `baseSpeed` | `number?` | Base particle speed (default: 0.0) |
| `rangeSpeed` | `number?` | Speed variance (default: 1.5) |
| `baseRadius` | `number?` | Base line width (default: 1) |
| `rangeRadius` | `number?` | Line width variance (default: 2) |
| `backgroundColor` | `string?` | Canvas background (default: "#000000") |

**Dependencies:** simplex-noise, framer-motion

### SparklesPreview
**Path:** `src/components/sparkTitle.tsx`

Large title with sparkles/particles underneath. Uses `SparklesCORE` from `ui/sparkles.tsx`.

**Note:** Currently commented out in `index.astro`.

**Dependencies:** @tsparticles/engine, @tsparticles/react

### ParallaxSection
**Path:** `src/components/scroll-animation.tsx`

Generic fade-in-up wrapper triggered on scroll. Animates children from `opacity: 0, y: 32` to `opacity: 1, y: 0` when 20% visible in viewport. Fires once.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Content to animate |

**Dependencies:** framer-motion

---

## Data Display Components

### PortifolioCard
**Path:** `src/components/card3d.tsx`

Grid of project cards with hover effects. Each card shows image, title, description, tags, and links (GitHub/Website).

**Exported types:**
```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  website?: string;
}
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `projects` | `Project[]?` | Projects to display (defaults to 4 built-in projects) |

**Dependencies:** lucide-react

### TechCards
**Path:** `src/components/tech-list.tsx`

Expandable grid of technology skill cards. Shows 6 cards initially with a "Show More" button to reveal all 23. Each card has icon, category badge, description, features, and popularity rating.

**Props:** None (data is hardcoded in the component).

**Dependencies:** framer-motion, lucide-react

### InfiniteMovingCards
**Path:** `src/components/infinite-moving-cards.tsx`

CSS-animated infinite horizontal scrolling carousel of card items.

**Dependencies:** none (pure CSS animation)

---

## Effect Components

### WobbleCard
**Path:** `src/components/wobble-card.tsx`

Card that tilts toward the mouse cursor on hover with a parallax inner layer. Includes a noise texture overlay.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Card content |
| `containerClassName` | `string?` | Outer container class |
| `className` | `string?` | Inner content class |

**Dependencies:** framer-motion

### 3DCard
**Path:** `src/components/3d-card.tsx`

Card with 3D perspective transform on mouse move.

---

## Magic UI Components

### Globe
**Path:** `src/components/magicui/globe.tsx`

Interactive 3D globe visualization using Three.js (`three-globe`).

**Dependencies:** three, three-globe, @react-three/fiber, @react-three/drei

### Marquee
**Path:** `src/components/magicui/marquee.tsx`

Infinite scrolling marquee container. Uses the `marquee` keyframe animation defined in `tailwind.config.mjs`.

### AnimatedList
**Path:** `src/components/magicui/animated-list.tsx`

List where items animate in/out with staggered transitions.

**Dependencies:** framer-motion

### WordRotate
**Path:** `src/components/magicui/word-rotate/word-rotate.tsx`

Cycles through an array of words with a vertical slide animation.

**Dependencies:** framer-motion

---

## Utilities

### cn()
**Path:** `src/utils/cn.ts`

Merges Tailwind CSS classes with conflict resolution.

```typescript
function cn(...inputs: ClassValue[]): string
```

Combines `clsx` (conditional class joining) with `tailwind-merge` (resolves conflicting Tailwind classes, keeping the last one).
