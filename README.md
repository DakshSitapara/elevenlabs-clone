<div align="center">

# ElevenLabs Clone

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, full-featured text-to-speech application with AI voice cloning capabilities. Built with Next.js 15, featuring real-time audio generation, custom voice creation, and a beautiful responsive UI.

[Live Demo](https://github.com/DakshSitapara/elevenlabs-clone) • [Report Bug](https://github.com/DakshSitapara/elevenlabs-clone/issues) • [Request Feature](https://github.com/DakshSitapara/elevenlabs-clone/issues)

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core Functionality

- **Text-to-Speech Generation** - Convert text to lifelike speech using AI-powered voices
- **Voice Cloning** - Create custom voices by uploading or recording audio samples
- **Voice Library** - Browse and manage built-in and custom voices
- **Multi-Language Support** - Support for 100+ languages with flag indicators
- **Voice Categories** - Organize voices by use case (Audiobook, Podcast, Advertising, etc.)

### User Experience

- **Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile
- **Real-time Audio Preview** - Listen to voices before generating
- **Quick Actions** - Pre-built templates for common use cases
- **Generation History** - Track and replay past generations
- **Dark Mode Ready** - Built with theming support

### Developer Experience

- **Type-Safe API** - Full TypeScript with tRPC for end-to-end type safety
- **Modern Stack** - Built with Next.js 15 App Router and React Server Components
- **Component Library** - Pre-built UI components using shadcn/ui
- **Optimized Performance** - React Query for efficient data fetching and caching

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **Authentication** | Clerk |
| **Database** | PostgreSQL with Prisma ORM |
| **Storage** | Cloudflare R2 (S3-compatible) |
| **API Layer** | tRPC v11 |
| **State Management** | TanStack Query (React Query) |
| **Form Handling** | TanStack Form |
| **Audio Processing** | Web Audio API, music-metadata |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Cloudflare R2 account (or any S3-compatible storage)
- Clerk account for authentication

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/DakshSitapara/elevenlabs-clone.git
cd elevenlabs-clone
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/elevenlabs

# Cloudflare R2 Storage
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=your_bucket_name
R2_REGION=auto
R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com

# Chatterbox API (for TTS generation)
CHATTERBOX_API_URL=https://api.chatterbox.com
CHATTERBOX_API_KEY=your_api_key

# App Configuration
APP_URL=http://localhost:3000

# Polar (Optional - for billing)
POLAR_ACCESS_TOKEN=your_polar_token
POLAR_SERVER=sandbox
POLAR_PRODUCT_ID=your_product_id
```

4. **Run database migrations**

```bash
npx prisma migrate dev
```

5. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `R2_ACCOUNT_ID` | Cloudflare R2 account ID | Yes |
| `R2_ACCESS_KEY_ID` | R2 access key | Yes |
| `R2_SECRET_ACCESS_KEY` | R2 secret key | Yes |
| `R2_BUCKET_NAME` | R2 bucket name | Yes |
| `CHATTERBOX_API_URL` | TTS generation API URL | Yes |
| `CHATTERBOX_API_KEY` | TTS generation API key | Yes |
| `APP_URL` | Application base URL | Yes |
| `POLAR_ACCESS_TOKEN` | Polar billing token | Optional |

---

## Project Structure

```
elevenlabs-clone/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (dashboard)/          # Dashboard layout and pages
│   │   │   ├── text-to-speech/   # TTS generation page
│   │   │   ├── voices/           # Voice library page
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── api/                  # API routes
│   │   │   ├── audio/            # Audio streaming endpoint
│   │   │   ├── voices/           # Voice creation endpoint
│   │   │   └── trpc/             # tRPC handler
│   │   ├── sign-in/              # Sign-in page
│   │   └── sign-up/              # Sign-up page
│   ├── components/              # Shared UI components
│   │   └── ui/                   # shadcn/ui components
│   ├── features/                # Feature-specific modules
│   │   ├── dashboard/            # Dashboard components
│   │   ├── text-to-speech/       # TTS feature
│   │   └── voices/               # Voice management
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility libraries
│   │   ├── db.ts                 # Prisma client
│   │   ├── r2.ts                 # R2 storage client
│   │   └── env.ts                # Environment validation
│   └── trpc/                     # tRPC setup
│       ├── client.tsx            # tRPC client
│       ├── server.tsx            # tRPC server
│       └── routers/              # API routers
├── prisma/                       # Database schema
│   └── schema.prisma
└── public/                       # Static assets
```

---

## API Routes

### tRPC Endpoints

#### `voices.getAll`
Fetch all voices (custom and system) for the organization.

```typescript
const { data } = await trpc.voices.getAll.query({ query: "search term" });
```

#### `voices.delete`
Delete a custom voice.

```typescript
await trpc.voices.delete.mutate({ id: "voice-id" });
```

#### `generations.create`
Generate audio from text.

```typescript
await trpc.generations.create.mutate({
  text: "Hello world",
  voiceId: "voice-id",
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
});
```

#### `generations.getAll`
Fetch all generations for the organization.

#### `generations.getById`
Fetch a specific generation by ID.

### REST Endpoints

#### `POST /api/voices/create`
Create a new custom voice.

#### `GET /api/audio/[generationId]`
Stream generated audio.

---

## Voice Categories

The application supports the following voice categories:

- **Audiobook** - Long-form narration
- **Conversational** - Natural dialogue
- **Customer Service** - Professional assistance
- **General** - Versatile everyday use
- **Narrative** - Storytelling
- **Characters** - Fictional character voices
- **Meditation** - Calming, soothing tones
- **Motivational** - Inspiring and energetic
- **Podcast** - Engaging host voices
- **Advertising** - Promotional content
- **Voiceover** - Professional narration
- **Corporate** - Business presentations

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [tRPC](https://trpc.io/) - End-to-end typesafe APIs
- [Clerk](https://clerk.com/) - Authentication
- [Cloudflare R2](https://developers.cloudflare.com/r2/) - Object storage

---

<div align="center">

Made with ❤️ by [Daksh Sitapara](https://github.com/DakshSitapara)

[![GitHub followers](https://img.shields.io/github/followers/DakshSitapara?style=social)](https://github.com/DakshSitapara)
[![GitHub stars](https://img.shields.io/github/stars/DakshSitapara/elevenlabs-clone?style=social)](https://github.com/DakshSitapara/elevenlabs-clone)

</div>
