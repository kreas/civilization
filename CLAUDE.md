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
- `pnpm test` — Run tests (Vitest)
- `pnpm test:watch` — Run tests in watch mode

## Architecture

- **Framework**: Next.js 15 (App Router, TypeScript, Turbopack)
- **Styling**: Tailwind CSS v4 + ShadCN UI (new-york style, neutral base)
- **Database**: Drizzle ORM + Turso (libsql/SQLite)
- **Storage**: Cloudflare R2 (via AWS SDK v3)
- **Auth**: WorkOS AuthKit
- **AI**: Vercel AI SDK + Anthropic (`@ai-sdk/anthropic`)
- **Data Fetching**: TanStack Query (`@tanstack/react-query`)
- **Testing**: Vitest + React Testing Library

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

## Data Fetching

- **Use TanStack Query for all client-side API calls.** Do not use server actions.
- Use `useQuery` for GET requests (reading data)
- Use `useMutation` for POST/PUT/DELETE requests (writing data), with `queryClient.invalidateQueries` to refresh related data after mutations
- API routes live in `src/app/api/` and return JSON — TanStack Query calls these via `fetch`
- The `QueryClientProvider` is already set up in `src/components/providers.tsx`

## Testing

- **Every component must have a test file.** When creating or modifying a component, always create or update a corresponding `.test.tsx` file alongside it.
- Test files live next to the code they test: `ComponentName.tsx` → `ComponentName.test.tsx`
- Use React Testing Library for component tests — test behavior and user interactions, not implementation details
- Use `vitest` directly for utility/logic tests
- Run `pnpm test` to verify all tests pass before committing

## Agent Teams

Agent teams are enabled for this project. When working as a team:

- **File ownership**: Each teammate should own distinct files — never have two teammates editing the same file
- **Task sizing**: Break work into self-contained units that produce a clear deliverable (a component, a route, a test file)
- **Recommended team structures**:
  - **Feature work**: one teammate per layer (frontend component, API route, tests)
  - **Code review**: split reviewers by concern (security, performance, test coverage)
  - **Debugging**: assign competing hypotheses to different teammates
- **All teammates must follow project conventions**: this CLAUDE.md applies to every teammate, including design inspirations, testing requirements, and commit practices
- **Run tests before reporting done**: teammates should run `pnpm test` and `pnpm build` to verify their work before marking tasks complete
