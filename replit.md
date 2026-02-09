# MatrixLab Research Lab Website

## Overview

MatrixLab is a non-profit AI research lab website built as a full-stack TypeScript application. The project showcases research publications, projects, team members, and news for an academic research organization focused on reinforcement learning, LLM agents, and multiagent systems. The site features a modern, responsive design with light/dark theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark modes)
- **Animations**: Framer Motion for page transitions and interactive elements
- **Typography**: Inter (sans-serif) and JetBrains Mono (monospace) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful JSON API with `/api/*` endpoints
- **Data Storage**: Currently uses in-memory storage (`MemStorage` class) with Drizzle ORM schema defined for PostgreSQL migration
- **Build System**: Custom esbuild script for production bundling with Vite for frontend

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components and shadcn/ui
    pages/        # Route-based page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client setup
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data layer (in-memory with interface for DB)
  vite.ts         # Vite dev server integration
shared/           # Shared types and schemas
  schema.ts       # Drizzle schema and TypeScript interfaces
```

### Data Layer Design
- **Schema**: Drizzle ORM with PostgreSQL dialect configured
- **Validation**: Zod schemas derived from Drizzle schemas via drizzle-zod
- **Current Implementation**: In-memory storage with sample data for publications, projects, team members, and news
- **Database Ready**: Schema and configuration prepared for PostgreSQL via `DATABASE_URL` environment variable

### API Endpoints
- `GET /api/publications` - List all research publications
- `GET /api/publications/:id` - Get single publication
- `GET /api/projects` - List all research projects
- `GET /api/projects/:id` - Get single project
- `GET /api/team` - List team members
- `GET /api/team/:id` - Get single team member
- `GET /api/news` - List news items
- `GET /api/news/:id` - Get single news item
- `POST /api/contact` - Submit contact form

## External Dependencies

### Core Services
- **PostgreSQL**: Database (configured via Drizzle, requires `DATABASE_URL` environment variable)
- **Google Fonts**: Inter and JetBrains Mono font loading

### Key npm Packages
- **UI**: @radix-ui/* primitives, shadcn/ui components, lucide-react icons, react-icons
- **Forms**: react-hook-form with @hookform/resolvers and zod validation
- **Data**: @tanstack/react-query, drizzle-orm, drizzle-zod
- **Server**: express, connect-pg-simple for sessions
- **Build**: vite, esbuild, tsx for TypeScript execution

### Development Tools
- **Replit Plugins**: @replit/vite-plugin-runtime-error-modal, cartographer, dev-banner
- **Database Tooling**: drizzle-kit for migrations (`npm run db:push`)