# Geiger UAW Campaign

[![[cloudflarebutton]]](https://workers.cloudflare.com)

A full-stack Cloudflare Workers application with React frontend, powered by Durable Objects for stateful data management. Features a modern UI with shadcn/ui components, Tailwind CSS, and a robust backend API for entities like users and chat boards.

## Features

- **Full-Stack TypeScript**: Shared types between frontend and Workers backend.
- **Durable Objects**: Multi-tenant entity storage (e.g., Users, ChatBoards) with indexes for listing.
- **Modern React UI**: Vite + React 18 + Router + TanStack Query + shadcn/ui.
- **Responsive Design**: Tailwind CSS with dark mode, animations, and glassmorphism effects.
- **API-First Backend**: Hono router with CORS, authentication-ready, and error handling.
- **Development Tools**: Hot reload, type generation, linting, and Bun support.
- **Production-Ready**: Cloudflare deployment, observability, and SQLite-backed Durable Objects.
- **Entity Management**: CRUD operations with pagination, seeding, and concurrent-safe mutations.

## Tech Stack

- **Frontend**: React 18, Vite, React Router, TanStack Query, shadcn/ui, Tailwind CSS, Lucide Icons, Sonner (toasts), Framer Motion.
- **Backend**: Cloudflare Workers, Hono, Durable Objects (SQLite).
- **Data**: Shared TypeScript types, IndexedEntity pattern for scalable storage.
- **Dev Tools**: Bun, TypeScript 5, ESLint, Wrangler.
- **UI/UX**: Radix UI primitives, class-variance-authority (cva), clsx, tailwind-merge.

## Quick Start

1. **Clone & Install**:
   ```bash
   git clone <your-repo>
   cd geiger-uaw-campaign-o6rf5zotaa1fbxlabsgtd
   bun install
   ```

2. **Run Locally**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

3. **Generate Worker Types** (if needed):
   ```bash
   bun run cf-typegen
   ```

## Local Development

- **Frontend**: `bun dev` – Vite dev server with HMR.
- **Backend**: Automatically runs via Workers simulation.
- **API Endpoints**: Test at `/api/health`, `/api/users`, `/api/chats`, etc.
- **Theme Toggle**: Dark/light mode with persistence.
- **Error Reporting**: Client errors logged to console.
- **Linting**: `bun lint`.

Edit `src/pages/HomePage.tsx` for your app UI, `worker/entities.ts` for data models, and `worker/user-routes.ts` for API routes.

### Project Structure

```
├── src/              # React frontend
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities, API client
│   └── pages/        # Route components
├── shared/           # Shared types & mock data
├── worker/           # Cloudflare Workers backend
│   ├── entities.ts   # Durable Object entities
│   └── user-routes.ts # Custom API routes
├── tailwind.config.js # Theme & animations
└── wrangler.jsonc    # Workers config
```

## API Usage Examples

```typescript
// Frontend API client
import { api } from '@/lib/api-client';

// List users
const { items: users, next } = await api<{ items: User[]; next: string | null }>('/api/users?limit=10');

// Create chat
const chat = await api<Chat>('/api/chats', {
  method: 'POST',
  body: JSON.stringify({ title: 'New Chat' })
});

// Send message
const message = await api<ChatMessage>('/api/chats/${chatId}/messages', {
  method: 'POST',
  body: JSON.stringify({ userId: 'u1', text: 'Hello!' })
});
```

## Deployment

Deploy to Cloudflare Workers with one command:

```bash
bun run deploy
```

Or manually:

1. Login: `wrangler login`
2. Deploy: `wrangler deploy`

**Custom Domain**: Update `wrangler.jsonc` and `wrangler deploy --name <name>`.

**Preview**: `wrangler deploy --name preview-${git-branch}`.

[![[cloudflarebutton]]](https://workers.cloudflare.com)

## Customization

- **UI Components**: Add via `bunx shadcn-ui@latest add <component>`.
- **Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
- **Routes**: Add to `worker/user-routes.ts`.
- **Theme**: Edit `tailwind.config.js` and `src/index.css`.

## Contributing

1. Fork & clone.
2. `bun install`.
3. Make changes.
4. Test locally: `bun dev`.
5. PR to `main`.

## License

MIT. See [LICENSE](LICENSE) for details.

---

⭐ **Built with [Cloudflare Workers](https://workers.cloudflare.com) + [shadcn/ui](https://ui.shadcn.com)**