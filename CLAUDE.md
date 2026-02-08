# AI Starter

## Build & Dev Commands
- `pnpm dev` — Start dev server (Turbopack)
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint
- `pnpm db:generate` — Generate Drizzle migrations
- `pnpm db:migrate` — Run Drizzle migrations
- `pnpm db:push` — Push schema to database
- `pnpm db:studio` — Open Drizzle Studio

## Architecture
- **Framework**: Next.js 15 (App Router, TypeScript, Turbopack)
- **Styling**: Tailwind CSS v4 + ShadCN UI (new-york style, neutral base)
- **Database**: Drizzle ORM + Turso (libsql/SQLite)
- **Storage**: Cloudflare R2 (via AWS SDK v3)
- **Auth**: WorkOS AuthKit
- **AI**: Vercel AI SDK + Anthropic (`@ai-sdk/anthropic`)

## Project Structure
- `src/app/` — Next.js App Router pages and layouts
- `src/db/` — Drizzle schema (`schema.ts`) and client (`index.ts`)
- `src/lib/` — Shared utilities (`utils.ts`, `r2.ts`)
- `src/proxy.ts` — WorkOS auth proxy (Next.js 16 convention, replaces middleware.ts)
- `drizzle.config.ts` — Drizzle Kit configuration
- `drizzle/` — Generated migrations

## Design Inspirations
Before building or modifying any UI (pages, components, layouts), **always read the images in `sources/inspiration/`** first. These are design references that define the visual direction of the app. Match the style, spacing, color usage, and layout patterns found in these inspirations. If no inspiration images exist yet, ask the user for direction.

## Conventions
- Use `src/` directory for all application code
- Import alias: `@/` maps to `src/`
- Use ShadCN components via `pnpm dlx shadcn@latest add <component>`
- Use [AI Elements](https://github.com/vercel/ai-elements) for all AI-related UI (chat, messages, code blocks, reasoning, etc.)
  - Install components: `pnpm dlx shadcn@latest add https://elements.ai-sdk.dev/api/registry/<component>.json`
  - Install all: `pnpm dlx shadcn@latest add https://elements.ai-sdk.dev/api/registry/all.json`
  - Components live in `src/components/ai-elements/`
  - Import pattern: `import { Component } from "@/components/ai-elements/component-name"`
- Database schema lives in `src/db/schema.ts`
- Environment variables in `.env.local` (see `.env.example` for template)
