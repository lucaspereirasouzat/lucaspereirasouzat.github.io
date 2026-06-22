# Styling

## Tailwind CSS Setup

Tailwind CSS is integrated via the `@astrojs/tailwind` plugin and configured in `tailwind.config.mjs`.

**Config highlights:**
- **Dark mode:** Class-based (`darkMode: ['class']`) — toggled by adding/removing `dark` class on `<html>`
- **Content scanning:** `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- **Plugin:** `tailwindcss-animate` for additional animation utilities
- **PostCSS:** Configured in `postcss.config.cjs`

## Semantic Color System

Colors are defined as HSL CSS variables in `src/styles/global.css`, following the shadcn/ui convention. Each color has a base and a foreground variant.

### Light Theme (`:root`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `0 0% 100%` | Page background |
| `--foreground` | `0 0% 3.9%` | Default text |
| `--primary` | `0 0% 9%` | Primary actions |
| `--secondary` | `0 0% 96.1%` | Secondary elements |
| `--muted` | `0 0% 96.1%` | Subdued backgrounds |
| `--accent` | `0 0% 96.1%` | Accent elements |
| `--destructive` | `0 84.2% 60.2%` | Error/danger states |
| `--border` | `0 0% 89.8%` | Borders |
| `--ring` | `0 0% 3.9%` | Focus rings |
| `--radius` | `0.5rem` | Border radius base |

### Dark Theme (`.dark`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `0 0% 3.9%` | Near-black page background |
| `--foreground` | `0 0% 98%` | Near-white text |
| `--primary` | `0 0% 98%` | Light primary actions |
| `--secondary` | `0 0% 14.9%` | Dark secondary elements |
| `--muted` | `0 0% 14.9%` | Dark subdued backgrounds |
| `--accent` | `0 0% 14.9%` | Dark accent elements |
| `--destructive` | `0 62.8% 30.6%` | Muted error/danger |
| `--border` | `0 0% 14.9%` | Dark borders |
| `--ring` | `0 0% 83.1%` | Light focus rings |

### Chart Colors

Five chart colors are defined for data visualization, with separate palettes for light and dark themes.

### Tailwind Mapping

Variables are mapped to Tailwind utility classes in `tailwind.config.mjs`:

```js
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
  primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
  // ... etc
}
```

This allows usage like `bg-background`, `text-foreground`, `bg-card`, `text-primary`, etc.

## Dark Mode

The site defaults to dark mode. The `dark` class is set on `<html>` in `Layout.astro`:

```html
<html class="dark" lang="en">
```

There is no light/dark toggle in the UI. To switch to light mode, remove the `dark` class.

## Custom Animations

### Marquee (Tailwind Config)

Defined as keyframes in `tailwind.config.mjs`:

```js
animation: {
  marquee: 'marquee var(--duration) linear infinite',
  'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
}
keyframes: {
  marquee: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
  },
  'marquee-vertical': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(calc(-100% - var(--gap)))' },
  },
}
```

### Global CSS Styles

In `src/styles/global.css`:
- `main` — centered, white text, 20px base font
- `h1` — 4rem, bold, centered
- `.text-gradient` — gradient text effect using `--accent-gradient`
- `.instructions` — styled instruction box with accent borders

### Base Layer Resets

```css
@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
```

## Styling Patterns

### Inline Tailwind Classes

Most components use inline Tailwind classes directly:

```tsx
<div className="rounded-lg border bg-card text-card-foreground shadow-sm" />
```

### cn() Utility

For conditional or merged classes, use the `cn()` utility:

```tsx
import { cn } from "@/utils/cn";

<div className={cn("relative h-full w-full", props.containerClassName)} />
```

`cn()` uses `clsx` for conditional joining and `tailwind-merge` for conflict resolution:

```tsx
cn("px-4 py-2", "px-6")  // → "py-2 px-6" (px-6 wins)
cn("text-red-500", isActive && "text-blue-500")  // conditional
```

### Gradient Text

Common pattern for heading effects:

```tsx
className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
```

### Card Hover Effects

Cards use Tailwind `group` + `group-hover` for hover-triggered transforms:

```tsx
<Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
  <div className="group-hover:scale-110 transition-transform duration-300">
```
