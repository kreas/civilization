# Homepage Landing Page — Design Spec

## Overview

Replace the current root `/` auth page with a marketing landing page for Civilization Tech. Move the existing WorkOS auth to `/login`. The page follows the "Architectural Monolith" design system defined in `design.md` and matches the Stitch mockup at `sources/inspiration/homepage-design.png`.

## Route Changes

- `/` — New marketing landing page (public, no auth)
- `/login/page.tsx` — Existing WorkOS sign-in/sign-up page (moved from root)

## Font Setup

- **Aktiv Grotesk** (headings/display) — loaded via Adobe Fonts (Typekit), project ID `ohv2pqo`. Add the Typekit script to `layout.tsx` head. CSS font-family: `"aktiv-grotesk", sans-serif`.
- **Inter** (body/labels) — loaded via `next/font/google`, exposed as `--font-body`

Typekit embed (add to `<head>` via Next.js `<Script>`):
```html
<script src="https://use.typekit.net/ohv2pqo.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
```

## Color System

Add the design system palette from the Stitch config to `globals.css` as CSS custom properties under `@theme inline`. Key colors:
- `--color-brand-primary`: #001cbf
- `--color-brand-primary-container`: #0028ff
- `--color-brand-on-primary`: #ffffff
- `--color-brand-surface`: #fbf8ff
- `--color-brand-surface-container-low`: #f4f2ff
- `--color-brand-surface-container`: #eeecfc
- `--color-brand-surface-container-high`: #e8e7f6
- `--color-brand-surface-container-highest`: #e2e1f0
- `--color-brand-on-background`: #1a1b26
- `--color-brand-on-surface-variant`: #444557
- `--color-brand-outline-variant`: #c5c5da
- `--color-brand-primary-fixed`: #dfe0ff
- `--color-brand-on-primary-fixed`: #000964

Keep existing ShadCN theme variables intact — the new colors are additive.

## Images

Download the 4 images from the Stitch mockup to `public/images/home/`:
- `hero.jpg` — Architectural building facade
- `case-study-1.jpg` — Circuit board / cybersecurity
- `case-study-2.jpg` — Network data streams
- `case-study-3.jpg` — Sculptural architecture

## Page Structure

### Component Breakdown

All homepage components live in `src/components/home/`:

| Component | File | Description |
|-----------|------|-------------|
| Navbar | `navbar.tsx` | Fixed glassmorphic nav with logo, links, CTA button |
| Hero | `hero.tsx` | Large headline, subtext, full-width grayscale image |
| Services | `services.tsx` | 4 numbered service cards on tonal background |
| SelectedWorks | `selected-works.tsx` | Bento grid: 1 large + 2 stacked case studies |
| CTA | `cta.tsx` | Dark section with headline, buttons, stats card |
| Footer | `footer.tsx` | Simple links footer on surface-container-low |

### Section Details

**Navbar:**
- Fixed top, glassmorphic (`bg-surface/80 backdrop-blur-xl`)
- Logo: "CIVILIZATION" in Space Grotesk semibold
- Nav links: Home, Services, Case Studies, Process, Contact (uppercase, small)
- CTA button: "Get a Quote" with primary-container background
- Hidden nav links on mobile (just logo + CTA)

**Hero:**
- 12-col grid: headline in 8 cols, subtext in 4 cols (aligned bottom)
- Headline: "We build software that contributes." — display size (~7rem on desktop), Space Grotesk semibold, tight tracking
- "contributes." in primary blue
- Subtagline above: "Civilization Tech | Boutique Engineering" in primary, uppercase, tracked
- Full-width image below with grayscale filter, color on hover

**Services:**
- Background: surface-container-low (tonal shift from surface)
- Left column: "Core Services" heading + blue accent bar
- Right column: 2x2 grid of services, each with number (01-04), title, description, "Explore" link
- Numbers: large, low opacity, full opacity on hover

**Selected Works:**
- Bento grid: left 7-col with large case study, right 5-col with two stacked
- Each has overlay gradient with title on hover/always
- Images scale up on hover

**CTA:**
- Dark background (on-background color)
- Left: headline "Ready to build something meaningful?" with "meaningful?" in primary-fixed
- Two buttons: "Start a Project" (filled) + "View Our Process" (outline)
- Right: Stats card with architecture icon, description, 99.9% uptime + 24/7 support
- Decorative skewed blue element in background

**Footer:**
- surface-container-low background
- Logo + copyright left, privacy/terms/social links right

## Testing

Each component gets a `.test.tsx` file testing:
- Renders without crashing
- Key text content is present
- Links have correct href attributes
- Interactive states (hover classes are applied via CSS, not tested)

## Out of Scope

- Mobile hamburger menu (nav links hidden on mobile, just logo + CTA for now)
- Dark mode (light only for initial build)
- Actual page routing for nav links (all `#` for now)
- Image optimization / next/image (use standard img tags matching mockup, can optimize later)
