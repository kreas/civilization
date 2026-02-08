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

## Project Structure
- `src/app/` — Next.js App Router pages and layouts
- `src/db/` — Drizzle schema (`schema.ts`) and client (`index.ts`)
- `src/lib/` — Shared utilities (`utils.ts`, `r2.ts`)
- `src/middleware.ts` — WorkOS auth middleware
- `drizzle.config.ts` — Drizzle Kit configuration
- `drizzle/` — Generated migrations

## Conventions
- Use `src/` directory for all application code
- Import alias: `@/` maps to `src/`
- Use ShadCN components via `pnpm dlx shadcn@latest add <component>`
- Database schema lives in `src/db/schema.ts`
- Environment variables in `.env.local` (see `.env.example` for template)
