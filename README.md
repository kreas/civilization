# AI Starter

A Next.js 15 starter template with authentication, database, file storage, and a component library pre-configured.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 + ShadCN UI
- **Database:** Drizzle ORM + Turso (libsql/SQLite)
- **Storage:** Cloudflare R2
- **Auth:** WorkOS AuthKit
- **AI:** Vercel AI SDK + Anthropic

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) package manager
- A [Turso](https://turso.tech/) database
- A [Cloudflare](https://dash.cloudflare.com/) account with an R2 bucket
- A [WorkOS](https://workos.com/) account with AuthKit configured
- An [Anthropic](https://console.anthropic.com/) API key

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy the example env file:

```bash
cp .env.example .env.local
```

Fill in your credentials in `.env.local`:

#### Turso

Create a database at [turso.tech](https://turso.tech), then set:

```
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-token
```

#### Cloudflare R2

Create an R2 bucket and API token in the [Cloudflare dashboard](https://dash.cloudflare.com), then set:

```
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET_NAME=your-bucket
```

#### WorkOS

Create a project at [workos.com](https://workos.com), then set:

```
WORKOS_CLIENT_ID=client_...
WORKOS_API_KEY=sk_test_...
WORKOS_COOKIE_PASSWORD=<generate with: openssl rand -base64 24>
NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
```

Add `http://localhost:3000/callback` as an allowed redirect URI in your WorkOS dashboard under AuthKit > Redirects.

#### Anthropic

Get an API key from the [Anthropic Console](https://console.anthropic.com/), then set:

```
ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Push the database schema

```bash
pnpm db:push
```

### 4. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the landing page with Sign In / Sign Up buttons.

## Scripts

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `pnpm dev`         | Start dev server (Turbopack)     |
| `pnpm build`       | Production build                 |
| `pnpm start`       | Start production server          |
| `pnpm lint`        | Run ESLint                       |
| `pnpm db:generate` | Generate Drizzle migrations      |
| `pnpm db:migrate`  | Run Drizzle migrations           |
| `pnpm db:push`     | Push schema directly to database |
| `pnpm db:studio`   | Open Drizzle Studio              |

## Project Structure

```
src/
├── app/                # Next.js App Router pages and layouts
│   ├── api/chat/       # AI chat API route (streaming)
│   ├── callback/       # WorkOS auth callback route
│   ├── globals.css     # Tailwind + ShadCN theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── db/
│   ├── index.ts        # Drizzle database client
│   └── schema.ts       # Database schema (users table)
├── lib/
│   ├── r2.ts           # Cloudflare R2 helpers
│   └── utils.ts        # ShadCN utility (cn)
└── proxy.ts            # WorkOS auth proxy
```

## Adding ShadCN Components

```bash
pnpm dlx shadcn@latest add button
```

See the [ShadCN docs](https://ui.shadcn.com/) for available components.
